import {create} from "zustand";

export const loginStore = create((set) => ({
    storege: [],
    isLogined : sessionStorage.getItem('login'),
    storegeFn: function (type,data) {
        let info = '';
        let isLogin = false;
        switch (type) {
            case 'login': 
                info = sessionStorage.setItem('login', JSON.stringify(data));
                isLogin = true;
                break;
            case 'logout': 
                info = sessionStorage.removeItem('login');
                isLogin = false;
                break;
        }
            
            
            set({
                storege : info,
                isLogined : isLogin
            })
        
        
    }
}))