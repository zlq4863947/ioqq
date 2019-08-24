export interface ErrorResponse {
  error?: Error;
}

export interface RestResponse extends ErrorResponse {
  body: { [attr: string]: any };
}

export interface RestCQResponse extends ErrorResponse {
  retcode: number;
  status: CqStatus;
}

export type CqStatus = 'ok' | 'async' | 'failed';

export interface RestMessageResponse extends RestCQResponse {
  data: {
    message_id: number;
  };
}

export interface CqGroupInfo {
  group_id: number;
  group_name: string;
}

export interface RestGroupListResponse extends RestCQResponse {
  data: CqGroupInfo[];
}
