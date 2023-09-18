import { Injectable } from '@angular/core';
import { Contact } from './contact.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  formData: Contact;
  list: Contact[];

  readonly rootUrl = "http://localhost:35558/api/Contact"
  constructor(private http: HttpClient) { } 

  postContact(formData: Contact)
  {
    console.log("inside post");
    
    console.log(formData.ContactId);
    return this.http.post(this.rootUrl, formData);
  } 

  refreshContact()
    {
      return this.http.get(this.rootUrl).toPromise().then(res => this.list = res as Contact[]);
    } 

    putContact(formData : Contact){
      return this.http.put(this.rootUrl+'/'+formData.ContactId,formData);
       
     }

     deleteContact(id : number){
      console.log(id);
      return this.http.delete(this.rootUrl+'/'+id);
     }
  
}
