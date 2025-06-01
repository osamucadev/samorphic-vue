import { reactive } from "vue";

export interface Toast {
  id: number;
  title?: string;
  message?: string;
  type?: "info" | "success" | "warn" | "alert";
}

let id = 0;

export const toastState = reactive<Toast[]>([]);

export function useToast() {
  return function showToast({
    title,
    message,
    type = "info",
    timeout = 4000,
  }: {
    title?: string;
    message?: string;
    type?: "info" | "success" | "warn" | "alert";
    timeout?: number;
  }) {
    const toast = {
      id: id++,
      title,
      message,
      type,
    };

    toastState.push(toast);

    setTimeout(() => {
      const index = toastState.findIndex((t) => t.id === toast.id);
      if (index !== -1) toastState.splice(index, 1);
    }, timeout);
  };
}
