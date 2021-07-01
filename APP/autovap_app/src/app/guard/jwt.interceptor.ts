import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
//import { LoaderComponent } from '../main/shared/loader/loader.component';
import Swal from 'sweetalert2';
import { AuthenticationService } from 'src/services/authentication.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(
        private router: Router,
        
        private authenticationService: AuthenticationService,
        
        ) { }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        // alert('Iniciando Requisição!' + new Date().toLocaleTimeString());
        // Iniciar o Loader
 //       this.loaderComponent.isLoading(true);
        if (this.authenticationService.isAuthenticated) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.authenticationService.token}`
                }
            });
        }

        return next.handle(request).pipe(
            tap(event => {
                if (event instanceof HttpResponse) {
                    // alert('Finalizando Requisição!' + new Date().toLocaleTimeString());
                    // this.loader.hide();

                    return event;
                }
            }, error => {
                // console.error('NICE ERROR', error);
                if (error instanceof HttpErrorResponse) {
                    // console.log(error);
                    // 401 erro de não autorizado
                    if (error.status === 401) {
                        if(error.error.message == 'Usuário e/ou senha inválidos.' || error.error.message == 'Usuário não encontrado!'){
                            Swal.fire({
                                title: 'Erro',
                                text: error.error.message,
                                heightAuto: false,
                                icon: 'warning'
                            });
                        }
                        this.authenticationService.logout();
                        // 403 Erro de proibido acesso
                    } else if (error.status === 403) {
                        // // console.log('ERRO 403 - Não pode acessar essa página');
                        window.location.href = `${localStorage.getItem('module')}/acesso-restrito`;
                        // this.router.navigate([`${localStorage.getItem('module')}/acesso-restrito`]);
                    } else if (error.status === 404) {
                        // console.log('ERRO 404 - Página não encontrada!');
                    }
                }
            },
                () => {
                    // Finalizar o Loader
 //                   this.loaderComponent.isLoading(false);
                }
            ));
    }

}
