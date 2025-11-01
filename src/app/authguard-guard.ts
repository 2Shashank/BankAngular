import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class authguardGuard implements CanActivate {
  
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log("Auth guard");
    const userId = sessionStorage.getItem('EmpId');
    const role = sessionStorage.getItem('Role');

    if (!userId || !role) {
      alert('Please login first.');
      this.router.navigate(['/home']);
      return false;
    }

    const currentPath = state.url.toLowerCase();

    if (role === 'BankAdmin' && currentPath.startsWith('/admin')) return true;
    if (role === 'BranchManager' && currentPath.startsWith('/manager')) return true;
    if (role === 'Staff' && currentPath.startsWith('/staff')) return true;
    if (role === 'Customer' && currentPath.startsWith('/customer')) return true;

    alert('Access denied for this role.');
    this.router.navigate(['/home']);
    return false;
  }
}
