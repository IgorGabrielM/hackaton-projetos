import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MessageComponent } from './components/message/message.component';
import { MessageModel } from './components/models/message.model';
import { MessageService } from './service/message.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MessageComponent, HttpClientModule, FormsModule, CommonModule],
  providers: [MessageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'hackaton-projetos';
  date: Date
  messages: MessageModel[] = [
    {
      message: 'Oi! Eu sou o Sugestly AI. Me envie sua mensagem e eu vou analisar os produtos para te recomendar as melhores opções, com base no que você precisa! 😊',
      time: new Date(),
      user: false
    }
  ];
  messageInput: string

  preMessage: MessageModel[] = [
    {
      user: false,
      message: "Olá! A IBM oferece soluções em nuvem fáceis de usar, com tutoriais e suporte dedicado. Você pode começar explorando os planos na IBM Cloud, com o plano Cloud File Storage | IBM, irá atender a sua nescessidade. Para mais informações acesse o link:",
      time: new Date(),
      link: 'https://www.ibm.com/products/file-storage'
    },
  ]

  // Olá, quero contratar um serviço de cloud da IBM para armazenar as imagens dos usuários da minha plataforma, mas não sou da área técnica, o que eu faço?

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.date = new Date();
  }

  sendMessage() {
    const payload: MessageModel = {
      user: true,
      message: this.messageInput,
      time: new Date()
    }
    this.messages.push(payload)
    this.messageInput = null;
    setTimeout(() => {
      this.messages.push(this.preMessage[0]), 1500
    })
  }
}
