import {Component, ViewChild} from '@angular/core';
import {Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {UsersPage} from '../pages/users/users';
import {ReposPage} from '../pages/repos/repos';
import {OrganizationsPage} from '../pages/organizations/organizations';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = HomePage;
  //
  // constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
  //   platform.ready().then(() => {
  //     // Okay, so the platform is ready and our plugins are available.
  //     // Here you can do any higher level native things you might need.
  //     statusBar.styleDefault();
  //     splashScreen.hide();
  //   });
  // }

  @ViewChild(Nav) nav: Nav;

  rootPage: any = UsersPage;
  pages: Array<{ title: string, component: any }>;


  constructor(public platform: Platform, public menu: MenuController, public statusBar: StatusBar, public splashScreen: SplashScreen) {

    this.initializeApp(statusBar, splashScreen);

    this.pages = [
      {title: 'Users', component: UsersPage},
      {title: 'Repositories', component: ReposPage},
      {title: 'Organizations', component: OrganizationsPage}
    ];

  }

  initializeApp(statusBar: StatusBar, splashScreen: SplashScreen) {

    this.platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    })

  }

  openPage(page) {

    this.menu.close();
    this.nav.setRoot(page.component);

  }

}

