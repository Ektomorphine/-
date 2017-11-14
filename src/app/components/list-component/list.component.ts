import { Component, OnInit } from '@angular/core';
import { DepartmentModel } from '../../models/department.model';
import { DepartmentService } from '../../services/department.service';
import { Response } from '@angular/http';

@Component({
  selector: 'list-component',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public signs: DepartmentModel[] = [];
  public iteration = 0;
  public validation: boolean;

  constructor( private _departmentService: DepartmentService ) {}

  ngOnInit() {
    this._departmentService
      .getDepartment()
      .subscribe((data => this.signs = data.json()));
  }

  public submitSign(): void {
    this.signs[this.iteration].isSigned = true;
    this.iteration++;
    this.calculateValidation();
  }

  public deniedSign(): void {
    this.iteration++;
  }

  public calculateValidation(): void {
    if (this.signs[0].isSigned && this.signs[1].isSigned && this.signs[2].isSigned &&
        this.signs[3].isSigned && this.signs[4].isSigned && this.signs[5].isSigned ) {
        this.validation = true;

    } else {
      this.validation = false;
    }
  }
}




















/* TODO: алерт по неудачному завершению */
