import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsersService } from '../../services/users.service';
import { NotifierService } from 'angular-notifier';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Input() userLogged: any;
  subLogout$!: Subscription;
  private readonly notifier: NotifierService;
  constructor(
    private router: Router,
     private usersService: UsersService,
     notifierService: NotifierService
    ) {
      this.notifier = notifierService;
    }

  ngOnInit(): void {}
  onLogout() {
    this.subLogout$ = this.usersService.logout().subscribe({
      next: (response) => {
        sessionStorage.removeItem('token');
        this.router.navigate(['/login']);
      },
      error: (error) => {
        this.notifier.show({
          type: 'error',
          message: error.error.message,
        });
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
