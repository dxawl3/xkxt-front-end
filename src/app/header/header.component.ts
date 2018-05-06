import {Component, OnInit} from '@angular/core';
import {AppGlobalField} from '../core/config/app-global-field';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentLoginRole: string;

  constructor(private route: Router) {
  }

  ngOnInit() {
    this.getCurrentLoginRole();
  }

  getCurrentLoginRole(): void {
    this.currentLoginRole = localStorage.getItem(AppGlobalField.currentLoginRole);
  }

  setting(): void {
    this.route.navigateByUrl('/' + this.currentLoginRole + '/setting');
  }

  loginOut(): void {
    localStorage.clear();
    this.route.navigateByUrl('/');
  }
}
