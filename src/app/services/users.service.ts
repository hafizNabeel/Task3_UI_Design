import { Injectable } from '@angular/core';
import { User } from './person.model';
import { persondummydata } from '../dummy-data/persondummydata';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  /* this services is for add and get user */
  constructor() {}

  private userData: User[] = persondummydata;



  addUser(user: User) {
    this.userData.push(user);
  }

  getUsers() {
    return this.userData.slice();
  }
}
