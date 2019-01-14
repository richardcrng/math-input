'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A component that renders a single SVG icon.
 */

var React = require('react');
var PropTypes = require('prop-types');

var Iconography = require('./iconography');

var SvgIcon = function (_React$Component) {
    _inherits(SvgIcon, _React$Component);

    function SvgIcon() {
        _classCallCheck(this, SvgIcon);

        return _possibleConstructorReturn(this, (SvgIcon.__proto__ || Object.getPrototypeOf(SvgIcon)).apply(this, arguments));
    }

    _createClass(SvgIcon, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                color = _props.color,
                name = _props.name;


            var SvgForName = Iconography[name];
            return React.createElement(SvgForName, { color: color });
        }
    }]);

    return SvgIcon;
}(React.Component);

SvgIcon.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};


module.exports = SvgIcon;