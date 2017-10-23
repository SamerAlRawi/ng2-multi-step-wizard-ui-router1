export interface WizardPage {
    isFirst: boolean;
    isLast: boolean;
    next(): void;
    previous(): void;
}
