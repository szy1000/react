import { get } from '../get.jsx';
import  * as config from '../../config/index.jsx';

export function getAdDataReq() {
  const result = get(config.URL_BASE + '/api/home')
  return result;
}