import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})

export class AboutComponent {
  teamMembers = [
    {
      name: 'John Doe',
      position: 'CEO',
      description: 'Experienced in managing and growing businesses in the tech industry.',
      image: 'assets/images/john-doe.jpg',
      title:'Chang by N',
    },
    {
      name: 'Jane Smith',
      position: 'CTO',
      description: 'Expert in software development and leading technical teams.',
      image: 'assets/images/jane-smith.jpg'
    },
    // Add more team members as needed
  ];
}
