import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { AuthenticationService } from 'src/services/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  hide = true;
  // Variaveis
  valueChecked: boolean;
  form: FormGroup;
  error = '';
  login: string;
  senha: string;
  autoLog: string
  isLoading: boolean = false;
  // Para fácil acesso aos campos do formulário
  get f(): any { return this.form.controls; }

  constructor(
    private formBuilder: FormBuilder,
    public authenticationService: AuthenticationService,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      email: [localStorage.getItem('email'), [Validators.required]],
      password: [localStorage.getItem('password'), Validators.compose([Validators.required, Validators.minLength(6)])]
    });

  }

  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  dados() {

    return true;
  }

  go() {
    this.router.navigate(['/tabs']);
  }
  autoLogin() {

    if (this.valueChecked == true) {
      this.valueChecked = false;

    } else {
      this.valueChecked = true;
    }
  }
  ngOnInit() {
    this.valueChecked = true;

    this.login = localStorage.getItem('email');
    this.senha = localStorage.getItem('password');
    this.autoLog = localStorage.getItem('autoLog');



    if (this.login != null && this.senha != null || this.login != "" && this.senha != "") {
      if (this.autoLog == "on") {
        this.onSubmit();
      }
    }
    // reset login status
    this.authenticationService.logout();
  }

  // Chamando Login
  onSubmit() {
    this.isLoading = true;
    if (this.form.invalid) {
      this.isLoading = false;
      return;
    }

    this.authenticationService.login(this.f.email.value, this.f.password.value).subscribe(data => {
      if (data.type != 2) {
        Swal.fire({
          title: 'Erro',
          text: 'Acesso somente para usuários!',
          heightAuto: false,
          icon: 'warning'
        });
        this.authenticationService.logout();
      }
      else if (data.active != 1) {
        Swal.fire({
          title: 'Erro',
          text: 'Usuário bloqueado!',
          heightAuto: false,
          icon: 'warning'
        });
        this.authenticationService.logout();
      }
      else {
        if (data.token) {
          this.authenticationService.userData = data.user;
          localStorage.setItem('token', data.token);
          if (this.valueChecked == false) {
            localStorage.removeItem('email');
            localStorage.removeItem('password');
            localStorage.removeItem('autoLog');
          } else {
            localStorage.setItem('email', this.f.email.value);
            localStorage.setItem('password', this.f.password.value);
            localStorage.setItem('autoLog', "on");
          }

          this.router.navigateByUrl('/tabs');

        }
      }
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
    });

  }

}
