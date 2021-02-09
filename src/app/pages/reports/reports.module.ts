import { NgModule } from '@angular/core';
import { SharedModule } from "../../shared/shared.module";

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports/reports.component';

import { ChartModule } from "primeng/chart";

import { CalendarModule } from "primeng/calendar";
import { IMaskModule } from "angular-imask";

@NgModule({
  imports: [
    SharedModule,
    ReportsRoutingModule,
    ChartModule,
    CalendarModule,
    IMaskModule
  ],
  declarations: [ReportsComponent]
})
export class ReportsModule { }
