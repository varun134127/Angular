import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/shared/contact.model';
import { ContactService } from 'src/app/shared/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(public service:ContactService)
  {}
  ngOnInit(): void {
    this.service.refreshContact();
  }  

  populateForm(contact: Contact) {
    
    this.service.formData = Object.assign({}, contact);
  } 

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteContact(id).subscribe(res => {
        this.service.refreshContact();
        
      });
    }
  }
}
