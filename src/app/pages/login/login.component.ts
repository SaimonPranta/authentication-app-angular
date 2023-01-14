import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private userService: UserService,
    private router : Router,
    private cookie : CookieService
  ) { }

  ngOnInit(): void {
    if (this.userService.isAuthenticated.getValue()  == true) {
      this.router.navigate(["dashboard"])
    }
  }

  handleLogin = (data: any) => {
    if (data.email && data.password) {
      this.userService.login(data).subscribe( (result : any) => {
        if(result.token){
          this.cookie.set("token", result.token )
        }
        if (result.data) {
          this.userService.isAuthenticated.next(true)
          this.router.navigate(["dashboard"])
        }
      })
    }
  }
}
