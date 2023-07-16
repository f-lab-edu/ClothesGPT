import { Chat } from '@/components/custom/Button/Chat';
import { Button } from '@/components/ui/button';
import { SurveyVO } from '../types/SurveyMessage';
import SurveyItem from '../components/SurveyItem';
import ImageItem from '../components/ImageItem';

export function convertSurveyComponent({
  survey,
  disabled,
  onClick,
}: {
  survey: SurveyVO;
  disabled: boolean;
  onClick?: (...args: any) => void;
}): React.ReactNode {
  switch (survey.choiceType) {
    case 'chat':
      return (
        <div>
          <Chat text={survey.question} />
        </div>
      );
    case 'button':
      return (
        <SurveyItem question={survey.question}>
          {survey.choices.map((choice, i) => {
            return (
              <Button
                key={choice.id}
                disabled={disabled}
                onClick={() => onClick?.(survey.choices[i])}
              >
                {Object.values(choice.value)[0]}
              </Button>
            );
          })}
        </SurveyItem>
      );
    case 'image':
      return (
        <SurveyItem question={survey.question}>
          <div className="grid grid-cols-2 w-[100%] gap-3">
            {survey.choices.map((choice, i) => {
              const value = Object.values(choice.value)[0];
              return (
                <ImageItem
                  onClick={() => onClick?.(choice.value)}
                  imageSrc={choice.imageSrc ?? ''}
                  key={choice.id}
                  value={value}
                />
              );
            })}
          </div>
        </SurveyItem>
      );
    default:
      return null;
  }
}
