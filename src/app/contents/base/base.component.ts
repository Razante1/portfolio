import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  @Input()
  title:string = ''
  
  @Input()
  subTitle:string =''

  @Input()
  description:string =''

  @Input() 
  photo:string = ''


  constructor() { }

  ngOnInit(): void {
  }

}
