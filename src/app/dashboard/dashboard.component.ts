import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public userName: string | undefined;
  public distance = 3.6;
  public steps = 4611;
  public savedCo2 = 1.47;

  public constructor(private readonly router: Router,
                     private readonly storeService: StoreService) { }

  public ngOnInit(): void {
    this.userName = this.storeService.getAccountName();

    setInterval(() => {
      this.distance = (this.distance * 1.005) + (Math.random() / 100);
    }, 5000);

    setInterval(() => {
      this.steps = (this.steps * 1.001) + Math.random();
    }, 3500);

    setInterval(() => {
      this.savedCo2 += (Math.random() / 100);
    }, 8000);
  }

  public openRewards(): void {
    this.router.navigate(['/rewards']);
  }

  public openGoals(): void {
    this.router.navigate(['/goals']);
  }
}
