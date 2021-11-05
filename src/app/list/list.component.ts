import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { NewEmployeeComponent } from '../new-employee/new-employee.component';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  displayedColumns = ['firstName', 'lastName', 'nationalCode', 'totalPresentsHour', 'avgEntranceTime', 'avgExitTime', 'employeeProduct'];
  dataSource!: MatTableDataSource<any>

  forNew!: any;

  lengthCount: number = 0;

  @Input() searchValue: any;

  @ViewChild(PaginationComponent) PaginationComponent: PaginationComponent = new PaginationComponent;

  @ViewChild(MatSort) matSort!: MatSort;

  constructor(
    private httpClient: HttpClient,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.httpClient.get('/assets/Employees.json').subscribe((result: any) => {
      // console.log('result is : ', result);
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.paginator = this.PaginationComponent.matPaginator;
      this.dataSource.sort = this.matSort;
      this.forNew = result;
      this.lengthCount = result.length;
    })
  }
  ngOnChanges() {
    if (this.dataSource) {
      this.dataSource.filter = this.searchValue;
      // console.log('list ', this.dataSource);
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(NewEmployeeComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // console.log('result pass from dialog', result);
        this.forNew.push(result);
        this.dataSource = new MatTableDataSource(this.forNew);
        this.dataSource.paginator = this.PaginationComponent.matPaginator;
        this.dataSource.sort = this.matSort;
      }
    });
  }
}

