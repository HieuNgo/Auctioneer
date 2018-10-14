import { Component } from '@angular/core';

import { BuyPage } from '../buy/buy';
import { StreamPage } from '../stream/stream';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = BuyPage;
  tab2Root = StreamPage;

  constructor() {

  }
}
