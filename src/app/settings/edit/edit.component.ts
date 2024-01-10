import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../store.service';
import { Router } from "@angular/router";

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {

    public newName: string | undefined;
    public newEmail: string | undefined;

    public constructor(private readonly storeService: StoreService,
                       private readonly router: Router) {
    }

    public ngOnInit(): void {
        this.newName = this.storeService.getAccountName();
        this.newEmail = this.storeService.getAccountEmail();
    }

    public save(): void {
        if (this.newName && this.newEmail) {
            this.storeService.saveAccountData(this.newName, this.newEmail);
            this.router.navigate(['settings']);
        }
    }
}
