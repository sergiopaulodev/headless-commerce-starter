export function success(data) {
    return {
        success: true,
        data,
    };
}

export function failure({ code, message, details = null }) {
    return {
        success: false,
        error: {
            code,
            message,
            details,
        },
    };
}