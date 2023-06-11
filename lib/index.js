import './css/jibs-icons.css';

const globalThis = ((typeof window !== 'undefined' && window) ? window : global) || this;

if (!globalThis[Symbol.for('@jibs')])
  throw new TypeError('Expected "this[Symbol.for(\'@jibs\')]" to be jibs library.');

const { Component, load } = globalThis[Symbol.for('@jibs')];

await load('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200', { type: 'css' });

class Icon extends Component {
  static VERSION = 1.1;

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
        fontVariationSettings: `'FILL' ${(this.props.filled) ? 1 : 0}, 'wght' ${this.props.weight}, 'GRAD' ${this.props.grade}, 'opsz' ${this.props.opticalSize}`,
      },
    })(children);
  }
}

if (!globalThis[Symbol.for('@jibs-icons')] || globalThis[Symbol.for('@jibs-icons')].VERSION < Icon.VERSION)
  globalThis[Symbol.for('@jibs-icons')] = Icon;

export default Icon;
