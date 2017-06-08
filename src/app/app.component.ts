import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Subscription } from 'rxjs/subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  users_subscription: Subscription;
  users: any;
  constructor(private appServe: AppService){}
  ngOnInit(){
  	this.users_subscription = this.appServe.getUsersData().subscribe((users) => {
  		this.users = users;
  	});
  }
  ngOnDestroy(){
  	this.users_subscription.unsubscribe();
  }
}
