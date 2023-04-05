import { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { unsplashAccessKey } from '@/config';

export function handlePreRequest(
    config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig {
    config.headers['Authorization'] = `Client-ID ${unsplashAccessKey}`;
    return config;
}

export function handleRequestError(error: AxiosError): Promise<AxiosError> {
    return Promise.reject(error);
}

export function handleResponseSuccess(response: AxiosResponse): AxiosResponse {
    return response;
}

export function handleResponseError(error: AxiosError): Promise<AxiosError> {
    return Promise.reject(error);
}
