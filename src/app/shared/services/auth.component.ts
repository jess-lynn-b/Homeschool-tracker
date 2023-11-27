import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { AuthService, IAuthResData } from "./authentication.service";
import { Router } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  exportAs: 'ngForm',
})

export class AuthComponent{

  isLoginMode = true;
  errorMsg: string | null = null;
  authObsv: Observable<IAuthResData> | undefined;

  constructor(private authService: AuthService, private router: Router){}

  onAuthFormSubmit(form: NgForm) {

    const { email, password} = form.value;

    if(!form.valid || !email || !password) return;

    if (this.isLoginMode){
      this.authObsv =this.authService.Login({
        email,
        password,
      });
    } else {
      this.authObsv = this.authService.register({
        email,
        password,
      });
    }
     this.authObsv?.subscribe({
      next: (data) => {
        console.log(data);

        this.router.navigate(['hourForm']);
      },
      error: (res: HttpErrorResponse) => {
        console.log(res);
        this.errorMsg = res?.error?.error?.message || 'Something went wrong!';
      },
      complete: () => {
        console.log('Complete!');

        form.reset();
      },
    });
  }
  onSwitchAuthMode(){
    this.isLoginMode = !this.isLoginMode;
  }
}
