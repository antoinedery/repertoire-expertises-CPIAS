/**
 * Format a date string to the 'YYYY-MM-DD' format.
 * @param {string} dateString - The input date string.
 * @returns {string} - The formatted date string.
 */
export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
};