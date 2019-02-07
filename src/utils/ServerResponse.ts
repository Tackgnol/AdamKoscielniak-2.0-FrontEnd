import { IServerResponse } from './IServerResponse';
import { isNil } from 'lodash';

export class ServerResponse<T> implements IServerResponse {
  errors: Array<string>;
  warnings: Array<string>;
  Value: T;

  IsJsonString = str => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  };

  constructor(response: IServerResponse) {
    this.errors = isNil(response.errors) ? [] : response.errors;
    this.warnings = isNil(response.warnings) ? [] : response.warnings;
    this.Value = this.IsJsonString(response.Value)
      ? JSON.parse(response.Value)
      : response.Value;
  }
}
