import { Component, OnInit } from '@angular/core';
import { DocumentationServiceService } from '../documentation-service.service';
import { IDoc } from '../shared/idocumentation';

@Component({
  selector: 'citrix-documentation',
  templateUrl: './documentation-listing-component.component.html',
  styleUrls: ['./documentation-listing-component.component.css'],
  providers: [DocumentationServiceService]
})
export class DocumentationListingComponentComponent implements OnInit {

  private documentationList: Array<IDoc>;

   constructor( private DocumentationService: DocumentationServiceService){}
  
  ngOnInit() {
    
    this.DocumentationService.getDocs()
    .subscribe(docs => this.documentationList = docs );
  }
  getStyles( active)
  {
    if ( active )
    {
      return "bs-callout bs-callout-primary text-left";
    }
    else
    {
      return "bs-callout bs-callout-default text-left";
    }
  }
  checkIfActive(active)
  {
    if ( active )
    {
      return true;
    }
    else
    {
      return false;
    }
  }

}
