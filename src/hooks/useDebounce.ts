import { useCallback, useRef } from "react";

export function useDebounce<F extends CallableFunction>(
  func: F,
  delay: number
) {
  const timeoutRef = useRef<number | null>(null);

  const debouncedFunc = useCallback(
    <T>(...args: T[]) => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = window.setTimeout(() => func(...args), delay);
    },
    [func, delay]
  );

  return debouncedFunc;
}
