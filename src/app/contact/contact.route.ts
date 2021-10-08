import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  { path: '', component: ContactComponent },
];

export const routing = RouterModule.forChild(routes);