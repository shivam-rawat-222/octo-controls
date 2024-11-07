import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  ShowMessage(message: any, typeIcon: any,title : any) {       
    Swal.fire({  
      title: title,  
      text: message,  
      icon: typeIcon,  
      confirmButtonText: 'Ok'  
    });  
  }}
