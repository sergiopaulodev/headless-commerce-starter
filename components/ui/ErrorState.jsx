import { UI_ERROR_MESSAGES } from "@/lib/ui/error-messages";
import { ERROR_TYPES } from "@/lib/errors/error-types";

export function ErrorState({ code, type }) {
    let message = UI_ERROR_MESSAGES[code];

    if (!message) {
        if (type === ERROR_TYPES.USER) {
            message = "We could't find what you were looking for.";
        } else {
            message = "Something went wrong. Please try again later.";
        }
    }  

    return (
        <div className="error-state">
            <p>{message}</p>
        </div>
    );
}