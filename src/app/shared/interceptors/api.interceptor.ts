import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const newRequest = req.clone({
    url: `${environment.api_url}/${req.url}`,
    withCredentials: true,
    headers: req.headers.set('Accept', 'application/json'),
  });
  return next(newRequest);
};
