import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {User} from '../../models/user';
import {GithubUsersProvider} from '../../providers/github-users/github-users';
import {UserDetailsPage} from "../user-details/user-details";

/**
 * Generated class for the UsersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  users: User[];
  usersInList: User[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubUsersProvider: GithubUsersProvider) {

    githubUsersProvider.load().subscribe(users => {
      this.users = users;
      this.usersInList = users;
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
    // this.githubUsersProvider.searchUsers('latera1n').subscribe( users => {
    //   console.log(users);
    // });
  }

  showDetails(login: string) {
    this.navCtrl.push(UserDetailsPage, {login});
  }

  search(searchEvent) {
    let q = searchEvent.target.value.trim();
    if (q === '' || q.length < 3) {
      this.users = this.usersInList;
    } else {
      this.githubUsersProvider.searchUsers(q).subscribe(users => {
        this.users = users;
      });
    }
  }

}
