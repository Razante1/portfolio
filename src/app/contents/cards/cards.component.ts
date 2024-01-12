import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input()
  info:string = ''

  @Input()
  icone:string =''

  constructor() { }

  ngOnInit(): void {
  }

}
