import { UserService } from 'src/app/services/userService/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'authentication_app';
  constructor(
    private userService: UserService
  ) { }
  ngOnInit(): void {
    this.userService.user().subscribe((result: any) => {
      if (result.data) {
        this.userService.isAuthenticated.next(true)
      } else {
        this.userService.isAuthenticated.next(false)
      }
    })
  }
}
