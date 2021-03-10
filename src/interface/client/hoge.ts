/**
 * ここでドメイン別でリクエストのインスタンス作成
 */
import axios from 'axios';

// hogeインスタンスの作成
const hoge = axios.create({
  baseURL: '/',
});

// 共通のリクエスト処理
// Add a request interceptor
hoge.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// 共通のレスポンス処理
// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export { hoge };
