import axios from "axios";
import { create } from "zustand";
const request = axios.create({
    baseURL: "/user"
})

export const user = create((set) => ({
    userData: [],
    userTable: async function (type, data) {
        try {
            let req = '';
            switch (type) {
                case 'get': req = await request.get('/');
                    break;
                case 'post': await request.post('/', data)
                case 'delete': await request.delete(`/${data}`)
            }

            set((state) => {

                if (type == 'delete') {
                    req.data = state.req.filter(obj => obj.id != data)
                }

                return { userData: req.data }
            })
        }
        catch (error) {
            console.log(error, "에러발생")
        }
    }
}))