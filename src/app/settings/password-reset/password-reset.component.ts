import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../store.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {
  public email: string | undefined;

  public constructor(private readonly storeService: StoreService) {
  }

  public ngOnInit(): void {
    this.email = this.storeService.getAccountEmail();
  }

}
