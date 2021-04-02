import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class CounterComponent extends Component {
  @tracked count = 0;
  @service increment;

  @action counting() {
    this.count = this.count + this.increment.incrementAmount;
  }
}
