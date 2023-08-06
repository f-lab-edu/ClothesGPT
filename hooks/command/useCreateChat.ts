// import { MutationSideEffect, useMutate } from '@/hooks/useMutate';
import { AxiosError } from 'axios';
import { CreateChatCompletionResponse } from 'openai';
import { openAIApi } from '@/api/openai';
import { ChatRequest } from '@/api/openai/types';

interface Option {
  body: string;
  gender: string;
  style: string;
  color: string;
  weight: string;
  height: string;
}
//TODO : 신장, 체중을 묻는 Survey 구현
export const getSubmitSurveyMessage = ({
  body,
  color,
  gender,
  style,
  height,
  weight,
}: Option) => `
  당신은 지금부터 스타일리스트입니다. 당신은 고객의 정보를 보고 그에게 맞는 옷을 추천해야 합니다. 다음은 고객 정보입니다

  고객정보 : ${gender}, 신장 ${height}cm, 체중 ${weight}kg, ${body}. ${color}을 좋아하며 ${style}패션을 선호함

  옷은 상의, 하의, 신발 3가지의 종류가 필수적으로 하나의 세트로 묶이며 부가적으로 아우터와 기타 장신구가 들어갈 수도 있다.
  각각 종류는 다음의 양식에 따라 실제 인터넷에s서 판매되는 제품을 추천해야 한다.
  다음 양식에 맞춰 3~6개의 세트를 추천해줄 수 있니?
  양식은 json 형태를 갖춰야한다.

  { 
    상의 : 제품이름,
    아우터 : 제품이름,
    하의 : 제품이름,
    신발 : 제품이름,
    기타 장신구 : 제품이름,
  }`;

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
