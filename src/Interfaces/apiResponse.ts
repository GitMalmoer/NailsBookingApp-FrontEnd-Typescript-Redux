export default interface apiResponse {
    data?: {
      httpStatusCode?: number;
      isSuccess?: boolean;
      errorMessages?: Array<string>;
      result: any;
    };
    error? : any,
  }


//   result: { [key: string]: string };