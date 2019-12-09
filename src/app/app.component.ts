import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Explore',
      url: '/list',
      icon: 'list'
    }
    ,
    {
      title: 'Create Concept Map',
      url: '/create-concept-map',
      icon: 'create'
    },
    // {
    //   title: 'Edit Concept Map',
    //   url: '/edit-concept-map',
    //   icon: 'pricetag'
    // },
    // {
    //   title: 'Concept Map',
    //   url: '/sample',
    //   icon: 'shuffle'
    // },
    {
      title: 'Login',
      url: '/login',
      icon: 'contact'
    }
    
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
