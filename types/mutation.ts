import { UseMutationOptions } from '@tanstack/react-query';

export type MutationSideEffect<
  TData = unknown,
  TError = unknown,
  TVariables = void,
> = Pick<
  UseMutationOptions<TData, TError, TVariables>,
  'onSuccess' | 'onError'
>;
