import { Style } from 'geostyler-style';

const lineSimpleLine: Style = {
  name: 'Simple Line',
  rules: [{
    name: '',
    symbolizers: [{
      kind: 'Line',
      color: '#000000',
      width: 3,
      dasharray: [13, 37],
      cap: 'round',
      join: 'miter',
      perpendicularOffset: 3
    }]
  }]
};

export default lineSimpleLine;
