import * as cheerio from "cheerio";
import Axios from "axios"

const axios = Axios.create({
    baseURL: "https://www.lexico.com/definition"
});

// remove this to enable logging

const SELECTOR_TOKEN = 'header > h2 > span'
const SELECTOR_PRONOUNSE = ".phoneticspelling"
const SELECTOR_AUDIO = "h3 > a.speaker > audio"
const SELECTOR_DEFINITIONS_BY_POS_SECTIONS = "div.lex-container > div.main-content section.gramb"

async function scrap(params: { token: string }) {
    const r = await axios.get(`/${params.token}`)
    const raw = r.data

    const doc = cheerio.load(raw)


    // token, a word
    const token = doc(SELECTOR_TOKEN).text()
    // console.log("token >> ", token)

    const pronounse = doc(SELECTOR_PRONOUNSE).text()
    // console.log("pronounse >> ", pronounse)

    const audio = doc(SELECTOR_AUDIO).attr('src')
    // console.log("audio >> ", audio)

    const senses = []
    // loop through pos sections
    doc(SELECTOR_DEFINITIONS_BY_POS_SECTIONS).each((i, s) => {
        const section = cheerio.load(s)

        // part of speech
        const pos = section("h3 > span").text()
        // console.log("pos >> ", pos)

        // senses
        section("section > ul > li").each((i, s) => {
            // console.log(" ============= ")
            const sense = cheerio.load(s)
            // short definition

            const num = sense("div > p > span.iteration").text()
            // console.log("num >> ", num)

            const senseRegion = sense("div > p > span.sense-regions").text()
            // console.log("senseRegion >> ", senseRegion)

            const domainLabels = sense("div > p > span.domain_labels").text()
            // console.log("domainLabels >> ", domainLabels)

            const grammaticalNote = sense("div > p > span.grammatical_note").text()
            // console.log("grammaticalNote >> ", grammaticalNote)

            const senseRegisters = sense("div > p > span.sense-registers").text()
            // console.log("senseRegisters >> ", senseRegisters)

            const def = sense("div > p > span.ind").text()
            // console.log("def >> ", def)

            // // primaryExample
            const primaryExample = sense('div.exg > div > em').text()
            // console.log("primaryExample >> ", primaryExample)

            // // examples
            const examples = sense('div.examples > div.exg > ul')
                .find('li > em')
                .toArray()
                .map(element => cheerio(element).text());
            // console.log("examplesNodes >> ", examples)

            // synonyms
            const synonyms = sense("div.synonyms > div.exg > div").text()
            // console.log("synonyms >> ", synonyms)


            const senseResult = {
                num: num,
                senseRegion: senseRegion,
                domainLabels: domainLabels,
                grammaticalNote: grammaticalNote,
                senseRegisters: senseRegisters,
                def: def,
                primaryExample: primaryExample,
                examples: examples,
                synonyms: synonyms,
                pos: pos
            }
            senses.push(senseResult)
            // TODO support subsense

        })
    })



    // origin description
    const origin = doc(`#content > div.lex-container > div.main-content > div > div > div > div > section.etymology.etym > div > p`).text()
    // console.log("origin >> ", origin)


    return {
        token: token,
        senses: senses,
        origin: origin,
        pronounse: pronounse,
        audio: audio
    }
}

export {
    scrap
}