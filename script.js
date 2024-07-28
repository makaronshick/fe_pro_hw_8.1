"use strict";

const ladder = {
  step: 0,
  up: function () {
    this.step = this.step + 1;
    return this;
  },
  down: function () {
    this.step = this.step - 1;
    return this;
  },
  showStep: function () {
    console.log(this.step);
    return this;
  }
};

ladder.up();
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 2

// ladder.up().up().up().up().down().showStep(); // 3
