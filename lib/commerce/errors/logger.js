export function logDomainError({ code, message, context }) {
    console.error(
        JSON.stringify({
            level: "error",
            layer: "domain",
            code,
            message,
            context: context ?? null,
            timestamp: new Date().toISOString(),
        })
    );
}