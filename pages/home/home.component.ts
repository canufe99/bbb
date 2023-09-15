import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', 'home.component-alternative.css']
})
export class HomeComponent implements OnInit {
  @Input()
  id:string = '0';
  @Input()
  homePagePhoto: string = '';
  @Input()
  homePageTitle: string = '';
  @Input()
  homePageSubitle: string = '';
  @Input()
  homePageDescription: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
