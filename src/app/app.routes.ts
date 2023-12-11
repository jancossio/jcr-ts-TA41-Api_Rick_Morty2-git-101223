import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { CharactersComponent } from './characters/characters.component'
import { ErrorComponent } from './error/error.component'
import { CharacterComponent } from './character/character.component'



export const routes: Routes = [
    {
    path:'home',
    component: HomeComponent
    },
    {
    path:'about',
    component: AboutComponent
    },
    {
    path:'characters',
    component: CharactersComponent
    },
    {
    path:'characters/:id',
    component: CharacterComponent
    },
    {
    path:'error',
    component: ErrorComponent
    },
    {
    path:'**',
    redirectTo: 'error'
    }
];
