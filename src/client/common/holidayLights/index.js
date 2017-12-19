const React = require('react');
const h = require('react-hyperscript');
const classNames = require('classnames');

class HolidayLights extends React.Component {
  render() {
    const numberOfRotationOptions = 5;
    const numberOfLightOptions = 5;
    const numberOfConnectorOptions = 4;

    const startingLight = Math.ceil(Math.random() * numberOfRotationOptions);

    const numberOfLights = 10;

    let lights = [];
    for (let i = 1; i <= numberOfLights; i++) {
      lights.push(h('div',
        { className: classNames(
          'common-lights',
          `common-lights-rotation-${Math.ceil(Math.random() * numberOfRotationOptions)}`
        )},
        [h('img', { src: `img/svgs/light${((startingLight+i-1)%numberOfLightOptions)+1}.svg` })]
      ));
      if (i < numberOfLights) lights.push(h('div.common-lights-connector',
        [h('img', { src: `img/svgs/connector${Math.ceil(Math.random() * numberOfConnectorOptions)}.svg` })]
      ));
    }

    return h('div.common-lights-container', lights.concat(
      h('button', { onClick: () => this.forceUpdate() }, 'Reset lights')
    ));
  }
}

module.exports = HolidayLights;