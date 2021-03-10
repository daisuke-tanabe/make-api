/**
 * jestでテストするなら必要
 */
import { AxiosAdapter } from 'axios';

const mock = (undefined as unknown) as AxiosAdapter;

export { mock };
