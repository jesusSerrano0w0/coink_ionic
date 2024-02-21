import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderPage } from '../header/header.page';
import { InfoPage } from '../info/info.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cell-confirm',
  templateUrl: './cell-confirm.page.html',
  styleUrls: ['./cell-confirm.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,HeaderPage,InfoPage]
})
export class CellConfirmPage implements OnInit {
  step=true;
  titleStep="NÚMERO CELULAR";
  info="Para comenzar, por favor ingresa tu número celular.";
  title="             ";
  constructor(private Router:Router) { }
  goToNext(){
    this.Router.navigate(['/form'])
  }
  ngOnInit() {
  }

}
