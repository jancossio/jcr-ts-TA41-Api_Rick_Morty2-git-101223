import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InvokeFunctionExpr } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class ComunicateService {

  private characters = 'https://rickandmortyapi.com/api/character/';
  private maxCharacters = 827;  

  constructor(private httpClient:HttpClient) { }

  getCharacter(idChar:string){
    console.log(this.httpClient.get(this.characters+idChar));
    return this.httpClient.get(this.characters+idChar);   
  }

  getCharacters(){
    let id="1,2,3,4,5";
    return this.httpClient.get(this.characters+id);   
  }

  getRandomCharacters(numChars:number){
    let id='';
    let tmp=0;
    for(let i=0; i<numChars; i++){
      tmp = Math.floor(Math.random()*(this.maxCharacters-1)+1);
      id += (String(tmp)+',');
    }
    return this.httpClient.get(this.characters+id);
  }
}
