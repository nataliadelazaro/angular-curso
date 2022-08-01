import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    
    <h1>{{ titulo }}</h1>
    <h3>La base es: <strong>55</strong></h3>
    
    <button (click)="sumar()">+1</button>
    <span>{{numero}}</span>
    <button (click)="restar()">-1</button>
    
    <br><br><br><br>
    
    <button (click)="acumular(+1)">++1</button>
    <span>{{numero}}</span>
    <button (click)="acumular(-1)">--1</button>
    
    <br><br><br><br>
    
    <button (click)="acumularCinco(base)">+{{base}}</button>
    <span>{{numero}}</span>
    <button (click)="acumularCinco(-base)">-{{base}}</button>
    `
})

export class ContadorComponent {
    titulo: string = 'Contador App';
    numero: number = 10;
    base: number = 5;

    sumar() {
        this.numero += 1;
    }

    restar() {
        this.numero -= 1;
    }

    acumular(valor: number) {
        this.numero += valor;
    }

    acumularCinco(base: number) {
        this.numero += base;
    }

}