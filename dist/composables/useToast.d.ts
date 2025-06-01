export interface Toast {
    id: number;
    title?: string;
    message?: string;
    type?: "info" | "success" | "warn" | "alert";
}
export declare const toastState: import('vue').Reactive<Toast[]>;
export declare function useToast(): ({ title, message, type, timeout, }: {
    title?: string;
    message?: string;
    type?: "info" | "success" | "warn" | "alert";
    timeout?: number;
}) => void;
