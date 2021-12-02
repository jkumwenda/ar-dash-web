const getKey = (key: string) => {
  return localStorage.getItem(key);
};

const setKey = (key: string, value: any) => {
  localStorage.setItem(key, value);
};

const removeKey = (key: string) => {
  localStorage.removeItem(key);
};

export default { setKey, getKey, removeKey };
