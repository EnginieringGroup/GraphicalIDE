import {IBaseModel} from "./base-model.interface";
import {IError} from "./register-use-data.interface";
/**
 * Created by Abc on 2017-01-16.
 */
export interface IProjectModel extends IBaseModel,IError{
  userId?: number,
  buttonId?: number,
  content?: any,
  name?: string,
  timestamp?: string
}
