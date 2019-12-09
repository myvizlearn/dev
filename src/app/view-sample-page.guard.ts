import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ViewSamplePageGuard implements CanActivate {
  constructor( private _angularFireAuth: AngularFireAuth, private _router: Router) {

  }

  canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot, stateSnapshot: RouterStateSnapshot){
    return this._angularFireAuth.authState.pipe (
      map((auth) => {
        if (!auth) {
          this._router.navigate(['/home']);
          return false;
      } else{
        return true;
      }
    })
        );
  
}
}
