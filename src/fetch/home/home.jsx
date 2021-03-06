import {get} from '../get.jsx';
import * as config from '../../config/index.jsx';

export function getAdDataReq(name, age) {
  const param = Object.assign({}, {
    name: name,
    age: age
  })
  const result = get(config.URL_BASE + '/api/home', param)
  return result;
}

export function getGuessDataReq(city, page) {
  let cityCode = encodeURIComponent(city)
  const param = Object.assign({}, {
    city: cityCode,
    page: page
  })
  const result = get(config.URL_BASE + '/api/home/guess', param)
  return result;
}