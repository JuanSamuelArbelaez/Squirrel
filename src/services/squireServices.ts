import { Injectable } from '@angular/core';
import { environment as environment } from '../environments/environments';
import * as models from '../models/models';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SquireService {
    private baseUrl = `${environment.apiBaseUrl}/squire`;

    constructor(private http: HttpClient) {}

    addSquire(squire: models.Squirrel): Promise<any> {
        const url = `${this.baseUrl}/insert-squirrel/AddSquire`;
        return new Promise(resolve =>this.http.post<any>(url, squire)
            .subscribe({
                next: (response) => {resolve(response)},
                error: (error) => { console.log(error)}
            })
        );
    }
    

    getSquiresByUser(userID: string): Promise<any> {
        const url = `${this.baseUrl}/view/view-squire/${userID}`;
        return new Promise(resolve => this.http.get<any>(url)
            .subscribe({
                next: (response) => {resolve(response)},
                error: (error) => {console.log(error)}
            })
        );
     }

    editSquire(squire: models.Squirrel): Promise<any> {
        const url = `${this.baseUrl}/edit-squirrel/EditSquire`;
        return new Promise(resolve => this.http.put<any>(url, squire)
            .subscribe({
                next: (response) => {resolve(response)},
                error: (error) => {console.log(error)}
            })
        );
    }

    deleteSquire(squireID: string): Promise<any> {
        const url = `${this.baseUrl}/delete-squirrel/DeleteSquire/${squireID}`;
        return new Promise(resolve => this.http.delete<any>(url)
            .subscribe({
                next: (response) => {resolve(response)},
                error: (error) => {console.log(error)}
            })
        );
    }
  }
