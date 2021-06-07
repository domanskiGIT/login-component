import {Component, OnInit} from '@angular/core';
import {Credentials, LoginService} from './services/login.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(private loginService: LoginService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.createForm();
  }

  get email(): string {
    return this.form.controls['email'].value as string;
  }

  get password(): string {
    return this.form.controls['password'].value as string;
  }

  login(): void {
    const credentials: Credentials = {
      email: this.email,
      password: this.password
    }
    this.loginService.login(credentials)
      .subscribe();
  }

  private createForm(): FormGroup {
    return this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [Validators.required]]
    })
  }

}
