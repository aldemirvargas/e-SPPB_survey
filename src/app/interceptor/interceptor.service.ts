import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(req: HttpRequest<any>, next: HttpHandler,): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem('token');
    if (token) {
      const headers = new HttpHeaders({
        Authorization: 'Bearer ' + token,
      });
      const clone = req.clone({
        headers,
      });
      return next.handle(clone);
    } else {
      return next.handle(req);
    }
  }
}
