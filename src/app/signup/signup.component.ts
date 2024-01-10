import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public firstName: string | undefined;
  public lastName: string | undefined;
  public email: string | undefined;
  public password: string | undefined;

  public constructor(private readonly router: Router) { }

  public ngOnInit(): void {
  }

  public createAccount(): void {
    this.router.navigate(['/login']);
  }

  public isCreateDisabled(): boolean {
    return !this.firstName || !this.lastName || !this.email || !this.password;
  }
}
