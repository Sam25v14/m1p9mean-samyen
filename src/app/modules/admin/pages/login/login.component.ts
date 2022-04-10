import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faChartBar } from '@fortawesome/free-regular-svg-icons';
import { catchError } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: any = {
    login: 'mario.safidy',
    password: 'testing123+',
  };

  formErrors: any = {};

  constructor(
    private apiService: ApiService,
    private userService: UserService,
    private _router: Router
  ) {
    apiService.baseRoute = 'user';
  }

  ngOnInit(): void {}

  handleError(error: any) {
    console.log(error.error);
    this.formErrors = error.error;
    return error;
  }

  handleSuccess(user: any): void {
    this.userService.createSession(user);
    // this.apiService.get("/").pipe(catchError(this.handleError)).subscribe(data => console.log(data));
    this._router.navigate(['admin/dashboard']);
  }

  onSubmit() {
    this.apiService
      .post('/login', this.user)
      .pipe(catchError((error) => this.handleError(error)))
      .subscribe((data) => this.handleSuccess(data));
  }
}
