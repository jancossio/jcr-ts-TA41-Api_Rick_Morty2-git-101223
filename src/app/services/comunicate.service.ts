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
    return this.httpClient.get(this.characters+idChar);   
  }

  getCharacters(){
    let id="1,2,3,4,5";
    return this.httpClient.get(this.characters+id);   
  }

  getRandomCharacters(numChars:number){
    const randIds:number[] = [];
    let tmp = 0;

  while(0<numChars){
    tmp = Math.floor((Math.random()*(this.maxCharacters-1))+1);
    if(!randIds.includes(tmp)){
      randIds.push(tmp);
      numChars--;
    }
  }
    const idChars = randIds.join(',');
    return this.httpClient.get(this.characters+idChars);
  }
}
