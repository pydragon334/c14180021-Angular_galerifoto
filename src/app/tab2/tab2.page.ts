import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
  
  tebakan = "0";
  jawaban = "";
  hasil = "";
  image = "./assets/mmm.jpg";

  Hasil(){
    var getRandNmb = function(long) {
      var charsBeingRandomized = "0123456789";
      var returnNumb = "";
      for (var x = 0; x < long; x++) {
          var i = Math.floor(Math.random() * charsBeingRandomized.length);
          returnNumb += charsBeingRandomized.charAt(i);
      }
      return returnNumb;
    }
    this.tebakan = getRandNmb(1);
    if(this.tebakan == this.jawaban){
      this.hasil = "benar";
      this.image ="./assets/ok.jpg";
    } else {
      this.hasil = "salah";
      this.image ="./assets/ugh.gif";
    }
  }
}
