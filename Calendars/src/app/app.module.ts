import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DatePickerModule, DateTimePickerModule, DateRangePickerModule, TimePickerModule,
CalendarModule } from '@syncfusion/ej2-ng-calendars';
import { SidebarModule } from '@syncfusion/ej2-ng-navigations';
import { ButtonModule } from '@syncfusion/ej2-ng-buttons';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    HttpClientModule,
    DatePickerModule,
    DateTimePickerModule,
    DateRangePickerModule,
    TimePickerModule,
    CalendarModule,
    SidebarModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
