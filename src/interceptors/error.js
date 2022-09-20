export const errorInterceptor = (axiosInstance => {
    // response successful
}, (error => {
    if (error?.status?.code === 401) {
        // unautorized

        // redirect to login
    }else {
        console.log(error);
    }
}))