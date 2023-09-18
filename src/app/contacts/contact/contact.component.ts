import { Component, OnInit } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { ContactService } from 'src/app/shared/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public service:ContactService)
  {}

  ngOnInit(): void {
    this.resetForm();
  } 

  resetForm(form?: NgForm){
    if(form !=null)
  form.resetForm();
  this.service.formData = {
    ContactId:null,
    FirstName: '',
    LastName: '',
    PhoneNumber: '',
    Country:'',
    City: '',
    PostalCode:'',
    State:'',
    Email:'',
    Address:''

  }
  } 

  onSubmit(form: NgForm)
  {
    console.log("inside onSubmit");
    console.log(form.value.ContactId);
  if(form.value.ContactId == null)
    
     this.InsertContact(form);
     else
     this.updateContact(form);
   
  }

  

  InsertContact(form: NgForm)
  {
    console.log("inside insert")
    
    this.service.postContact(form.value).subscribe(
      res=>{this.resetForm(form)
        this.service.refreshContact();
      });
  } 

  updateContact(form: NgForm) {
    this.service.putContact(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.refreshContact();
    });

  }

}
