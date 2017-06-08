import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class AppService {

  constructor(private db: AngularFireDatabase) { }

  getUsersData(){
  	return this.db.list('users');
  }
}
