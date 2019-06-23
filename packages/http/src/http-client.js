import axios from 'axios';

export function httpClient(config) {
  const {interceptors = {}, ...clientConfig} = config;
  const {request = [], response = []} = interceptors;
  const client = axios.create(clientConfig);
  request.forEach((interceptor) => {
    client.interceptors.request.use(interceptor);
  });
  response.forEach((interceptor) => {
    client.interceptors.response.use(interceptor);
  });
  return client;
}
