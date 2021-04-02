import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class CountService extends Service {
  @tracked count = 0;

  increaseCount(num) {
    this.count = this.count + num;
  }

  get getCount() {
    return this.count;
  }
}
