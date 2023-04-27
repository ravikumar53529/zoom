import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {ZoomMtg} from '@zoomus/websdk';
import { environment } from 'src/environments/environment';
import { HmacSHA256, enc } from 'crypto-js';


@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.scss']
})
export class ZoomComponent {
  public zoomApiSignature:string ='';
  public apiKey = 'sKg6FpTYQEOCiZf0r6HaeQ';
  public apiSecret = 'ZTLbRgUMYUo8LhQWJ1HXPiGLjsDNWZ1yHM18';
  public meetingId = '78472291575';
  public passWord='kEnkW4'
  public role = 0; // 0 for participant, 1 for host
  public timestamp = new Date().getTime();
  signature = ZoomMtg.generateSDKSignature({
    meetingNumber: this.meetingId,
    sdkKey: this.apiKey,
    sdkSecret: this.apiSecret,
    role: this.role.toString(),
    success: function(res:any){
      console.log(res.result);
    }
  });

  constructor(private HttpClientRef:HttpClient){
    
    // const endpoint = 'https://zoom.us/oauth/authorize';
    // const message = `${this.apiKey}${this.meetingId}${this.timestamp}${this.role}`;
    // const hash = HmacSHA256(message, this.apiSecret).toString(enc.Base64);
    // this.zoomApiSignature = btoa(`${this.apiKey}.${endpoint}.${this.meetingId}.${this.timestamp}.${this.role}.${hash}`);
    // console.log(this.zoomApiSignature)
  }

  ngAfterViewInit(){
     //generate signature
  
     this.initializeZoomApp()
  }

  public initializeZoomApp():void{
    ZoomMtg.setZoomJSLib('https://source.zoom.us/1.9.5/lib', '/av');
    // ZoomMtg.preLoadWasm()
     ZoomMtg.prepareWebSDK()
       ZoomMtg.init({
    leaveUrl:'https://zoom.us',
    isSupportAV: true,
    success: () => {
    ZoomMtg.join({
      signature:this.signature,
      meetingNumber:this.meetingId,
      userName: 'Ravikumar',
      passWord: this.passWord,
      sdkKey:this.apiKey,
      userEmail:'galinki.ravi333@gmail.com',
      success: () => {
        console.log('Join meeting success');
      },
      error: () => {
        console.log('Join meeting error');
      }
    })
    }
   })

  }

}
