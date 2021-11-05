import { Component, Input, Output, ViewChild, EventEmitter, SimpleChanges } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent{

  constructor() { }
  @Input('length') length!: number;
  @Input('pageSize') pageSize!: number;
  @Input('pageSizeOptions') pageSizeOptions!: number[];
  @Input('pageIndex') pageIndex: any;
  @Output('page') page: EventEmitter<PageEvent> = new EventEmitter();
  @ViewChild(MatPaginator) matPaginator!: MatPaginator;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
  setPage(event:any) {
    this.page.emit(event);
  }
  ngOnChanges(changes: SimpleChanges){
    // console.log('length: ' , this.length);
    // console.log('pageSize: ' ,this.pageSize);
    // console.log('pageSizeOptions: ' ,this.pageSizeOptions);
    // console.log('changes: ' ,changes);
  }
}
