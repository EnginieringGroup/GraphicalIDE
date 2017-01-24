import {Component, OnInit} from '@angular/core';
import {INavbarLi} from "../../../../sheards/interfaces/navbar-li.interface";
import {ENavbarSection} from "../../../../sheards/navbar-section.enum";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public menuItems: Array<INavbarLi>;

  constructor() {

  }

  ngOnInit() {
    this.menuItems  = [
      {id:0,section: ENavbarSection.TOP,name:"LOGIN", callback:() => null, href:"/login", icon:null},
      {id:1,section: ENavbarSection.TOP,name:"REGISTER", callback:() => null, href:"/register", icon:null},
    ];
  }

}

