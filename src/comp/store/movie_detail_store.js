import axios from "axios";
import { create } from "zustand";


const request = axios.create({
    baseURL: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie',
    timeout: 10000
})

export const useStore2 = create((set) => ({
    detail: [],
    dataFetch2: async function () {
        try {
            const req = await request.get(`searchMovieInfo.json`, {
                params: {
                    key: '5bea18fec1efcc230d0c21aae406eb26',
                    movieCd: 20224666,
                },
            });
            // console.log(req.data.movieInfoResult.movieInfo);
            // const res = req.data.boxOfficeResult.dailyBoxOfficeList;
            // let rank = res.map((item)=>(item.rank));
            // let movie_name=res.map((item)=>(item.movieNm));
            set({
                // dailyBoxOffice : movie_name,
                // dailyRank : rank
            })
        }
        catch (error) {
            console.log(error, "에러발생")
        }
    }
}))