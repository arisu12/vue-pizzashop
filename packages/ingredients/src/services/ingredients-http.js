import {httpClient} from '@ps/http';
import {config} from '@ps/config';

export const ingredientsHTTP = httpClient({
  baseURL: `${config.API_URL}/ingredients`,
});
