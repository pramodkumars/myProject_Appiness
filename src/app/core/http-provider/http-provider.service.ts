import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError , filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HTTPProviderService {

  private url: string = "https://api.github.com/resource?page=2;//Local";

  constructor(public http: HttpClient) {
   this.url = "https://api.github.com/resource?page=2;//Local";
  }
  processServerRequest(api: string, restType: string, data?: any): Observable<any> {
    var finalUrl = this.url + api;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    switch (restType) {
      case 'get': return this.http.get(finalUrl + this.serialize(data))
        .pipe(
          map(this.extractData.bind(this))).pipe(
            catchError(this.handleError)
          );
      case 'post': return this.http.post(finalUrl, data, { headers })
        .pipe(
          map(this.extractData.bind(this)));
    }
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  private extractData(res: any) {
    return res || {};
  }

  /**
   *  function to serialize plain object to get parameters
   * @param params strings that needs to be appended to the url
   */
  private serialize(params: any): string {
    if (params === undefined) {
      return '';
    }
    return '?' + Object.keys(params).reduce((a, k) => { a.push(k + '=' + encodeURIComponent(params[k])); return a; }, []).join('&');
  }

}
