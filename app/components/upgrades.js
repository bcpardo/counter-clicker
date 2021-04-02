import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { later, next } from '@ember/runloop';
import { tracked } from '@glimmer/tracking';

export default class UpgradesComponent extends Component {
  @service increment;
  @service count;
  @tracked multiplier = 1;
  runner = null;
  clickerStart = false;

  @action incrementIncrementAmount() {
    this.increment.increase(1);
  }

  @action startClicker() {
    if (!this.clickerStart) {
      this.clickerStart = true;
      next(this, function () {
        this.runner = this.click();
      });
    } else {
      this.multiplier++;
    }
  }

  nextClick() {
    this.runner = this.click();
  }

  click() {
    return later(
      this,
      function () {
        this.count.increaseCount(
          this.increment.incrementAmount * this.multiplier
        );
        this.nextClick();
      },
      1000
    );
  }
}
