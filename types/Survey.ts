import { InputType, Prisma } from 'prisma/prisma-client';
import { Color } from './SurveyMessage';

export type ChoiceComponentType =
  | 'Chat'
  | 'Button'
  | 'Image'
  | 'Color'
  | 'Input';
export interface Choice {
  id: string;
  imageSrc?: string;
  color?: Color;
  value: Prisma.JsonValue;
  tag?: Prisma.JsonValue;
  inputType?: InputType;
  questionId: string;
  question: Question;
}

export interface Question {
  id: string;
  question: string;
  choices: Choice[];
  choiceType: ChoiceComponentType;
  tag?: Prisma.JsonValue;
}
