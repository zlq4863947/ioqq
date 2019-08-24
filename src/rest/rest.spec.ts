import { Rest } from './rest';

describe('Rest', () => {
  let rest: Rest;

  beforeAll(() => {
    rest = new Rest('http://127.0.0.1:5700');
  });

  it('should send message to qq group', async () => {
    const res = await rest.sendGroupMessage(814067625, `测试的消息,t=${Date.now()}`);
    expect(res).toBeDefined();
    expect(res.error).toBeUndefined();
    expect(res.status).toEqual('ok');
  });

  it('should send message to qq friend', async () => {
    const res = await rest.sendPrivateMessage(123453, `测试的消息,t=${Date.now()}`);
    expect(res).toBeDefined();
    expect(res.error).toBeUndefined();
    expect(res.status).toEqual('ok');
  });

  it('should get qq group list info', async () => {
    const res = await rest.getGroupList();
    expect(res).toBeDefined();
    expect(res.error).toBeUndefined();
    expect(res.status).toEqual('ok');
  });
});
