import axios from 'axios';

import {
    handlePreRequest,
    handleRequestError,
    handleResponseError,
    handleResponseSuccess
} from './httpInterceptors';
import { baseURL } from '@/config';

const http = axios.create({
    baseURL: baseURL
});

http.interceptors.request.use(handlePreRequest, handleRequestError);
http.interceptors.response.use(handleResponseSuccess, handleResponseError);

export default http;
