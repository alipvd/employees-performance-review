import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { HttpClient } from "@angular/common/http";
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent implements OnInit {

  displayedColumns = ['firstName', 'lastName', 'nationalCode', 'totalPresentsHour', 'avgEntranceTime', 'avgExitTime', 'employeeProduct'];
  dataSource!: MatTableDataSource<any>
  @Input() searchValue: any;


  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('/assets/Employees.json').subscribe((result: any) => {
      // console.log('result is : ', result);
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
    })
  }
  ngOnChanges() {
    if (this.dataSource) {
      this.dataSource.filter = this.searchValue;
      console.log('list ', this.searchValue);
    }
  }
}
