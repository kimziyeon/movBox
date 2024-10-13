import { create } from "zustand";

export const loginStore = create((set) => ({
  storege: [],
  isLogined: typeof window !== 'undefined' ? sessionStorage.getItem('login') : false,
  
  storegeFn: (type, data) => {
    if (typeof window !== 'undefined') { // 브라우저 환경 체크
      let isLogin = false;

      switch (type) {
        case 'login': 
          sessionStorage.setItem('login', JSON.stringify(data));
          isLogin = true;
          break;
        case 'logout': 
          sessionStorage.removeItem('login');
          isLogin = false;
          break;
      }

      set({
        storege: data, // info 대신 data를 직접 설정
        isLogined: isLogin,
      });
    }
  }
}));
