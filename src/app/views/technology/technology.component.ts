import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'technology.component.html',
  styleUrls: ['technology.component.css'],
})
export class TechnologyComponent implements OnInit {
  technologies: Technology[] = [];
  selectedTechnology: Technology = {
    name: '',
    images: {
      portrait: '',
      landscape: '',
    },
    description: '',
  };

  selectedIndex: number = 1;

  technologyTrackBy = (index: number, technology: Technology) => {
    return technology.name;
  };

  setTechnology = ({ name }: Technology, index: number) => {
    const result = this.technologies.find(
      (technology) => technology.name === name
    );
    if (result) this.selectedTechnology = result;
    this.selectedIndex = index;
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Result>('../../../assets/data.json')
      .subscribe(({ technology }) => {
        this.technologies = technology;
        this.setTechnology(technology[0], 0);
      });
  }
}

interface Result {
  technology: Technology[];
}

interface Technology {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}
