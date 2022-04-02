import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { join } from '@fireflysemantics/join';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private REST_API_SERVER: string = environment.apiUrl;
  private _baseRoute: string;

  constructor(private httpClient: HttpClient) {
    this._baseRoute = '';
  }

  public get baseRoute() {
    return this._baseRoute;
  }

  public set baseRoute(value: string) {
    this._baseRoute = value;
  }

  public getFullApiUrl(route = '') {
    return join(this.REST_API_SERVER, this._baseRoute, route);
  }

  public get(route: string) {
    return this.httpClient.get(this.getFullApiUrl(route));
  }

  public post(route: string, data: any) {
    return this.httpClient.post(this.getFullApiUrl(route), data);
  }
}
