interface ErrorMessages {
  [key: string]: string;
}

const DEFAULT_MESSAGE = "Something went wrong. Please try again.";

const ERROR_MESSAGES: ErrorMessages = {
  JWT_MISSING: "Please sign in to continue",
  JWT_EXPIRED: "Please sign in to continue",
  AUTHENTICATION_ERROR: "Please sign in to continue",
  ORG_JWT_EXPIRED: "Please sign in to continue",
  UNAUTHENTICATED: "Please sign in to continue",
  INVALID_EVENT_TOKEN: "Please sign in to continue",
  AccountNotFound: "Please sign in to continue",

  FORBIDDEN: "You don't have permission for this action",
  USER_NOT_ACTIVE: "You don't have permission for this action",

  NOT_FOUND: DEFAULT_MESSAGE,
  USER_NOT_FOUND: DEFAULT_MESSAGE,
  ORG_NOT_FOUND: DEFAULT_MESSAGE,
  EVENT_NOT_FOUND: DEFAULT_MESSAGE,

  UserInputError: "Please check your input and try again",
  INVALID_INPUT: "Please check your input and try again",
  BAD_REQUEST: "Please check your input and try again",
  VALIDATION_ERROR: "Please check your input and try again",
  INVALID_TRAINEE_SCORE: "Please check your input and try again",

  ATTENDANCE_WEEK_COMPLETE: "Attendance for this week is complete",
  ATTENDANCE_ALREADY_RECORDED: "Attendance already recorded",
  INCONSISTENT_TRAINEE_ATTENDANCE: "Please complete attendance for all trainees",
  UPDATE_ATTENDANCE_ERROR: DEFAULT_MESSAGE,

  INTERNAL_SERVER_ERROR: DEFAULT_MESSAGE,
  SERVER_ERROR: DEFAULT_MESSAGE
};

export const handleError = (error: any): string => {
  if (error?.graphQLErrors?.length > 0) {
    const gqlError = error.graphQLErrors[0];
    const errorCode = gqlError?.extensions?.code;
    
    return ERROR_MESSAGES[errorCode] || DEFAULT_MESSAGE;
  }
  
  if (error?.networkError) {
    return "Please check your internet connection and try again";
  }
  
  return DEFAULT_MESSAGE;
};