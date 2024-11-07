import { Component } from '@angular/core';

@Component({
  selector: 'app-contect',
  standalone: true,
  imports: [],
  templateUrl: './contect.component.html',
  styleUrl: './contect.component.css'
})
export class ContectComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    if (this.contact.name && this.contact.email && this.contact.message) {
      // Handle form submission, e.g., send to backend or display a success message
      console.log('Contact Form Submitted', this.contact);
      alert('Thank you for reaching out! We will get back to you soon.');
      
      // Clear the form
      this.contact = { name: '', email: '', message: '' };
    }
  }
}
