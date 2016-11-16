import { Component, OnInit } from '@angular/core';
import { ProjectsServiceService } from '../projects-service.service';
import { IProject } from '../shared/iproject'

@Component({
  selector: 'citrix-projects',
  templateUrl: './project-listing-component.component.html',
  styleUrls: ['./project-listing-component.component.css'],
  providers: [ProjectsServiceService]
})
export class ProjectListingComponentComponent implements OnInit {

  projectList: Array<IProject>;
  rowCount: number;
  rows: Array<Array<IProject>>;
  
  constructor( private projectsService: ProjectsServiceService){}

  ngOnInit() : void {
    //get the list of open source projects from the service
    
    this.projectsService.getProjects()
      .subscribe(
          returnedProjects => 
          {
            this.projectList = returnedProjects

            switch ( this.projectList.length % 2)
            {
              case 0:
                this.rowCount = this.projectList.length / 2;
                break;
              case 1:
                this.rowCount = (this.projectList.length / 2);
                break;
            }
            this.rowCount = Math.ceil(this.rowCount);
            this.rows = new Array<Array<IProject>>();

            // add the project to the correct rows in the array
            var counter:number = 0;
            for ( var project of this.projectList)
            {
              var rowNumber = Math.floor(counter/2);
              
              try {
                this.rows[rowNumber].push(project);
              } catch (error) {
                this.rows[rowNumber] = [];
                this.rows[rowNumber].push(project);
              }

              counter += 1;
            } 
          },
          err => {console.error(err)},
          () => console.log('done'));
  } 
}
