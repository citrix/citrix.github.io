import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http'
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { IProject } from './shared/iproject'

@Injectable()
export class ProjectsServiceService {
getProjects(): Observable<Array<IProject>>
    {
        console.log("starting the http request");
        return this._http.get('/assets/data/projects.json')
        .map((resp:Response) => <Array<IProject>>resp.json())
        //.do(data => console.log('project data:' + JSON.stringify(data)))
        .catch(this.handleError);

    }
     private handleError(error:Response){
         console.log("We have obtained an error from HTTP");
        console.error(error);
        return Observable.throw(error.json().error || "Server Error");
    }
    constructor(private _http:Http){}
}
