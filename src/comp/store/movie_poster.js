import axios from "axios";
import { create } from "zustand";

const request = axios.create({
    baseURL: 'http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2',
    timeout: 10000,
})

export const useStore4 = create((set) => ({
    posterUrl: [],
    dataFetch4: async function (name, date) {
        try {
            let arrUrl = [];
            for (let i = 0; i < name.length; i++) {
                const req = await request.get(``, {
                    params: {
                        ServiceKey: '75FBKQRZBS1W0A4G30YO',
                        title: name[i],
                        releaseDts: date[i]
                    },
                });
                let url = req.data.Data[0].Result[0].posters.split('|')[0];
                arrUrl.push(url)
            }

            set({
                posterUrl: arrUrl
            })
        }
        catch (error) {
            console.log(error, "에러발생")
        }
    }
}))