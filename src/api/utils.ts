export interface ApiResult {
  code: number;
  msg?: string;
  data?: any;
}

export const baseUrlApi = (url: string): string => {
  return process.env.NODE_ENV === "development"
    ? `http://localhost:8888/api${url}`
    : `https://xirang-api.eryajf.net/api${url}`;
};
