import { Injectable } from '@angular/core';
import {RESTClient, DefaultHeaders, BaseUrl} from "ng2-http/dist/esm/src/index";
import {ApiUrlPrefix} from "../api-router/api-url-prefix";
import {Http, Request, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {SessionStorageService} from "ng2-webstorage/dist/app";
@BaseUrl(new ApiUrlPrefix().getHostURL())
@DefaultHeaders({
  'Accept': 'application/json',
  'Content-Type': 'application/json',
y
})
@Injectable()
export class UserServiceService extends RESTClient{
  protected getDefaultHeaders():Object{
      return super.getDefaultHeaders();}

  protected requestInterceptor(req:Request):Request{
      return super.requestInterceptor(req);}

  protected responseInterceptor(res:Observable<Response>):Observable<Response>{
      return super.responseInterceptor(res);}

  protected getBaseUrl():string{
      return super.getBaseUrl();}

  constructor(protected http: Http) {
    super(http)
  }

  public decodeUserToken = ()=>{

  }

}
