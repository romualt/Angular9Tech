import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HTTP_INTERCEPTORS, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export class LoginInterceptor implements HttpInterceptor  {

    intercept(query :HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>> {
     
       
       const token = localStorage.getItem('token');
       
        if(token){  
              
            const keys = query.params.keys();
            let params = new HttpParams()
            for(let index=0; index<keys.length; index++){
                params = params.append(keys[index], query.params.get(keys[index]));
            }
            params = params.append("access_token", token);

            const cloneQuery = query.clone( 
                     { params } 
            ); 
            
            return next.handle(cloneQuery);
        }
        else{
            return next.handle(query);
        }

        
    }
    
}

export const loginInterceptorProvider = {
    provide : HTTP_INTERCEPTORS,
    useClass : LoginInterceptor,
    multi : true
} 