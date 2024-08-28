import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/models/song';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.page.html',
  styleUrls: ['./songs.page.scss'],
})
export class SongsPage implements OnInit {

  songs : Song[] = [];

  constructor(private songService : SongService) { }

  loadSongs(){
    this.songService.getSongs().subscribe({
      next: data => this.songs = data
    })
  }

  ngOnInit() {
    this.loadSongs();
  }

}
