import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  searchValue!: any;
  dataSource: any;

  constructor() { }

  ngOnInit(): void {
  }

  @Output() searchEvent = new EventEmitter<HTMLInputElement>();

  filterData(searchValue: any){
    this.searchEvent.emit(searchValue);
      // this.dataSource.filter = this.searchValue;

    // console.log('filter ' , this.searchValue);
  }

}
