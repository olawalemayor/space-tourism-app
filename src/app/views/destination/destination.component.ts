import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'destination.component.html',
  styleUrls: ['destination.component.css'],
})
export class DestinationComponent implements OnInit {
  destinations: Destination[] = [];
  selectedDestination: Destination = {
    name: '',
    description: '',
    distance: '',
    images: { png: '', webp: '' },
    travel: '',
  };

  selectedIndex: number = 1;

  destinationTrackBy = (index: number, destination: Destination) => {
    return destination.name;
  };

  setDestination = ({ name }: Destination, index: number) => {
    const result = this.destinations.find(
      (destination) => destination.name === name
    );
    if (result) this.selectedDestination = result;
    this.selectedIndex = index;
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Result>('../../../assets/data.json')
      .subscribe(({ destinations }) => {
        this.destinations = destinations;
        this.setDestination(destinations[0], 0);
      });
  }
}

interface Result {
  destinations: Destination[];
}

interface Destination {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}
