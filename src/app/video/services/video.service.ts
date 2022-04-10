import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private apiUrl: string = 'https://testapi.endanzatachira.org.ve/api';

  constructor( private http: HttpClient ) { }

  buscarVideoPorRp( rp: string ): Observable<any> {
    let userToken = '4|khiQX6rDChiBPHRJS1PUQxovpQAyQAeyUwnSBNZx';
    const url = `${ this.apiUrl }/caballo/${ rp }`;
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': `Bearer ${userToken}`
    // });

    // let headers = new HttpHeaders();
    // headers = headers.append("Content-Type", "application/json");
    // headers = headers.append("Authorization", "Bearer "+userToken);

    // return this.http.get( url, { headers : headers}  );

    let header = new HttpHeaders().set(      
      "Authorization", userToken
    );

    return this.http.get( url , {headers:header});

  }
  // login( email: string ): Observable<any> {

  //   const url = `${ this.apiUrl }/email/${ email}`;
  //   return this.http.post<any>( url );
  // }


  }
