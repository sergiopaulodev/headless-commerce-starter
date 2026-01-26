import { ERROR_MAP } from "@/lib/errors/error-map";
import { ERROR_CODES } from "@/lib/errors/error-codes";

export function success(data) {
  return { success: true, data };
}

export function failure({ code, message, details }) {
  const errorCode = code ?? ERROR_CODES.UNKNOWN_ERROR;

  return {
    success: false,
    error: {
      code: errorCode,
      type: ERROR_MAP[errorCode],
      message,
      details: details ?? null,
    },
  };
}
