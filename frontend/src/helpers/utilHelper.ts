export const isEmpty = (value: any): boolean => {
    if (!value) return true;
    if (Array.isArray(value))
        return value.length === 0;
    if (typeof value === 'object')
        return Object.getOwnPropertyNames(value).length === 0;
    return false;
}