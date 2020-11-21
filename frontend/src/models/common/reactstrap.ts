export interface RSSelectOption<T = string> {
    value: T;
    label: string;
    disabled?: boolean;
}