import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsersService } from '../../services/users.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Input() userLogged: any;
  subLogout$!: Subscription;
  constructor(private router: Router, private usersService: UsersService) {}

  ngOnInit(): void {}
  onLogout() {
    console.log('logout');
    this.subLogout$ = this.usersService.logout().subscribe({
      next: (response) => {
        console.log(response);
        sessionStorage.removeItem('token');
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  home() {
    this.router.navigate(['/home']);
  }
  ngOnDestroy(): void {
    this.subLogout$ && this.subLogout$.unsubscribe();
  }
}
