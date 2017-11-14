import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { DepartmentModel } from './../models/department.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

export const URL = 'http://localhost:3000/departments/';

@Injectable()
export class DepartmentService {

  constructor(private http: Http) {}

  public getDepartment(): any {
    return this.http.get(URL);
  }
}
