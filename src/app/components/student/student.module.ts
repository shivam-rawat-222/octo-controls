import {  CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslatorService } from '../../shared/translator/translator.service';
import { StudentGridComponent } from './studentgrid.component';

import { StudentMasterComponent } from './createstudent/studentmaster.component';
import { DateFormatPipePipe } from '../../shared/pipes/date-format-pipe.pipe';
import { KendogrideditablecomponentComponent } from '../kendogrideditablecomponent/kendogrideditablecomponent.component';
import { CreatestudentwithformComponent } from './createstudentwithform/createstudentwithform.component';
 import { OctoModule } from 'octo-controls';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
const routes: Routes = [
  {
    path: "",
    children: [
      { path: "studentgrid", title: "Slica-Analytics", component: StudentGridComponent },
       { path: "createstudent", title: "Slica-Analytics", component: StudentMasterComponent },
      { path: "createstudentwithform", title: "Slica-Analytics", component: CreatestudentwithformComponent },
      { path: "demoothercontrols", title: "Slica-Analytics", component: KendogrideditablecomponentComponent },
    ]
  }

];
@NgModule({
  declarations: [
    StudentGridComponent,
    StudentMasterComponent,
    CreatestudentwithformComponent,
    KendogrideditablecomponentComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OctoModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
  
  ],
  providers: [DateFormatPipePipe,TranslatorService],
  schemas: [NO_ERRORS_SCHEMA],
})
export class StudentModule { }
