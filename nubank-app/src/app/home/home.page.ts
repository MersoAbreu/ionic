import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
public options: Array<any> = [
  {icon:'person-add-outline', text:'Indicar amigos'},
  {icon:'phone-portrait-outline', text:'Recarga de celular'},
  {icon:'wallet-outline', text:'Depositar'},
  {icon:'options-outline', text:'Ajustar limite'},
  {icon:'help-circle-outline', text:'Me ajuda'},
  {icon:'lock-open-outline', text:'Bloquear cartão'},
  {icon:'card-outline', text:'Cartão virtual'},
  {icon:'barcode-outline', text:'pagar'}
]
  
public items: Array<any> = [
  {icon:'help-circle-outline', text:'Me ajuda'},
  {icon:'person-outline', text:'Perfil'},
  {icon:'cash-outline', text:'Configurar conta'},
  {icon:'card-outline', text:'Configurar cartão'},
  {icon:'phone-portrait-outline', text:'Configuração do App'}
]
public slidesoptions: any ={slidesPerView: 3, freeMode: true}
  constructor() {}

}
