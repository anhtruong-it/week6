import { Component, OnInit } from '@angular/core';
import { SocketService } from '../services/socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messagecontent:string="";
  messages:string[] = [];
  ioConnection:any;

  constructor(private socketService:SocketService) { }

  ngOnInit(): void {
    this.socketService.initSocket();
   // this.socketService.getMessage((m)=>{this.messages.push(m)});
   this.socketService.getMessage().subscribe(m => {this.messages.push(m);});
  }




  chat(){
    if(this.messagecontent){
      this.socketService.send(this.messagecontent);
      this.messagecontent="";

    }else {
      console.log("no message");
    }

  }

}
