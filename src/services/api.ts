/* eslint-disable no-param-reassign */
import axios from "axios";

import { getSessionId } from "./localStorage";

export const baseUrl = "https://api.themoviedb.org";

export const api = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: "00911ef8d2aadc4c5a6f1b5312a163ee",
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
