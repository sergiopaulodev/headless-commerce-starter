import { UI_ERROR_MESSAGES } from "@/lib/ui/error-messages";

export function ErrorState({ code }) {
    const message = UI_ERROR_MESSAGES[code] ?? "Unexpected error";
    
    return (
        <div className="error-state">
            <p>{message}</p>
        </div>
    );
}