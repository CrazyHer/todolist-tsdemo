/* md5: 6daf5c9e65929bcf586a8813faf8ab71 */
/* Rap仓库id: 276124 */
/* Rapper版本: 1.1.6 */
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

/**
 * 本文件由 Rapper 同步 Rap 平台接口，自动生成，请勿修改
 * Rap仓库 地址: http://rap2.taobao.org/repository/editor?id=276124
 */

import * as commonLib from 'rap/runtime/commonLib'
import * as reduxLib from 'rap/runtime/reduxLib'
import {RequestTypes} from './redux'

export interface IModels {
  /**
   * 接口名：getlist
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276124&mod=436710&itf=1860141
   */
  'GET/todo/getlist': {
    Req: {}
    Res: {
      code: number
      message: string
      data: {
        id: number
        /**
         * todo内容
         */
        content: string
        /**
         * todo状态，-1表示已完成，0表示未完成，1表示收藏
         */
        status: number
      }[]
    }
  }

  /**
   * 接口名：addtodo
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276124&mod=436710&itf=1860143
   */
  'PUT/todo': {
    Req: {
      /**
       * todo内容
       */
      content: string
    }
    Res: {
      code: number
      message: string
    }
  }

  /**
   * 接口名：rmtodo
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276124&mod=436710&itf=1860149
   */
  'POST/todo/del': {
    Req: {
      /**
       * todo ID
       */
      id: number
    }
    Res: {
      code: number
      message: string
    }
  }

  /**
   * 接口名：finish
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276124&mod=436710&itf=1860156
   */
  'POST/todo/finish': {
    Req: {
      id: number
    }
    Res: {
      code: number
      message: string
    }
  }

  /**
   * 接口名：star
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276124&mod=436710&itf=1860160
   */
  'POST/todo/star': {
    Req: {
      id: number
    }
    Res: {
      code: number
      message: string
    }
  }

  /**
   * 接口名：unstar
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276124&mod=436710&itf=1860725
   */
  'POST/todo/unstar': {
    Req: {
      id: number
    }
    Res: {
      code: number
      message: string
    }
  }
}

type ResSelector<T> = T

export interface IResponseTypes {
  'GET/todo/getlist': ResSelector<IModels['GET/todo/getlist']['Res']>
  'PUT/todo': ResSelector<IModels['PUT/todo']['Res']>
  'POST/todo/del': ResSelector<IModels['POST/todo/del']['Res']>
  'POST/todo/finish': ResSelector<IModels['POST/todo/finish']['Res']>
  'POST/todo/star': ResSelector<IModels['POST/todo/star']['Res']>
  'POST/todo/unstar': ResSelector<IModels['POST/todo/unstar']['Res']>
}

export function createFetch(fetchConfig: commonLib.RequesterOption, extraConfig?: {fetchType?: commonLib.FetchType}) {
  if (!extraConfig || !extraConfig.fetchType) {
    console.warn(
      'Rapper Warning: createFetch API will be deprecated, if you want to customize fetch, please use overrideFetch instead, since new API guarantees better type consistency during frontend lifespan. See detail https://www.yuque.com/rap/rapper/overridefetch'
    )
  }
  const rapperFetch = commonLib.getRapperRequest(fetchConfig)
  const sendRapperFetch = (modelName: keyof typeof RequestTypes, requestParams: commonLib.IUserFetchParams) => {
    const {extra} = requestParams
    if (extra && extra.type === 'normal') {
      return rapperFetch(requestParams)
    } else {
      const action = {
        type: '$$RAPPER_REQUEST',
        payload: {...requestParams, modelName, types: RequestTypes[modelName]},
      }
      return reduxLib.dispatchAction(action, rapperFetch)
    }
  }

  return {
    /**
     * 接口名：getlist
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=276124&mod=436710&itf=1860141
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/todo/getlist': (req?: IModels['GET/todo/getlist']['Req'], extra?: commonLib.IExtra) => {
      return sendRapperFetch('GET/todo/getlist', {
        url: '/todo/getlist',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/todo/getlist']>
    },

    /**
     * 接口名：addtodo
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=276124&mod=436710&itf=1860143
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'PUT/todo': (req?: IModels['PUT/todo']['Req'], extra?: commonLib.IExtra) => {
      return sendRapperFetch('PUT/todo', {
        url: '/todo',
        method: 'PUT',
        params: req,
        extra,
      }) as Promise<IResponseTypes['PUT/todo']>
    },

    /**
     * 接口名：rmtodo
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=276124&mod=436710&itf=1860149
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/todo/del': (req?: IModels['POST/todo/del']['Req'], extra?: commonLib.IExtra) => {
      return sendRapperFetch('POST/todo/del', {
        url: '/todo/del',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/todo/del']>
    },

    /**
     * 接口名：finish
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=276124&mod=436710&itf=1860156
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/todo/finish': (req?: IModels['POST/todo/finish']['Req'], extra?: commonLib.IExtra) => {
      return sendRapperFetch('POST/todo/finish', {
        url: '/todo/finish',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/todo/finish']>
    },

    /**
     * 接口名：star
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=276124&mod=436710&itf=1860160
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/todo/star': (req?: IModels['POST/todo/star']['Req'], extra?: commonLib.IExtra) => {
      return sendRapperFetch('POST/todo/star', {
        url: '/todo/star',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/todo/star']>
    },

    /**
     * 接口名：unstar
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=276124&mod=436710&itf=1860725
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/todo/unstar': (req?: IModels['POST/todo/unstar']['Req'], extra?: commonLib.IExtra) => {
      return sendRapperFetch('POST/todo/unstar', {
        url: '/todo/unstar',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/todo/unstar']>
    },
  }
}
