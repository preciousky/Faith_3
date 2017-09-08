import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FcardComponent } from './fcard.component';

import { NgZorroAntdModule } from 'ng-zorro-antd';
@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
  ],
  exports: [
    FcardComponent
  ],
  declarations: [FcardComponent]
})
export class FcardModule { }
