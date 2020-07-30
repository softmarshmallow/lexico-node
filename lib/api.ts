import Axios from 'axios';
import { LexicoResponse } from './models';


const LEXICO_API_BASE_URL = "https://od-api.oxforddictionaries.com/api/v2/";


const language_code = "en-us"

class LexicoApi {
    private static axios = Axios.create({
        baseURL: LEXICO_API_BASE_URL,
        headers: {
            "app_id": undefined,
            "app_key": undefined
        }
    });

    static async init(credential: {
        appId: string,
        appKey: string
    }) {
        LexicoApi.axios.defaults.headers.common["app_id"] = credential.appId;
        LexicoApi.axios.defaults.headers.common["app_key"] = credential.appKey;
    }
    static async entries(t: string): Promise<LexicoResponse> {
        const resp = await LexicoApi.axios.get<LexicoResponse>(`/entries/${language_code}/${t.toLowerCase()}`, {},);
        return resp.data;
    }

    static async search(q: string) {
        const resp = await LexicoApi.axios.get<LexicoResponse>(`/search/${language_code}/`, {
            params: {
                q: q
            }
        });
        return resp.data;
    }
}

export {
    LexicoApi
}