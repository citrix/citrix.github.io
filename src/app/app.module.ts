import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProjectListingComponentComponent } from './project-listing-component/project-listing-component.component';
import { FeaturedProjectListingComponentComponent } from './featured-project-listing-component/featured-project-listing-component.component';
import { DocumentationListingComponentComponent } from './documentation-listing-component/documentation-listing-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListingComponentComponent,
    FeaturedProjectListingComponentComponent,
    DocumentationListingComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
