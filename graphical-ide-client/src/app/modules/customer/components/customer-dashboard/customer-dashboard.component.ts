import {Component, OnInit} from "@angular/core";
import {IProjectButton} from "../../../../sheards/interfaces/project-button.interface";
declare const $:any;
@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
  public projectList: Array<IProjectButton>;
  constructor() {
  }
  ngAfterViewInit():void {
    $(document).ready(function(){
      // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
      $('.modal').modal();
    });
  }

  public createNewProject = (newProjectName:string)=> {
    //TODO
  };

  ngOnInit() {
    this.projectList = [
      {id: 0,title: "Tibia", subtitle: "najlepsza gra", icon: null, description: "rewolucyjny projekt rewolucyjny blabalbala", projectId:0, userId:0},
      {id: 1,title: "Metin", subtitle: "druga najlepsza gra", icon: null, description: "rewolucyjny rewolucyjny projekt blabalbala", projectId:1, userId:0},
      {id: 1,title: "Metin", subtitle: "druga najlepsza gra", icon: null, description: "rewolucyjny rewolucyjny projekt blabalbala", projectId:1, userId:0},
      {id: 1,title: "Metin", subtitle: "druga najlepsza gra", icon: null, description: "rewolucyjny rewolucyjny projekt blabalbala", projectId:1, userId:0},
      {id: 1,title: "Metin", subtitle: "druga najlepsza gra", icon: null, description: "rewolucyjny rewolucyjny projekt blabalbala", projectId:1, userId:0},
      {id: 1,title: "Metin", subtitle: "druga najlepsza gra", icon: null, description: "rewolucyjny rewolucyjny projekt blabalbala", projectId:1, userId:0},
      {id: 1,title: "Metin", subtitle: "druga najlepsza gra", icon: null, description: "rewolucyjny rewolucyjny projekt blabalbala", projectId:1, userId:0},
      {id: 1,title: "Metin", subtitle: "druga najlepsza gra", icon: null, description: "rewolucyjny rewolucyjny projekt blabalbala", projectId:1, userId:0},
      {id: 1,title: "Metin", subtitle: "druga najlepsza gra", icon: null, description: "rewolucyjny rewolucyjny projekt blabalbala", projectId:1, userId:0},
      {id: 1,title: "Metin", subtitle: "druga najlepsza gra", icon: null, description: "rewolucyjny rewolucyjny projekt blabalbala", projectId:1, userId:0},
      {id: 1,title: "Metin", subtitle: "druga najlepsza gra", icon: null, description: "rewolucyjny rewolucyjny projekt blabalbala", projectId:1, userId:0},
      {id: 1,title: "Metin", subtitle: "druga najlepsza gra", icon: null, description: "rewolucyjny rewolucyjny projekt blabalbala", projectId:1, userId:0},
      {id: 1,title: "Metin", subtitle: "druga najlepsza gra", icon: null, description: "rewolucyjny rewolucyjny projekt blabalbala", projectId:1, userId:0},
      {id: 1,title: "Metin", subtitle: "druga najlepsza gra", icon: null, description: "rewolucyjny rewolucyjny projekt blabalbala", projectId:1, userId:0},
      {id: 1,title: "Metin", subtitle: "druga najlepsza gra", icon: null, description: "rewolucyjny rewolucyjny projekt blabalbala", projectId:1, userId:0},
      {id: 1,title: "Metin", subtitle: "druga najlepsza gra", icon: null, description: "rewolucyjny rewolucyjny projekt blabalbala", projectId:1, userId:0},
      {id: 1,title: "Metin", subtitle: "druga najlepsza gra", icon: null, description: "rewolucyjny rewolucyjny projekt blabalbala", projectId:1, userId:0},
      {id: 1,title: "Metin", subtitle: "druga najlepsza gra", icon: null, description: "rewolucyjny rewolucyjny projekt blabalbala", projectId:1, userId:0},
      {id: 1,title: "Metin", subtitle: "druga najlepsza gra", icon: null, description: "rewolucyjny rewolucyjny projekt blabalbala", projectId:1, userId:0},
      {id: 1,title: "Metin", subtitle: "druga najlepsza gra", icon: null, description: "rewolucyjny rewolucyjny projekt blabalbala", projectId:1, userId:0},
      {id: 1,title: "Metin", subtitle: "druga najlepsza gra", icon: null, description: "rewolucyjny rewolucyjny projekt blabalbala", projectId:1, userId:0},
      {id: 2,title: "CS", subtitle: "trzecia najlepsza gra", icon: null, description: "rewolucyjny projekt blabalbala", projectId:2, userId:0}
    ];
  }

}
