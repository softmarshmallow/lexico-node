
interface LexicoResponse {
    id: string
    metadata: {
        operation: string
        provider: string
        schema: string
    }
    results: {
        id: string
        language: string
        lexicalEntries: {
            derivatives: {
                id: string
                text: string
            }[]
            entries: LexicoEntry[]
            language: string
            lexicalCategory: string
            text: string
        }[]
        type: string
        word: string
    }[]
    word: string
}


interface LexicoEntry {
    etymologies: string[]
    grammaticalFeatures: LexicoGrammaticalFeature[]
    pronunciations: LexicoPronounce[]
    senses: LexicoSense[]
}

interface LexicoGrammaticalFeature {
    id: string
    text: string
    type: string
}

interface LexicoPronounce {
    dialects: string[]
    phoneticNotation: string
    phoneticSpelling: string
}

interface LexicoSense {
    id: string
    definitions: string[]
    examples: string[]
    shortDefinitions: string
}


export {
    LexicoResponse
}