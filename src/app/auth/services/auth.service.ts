import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ILoginRequestDto } from '../dto/loginRequest.dto';
import { ILoginResponseDto } from '../dto/loginResponse.dto';
import { IRegisterRequestDto } from '../dto/registerRequest.dto';
import { IRegisterResponseDto } from '../dto/registerResponse.dto';
import { SessionStorageService } from './session-storage.service';

import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _isAuthorized$$!: BehaviorSubject<boolean>;
  public isAuthorized$!: Observable<boolean>;

  constructor(
    private http: HttpClient,
    private sessionStorageService: SessionStorageService,
    private router: Router
  ) {
    const token = this.sessionStorageService.getToken();
    this._isAuthorized$$ = new BehaviorSubject<boolean>(!!token);
    this.isAuthorized$ = this._isAuthorized$$.asObservable();
  }

  public get isAuthorized() {
    return this._isAuthorized$$.value;
  }

  register(registerDto: IRegisterRequestDto) {
    return this.http.post<IRegisterResponseDto>(`${environment.apiUrl}/register`, registerDto);
  }

  login(loginDto: ILoginRequestDto) {
    return this.http.post<ILoginResponseDto>(`${environment.apiUrl}/login`, loginDto).pipe(
      map((response) => {
        this.sessionStorageService.setToken(response.result);
        this._isAuthorized$$.next(true);
        return response;
      })
    );
  }

  logout() {
    this.sessionStorageService.deleteToken();
    this._isAuthorized$$.next(false);
    this.router.navigate(['/login']);
  }
}
