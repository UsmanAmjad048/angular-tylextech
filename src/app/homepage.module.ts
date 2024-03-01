import { NgModule } from '@angular/core';
import { SharedModule } from './shared.module';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [HomepageComponent],
  imports: [SharedModule]
})
export class HomepageModule {}