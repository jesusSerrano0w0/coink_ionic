import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class InfoPage implements OnInit {
  @Input() title:any|undefined;
  @Input() info:any|undefined;
  @Input() normalIco:any|undefined;
  @Input() icoSecurity:any|undefined;



  constructor() { }

  ngOnInit() {
  }

}
