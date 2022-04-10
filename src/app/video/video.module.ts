import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvanzadaComponent } from './pages/avanzada/avanzada.component';
import { VideosComponent } from './pages/videos/videos.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { FormsModule } from '@angular/forms';
// import { LoginComponent } from './pages/login/login.component';



@NgModule({
  declarations: [
    AvanzadaComponent,
    VideosComponent,
    UsuariosComponent,
    LogoutComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AvanzadaComponent,
    VideosComponent,
    UsuariosComponent,
    LogoutComponent
    
  ]
})
export class VideoModule { }
