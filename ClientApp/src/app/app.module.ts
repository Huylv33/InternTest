import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { RfqVendorComponent } from './rfq-vendor/rfq-vendor.component';
import { AppRoutingModule } from './app-routing.module';
import { PerchaseRequestComponent } from './perchase-request/perchase-request.component';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { WarningComponent } from './Shared/warning/warning.component';
import { FileInputComponent } from './file-input/file-input.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    RfqVendorComponent,
    PerchaseRequestComponent,
    WarningComponent,
    FileInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgSelectModule,
    AppRoutingModule,
    CommonModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      closeButton: true,
      timeOut: 5000
    }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

