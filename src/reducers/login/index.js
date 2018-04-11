
const initialState = {
    loginIn:[],
    loginOut:[],
}
const login = (state ,action) =>{
    if(!state){
        state = initialState;
    }
    switch (action.type){
        /**
         * 登录
         */
        case "LOGIN_IN":
            //复制一份state的副本,对state不进行修改,而是返回一份副本
            let cloneState = state;
            cloneState.loginIn.push(action.data);
            return {
                ...cloneState,
            };
        /**
         * 登出
         */
        case "LOGIN_OUT":

        default:
            return state;
    }
    debugger;
}

export default login;