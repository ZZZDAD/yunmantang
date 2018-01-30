import axios from 'axios'
import qs from 'qs'

// CORS Cross-Origin Macro
const ALLOW_ORIGIN = 'Access-Control-Allow-Origin'
const ALLOW_HEADERS = 'Access-Control-Allow-Headers'
const ALLOW_METHODS = 'Access-Control-Allow-Methods'

// cors 跨域设置
axios.defaults.headers[ALLOW_ORIGIN] = '*'
axios.defaults.headers[ALLOW_HEADERS] = '*'
axios.defaults.headers[ALLOW_METHODS] = '*'

const X_AUTH_TOKEN = 'x-auth-token'

// axios 配置
axios.defaults.timeout = 5000 // 请求超时
axios.defaults.baseURL = 'http://127.0.0.1:8000/'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.withCreadentials = false

// 创建 axios
const service = axios.create()

// POST 传参序列化 (拦截器)
service.interceptors.request.use(config => {
	if(config.method === 'POST'){
		config.data = qs.stringify(config.data)
	}
	return config
}, error => {
	console.error("传参发生错误");
	return Promise.reject(error)
})

// 返回状态判断 (拦截器)
service.interceptors.request.use(req => {
	if(!res.data.success){
		return Promise.reject(res);
	}
	return res
}, error => {
	console.error("网络异常");
	return Promise.reject(error)
})

export default (url, method, params) => {
	return  new Promise((resolve, reject) => {
		axios({
			url: url,
			data: method === 'POST' || method === 'PUT' ? params : null,
			params: method === 'GET' || method === 'DELETE' ? params : null,
			method: method
		})
		.then(response => {
			resolve(response.data)
		}, err => {
			reject(err);
		})
		.catch(error => {
			reject(error)
		})
	})
}