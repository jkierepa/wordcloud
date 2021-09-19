import { CustomStyle, WordSet } from "./appTypes"

export type LogoutButtonProps = {
    onLogoutClick(): void
}

export type ButtonProps = {
    children?: React.ReactNode
    customStyle?: CustomStyle
    onClick(): void
}

export type LoginContainerLayoutProps = {
    inputValue: string;
    setInputValue: (value: string) => void;
    onPlayClick(): void
}

export type InputProps = {
    value: string
    setValue(value: string): void
    placeholder?: string
    customStyle?: CustomStyle
}

export type HeaderProps = {
    children?: React.ReactNode
    customStyle?: CustomStyle
}

export type WordProps = {
    word: string;
    isCorrect: boolean;
    isChecked: boolean;
    row?: number;
    column?: number
    setSelected(sel: string): void
}

export type GameContainerLayoutProps = {
    onFinishClick(): void;
    onCheckClick():void;
    wordSet?: WordSet;
    correctWords: string[];
    rows?: number
}

export type WordGridProps = {
    columns: number| undefined;
    rows: number | undefined;
    wordSet?: WordSet
    correctWords: string[]
}
