import axios from "axios";
import { create } from "zustand";


const request = axios.create({
    baseURL: 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice',
    timeout: 10000
})

export const useStore = create((set) => ({
    dailyBoxOffice: [],
    dailyRank: [],
    movieCode: [],
    movieDate: [],
    movieAcc: [],
    dataFetch: async function (date) {
        try {
            const req = await request.get(`/searchDailyBoxOfficeList.json`, {
                params: {
                    key: process.env.NEXT_PUBLIC_MOVIE_SERVICEKEY,
                    targetDt: date,
                },
            });
            const res = req.data.boxOfficeResult.dailyBoxOfficeList;
            let rank = res.map((item) => (item.rank));
            let movie_name = res.map((item) => (item.movieNm));
            let movie_code = res.map((item) => (item.movieCd));
            let openDate = res.map((item) => (item.openDt));
            let movie_acc = res.map((item) => (item.audiAcc.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')));
            // movie_acc 관객누적수 = 12345 -> 12,345(3자리 수마다 콤마를 추가) 
            // console.log(res)
            set({
                dailyBoxOffice: movie_name,
                dailyRank: rank,
                movieCode: movie_code,
                movieDate: openDate,
                movieAcc: movie_acc
            })
        }
        catch (error) {
            console.log(error, "에러발생")
        }
    }
}))