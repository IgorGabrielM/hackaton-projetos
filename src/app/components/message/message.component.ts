import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  imports: [
    CommonModule
  ],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent implements OnInit {
  @Input() user: boolean;
  @Input() message: string;
  @Input() image: string;
  @Input() link: string;
  @Input() time: Date;
  imageUser: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.user);
    this.verifyUser()
  }

  verifyUser() {
    if (!this.user) {
      this.imageUser = 'https://static-00.iconduck.com/assets.00/bot-icon-1024x1023-fnagdtph.png'
    } else {
      this.imageUser = 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png';
    }
  }
}
