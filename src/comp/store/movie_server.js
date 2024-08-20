import axios from "axios";
import {create} from "zustand";
const request = axios.create({
    baseURL : "/movies"
})

export const movie_server = create((set)=>({
    title:[],
    getMovie : async function(){
        let movie_name = '';
        try{
            const req = await request.get('/');
            console.log(req,"서버");
            // set({
            //     posterUrl : arrUrl
            // })
        }
        catch(error){
            console.log(error,"에러발생")
        }
    }
}))