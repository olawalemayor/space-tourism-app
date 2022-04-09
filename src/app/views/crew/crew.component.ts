import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'crew.component.html',
  styleUrls: ['crew.component.css'],
})
export class CrewComponent implements OnInit {
  crews: Crew[] = [];
  selectedCrew: Crew = {
    name: '',
    images: {
      png: '',
      webp: '',
    },
    role: '',
    bio: '',
  };

  selectedIndex: number = 1;

  crewTrackBy = (index: number, crew: Crew) => {
    return crew.name;
  };

  setCrew = ({ name }: Crew, index: number) => {
    const result = this.crews.find((crew) => crew.name === name);
    if (result) this.selectedCrew = result;
    this.selectedIndex = index;
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Result>('../../../assets/data.json').subscribe(({ crew }) => {
      this.crews = crew;
      this.setCrew(this.crews[0], 0);
    });
  }
}

interface Result {
  crew: Crew[];
}

interface Crew {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}
