import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-base-query-handler',
  template: `<div></div>` // Add your HTML template here
})
export abstract class AppComponentBase implements OnInit {
  id: number = 0;
  type: string = '';
  view: boolean = false;
  edit: boolean = false;
  filter: string = '';
  pageNo: number=1;
  pageSize: number=10;
  totalCount: number=0;

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = +params['id'] || 0;
      this.type = params['Type'] || '';
      if (this.type === 'View') {
        this.view = true;
      } else if (this.type === 'Edit') {
        this.edit = true;
      }
    });
  }
  showConfirmation(
    confirmTitle: string = 'AreYouSure',
    confirmText: string = 'You Want To Delete This Record?',
    confirmButtonText: string = 'Yes',
    cancelButtonText: string = 'No',
    confirmButtonColor: string = '#0052cc',
    cancelButtonColor: string = '#0052cc'
  ) {
    return Swal.fire({
      icon: 'warning',
      title: confirmTitle,
      text: confirmText,
      confirmButtonColor: confirmButtonColor,
      cancelButtonColor: cancelButtonColor,
      showCancelButton: true,
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText
    });
  }


  showSuccess(message: string) {
    return Swal.fire({
      icon: 'success',
      text: message,
      confirmButtonText: 'Ok'
    });
  }

  showError(message: string) {
    return Swal.fire({
      icon: 'error',
      text: message,
      confirmButtonText: 'Ok'
    });
  }

  showWarning(message: string) {
    return Swal.fire({
      icon: 'warning',
      text: message,
      confirmButtonText: 'Ok'
    });
  }

}
