import { get } from '../get.jsx';

export function getAdDataReq() {
  const result = get('/api/home')
  return result;
}