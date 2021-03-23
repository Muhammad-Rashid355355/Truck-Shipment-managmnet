import axios from 'axios';

const request = axios.create();

request.interceptors.request.use((req)=> {
    console.log({request: req});
    return req;
}, (err) => {
    return Promise.reject(err);
});

request.interceptors.response.use((res) => {
    console.log({response: res});
    return res;
}, (err) => {
    return Promise.reject(err);
});

export default request;
