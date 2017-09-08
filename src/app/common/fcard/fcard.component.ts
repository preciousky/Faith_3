import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface ShowCard {
  name: string;
  fund_id: number;
  pic: string;
  reason: string;
  forecast_profit_rate: string;
}


@Component({
  selector: 'fcard',
  templateUrl: './fcard.component.html',
  styleUrls: ['./fcard.component.scss']
})
export class FcardComponent implements OnInit {
  @Input() fCardList: Array<ShowCard> = [];
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  private goDetails(fundId: number): void {
    this.router.navigate(['/details', fundId]);
  }
}
