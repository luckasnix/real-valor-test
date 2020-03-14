export default (url: string, options: {
    [key: string]: boolean | number| string
  }
): string => {
  const params: string[] = [];
  for (let key in options) {
      params.push(`${key}=${options[key]}`);
  }
  return url + '?' + params.join('&');
}