import { Routes, RouterModule } from '@angular/router';
import { GeneralInfoComponent } from './general-info.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  { path: '', component: GeneralInfoComponent },
];

export const routing = RouterModule.forChild(routes);