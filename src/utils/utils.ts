/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
export const removeMask = (value: string) => {
  if (value) {
    return value.replace(/[^\d]/g, "");
  }
  return null;
};

export const removeMoneyMask = (value: string) => {
  if (value) {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{1})(\d{14})$/, "$1$2")
      .replace(/(\d{1})(\d{11})$/, "$1$2")
      .replace(/(\d{1})(\d{8})$/, "$1$2")
      .replace(/(\d{1})(\d{5})$/, "$1$2")
      .replace(/(\d{1})(\d{1,2})$/, "$1.$2");
  }
  return null;
};

export const debounce = <F extends (...args: any[]) => any>(
  func: F,
  waitFor: number
) => {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<F>): Promise<ReturnType<F>> =>
    new Promise((resolve) => {
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => resolve(func(...args)), waitFor);
    });
};

export const createObjectValNotNull = (obj: any) => {
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    if (obj[key] || obj[key] === 0) {
      // @ts-ignore
      newObj[key] = obj[key];
    }
  });
  return newObj;
};

export const copyToClipboard = (text: string) => {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
};
