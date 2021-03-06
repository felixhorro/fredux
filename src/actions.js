const is = fn => (action, type) => action.type === fn(type);

// Promise Action Types
export const requestType = type => `${type}_REQUEST`;
export const successType = type => `${type}_SUCCESS`;
export const failureType = type => `${type}_FAILURE`;
export const isRequestType = is(requestType);
export const isSuccessType = is(successType);
export const isFailureType = is(failureType);

