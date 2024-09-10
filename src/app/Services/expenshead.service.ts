import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/enviornments/enviorment";
import { Expense } from "src/app/Models/models";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExpensheadService {

  endPoint = "Expense";
    constructor(private http: HttpClient){
    }

    getHeadExpense() {
      return this.http.get<Expense[]>(`${environment.url}${this.endPoint}`);
  }

  addExpens(expens: Expense){
    return this.http.post(`${environment.url}${this.endPoint}`,expens)
}

deleteExpens(id: number) {
  return this.http.delete(`${environment.url}/${this.endPoint}/${id}`);
}

 // Update an existing expense head
 updateExpense(id: number, expense: Expense): Observable<any> {
  return this.http.put(`${environment.url}${this.endPoint}/${id}`, expense);
}
    
}
