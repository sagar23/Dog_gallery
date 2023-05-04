import { Component } from '@angular/core';
import { DogService } from './dog.service';
import { HttpClientModule } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { CommonModule, NgFor, NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [DogService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  dogImagesSrc: string[] = [];
  figureTitle: string[] = [];

  constructor(private dogService: DogService) {
    this.getAllService();
  }

  async getAllService() {
    this.dogService.getAllDogBreeds().subscribe((breedName) => {
      this.figureTitle = Object.keys(breedName?.message)
      this.getAllDogImages(this.figureTitle);
    })
  }

  async getAllDogImages(breedList: string[]) {
    const dogImages = this.dogService.createObservablesForImg(breedList);
    await forkJoin(dogImages).subscribe(res => this.dogImagesSrc = res.flat());
  }


}
