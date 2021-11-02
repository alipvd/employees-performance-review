import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { HttpClient } from "@angular/common/http";
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import { NewEmployeeComponent } from '../new-employee/new-employee.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  displayedColumns = ['firstName', 'lastName', 'nationalCode', 'totalPresentsHour', 'avgEntranceTime', 'avgExitTime', 'employeeProduct'];
  dataSource!: MatTableDataSource<any>
  forNew!: any;
  @Input() searchValue: any;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  constructor(
    private httpClient: HttpClient,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
    this.httpClient.get('/assets/Employees.json').subscribe((result: any) => {
      // console.log('result is : ', result);
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
      this.forNew = result;
    })
  }
  ngOnChanges() {
    if (this.dataSource) {
      this.dataSource.filter = this.searchValue;
      console.log('list ', this.searchValue);
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(NewEmployeeComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('result pass from dialog',result);
      this.forNew.push(result);
      this.dataSource = new MatTableDataSource(this.forNew);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
    });
  }
}


