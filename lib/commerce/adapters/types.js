export function success(data) {
    return {
        success: true,
        data,
    };
}

export function failure({ message, issues }) {
    return {
        success: false,
        error: {
            code: "INVALID_CONTRACT",
            message,
            issues,
        },
    };
}