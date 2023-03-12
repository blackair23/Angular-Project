import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, catchError, filter, of, Subscription, tap, throwError } from 'rxjs';
import { IListing } from '../interfaces/listing';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {
  private user$$ = new BehaviorSubject<undefined | null | IUser>(undefined);
  user$ = this.user$$.asObservable().pipe(
    filter((val): val is IUser | null => val !== undefined)
  );


  private _isLoggedIn$$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$$.asObservable()
  
  user: IUser | null = null;

  get isLoggedIn() {
    console.log('isLogged in inside auth service > ',this.user)
    return this.user !== null;
  }

  get token(){
    return JSON.parse(sessionStorage.getItem('userData') as string);
  }

  subscription: Subscription;

  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe(user => {
      this.user = user;
    });

    this._isLoggedIn$$.next(!!this.token);
  }


   register(username: string, email: string, password: string) {
    return this.http.post<IUser>('/users/register', {username, email, password})
    .pipe(tap(user => this.user$$.next(user)));
  }
  login( email: string, password: string) {
    return this.http.post<IUser>('/users/login', { email, password})
    .pipe(tap(user => this.user$$.next(user)));
  }

  getProfile(requestOptions: object, id: string){
    return this.http.get<IUser>(`/users/profile/${id}`, requestOptions)
      .pipe(
        tap(user => {
          console.log('get profile user',user)
          return this.user$$.next(user)}),
        catchError((err) => {
          this.user$$.next(null);
          return of(err);
       })
    );
  }

  getProfileListings(requestOptions: object, id: string){
    return this.http.get<IListing>(`/users/profileList/${id}`, requestOptions)
    .pipe(
      tap(listings => {
        console.log('get profile listings user',listings)
        return listings}),
      catchError((err) => {
        return of(err);
     })
  );
  }

  logout() {
    return this.http.get<void>('/users/logout')
    .pipe(tap(() => this.user$$.next(null)));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
