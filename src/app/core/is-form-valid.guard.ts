import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { BaseComponent } from './base-component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsFormValidGuard implements CanDeactivate<BaseComponent> {
  canDeactivate(component: BaseComponent, currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree
                                                                                    | Observable<boolean | UrlTree>
                                                                                    | Promise<boolean | UrlTree> {
    return true;
  }

}
