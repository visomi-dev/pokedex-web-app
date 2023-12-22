import { Component, signal } from '@angular/core';

import { IconComponent } from '../../icon/icon.component';

@Component({
  selector: 'app-radio-modal',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './radio-modal.component.html',
  styleUrl: './radio-modal.component.css',
})
export class RadioModalComponent {
  readonly open = signal(false);

  onClick() {
    this.open.update((oldValue) => !oldValue);
  }

  onClickCard(event: MouseEvent) {
    event.stopPropagation();
  }
}
