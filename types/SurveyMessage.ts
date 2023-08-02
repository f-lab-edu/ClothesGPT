import {
  MessageModel,
  MessagePayload,
  MessageType,
} from '@chatscope/chat-ui-kit-react';
import { MessageDirection } from '@chatscope/chat-ui-kit-react/src/types/unions';
import { ChoiceComponentType } from '@/types/Survey';

export interface ChoiceVO {
  id: string;
  imageSrc?: string;
  value: Record<string, string>;
  tag?: Record<string, string>;
}

export interface QuestionVO {
  id: number;
  question: string;
  tag?: Record<string, string>;
  choices: ChoiceVO[];
  choiceType: ChoiceComponentType;
}

type Options = {
  direction?: MessageDirection;
  components?: (index: number) => React.ReactNode;
};

export class QuestionMessage implements MessageModel {
  message?: string | undefined;
  sentTime?: string | undefined;
  sender?: string | undefined;
  direction: MessageDirection;
  position: 0 | 1 | 2 | 'single' | 'first' | 'normal' | 'last' | 3;
  type?: MessageType | undefined;
  payload?: MessagePayload;
  survey: QuestionVO;
  constructor(message: string, survey: QuestionVO, options?: Options) {
    this.direction = options?.direction ?? 'outgoing';
    this.position = 'last';
    this.type = 'custom';
    this.message = message;
    this.survey = survey;
  }
}
