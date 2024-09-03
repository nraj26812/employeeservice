import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  API = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  public registerEmployee(employeeData: any) {
    return this.http.post(`${this.API}/employee`, employeeData);
  }

  public getEmployees() {
    return this.http.get(`${this.API}/employee`);
  }

  public deleteEmployee(employeeId: any) {
    return this.http.delete(`${this.API}/employee/${employeeId}`);
  }

  public updateEmployee(employee: any) {
    return this.http.put(`${this.API}/employee/${employee.id}`, employee);
  }
}
