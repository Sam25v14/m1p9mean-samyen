import { Injectable } from '@angular/core';

const USER_KEY = 'USER_SESSION';
const TOKEN_KEY = 'ACCESS_TOKEN';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  public createSession(user: any): void {
    this.saveUser(user);
    this.saveToken(user?.token);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }
}
