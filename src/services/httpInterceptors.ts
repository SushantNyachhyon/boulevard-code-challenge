import { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

export function handlePreRequest(
    config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig {
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
