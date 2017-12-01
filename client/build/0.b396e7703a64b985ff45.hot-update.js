webpackHotUpdate(0,{

/***/ 894:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactKonva = __webpack_require__(910);

var _reactDimensions = __webpack_require__(917);

var _reactDimensions2 = _interopRequireDefault(_reactDimensions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = (0, _reactDimensions2.default)()(function (_Component) {
    _inherits(MyRect, _Component);

    function MyRect(props) {
        _classCallCheck(this, MyRect);

        var _this = _possibleConstructorReturn(this, (MyRect.__proto__ || Object.getPrototypeOf(MyRect)).call(this, props));

        _this.state = {
            color: 'green'
        };
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    _createClass(MyRect, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({ color: 'green' });
        }
    }, {
        key: 'handleClick',
        value: function handleClick() {
            this.setState({
                color: window.Konva.Util.getRandomColor()
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactKonva.Stage,
                { width: this.props.containerWidth, height: this.props.containerHeight },
                _react2.default.createElement(
                    _reactKonva.Layer,
                    null,
                    _react2.default.createElement(_reactKonva.Rect, {
                        x: 10,
                        y: 10,
                        width: 500,
                        height: 500,
                        fill: this.state.color,
                        shadowBlur: 5,
                        onClick: this.handleClick
                    })
                )
            );
        }
    }]);

    return MyRect;
}(_react.Component));

/***/ }),

/***/ 917:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(1);
var onElementResize = __webpack_require__(918);

var defaultContainerStyle = {
  width: '100%',
  height: '100%',
  padding: 0,
  border: 0
};

function defaultGetWidth(element) {
  return element.clientWidth;
}

function defaultGetHeight(element) {
  return element.clientHeight;
}

/**
 * Wraps a react component and adds properties `containerHeight` and
 * `containerWidth`. Useful for responsive design. Properties update on
 * window resize. **Note** that the parent element must have either a
 * height or a width, or nothing will be rendered
 *
 * Can be used as a
 * [higher-order component](http://babeljs.io/blog/2015/06/07/react-on-es6-plus/#property-initializers)
 * or as an [ES7 class decorator](https://github.com/wycats/javascript-decorators)
 * (see examples)
 *
 * @param {object} [options]
 * @param {function} [options.getHeight] A function that is passed an element and returns element
 * height, where element is the wrapper div. Defaults to `(element) => element.clientHeight`
 * @param {function} [options.getWidth]  A function that is passed an element and returns element
 * width, where element is the wrapper div. Defaults to `(element) => element.clientWidth`
 * @param {object} [options.containerStyle] A style object for the `<div>` that will wrap your component.
 * The dimensions of this `div` are what are passed as props to your component. The default style is
 * `{ width: '100%', height: '100%', padding: 0, border: 0 }` which will cause the `div` to fill its
 * parent in most cases. If you are using a flexbox layout you will want to change this default style.
 * @param {string} [options.className] Control the class name set on the wrapper `<div>`
 * @param {boolean} [options.elementResize=false] Set true to watch the wrapper `div` for changes in
 * size which are not a result of window resizing - e.g. changes to the flexbox and other layout.
 * @return {function}                   A higher-order component that can be
 * used to enhance a react component `Dimensions()(MyComponent)`
 *
 * @example
 * // ES2015
 * import React from 'react'
 * import Dimensions from 'react-dimensions'
 *
 * class MyComponent extends React.Component {
 *   render() (
 *     <div
 *       containerWidth={this.props.containerWidth}
 *       containerHeight={this.props.containerHeight}
 *     >
 *     </div>
 *   )
 * }
 *
 * export default Dimensions()(MyComponent) // Enhanced component
 *
 * @example
 * // ES5
 * var React = require('react')
 * var Dimensions = require('react-dimensions')
 *
 * var MyComponent = React.createClass({
 *   render: function() {(
 *     <div
 *       containerWidth={this.props.containerWidth}
 *       containerHeight={this.props.containerHeight}
 *     >
 *     </div>
 *   )}
 * }
 *
 * module.exports = Dimensions()(MyComponent) // Enhanced component
 *
 */
module.exports = function Dimensions() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$getHeight = _ref.getHeight,
      getHeight = _ref$getHeight === undefined ? defaultGetHeight : _ref$getHeight,
      _ref$getWidth = _ref.getWidth,
      getWidth = _ref$getWidth === undefined ? defaultGetWidth : _ref$getWidth,
      _ref$containerStyle = _ref.containerStyle,
      containerStyle = _ref$containerStyle === undefined ? defaultContainerStyle : _ref$containerStyle,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? null : _ref$className,
      _ref$elementResize = _ref.elementResize,
      elementResize = _ref$elementResize === undefined ? false : _ref$elementResize;

  return function (ComposedComponent) {
    return function (_React$Component) {
      _inherits(DimensionsHOC, _React$Component);

      function DimensionsHOC() {
        var _ref2;

        var _temp, _this, _ret;

        _classCallCheck(this, DimensionsHOC);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = DimensionsHOC.__proto__ || Object.getPrototypeOf(DimensionsHOC)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {}, _this.updateDimensions = function () {
          var container = _this.refs.container;
          var containerWidth = getWidth(container);
          var containerHeight = getHeight(container);

          if (containerWidth !== _this.state.containerWidth || containerHeight !== _this.state.containerHeight) {
            _this.setState({ containerWidth: containerWidth, containerHeight: containerHeight });
          }
        }, _this.onResize = function () {
          if (_this.rqf) return;
          _this.rqf = _this.getWindow().requestAnimationFrame(function () {
            _this.rqf = null;
            _this.updateDimensions();
          });
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }
      // ES7 Class properties
      // http://babeljs.io/blog/2015/06/07/react-on-es6-plus/#property-initializers


      // Using arrow functions and ES7 Class properties to autobind
      // http://babeljs.io/blog/2015/06/07/react-on-es6-plus/#arrow-functions


      _createClass(DimensionsHOC, [{
        key: 'getWindow',


        // If the component is mounted in a different window to the javascript
        // context, as with https://github.com/JakeGinnivan/react-popout
        // then the `window` global will be different from the `window` that
        // contains the component.
        // Depends on `defaultView` which is not supported <IE9
        value: function getWindow() {
          return this.refs.container ? this.refs.container.ownerDocument.defaultView || window : window;
        }
      }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
          if (!this.refs.container) {
            throw new Error('Cannot find container div');
          }
          this.updateDimensions();
          if (elementResize) {
            // Experimental: `element-resize-event` fires when an element resizes.
            // It attaches its own window resize listener and also uses
            // requestAnimationFrame, so we can just call `this.updateDimensions`.
            onElementResize(this.refs.container, this.updateDimensions);
          } else {
            this.getWindow().addEventListener('resize', this.onResize, false);
          }
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          this.getWindow().removeEventListener('resize', this.onResize);
        }

        /**
         * Returns the underlying wrapped component instance.
         * Useful if you need to access a method or property of the component
         * passed to react-dimensions.
         *
         * @return {object} The rendered React component
         **/

      }, {
        key: 'getWrappedInstance',
        value: function getWrappedInstance() {
          this.refs.wrappedInstance;
        }
      }, {
        key: 'render',
        value: function render() {
          var _state = this.state,
              containerWidth = _state.containerWidth,
              containerHeight = _state.containerHeight;

          if (!containerWidth && !containerHeight) {
            console.warn('Wrapper div has no height or width, try overriding style with `containerStyle` option');
          }
          return React.createElement(
            'div',
            { className: className, style: containerStyle, ref: 'container' },
            (containerWidth || containerHeight) && React.createElement(ComposedComponent, _extends({}, this.state, this.props, {
              updateDimensions: this.updateDimensions,
              ref: 'wrappedInstance'
            }))
          );
        }
      }]);

      return DimensionsHOC;
    }(React.Component);
  };
};


/***/ }),

/***/ 918:
/***/ (function(module, exports) {

var requestFrame = (function () {
  var window = this
  var raf = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    function fallbackRAF(func) {
      return window.setTimeout(func, 20)
    }
  return function requestFrameFunction(func) {
    return raf(func)
  }
})()

var cancelFrame = (function () {
  var window = this
  var cancel = window.cancelAnimationFrame ||
    window.mozCancelAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    window.clearTimeout
  return function cancelFrameFunction(id) {
    return cancel(id)
  }
})()

function resizeListener(e) {
  var win = e.target || e.srcElement
  if (win.__resizeRAF__) {
    cancelFrame(win.__resizeRAF__)
  }
  win.__resizeRAF__ = requestFrame(function () {
    var trigger = win.__resizeTrigger__
    trigger.__resizeListeners__.forEach(function (fn) {
      fn.call(trigger, e)
    })
  })
}

var exports = function exports(element, fn) {
  var window = this
  var document = window.document
  var isIE

  var attachEvent = document.attachEvent
  if (typeof navigator !== 'undefined') {
    isIE = navigator.userAgent.match(/Trident/) ||
      navigator.userAgent.match(/Edge/)
  }

  function objectLoad() {
    this.contentDocument.defaultView.__resizeTrigger__ = this.__resizeElement__
    this.contentDocument.defaultView.addEventListener('resize', resizeListener)
  }

  if (!element.__resizeListeners__) {
    element.__resizeListeners__ = []
    if (attachEvent) {
      element.__resizeTrigger__ = element
      element.attachEvent('onresize', resizeListener)
    } else {
      if (getComputedStyle(element).position === 'static') {
        element.style.position = 'relative'
      }
      var obj = (element.__resizeTrigger__ = document.createElement('object'))
      obj.setAttribute(
        'style',
        'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1; opacity: 0;'
      )
      obj.setAttribute('class', 'resize-sensor')
      obj.__resizeElement__ = element
      obj.onload = objectLoad
      obj.type = 'text/html'
      if (isIE) {
        element.appendChild(obj)
      }
      obj.data = 'about:blank'
      if (!isIE) {
        element.appendChild(obj)
      }
    }
  }
  element.__resizeListeners__.push(fn)
}

module.exports = typeof window === 'undefined' ? exports : exports.bind(window)

module.exports.unbind = function (element, fn) {
  var attachEvent = document.attachEvent
  if (fn) {
    element.__resizeListeners__.splice(
      element.__resizeListeners__.indexOf(fn),
      1
    )
  } else {
    element.__resizeListeners__ = []
  }
  if (!element.__resizeListeners__.length) {
    if (attachEvent) {
      element.detachEvent('onresize', resizeListener)
    } else {
      element.__resizeTrigger__.contentDocument.defaultView.removeEventListener(
        'resize',
        resizeListener
      )
      delete element.__resizeTrigger__.contentDocument.defaultView.__resizeTrigger__
      element.__resizeTrigger__ = !element.removeChild(
        element.__resizeTrigger__
      )
    }
    delete element.__resizeListeners__
  }
}


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRpbWVuc2lvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VsZW1lbnQtcmVzaXplLWV2ZW50L2luZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwic3RhdGUiLCJjb2xvciIsImhhbmRsZUNsaWNrIiwiYmluZCIsInNldFN0YXRlIiwid2luZG93IiwiS29udmEiLCJVdGlsIiwiZ2V0UmFuZG9tQ29sb3IiLCJjb250YWluZXJXaWR0aCIsImNvbnRhaW5lckhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7a0JBRWU7QUFBQTs7QUFFWCxvQkFBWUEsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9IQUNUQSxLQURTOztBQUVmLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyxtQkFBTztBQURFLFNBQWI7QUFHQSxjQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLE9BQW5CO0FBTGU7QUFNbEI7O0FBUlU7QUFBQTtBQUFBLDRDQVVTO0FBQ2hCLGlCQUFLQyxRQUFMLENBQWMsRUFBRUgsT0FBTyxPQUFULEVBQWQ7QUFDSDtBQVpVO0FBQUE7QUFBQSxzQ0FjRztBQUNWLGlCQUFLRyxRQUFMLENBQWM7QUFDVkgsdUJBQU9JLE9BQU9DLEtBQVAsQ0FBYUMsSUFBYixDQUFrQkMsY0FBbEI7QUFERyxhQUFkO0FBR0g7QUFsQlU7QUFBQTtBQUFBLGlDQW9CRjtBQUNMLG1CQUNJO0FBQUE7QUFBQSxrQkFBTyxPQUFPLEtBQUtULEtBQUwsQ0FBV1UsY0FBekIsRUFBeUMsUUFBUSxLQUFLVixLQUFMLENBQVdXLGVBQTVEO0FBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFDSSwyQkFBRyxFQURQO0FBRUksMkJBQUcsRUFGUDtBQUdJLCtCQUFPLEdBSFg7QUFJ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Q0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0JBQW9CLFFBQVEsU0FBUyxjQUFjLGFBQWEsa0JBQWtCLHNCQUFzQixhQUFhLFlBQVk7QUFDeko7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMC5iMzk2ZTc3MDNhNjRiOTg1ZmY0NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExheWVyLCBSZWN0LCBTdGFnZSwgR3JvdXAgfSBmcm9tICdyZWFjdC1rb252YSdcbmltcG9ydCBEaW1lbnNpb25zIGZyb20gJ3JlYWN0LWRpbWVuc2lvbnMnXG5cbmV4cG9ydCBkZWZhdWx0IERpbWVuc2lvbnMoKShjbGFzcyBNeVJlY3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjb2xvcjogJ2dyZWVuJ1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbG9yOiAnZ3JlZW4nIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY29sb3I6IHdpbmRvdy5Lb252YS5VdGlsLmdldFJhbmRvbUNvbG9yKClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U3RhZ2Ugd2lkdGg9e3RoaXMucHJvcHMuY29udGFpbmVyV2lkdGh9IGhlaWdodD17dGhpcy5wcm9wcy5jb250YWluZXJIZWlnaHR9PlxuICAgICAgICAgICAgICAgIDxMYXllcj5cbiAgICAgICAgICAgICAgICAgICAgPFJlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIHg9ezEwfVxuICAgICAgICAgICAgICAgICAgICAgICAgeT17MTB9XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MDB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPXt0aGlzLnN0YXRlLmNvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhZG93Qmx1cj17NX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9MYXllcj5cbiAgICAgICAgICAgIDwvU3RhZ2U+XG4gICAgICAgIClcbiAgICB9XG59KVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2NhbnZhcy5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIG9uRWxlbWVudFJlc2l6ZSA9IHJlcXVpcmUoJ2VsZW1lbnQtcmVzaXplLWV2ZW50Jyk7XG5cbnZhciBkZWZhdWx0Q29udGFpbmVyU3R5bGUgPSB7XG4gIHdpZHRoOiAnMTAwJScsXG4gIGhlaWdodDogJzEwMCUnLFxuICBwYWRkaW5nOiAwLFxuICBib3JkZXI6IDBcbn07XG5cbmZ1bmN0aW9uIGRlZmF1bHRHZXRXaWR0aChlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50LmNsaWVudFdpZHRoO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0R2V0SGVpZ2h0KGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xufVxuXG4vKipcbiAqIFdyYXBzIGEgcmVhY3QgY29tcG9uZW50IGFuZCBhZGRzIHByb3BlcnRpZXMgYGNvbnRhaW5lckhlaWdodGAgYW5kXG4gKiBgY29udGFpbmVyV2lkdGhgLiBVc2VmdWwgZm9yIHJlc3BvbnNpdmUgZGVzaWduLiBQcm9wZXJ0aWVzIHVwZGF0ZSBvblxuICogd2luZG93IHJlc2l6ZS4gKipOb3RlKiogdGhhdCB0aGUgcGFyZW50IGVsZW1lbnQgbXVzdCBoYXZlIGVpdGhlciBhXG4gKiBoZWlnaHQgb3IgYSB3aWR0aCwgb3Igbm90aGluZyB3aWxsIGJlIHJlbmRlcmVkXG4gKlxuICogQ2FuIGJlIHVzZWQgYXMgYVxuICogW2hpZ2hlci1vcmRlciBjb21wb25lbnRdKGh0dHA6Ly9iYWJlbGpzLmlvL2Jsb2cvMjAxNS8wNi8wNy9yZWFjdC1vbi1lczYtcGx1cy8jcHJvcGVydHktaW5pdGlhbGl6ZXJzKVxuICogb3IgYXMgYW4gW0VTNyBjbGFzcyBkZWNvcmF0b3JdKGh0dHBzOi8vZ2l0aHViLmNvbS93eWNhdHMvamF2YXNjcmlwdC1kZWNvcmF0b3JzKVxuICogKHNlZSBleGFtcGxlcylcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5nZXRIZWlnaHRdIEEgZnVuY3Rpb24gdGhhdCBpcyBwYXNzZWQgYW4gZWxlbWVudCBhbmQgcmV0dXJucyBlbGVtZW50XG4gKiBoZWlnaHQsIHdoZXJlIGVsZW1lbnQgaXMgdGhlIHdyYXBwZXIgZGl2LiBEZWZhdWx0cyB0byBgKGVsZW1lbnQpID0+IGVsZW1lbnQuY2xpZW50SGVpZ2h0YFxuICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMuZ2V0V2lkdGhdICBBIGZ1bmN0aW9uIHRoYXQgaXMgcGFzc2VkIGFuIGVsZW1lbnQgYW5kIHJldHVybnMgZWxlbWVudFxuICogd2lkdGgsIHdoZXJlIGVsZW1lbnQgaXMgdGhlIHdyYXBwZXIgZGl2LiBEZWZhdWx0cyB0byBgKGVsZW1lbnQpID0+IGVsZW1lbnQuY2xpZW50V2lkdGhgXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnMuY29udGFpbmVyU3R5bGVdIEEgc3R5bGUgb2JqZWN0IGZvciB0aGUgYDxkaXY+YCB0aGF0IHdpbGwgd3JhcCB5b3VyIGNvbXBvbmVudC5cbiAqIFRoZSBkaW1lbnNpb25zIG9mIHRoaXMgYGRpdmAgYXJlIHdoYXQgYXJlIHBhc3NlZCBhcyBwcm9wcyB0byB5b3VyIGNvbXBvbmVudC4gVGhlIGRlZmF1bHQgc3R5bGUgaXNcbiAqIGB7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnLCBwYWRkaW5nOiAwLCBib3JkZXI6IDAgfWAgd2hpY2ggd2lsbCBjYXVzZSB0aGUgYGRpdmAgdG8gZmlsbCBpdHNcbiAqIHBhcmVudCBpbiBtb3N0IGNhc2VzLiBJZiB5b3UgYXJlIHVzaW5nIGEgZmxleGJveCBsYXlvdXQgeW91IHdpbGwgd2FudCB0byBjaGFuZ2UgdGhpcyBkZWZhdWx0IHN0eWxlLlxuICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmNsYXNzTmFtZV0gQ29udHJvbCB0aGUgY2xhc3MgbmFtZSBzZXQgb24gdGhlIHdyYXBwZXIgYDxkaXY+YFxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5lbGVtZW50UmVzaXplPWZhbHNlXSBTZXQgdHJ1ZSB0byB3YXRjaCB0aGUgd3JhcHBlciBgZGl2YCBmb3IgY2hhbmdlcyBpblxuICogc2l6ZSB3aGljaCBhcmUgbm90IGEgcmVzdWx0IG9mIHdpbmRvdyByZXNpemluZyAtIGUuZy4gY2hhbmdlcyB0byB0aGUgZmxleGJveCBhbmQgb3RoZXIgbGF5b3V0LlxuICogQHJldHVybiB7ZnVuY3Rpb259ICAgICAgICAgICAgICAgICAgIEEgaGlnaGVyLW9yZGVyIGNvbXBvbmVudCB0aGF0IGNhbiBiZVxuICogdXNlZCB0byBlbmhhbmNlIGEgcmVhY3QgY29tcG9uZW50IGBEaW1lbnNpb25zKCkoTXlDb21wb25lbnQpYFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBFUzIwMTVcbiAqIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbiAqIGltcG9ydCBEaW1lbnNpb25zIGZyb20gJ3JlYWN0LWRpbWVuc2lvbnMnXG4gKlxuICogY2xhc3MgTXlDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICogICByZW5kZXIoKSAoXG4gKiAgICAgPGRpdlxuICogICAgICAgY29udGFpbmVyV2lkdGg9e3RoaXMucHJvcHMuY29udGFpbmVyV2lkdGh9XG4gKiAgICAgICBjb250YWluZXJIZWlnaHQ9e3RoaXMucHJvcHMuY29udGFpbmVySGVpZ2h0fVxuICogICAgID5cbiAqICAgICA8L2Rpdj5cbiAqICAgKVxuICogfVxuICpcbiAqIGV4cG9ydCBkZWZhdWx0IERpbWVuc2lvbnMoKShNeUNvbXBvbmVudCkgLy8gRW5oYW5jZWQgY29tcG9uZW50XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEVTNVxuICogdmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKVxuICogdmFyIERpbWVuc2lvbnMgPSByZXF1aXJlKCdyZWFjdC1kaW1lbnNpb25zJylcbiAqXG4gKiB2YXIgTXlDb21wb25lbnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gKiAgIHJlbmRlcjogZnVuY3Rpb24oKSB7KFxuICogICAgIDxkaXZcbiAqICAgICAgIGNvbnRhaW5lcldpZHRoPXt0aGlzLnByb3BzLmNvbnRhaW5lcldpZHRofVxuICogICAgICAgY29udGFpbmVySGVpZ2h0PXt0aGlzLnByb3BzLmNvbnRhaW5lckhlaWdodH1cbiAqICAgICA+XG4gKiAgICAgPC9kaXY+XG4gKiAgICl9XG4gKiB9XG4gKlxuICogbW9kdWxlLmV4cG9ydHMgPSBEaW1lbnNpb25zKCkoTXlDb21wb25lbnQpIC8vIEVuaGFuY2VkIGNvbXBvbmVudFxuICpcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBEaW1lbnNpb25zKCkge1xuICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge30sXG4gICAgICBfcmVmJGdldEhlaWdodCA9IF9yZWYuZ2V0SGVpZ2h0LFxuICAgICAgZ2V0SGVpZ2h0ID0gX3JlZiRnZXRIZWlnaHQgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRHZXRIZWlnaHQgOiBfcmVmJGdldEhlaWdodCxcbiAgICAgIF9yZWYkZ2V0V2lkdGggPSBfcmVmLmdldFdpZHRoLFxuICAgICAgZ2V0V2lkdGggPSBfcmVmJGdldFdpZHRoID09PSB1bmRlZmluZWQgPyBkZWZhdWx0R2V0V2lkdGggOiBfcmVmJGdldFdpZHRoLFxuICAgICAgX3JlZiRjb250YWluZXJTdHlsZSA9IF9yZWYuY29udGFpbmVyU3R5bGUsXG4gICAgICBjb250YWluZXJTdHlsZSA9IF9yZWYkY29udGFpbmVyU3R5bGUgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRDb250YWluZXJTdHlsZSA6IF9yZWYkY29udGFpbmVyU3R5bGUsXG4gICAgICBfcmVmJGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgY2xhc3NOYW1lID0gX3JlZiRjbGFzc05hbWUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBfcmVmJGNsYXNzTmFtZSxcbiAgICAgIF9yZWYkZWxlbWVudFJlc2l6ZSA9IF9yZWYuZWxlbWVudFJlc2l6ZSxcbiAgICAgIGVsZW1lbnRSZXNpemUgPSBfcmVmJGVsZW1lbnRSZXNpemUgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3JlZiRlbGVtZW50UmVzaXplO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29tcG9zZWRDb21wb25lbnQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICAgIF9pbmhlcml0cyhEaW1lbnNpb25zSE9DLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgICAgZnVuY3Rpb24gRGltZW5zaW9uc0hPQygpIHtcbiAgICAgICAgdmFyIF9yZWYyO1xuXG4gICAgICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERpbWVuc2lvbnNIT0MpO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYyID0gRGltZW5zaW9uc0hPQy5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKERpbWVuc2lvbnNIT0MpKS5jYWxsLmFwcGx5KF9yZWYyLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7fSwgX3RoaXMudXBkYXRlRGltZW5zaW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgY29udGFpbmVyID0gX3RoaXMucmVmcy5jb250YWluZXI7XG4gICAgICAgICAgdmFyIGNvbnRhaW5lcldpZHRoID0gZ2V0V2lkdGgoY29udGFpbmVyKTtcbiAgICAgICAgICB2YXIgY29udGFpbmVySGVpZ2h0ID0gZ2V0SGVpZ2h0KGNvbnRhaW5lcik7XG5cbiAgICAgICAgICBpZiAoY29udGFpbmVyV2lkdGggIT09IF90aGlzLnN0YXRlLmNvbnRhaW5lcldpZHRoIHx8IGNvbnRhaW5lckhlaWdodCAhPT0gX3RoaXMuc3RhdGUuY29udGFpbmVySGVpZ2h0KSB7XG4gICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGNvbnRhaW5lcldpZHRoOiBjb250YWluZXJXaWR0aCwgY29udGFpbmVySGVpZ2h0OiBjb250YWluZXJIZWlnaHQgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfdGhpcy5vblJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoX3RoaXMucnFmKSByZXR1cm47XG4gICAgICAgICAgX3RoaXMucnFmID0gX3RoaXMuZ2V0V2luZG93KCkucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnJxZiA9IG51bGw7XG4gICAgICAgICAgICBfdGhpcy51cGRhdGVEaW1lbnNpb25zKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICAgICAgfVxuICAgICAgLy8gRVM3IENsYXNzIHByb3BlcnRpZXNcbiAgICAgIC8vIGh0dHA6Ly9iYWJlbGpzLmlvL2Jsb2cvMjAxNS8wNi8wNy9yZWFjdC1vbi1lczYtcGx1cy8jcHJvcGVydHktaW5pdGlhbGl6ZXJzXG5cblxuICAgICAgLy8gVXNpbmcgYXJyb3cgZnVuY3Rpb25zIGFuZCBFUzcgQ2xhc3MgcHJvcGVydGllcyB0byBhdXRvYmluZFxuICAgICAgLy8gaHR0cDovL2JhYmVsanMuaW8vYmxvZy8yMDE1LzA2LzA3L3JlYWN0LW9uLWVzNi1wbHVzLyNhcnJvdy1mdW5jdGlvbnNcblxuXG4gICAgICBfY3JlYXRlQ2xhc3MoRGltZW5zaW9uc0hPQywgW3tcbiAgICAgICAga2V5OiAnZ2V0V2luZG93JyxcblxuXG4gICAgICAgIC8vIElmIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZCBpbiBhIGRpZmZlcmVudCB3aW5kb3cgdG8gdGhlIGphdmFzY3JpcHRcbiAgICAgICAgLy8gY29udGV4dCwgYXMgd2l0aCBodHRwczovL2dpdGh1Yi5jb20vSmFrZUdpbm5pdmFuL3JlYWN0LXBvcG91dFxuICAgICAgICAvLyB0aGVuIHRoZSBgd2luZG93YCBnbG9iYWwgd2lsbCBiZSBkaWZmZXJlbnQgZnJvbSB0aGUgYHdpbmRvd2AgdGhhdFxuICAgICAgICAvLyBjb250YWlucyB0aGUgY29tcG9uZW50LlxuICAgICAgICAvLyBEZXBlbmRzIG9uIGBkZWZhdWx0Vmlld2Agd2hpY2ggaXMgbm90IHN1cHBvcnRlZCA8SUU5XG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRXaW5kb3coKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVmcy5jb250YWluZXIgPyB0aGlzLnJlZnMuY29udGFpbmVyLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgfHwgd2luZG93IDogd2luZG93O1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgIGlmICghdGhpcy5yZWZzLmNvbnRhaW5lcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmluZCBjb250YWluZXIgZGl2Jyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMudXBkYXRlRGltZW5zaW9ucygpO1xuICAgICAgICAgIGlmIChlbGVtZW50UmVzaXplKSB7XG4gICAgICAgICAgICAvLyBFeHBlcmltZW50YWw6IGBlbGVtZW50LXJlc2l6ZS1ldmVudGAgZmlyZXMgd2hlbiBhbiBlbGVtZW50IHJlc2l6ZXMuXG4gICAgICAgICAgICAvLyBJdCBhdHRhY2hlcyBpdHMgb3duIHdpbmRvdyByZXNpemUgbGlzdGVuZXIgYW5kIGFsc28gdXNlc1xuICAgICAgICAgICAgLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lLCBzbyB3ZSBjYW4ganVzdCBjYWxsIGB0aGlzLnVwZGF0ZURpbWVuc2lvbnNgLlxuICAgICAgICAgICAgb25FbGVtZW50UmVzaXplKHRoaXMucmVmcy5jb250YWluZXIsIHRoaXMudXBkYXRlRGltZW5zaW9ucyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0V2luZG93KCkuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZSwgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgICB0aGlzLmdldFdpbmRvdygpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIHVuZGVybHlpbmcgd3JhcHBlZCBjb21wb25lbnQgaW5zdGFuY2UuXG4gICAgICAgICAqIFVzZWZ1bCBpZiB5b3UgbmVlZCB0byBhY2Nlc3MgYSBtZXRob2Qgb3IgcHJvcGVydHkgb2YgdGhlIGNvbXBvbmVudFxuICAgICAgICAgKiBwYXNzZWQgdG8gcmVhY3QtZGltZW5zaW9ucy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7b2JqZWN0fSBUaGUgcmVuZGVyZWQgUmVhY3QgY29tcG9uZW50XG4gICAgICAgICAqKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRXcmFwcGVkSW5zdGFuY2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0V3JhcHBlZEluc3RhbmNlKCkge1xuICAgICAgICAgIHRoaXMucmVmcy53cmFwcGVkSW5zdGFuY2U7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICB2YXIgX3N0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICAgICAgY29udGFpbmVyV2lkdGggPSBfc3RhdGUuY29udGFpbmVyV2lkdGgsXG4gICAgICAgICAgICAgIGNvbnRhaW5lckhlaWdodCA9IF9zdGF0ZS5jb250YWluZXJIZWlnaHQ7XG5cbiAgICAgICAgICBpZiAoIWNvbnRhaW5lcldpZHRoICYmICFjb250YWluZXJIZWlnaHQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignV3JhcHBlciBkaXYgaGFzIG5vIGhlaWdodCBvciB3aWR0aCwgdHJ5IG92ZXJyaWRpbmcgc3R5bGUgd2l0aCBgY29udGFpbmVyU3R5bGVgIG9wdGlvbicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSwgc3R5bGU6IGNvbnRhaW5lclN0eWxlLCByZWY6ICdjb250YWluZXInIH0sXG4gICAgICAgICAgICAoY29udGFpbmVyV2lkdGggfHwgY29udGFpbmVySGVpZ2h0KSAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgdGhpcy5zdGF0ZSwgdGhpcy5wcm9wcywge1xuICAgICAgICAgICAgICB1cGRhdGVEaW1lbnNpb25zOiB0aGlzLnVwZGF0ZURpbWVuc2lvbnMsXG4gICAgICAgICAgICAgIHJlZjogJ3dyYXBwZWRJbnN0YW5jZSdcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIERpbWVuc2lvbnNIT0M7XG4gICAgfShSZWFjdC5Db21wb25lbnQpO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRpbWVuc2lvbnMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDkxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcmVxdWVzdEZyYW1lID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHdpbmRvdyA9IHRoaXNcbiAgdmFyIHJhZiA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIGZ1bmN0aW9uIGZhbGxiYWNrUkFGKGZ1bmMpIHtcbiAgICAgIHJldHVybiB3aW5kb3cuc2V0VGltZW91dChmdW5jLCAyMClcbiAgICB9XG4gIHJldHVybiBmdW5jdGlvbiByZXF1ZXN0RnJhbWVGdW5jdGlvbihmdW5jKSB7XG4gICAgcmV0dXJuIHJhZihmdW5jKVxuICB9XG59KSgpXG5cbnZhciBjYW5jZWxGcmFtZSA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciB3aW5kb3cgPSB0aGlzXG4gIHZhciBjYW5jZWwgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcbiAgICB3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcbiAgICB3aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcbiAgICB3aW5kb3cuY2xlYXJUaW1lb3V0XG4gIHJldHVybiBmdW5jdGlvbiBjYW5jZWxGcmFtZUZ1bmN0aW9uKGlkKSB7XG4gICAgcmV0dXJuIGNhbmNlbChpZClcbiAgfVxufSkoKVxuXG5mdW5jdGlvbiByZXNpemVMaXN0ZW5lcihlKSB7XG4gIHZhciB3aW4gPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnRcbiAgaWYgKHdpbi5fX3Jlc2l6ZVJBRl9fKSB7XG4gICAgY2FuY2VsRnJhbWUod2luLl9fcmVzaXplUkFGX18pXG4gIH1cbiAgd2luLl9fcmVzaXplUkFGX18gPSByZXF1ZXN0RnJhbWUoZnVuY3Rpb24gKCkge1xuICAgIHZhciB0cmlnZ2VyID0gd2luLl9fcmVzaXplVHJpZ2dlcl9fXG4gICAgdHJpZ2dlci5fX3Jlc2l6ZUxpc3RlbmVyc19fLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gICAgICBmbi5jYWxsKHRyaWdnZXIsIGUpXG4gICAgfSlcbiAgfSlcbn1cblxudmFyIGV4cG9ydHMgPSBmdW5jdGlvbiBleHBvcnRzKGVsZW1lbnQsIGZuKSB7XG4gIHZhciB3aW5kb3cgPSB0aGlzXG4gIHZhciBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudFxuICB2YXIgaXNJRVxuXG4gIHZhciBhdHRhY2hFdmVudCA9IGRvY3VtZW50LmF0dGFjaEV2ZW50XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlzSUUgPSBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9UcmlkZW50LykgfHxcbiAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0VkZ2UvKVxuICB9XG5cbiAgZnVuY3Rpb24gb2JqZWN0TG9hZCgpIHtcbiAgICB0aGlzLmNvbnRlbnREb2N1bWVudC5kZWZhdWx0Vmlldy5fX3Jlc2l6ZVRyaWdnZXJfXyA9IHRoaXMuX19yZXNpemVFbGVtZW50X19cbiAgICB0aGlzLmNvbnRlbnREb2N1bWVudC5kZWZhdWx0Vmlldy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVMaXN0ZW5lcilcbiAgfVxuXG4gIGlmICghZWxlbWVudC5fX3Jlc2l6ZUxpc3RlbmVyc19fKSB7XG4gICAgZWxlbWVudC5fX3Jlc2l6ZUxpc3RlbmVyc19fID0gW11cbiAgICBpZiAoYXR0YWNoRXZlbnQpIHtcbiAgICAgIGVsZW1lbnQuX19yZXNpemVUcmlnZ2VyX18gPSBlbGVtZW50XG4gICAgICBlbGVtZW50LmF0dGFjaEV2ZW50KCdvbnJlc2l6ZScsIHJlc2l6ZUxpc3RlbmVyKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSdcbiAgICAgIH1cbiAgICAgIHZhciBvYmogPSAoZWxlbWVudC5fX3Jlc2l6ZVRyaWdnZXJfXyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29iamVjdCcpKVxuICAgICAgb2JqLnNldEF0dHJpYnV0ZShcbiAgICAgICAgJ3N0eWxlJyxcbiAgICAgICAgJ2Rpc3BsYXk6IGJsb2NrOyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgbGVmdDogMDsgaGVpZ2h0OiAxMDAlOyB3aWR0aDogMTAwJTsgb3ZlcmZsb3c6IGhpZGRlbjsgcG9pbnRlci1ldmVudHM6IG5vbmU7IHotaW5kZXg6IC0xOyBvcGFjaXR5OiAwOydcbiAgICAgIClcbiAgICAgIG9iai5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Jlc2l6ZS1zZW5zb3InKVxuICAgICAgb2JqLl9fcmVzaXplRWxlbWVudF9fID0gZWxlbWVudFxuICAgICAgb2JqLm9ubG9hZCA9IG9iamVjdExvYWRcbiAgICAgIG9iai50eXBlID0gJ3RleHQvaHRtbCdcbiAgICAgIGlmIChpc0lFKSB7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQob2JqKVxuICAgICAgfVxuICAgICAgb2JqLmRhdGEgPSAnYWJvdXQ6YmxhbmsnXG4gICAgICBpZiAoIWlzSUUpIHtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChvYmopXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVsZW1lbnQuX19yZXNpemVMaXN0ZW5lcnNfXy5wdXNoKGZuKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gZXhwb3J0cyA6IGV4cG9ydHMuYmluZCh3aW5kb3cpXG5cbm1vZHVsZS5leHBvcnRzLnVuYmluZCA9IGZ1bmN0aW9uIChlbGVtZW50LCBmbikge1xuICB2YXIgYXR0YWNoRXZlbnQgPSBkb2N1bWVudC5hdHRhY2hFdmVudFxuICBpZiAoZm4pIHtcbiAgICBlbGVtZW50Ll9fcmVzaXplTGlzdGVuZXJzX18uc3BsaWNlKFxuICAgICAgZWxlbWVudC5fX3Jlc2l6ZUxpc3RlbmVyc19fLmluZGV4T2YoZm4pLFxuICAgICAgMVxuICAgIClcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50Ll9fcmVzaXplTGlzdGVuZXJzX18gPSBbXVxuICB9XG4gIGlmICghZWxlbWVudC5fX3Jlc2l6ZUxpc3RlbmVyc19fLmxlbmd0aCkge1xuICAgIGlmIChhdHRhY2hFdmVudCkge1xuICAgICAgZWxlbWVudC5kZXRhY2hFdmVudCgnb25yZXNpemUnLCByZXNpemVMaXN0ZW5lcilcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5fX3Jlc2l6ZVRyaWdnZXJfXy5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXcucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ3Jlc2l6ZScsXG4gICAgICAgIHJlc2l6ZUxpc3RlbmVyXG4gICAgICApXG4gICAgICBkZWxldGUgZWxlbWVudC5fX3Jlc2l6ZVRyaWdnZXJfXy5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXcuX19yZXNpemVUcmlnZ2VyX19cbiAgICAgIGVsZW1lbnQuX19yZXNpemVUcmlnZ2VyX18gPSAhZWxlbWVudC5yZW1vdmVDaGlsZChcbiAgICAgICAgZWxlbWVudC5fX3Jlc2l6ZVRyaWdnZXJfX1xuICAgICAgKVxuICAgIH1cbiAgICBkZWxldGUgZWxlbWVudC5fX3Jlc2l6ZUxpc3RlbmVyc19fXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2VsZW1lbnQtcmVzaXplLWV2ZW50L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA5MThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==