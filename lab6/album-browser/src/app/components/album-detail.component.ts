import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../album.service';
import { Album } from '../models';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <div *ngIf="loading">Loading album details...</div>
    
    <div *ngIf="album && !loading">
      <h2>Album Details</h2>
      <p><strong>ID:</strong> {{ album.id }}</p>
      <p><strong>User ID:</strong> {{ album.userId }}</p>
      
      <div>
        <label><strong>Title: </strong></label>
        <input [(ngModel)]="album.title" type="text" />
        <button (click)="saveTitle()">Save</button>
      </div>
      <p *ngIf="saved" style="color: green;">Changes saved successfully!</p>

      <div style="margin-top: 20px;">
        <button routerLink="/albums">Back to Albums</button>
        <button [routerLink]="['/albums', album.id, 'photos']" style="margin-left: 10px;">View Photos</button>
      </div>
    </div>
  `
})
export class AlbumDetailComponent implements OnInit {
  album!: Album;
  loading = true;
  saved = false;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.albumService.getAlbum(id).subscribe(data => {
        this.album = data;
        this.loading = false;
      });
    });
  }

  saveTitle() {
    this.albumService.updateAlbum(this.album).subscribe(() => {
      this.saved = true;
      setTimeout(() => this.saved = false, 3000);
    });
  }
}