type LocalDiapatchOptions = { expired: number /* seconds */ };
type LocalDiapatch = (value: any, options?: LocalDiapatchOptions) => void;

export const useLocal = (key: string): [any, LocalDiapatch] => {
  const setLocal = (value: any, options?: LocalDiapatchOptions) => {
    if (key.length === 0) return;
    localStorage.setItem(
      key,
      JSON.stringify({
        value,
        expired: options?.expired ? new Date().getTime() + options.expired * 1000 : null,
      })
    );
  };
  const getLocal = () => {
    const data = localStorage.getItem(key);
    if (data === null || key.length === 0) return null;
    const { value, expired } = JSON.parse(data);
    return expired && new Date().getTime() > expired ? null : value;
  };
  return [getLocal(), setLocal];
};
