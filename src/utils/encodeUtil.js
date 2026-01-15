// src/utils/encodeUtil.js

/**
 * Utility to encode any object into Base64 JSON string
 */
export const encodePayload = (payload) => {
  return btoa(JSON.stringify(payload));
};

/**
 * Convert FormData into a plain object
 */
export const formDataToObject = (formData) => {
  const obj = {};
  formData.forEach((value, key) => {
    obj[key] = value;
  });
  return obj;
};