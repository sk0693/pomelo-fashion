import axios, { AxiosResponse } from 'axios';


export default class HttpClient {

    constructor() {}

    async get(url: string) {
        const axiosResponse: AxiosResponse = await axios.get(url);
        return axiosResponse.data;
    }

}