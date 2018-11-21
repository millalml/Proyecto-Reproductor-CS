import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CancionPage } from './cancion';

@NgModule({
  declarations: [
    CancionPage,
  ],
  imports: [
    IonicPageModule.forChild(CancionPage),
  ],
})
export class CancionPageModule {}
