import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-gst-edit',
  templateUrl: './gst-edit.component.html',
  styleUrls: ['./gst-edit.component.css']
})
export class GstEditComponent implements OnInit {

  angForm: FormGroup;
  customer: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    private cs: CustomerService,
    private fb: FormBuilder) {
      this.createForm();
     }

  createForm() {
    this.angForm = this.fb.group({
        c_id: ['', Validators.required ],
        c_name: ['', Validators.required ],
        c_email: ['', Validators.required ]
      });
    }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.cs.editCustomer(params['id']).subscribe(res => {
        this.customer = res;
      });
    });
  }

  updateCustomer(c_id, c_name, c_email) {
   this.route.params.subscribe(params => {
      this.cs.updateCustomer(c_id, c_name, c_email, params['id']);
      this.router.navigate(['customer']);
   });
}
}
