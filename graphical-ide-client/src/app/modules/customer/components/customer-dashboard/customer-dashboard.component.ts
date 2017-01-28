import {Component, OnInit} from "@angular/core";
import {IProjectButton} from "../../../../sheards/interfaces/project-button.interface";
import {AuthServiceService} from "../../../../sheards/services/auth-service/auth-service.service";
import {SessionStorageService} from "ng2-webstorage/dist/app";
import {ProjectServiceService} from "../../../../sheards/services/project-service/project-service.service";
import {IProjectModel} from "../../../../sheards/interfaces/project-model.interface";
declare const $:any;
@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css'],
  providers: [ProjectServiceService]
})
export class CustomerDashboardComponent implements OnInit {
  public projectList: Array<IProjectButton>;
  constructor(private projectService:ProjectServiceService){}
  ngAfterViewInit():void {
    $(document).ready(function(){
      // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
      $('.modal').modal();
    });
  }

  public createNewProject = (newProjectName:string)=> {

    let newProject:IProjectModel = <any>{};
    newProject.name = newProjectName;

    console.log('test');
    this.projectService.createNewProject(newProject).subscribe(result=>{
      if(result.error){
        return;
      }
    });
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
