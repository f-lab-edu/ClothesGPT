import { Chat } from '@/components/custom/Badge/Chat';
import ButtonWithClickState from '@/components/custom/Button/ButtonWithClickState';
import SurveyColorContainer from '@/components/survey/SurveyColorContainer';
import SurveyImageContainer from '@/components/survey/SurveyImageContainer';
import SurveyItem from '@/components/survey/SurveyItem';
import SurveyNumberInputContainer from '@/components/survey/SurveyNumberInputContainer';
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
          <div
            className={`grid grid-cols-3 grid-rows-[repeat(${
              survey.choices.length / 3
            },1fr)] gap-3`}
          >
            {survey.choices.map((choice, i) => {
              const value = Object.values(choice.value)[0];
              return (
                <SurveyImageContainer
                  key={choice.id}
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
    case 'input': {
      const choice = survey.choices?.[0];
      return (
        <SurveyItem question={survey.question}>
          <SurveyNumberInputContainer
            _key={Object.keys(choice.value)[0]}
            choice={choice}
            disabled={disabled}
            type={choice?.inputType ?? ''}
            onClick={onClick}
          />
        </SurveyItem>
      );
    }
    case 'color':
      return (
        <SurveyItem question={survey.question}>
          <div className="grid grid-cols-3 grid-rows- gap-3 bg-neutral-200 p-9 rounded-[12px]">
            {survey.choices.map((choice, i) => {
              return (
                <SurveyColorContainer
                  key={choice.id}
                  choice={choice}
                  onClick={onClick}
                  disabled={disabled}
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
