import { Component,OnInit } from '@angular/core';
import { NavigationCancel,Event, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myRouter';
  displayLoadingIndicator=false;
  constructor(private authService:AuthService,private router:Router){}
  ngOnInit(): void {
      this.router.events.subscribe((routerEvent:Event):any  => {
      if(routerEvent instanceof NavigationStart){this.displayLoadingIndicator=true;}
      if(routerEvent instanceof NavigationEnd||
        routerEvent instanceof NavigationError||
        routerEvent instanceof NavigationCancel)
      {this.displayLoadingIndicator=false;}
  });
  }
  login(){
    this.authService.login();
  }
  logout(){
this.authService.logout();
  }
}
