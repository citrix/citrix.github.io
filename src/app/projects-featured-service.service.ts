import { Injectable } from '@angular/core';
import { IFeaturedProject } from './shared/ifeaturedproject';
import { Http,Response } from '@angular/http'
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProjectsFeaturedServiceService {

   getFeaturedProjects():Observable<Array<IFeaturedProject>> {

        return this._http.get('/assets/data/featured.json')
        .map((resp:Response) => <Array<IFeaturedProject>>resp.json())
        //.do(data => console.log('featured data:' + JSON.stringify(data)))
        .catch(this.handleError);
    }
    private handleError(error:Response){
        console.error(error);
        return Observable.throw(error.json().error || "Server Error");
    }
    constructor(private _http:Http){
  
    }
}
