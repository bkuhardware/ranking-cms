export function reverseArray<T = any>(arr: T[]): T[] {
    const numberOfElement: number = arr.length;
    const resultArr: T[] = new Array<T>(numberOfElement);
    arr.forEach((item: T, index: number) => {
        resultArr[numberOfElement - 1 - index] = item;
    });
    return resultArr;
}

export function frogJumpArray<T = any>(arr: T[]): T[] {
    const numberOfElement: number = arr.length;
    const resultArr: T[] = new Array<T>(numberOfElement);
    arr.forEach((item: T, index: number) => {
        if (index % 2 === 0) {
            resultArr[index / 2] = item;
        }
        else {
            const newIndex: number = (numberOfElement % 2 === 0) ? ((numberOfElement / 2) + ((index - 1) / 2)) : (((numberOfElement + 1) / 2) + ((index - 1) / 2));
            resultArr[newIndex] = item;
        }
    });
    return resultArr;
}