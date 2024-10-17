import axios from "axios";
import { create } from "zustand";


const request = axios.create({
    baseURL: 'https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie',
    timeout: 10000
})

export const useStore2 = create((set) => ({
    detail: {
    },
    dataFetch2: async function (movieCode) {
        try {
            const req = await request.get(`searchMovieInfo.json`, {
                params: {
                    key: process.env.NEXT_PUBLIC_MOVIE_SERVICEKEY,
                    movieCd: movieCode, //이걸 보고 영화 가져오는거임
                },
            });
            console.log(req.data.movieInfoResult.movieInfo, 'asdasdasd');
            const detailMv = req.data.movieInfoResult.movieInfo;
            //영화이름
            //영문이름
            //장르
            //개봉일 상영시간 12세이상 출연진 감독 제작사 
            // const res = req.data.boxOfficeResult.dailyBoxOfficeList;
            // let rank = res.map((item)=>(item.rank));
            // let movie_name=res.map((item)=>(item.movieNm));
            set({
                detail: {
                    MvName: detailMv.movieNm || '',
                    MvEnName: detailMv.movieNmEn || '',
                    genre: detailMv.genres || '',
                    MvDate: detailMv.openDt || '',
                    MvTime: detailMv.showTm || '',
                    MvAge: detailMv.audits[0].watchGradeNm,
                    MvActor: detailMv.actors?.map((obj) => obj.peopleNm) || '',
                    MvDirector: detailMv.directors?.[0]?.peopleNm || '',
                    MvComp: detailMv.companys[0].companyNm || ''
                }
                // detail.MvName : detailMv.movieNm
                // dailyBoxOffice : movie_name,
                // dailyRank : rank
            })
        }
        catch (error) {
            console.log(error, "에러발생")
        }
    }
}))