import {
  Project,
  Sprite
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Characters1 from "./Characters1/Characters1.js";
import Characters2 from "./Characters2/Characters2.js";
import Star from "./Star/Star.js";
import Star2 from "./Star2/Star2.js";
import Star3 from "./Star3/Star3.js";
import Star4 from "./Star4/Star4.js";
import Cake from "./Cake/Cake.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Characters1: new Characters1({
    x: 74,
    y: -40,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 4,
    size: 50,
    visible: true,
    layerOrder: 1
  }),
  Characters2: new Characters2({
    x: -45,
    y: -39,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 6,
    size: 50,
    visible: true,
    layerOrder: 2
  }),
  Star: new Star({
    x: -206,
    y: 132,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3
  }),
  Star2: new Star2({
    x: -194,
    y: -135,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4
  }),
  Star3: new Star3({
    x: 180,
    y: 142,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 5
  }),
  Star4: new Star4({
    x: 207,
    y: -151,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 7
  }),
  Cake: new Cake({
    x: 256,
    y: -155,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 6
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
