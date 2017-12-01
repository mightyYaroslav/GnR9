webpackHotUpdate(0,{

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(18);

var _navbar = __webpack_require__(73);

var _navbar2 = _interopRequireDefault(_navbar);

var _SearchExampleStandard = __webpack_require__(891);

var _SearchExampleStandard2 = _interopRequireDefault(_SearchExampleStandard);

var _Map = __webpack_require__(893);

var _Map2 = _interopRequireDefault(_Map);

var _SidebarRightOverlay = __webpack_require__(895);

var _SidebarRightOverlay2 = _interopRequireDefault(_SidebarRightOverlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Maps = function (_Component) {
    _inherits(Maps, _Component);

    function Maps(props) {
        _classCallCheck(this, Maps);

        var _this = _possibleConstructorReturn(this, (Maps.__proto__ || Object.getPrototypeOf(Maps)).call(this, props));

        _this.state = { activeItem: 'private' };
        _this.handleItemClick = _this.handleItemClick.bind(_this);
        return _this;
    }

    _createClass(Maps, [{
        key: 'formatDate',
        value: function formatDate(date) {}
    }, {
        key: 'handleItemClick',
        value: function handleItemClick(e, _ref) {
            var name = _ref.name;

            this.setState({ activeItem: name });
        }
    }, {
        key: 'render',
        value: function render() {
            var activeItem = this.state.activeItem;

            var maps = [{
                name: 'Map1'
            }, {
                name: 'Map2'
            }];
            var mapsCount = 6;
            var cols = 4;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_navbar2.default, null),
                _react2.default.createElement(_SidebarRightOverlay2.default, { content: _react2.default.createElement(
                        _semanticUiReact.Grid,
                        null,
                        _react2.default.createElement(
                            _semanticUiReact.Grid.Column,
                            { width: 16 },
                            _react2.default.createElement(_SearchExampleStandard2.default, { stretched: true, source: maps })
                        ),
                        _react2.default.createElement(
                            _semanticUiReact.Grid.Column,
                            { width: 4 },
                            _react2.default.createElement(
                                _semanticUiReact.Menu,
                                { fluid: true, vertical: true },
                                _react2.default.createElement(
                                    _semanticUiReact.Menu.Item,
                                    { name: 'add' },
                                    _react2.default.createElement(
                                        _semanticUiReact.Button,
                                        null,
                                        'Add new'
                                    )
                                ),
                                _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'private', active: activeItem === 'private',
                                    onClick: this.handleItemClick }),
                                _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'shared', active: activeItem === 'shared',
                                    onClick: this.handleItemClick })
                            )
                        ),
                        _react2.default.createElement(
                            _semanticUiReact.Grid.Column,
                            { stretched: true, width: 12 },
                            _react2.default.createElement(
                                _semanticUiReact.Grid,
                                { columns: cols },
                                [].concat(_toConsumableArray(Array(Math.round(mapsCount / cols)).keys())).map(function (row) {
                                    return _react2.default.createElement(
                                        _semanticUiReact.Grid.Row,
                                        null,
                                        [].concat(_toConsumableArray(Array(cols).keys())).map(function (col) {
                                            return _react2.default.createElement(
                                                _semanticUiReact.Grid.Column,
                                                null,
                                                _react2.default.createElement(_Map2.default, { name: 'Map ' + (row * cols + col + 1), desc: 'Description', date: '05.11.17' })
                                            );
                                        })
                                    );
                                })
                            )
                        )
                    ) })
            );
        }
    }]);

    return Maps;
}(_react.Component);

exports.default = Maps;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9NYXBzLmpzIl0sIm5hbWVzIjpbIk1hcHMiLCJwcm9wcyIsInN0YXRlIiwiYWN0aXZlSXRlbSIsImhhbmRsZUl0ZW1DbGljayIsImJpbmQiLCJkYXRlIiwiZSIsIm5hbWUiLCJzZXRTdGF0ZSIsIm1hcHMiLCJtYXBzQ291bnQiLCJjb2xzIiwiQXJyYXkiLCJNYXRoIiwicm91bmQiLCJrZXlzIiwibWFwIiwicm93IiwiY29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7QUFFakIsa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWEsRUFBQ0MsWUFBWSxTQUFiLEVBQWI7QUFDQSxjQUFLQyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJDLElBQXJCLE9BQXZCO0FBSGU7QUFJbEI7Ozs7bUNBRVVDLEksRUFBTSxDQUVoQjs7O3dDQUVlQyxDLFFBQVc7QUFBQSxnQkFBUEMsSUFBTyxRQUFQQSxJQUFPOztBQUN2QixpQkFBS0MsUUFBTCxDQUFjLEVBQUNOLFlBQVlLLElBQWIsRUFBZDtBQUNIOzs7aUNBRVE7QUFBQSxnQkFDRUwsVUFERixHQUNnQixLQUFLRCxLQURyQixDQUNFQyxVQURGOztBQUVMLGdCQUFNTyxPQUFPLENBQUM7QUFDVkYsc0JBQU07QUFESSxhQUFELEVBRVY7QUFDQ0Esc0JBQU07QUFEUCxhQUZVLENBQWI7QUFLQSxnQkFBTUcsWUFBWSxDQUFsQjtBQUNBLGdCQUFNQyxPQUFPLENBQWI7O0FBRUEsbUJBQ0k7QUFBQTtBQUFBO0FBQ0kscUVBREo7QUFFSSwrRUFBcUIsU0FDakI7QUFBQTtBQUFBO0FBQ0k7QUFBQSxrREFBTSxNQUFOO0FBQUEsOEJBQWEsT0FBTyxFQUFwQjtBQUNJLDZGQUF1QixlQUF2QixFQUFpQyxRQUFRRixJQUF6QztBQURKLHlCQURKO0FBSUk7QUFBQSxrREFBTSxNQUFOO0FBQUEsOEJBQWEsT0FBTyxDQUFwQjtBQUNJO0FBQUE7QUFBQSxrQ0FBTSxXQUFOLEVBQVksY0FBWjtBQUNJO0FBQUEsMERBQU0sSUFBTjtBQUFBLHNDQUFXLE1BQUssS0FBaEI7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosaUNBREo7QUFNSSxvRkFBTSxJQUFOLElBQVcsTUFBSyxTQUFoQixFQUEwQixRQUFRUCxlQUFlLFNBQWpEO0FBQ1csNkNBQVMsS0FBS0MsZUFEekIsR0FOSjtBQVFJLG9GQUFNLElBQU4sSUFBVyxNQUFLLFFBQWhCLEVBQXlCLFFBQVFELGVBQWUsUUFBaEQ7QUFDVyw2Q0FBUyxLQUFLQyxlQUR6QjtBQVJKO0FBREoseUJBSko7QUFrQkk7QUFBQSxrREFBTSxNQUFOO0FBQUEsOEJBQWEsZUFBYixFQUF1QixPQUFPLEVBQTlCO0FBQ0k7QUFBQTtBQUFBLGtDQUFNLFNBQVNRLElBQWY7QUFDSyw2REFBSUMsTUFBTUMsS0FBS0MsS0FBTCxDQUFXSixZQUFZQyxJQUF2QixDQUFOLEVBQW9DSSxJQUFwQyxFQUFKLEdBQWdEQyxHQUFoRCxDQUFvRDtBQUFBLDJDQUNqRDtBQUFBLDhEQUFNLEdBQU47QUFBQTtBQUNLLHFFQUFJSixNQUFNRCxJQUFOLEVBQVlJLElBQVosRUFBSixHQUF3QkMsR0FBeEIsQ0FBNEI7QUFBQSxtREFDekI7QUFBQSxzRUFBTSxNQUFOO0FBQUE7QUFDSSwrRkFBSyxnQkFBYUMsTUFBTU4sSUFBTixHQUFhTyxHQUFiLEdBQW1CLENBQWhDLENBQUwsRUFBMEMsTUFBSyxhQUEvQyxFQUE2RCxNQUFLLFVBQWxFO0FBREosNkNBRHlCO0FBQUEseUNBQTVCO0FBREwscUNBRGlEO0FBQUEsaUNBQXBEO0FBREw7QUFESjtBQWxCSixxQkFESjtBQUZKLGFBREo7QUF1Q0g7Ozs7OztrQkFqRWdCbkIsSSIsImZpbGUiOiIwLmNiYzE5OTJlY2FjMGFkYTU3ZTExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtHcmlkLCBNZW51LCBJbWFnZSwgSWNvbiwgQ2FyZCwgQnV0dG9ufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZiYXInXG5pbXBvcnQgU2VhcmNoRXhhbXBsZVN0YW5kYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoRXhhbXBsZVN0YW5kYXJkJ1xuaW1wb3J0IE1hcCBmcm9tICcuLi9jb21wb25lbnRzL01hcCdcbmltcG9ydCBTaWRlYmFyUmlnaHRPdmVybGF5IGZyb20gJy4uL2NvbXBvbmVudHMvU2lkZWJhclJpZ2h0T3ZlcmxheSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwcyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHthY3RpdmVJdGVtOiAncHJpdmF0ZSd9XG4gICAgICAgIHRoaXMuaGFuZGxlSXRlbUNsaWNrID0gdGhpcy5oYW5kbGVJdGVtQ2xpY2suYmluZCh0aGlzKVxuICAgIH1cblxuICAgIGZvcm1hdERhdGUoZGF0ZSkge1xuICAgICAgICBcbiAgICB9XG5cbiAgICBoYW5kbGVJdGVtQ2xpY2soZSwge25hbWV9KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZUl0ZW06IG5hbWV9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2FjdGl2ZUl0ZW19ID0gdGhpcy5zdGF0ZVxuICAgICAgICBjb25zdCBtYXBzID0gW3tcbiAgICAgICAgICAgIG5hbWU6ICdNYXAxJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnTWFwMidcbiAgICAgICAgfV1cbiAgICAgICAgY29uc3QgbWFwc0NvdW50ID0gNlxuICAgICAgICBjb25zdCBjb2xzID0gNFxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxOYXZCYXIvPlxuICAgICAgICAgICAgICAgIDxTaWRlYmFyUmlnaHRPdmVybGF5IGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MTZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hFeGFtcGxlU3RhbmRhcmQgc3RyZXRjaGVkIHNvdXJjZT17bWFwc30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUgZmx1aWQgdmVydGljYWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT0nYWRkJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIG5ld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9J3ByaXZhdGUnIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ3ByaXZhdGUnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT0nc2hhcmVkJyBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdzaGFyZWQnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHN0cmV0Y2hlZCB3aWR0aD17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbHVtbnM9e2NvbHN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Wy4uLkFycmF5KE1hdGgucm91bmQobWFwc0NvdW50IC8gY29scykpLmtleXMoKV0ubWFwKHJvdyA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1suLi5BcnJheShjb2xzKS5rZXlzKCldLm1hcChjb2wgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWFwIG5hbWU9e2BNYXAgJHtyb3cgKiBjb2xzICsgY29sICsgMX1gfSBkZXNjPSdEZXNjcmlwdGlvbicgZGF0ZT0nMDUuMTEuMTcnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICB9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udGFpbmVycy9NYXBzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==