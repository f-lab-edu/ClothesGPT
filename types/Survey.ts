export type ChoiceComponentType =
  | 'chat'
  | 'button'
  | 'image'
  | 'color'
  | 'input';

export interface Choice {
  id: string;
  value: string;
  tag?: Record<string, string>;
  image?: string;
}

export interface Survey {
  id: number;
  question: string;
  tag: Record<string, string>;
  choices: Choice[];
  component?: React.ReactNode;
  choiceType: ChoiceComponentType;
}
