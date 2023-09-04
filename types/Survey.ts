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
  value: Record<string, any>;
  tag?: Record<string, any>;
  inputType?: ChoiceComponentType;
}

export interface Question {
  id: string;
  question: string;
  choices: Choice[];
  choiceType: ChoiceComponentType;
  tag?: Record<string, any>;
}
