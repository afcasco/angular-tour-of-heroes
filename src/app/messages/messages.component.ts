import {Component} from '@angular/core';
import {MessageService} from '../services/message.service';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {

  constructor(public messageService: MessageService) {
  }

}
