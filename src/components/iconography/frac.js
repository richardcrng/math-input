'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * An autogenerated component that renders the FRAC iconograpy in SVG.
 *
 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
 */
var React = require('react');
var PropTypes = require('prop-types');

var FracInclusive = function (_React$Component) {
    _inherits(FracInclusive, _React$Component);

    function FracInclusive() {
        _classCallCheck(this, FracInclusive);

        return _possibleConstructorReturn(this, (FracInclusive.__proto__ || Object.getPrototypeOf(FracInclusive)).apply(this, arguments));
    }

    _createClass(FracInclusive, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'svg',
                { width: '48', height: '48', viewBox: '0 0 48 48' },
                React.createElement(
                    'g',
                    { fill: 'none', fillRule: 'evenodd' },
                    React.createElement('path', { fill: 'none', d: 'M0 0h48v48H0z' }),
                    React.createElement(
                        'g',
                        { transform: 'translate(12 12)' },
                        React.createElement('path', { fill: 'none', d: 'M0 0h24v24H0z' }),
                        React.createElement('path', { d: 'M8 16.997c0-.55.453-.997.997-.997h6.006c.55 0 .997.453.997.997v6.006c0 .55-.453.997-.997.997H8.997c-.55 0-.997-.453-.997-.997v-6.006zM10 18h4v4h-4v-4z', fill: this.props.color }),
                        React.createElement('rect', { fill: this.props.color, x: '2', y: '11', width: '20', height: '2', rx: '1' }),
                        React.createElement('path', { d: 'M8 .997C8 .447 8.453 0 8.997 0h6.006c.55 0 .997.453.997.997v6.006c0 .55-.453.997-.997.997H8.997C8.447 8 8 7.547 8 7.003V.997zM10 2h4v4h-4V2z', fill: this.props.color })
                    )
                )
            );
        }
    }]);

    return FracInclusive;
}(React.Component);

FracInclusive.propTypes = {
    color: PropTypes.string.isRequired
};


module.exports = FracInclusive;