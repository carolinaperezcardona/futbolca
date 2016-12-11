import { Component } from '@angular/core';

import { Http } from '@angular/http';

import { futbolist } from './model/futbolista.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  futbolList:Array<futbolist> = new Array<futbolist>();

  constructor(private http:Http){

  }

  
  listarfutbolistas(){
    this.http
    .get("http://stiven_web_2.net16.net/api/futbolista.php")
    .subscribe((response)=>{
      this.futbolList = response.json();
      console.log(this.futbolList);
      let listarfutbol = document.getElementById("listarfutbol");
    });            
  }


}
