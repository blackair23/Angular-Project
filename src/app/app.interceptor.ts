import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from '../environments/environment';
const apiUrl = environment.apiURL;

@Injectable()

export class AppInterceptor implements HttpInterceptor {
    constructor() {}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // throw new Error("Method not implemented.");
        req = req.clone({ url: req.url.replace('', apiUrl)});
        console.log(`${req.url}`);
        return next.handle(req); 
    }
}

export const appInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true,
}