import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  errorMessage: Boolean = false

  handleRegistation = (data: any) => {
    if (data.firstName == false || data.lastName == false || data.email == false || data.passowrd == false ) {
      this.errorMessage = true
      
    } else {
      this.errorMessage = false
      
    }
  }

}
