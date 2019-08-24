import Axios, { AxiosRequestConfig } from 'axios';
import { stringify } from 'qs';

import { HttpMethod, RestResponse } from '../types';

import urljoin = require('url-join');

export interface RequestOptions {
  url: string;
  method: HttpMethod;
  data: { [attr: string]: any };
  accessToken?: string;
}

export async function request(options: RequestOptions): Promise<RestResponse> {
  const config: AxiosRequestConfig = {
    method: options.method,
  };
  if (options.accessToken) {
    options.data['access_token'] = options.accessToken;
  }

  let query = '';
  if (options.method !== HttpMethod.GET) {
    config.data = options.data;
  } else {
    query = Object.keys(options.data).length !== 0 ? `?${stringify(options.data)}` : '';
  }

  const url = urljoin(options.url, query);

  try {
    const response = await Axios(url, config);

    return { body: response.data };
  } catch (error) {
    return {
      body: {},
      error: error.response.data.error,
    };
  }
}
