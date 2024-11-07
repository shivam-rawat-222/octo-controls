import { ChangeDetectorRef, Component, OnInit, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslatorService } from '../../shared/translator/translator.service';
import { AppComponentBase } from '../basequeryhandler/basequeryhandler.component';
import { studentdata } from './studentdata';
import { EnumOctoNotificationType, OctoConfirmDialogService, OctoDialogService, OctoNotificationService } from 'octo-controls';


@Component({
  selector: 'app-studentgrid',
  templateUrl: './studentgrid.component.html',
  styleUrls: ['./studentgrid.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StudentGridComponent extends AppComponentBase implements OnInit {
  public gridData: Array<{ProductId:number; ProductName: string;ProductDesc: string; ProductLocation: string; ProductIssuieDate: string;  UnitPrice: number; UnitsInStock: number; }> | undefined;
  selectedRows: any[] = []; 
  constructor(
    private router: Router,
     route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    public translator: TranslatorService,
    private dialogService: OctoConfirmDialogService,
    private viewContainerRef: ViewContainerRef
  )
  {
    super(route);

  }
  override ngOnInit(): void {
    super.ngOnInit();
    this.getPageWizeData();
  }

  cellClickHandler(event:any)
  {
    this.id=event.ProductId;
    console.log(event);
  }
  onPageChange(event: any) {
    this.pageNo = event.skip === 0 ? 1 : event.skip / event.take + 1;
  this.pageSize = event.take;
  this.getPageWizeData();
  }
  onFilterChange(event: any) {
  
  }
  getRowClass(context: any): string {
    return context.dataItem.UnitPrice ==18 ? 'highlight-row' : '';
  }
  getPageWizeData()
  {
    const startIndex = (this.pageNo - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.gridData =studentdata.slice(startIndex, endIndex);
    this.totalCount=studentdata.length;
    this.cdr.detectChanges();
  }
  onselectionChange(event:any): void {
    const selected = event.selectedRows.map((row: any) => row.dataItem);
    const deselected = event.deselectedRows.map((row: any) => row.dataItem);
  
    // Add newly selected rows to the selectedRows array
    selected.forEach((item: any) => {
      if (!this.selectedRows.includes(item)) {
        this.selectedRows.push(item);
      }
    });
  
    // Remove deselected rows from the selectedRows array
    deselected.forEach((item: any) => {
      this.selectedRows = this.selectedRows.filter(row => row !== item);
    });
  
    console.log('Selected Rows:', this.selectedRows);
  }
  copyData(): void {
    console.log(this.id);
  }
  viewData(): void {
    console.log(this.id);
  }
  editData(): void {
   console.log(this.id);
  }
  deleteData(): void {
    this.dialogService.openDialog('Confirmation', 'Are you sure you want to delete?', this.viewContainerRef)
    .subscribe(result => {
      if (result.primary) {
        console.log('Confirmed');
      } else {
        console.log('Cancelled');
      }
    });
  }
}
