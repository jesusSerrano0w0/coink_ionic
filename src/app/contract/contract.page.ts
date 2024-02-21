import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderPage } from '../header/header.page';
import { InfoPage } from '../info/info.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.page.html',
  styleUrls: ['./contract.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,HeaderPage,InfoPage]
})
export class ContractPage implements OnInit {
   alertButtons = ['Action'];
  step3=true;
  titleStep="FINALIZAR";
  title="ESTAS MUY CERCA DE SER PARTE DE COINK.";
  info="Solo es necesario que leas detenidamente el contrato que se encuentra al final de esta pantalla y lo aceptes.";
  constructor(private Router:Router) { }
  goToNext(){
    this.Router.navigate(['/form'])
  }
  ngOnInit() {
  }

}
