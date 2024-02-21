import { Component,OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet, NavController } from '@ionic/angular/standalone';
import { LoadingPage } from './loading/loading.page';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet,LoadingPage],
})
export class AppComponent implements OnInit{
   
  constructor(private navController:NavController) {}
  ngOnInit(){
    this.navController.navigateRoot('/loading');
     setTimeout(()=>{
      this.navController.navigateRoot('/login');
     },2000)
   
  }


}
