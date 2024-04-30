const devounceInputValue = (func: (value: string) => void, delay: number) => {
  let timer: NodeJS.Timeout;
  return function (value: string) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(value);
    }, delay);
  };
};

export default devounceInputValue;
