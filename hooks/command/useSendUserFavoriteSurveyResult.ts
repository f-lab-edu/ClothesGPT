import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { CreateChatCompletionResponse } from 'openai';
import { openAIApi } from '@/api/openai';
import { ChatMessage } from '@/api/openai/types';
import { MutationSideEffect } from '@/types/mutation';

export interface UserFavoriteSurveyResult {
  body: string;
  gender: string;
  style: string;
  color: string;
  weight: string;
  height: string;
}
//TODO : 신장, 체중을 묻는 Survey 구현
const getSubmitSurveyMessage = ({
  body,
  color,
  gender,
  style,
  height,
  weight,
}: UserFavoriteSurveyResult): ChatMessage => {
  return {
    role: 'user',
    content: `당신은 지금부터 스타일리스트입니다. 당신은 고객의 정보를 보고 그에게 맞는 옷을 추천해야 합니다. 다음은 고객 정보입니다.
고객정보 : ${gender}, 신장 ${height}cm, 체중 ${weight}kg, ${body}. ${color}을 좋아하며 ${style} 패션을 선호함
옷은 상의, 하의, 신발 3가지의 종류가 필수적으로 하나의 세트로 묶이며 부가적으로 아우터와 기타 장신구가 들어갈 수도 있다.
추천해야할 때 실제 인터넷에서 판매되는 옷의 이름이 들어가있어야하며,3~6개의 세트를 추천하길 원한다.
출력은 항상 유효한 JSON 형식으로 되어있어야 한다. 
출력 예시는 다음과 같다.
{
  "data" : [
    {
      "상의": "상품이름",
      "하의": "상품이름",
      "신발": "상품이름",
      "아우터": "상품이름",
      "기타 장신구": "상품이름"
    },
    {
      "상의": "상품이름",
      "하의": "상품이름",
      "신발": "상품이름",
      "아우터": "상품이름",
      "기타 장신구": "상품이름"
    }
  ]
}`,
  };
};

function useSendUserFavoriteSurveyResult(
  options: MutationSideEffect<
    CreateChatCompletionResponse,
    AxiosError,
    UserFavoriteSurveyResult
  >,
) {
  return useMutation(
    (request: UserFavoriteSurveyResult) =>
      openAIApi.chat([getSubmitSurveyMessage(request)]),
    {
      ...options,
    },
  );
}

export default useSendUserFavoriteSurveyResult;
