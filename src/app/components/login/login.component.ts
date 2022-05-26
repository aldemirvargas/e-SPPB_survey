import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  formLogin!: FormGroup;
  subRef$!: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.formLogin = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  onLogin() {
    const user = {
      username: this.formLogin.get('username')?.value,
      password: this.formLogin.get('password')?.value,
    };

    this.subRef$ = this.http
      .post('http://localhost:8000/api/v1/login', user, {
        observe: 'response',
      })
      .subscribe(
        (res) => {
          console.log(res);
          if (res.status === 200) {
            sessionStorage.setItem('token', 'res.body');
            this.router.navigate(['/home']);
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }

  ngOnDestroy(): void {
    if (this.subRef$) {
      this.subRef$.unsubscribe();
    }
  }
  
}
