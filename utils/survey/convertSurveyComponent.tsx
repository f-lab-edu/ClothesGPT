import { v4 as uuidv4 } from 'uuid';
import { Chat } from '@/components/custom/Badge/Chat';
import ButtonWithClickState from '@/components/custom/Button/ButtonWithClickState';
import HoverWrapper from '@/components/custom/HoverWrapper';
import SurveyImageContainer from '@/components/survey/SurveyImageContainer';
import SurveyItem from '@/components/survey/SurveyItem';
import { ChoiceVO, QuestionVO } from '@/types/SurveyMessage';

export function Survey({
  survey,
  disabled,
  onClick,
}: {
  survey: QuestionVO;
  disabled: boolean;
  onClick?: (choice: ChoiceVO) => void;
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
                key={uuidv4()}
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
          <div className="grid grid-cols-3 grid-rows-[repeat(2,1fr)] gap-3">
            {survey.choices.map((choice, i) => {
              const value = Object.values(choice.value)[0];
              return (
                <SurveyImageContainer
                  key={uuidv4()}
                  choice={choice}
                  disabled={disabled}
                  value={value}
                  onClick={onClick}
                />
              );
            })}
          </div>
        </SurveyItem>
      );
    case 'color':
      return (
        <SurveyItem question={survey.question}>
          <div className="grid grid-cols-3 grid-rows- gap-3 bg-neutral-200 p-9 rounded-[12px]">
            {survey.choices.map((choice, i) => {
              return (
                <HoverWrapper key={choice.id} className="rounded-full border-4">
                  <div
                    style={{ background: choice?.color ?? '' }}
                    className={`rounded-full bg-[${choice?.color}] m-1 w-[36px] h-[36px]`}
                    onClick={() => onClick?.(choice)}
                  />
                </HoverWrapper>
              );
            })}
          </div>
        </SurveyItem>
      );
    default:
      return <></>;
  }
}
