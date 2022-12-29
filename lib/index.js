import './css/jibs-icons.css';

if (!window[Symbol.for('@jibs')])
  throw new TypeError('Expected "window[Symbol.for(\'@jibs\')]" to be jibs library.');

const { Component, load } = window[Symbol.for('@jibs')];

await load('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200', { type: 'css' });

export class Icon extends Component {
  static props = {
    filled:       true,
    weight:       500,
    grade:        0,
    opticalSize:  48,
  };

  render(children) {
    return $('SPAN', {
      class: this.classes('jibs-icon', this.props.class),
      style: {
        fontVariationSettings: `'FILL' ${(this.props.filled) ? 1 : 0}, 'wght' ${this.props.weight}, 'GRAD' ${this.props.grade}, 'opsz' 48`,
      },
    })(children);
  }
}
