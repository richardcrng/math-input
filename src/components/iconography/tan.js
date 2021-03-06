'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * An autogenerated component that renders the TAN iconograpy in SVG.
 *
 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
 */
var React = require('react');
var PropTypes = require('prop-types');

var Tan = function (_React$Component) {
    _inherits(Tan, _React$Component);

    function Tan() {
        _classCallCheck(this, Tan);

        return _possibleConstructorReturn(this, (Tan.__proto__ || Object.getPrototypeOf(Tan)).apply(this, arguments));
    }

    _createClass(Tan, [{
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
                    React.createElement('path', { d: 'M16.93 29.168c.742 0 1.218-.196 1.484-.434l-.378-1.344c-.098.098-.35.196-.616.196-.392 0-.616-.322-.616-.742v-3.052h1.372v-1.554h-1.372V20.39h-1.792v1.848h-1.12v1.554h1.12v3.528c0 1.204.672 1.848 1.918 1.848zM25.232 29v-4.368c0-1.946-1.414-2.562-2.954-2.562-1.064 0-2.128.336-2.954 1.064l.672 1.19c.574-.532 1.246-.798 1.974-.798.896 0 1.484.448 1.484 1.134v.91c-.448-.532-1.246-.826-2.142-.826-1.078 0-2.352.602-2.352 2.184 0 1.512 1.274 2.24 2.352 2.24.882 0 1.68-.322 2.142-.868v.7h1.778zm-3.206-1.036c-.7 0-1.274-.364-1.274-.994 0-.658.574-1.022 1.274-1.022.574 0 1.134.196 1.428.588v.84c-.294.392-.854.588-1.428.588zM33.338 29v-4.774c0-1.316-.714-2.156-2.198-2.156-1.106 0-1.932.532-2.366 1.05v-.882h-1.778V29h1.778v-4.55c.294-.406.84-.798 1.54-.798.756 0 1.246.322 1.246 1.26V29h1.778z', fill: this.props.color })
                )
            );
        }
    }]);

    return Tan;
}(React.Component);

Tan.propTypes = {
    color: PropTypes.string.isRequired
};


module.exports = Tan;