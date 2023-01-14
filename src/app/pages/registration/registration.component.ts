import { CookieService } from 'ngx-cookie-service';
import { Component } from '@angular/core';
import { UserService } from 'src/app/services/userService/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {


  errorMessage: String | Boolean = false;

  constructor(
    public userService: UserService,
    private router: Router,
    private cookie: CookieService

  ) { }
  ngOnInit(): void {
    if (this.userService.isAuthenticated.getValue() == true) {
      this.router.navigate(["dashboard"])
    }

  }

  handleRegistation = (data: any) => {
    if (data.firstName == false || data.lastName == false || data.email == false || data.password == false) {
      this.errorMessage = "Plase Fill the full form and try angain."
    } else {
      if (data.password == data.confirmPassword) {
        this.errorMessage = false
        this.userService.registation(data).subscribe((result: any) => {
          if (result.data) {
            this.router.navigate(["login"])
          }
          if (result.token) {
            this.cookie.set("token", result.token)
          }
        })
      } else {
        this.errorMessage = "Confirm passowrd doen't match."
      }

    }
  }

}
