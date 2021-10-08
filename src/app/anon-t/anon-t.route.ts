import { Routes, RouterModule } from '@angular/router';
import { AnonTComponent } from './anon-t.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  { path: '', component: AnonTComponent },
];

export const routing = RouterModule.forChild(routes);