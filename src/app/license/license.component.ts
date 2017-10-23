import { Component, OnInit } from '@angular/core';

import { Personal } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';

@Component({
    selector: 'mt-wizard-license', templateUrl: './license.component.html'
})

export class LicenseComponent implements OnInit {
    title = 'Please tell us about yourself.';
    personal: Personal;
    form: any;

    constructor(private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.personal = this.formDataService.getPersonal();
        console.log('License feature loaded!');
    }

    save(form: any) {
        if (!form.valid)
            return;

        this.formDataService.setPersonal(this.personal);
    }
}
