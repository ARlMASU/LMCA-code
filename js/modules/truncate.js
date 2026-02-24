export function truncate(str, maxLength) {
    const truncated = str.substring(0, maxLength);
    const indexOfLastSpace = truncated.lastIndexOf(" ");
    return truncated.substring(0, indexOfLastSpace);
}
