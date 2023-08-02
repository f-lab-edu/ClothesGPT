import { Chat } from '@/components/custom/Badge/Chat';
import ButtonWithClickState from '@/components/custom/Button/ButtonWithClickState';
import ImageItem from '@/components/survey/ImageItem';
import SurveyItem from '@/components/survey/SurveyItem';
import { QuestionVO } from '@/types/SurveyMessage';

export function Survey({
  survey,
  disabled,
  onClick,
}: {
  survey: QuestionVO;
  disabled: boolean;
  onClick?: (...args: any) => void;
}): JSX.Element {
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
              <ButtonWithClickState
                key={choice.id}
                disabled={disabled}
                onClick={() => onClick?.(survey.choices[i])}
              >
                {Object.values(choice.value)[0]}
              </ButtonWithClickState>
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
      return <></>;
  }
}
