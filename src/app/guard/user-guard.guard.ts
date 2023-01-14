
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/userService/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuardGuard implements CanActivate {
  constructor(
    private userService: UserService
  ){

  }
  ngOnInit(): void {
    this.userService.user().subscribe((result: any) => {
      if (result.data) {
        this.userService.isAuthenticated.next(true)
      } else {
        this.userService.isAuthenticated.next(false)
      }
    })
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.userService.isAuthenticated.getValue()
  }
  
}
