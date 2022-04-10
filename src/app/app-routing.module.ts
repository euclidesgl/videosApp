import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AvanzadaComponent } from './video/pages/avanzada/avanzada.component';
import { LoginComponent } from "./video/pages/login/login.component";
import { LogoutComponent } from "./video/pages/logout/logout.component";
import { UsuariosComponent } from "./video/pages/usuarios/usuarios.component";
import { VideosComponent } from "./video/pages/videos/videos.component";

const routes: Routes = [
    {
        path:'',
        component: AvanzadaComponent,
        pathMatch: 'full'
    },
    {
        path: 'videos',
        component: VideosComponent
    },
    {
        path: 'usuarios',
        component: UsuariosComponent
    },
    {
        path: 'logout',
        component: LogoutComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
]
@NgModule({
    imports:[
        RouterModule.forRoot( routes )
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{

}