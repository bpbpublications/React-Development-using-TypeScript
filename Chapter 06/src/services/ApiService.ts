import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

class ApiService {
  private axiosInstance = axios.create({
    baseURL:
      "https://my-json-server.typicode.com/agnihotriketan/StockMarketMockApi" // Alpha Vantage API base URL
  });

  // Generic GET request function
  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.get(
      url,
      config
    );
    return response.data;
  }

  // Generic POST request function
  public async post<T, U>(
    url: string,
    data: U,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.post(
      url,
      data,
      config
    );
    return response.data;
  }

  // Generic PUT request function
  public async put<T, U>(
    url: string,
    data: U,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.put(
      url,
      data,
      config
    );
    return response.data;
  }

  // Generic DELETE request function
  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.delete(
      url,
      config
    );
    return response.data;
  }
}

export default new ApiService();
