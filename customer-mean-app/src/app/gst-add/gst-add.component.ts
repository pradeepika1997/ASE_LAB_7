import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {CustomerService} from '../customer.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-gst-add',
  templateUrl: './gst-add.component.html',
  styleUrls: ['./gst-add.component.css']
})
export class GstAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private cs: CustomerService, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      c_name: ['', Validators.required ],
      c_email: ['', Validators.required ],
      c_id: ['', Validators.required ]
    });
  }

  addCustomer(c_id, c_name, c_email) {
    this.cs.addCustomer(c_id, c_name, c_email);
    this.router.navigate(['customer']);
  }

  ngOnInit() {
  }

}
