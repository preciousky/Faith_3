import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { FcardModule } from '../common/fcard/fcard.module';

import { HomeComponent } from './home.component';
import { homeRoutes } from './home.routing';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgZorroAntdModule,
    FcardModule,
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
