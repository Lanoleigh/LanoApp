import { Routes, RouterModule } from '@angular/router';
import { CoivdRComponent } from './coivd-r.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  { path: '', component: CoivdRComponent },
];

export const routing = RouterModule.forChild(routes);