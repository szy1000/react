export function post(url,params) {
	if (params) {
		let paramsArray = [];
    //拼接参数
    Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]));
    if (url.search(/\?/) === -1) {
      url += '?' + paramsArray.join('&');
    } else {
      url += '&' + paramsArray.join('&');
    }
	}
  let result = fetch(url, {
    // credentials: 'include',
    // headers: {
    //   'Accept': 'application/json, text/plain, */*'
    // }
  });
  return result;
}