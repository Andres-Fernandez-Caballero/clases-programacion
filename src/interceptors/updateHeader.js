export const updateHeaderInterceptor = (axiosInstance) => {
    axiosInstance.interceptors.request.use(config => {
      //  const jwtToken = 'Bearer Token from localstore'

       // config.headers['Authorization'] = jwtToken

        return config
    }, error => {
        //do somtething
    })
}