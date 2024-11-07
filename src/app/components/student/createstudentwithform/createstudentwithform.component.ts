import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidationType } from 'octo-control';
import { DateUtils } from '../../../shared/common/dateutils';
import { DateFormatPipePipe } from '../../../shared/pipes/date-format-pipe.pipe';
import { AppComponentBase } from '../../basequeryhandler/basequeryhandler.component';
@Component({
  selector: 'app-createstudentwithform',
  templateUrl: './createstudentwithform.component.html',
  styleUrl: './createstudentwithform.component.scss'
})
export class CreatestudentwithformComponent extends AppComponentBase implements OnInit  {
  formGroup: FormGroup | undefined;
  textValue = "test";
  listdata = [{ name: 'Male', value: 'Male' }, { name: 'Female', value:'Female'}]
  country: { name: string; value: number }[] = [];
  city: { name: string; value: number, countryId: number }[] = [];
  branchlist = [ { name: 'B.tech', value: 1},{ name: 'BA', value: 2 }];
  cityList: any = [];
  inputValidationType: ValidationType = { type: 'alphabet' };
  inputEmailValidationType: ValidationType = { type: 'email' };
  // public format: FormatSettings = {
  //   displayFormat: "dd/MM/yyyy",
  //   inputFormat: "dd/MM/yyyy",
  // };
  public min: Date = new Date(2000, 0, 1);
  public max: Date = new Date();

  constructor(
    private fb: FormBuilder,
    route: ActivatedRoute,
    private router:Router,

    private dateFormatPipePipe: DateFormatPipePipe,
    private datePipe: DatePipe,
    private cdr: ChangeDetectorRef

  ) {
    super(route);
  }
  override ngOnInit(): void {
    this.initializeForm();
    super.ngOnInit();
    this.getCountryData();
    this.getCityData();
    if (this.view || this.edit) {
      this.getDataById(this.id);
    }
  }
  initializeForm() {
    this.formGroup = this.fb.group({
      firstName: [ { value: 'Shekhar',disabled: true},Validators.required],
      lastName: ['', Validators.required],
      dateofbirth: ['', Validators.required],
      emailAddress: ['shekhar@gmail.com', Validators.required],
      address: ['aligarh', Validators.required],
      gender: ['Male', Validators.required],
      countryId: [1, Validators.required],
      cityId: [1, Validators.required],
      branch: [[1], Validators.required],
      isActive: [true]
    });
  }
  getCountryData() {
    this.country = [
      { name: 'India', value: 1 },
      { name: 'America', value: 2 }
    ];
  }
  getCityData() {

    this.city = [
      { name: 'Aligarh', value: 1, countryId: 1 },
      { name: 'Los Angeles', value: 2, countryId: 2 }
    ];
    this.cityList = this.city;
  }
  onCountryValueChange(countryId: any): void {
    this.formGroup?.patchValue({
      cityId: null,
    });

    this.cityList = this.city.filter(c => c.countryId === countryId);
   // this.cdr.detectChanges();
  }
  saveStudent() {

    if (this.formGroup?.invalid) {
      this.formGroup.markAllAsTouched();
      this.showError('Please fill in all required fields.');
      return;
    }

    if (this.edit) {
   
    } else {
     
    }
  }
  getDataById(id: number) {
  
  
  }
  getCountryById(countryId: any): void {
    //this.formGroup?.patchValue({
    //  cityId: null,
    //});

    this.cityList = this.city.filter(c => c.countryId === countryId);
  //  this.cdr.detectChanges();
  }

}
