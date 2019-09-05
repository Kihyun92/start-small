import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main.routing';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    MainRoutingModule,
  ],
  providers: [],
})
export class MainModule { }