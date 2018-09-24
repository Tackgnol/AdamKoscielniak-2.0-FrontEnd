import { ErrorsToList } from './../../../../../utils/ErrorsToList';
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
  ) { }
  username: string;
  password: string;
  errors: Array<string>;
  isLoading = false;
  ngOnInit() { }
  login(): void {
    this.isLoading = true;
    this.auth.login(this.username, this.password).subscribe(
      () => {
        this.router.navigate(['/']);
        this.isLoading = false;
      },
      e => {
        const errors = ErrorsToList(e);
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
