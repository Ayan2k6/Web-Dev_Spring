import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlbumService } from '../album.service';
import { Photo } from '../models';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <h2>Photos for Album {{ albumId }}</h2>
    <button [routerLink]="['/albums', albumId]" style="margin-bottom: 20px;">Back to Album</button>
    
    <p *ngIf="loading">Loading photos...</p>

    <div class="photo-grid" *ngIf="!loading">
      <div class="photo-card" *ngFor="let photo of photos">
        <img [src]="'https://picsum.photos/150/150?random=' + photo.id" [alt]="photo.title">
        <p class="photo-title">{{ photo.title }}</p>
      </div>
    </div>
  `,
  styles: [`
    .photo-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 15px; }
    .photo-card { text-align: center; border: 1px solid #ccc; padding: 10px; border-radius: 8px; }
    .photo-title { font-size: 12px; margin-top: 5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  `]
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  albumId!: number;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.albumId = Number(params.get('id'));
      this.albumService.getAlbumPhotos(this.albumId).subscribe(data => {
        this.photos = data;
        this.loading = false;
      });
    });
  }
}