import { useMutation, UseMutationOptions } from 'react-query';

export type MutationSideEffect<
  TData = unknown,
  TError = unknown,
  TVariables = void,
> = Pick<
  UseMutationOptions<TData, TError, TVariables>,
  'onSuccess' | 'onError'
>;

export function useMutate<
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown,
>(
  fn: (data: TVariables) => Promise<TData>,
  options?: UseMutationOptions<TData, TError, TVariables, TContext>,
) {
  const mutation = useMutation<TData, TError, TVariables, TContext>(fn, {
    onError: (error, variables, context) => {
      if (options?.onError) {
        void options.onError(error, variables, context);
      }
    },
    onSuccess: (data, variables, context) => {
      if (options?.onSuccess) {
        void options.onSuccess(data, variables, context);
      }
    },
  });

  return mutation;
}
