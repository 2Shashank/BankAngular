import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Interceptor', req.url);
  let jwt = sessionStorage.getItem('token');
  let clonereq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${jwt}`,
    },
  });
  return next(clonereq);
};
