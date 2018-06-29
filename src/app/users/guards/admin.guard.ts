import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../providers/auth.service';

@Injectable()
export class AdminGuard implements CanActivate {
  isAdmin = localStorage.getItem("isAdmin");
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.isAdmin == 'false' || !localStorage.getItem("token")) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }

}