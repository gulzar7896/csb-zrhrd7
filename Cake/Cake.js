/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Cake extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("cake-a", "./Cake/costumes/cake-a.svg", { x: 64, y: 50 }),
      new Costume("cake-b", "./Cake/costumes/cake-b.svg", { x: 64, y: 42 })
    ];

    this.sounds = [new Sound("Birthday", "./Cake/sounds/Birthday.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(256, -155);
    yield* this.wait(18);
    this.goto(13, -81);
    yield* this.wait(9);
    this.costumeNumber++;
  }
}
