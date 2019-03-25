import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  uri = 'http://localhost:4000/customer';

  constructor(private http: HttpClient) { }

  addCustomer(cid, name, email) {
    const obj = {
      id: cid,
      name: name,
      email: email
    };
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));
  }

  getCustomer() {
    return this
      .http
      .get(`${this.uri}`);
  }

  editCustomer(id) {
    return this
      .http
      .get(`${this.uri}/edit/${id}`);
  }

  updateCustomer(cid, name, email, id) {

    const obj = {
      id: cid,
      name: name,
      email: email
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteCustomer(id) {
    return this
      .http
      .get(`${this.uri}/delete/${id}`);
  }
}
