// Validate task title (not empty, min 3 chars)
export function validateTitle(title) {
    if (!title || String(title).trim().length === 0) {
        return "Title is empty";
    }
    if (String(title).trim().length < 3) {
        return "Title must be at least 3 characters long";
    }
    return true;
}

// Validate priority (must be: low, medium, high)
export function validatePriority(priority) {
    if (!priority) return "Priority is required";
    const validPriorities = ["low", "medium", "high"];
    if (!validPriorities.includes(String(priority).toLowerCase())) {
        return "Invalid priority";
    }
    return true;
}

// Validate due date (must be future date)
export function validateDueDate(date) {
    if (!date) return "Due date is required";
    const dueDate = new Date(date);
    const now = new Date();
    if (isNaN(dueDate.getTime())) return "Invalid date format";
    if (dueDate <= now) return "Due date must be a future date";
    return true;
}