import {
  MessageModel,
  MessagePayload,
  MessageType,
} from '@chatscope/chat-ui-kit-react';
import { MessageDirection } from '@chatscope/chat-ui-kit-react/src/types/unions';
import { ChoiceComponentType, Question } from '@/types/Survey';

const colors = [
  'red',
  'yellow',
  'green',
  'sky',
  'pink',
  'purple',
  'navy',
  'white',
  'black',
] as const;

export type Color = (typeof colors)[number];

export interface ChoiceUI {
  id: string;
  imageSrc?: string;
  color?: Color;
  value: Record<string, string>;
  tag?: Record<string, string>;
  inputType?: HTMLInputElement['type'];
}

export class QuestionUI {
  id: string;
  question: string;
  tag?: Record<string, string>;
  choices: ChoiceUI[];
  choiceType: ChoiceComponentType;

  constructor(question: Question) {
    this.id = question.id;
    this.question = question.question;
    this.tag = question.tag as Record<string, string>;
    this.choices = question.choices.map((choice) => {
      return {
        id: choice.id,
        imageSrc: choice.imageSrc,
        color: choice.color,
        value: choice.value as Record<string, string>,
        tag: choice.tag as Record<string, string>,
      };
    });
    this.choiceType = question.choiceType;
  }
}

export interface QuestionUI {
  id: string;
  question: string;
  tag?: Record<string, string>;
  choices: ChoiceUI[];
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
  survey: QuestionUI;
  constructor(message: string, survey: QuestionUI, options?: Options) {
    this.direction = options?.direction ?? 'outgoing';
    this.position = 'last';
    this.type = 'custom';
    this.message = message;
    this.survey = survey;
  }
}
