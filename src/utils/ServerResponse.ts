import { IServerResponse } from './IServerResponse';
import { isNil } from 'lodash';

export class ServerResponse<T> implements IServerResponse {
  errors: Array<string>;
  warnings: Array<string>;
  Value: T;

  constructor(response: IServerResponse) {
    this.errors = isNil(response.errors) ? [] : response.errors;
    this.warnings = isNil(response.warnings) ? [] : response.warnings;
    this.Value = JSON.parse(response.Value);
  }
}
