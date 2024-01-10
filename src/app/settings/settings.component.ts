import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../store.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
    public accountName: string | undefined;
    public accountEmail: string | undefined;

    public constructor(private readonly router: Router,
                       private readonly storeService: StoreService) {
    }

    public ngOnInit(): void {
        this.accountName = this.storeService.getAccountName();
        this.accountEmail = this.storeService.getAccountEmail();
    }

    public deleteAccount(): void {
        this.router.navigate(['/login']);
    }

    public logout(): void {
        this.router.navigate(['/login']);
    }

    public goToEditPage(): void {
        this.router.navigate(['/edit']);
    }
}
