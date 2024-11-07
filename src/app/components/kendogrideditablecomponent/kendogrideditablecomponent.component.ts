import { ChangeDetectorRef, Component, NgZone, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
// import { DialogRef } from '@progress/kendo-angular-dialog';
import { Observable } from 'rxjs';
import { EnumOctoNotificationType, OctoConfirmDialogService, OctoDialogService, OctoNotificationService } from 'octo-controls';

@Component({
  selector: 'app-kendogrideditablecomponent',
  templateUrl: './kendogrideditablecomponent.component.html',
  styleUrls: ['./kendogrideditablecomponent.component.scss']
})
export class KendogrideditablecomponentComponent {

  @ViewChild('content1') content1!: TemplateRef<any>;
  @ViewChild('content2') content2!: TemplateRef<any>;
  @ViewChild('dialogTemplate') dialogTemplate!: TemplateRef<any>;
  tabItems: { title: string, content: TemplateRef<any>, selected: boolean }[] = [];
  selectedTime: Date = new Date();
  timeFormat: string = 'HH:mm';
  selectedDateRange: Date[] = [new Date(), new Date()];
  constructor(private zone: NgZone, private dialogService: OctoConfirmDialogService, private viewContainerRef: ViewContainerRef, private octoDialogService: OctoDialogService, private notifyService: OctoNotificationService) {

  }
  ngAfterViewInit() {
    this.zone.run(() => {
      this.tabItems = [
        { title: 'Tab 1', content: this.content1, selected: true },
        { title: 'Tab 2', content: this.content2, selected: false }
      ];
    });
  }
  onTabSelected(index: number) {
    // this.cdr.detectChanges();
  }

  showConfirm() {
    this.dialogService.openDialog('Confirmation', 'Are you sure you want to proceed?', this.viewContainerRef)
      .subscribe(result => {
        if (result.primary) {
          console.log('Confirmed');
        } else {
          console.log('Cancelled');
        }
      });
  }
  // private dialogRef: DialogRef | null = null;
  openDialog() {
    // const title = 'Dialog Example';
    // const buttons = [{ text: 'Ok' }, { text: 'Cancel' }];
    // this.dialogRef = this.octoDialogService.openDialog(title, this.dialogTemplate, this.viewContainerRef, buttons);
    // this.dialogRef.result.subscribe(result => {
    //   alert('b')
    // });
  }
  closeDialog() {
    //this.dialogRef?.close();
  }
  notify(): void {
    this.notifyService.show("HI Amit", EnumOctoNotificationType.Warning);
  }
}

