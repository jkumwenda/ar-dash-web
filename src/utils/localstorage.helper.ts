const getKey = (key: string) => {
  return localStorage.getItem(key);
};

const setKey = (key: string, value: any) => {
  localStorage.setItem(key, value);
};

export default { setKey, getKey };
