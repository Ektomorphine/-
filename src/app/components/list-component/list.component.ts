import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { DepartmentModel } from '../../models/department.model';
import { DepartmentService } from '../../services/department.service';
import { Response } from '@angular/http';

@Component({
  selector: 'list-component',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public signs: DepartmentModel[];
  public iteration = 0;
  public validation = false;

  constructor( private _departmentService: DepartmentService ) {}

  ngOnInit() {
    this._departmentService
      .getDepartment()
      .subscribe((data => this.signs = data.json()));
  }

  public next(): void {
    this.iteration++;
  }

  public signDocument(item): void {
    console.log(item.departmentName);
    this.signs[item.id].isSigned = true;
    this.checkValidation();
  }

  public checkValidation(): void {
    if((this.signs[0].isSigned || this.signs[1].isSigned) && ((this.signs[2].isSigned) &&
      this.signs[3].isSigned)) {
      this.validation = true;
      console.log(this.validation);
    }
  }

  public submit(): void {
    this._departmentService.sendData(this.signs);
  }
}
