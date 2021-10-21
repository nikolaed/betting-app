import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoginError : boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    if(f.valid){
      this.authService.login(f.value).subscribe(result => {
        console.log(result);
        if(result.token){
          localStorage.setItem('token', result.token);
          this.router.navigate(['']);
        }
      },
        (err: HttpErrorResponse) => {
          this.isLoginError = true;
      });
    }
  
  
  }

}
