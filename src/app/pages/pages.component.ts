import { UserService } from 'src/app/services/userService/user.service';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
  validUser = new BehaviorSubject(false)

  constructor(
    private userService: UserService
  ) { }
  ngOnInit(): void {
    if (this.userService.isAuthenticated.getValue()) {
      this.validUser.next(true)
    }else{
      this.validUser.next(false)
    }
  }

}
