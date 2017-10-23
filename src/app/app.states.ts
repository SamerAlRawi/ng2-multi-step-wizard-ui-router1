import { PersonalComponent } from './personal/personal.component';
import { WorkComponent } from './work/work.component';
import { AddressComponent } from './address/address.component';
import { ResultComponent } from './result/result.component';
import { WorkflowService } from './workflow/workflow.service';
import { LicenseComponent } from './license/license.component';

export const appStates = [
    // 1st State
    { name: 'license', path: '', component: LicenseComponent },
    // 1st State
    { name: 'personal', path: 'personal', component: PersonalComponent },
    // 2nd State:
    { name: 'work', path: 'work', component: WorkComponent },
    // 3rd State
    { name: 'address', path: 'address', component: AddressComponent },
    // 4th State
    { name: 'result', path: 'result', component: ResultComponent }
];
