import { AxiosResponse } from 'axios';
import { hoge } from '../../../client/hoge';

/**
 * カウントを取得するAPIという想定
 *
 * @param {Request} request - リクエストの内容
 * @return Promise<AxiosResponse | void> - レスポンスがあるならAxiosResponseを、エラーレスポンスか例外処理ならvoidを返す
 */
const repoCount = (request: Request): Promise<AxiosResponse | void> =>
  hoge
    .post('/api/count', request)
    .then(response => {
      if (response.status >= 400) {
        return Promise.reject(new Error('count error'));
      }
    })
    .catch({});

export { repoCount };
