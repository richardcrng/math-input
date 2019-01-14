'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * An autogenerated component that renders the EXP iconograpy in SVG.
 *
 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
 */
var React = require('react');
var PropTypes = require('prop-types');

var Exp = function (_React$Component) {
    _inherits(Exp, _React$Component);

    function Exp() {
        _classCallCheck(this, Exp);

        return _possibleConstructorReturn(this, (Exp.__proto__ || Object.getPrototypeOf(Exp)).apply(this, arguments));
    }

    _createClass(Exp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'svg',
                { width: '48', height: '48', viewBox: '0 0 48 48' },
                React.createElement(
                    'g',
                    { fill: 'none', fillRule: 'evenodd' },
                    React.createElement('path', { fill: 'none', d: 'M0 0h48v48H0z' }),
                    React.createElement('path', { d: 'M28 16.997c0-.55.453-.997.997-.997h6.006c.55 0 .997.453.997.997v6.006c0 .55-.453.997-.997.997h-6.006c-.55 0-.997-.453-.997-.997v-6.006zM30 18h4v4h-4v-4zM14 21c0-.552.456-1 1.002-1h9.996A1 1 0 0 1 26 21v14c0 .552-.456 1-1.002 1h-9.996A1 1 0 0 1 14 35V21zm2 1h8v12h-8V22z', fill: this.props.color })
                )
            );
        }
    }]);

    return Exp;
}(React.Component);

Exp.propTypes = {
    color: PropTypes.string.isRequired
};


module.exports = Exp;