import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: any = {
    login: null,
    password: null,
  };

  constructor(private apiService: ApiService, private userService: UserService) {
    apiService.baseRoute = 'user';
  }

  ngOnInit(): void {}

  handleError(error: any) {
    console.log(error);

    return error;
  }

  handleSuccess(user: any):void {
    this.userService.createSession(user);
    this.apiService.get("/").pipe(catchError(this.handleError)).subscribe(data => console.log(data));
  }

  onSubmit() {
    this.apiService
      .post("/login", this.user)
      .pipe(
        catchError((error) => this.handleError(error))
      )
      .subscribe((data) => this.handleSuccess(data));
  }
}
