/**
 * An autogenerated component that renders the PERCENT iconograpy in SVG.
 *
 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
 */
const React = require('react');

const Percent = React.createClass({
    propTypes: {
        primaryColor: React.PropTypes.string,
        secondaryColor: React.PropTypes.string,
    },

    getDefaultProps() {
        return {
            primaryColor: '#3B3E40',
            secondaryColor: '#BABEC2',
        };
    },

    render() {
        return <svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="math_keypad_icon_percent">
                    <rect id="bounds" fillOpacity="0" fill="#FF0088" x="0" y="0" width="48" height="48"></rect>
                    <g id="percent" transform="translate(12.000000, 12.000000)">
                        <rect id="bounds" fillOpacity="0" fill="#FF0088" x="0" y="0" width="24" height="24"></rect>
                        <path d="M17.1679497,2.4452998 L5.16794971,20.4452998 C4.86159725,20.9048285 4.98577112,21.5256978 5.4452998,21.8320503 C5.90482849,22.1384028 6.52569784,22.0142289 6.83205029,21.5547002 L18.8320503,3.5547002 C19.1384028,3.09517151 19.0142289,2.47430216 18.5547002,2.16794971 C18.0951715,1.86159725 17.4743022,1.98577112 17.1679497,2.4452998 L17.1679497,2.4452998 Z" id="line" fill={this.props.primaryColor}></path>
                        <path d="M7,11 C9.209139,11 11,9.209139 11,7 C11,4.790861 9.209139,3 7,3 C4.790861,3 3,4.790861 3,7 C3,9.209139 4.790861,11 7,11 L7,11 Z M7,9 C5.8954305,9 5,8.1045695 5,7 C5,5.8954305 5.8954305,5 7,5 C8.1045695,5 9,5.8954305 9,7 C9,8.1045695 8.1045695,9 7,9 L7,9 Z" id="circle" fill={this.props.primaryColor}></path>
                        <path d="M17,21 C19.209139,21 21,19.209139 21,17 C21,14.790861 19.209139,13 17,13 C14.790861,13 13,14.790861 13,17 C13,19.209139 14.790861,21 17,21 L17,21 Z M17,19 C15.8954305,19 15,18.1045695 15,17 C15,15.8954305 15.8954305,15 17,15 C18.1045695,15 19,15.8954305 19,17 C19,18.1045695 18.1045695,19 17,19 L17,19 Z" id="circle" fill={this.props.primaryColor}></path>
                    </g>
                </g>
            </g>
        </svg>;
    },
});

module.exports = Percent;
