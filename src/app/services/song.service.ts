import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Song } from '../models/song';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  url = environment.baseUrl;

  constructor(private http : HttpClient) { }

  getSongs() : Observable<Song[]> {
    return this.http.get<Song[]>(`${this.url}/songs`);
  }

  getSong(id : number) : Observable<Song> {
    return this.http.get<Song>(`${this.url}/songs/${id}`);
  }
}
