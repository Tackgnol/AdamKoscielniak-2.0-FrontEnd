import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../../../../../services/auth-service.service';
import { ToastrService } from 'ngx-toastr';
import { animate } from '../../../../../../node_modules/@angular/animations';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  constructor(
    private router: Router,
    private auth: AuthService,
    private toastr: ToastrService
  ) {}
  username: string;
  password: string;
  errors: Array<string>;
  isLoading = false;
  ngOnInit() {}
  login(): void {
    this.isLoading = true;
    const l = this.auth.login(this.username, this.password).subscribe(
      data => {
        this.router.navigate(['/']);
        this.isLoading = false;
      },
      e => {
        let errors = '<ul>';
        for (let i = 0; i < e.length; i++) {
          errors = errors + '<li>' + e[i] + '</li>';
        }
        errors = errors + '</ul>';
        this.toastr.error(errors, null, {
          enableHtml: true,
          positionClass: 'toast-top-full-width',
          progressBar: true,
          closeButton: true
        });
        this.isLoading = false;
      }
    );
  }
}
