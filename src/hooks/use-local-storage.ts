import { useState, type Dispatch, type SetStateAction } from "react";

type UseLocalOptions = { expired?: number /* seconds */ };

export const useLocalStorage = <T>(key: string, initialValue: T, options?: UseLocalOptions): [T, Dispatch<SetStateAction<T>>] => {
  const getLocal = (): T => {
    try {
      const data = localStorage.getItem(key);
      if (data === null) return initialValue;
      const { value, expired } = JSON.parse(data);
      return expired && new Date().getTime() > expired ? initialValue : value;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  };
  const setLocal = (value: SetStateAction<T>) => {
    if (key.length === 0) return;
    value = value instanceof Function ? value(getLocal()) : value;
    localStorage.setItem(key, JSON.stringify({ value, expired: options?.expired && new Date().getTime() + options.expired * 1000 }));
    setCurrent(value);
  };
  const [current, setCurrent] = useState<T>(getLocal());
  return [current, setLocal];
};
