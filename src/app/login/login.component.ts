import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email: string | undefined;
  public password: string | undefined;

  public constructor(private readonly router: Router) { }

  public ngOnInit(): void {
  }

  public login(): void {
    this.router.navigate(['dashboard']);
  }

  public isLoginDisabled(): boolean {
    return !this.email || !this.password;
  }
}
