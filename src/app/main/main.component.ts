import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  getInParent:any;
  @Input() searchValue: any;

  constructor() { }

  ngOnInit(): void {
  }

  mainSelected(getInParent:any){
    this.getInParent = getInParent;
    // console.log('main' , getInParent);
  }
}
