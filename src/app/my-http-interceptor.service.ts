import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class MyHttpInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    req = req.clone({
      setHeaders: {
        Authorization: 'Token',
        MyCustomHeader: 'MyHeaderValue'
      }
    });

    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {

        if (event instanceof HttpResponse) {
          if (event.status === 200) {
            console.log('200 status code');
          }

          if (event.status === 203) {
            console.log('203 status code');
          }
        }
        return event;
      }),
      catchError(error => {
        console.log(error);
        return throwError(error);
      })
    );
  }

  constructor() { }
}
