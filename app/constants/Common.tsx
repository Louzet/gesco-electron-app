interface Return {
  code: number | null;
  message: string | null;
}

export interface ErrorResponse extends Return {
  type: 'error';
}

export interface SuccessResponse extends Return {
  type: 'success';
}

// export type ErrorResponse = Error;
// export type SuccessResponse = Success;
