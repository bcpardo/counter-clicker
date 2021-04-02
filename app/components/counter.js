import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class CounterComponent extends Component {
  @service increment;
  @service count;

  @action counting() {
    this.count.increaseCount(this.increment.incrementAmount);
  }
}
