import { AxiosAdapter } from 'axios';
import { repoCount } from './index';
import { mock } from '../../../mock';
import { emitter } from '../../../../emitter';

// おまじない
// mockをパスで指定する
jest.mock('../../../mock', () => ({
  __esModule: true,
  mock: jest.fn(),
}));
const axiosMockAdapter = (mock as unknown) as jest.Mock<ReturnType<AxiosAdapter>, Parameters<AxiosAdapter>>;
// おまじないここまで

const request: Request = {};

const response = {
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
  data: {
    count: '1234',
  },
};

describe('APIのテスト', () => {
  beforeEach(() => axiosMockAdapter.mockClear());

  it('正常系', async () => {
    axiosMockAdapter.mockResolvedValueOnce(response);
    const result = await repoCount(request);
    if (result) expect(result.data).toStrictEqual({ count: '1234' });
  });

  it('異常系', async () => {
    axiosMockAdapter.mockRejectedValueOnce(new Error('Network Error'));
    await repoCount(request);
    emitter.on('failed', event => {
      expect(event.errorType).toEqual('failed');
    });
  });
});
