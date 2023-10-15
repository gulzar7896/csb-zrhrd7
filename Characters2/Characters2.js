/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Characters2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("character1-a", "./Characters2/costumes/character1-a.svg", {
        x: 49.8898709690844,
        y: 124.76092657062226
      }),
      new Costume("character1-b", "./Characters2/costumes/character1-b.svg", {
        x: 54.60290188300769,
        y: 122.98040317401274
      }),
      new Costume("character1-c", "./Characters2/costumes/character1-c.svg", {
        x: 54.60291410943074,
        y: 126.85057804587933
      }),
      new Costume("character1-d", "./Characters2/costumes/character1-d.svg", {
        x: 54.602918664146046,
        y: 123.84994499999999
      }),
      new Costume("character1-e", "./Characters2/costumes/character1-e.svg", {
        x: 65.725,
        y: 120.67006881854581
      }),
      new Costume("character1-f", "./Characters2/costumes/character1-f.svg", {
        x: 54.60291455471537,
        y: 126.76429674297606
      }),
      new Costume("character1-g", "./Characters2/costumes/character1-g.svg", {
        x: 54.60291143772301,
        y: 125.34991500000001
      }),
      new Costume("character1-h", "./Characters2/costumes/character1-h.svg", {
        x: 54.60291643772288,
        y: 126.34996499999997
      }),
      new Costume("character1-i", "./Characters2/costumes/character1-i.svg", {
        x: 59.662344830457954,
        y: 124.64983500000002
      }),
      new Costume("character1-j", "./Characters2/costumes/character1-j.svg", {
        x: 57.80000000000001,
        y: 127.9064156368213
      }),
      new Costume("character1-k", "./Characters2/costumes/character1-k.svg", {
        x: 55.00291821886171,
        y: 122.96517404562759
      }),
      new Costume("character1-l", "./Characters2/costumes/character1-l.svg", {
        x: 56,
        y: 124.849995
      }),
      new Costume("character1-m", "./Characters2/costumes/character1-m.svg", {
        x: 56,
        y: 126.73041545130786
      })
    ];

    this.sounds = [new Sound("pop", "./Characters2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.costume = "Spotlight";
    this.goto(-45, -39);
    yield* this.sayAndWait("Asalaamu-Al-Kum", 2);
    yield* this.wait(1);
    yield* this.sayAndWait("I Am Asad Mushtaq", 2);
    yield* this.wait(1);
    yield* this.sayAndWait("To Day Its 21 December 2023", 2);
    yield* this.wait(1);
    yield* this.sayAndWait("In This Day My Sisteer Aman Was Born", 2);
    yield* this.wait(1);
    yield* this.sayAndWait("We Celebrate This Day With Aman", 2);
    yield* this.wait(1);
    yield* this.sayAndWait("So Go To Home And Celebrate Happy Birth Day", 2);
    yield* this.wait(1);
    this.stage.costume = "Party";
    yield* this.wait(8);
    yield* this.sayAndWait("Happy Birth Day", 2);
  }
}
