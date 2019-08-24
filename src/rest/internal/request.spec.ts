import { HttpMethod } from '../types';
import { RequestOptions, request } from './request';

describe('request function', () => {
  it('should request http', async () => {
    const options: RequestOptions = {
      url: 'http://127.0.0.1:5700/send_group_msg',
      method: HttpMethod.GET,
      data: {
        group_id: 814067625,
        message: `测试的消息,t=${Date.now()}`,
      },
    };
    const res = await request(options);
    expect(res).toBeDefined();
    expect(res.error).toBeUndefined();
  });
});
