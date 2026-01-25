import { LOG_LEVELS, CURRENT_LOG_LEVEL } from "./log-config";

function shouldLog(level) {
    const order = [LOG_LEVELS.INFO, LOG_LEVELS.WARN, LOG_LEVELS.ERROR];
    return order.indexOf(level) >= order.indexOf(CURRENT_LOG_LEVEL);
}

function getConsoleMethod(level) {
    if (level === LOG_LEVELS.ERROR) return console.error
    if (level === LOG_LEVELS.WARN) return console.warn;
    return console.log;
}

export function log(level, payload) {
    if (!shouldLog(level)) return;

    const entry = {
        level,
        timestamp: new Date().toISOString(),
        ...payload,
    };

    getConsoleMethod(level)(JSON.stringify(entry));
}