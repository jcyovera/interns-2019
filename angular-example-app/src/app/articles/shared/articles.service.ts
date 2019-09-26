import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
apiURL = 'http://localhost:3000';
constructor(private http: HttpClient) { }

getAll() {
  let params = new HttpParams();
  params = params.append('_sort', 'votes');
  params = params.append('_order', 'desc');

  return this.http.get<any[]>(`${this.apiURL}/articles`, { params }).pipe();
}

}
