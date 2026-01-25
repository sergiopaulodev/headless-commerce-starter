export const LOG_LEVELS = {
    INFO: "info",
    WARN: "warn",
    ERROR: "error",
};

export const CURRENT_LOG_LEVEL = process.env.LOG_LEVEL ?? LOG_LEVELS.INFO;