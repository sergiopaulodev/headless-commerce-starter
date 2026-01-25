import { log } from "@/lib/observability/logger";
import { LOG_LEVELS } from "@/lib/observability/log-config";

export function logDomainError({ code, message, context }) {
  log(LOG_LEVELS.ERROR, {
        layer: "domain",
        code,
        message,
        context: context ?? null,
  });
}
