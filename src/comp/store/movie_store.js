import axios from "axios";
import { create } from "zustand";


const request = axios.create({
    baseURL: 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice',
    timeout: 10000
})

export const useStore = create((set) => ({
    dailyBoxOffice: [],
    dailyRank: [],
    movieCode: [],
    movieDate: [],
    dataFetch: async function (date) {
        try {
            const req = await request.get(`/searchDailyBoxOfficeList.json`, {
                params: {
                    key: '5bea18fec1efcc230d0c21aae406eb26',
                    targetDt: date,
                },
            });
            const res = req.data.boxOfficeResult.dailyBoxOfficeList;
            let rank = res.map((item) => (item.rank));
            let movie_name = res.map((item) => (item.movieNm));
            let movie_code = res.map((item) => (item.movieCd));
            let openDate = res.map((item) => (item.openDt.replace(/-/g, '')));
            console.log(res)
            set({
                dailyBoxOffice: movie_name,
                dailyRank: rank,
                movieCode: movie_code,
                movieDate: openDate
            })
        }
        catch (error) {
            console.log(error, "에러발생")
        }
    }
}))