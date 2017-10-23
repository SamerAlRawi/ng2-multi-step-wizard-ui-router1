import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personal } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';
import { WizardPage } from '../interfaces/wizardpage';

@Component({
    selector: 'app-license', templateUrl: './license.component.html'
})

export class LicenseComponent implements OnInit, WizardPage {
    title = 'license agreement';
    personal: Personal;
    form: any;
    isFirst: true;
    isLast: false;
    constructor(private formDataService: FormDataService, private router: Router) {
    }

    ngOnInit() {
        this.personal = this.formDataService.getPersonal();
    }

    next() {
        this.formDataService.setPersonal(this.personal);
        this.router.navigateByUrl('/personal');
    }
    previous() {
    }
}
