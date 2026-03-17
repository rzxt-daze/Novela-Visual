import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton
  ]
})
export class HomePage {

  personaje: string = "...";
  texto: string = "Sales de tu trabajo de medio tiempo y chocas con una chica al salir por la puerta.";

  mostrarWaifu: boolean = false;
  
  siguiente() {
    this.personaje = "Rika";
    this.texto = "¡Ey tú! Fijate por donde caminas idiota.";
    this.mostrarWaifu = true;
  }

  ignorar() {
    this.personaje = "Sayori";
    this.texto = "Oye... ¿por qué me ignoras?";
  }

}