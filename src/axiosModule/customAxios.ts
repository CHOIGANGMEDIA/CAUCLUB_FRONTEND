import axios, {AxiosInstance} from 'axios';

export const customAxios: AxiosInstance = axios.create({
  baseURL: 'http://10.0.2.2:8080/', // 기본 서버 주소 - temp
  headers: {},
});
