
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

const PLACEHOLDER_IMAGE: string = "/assets/imgs/placeholder.jpg";
const SPINNER_IMAGE: string = "/assets/imgs/spinner.gif";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public image = PLACEHOLDER_IMAGE;

  constructor(public navCtrl: NavController, public camera: Camera) {}

  takePic() {
    console.log("Taking picture")
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      if (imageData) {
        this.image = 'data:image/jpeg;base64,' + imageData;
        document.getElementById('timeStamp').innerHTML = new Date();
      } else {
        this.image = PLACEHOLDER_IMAGE;
      }
     }, (err) => {
        this.image = PLACEHOLDER_IMAGE;
     });
     this.image = SPINNER_IMAGE;
  }
}
