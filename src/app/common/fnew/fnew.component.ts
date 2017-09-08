import { Component, OnInit, Input } from '@angular/core';

interface fNew {
  id: number;
  title?: string;
  info?: string;
  date?: any;
  from?: any;
}

@Component({
  selector: 'fnew',
  templateUrl: './fnew.component.html',
  styleUrls: ['./fnew.component.scss']
})

export class FnewComponent implements OnInit {
  @Input() fNewList: Array<fNew>;
  @Input() routeURL: string;
  constructor() { }

  ngOnInit() {
  }

}
