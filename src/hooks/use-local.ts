export const useLocal = (key: string) => {
  const setLocal = (value: any) => localStorage.setItem(key, JSON.stringify(value));
  const getLocal = () => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  };
  return [getLocal(), setLocal];
};
