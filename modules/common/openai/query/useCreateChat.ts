// import { MutationSideEffect, useMutate } from '@/hooks/useMutate';
import { AxiosError } from 'axios';
import { CreateChatCompletionResponse } from 'openai';
import { openAIApi } from '@/api/openai';
import { ChatRequest } from '@/api/openai/types';

// TODO : 설문조사 끝난 이후 결과를 chat GPT 연결하기
function useCreateChat() {
  // options: MutationSideEffect<
  //   CreateChatCompletionResponse,
  //   AxiosError,
  //   ChatRequest
  // >,
  // return useMutate((request: ChatRequest) => openAIApi.chat(request), {
  //   ...options,
  // });
}

export default useCreateChat;
