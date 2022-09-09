import { action } from "typesafe-actions";

import { ToasMessageTypes, UtilsTypes, MenuTypes, DeviceTypes } from "./types";

export const setToastMessage = (data: ToasMessageTypes) =>
  action(UtilsTypes.SET_TOAST, data);

export const setLoading = (loading: boolean) =>
  action(UtilsTypes.SET_LOADING, loading);

export const toogleMenuAction = ({ active, isOpen }: MenuTypes) =>
  action(UtilsTypes.TOOGLE_MENU, { active, isOpen });

export const setThemeAction = (theme: string) =>
  action(UtilsTypes.SET_THEME, theme);

export const setdDeviceAction = (device: DeviceTypes) =>
  action(UtilsTypes.DEVICE_TYPE, device);
