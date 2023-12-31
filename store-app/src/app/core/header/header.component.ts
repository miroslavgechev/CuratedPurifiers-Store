import { Component } from '@angular/core';
import { SignOutService } from 'src/app/auth/sign-out.service';
import { IsCartEmptyService } from 'src/app/shared/services/is-cart-empty.service';
import { IsUserLoggedInService } from 'src/app/shared/services/is-user-logged-in.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  get isUserLoggedIn(): boolean {
    return !!this.isUserLoggedInService.isUserLoggedIn;
  }

  constructor(
    private isUserLoggedInService: IsUserLoggedInService,
    private signOutService: SignOutService,
    private isCartEmptyService: IsCartEmptyService
  ) {}

  logout() {
    this.signOutService.logout();
  }

  isCartEmpty(): boolean{
    return this.isCartEmptyService.isCartEmpty();
  }

}

