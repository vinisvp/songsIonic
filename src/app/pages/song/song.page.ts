import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Song } from 'src/app/models/song';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.page.html',
  styleUrls: ['./song.page.scss'],
})
export class SongPage implements OnInit {

  song : Song = {} as Song;

  constructor(private songService : SongService,
              private activedRoute : ActivatedRoute
  ) { }

  loadSong(id : number) {
    this.songService.getSong(id).subscribe({
      next: data => this.song = data
    })
  }

  ngOnInit() {
    let id = this.activedRoute.snapshot.paramMap.get('id');
    if(id){
      this.loadSong(parseInt(id));
    }
  }

}
