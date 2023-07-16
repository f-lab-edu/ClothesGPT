import { choice, survey } from '@prisma/client';

export type SurveyWithChoice = survey & { choices: choice[] };
