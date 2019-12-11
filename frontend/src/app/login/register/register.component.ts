import { Component, OnInit } from '@angular/core';
import { AuthApiService } from '../../auth-api/auth-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: AuthApiService,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
        passwordRepeat: ['', [Validators.required]],
      },
      {
        validator: (group) => this.checkPasswords(group)
      }
    );
  }

  register() {
    this.api.register(this.form.value.username, this.form.value.password).subscribe(
      () => this.router.navigate(['..'], {
        relativeTo: this.route,
      })
    );
  }

  private checkPasswords(group: FormGroup) {
    const pass = group.get('password').value;
    const confirmPass = group.get('passwordRepeat').value;
    if (pass !== confirmPass) {
      return {notSame: true};
    }
  }

}
