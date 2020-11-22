export const getAcronymText = (originText: string): string => {
    const parts: string[] = originText.split(' ');
    const firstLetters: string[] = getFirstLettersFromParts(parts);
    return firstLetters.join('');
}

export const getFirstLettersFromParts = (parts: string[]): string[] => {
    return parts.map((part: string) => {
        return !part ? '' : part[0];
    });
}