import { AxiosResponse } from 'axios';
import { hoge } from '../../../client/hoge';
import { emitter } from '../../../../emitter';

/**
 * カウントを取得するAPIという想定
 * メソッド別で関数を用意するでよい気がする
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
    .catch(error => {
      // エラーを起こした時にemitするなら、emitしないとか他の方法なら不要
      emitter.emit();
    });

export { repoCount };
