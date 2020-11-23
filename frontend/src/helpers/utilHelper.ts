export const isEmpty = (value: any): boolean => {
    if (!value) return true;
    if (Array.isArray(value))
        return value.length === 0;
    if (typeof value === 'object')
        return Object.getOwnPropertyNames(value).length === 0;
    return false;
}

export const randomCompare = (lhs: any, rhs: any): number => {
    const randomNumber: number = Math.random();
    return randomNumber > 0.5 ? 1 : -1;
}