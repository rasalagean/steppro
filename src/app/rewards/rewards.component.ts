import { Component, OnInit } from '@angular/core';
import { RewardType } from './reward.type';

@Component({
    selector: 'app-rewards',
    templateUrl: './rewards.component.html',
    styleUrls: ['./rewards.component.scss'],
})
export class RewardsComponent implements OnInit {
    public rewards: RewardType[] = [
        { title: 'Save > 2 kg CO2 within a day', imgSrc: 'assets/icons/city.svg' },
        { title: 'Walk more than 10 km within a day', imgSrc: 'assets/icons/human.svg' },
        { title: 'Start your walk before 06:00 AM', imgSrc: 'assets/icons/clock.svg' },
        { title: 'Save more than 10 kg of CO2 within a week', imgSrc: 'assets/icons/leaf.svg' },
        { title: 'Walk every day for a month', imgSrc: 'assets/icons/arrow-up.svg' },
        { title: 'Walk a marathon (42 km) within a day', imgSrc: 'assets/icons/exclamation.svg' },
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}
