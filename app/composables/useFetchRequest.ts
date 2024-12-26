interface RequestOptions {
  [keu: string]: any
}

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

// 请求拦截器
function handleRequest(options: RequestOptions) {
  options.headers = {
    ...options.headers,
    'Content-Type': 'application/json',
  }
}

function handleResponse(response: any) {
  if (response.error) {
    throw new Error(response.error.message || 'Response Error')
  }

  return response
}

// 创建请求方法

function createFetchRequest(method: HttpMethod) {
  return async function (url: string, data?: any, options: RequestOptions = {}) {
    const {
      public: {
        API_BASE_DEV,
        API_BASE_PROD,
      },
    } = useRuntimeConfig()

    // eslint-disable-next-line node/prefer-global/process
    const baseURL = process.env.NODE_ENV === 'production' ? API_BASE_PROD : API_BASE_DEV

    const requestUrl = new URL(url, options.customBaseURL || baseURL).toString()

    return useFetch(requestUrl, { ...options, method, body: data, onRequest: handleRequest, onResponse: handleResponse })
  }
}

export const useFetchGet = createFetchRequest('GET')

export const useFetchPost = createFetchRequest('POST')

export const useFetchPut = createFetchRequest('PUT')

export const useFetchDelete = createFetchRequest('DELETE')
