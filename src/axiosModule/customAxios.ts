import axios, {AxiosInstance} from 'axios';
import {Platform} from 'react-native';

export const customAxios: AxiosInstance = axios.create({
  baseURL:
    Platform.OS === 'android'
      ? 'http://10.0.2.2:8080'
      : 'http://localhost:8080', // 기본 서버 주소 - temp
  headers: {},
});
