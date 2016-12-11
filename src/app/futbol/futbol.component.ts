import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';

import { futbolist } from '../model/futbolista.model';

@Component({
  selector: 'futbol',
  templateUrl: './futbol.component.html',
  styleUrls: ['./futbol.component.css']
})
export class FutbolComponent implements OnInit {

   private futbolACrear:futbolist;

  constructor(private http:Http) { 
    this.futbolACrear = new futbolist();
  }

  ngOnInit() {
  }

  
  public Guardarfut()
  {
    this.http.post(
      "http://stiven_web_2.net16.net/api/futbolista.php",
      this.futbolACrear
    ).subscribe((response)=>{
      let respuesta = response.json();
      if(respuesta.resultado == 1){
        alert('futbolista guardado con éxito');
      }      
      else{
        alert("Hubo un error al guardar el futbolista");
      }
    });

  }

}
