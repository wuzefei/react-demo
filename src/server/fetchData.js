import axios from 'axios'
import publicPath from '../../path.json'

export const getData = (config) =>{
    let _url = publicPath.path+config.url;
    return (
        axios.get(`${_url}`)
    )
}
export const postData = (config) =>{
    let _url = publicPath.path+config.url;
    return (
        axios.post(`${_url}`,config.data)
    )
}