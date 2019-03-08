import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-max-player',
  templateUrl: './max-player.component.html',
  styleUrls: ['./max-player.component.css']
})
export class MaxPlayerComponent implements OnChanges {
  @Input() maxPlayer = 0;
  @Input() sportType = "";
  starWidth = 75;
  playerString="";
  @Output() maxPlayerClicked: EventEmitter<string> =
    new EventEmitter<string>();

  ngOnChanges(): void {
    for (let i = 0; i < this.maxPlayer; i++) {
      if(this.sportType==="tennis"){
        this.playerString+="🎾"; 
      }else{
        this.playerString+="⚽";
      }

    }
  }

  onClick(): void {
    this.maxPlayerClicked.emit(`Max Player = ${this.maxPlayer}`);
  }
}