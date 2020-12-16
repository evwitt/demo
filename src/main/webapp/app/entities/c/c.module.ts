import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DemoSharedModule } from 'app/shared/shared.module';
import { CComponent } from './c.component';
import { CDetailComponent } from './c-detail.component';
import { CUpdateComponent } from './c-update.component';
import { CDeleteDialogComponent } from './c-delete-dialog.component';
import { cRoute } from './c.route';

@NgModule({
  imports: [DemoSharedModule, RouterModule.forChild(cRoute)],
  declarations: [CComponent, CDetailComponent, CUpdateComponent, CDeleteDialogComponent],
  entryComponents: [CDeleteDialogComponent],
})
export class DemoCModule {}
