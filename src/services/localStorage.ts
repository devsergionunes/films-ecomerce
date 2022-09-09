export const SESSION_ID = "SESSION_ID";
export const LIST_FAVORITOS = "LIST_FAVORITOS";
export const CAR_BUY = "CAR_BUY";

export const getSessionId = () => localStorage.getItem(SESSION_ID);
export const setSessionId = (id: string) =>
  localStorage.setItem(SESSION_ID, id);
export const removeSessionId = () => localStorage.removeItem(SESSION_ID);

export const getItem = (item: string) => localStorage.getItem(item);
export const setItem = (item: string, data: string) =>
  localStorage.setItem(item, data);
