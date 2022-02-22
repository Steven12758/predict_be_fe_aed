import { FormGroup, FormControl, Validators } from '@angular/forms';


export class Student {
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
    school_GP!: number;
    school_MS!: number;
    sex_F!: number;
    sex_M!: number;
    address_Rural!: number;
    address_Urban!: number;
    family_size_GT3!: number;
    family_size_LE3!: number;
    parents_status_A!: number;
    parents_status_T!: number;
    mother_job_at_home!: number;
    mother_job_health!: number;
    mother_job_other!: number;
    mother_job_services!: number;
    mother_job_teacher!: number;
    father_job_at_home!: number;
    father_job_health!: number;
    father_job_other!: number;
    father_job_services!: number;
    father_job_teacher!: number;
    reason_course!: number;
    reason_home!: number;
    reason_other!: number;
    reason_reputation!:number;
    guardian_father!: number;
    guardian_mother!: number;
    guardian_other!: number;
    school_support_no!: number;
    school_support_yes!: number;
    family_support_no!: number;
    family_support_yes!: number;
    paid_classes_no!: number;
    paid_classes_yes!: number;
    activities_no!: number;
    activities_yes!: number;
    nursery_no!: number;
    nursery_yes!: number;
    desire_higher_edu_no!: number;
    desire_higher_edu_yes!: number;
    internet_no!: number;
    internet_yes!: number;
    romantic_no!: number;
    romantic_yes!: number;


    static getForm(student?: Student): FormGroup {
        return new FormGroup({
            age: new FormControl(student?.age, { validators: Validators.required }),
            mother_education: new FormControl(student?.mother_education, { validators: Validators.required }),
            father_education: new FormControl(student?.father_education, { validators: Validators.required }),
            commute_time: new FormControl(student?.commute_time, { validators: Validators.required }),
            study_time: new FormControl(student?.study_time, { validators: Validators.required }),
            failures: new FormControl(student?.failures, { validators: Validators.required }),
            family_quality: new FormControl(student?.family_quality, { validators: Validators.required }),
            free_time: new FormControl(student?.free_time, { validators: Validators.required }),
            go_out: new FormControl(student?.go_out, { validators: Validators.required }),
            weekday_alcohol_usage: new FormControl(student?.weekday_alcohol_usage, { validators: Validators.required }),
            weekend_alcohol_usage: new FormControl(student?.weekend_alcohol_usage, { validators: Validators.required }),
            health: new FormControl(student?.health, { validators: Validators.required }),
            absences: new FormControl(student?.absences, { validators: Validators.required }),
            period1_score: new FormControl(student?.period1_score, { validators: Validators.required }),
            period2_score: new FormControl(student?.period2_score, { validators: Validators.required }),
            school_GP: new FormControl(student?.school_GP, { validators: Validators.required }),
            school_MS: new FormControl(student?.school_MS, { validators: Validators.required }),
            sex_F: new FormControl(student?.sex_F, { validators: Validators.required }),
            sex_M: new FormControl(student?.sex_M, { validators: Validators.required }),
            address_Rural: new FormControl(student?.address_Rural, { validators: Validators.required }),
            address_Urban: new FormControl(student?.address_Urban, { validators: Validators.required }),
            family_size_GT3: new FormControl(student?.family_size_GT3, { validators: Validators.required }),
            family_size_LE3: new FormControl(student?.family_size_LE3, { validators: Validators.required }),
            parents_status_A: new FormControl(student?.parents_status_A, { validators: Validators.required }),
            parents_status_T: new FormControl(student?.parents_status_T, { validators: Validators.required }),
            mother_job_at_home: new FormControl(student?.mother_job_at_home, { validators: Validators.required }),
            mother_job_health: new FormControl(student?.mother_job_health, { validators: Validators.required }),
            mother_job_other: new FormControl(student?.mother_job_other, { validators: Validators.required }),
            mother_job_services: new FormControl(student?.mother_job_services, { validators: Validators.required }),
            mother_job_teacher: new FormControl(student?.mother_job_teacher, { validators: Validators.required }),
            father_job_at_home: new FormControl(student?.father_job_at_home, { validators: Validators.required }),
            father_job_health: new FormControl(student?.father_job_health, { validators: Validators.required }),
            father_job_other: new FormControl(student?.age, { validators: Validators.required }),
            father_job_services: new FormControl(student?.father_job_services, { validators: Validators.required }),
            father_job_teacher: new FormControl(student?.father_job_teacher, { validators: Validators.required }),
            reason_course: new FormControl(student?.reason_course, { validators: Validators.required }),
            reason_home: new FormControl(student?.reason_home, { validators: Validators.required }),
            reason_other: new FormControl(student?.reason_other, { validators: Validators.required }),
            reason_reputation: new FormControl(student?.reason_reputation, { validators: Validators.required }),
            guardian_father: new FormControl(student?.guardian_father, { validators: Validators.required }),
            guardian_mother: new FormControl(student?.guardian_mother, { validators: Validators.required }),
            guardian_other: new FormControl(student?.guardian_other, { validators: Validators.required }),
            school_support_no: new FormControl(student?.school_support_no, { validators: Validators.required }),
            school_support_yes: new FormControl(student?.school_support_yes, { validators: Validators.required }),
            family_support_no: new FormControl(student?.family_support_no, { validators: Validators.required }),
            family_support_yes: new FormControl(student?.family_support_yes, { validators: Validators.required }),
            paid_classes_no: new FormControl(student?.paid_classes_no, { validators: Validators.required }),
            paid_classes_yes: new FormControl(student?.paid_classes_yes, { validators: Validators.required }),
            activities_no: new FormControl(student?.activities_no, { validators: Validators.required }),
            activities_yes: new FormControl(student?.activities_yes, { validators: Validators.required }),
            nursery_no: new FormControl(student?.nursery_no, { validators: Validators.required }),
            nursery_yes: new FormControl(student?.nursery_yes, { validators: Validators.required }),
            desire_higher_edu_no: new FormControl(student?.desire_higher_edu_no, { validators: Validators.required }),
            desire_higher_edu_yes: new FormControl(student?.desire_higher_edu_yes, { validators: Validators.required }),
            internet_no: new FormControl(student?.internet_no, { validators: Validators.required }),
            internet_yes: new FormControl(student?.internet_yes, { validators: Validators.required }),
            romantic_no: new FormControl(student?.romantic_no, { validators: Validators.required }),
            romantic_yes: new FormControl(student?.romantic_yes, { validators: Validators.required }),
        });
    }
}
