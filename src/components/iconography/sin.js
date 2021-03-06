'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * An autogenerated component that renders the SIN iconograpy in SVG.
 *
 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
 */
var React = require('react');
var PropTypes = require('prop-types');

var Sin = function (_React$Component) {
    _inherits(Sin, _React$Component);

    function Sin() {
        _classCallCheck(this, Sin);

        return _possibleConstructorReturn(this, (Sin.__proto__ || Object.getPrototypeOf(Sin)).apply(this, arguments));
    }

    _createClass(Sin, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'svg',
                { width: '48', height: '48', viewBox: '0 0 48 48' },
                React.createElement(
                    'g',
                    { fill: 'none', fillRule: 'evenodd' },
                    React.createElement('path', { fill: 'none', d: 'M0 0h48v48H0z' }),
                    React.createElement('path', { fill: 'none', d: 'M12 12h24v24H12z' }),
                    React.createElement('path', { d: 'M18.655 29.168c1.876 0 2.926-.938 2.926-2.17 0-2.73-4.004-1.89-4.004-2.898 0-.378.42-.672 1.064-.672.826 0 1.596.35 2.002.784l.714-1.218c-.672-.532-1.582-.924-2.73-.924-1.778 0-2.772.994-2.772 2.128 0 2.66 4.018 1.75 4.018 2.87 0 .42-.364.728-1.134.728-.84 0-1.848-.462-2.338-.924l-.77 1.246c.714.658 1.848 1.05 3.024 1.05zm5.124-7.658c.588 0 1.064-.476 1.064-1.064 0-.588-.476-1.05-1.064-1.05a1.06 1.06 0 0 0-1.064 1.05c0 .588.49 1.064 1.064 1.064zm.896 7.49v-6.762h-1.778V29h1.778zm8.106 0v-4.774c0-1.316-.714-2.156-2.198-2.156-1.106 0-1.932.532-2.366 1.05v-.882h-1.778V29h1.778v-4.55c.294-.406.84-.798 1.54-.798.756 0 1.246.322 1.246 1.26V29h1.778z', fill: this.props.color })
                )
            );
        }
    }]);

    return Sin;
}(React.Component);

Sin.propTypes = {
    color: PropTypes.string.isRequired
};


module.exports = Sin;