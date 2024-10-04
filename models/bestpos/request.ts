export interface Request {
  baseURL?: string;
  url: string;
  method?: 'GET' | 'POST' | 'DELETE';
  data?: any;
  params?: Record<string, any>;
}
