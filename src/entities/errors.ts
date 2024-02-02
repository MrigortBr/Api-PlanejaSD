export type ErrorType = {
  message: string;
  code: number;
  internalCode: string;
};

export type ErrorResponse = {
  message: string;
  internalCode: string;
};

const NoCourses: ErrorType = {
  message: 'Sem cursos Disponiveis',
  code: 406,
  internalCode: 'NoCourseFound',
};

const NoCourse: ErrorType = {
  message: 'Este curso está indisponivel',
  code: 406,
  internalCode: 'NoCourseFound',
};

const NoDatabase: ErrorType = {
  message: 'Serviço Indisponivel, Por favor tente novamente mais tarde',
  code: 503,
  internalCode: 'NoDatabaseAvailable',
};

const NoJustify: ErrorType = {
  message: 'Sem justificativa disponiveis',
  code: 406,
  internalCode: 'NoJustifyChoiceAvailable',
};

const UserNotFound: ErrorType = {
  message: 'Usuario não existe',
  code: 406,
  internalCode: 'NoJustifyChoiceAvailable',
};

const NoChoices: ErrorType = {
  message: 'Sem escolhas disponiveis',
  code: 406,
  internalCode: 'NoChoicesAvailable',
};

const NoQuestions: ErrorType = {
  message: 'Sem questões disponiveis',
  code: 406,
  internalCode: 'NoQuestionsAvailable',
};

const ParametersInvalid: ErrorType = {
  message: 'Parametros enviados são invalidos',
  code: 400,
  internalCode: 'NoQuestionsAvailable',
};

const NoPermission: ErrorType = {
  message: 'Usuario sem permissão para isto',
  code: 401,
  internalCode: 'NoPermission',
};

export const errors = {
  NoCourses: NoCourses,
  NoCourse: NoCourse,
  NoChoices: NoChoices,
  NoJustify: NoJustify,
  ECONNREFUSED: NoDatabase,
  '3D000': NoDatabase,
  NoQuestions: NoQuestions,
  ParametersInvalid: ParametersInvalid,
  UserNotFound: UserNotFound,
  NoPermission: NoPermission,
};

export function buildErrorResponse(error: ErrorType): ErrorResponse {
  const response: ErrorResponse = {
    message: error.message,
    internalCode: error.internalCode,
  };
  return response;
}
