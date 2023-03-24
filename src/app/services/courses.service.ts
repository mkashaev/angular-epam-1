import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { environment } from '../../environments/environment';
import { ICourse } from '../models/course';
import { ICourseListResponseDto, ICourseResponseDto } from './dto/ICourseResponse.dto';

@Injectable({ providedIn: 'root' })
export class CoursesService {
  private _courses$$ = new BehaviorSubject<ICourse[]>([]);
  public courses$ = this._courses$$.asObservable();

  private _isLoading$$ = new BehaviorSubject<boolean>(false);
  public isLoading$ = this._isLoading$$.asObservable();

  private _courseById$$ = new BehaviorSubject<ICourse | null>(null);
  public courseById$ = this._courseById$$.asObservable();

  private _isCourseLoading$$ = new BehaviorSubject<boolean>(false);
  public isCourseLoading$ = this._isCourseLoading$$.asObservable();

  constructor(private http: HttpClient) {}

  getAll() {
    this._isLoading$$.next(true);
    this.http.get<ICourseListResponseDto>(`${environment.apiUrl}/courses/all`).subscribe({
      next: (data) => {
        this._courses$$.next(data.result);
      },
      complete: () => {
        this._isLoading$$.next(false);
      },
    });
  }

  getAllObservable(): Observable<ICourseListResponseDto> {
    return this.http.get<ICourseListResponseDto>(`${environment.apiUrl}/courses/all`);
  }

  getCourseById(id: string) {
    this._isCourseLoading$$.next(true);
    this.http.get<ICourseResponseDto>(`${environment.apiUrl}/courses/${id}`).subscribe({
      next: (data) => {
        this._courseById$$.next(data.result);
      },
      complete: () => {
        this._isCourseLoading$$.next(false);
      },
    });
  }

  getCourseByIdObservable(id: string): Observable<ICourseResponseDto> {
    return this.http.get<ICourseResponseDto>(`${environment.apiUrl}/courses/${id}`);
  }
}
