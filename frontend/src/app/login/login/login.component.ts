import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthApiService } from '../../auth-api/auth-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: AuthApiService,
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      username: this.fb.control(''),
      password: this.fb.control(''),
    });
  }

  login() {
    this.api.login(this.form.value.username, this.form.value.password).subscribe();
  }

}
