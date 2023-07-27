var url = "http://localhost:3001"
import axios from 'axios';

export const httpGet = async (endpoint: string): Promise<Response | any> => {
    return await axios.get (url + '/' + endpoint, {
        method: 'GET',
        headers: {'content-type': 'application/jason; charset=UTF-8'}
    }) 
    .then((response) => response.data)
    .then ((data)=> data)
    .catch((err)=> err)
}

export const httpPost = async (endpoint: string, json: any): Promise <any | any> => {
    return await axios.post(url + '/' + endpoint, json).then((response) => response.data).then ((data)=> data).catch((err)=> err);
}