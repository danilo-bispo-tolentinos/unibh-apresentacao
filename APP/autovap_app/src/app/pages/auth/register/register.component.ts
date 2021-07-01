import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {

    this.form = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      cellphone: ['', [Validators.required]],
      imageProfile: ['', [Validators.required]],
      document: ['', [Validators.required]],
      typeUser: [1, [Validators.required]],
      active: [1, [Validators.required]],
    });

  }

  imgURL = null;
  imgProfile = true;
  isLinear = true;
  ngOnInit() { }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      // tslint:disable-next-line:no-shadowed-variable
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.imgURL = event.target.result;
      };
    }
  }

  createUser() {
    const data: any = {
      id: this.form.controls.id.value,
      name: this.form.controls.name.value,
      email: this.form.controls.email.value,
      password: this.form.controls.password.value,
      cellphone: this.form.controls.cellphone.value,
      imageProfile: this.form.controls.imageProfile.value,
      document: this.form.controls.document.value,
      typeUser: this.form.controls.typeUser.value,
      isActive: this.form.controls.active.value,
    };
    console.log(data);
    this.authService.createUser(data).subscribe(result => {
      this.router.navigate(['/tabs']);
    }, error => {
      console.log(error);
    });
  }

}
