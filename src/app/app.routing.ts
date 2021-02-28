import { Routes, RouterModule } from "@angular/router";
import { ColorComponent } from './color/color.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { DetailComponent } from './cvTech/detail/detail.component';
import { AddCvComponent } from './cvTech/add-cv/add-cv.component';
import { DeleteCvComponent } from './cvTech/delete-cv/delete-cv.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './guard/login.guard';
import { LogoutGuard } from './guard/logout.guard';
import { UpdateCvComponent } from './cvTech/update-cv/update-cv.component';



const APP_ROUTING : Routes = [
    {path: 'cv',/*component: CvComponent,*/ children:[
        {path: '', component: CvComponent},
        {path: 'delete/:id', component: DeleteCvComponent, canActivate : [LoginGuard]},
        {path: 'update/:id', component: UpdateCvComponent, canActivate : [LoginGuard]},
        {path: 'add', component: AddCvComponent, canActivate : [LoginGuard]},
        {path: ':id', component: DetailComponent} 
    ]},
    
    {path: '', component: CvComponent},
    {path:'color', component: ColorComponent},
    {path:'color/:default', component: ColorComponent},
    {path:'login', component: LoginComponent, canActivate: [LogoutGuard]},
    {path:'**', component: ErrorComponent}
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);
