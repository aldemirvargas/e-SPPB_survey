import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private subscription: Subscription = new Subscription();
  public user: any;
  public isLoggedIn: boolean = false;
  constructor(private router: Router, private usersService: UsersService) {}

  ngOnInit(): void {
    this.onGetMe();
  }

  onGetMe() {
    this.subscription.add(
      this.usersService.me().subscribe({
      next: (data) => {
        if (data && data.id) {
          this.user = data;
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
          this.router.navigate(['/login']);
        }
      },
      error: (error) => {
        console.log(error);
        this.router.navigate(['/login']);
      },
    })
    );
  }

  OnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
