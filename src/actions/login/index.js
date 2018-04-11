import { postData } from '../../server/fetchData'
//保存登录信息
const saveLoginIn = (data) =>{
    return {
        type:"LOGIN_IN",
        data
    }
}
//处理登出
const saveLoginOut = (data) =>{
    return {
        type:"LOGIN_OUT",
        data
    }
}

export const loginIn = (payload) => async(dispatch,getstate)=>{
    try{
        let response = await postData(payload);
        await dispatch(saveLoginIn(response.data));
    }catch(error){
        console.log(error);
    }
}
export const loginOut = (payload) => async(dispatch,getstate)=>{
    try{
        let response = await postData(payload);
        await dispatch(saveLoginOut(response.data));
    }catch(error){
        console.log(error);
    }
}
