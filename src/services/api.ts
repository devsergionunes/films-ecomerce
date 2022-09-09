/* eslint-disable no-param-reassign */
import axios from "axios";

import { getSessionId } from "./localStorage";

export const baseUrl = process.env.REACT_APP_URL_API;

export const api = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    language: "pt-BR",
  },
});

api.interceptors.request.use(
  (config) => {
    const sessionId = getSessionId();

    if (
      sessionId &&
      !config.params.guest_session_id &&
      config.method &&
      !["get", "delete"].includes(config.method)
    ) {
      config.params.guest_session_id = sessionId;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
