import { User } from './../app/model/user.model'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import decode from 'jwt-decode';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private api_endpoint = environment.api_endpoint;
  private message: string;
  index: number = 0;
  userData: any;
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  /**
   * Isso é usado para limpar qualquer coisa que precise ser removida
   */
  clear(): void {
    localStorage.clear();
  }

  /**
   * verifique se há validade e se o token ainda existe ou não
   * @return {boolean}
   */
  isAuthenticated(): boolean {
    return localStorage.getItem('token') != null && !this.isTokenExpired();
  }

  get token(): string {
    return localStorage.getItem('token');
  }

  // Verificar se token está expirado
  isTokenExpired(): boolean {
    //Data Do Token que irá expirar
    let exp = new Date(this.decode().exp * 1000);
    //Data de agora
    let now = new Date();
    //Retora se está expirado ou não (True ou False)
    if (exp < now) {
      // this.logout()
      return true;
    } else {
      return false;
    }

  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(this.api_endpoint + '/login', { email: email, password: password });
  }

  public changepass(data: any): Observable<any> {
    return this.http.post<any>(this.api_endpoint + '/changepass/', data);
  }

  logout() {
    //this.clear();
    localStorage.removeItem('token');
    localStorage.setItem('autoLog', "off");
    //this._user = new Usuario()
    this.router.navigate(['/home']);
  }

  decode() {
    return decode(localStorage.getItem('token'));
  }

  get user(): User {
    return this.decode().user;
  }

  get listPermissions(): any {
    return this.decode().listPermissions;
  }

}

