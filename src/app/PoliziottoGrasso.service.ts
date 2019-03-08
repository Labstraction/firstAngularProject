import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PoliziottoGrassoService  implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {
    const id = +next.url[1].path;
    // const id2 = next.paramMap.get('id');
    // console.log(id2);
    if (isNaN(id) || id < 0) {
      alert('Invalid product Id');
      this.router.navigate(['/courts']);
      return false;
    }
    return true;
  }
}