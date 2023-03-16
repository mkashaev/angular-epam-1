import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  constructor(private window: Window) {}

  showWindow() {
    console.log(this.window);
  }

  setToken(token: string) {
    this.window.sessionStorage.setItem('token', token);
  }

  getToken() {
    return this.window.sessionStorage.getItem('token');
  }

  deleteToken() {
    this.window.sessionStorage.removeItem('token');
  }
}
