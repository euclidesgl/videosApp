import { Component } from '@angular/core';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-avanzada',
  templateUrl: './avanzada.component.html',
  styles: [ `
    .row{
      padding: 5px;
    } `
  ]
})
export class AvanzadaComponent {

  nombre:   string = '';
  madre:    string = '';
  padre:    string = '';
  rp:       string = '';
  camada:   string = '';
  domador:  string = '';

  constructor( private videoService: VideoService ) { }

  buscar(){
    console.log('Nombre: '+this.nombre+' - Madre: '+this.madre+' - Padre: '+this.padre+' - RP: '+this.rp );
    this.videoService.buscarVideoPorRp( this.rp)
    .subscribe( resp => {
      console.log( resp );
    });    
  }
  limpiarFiltros(){
    this.nombre='';
    this.madre='';
    this.padre='';
    this.rp='';
    this.camada='';
    this.domador='';    
  }


}
