import { Chat } from '@/components/custom/Badge/Chat';
import ButtonWithClickState from '@/components/custom/Button/ButtonWithClickState';
import SurveyColorContainer from '@/components/survey/SurveyColorContainer';
import SurveyImageContainer from '@/components/survey/SurveyImageContainer';
import SurveyItem from '@/components/survey/SurveyItem';
import SurveyNumberInputContainer from '@/components/survey/SurveyNumberInputContainer';
import { ChoiceUI, QuestionUI } from '@/types/SurveyMessage';

export function SurveyComponent({
  survey,
  disabled,
  onClick,
}: {
  survey: QuestionUI;
  disabled: boolean;
  onClick?: (choice: ChoiceUI) => void;
}): JSX.Element {
  switch (survey.choiceType) {
    case 'Chat':
      return (
        <div>
          <Chat text={survey.question} />
        </div>
      );
    case 'Button':
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
    case 'Image':
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
    case 'Input': {
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
    case 'Color':
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
