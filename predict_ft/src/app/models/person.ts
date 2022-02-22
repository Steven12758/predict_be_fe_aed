import { FormGroup, FormControl, Validators } from '@angular/forms';


export class Person {
    /*INIT PERSON*/
    age!: number;
    mother_education!: number;
    father_education!: number;
    commute_time!: number;
    study_time!: number;
    failures!: number;
    family_quality!: number;
    free_time!: number;
    go_out!: number;
    weekday_alcohol_usage!: number;
    weekend_alcohol_usage!: number;
    health!: number;
    absences!: number;
    period1_score!: number;
    period2_score!: number;
    school!: number;
    sex!: number;
    address!: number;
    family_size!: number;
    parents_status!: number;
    mother_job!: number;
    father_job!: number;
    reason!: number;
    guardian!: number;
    school_support!: number;
    family_support!: number;
    paid_classes!: number;
    activities!: number;
    nursery!: number;
    desire_higher_edu!: number;
    internet!: number;
    romantic!: number;
   

    static getForm(person?: Person): FormGroup {
        return new FormGroup({
            age: new FormControl(person?.age, { validators: Validators.required }),
            mother_education: new FormControl(person?.mother_education, { validators: Validators.required }),
            father_education: new FormControl(person?.father_education, { validators: Validators.required }),
            commute_time: new FormControl(person?.commute_time, { validators: Validators.required }),
            study_time: new FormControl(person?.study_time, { validators: Validators.required }),
            failures: new FormControl(person?.failures, { validators: Validators.required }),
            family_quality: new FormControl(person?.family_quality, { validators: Validators.required }),
            free_time: new FormControl(person?.free_time, { validators: Validators.required }),
            go_out: new FormControl(person?.go_out, { validators: Validators.required }),
            weekday_alcohol_usage: new FormControl(person?.weekday_alcohol_usage, { validators: Validators.required }),
            weekend_alcohol_usage: new FormControl(person?.weekend_alcohol_usage, { validators: Validators.required }),
            health: new FormControl(person?.health, { validators: Validators.required }),
            absences: new FormControl(person?.absences, { validators: Validators.required }),
            period1_score: new FormControl(person?.period1_score, { validators: Validators.required }),
            period2_score: new FormControl(person?.period2_score, { validators: Validators.required }),
            school: new FormControl(person?.school, { validators: Validators.required }),
            sex: new FormControl(person?.sex, { validators: Validators.required }),
            address: new FormControl(person?.address, { validators: Validators.required }),
            family_size: new FormControl(person?.family_size, { validators: Validators.required }),
            parents_status: new FormControl(person?.parents_status, { validators: Validators.required }),
            mother_job: new FormControl(person?.mother_job, { validators: Validators.required }),
            father_job: new FormControl(person?.father_job, { validators: Validators.required }),
            reason: new FormControl(person?.reason, { validators: Validators.required }),
            guardian: new FormControl(person?.guardian, { validators: Validators.required }),
            school_support: new FormControl(person?.school_support, { validators: Validators.required }),
            family_support: new FormControl(person?.family_support, { validators: Validators.required }),
            paid_classes: new FormControl(person?.paid_classes, { validators: Validators.required }),
            activities: new FormControl(person?.activities, { validators: Validators.required }),
            nursery: new FormControl(person?.nursery, { validators: Validators.required }),
            desire_higher_edu: new FormControl(person?.desire_higher_edu, { validators: Validators.required }),
            internet: new FormControl(person?.internet, { validators: Validators.required }),
            romantic: new FormControl(person?.romantic, { validators: Validators.required }),
        });
    }
}
