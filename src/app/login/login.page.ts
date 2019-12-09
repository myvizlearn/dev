import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoginService } from './../login.service';
import { LoginCredential } from './../interfaces';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginFormGroup: FormGroup;
  constructor(FormBuilder: FormBuilder, private _loginService: LoginService, private _router: Router, public menuCtrl: MenuController) { 
    
    this.loginFormGroup = FormBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

    menuCtrl.enable(false);

  }

  ngOnInit() {
  }

  login() {
    const loginCredential: LoginCredential = this.loginFormGroup.value;
    this._loginService.loginMethod(loginCredential)
    .then((authData) => {
      console.log(authData);
      this._router.navigate(['/home']);
    });
    // .catch((authError) => {
    //   console.log('Auth Error', authError);
    // });
  }

}
