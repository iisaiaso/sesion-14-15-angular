import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HijoComponent } from './hijo/hijo.component';
import { DataBindingComponent } from './data-binding/data-binding.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HijoComponent,
    DataBindingComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,
    HijoComponent,
    DataBindingComponent
  ]
})
export class ComponentsModule { }
