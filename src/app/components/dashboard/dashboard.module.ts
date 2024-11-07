import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SalesComponent } from './sales/sales.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TableComponent } from './sales/table/table.component';
import { SharedModule } from '../../shared/shared.module';
import { AppComponent } from '../../app.component';


@NgModule({
    declarations: [
        SalesComponent,
        TableComponent,
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class DashboardModule { }
