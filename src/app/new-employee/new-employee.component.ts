import { Component, OnInit, Input, ViewChild, Inject} from '@angular/core';
import { Employee } from '../employee';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NewEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Employee
  ) { }

  ngOnInit(): void {

  }

  employee: Employee = {
    firstName: '',
    lastName: '',
    nationalCode: '',
    totalPresentsHour: '',
    avgEntranceTime: '',
    avgExitTime: '',
    employeeProduct: '',
  };

  addNew() {
    this.dialogRef.close(this.employee);
  }
  onNoClick(){
    this.dialogRef.close();
  }
}
