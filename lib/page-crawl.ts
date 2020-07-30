import { DEMO_PAGE } from "./test";

import * as cheerio from "cheerio";
import Axios from "axios"

const axios = Axios.create({
    baseURL: "https://www.lexico.com/definition"
});

const inT = "swish"

const SELECTOR_TOKEN = 'header > h2 > span'


async function parse() {

    const r = await axios.get(`/${inT}`)
    const raw = r.data

    const doc = cheerio.load(raw)
    // console.log(doc)
    const token = doc(SELECTOR_TOKEN).text()
    // #content > div.lex-container > div.main-content > div > div > div > div > section:nth-child(3) > h3 > span
    const pos = doc('#content > div.lex-container > div.main-content > div > div > div > div > section.gramb > h3 > span').text()
    const shortDef = doc('#content > div.lex-container > div.main-content > div > div > div > div > section.gramb > ul > li > div > p').text()
    const ex1 = doc('#content > div.lex-container > div.main-content > div > div > div > div > section.gramb > ul > li > div > div.exg > div > em').text()

    const examplesNodes = doc('#content > div.lex-container > div.main-content > div > div > div > div > section.gramb > ul > li > div > div.examples > div.exg > ul')
        .find('li > em')
        .toArray()
        .map(element => cheerio(element).text());

    const origin = doc(`#content > div.lex-container > div.main-content > div > div > div > div > section.etymology.etym > div > p`).text()

    console.log(token)
    console.log(pos)
    console.log(shortDef)
    console.log(ex1)

    console.log(examplesNodes)
    console.log(origin)
}


parse();