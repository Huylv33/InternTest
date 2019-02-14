import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RfqVendorComponent } from './rfq-vendor/rfq-vendor.component';
import { PerchaseRequestComponent } from './perchase-request/perchase-request.component';
const routes: Routes = [
  { path: '', redirectTo: '/rfq', pathMatch: 'full' },
  { path: 'rfq', component: RfqVendorComponent},
  { path: 'createPerchaseRequest', component: PerchaseRequestComponent},
  
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
