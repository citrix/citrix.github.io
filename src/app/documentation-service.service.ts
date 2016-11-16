import { Injectable } from '@angular/core';
import { IDoc } from './shared/idocumentation';
import { Http,Response } from '@angular/http'
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class DocumentationServiceService {

  getDocs():Observable<Array<IDoc>> {

        return this._http.get('/assets/data/docs.json')
        .map((resp:Response) => <Array<IDoc>>resp.json())
        //.do(data => console.log('docs data:' + JSON.stringify(data)))
        .catch(this.handleError);
    }
    private handleError(error:Response){
        console.error(error);
        return Observable.throw(error.json().error || "Server Error");
    }
    constructor(private _http:Http){
  
    }
}
