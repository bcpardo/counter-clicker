import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class IncrementService extends Service {
  @tracked incrementAmount = 1;

  get incrementAmount() {
    return this.incrementAmount;
  }

  increase(amount) {
    this.incrementAmount = this.incrementAmount + amount;
  }
}
