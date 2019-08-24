import { request } from './internal';
import { Endpoints, HttpMethod, RestGroupListResponse, RestMessageResponse } from './types';

export class Rest {
  constructor(private readonly url: string, private readonly accessToken?: string) {}

  /**
   * 向qq群发送消息
   * @param groudId Q群号
   * @param message 发送信息
   */
  async sendGroupMessage(groudId: number, message: string): Promise<RestMessageResponse> {
    const res = await request({
      url: `${this.url}/${Endpoints.SendGroupMsg}`,
      method: HttpMethod.GET,
      data: {
        group_id: groudId,
        message,
      },
      accessToken: this.accessToken,
    });

    return {
      ...res.body,
      error: res.error,
    } as RestMessageResponse;
  }

  /**
   * 向qq好友发送消息
   * @param userId 好友qq号
   * @param message 发送信息
   */
  async sendPrivateMessage(userId: number, message: string): Promise<RestMessageResponse> {
    const res = await request({
      url: `${this.url}/${Endpoints.SendPrivateMsg}`,
      method: HttpMethod.GET,
      data: {
        user_id: userId,
        message,
      },
      accessToken: this.accessToken,
    });

    return {
      ...res.body,
      error: res.error,
    } as RestMessageResponse;
  }

  /**
   * 获取qq群列表
   */
  async getGroupList(): Promise<RestGroupListResponse> {
    const res = await request({
      url: `${this.url}/${Endpoints.GetGroupList}`,
      method: HttpMethod.GET,
      data: {},
      accessToken: this.accessToken,
    });

    return {
      ...res.body,
      error: res.error,
    } as RestGroupListResponse;
  }
}
