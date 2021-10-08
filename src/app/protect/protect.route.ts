import { Routes, RouterModule } from '@angular/router';
import { ProtectComponent } from './protect.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  { path: '', component: ProtectComponent },
];

export const routing = RouterModule.forChild(routes);