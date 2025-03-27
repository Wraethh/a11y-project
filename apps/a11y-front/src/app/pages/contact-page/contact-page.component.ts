import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

export class ContactFormData {
  constructor(public name: string, public age: number, public email: string, public phoneNumber: string, public message: string) { }
}

@Component({
  selector: 'a11y-contact-page',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent {
  data = new ContactFormData('', 0, '', '', '');
  router = inject(Router);

  onSubmit() {
    if (this.data.name !== "" && this.data.age !== 0 && this.data.email !== "" && this.data.phoneNumber !== "" && this.data.message !== "") {
      alert('Thanks for your message!');
      console.log('Sent with', JSON.stringify(this.data));
      this.router.navigateByUrl('/');
    }
    alert('Contact form is not completed correctly')
  }
}
