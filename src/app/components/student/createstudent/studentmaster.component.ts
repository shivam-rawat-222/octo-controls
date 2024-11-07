import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AppComponentBase } from '../../basequeryhandler/basequeryhandler.component';
import { DateFormatPipePipe } from '../../../shared/pipes/date-format-pipe.pipe';
import { TranslatorService } from '../../../shared/translator/translator.service';
import { ValidationType,DateFormatSetting } from 'octo-controls';
interface Item {
  text: string;
  value: number;
}

@Component({
  selector: 'app-student-master',
  templateUrl: './studentmaster.component.html',
  styleUrls: ['./studentmaster.component.scss']
})
export class StudentMasterComponent extends AppComponentBase implements OnInit {
  student: any = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    address: '',
    countryId: null,
    cityId: null,
    branch: [],
    dateofbirth: null,
    gender: '',
    toogle:false,
    isActive: false
  };
  isChecked:boolean=false;
  public actionList :any= [];
  defaultAction:any = '';
  listdata = [{ name: 'Male', value: 'Male' }, { name: 'Female', value: 'Female' }]
  listdata1 = [{ name: 'Male', value: 'Male' }, { name: 'Female', value: 'Female' }]
  country: { name: string; value: number }[] = [];
  city: { name: string; value: number, countryId: number }[] = [];
  branchlist = [{ name: 'B.tech', value: 1 }, { name: 'BA', value: 2 }];
  cityList: any = [];
  inputValidationType: ValidationType = { type: 'alphabet' };
  inputEmailValidationType: ValidationType = { type: 'email' };
  public format: DateFormatSetting = {displayFormat: "MM/dd/yyyy",inputFormat: "MM/dd/yyyy"};
  public min: Date = new Date();
  public max: Date = new Date();
  public buttonClass: string = "";
  required: boolean = true;

  public listItems: Array<Item> = [
    { text: "Small", value: 1 },
    { text: "Medium", value: 2 },
    { text: "Large", value: 3 },
  ];

  public selectedItem: Item = { text: 'Select', value: 0 };
;
  constructor(
    route: ActivatedRoute,
    private router: Router,

    private dateFormatPipePipe: DateFormatPipePipe,
    private datePipe: DatePipe,
    private cdr: ChangeDetectorRef,
    private translator: TranslatorService
  ) {
    super(route);
  }

  override ngOnInit(): void {
    this.loadTranslatedActions();
    super.ngOnInit();
    this.getCountryData();
    this.getCityData();
    if (this.view || this.edit) {
      if (this.view) {
        this.required = false;
      }
      this.getDataById(this.id);
    }
  }
  cancel(event:any)
  {

  }
  loadTranslatedActions() {
    this.defaultAction = this.translator.translate.instant('general.saveandclose');
    this.actionList = [
      {
        text: this.translator.translate.instant('general.saveandclose')
      },
      {
        text: this.translator.translate.instant('general.saveandnew')
      }
    ];
  }
  onToggleChange(event: any) {
console.log(event);
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
  }
  onCountryValueChange(countryId: any): void {
    this.cityList = this.city.filter(c => c.countryId === countryId);
  }
  getDataById(id: number) {


  }
  getCountryById(countryId: any): void {
    this.cityList = this.city.filter(c => c.countryId === countryId);
    this.cdr.detectChanges();
  }


  saveStudent(event: any) {
    if (this.validateForm()) {
      if (this.edit) {
       
      } else {
      
      }

    } else {
      this.showWarning(this.translator.translate.instant('apiresponse.warning'));
     
    }
  }
  resetStudent() {
    this.student.firstName = '';
    this.student.lastName = '';
    this.student.emailAddress = '';
    this.student.address = '';
    this.student.countryId = null;
    this.student.cityId = null;
    this.student.branch = [];
    this.student.dateofbirth = null;
    this.student.gender = '';
    this.student.isActive = false;
  }
  validateForm(): boolean {
    const { firstName, lastName, emailAddress, address, countryId, cityId, branch, dateofbirth, gender } = this.student;

    if (
      firstName && lastName && emailAddress && address &&
      countryId && cityId && branch.length > 0 &&
      dateofbirth && gender
    ) {
      return true;
    }

    return false;
  }

}
