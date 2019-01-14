'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var _require = require("aphrodite"),
    StyleSheet = _require.StyleSheet;

var _require2 = require('../fake-react-native-web'),
    View = _require2.View;

var _require3 = require('../index'),
    components = _require3.components,
    consts = _require3.consts;

var Keypad = components.Keypad,
    KeypadInput = components.KeypadInput;

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, App);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            keypadElement: null,
            value: "",
            keypadType: consts.KeypadTypes.EXPRESSION
        }, _this.handleChange = function (e) {
            _this.state.keypadElement.configure({
                keypadType: e.target.value,
                extraKeys: ["x", "y", "PI", "THETA"]
            });
            _this.setState({ keypadType: e.target.value });
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
                    View,
                    { style: styles.container },
                    React.createElement(KeypadInput, {
                        value: this.state.value,
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
                    }),
                    React.createElement(
                        View,
                        { style: styles.selectContainer },
                        'Keypad type:',
                        React.createElement(
                            'select',
                            {
                                onChange: this.handleChange,
                                value: this.state.keypadType
                            },
                            React.createElement(
                                'option',
                                { value: consts.KeypadTypes.FRACTION },
                                'FRACTION'
                            ),
                            React.createElement(
                                'option',
                                { value: consts.KeypadTypes.EXPRESSION },
                                'EXPRESSION'
                            )
                        )
                    )
                ),
                React.createElement(Keypad, {
                    onElementMounted: function onElementMounted(node) {
                        if (node && !_this2.state.keypadElement) {
                            _this2.setState({ keypadElement: node });
                        }
                    }
                })
            );
        }
    }]);

    return App;
}(React.Component);

var styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 40
    },
    selectContainer: {
        marginTop: 16,
        flexDirection: "row"
    }
});

module.exports = App;