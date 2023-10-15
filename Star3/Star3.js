/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Star3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("star", "./Star3/costumes/star.svg", { x: 22, y: 23 })
    ];

    this.sounds = [new Sound("collect", "./Star3/sounds/collect.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    yield* this.glide(1, 180, 142);
    yield* this.wait(18);
    while (true) {
      yield* this.glide(1, this.random(-240, 240), this.random(-180, 180));
      yield;
    }
  }
}
