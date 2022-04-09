import { Component, Input } from '@angular/core';

@Component({
  selector: 'section-header',
  template: `
    <div class="section-header">
      <span class="number-text">{{ number }}</span>
      <span class="text">{{ text }}</span>
    </div>
  `,
  styles: [
    `
      .section-header {
        font-family: 'Barlow Condensed';
        font-style: normal;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 2.7px;
        color: #ffffff;
        text-align: center;
        margin-bottom: 2rem;
      }

      .number-text {
        font-weight: 700;
        mix-blend-mode: normal;
        opacity: 0.25;
        padding: 0.5rem;
      }

      .text {
        font-family: 'Barlow Condensed';
        font-style: normal;
        font-weight: 400;
        text-transform: uppercase;
      }

      @media (min-width: 768px) {
        .section-header {
          text-align: unset;
          margin-left: 6rem;
          font-size: 20px;
          line-height: 24px;
          letter-spacing: 3.375px;
          margin-top: 1.5rem;
        }
      }

      @media (min-width: 1440px) {
        .section-header {
          margin-left: 9rem;
          font-size: 28px;
          line-height: 34px;
          letter-spacing: 4.725px;
          margin-top: 2.5rem;
          margin-bottom: 2.5rem;
        }
      }
    `,
  ],
})
export class SectionHeaderComponent {
  @Input() number: string = '';
  @Input() text: string = '';
}
