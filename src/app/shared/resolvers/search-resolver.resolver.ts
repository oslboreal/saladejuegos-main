import { Injectable, ReflectiveInjector } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Router
} from '@angular/router';
import { isEmpty } from '@firebase/util';
import { Observable, of } from 'rxjs';
import { PostsService } from '../services/posts.service';

@Injectable({
  providedIn: 'root'
})
export class SearchResolverResolver implements Resolve<Observable<string | null>> {
  constructor(private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string | null> {
    let searchValue = route.paramMap.get('searchValue') || null;

    if (!searchValue) {
      this.router.navigate(['/home']);
      return of('');
    }

    return of(searchValue);
  }
}
