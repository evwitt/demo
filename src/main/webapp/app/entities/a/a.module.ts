import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DemoSharedModule } from 'app/shared/shared.module';
import { AComponent } from './a.component';
import { ADetailComponent } from './a-detail.component';
import { AUpdateComponent } from './a-update.component';
import { ADeleteDialogComponent } from './a-delete-dialog.component';
import { aRoute } from './a.route';

@NgModule({
  imports: [DemoSharedModule, RouterModule.forChild(aRoute)],
  declarations: [AComponent, ADetailComponent, AUpdateComponent, ADeleteDialogComponent],
  entryComponents: [ADeleteDialogComponent],
})
export class DemoAModule {}
