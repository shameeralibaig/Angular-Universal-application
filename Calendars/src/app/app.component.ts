import { Component, ViewChild, Inject, ViewEncapsulation, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http/src/headers';
import { HttpParams } from '@angular/common/http';
import { DatePickerComponent, CalendarComponent, DateRangePickerComponent,
 DateTimePickerComponent, TimePickerComponent } from '@syncfusion/ej2-ng-calendars';
 import { SidebarComponent } from '@syncfusion/ej2-ng-navigations';
 import { ButtonComponent } from '@syncfusion/ej2-ng-buttons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
@ViewChild('togglebtn')
public togglebtn: ButtonComponent;
@ViewChild('sidebar')
    public sidebar: SidebarComponent;
    btnClick() {

      if (this.togglebtn.element.classList.contains('e-active')) {
        this.togglebtn.content = 'Close Sidebar';
          this.sidebar.show();
      } else {
        this.togglebtn.content = 'Open Sidebar';
        this.sidebar.hide();
      }
  }
}
