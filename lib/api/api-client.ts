import axios, { AxiosRequestConfig } from 'axios';

const baseURL = '/api/';
export const climateApi = process.env.NEXT_PUBLIC_CLIMATE_API;

export const apiClient = axios.create({
  baseURL,
});

export const fetcher = <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => apiClient.get<T>(url, config).then((res) => res.data);
