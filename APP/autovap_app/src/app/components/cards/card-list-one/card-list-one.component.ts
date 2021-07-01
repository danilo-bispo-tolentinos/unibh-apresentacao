import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list-one',
  templateUrl: './card-list-one.component.html',
  styleUrls: ['./card-list-one.component.scss'],
})
export class CardListOneComponent implements OnInit {

  @Input() result;
  constructor() { }

  ngOnInit() {
    console.log(this.result);
  }

}
