import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../message-item../../../models/message';
import { DialogflowService } from '../../services/dialogflow.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {

  @Input('message')
  private message : String;

  @Input('messages')
  private messages : string[] = [];

  temp :string;


  constructor(private dialogFlowService: DialogflowService) { }

  ngOnInit() {
  }

  public sendMessage(): void {
    this.temp = this.message.toString();
    this.messages.push(this.temp);

    this.dialogFlowService.getResponse(this.temp.toString()).subscribe(res => {
      this.messages.push(res.result.fulfillment.speech);
    })

    this.message = '';
  }

}
