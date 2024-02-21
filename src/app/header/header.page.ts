import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HeaderPage implements OnInit {
 @Input() step1:boolean | undefined;
 @Input() step2:boolean | undefined;
 @Input() step3:boolean | undefined;
 @Input() titleStep:any | undefined;

  constructor() { }

  ngOnInit() {
  }

}
