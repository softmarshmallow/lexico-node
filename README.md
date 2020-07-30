# Lexico Node Api
Unofficial lexico api for node, written in ts.


## for testing. (do not use for commercial usage, only for testing purpose)
```typescript
import { scrap } from "lexico-node"
scrap({
    token: "abash"
}).then((r) => {
    console.log(r)
});

/// logs
/*
{
  token: 'abash',
  senses: [
    {
      num: '',
      senseRegion: '',
      domainLabels: '',
      grammaticalNote: '',
      senseRegisters: '',
      def: 'Make (someone) feel embarrassed, disconcerted, or ashamed.',
      primaryExample: '‘if anything was officially done or said to him, it did not abash him’',
      examples: [Array],
      synonyms: '',
      pos: 'verb'
    }
  ],
  origin: 'Middle English from Anglo-Norman French abaiss-; compare with Old French esbaiss-, lengthened stem of esbair, from es- ‘utterly’ + bair ‘astound’.',
  pronounse: '/əˈbaʃ/',
  audio: 'https://lex-audio.useremarkable.com/mp3/abash_gb_1.mp3'
}

*/
```

## the actual api usage with app id, and app key
```typescript
import { LexicoApi } from "lexico-node"
LexicoApi.init({
    appId: "~",
    appKey: "~"
})

LexicoApi.search("abash")
```