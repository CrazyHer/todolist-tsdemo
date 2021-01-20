/* md5: 9bca73b7d68e8870cd96779ddf43f018 */
/* Rap仓库id: 276124 */
/* Rapper版本: 1.1.6 */
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

/**
 * 本文件由 Rapper 同步 Rap 平台接口，自动生成，请勿修改
 * Rap仓库 地址: http://rap2.taobao.org/repository/editor?id=276124
 */

import {useSelector} from 'react-redux'
import {IModels, IResponseTypes} from './request'
import * as reduxLib from 'rap/runtime/reduxLib'
import {fetch} from './index'

/** 请求types */
export const RequestTypes = {
  'GET/todo/getlist': ['GET/todo/getlist_REQUEST', 'GET/todo/getlist_SUCCESS', 'GET/todo/getlist_FAILURE'],

  'PUT/todo': ['PUT/todo_REQUEST', 'PUT/todo_SUCCESS', 'PUT/todo_FAILURE'],

  'DELETE/todo': ['DELETE/todo_REQUEST', 'DELETE/todo_SUCCESS', 'DELETE/todo_FAILURE'],

  'POST/todo/finish': ['POST/todo/finish_REQUEST', 'POST/todo/finish_SUCCESS', 'POST/todo/finish_FAILURE'],

  'POST/todo/star': ['POST/todo/star_REQUEST', 'POST/todo/star_SUCCESS', 'POST/todo/star_FAILURE'],

  'POST/todo/unstar': ['POST/todo/unstar_REQUEST', 'POST/todo/unstar_SUCCESS', 'POST/todo/unstar_FAILURE'],
}

/** store中存储的数据结构 */
interface IRapperStore {
  'GET/todo/getlist': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['GET/todo/getlist']['Req']
      response: IResponseTypes['GET/todo/getlist']
    }
  >

  'PUT/todo': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['PUT/todo']['Req']
      response: IResponseTypes['PUT/todo']
    }
  >

  'DELETE/todo': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['DELETE/todo']['Req']
      response: IResponseTypes['DELETE/todo']
    }
  >

  'POST/todo/finish': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['POST/todo/finish']['Req']
      response: IResponseTypes['POST/todo/finish']
    }
  >

  'POST/todo/star': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['POST/todo/star']['Req']
      response: IResponseTypes['POST/todo/star']
    }
  >

  'POST/todo/unstar': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['POST/todo/unstar']['Req']
      response: IResponseTypes['POST/todo/unstar']
    }
  >
}
export type TRapperStoreKey = keyof IRapperStore

export const useResponse = {
  /**
   * 接口名：getlist
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276124&mod=436710&itf=1860141
   */
  'GET/todo/getlist': function useData(
    filter?:
      | {request?: IModels['GET/todo/getlist']['Req']}
      | {(storeData: IRapperStore['GET/todo/getlist'][0]): boolean}
  ) {
    type Req = IModels['GET/todo/getlist']['Req']
    type Item = IRapperStore['GET/todo/getlist'][0]
    type Res = IResponseTypes['GET/todo/getlist']
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>('GET/todo/getlist', filter)
  },

  /**
   * 接口名：addtodo
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276124&mod=436710&itf=1860143
   */
  'PUT/todo': function useData(
    filter?: {request?: IModels['PUT/todo']['Req']} | {(storeData: IRapperStore['PUT/todo'][0]): boolean}
  ) {
    type Req = IModels['PUT/todo']['Req']
    type Item = IRapperStore['PUT/todo'][0]
    type Res = IResponseTypes['PUT/todo']
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>('PUT/todo', filter)
  },

  /**
   * 接口名：rmtodo
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276124&mod=436710&itf=1860149
   */
  'DELETE/todo': function useData(
    filter?: {request?: IModels['DELETE/todo']['Req']} | {(storeData: IRapperStore['DELETE/todo'][0]): boolean}
  ) {
    type Req = IModels['DELETE/todo']['Req']
    type Item = IRapperStore['DELETE/todo'][0]
    type Res = IResponseTypes['DELETE/todo']
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>('DELETE/todo', filter)
  },

  /**
   * 接口名：finish
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276124&mod=436710&itf=1860156
   */
  'POST/todo/finish': function useData(
    filter?:
      | {request?: IModels['POST/todo/finish']['Req']}
      | {(storeData: IRapperStore['POST/todo/finish'][0]): boolean}
  ) {
    type Req = IModels['POST/todo/finish']['Req']
    type Item = IRapperStore['POST/todo/finish'][0]
    type Res = IResponseTypes['POST/todo/finish']
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>('POST/todo/finish', filter)
  },

  /**
   * 接口名：star
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276124&mod=436710&itf=1860160
   */
  'POST/todo/star': function useData(
    filter?: {request?: IModels['POST/todo/star']['Req']} | {(storeData: IRapperStore['POST/todo/star'][0]): boolean}
  ) {
    type Req = IModels['POST/todo/star']['Req']
    type Item = IRapperStore['POST/todo/star'][0]
    type Res = IResponseTypes['POST/todo/star']
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>('POST/todo/star', filter)
  },

  /**
   * 接口名：unstar
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276124&mod=436710&itf=1860725
   */
  'POST/todo/unstar': function useData(
    filter?:
      | {request?: IModels['POST/todo/unstar']['Req']}
      | {(storeData: IRapperStore['POST/todo/unstar'][0]): boolean}
  ) {
    type Req = IModels['POST/todo/unstar']['Req']
    type Item = IRapperStore['POST/todo/unstar'][0]
    type Res = IResponseTypes['POST/todo/unstar']
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>('POST/todo/unstar', filter)
  },
}

export const useAPI = {
  /**
   * 接口名：getlist
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276124&mod=436710&itf=1860141
   */
  'GET/todo/getlist': function useData(
    requestParams?: IModels['GET/todo/getlist']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['GET/todo/getlist']['Req']>
  ) {
    type Req = IModels['GET/todo/getlist']['Req']
    type Res = IResponseTypes['GET/todo/getlist']
    type IFetcher = typeof fetch['GET/todo/getlist']
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'GET/todo/getlist',
      fetcher: fetch['GET/todo/getlist'],
      requestParams,
      extra,
    })
  },

  /**
   * 接口名：addtodo
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276124&mod=436710&itf=1860143
   */
  'PUT/todo': function useData(
    requestParams?: IModels['PUT/todo']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['PUT/todo']['Req']>
  ) {
    type Req = IModels['PUT/todo']['Req']
    type Res = IResponseTypes['PUT/todo']
    type IFetcher = typeof fetch['PUT/todo']
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'PUT/todo',
      fetcher: fetch['PUT/todo'],
      requestParams,
      extra,
    })
  },

  /**
   * 接口名：rmtodo
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276124&mod=436710&itf=1860149
   */
  'DELETE/todo': function useData(
    requestParams?: IModels['DELETE/todo']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['DELETE/todo']['Req']>
  ) {
    type Req = IModels['DELETE/todo']['Req']
    type Res = IResponseTypes['DELETE/todo']
    type IFetcher = typeof fetch['DELETE/todo']
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'DELETE/todo',
      fetcher: fetch['DELETE/todo'],
      requestParams,
      extra,
    })
  },

  /**
   * 接口名：finish
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276124&mod=436710&itf=1860156
   */
  'POST/todo/finish': function useData(
    requestParams?: IModels['POST/todo/finish']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['POST/todo/finish']['Req']>
  ) {
    type Req = IModels['POST/todo/finish']['Req']
    type Res = IResponseTypes['POST/todo/finish']
    type IFetcher = typeof fetch['POST/todo/finish']
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'POST/todo/finish',
      fetcher: fetch['POST/todo/finish'],
      requestParams,
      extra,
    })
  },

  /**
   * 接口名：star
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276124&mod=436710&itf=1860160
   */
  'POST/todo/star': function useData(
    requestParams?: IModels['POST/todo/star']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['POST/todo/star']['Req']>
  ) {
    type Req = IModels['POST/todo/star']['Req']
    type Res = IResponseTypes['POST/todo/star']
    type IFetcher = typeof fetch['POST/todo/star']
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'POST/todo/star',
      fetcher: fetch['POST/todo/star'],
      requestParams,
      extra,
    })
  },

  /**
   * 接口名：unstar
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276124&mod=436710&itf=1860725
   */
  'POST/todo/unstar': function useData(
    requestParams?: IModels['POST/todo/unstar']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['POST/todo/unstar']['Req']>
  ) {
    type Req = IModels['POST/todo/unstar']['Req']
    type Res = IResponseTypes['POST/todo/unstar']
    type IFetcher = typeof fetch['POST/todo/unstar']
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'POST/todo/unstar',
      fetcher: fetch['POST/todo/unstar'],
      requestParams,
      extra,
    })
  },
}

export const useAllResponse = {
  /**
   * 接口名：getlist
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276124&mod=436710&itf=1860141
   */
  'GET/todo/getlist': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState = (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/todo/getlist']) || []
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['GET/todo/getlist']['Req']
        response?: IResponseTypes['GET/todo/getlist']
      }
      return selectedState as Array<TReturnItem>
    })
  },

  /**
   * 接口名：addtodo
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276124&mod=436710&itf=1860143
   */
  'PUT/todo': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState = (state['$$rapperResponseData'] && state['$$rapperResponseData']['PUT/todo']) || []
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['PUT/todo']['Req']
        response?: IResponseTypes['PUT/todo']
      }
      return selectedState as Array<TReturnItem>
    })
  },

  /**
   * 接口名：rmtodo
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276124&mod=436710&itf=1860149
   */
  'DELETE/todo': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState = (state['$$rapperResponseData'] && state['$$rapperResponseData']['DELETE/todo']) || []
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['DELETE/todo']['Req']
        response?: IResponseTypes['DELETE/todo']
      }
      return selectedState as Array<TReturnItem>
    })
  },

  /**
   * 接口名：finish
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276124&mod=436710&itf=1860156
   */
  'POST/todo/finish': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState = (state['$$rapperResponseData'] && state['$$rapperResponseData']['POST/todo/finish']) || []
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['POST/todo/finish']['Req']
        response?: IResponseTypes['POST/todo/finish']
      }
      return selectedState as Array<TReturnItem>
    })
  },

  /**
   * 接口名：star
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276124&mod=436710&itf=1860160
   */
  'POST/todo/star': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState = (state['$$rapperResponseData'] && state['$$rapperResponseData']['POST/todo/star']) || []
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['POST/todo/star']['Req']
        response?: IResponseTypes['POST/todo/star']
      }
      return selectedState as Array<TReturnItem>
    })
  },

  /**
   * 接口名：unstar
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276124&mod=436710&itf=1860725
   */
  'POST/todo/unstar': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState = (state['$$rapperResponseData'] && state['$$rapperResponseData']['POST/todo/unstar']) || []
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['POST/todo/unstar']['Req']
        response?: IResponseTypes['POST/todo/unstar']
      }
      return selectedState as Array<TReturnItem>
    })
  },
}

/** 重置接口数据 */
export const clearResponseCache = {
  /**
   * 接口名：getlist
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276124&mod=436710&itf=1860141
   */
  'GET/todo/getlist': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/todo/getlist': undefined},
    })
  },

  /**
   * 接口名：addtodo
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276124&mod=436710&itf=1860143
   */
  'PUT/todo': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'PUT/todo': undefined},
    })
  },

  /**
   * 接口名：rmtodo
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276124&mod=436710&itf=1860149
   */
  'DELETE/todo': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'DELETE/todo': undefined},
    })
  },

  /**
   * 接口名：finish
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276124&mod=436710&itf=1860156
   */
  'POST/todo/finish': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'POST/todo/finish': undefined},
    })
  },

  /**
   * 接口名：star
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276124&mod=436710&itf=1860160
   */
  'POST/todo/star': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'POST/todo/star': undefined},
    })
  },

  /**
   * 接口名：unstar
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276124&mod=436710&itf=1860725
   */
  'POST/todo/unstar': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'POST/todo/unstar': undefined},
    })
  },
}

export const rapperBaseSelector = {
  'GET/todo/getlist': (
    state: reduxLib.IState,
    filter?:
      | {request?: IModels['GET/todo/getlist']['Req']}
      | {(storeData: IRapperStore['GET/todo/getlist'][0]): boolean}
  ) => {
    type Req = IModels['GET/todo/getlist']['Req']
    type Res = IResponseTypes['GET/todo/getlist']
    type Item = IRapperStore['GET/todo/getlist'][0]
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(state, 'GET/todo/getlist', filter)
  },
  'PUT/todo': (
    state: reduxLib.IState,
    filter?: {request?: IModels['PUT/todo']['Req']} | {(storeData: IRapperStore['PUT/todo'][0]): boolean}
  ) => {
    type Req = IModels['PUT/todo']['Req']
    type Res = IResponseTypes['PUT/todo']
    type Item = IRapperStore['PUT/todo'][0]
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(state, 'PUT/todo', filter)
  },
  'DELETE/todo': (
    state: reduxLib.IState,
    filter?: {request?: IModels['DELETE/todo']['Req']} | {(storeData: IRapperStore['DELETE/todo'][0]): boolean}
  ) => {
    type Req = IModels['DELETE/todo']['Req']
    type Res = IResponseTypes['DELETE/todo']
    type Item = IRapperStore['DELETE/todo'][0]
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(state, 'DELETE/todo', filter)
  },
  'POST/todo/finish': (
    state: reduxLib.IState,
    filter?:
      | {request?: IModels['POST/todo/finish']['Req']}
      | {(storeData: IRapperStore['POST/todo/finish'][0]): boolean}
  ) => {
    type Req = IModels['POST/todo/finish']['Req']
    type Res = IResponseTypes['POST/todo/finish']
    type Item = IRapperStore['POST/todo/finish'][0]
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(state, 'POST/todo/finish', filter)
  },
  'POST/todo/star': (
    state: reduxLib.IState,
    filter?: {request?: IModels['POST/todo/star']['Req']} | {(storeData: IRapperStore['POST/todo/star'][0]): boolean}
  ) => {
    type Req = IModels['POST/todo/star']['Req']
    type Res = IResponseTypes['POST/todo/star']
    type Item = IRapperStore['POST/todo/star'][0]
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(state, 'POST/todo/star', filter)
  },
  'POST/todo/unstar': (
    state: reduxLib.IState,
    filter?:
      | {request?: IModels['POST/todo/unstar']['Req']}
      | {(storeData: IRapperStore['POST/todo/unstar'][0]): boolean}
  ) => {
    type Req = IModels['POST/todo/unstar']['Req']
    type Res = IResponseTypes['POST/todo/unstar']
    type Item = IRapperStore['POST/todo/unstar'][0]
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(state, 'POST/todo/unstar', filter)
  },
}

export const rapperDataSelector = {
  'GET/todo/getlist': (state: reduxLib.IState) => {
    type Res = IResponseTypes['GET/todo/getlist']
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'GET/todo/getlist')
  },
  'PUT/todo': (state: reduxLib.IState) => {
    type Res = IResponseTypes['PUT/todo']
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'PUT/todo')
  },
  'DELETE/todo': (state: reduxLib.IState) => {
    type Res = IResponseTypes['DELETE/todo']
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'DELETE/todo')
  },
  'POST/todo/finish': (state: reduxLib.IState) => {
    type Res = IResponseTypes['POST/todo/finish']
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'POST/todo/finish')
  },
  'POST/todo/star': (state: reduxLib.IState) => {
    type Res = IResponseTypes['POST/todo/star']
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'POST/todo/star')
  },
  'POST/todo/unstar': (state: reduxLib.IState) => {
    type Res = IResponseTypes['POST/todo/unstar']
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'POST/todo/unstar')
  },
}

export const rapperActions = RequestTypes || []
