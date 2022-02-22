import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

/*SERVICES*/
import { PruebaService } from './service/prueba.service';
/*MODELS*/
import { Student } from 'src/app/models/student';
import { Person } from 'src/app/models/person';
/*FORMS*/
import { FormGroup } from '@angular/forms';
/* */
import { AvisoComponent } from './aviso/aviso.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PruebaService]
})
export class AppComponent {
  title = 'predict_ft';
  student: Student | any;
  person: Student | any;
  data: [] | any
  nota: number | any
  formPerson: FormGroup | any;

  constructor(private pruebaService: PruebaService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.formPerson = Person.getForm(this.person);
    this.pruebaService.getAll().subscribe((res) => {
      return this.data = Object.values(res)
    });
  }

  openDialog(req) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      nota: this.nota,
      title: 'Su calificación Final es:'
    };
    const dialogRef = this.dialog.open(AvisoComponent, {
      data: dialogConfig.data,
    });
  }

  predict() {
    this.student = new Student();
    this.person = this.formPerson.value;
    if (!this.formPerson.invalid) {
      /*Data Student*/
      if (this.person.age >= 15 && this.person.age <= 22) {
        this.student.age = this.person.age;
      }

      if (this.person.mother_education == 'S') {
        this.student.mother_education = 1;
      } else {
        this.student.mother_education = 0
      }

      if (this.person.father_education == 'S') {
        this.student.father_education = 1;
      } else {
        this.student.father_education = 0
      }

      this.student.commute_time = this.person.commute_time;
      this.student.study_time = this.person.study_time;
      this.student.failures = this.person.failures;

      if (this.person.family_quality >= 1 && this.person.family_quality <= 5) {
        this.student.family_quality = this.person.age;
      }

      this.student.free_time = this.person.free_time;
      this.student.go_out = this.person.go_out;
      this.student.weekday_alcohol_usage = this.person.weekday_alcohol_usage;
      this.student.weekend_alcohol_usage = this.person.weekend_alcohol_usage;
      this.student.health = this.person.health;
      this.student.absences = this.person.absences;
      this.student.period1_score = this.person.period1_score;
      this.student.period2_score = this.person.period2_score;

      if (this.person.school == 'GP') {
        this.student.school_GP = 1;
        this.student.school_MS = 0;
      } else {
        this.student.school_GP = 0;
        this.student.school_MS = 1;
      }

      if (this.person.sex == 'Male') {
        this.student.sex_F = 1;
        this.student.sex_M = 0;
      } else {
        this.student.sex_F = 0;
        this.student.sex_M = 1;
      }

      if (this.person.address == 'R') {
        this.student.address_Rural = 1;
        this.student.address_Urban = 0;
      } else {
        this.student.address_Rural = 0;
        this.student.address_Urban = 1;
      }

      if (this.person.family_size == 'GT3') {
        this.student.family_size_GT3 = 1;
        this.student.family_size_LE3 = 0;
      } else {
        this.student.family_size_GT3 = 0;
        this.student.family_size_LE3 = 1;
      }

      if (this.person.parents_status == 'A') {
        this.student.parents_status_A = 1;
        this.student.parents_status_T = 0;
      } else {
        this.student.parents_status_A = 0;
        this.student.parents_status_T = 1;
      }

      if (this.person.mother_job == 'Home') {
        this.student.mother_job_at_home = 1;
        this.student.mother_job_health = 0;
        this.student.mother_job_other = 0;
        this.student.mother_job_services = 0;
        this.student.mother_job_teacher = 0;
      } else if (this.person.mother_job == 'Health') {
        this.student.mother_job_at_home = 0;
        this.student.mother_job_health = 1;
        this.student.mother_job_other = 0;
        this.student.mother_job_services = 0;
        this.student.mother_job_teacher = 0;
      } else if (this.person.mother_job == 'Teacher') {
        this.student.mother_job_at_home = 0;
        this.student.mother_job_health = 0;
        this.student.mother_job_other = 0;
        this.student.mother_job_services = 0;
        this.student.mother_job_teacher = 1;
      } else if (this.person.mother_job == 'Services') {
        this.student.mother_job_at_home = 0;
        this.student.mother_job_health = 0;
        this.student.mother_job_other = 0;
        this.student.mother_job_services = 1;
        this.student.mother_job_teacher = 0;
      } else {
        this.student.mother_job_at_home = 0;
        this.student.mother_job_health = 0;
        this.student.mother_job_other = 1;
        this.student.mother_job_services = 0;
        this.student.mother_job_teacher = 0;
      }

      if (this.person.father_job == 'Home') {
        this.student.father_job_at_home = 1;
        this.student.father_job_health = 0;
        this.student.father_job_other = 0;
        this.student.father_job_services = 0;
        this.student.father_job_teacher = 0;
      } else if (this.person.father_job == 'Health') {
        this.student.father_job_at_home = 0;
        this.student.father_job_health = 1;
        this.student.father_job_other = 0;
        this.student.father_job_services = 0;
        this.student.father_job_teacher = 0;
      } else if (this.person.father_job == 'Teacher') {
        this.student.father_job_at_home = 0;
        this.student.father_job_health = 0;
        this.student.father_job_other = 0;
        this.student.father_job_services = 0;
        this.student.father_job_teacher = 1;
      } else if (this.person.father_job == 'Services') {
        this.student.father_job_at_home = 0;
        this.student.father_job_health = 0;
        this.student.father_job_other = 0;
        this.student.father_job_services = 1;
        this.student.father_job_teacher = 0;
      } else {
        this.student.father_job_at_home = 0;
        this.student.father_job_health = 0;
        this.student.father_job_other = 1;
        this.student.father_job_services = 0;
        this.student.father_job_teacher = 0;
      }

      if (this.person.reason == 'C') {
        this.student.reason_course = 1;
        this.student.reason_home = 0;
        this.student.reason_other = 0;
        this.student.reason_reputation = 0;
      } else if (this.person.reason == 'H') {
        this.student.reason_course = 0;
        this.student.reason_home = 1;
        this.student.reason_other = 0;
        this.student.reason_reputation = 0;
      } else if (this.person.reason == 'R') {
        this.student.reason_course = 0;
        this.student.reason_home = 0;
        this.student.reason_other = 0;
        this.student.reason_reputation = 1;
      } else {
        this.student.reason_course = 0;
        this.student.reason_home = 0;
        this.student.reason_other = 1;
        this.student.reason_reputation = 0;
      }

      if (this.person.school_support == 'S') {
        this.student.school_support_no = 1;
        this.student.school_support_yes = 0;
      } else {
        this.student.school_support_no = 0;
        this.student.school_support_yes = 1;
      }

      if (this.person.guardian == 'M') {
        this.student.guardian_father = 0;
        this.student.guardian_mother = 1;
        this.student.guardian_other = 0;
      } else if (this.person.guardian == 'P') {
        this.student.guardian_father = 1;
        this.student.guardian_mother = 0;
        this.student.guardian_other = 0;
      } else {
        this.student.guardian_father = 0;
        this.student.guardian_mother = 0;
        this.student.guardian_other = 1;
      }

      if (this.person.family_support == 'S') {
        this.student.family_support_no = 0;
        this.student.family_support_yes = 1;
      } else {
        this.student.family_support_no = 1;
        this.student.family_support_yes = 0;
      }

      if (this.person.paid_classes == 'S') {
        this.student.paid_classes_no = 0;
        this.student.paid_classes_yes = 1;
      } else {
        this.student.paid_classes_no = 1;
        this.student.paid_classes_yes = 0;
      }

      if (this.person.activities == 'S') {
        this.student.activities_no = 0;
        this.student.activities_yes = 1;
      } else {
        this.student.activities_no = 1;
        this.student.activities_yes = 0;
      }

      if (this.person.nursery == 'S') {
        this.student.nursery_no = 0;
        this.student.nursery_yes = 1;
      } else {
        this.student.nursery_no = 1;
        this.student.nursery_yes = 0;
      }

      if (this.person.desire_higher_edu == 'S') {
        this.student.desire_higher_edu_no = 0;
        this.student.desire_higher_edu_yes = 1;
      } else {
        this.student.desire_higher_edu_no = 1;
        this.student.desire_higher_edu_yes = 0;
      }

      if (this.person.internet == 'S') {
        this.student.internet_no = 0;
        this.student.internet_yes = 1;
      } else {
        this.student.internet_no = 1;
        this.student.internet_yes = 0;
      }

      if (this.person.internet == 'S') {
        this.student.romantic_no = 0;
        this.student.romantic_yes = 1;
      } else {
        this.student.romantic_no = 1;
        this.student.romantic_yes = 0;
      }
    }
    // console.log("res1, " + Object.values(this.student))
    this.pruebaService.predict(this.student).subscribe((res) => {
      if (res) {
        console.log(res);
        this.nota = res.nota;
        return this.openDialog(this.nota);
      } else {
        return this.title = "Completar los campos";
      }
    });
  }

}

