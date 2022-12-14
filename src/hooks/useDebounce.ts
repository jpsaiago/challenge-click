import { useCallback, useRef } from "react";

export function useDebounce<F extends CallableFunction>(
  func: F,
  delay: number
) {
  const timeoutRef = useRef<number | null>(null);

  //Envolver a função com useCallback para evitar que ela seja recriada a cada render
  const debouncedFunc = useCallback(
    <T>(...args: T[]) => {
      //Cancela o timer ativo se a função for chamada de novo
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
      /*Se o timer não for cancelado por chamadas subsequentes à função de debounce,
      executa a função passada como parâmetro */
      timeoutRef.current = window.setTimeout(() => func(...args), delay);
    },
    [func, delay]
  );

  return debouncedFunc;
}
