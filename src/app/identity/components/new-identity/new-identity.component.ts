import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ccc-new-identity',
  templateUrl: './new-identity.component.html',
  styleUrls: ['./new-identity.component.scss']
})
export class NewIdentityComponent implements OnInit {

  identityForm!: FormGroup;
  personalInfoForm!: FormGroup;
  orgaInfoForm!: FormGroup;
  localisationInfoForm!: FormGroup;
  contactForm!: FormGroup;
  accountForm!:FormGroup;

  genderList: string[] = ['Masculin', 'Féminin', 'Non Spécifié']


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initFormControls();
    this.initMainForm();
  }

  private initMainForm(): void {
   this.identityForm = this.formBuilder.group({
    personalInfo: this.personalInfoForm,
    orgaInfo: this.orgaInfoForm,
    localisationInfo: this.localisationInfoForm,
    contact: this.contactForm,
    account: this.accountForm
   }) 
  }

  private initFormControls(): void{
    this.personalInfoForm= this.formBuilder.group({
      lastName: ['', Validators.required],
      usageLastName: ['', Validators.required],
      firstName: ['', Validators.required],
      usageFirstName: ['', Validators.required],
      birthdayDate: ['', Validators.required],
      gender: ['', Validators.required],
      picture: ['', Validators.required]
    });

    this.orgaInfoForm = this.formBuilder.group({
       manager: ['', Validators.required],
       team: ['', Validators.required],
       job: ['', Validators.required],
       globalJobProfile: ['', Validators.required],
       startedDate: ['', Validators.required],
       endDate: ['', Validators.required]
    });

    this.localisationInfoForm = this.formBuilder.group({
       workPlace: ['', Validators.required],
       building: ['', Validators.required],
       floor: ['', Validators.required],
       desk: ['', Validators.required]
     });

    this.contactForm = this.formBuilder.group({
      mailPro: ['', Validators.required],
      mailExterne: ['', Validators.required],
      mobilePhone: ['', Validators.required],
      phone: ['', Validators.required]
    });

    this.accountForm = this.formBuilder.group({
      accountGoogle: [false],
      accountFacebook: [false]
    })
  }

}
