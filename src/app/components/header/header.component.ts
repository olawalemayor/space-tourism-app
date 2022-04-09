import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'header.component.html',
  selector: 'app-header',
  styleUrls: ['header.component.css'],
})
export class HeaderComponent implements OnInit {
  logo = '../../../assets/shared/logo.svg';

  openToggle = '../../../assets/shared/icon-hamburger.svg';

  closeToggle = '../../../assets/shared/icon-close.svg';

  isToggled = false;

  setToggle = () => {
    this.isToggled = !this.isToggled;
  };

  setToggleClass = () => {
    const mainClass = 'mobile-navbar';
    let toggleClass = this.isToggled ? 'toggled' : '';
    return `${mainClass} ${toggleClass}`;
  };

  ngOnInit() {}
}
