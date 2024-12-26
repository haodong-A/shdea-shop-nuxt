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
    ElMessage.error('ERROR! Please try again.')
    throw new Error(response.error.message || 'Response Error')
  }

  return response
}

// 创建请求方法

function createFetchRequest(method: HttpMethod) {
  return async function (url: string, data?: any, options: RequestOptions = {}) {
    const requestUrl = `/api${url}`

    return useFetch(requestUrl, { ...options, method, body: data, onRequest: handleRequest, onResponse: handleResponse })
  }
}

async function fetch(method: HttpMethod, url: string, data: any, options: RequestOptions = {}) {
  const fetchFunc = createFetchRequest(method)
  const result = await fetchFunc(url, data, options) as any

  if (result.data.value && result.data.value.code !== 1000) {
    ElMessage.error('ERROR! Please try again.')
    return
  }
  return result.data.value?.data || {}
}
export const useFetchGet = (url: string, data?: any) => fetch('GET', url, data)
export const useFetchPost = (url: string, data?: any) => fetch('POST', url, data)
export const useFetchPut = (url: string, data?: any) => fetch('PUT', url, data)
export const useFetchDelete = (url: string, data?: any) => fetch('DELETE', url, data)
