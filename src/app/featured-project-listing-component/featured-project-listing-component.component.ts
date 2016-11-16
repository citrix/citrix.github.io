import { Component, OnInit } from '@angular/core';
import { ProjectsFeaturedServiceService } from '../projects-featured-service.service';
import { IFeaturedProject } from '../shared/ifeaturedproject';


@Component({
  selector: 'featured-projects',
  templateUrl: './featured-project-listing-component.component.html',
  styleUrls: ['./featured-project-listing-component.component.css'],
  providers: [ProjectsFeaturedServiceService]
})
export class FeaturedProjectListingComponentComponent implements OnInit {
private featuredProjectsList: Array<IFeaturedProject>;

   constructor( private FeaturedProjectService: ProjectsFeaturedServiceService){
  }
  ngOnInit() : void {
    
    this.FeaturedProjectService.getFeaturedProjects()
    .subscribe(projects => this.featuredProjectsList = projects );
  }
  getStyles(index)
  {
    if ( index == 0)
    {
      return "item active";
    }
    else
    {
      return "item";
    }
  }

}
