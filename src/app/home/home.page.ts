import { Component } from '@angular/core';
declare var Tone: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  pad1() {
    var synth = new Tone.Synth().toMaster();

    synth.triggerAttackRelease("C2", "32n");
  }
  pad2() {
    var synth = new Tone.Synth().toMaster();

    synth.triggerAttackRelease("E4", "32n");
  }
  pad3() {
    var synth = new Tone.Synth().toMaster();

    synth.triggerAttackRelease("C3", "32n");
  }
  pad4() {
    var synth = new Tone.Synth().toMaster();

    synth.triggerAttackRelease("D5", "6n");
  }
  pad5() {
    var synth = new Tone.Synth().toMaster();

    synth.triggerAttackRelease("C9", "4n");
  }
  pad6() {
    var synth = new Tone.Synth().toMaster();

    synth.triggerAttackRelease("A4", "8n");
  }
  pad7() {
    var synth = new Tone.Synth().toMaster();

    synth.triggerAttackRelease("B7", "8n");
  }
  pad8() {
    var synth = new Tone.Synth().toMaster();

    synth.triggerAttackRelease("D6", "8n");
  }
  pad9() {
    var synth = new Tone.Synth().toMaster();

    synth.triggerAttackRelease("E5", "8n");
  }
  pad10() {
    var synth = new Tone.Synth().toMaster();

    synth.triggerAttackRelease("A4", "8n");
  }
  pad11() {
    var synth = new Tone.Synth().toMaster();

    synth.triggerAttackRelease("F3", "8n");
  }
  pad12() {
    var synth = new Tone.Synth().toMaster();

    synth.triggerAttackRelease("G2", "8n");
  }
}
