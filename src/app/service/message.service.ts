import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageModel } from '../components/models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private apiUrl = 'https://exemplo.com/api/sendMessage';  // Substitua pela URL da sua API

  constructor(private httpClient: HttpClient) { }

  sendMessage(message: MessageModel): Observable<any> {
    const payload = { message: message.message };
    return this.httpClient.post(this.apiUrl, payload);
  }
}
