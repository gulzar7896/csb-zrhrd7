/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 210,
        y: 169.5859125
      }),
      new Costume("Spotlight", "./Stage/costumes/Spotlight.png", {
        x: 480,
        y: 360
      }),
      new Costume("Party", "./Stage/costumes/Party.svg", { x: 240, y: 180 })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];
  }
}
