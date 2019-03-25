import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import Customer from '../customer';

@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.css']
})
export class GstGetComponent implements OnInit {

  customers: Customer[];

  constructor(private cs: CustomerService) { }

  ngOnInit() {
    this.cs
      .getCustomer()
      .subscribe((data: Customer[]) => {
        this.customers = data;
    });
  }

  deleteCustomer(id) {
    this.cs.deleteCustomer(id).subscribe(res => {
      console.log('Deleted');
    });
  }

}
