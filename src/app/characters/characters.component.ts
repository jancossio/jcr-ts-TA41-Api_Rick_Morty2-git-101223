import { Component, OnInit } from '@angular/core';

import { ComunicateService } from '../comunicate.service'

import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, RouterOutlet],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent {

  characters: any=null;

  constructor(private comuService:ComunicateService, private router:Router){
    this.getCharacters();
  }

  getCharacters(){
    this.comuService.getRandomCharacters(12)
    .subscribe(result => {this.characters = result})
  }
}