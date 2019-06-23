import {httpClient} from '@ps/http';
import {config} from '@ps/config';

export const pizzaHTTP = httpClient({
  baseURL: `${config.API_URL}/pizzas`,
});
