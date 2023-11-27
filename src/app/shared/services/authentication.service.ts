import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { enviroment } from 'src/app/enviroments/enviroment';

const WEB_API_KEY = enviroment.firebaseApiKey;
const REGISTER_URL =
`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${WEB_API_KEY}`;
const LOGIN_URL =
`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${WEB_API_KEY}`;


export interface IAuthReqData {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface IAuthResData{
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}
@Injectable({ providedIn: "root" })
export class AuthService {
    currUser = new BehaviorSubject<User | null>(null);
    private tokenExpTimer: any;


    constructor(private http: HttpClient, private router: Router) {}

    register(authData: IAuthReqData){
      if (!authData.email || !authData.password) return;

      const authRes = this.http
      .post<IAuthResData>(REGISTER_URL, {
        ...authData,
        returnSecureToken: true,
      })
      .pipe(
        tap((res) => {
          const {email, localId, idToken,expiresIn } = res;
          this.handleAuth(email, localId, idToken, +expiresIn);
        })
      );
      return authRes;
    }

    Login(authData: IAuthReqData){
      if (!authData.email || !authData.password) return;

      const authRes = this.http
      .post<IAuthResData>(LOGIN_URL, {
        ...authData,
        returnSecureToken: true,
      })
      .pipe(
        tap((res) => {
          const {email, localId, idToken, expiresIn } = res;

          this.handleAuth(email, localId, idToken, +expiresIn);
        })
      );
      return authRes;
    }

    signOut() {
      this.currUser.next(null);
      this.router.navigate(['auth']);
    }

    autoSignInFromLocalStorage(){
      const userData = localStorage.getItem('userData');

      if (!userData) return;

      const lsUser: {
        id: string;
        email: string;
        _token: string;
        _tokenExpDate: string;
      } = JSON.parse(userData);

      const newUser = new User(
        lsUser.id,
        lsUser.email,
        lsUser._token,
        new Date(lsUser._tokenExpDate)
      );
      if (newUser.token) {
        this.currUser.next(newUser);

      const expDuration =
        new Date(lsUser._tokenExpDate).getTime() - new Date().getTime();
      this.autoSignOut(expDuration);
      }
    }

    autoSignOut(expDuration: number) {
      this.tokenExpTimer = setTimeout(() => {
        this.signOut();
      }, expDuration);
    }

   private handleAuth(
    email: string,
    userId: string,
    token: string,
    expiresIn: number) {

    const expDate = new Date( new Date().getTime() +expiresIn * 1000);
    console.log('expDate:', expDate);

    const newUser = new User(userId, email, token, expDate);
    this.currUser.next(newUser);

    this.autoSignOut(expiresIn * 1000);

    localStorage.setItem('userData', JSON.stringify(newUser));
  }
}
