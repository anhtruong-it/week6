import { NgIfContext } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import io from 'socket.io-client';
const SERVER_URL = 'http://localhost:3000';


@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket;
  constructor() { }

  initSocket(){
    this.socket = io(SERVER_URL);
    return ()=>{this.socket.disconnect();}
  }

  send(message: string){
    this.socket.emit('message', message);
  }

  getMessage(){
    return Observable.create((observer)=>{
      this.socket.on('message', (message)=>{
        observer.next(message);
      });
    });
    //this.socket.on('message', (message)=>next(message));
  }
}
