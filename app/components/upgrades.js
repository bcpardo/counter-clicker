import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class UpgradesComponent extends Component {
  @service increment;

  @action incrementIncrementAmount() {
    this.increment.increase(1);
  }
}
