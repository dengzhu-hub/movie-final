import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import { FetchResponse, Screenshot } from '../constant/type';

const API_KEY = import.meta.env.VITE_API_KEY;

class ApiClient<T> {
  private endpoint: string;
  private axiosInstance: AxiosInstance;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
    this.axiosInstance = axios.create({
      baseURL: 'https://api.rawg.io/api/',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      params: {
        key: API_KEY,
      },
    });
  }

  async getAll(config?: AxiosRequestConfig): Promise<FetchResponse<T>> {
    try {
      const response: AxiosResponse<FetchResponse<T>> =
        await this.axiosInstance.get(this.endpoint, config);
      return this.handleResponse(response);
    } catch (error) {
      return this.handleError(error as AxiosError);
    }
  }
  async get(id: string | number): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.get<T>(
        `${this.endpoint}/${id}`,
      );
      return response.data;
    } catch (error) {
      throw error as AxiosError;
    }
  }

  async getMovies(gameId: string | number): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.get<T>(
        `${this.endpoint}/${gameId}/movies`,
      );
      return response.data;
    } catch (error) {
      return this.handleError(error as AxiosError);
    }
  }

  async getScreenshots(
    gameId: string | number,
  ): Promise<FetchResponse<Screenshot>> {
    try {
      const response: AxiosResponse<FetchResponse<Screenshot>> =
        await this.axiosInstance.get(`${this.endpoint}/${gameId}/screenshots`);
      return response.data;
    } catch (error) {
      throw error as AxiosError;
    }
  }

  private handleError(error: AxiosError): never {
    if (axios.isAxiosError(error)) {
      // 处理 Axios 错误
      console.error('Axios error:', error.message);
      console.error('Response data:', error.response?.data);
    } else {
      // 处理其他类型的错误
      console.error('Unexpected error:', error);
    }
    throw error;
  }
  private handleResponse(
    response: AxiosResponse<FetchResponse<T>>,
  ): FetchResponse<T> {
    return response.data;
  }
}

export default ApiClient;
