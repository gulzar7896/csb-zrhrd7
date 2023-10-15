/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Characters1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("character1-a", "./Characters1/costumes/character1-a.svg", {
        x: 49.8898709690844,
        y: 124.76092657062226
      }),
      new Costume("character1-b", "./Characters1/costumes/character1-b.svg", {
        x: 54.60290188300769,
        y: 122.98040317401274
      }),
      new Costume("character1-c", "./Characters1/costumes/character1-c.svg", {
        x: 54.60291410943074,
        y: 126.85057804587933
      }),
      new Costume("character1-d", "./Characters1/costumes/character1-d.svg", {
        x: 54.602918664146046,
        y: 123.84994499999999
      }),
      new Costume("character1-e", "./Characters1/costumes/character1-e.svg", {
        x: 65.725,
        y: 120.67006881854581
      }),
      new Costume("character1-f", "./Characters1/costumes/character1-f.svg", {
        x: 54.60291455471537,
        y: 126.76429674297606
      }),
      new Costume("character1-g", "./Characters1/costumes/character1-g.svg", {
        x: 54.60291143772301,
        y: 125.34991500000001
      }),
      new Costume("character1-h", "./Characters1/costumes/character1-h.svg", {
        x: 54.60291643772288,
        y: 126.34996499999997
      }),
      new Costume("character1-i", "./Characters1/costumes/character1-i.svg", {
        x: 59.662344830457954,
        y: 124.64983500000002
      }),
      new Costume("character1-j", "./Characters1/costumes/character1-j.svg", {
        x: 57.80000000000001,
        y: 127.9064156368213
      }),
      new Costume("character1-k", "./Characters1/costumes/character1-k.svg", {
        x: 55.00291821886171,
        y: 122.96517404562759
      }),
      new Costume("character1-l", "./Characters1/costumes/character1-l.svg", {
        x: 56,
        y: 124.849995
      }),
      new Costume("character1-m", "./Characters1/costumes/character1-m.svg", {
        x: 56,
        y: 126.73041545130786
      })
    ];

    this.sounds = [new Sound("pop", "./Characters1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    yield* this.wait(20);
    yield* this.sayAndWait("Asalaamu-Al-Kum", 2);
    yield* this.wait(1);
    yield* this.sayAndWait("I Am Aman AJK", 2);
    yield* this.wait(4);
    yield* this.sayAndWait("Thank You My Brother", 2);
    this.stage.costume = "backdrop1";
    yield* this.wait(5);
    /* TODO: Implement stop all */ null;
  }
}
