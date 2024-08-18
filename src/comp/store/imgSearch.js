import axios from "axios";
import {create} from "zustand";

const request = axios.create({
    baseURL : 'https://dapi.kakao.com/v2/search/image',
    timeout : 10000,
    headers : {
        Authorization: `KakaoAK 677857e74b7fdcabd56bf0158381fc72`
    }
})

export const useStore3 = create((set)=>({
    imgUrl:[],
    dataFetch3 : async function(dailyBoxOffice){
        try{
            // console.log(dailyBoxOffice)
            let movieName = [];
            let url =[];
            for(let i=0;i<dailyBoxOffice.length;i++){
                movieName.push(dailyBoxOffice[i])
            }
            for(let i=0;i<movieName.length;i++){
                const req = await request.get('',{
                    params: {
                        query: `${movieName[i]} poster`, // 검색할 쿼리를 전달합니다.
                        sort: 'accuracy', // 정렬 기준 (accuracy 또는 recency)
                        page: 1, // 페이지 번호
                        size: 1 // 한 페이지에 보여질 이미지 수
                    }
                });
                url.push(req.data.documents[0].thumbnail_url);
                // console.log(req.data.documents[0])
            }
            
            set({ 
                imgUrl : url
            })
        }
        catch(error){
            console.log(error,"에러발생")
        }
    }
}))