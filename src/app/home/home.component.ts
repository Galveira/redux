import { Component, OnInit } from '@angular/core';
declare const Twitch: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public memberStreams = ['snaeil', 'mina_vari', 'raikosuperior', 'cre4mynuts', 'tiriara_anor', 'clementiakaiser'];

  deleteFromStreams(streamName, streams) {
    return streams.filter(function(ele){
      return ele != streamName;
    });
  }

  ngOnInit() {

    const stream1 = this.memberStreams[Math.floor(Math.random() * this.memberStreams.length)];
    this.memberStreams = this.deleteFromStreams(stream1, this.memberStreams);

    const stream2 = this.memberStreams[Math.floor(Math.random() * this.memberStreams.length)];
    this.memberStreams = this.deleteFromStreams(stream2, this.memberStreams);

    const stream3 = this.memberStreams[Math.floor(Math.random() * this.memberStreams.length)];
    this.memberStreams = this.deleteFromStreams(stream3, this.memberStreams);

    const stream4 = this.memberStreams[Math.floor(Math.random() * this.memberStreams.length)];
    this.memberStreams = this.deleteFromStreams(stream4, this.memberStreams);


    const twitchStreams = [];
    twitchStreams.push(new Twitch.Embed("twitch1", {
      width: 340,
      height: 181,
      channel: stream1,
      layout: "video",
        autoplay: false
    }));
    twitchStreams.push(new Twitch.Embed("twitch2", {
      width: 340,
      height: 181,
      channel: stream2,
      layout: "video",
        autoplay: false
    }));
    twitchStreams.push(new Twitch.Embed("twitch3", {
      width: 340,
      height: 181,
      channel: stream3,
      layout: "video",
        autoplay: false
    }));
    twitchStreams.push(new Twitch.Embed("twitch4", {
      width: 340,
      height: 181,
      channel: stream4,
      layout: "video",
        autoplay: false
    }));


  }

}
