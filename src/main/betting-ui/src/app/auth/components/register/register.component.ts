import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/shared/services/auth.service';
import { MustMatch } from '../confirm-password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({});
  submitted = false;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
   this.registerForm = this.formBuilder.group({
     username: ['', Validators.required],
     password: ['', Validators.required],
     confPassword: ['', Validators.required]
   }, {
     validator: MustMatch('password', 'confPassword')
   });
  }


  get f() { return this.registerForm.controls; }

  onSubmit() {

    this.submitted = true;

    if (this.registerForm.invalid){
      return;
    }

    this.authService.register(this.registerForm.value).subscribe(result => {
      console.log(result);
      localStorage.setItem('token',result.token);
      this.router.navigate(['']);
    },
      (err: HttpErrorResponse) =>{
        console.log(err);
      });

  }

}
