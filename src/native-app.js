'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactDOM = require('react-dom');

var _require = require('./fake-react-native-web'),
    View = _require.View;

var _require2 = require('./index'),
    components = _require2.components;

var Keypad = components.Keypad,
    KeypadInput = components.KeypadInput;

var KeyConfigs = require('./data/key-configs.js');

var ManualInput = function ManualInput(_ref) {
    var handler = _ref.handler;

    return React.createElement(
        'div',
        null,
        Object.keys(KeyConfigs).map(function (k) {
            return React.createElement(
                'button',
                { style: { display: "block" }, disabled: !handler, onClick: function onClick() {
                        return handler(k);
                    } },
                k,
                ' : ',
                KeyConfigs[k].ariaLabel
            );
        })
    );
};

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        var _ref2;

        var _temp, _this, _ret;

        _classCallCheck(this, App);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
            active: false,
            handler: null,
            keypadElement: {
                activate: function activate() {
                    return _this.setState({ active: true });
                },
                dismiss: function dismiss() {
                    return _this.setState({ active: false });
                },
                configure: function configure(config) {
                    return console.log("configure:", config);
                },
                setCursor: function setCursor(cursor) {
                    return console.log("Cursor:", cursor);
                },
                setKeyHandler: function setKeyHandler(handler) {
                    return _this.setState({ handler: handler });
                },
                getDOMNode: function getDOMNode() {
                    return null;
                }
            },
            value: ""
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                View,
                null,
                React.createElement(
                    'div',
                    {
                        style: {
                            marginTop: 10,
                            marginLeft: 20,
                            marginRight: 20,
                            marginBottom: 40
                        }
                    },
                    React.createElement(KeypadInput, {
                        value: this.state.value,
                        ref: function ref(inp) {
                            return _this2.inp = inp;
                        },
                        keypadElement: this.state.keypadElement,
                        onChange: function onChange(value, cb) {
                            return _this2.setState({ value: value }, cb);
                        },
                        onFocus: function onFocus() {
                            return _this2.state.keypadElement.activate();
                        },
                        onBlur: function onBlur() {
                            return _this2.state.keypadElement.dismiss();
                        }
                    })
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'button',
                        { style: { display: 'block' }, onClick: function onClick() {
                                return _this2.inp.focus();
                            } },
                        'Focus'
                    )
                ),
                React.createElement(
                    'div',
                    { style: { padding: 20 } },
                    'Handler assigned: ',
                    "" + !!this.state.handler,
                    React.createElement('br', null),
                    'Active: ',
                    "" + this.state.active
                ),
                React.createElement('br', null),
                React.createElement('br', null),
                React.createElement(ManualInput, { handler: this.state.handler })
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));