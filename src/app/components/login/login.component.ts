import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  formLogin!: FormGroup;
  subLogin$!: Subscription;
  

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private usersService: UsersService
  ) {
    this.formLogin = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  onLogin() {
    const credentials = {
      email: this.formLogin.get('email')?.value,
      password: this.formLogin.get('password')?.value,
    };

    this.subLogin$ = this.usersService.login(credentials).subscribe({
      next: (response) => {
        console.log(response);
        sessionStorage.setItem('token', response.access_token || '');
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }


  
  ngOnDestroy(): void {
    this.subLogin$ && this.subLogin$.unsubscribe();
  }
}
