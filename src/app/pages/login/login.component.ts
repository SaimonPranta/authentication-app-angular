import { UserService } from 'src/app/services/userService/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private userService: UserService
  ) { }

  handleLogin = (data: any) => {
    if (data.email && data.password) {
      this.userService.login(data).subscribe( (result) => {
        console.log(result)
      })
    }
  }
}
