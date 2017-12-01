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

        _this.state = { activeItem: 'private', mapsCount: 6 };
        _this.handleItemClick = _this.handleItemClick.bind(_this);
        return _this;
    }

    _createClass(Maps, [{
        key: 'addMap',
        value: function addMap() {
            this.setState({ mapsCount: this.state.mapsCount + 1 });
        }
    }, {
        key: 'deleteMap',
        value: function deleteMap(i) {
            this.setState({ mapsCount: this.state.mapsCount - 1 });
        }
    }, {
        key: 'handleItemClick',
        value: function handleItemClick(e, _ref) {
            var name = _ref.name;

            this.setState({ activeItem: name });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var activeItem = this.state.activeItem;

            var cols = {
                'computer': 4,
                'tablet': 2,
                'mobile': 1
            };

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
                                        { onClick: this.addMap },
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
                                null,
                                Object.keys(cols).map(function (colsName) {
                                    return [].concat(_toConsumableArray(Array(Math.round(_this2.state.mapsCount / cols[colsName])).keys())).map(function (row) {
                                        return _react2.default.createElement(
                                            _semanticUiReact.Grid.Row,
                                            { columns: cols[colsName], only: colsName },
                                            [].concat(_toConsumableArray(Array(cols[colsName]).keys())).map(function (col) {
                                                return _react2.default.createElement(
                                                    _semanticUiReact.Grid.Column,
                                                    null,
                                                    _react2.default.createElement(_Map2.default, { name: 'Map ' + (row * cols[colsName] + col + 1), desc: 'Description',
                                                        date: '05.11.17', onDeleteClicked: function onDeleteClicked() {
                                                            return _this2.deleteMap(row * cols[colsName]);
                                                        } })
                                                );
                                            })
                                        );
                                    });
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

/***/ }),

/***/ 893:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(21);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = __webpack_require__(18);

var _logo = __webpack_require__(159);

var _logo2 = _interopRequireDefault(_logo);

var _ConfirmExampleConfirm = __webpack_require__(894);

var _ConfirmExampleConfirm2 = _interopRequireDefault(_ConfirmExampleConfirm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Map = function (_Component) {
    _inherits(Map, _Component);

    function Map() {
        _classCallCheck(this, Map);

        return _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).apply(this, arguments));
    }

    _createClass(Map, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _semanticUiReact.Card,
                null,
                _react2.default.createElement(_semanticUiReact.Image, { src: _logo2.default }),
                _react2.default.createElement(
                    _semanticUiReact.Card.Content,
                    null,
                    _react2.default.createElement(
                        _semanticUiReact.Card.Header,
                        null,
                        this.props.name
                    ),
                    _react2.default.createElement(
                        _semanticUiReact.Card.Meta,
                        null,
                        _react2.default.createElement(
                            'span',
                            { className: 'date' },
                            _react2.default.createElement(_semanticUiReact.Icon, { name: 'time' }),
                            this.props.date
                        )
                    ),
                    _react2.default.createElement(
                        _semanticUiReact.Card.Description,
                        null,
                        this.props.desc
                    )
                ),
                _react2.default.createElement(
                    _semanticUiReact.Card.Content,
                    { extra: true },
                    _react2.default.createElement(
                        'div',
                        { className: 'ui two buttons' },
                        _react2.default.createElement(
                            _semanticUiReact.Button,
                            { onClick: this.props.onDeleteClicked },
                            _react2.default.createElement(_semanticUiReact.Icon, { name: 'info letter' })
                        ),
                        _react2.default.createElement(_ConfirmExampleConfirm2.default, { content: _react2.default.createElement(_semanticUiReact.Icon, { name: 'trash' }) })
                    )
                )
            );
        }
    }]);

    return Map;
}(_react.Component);

Map.PropTypes = {
    name: _propTypes2.default.string,
    date: _propTypes2.default.string,
    desc: _propTypes2.default.string
};

exports.default = Map;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9NYXBzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01hcC5qcyJdLCJuYW1lcyI6WyJNYXBzIiwicHJvcHMiLCJzdGF0ZSIsImFjdGl2ZUl0ZW0iLCJtYXBzQ291bnQiLCJoYW5kbGVJdGVtQ2xpY2siLCJiaW5kIiwic2V0U3RhdGUiLCJpIiwiZSIsIm5hbWUiLCJjb2xzIiwibWFwcyIsImFkZE1hcCIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJBcnJheSIsIk1hdGgiLCJyb3VuZCIsImNvbHNOYW1lIiwicm93IiwiY29sIiwiZGVsZXRlTWFwIiwiTWFwIiwiZGF0ZSIsImRlc2MiLCJvbkRlbGV0ZUNsaWNrZWQiLCJQcm9wVHlwZXMiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEk7OztBQUVqQixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdIQUNUQSxLQURTOztBQUVmLGNBQUtDLEtBQUwsR0FBYSxFQUFDQyxZQUFZLFNBQWIsRUFBd0JDLFdBQVcsQ0FBbkMsRUFBYjtBQUNBLGNBQUtDLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQkMsSUFBckIsT0FBdkI7QUFIZTtBQUlsQjs7OztpQ0FFUTtBQUNMLGlCQUFLQyxRQUFMLENBQWMsRUFBRUgsV0FBVyxLQUFLRixLQUFMLENBQVdFLFNBQVgsR0FBdUIsQ0FBcEMsRUFBZDtBQUNIOzs7a0NBRVNJLEMsRUFBRztBQUNULGlCQUFLRCxRQUFMLENBQWMsRUFBRUgsV0FBVyxLQUFLRixLQUFMLENBQVdFLFNBQVgsR0FBdUIsQ0FBcEMsRUFBZDtBQUNIOzs7d0NBRWVLLEMsUUFBVztBQUFBLGdCQUFQQyxJQUFPLFFBQVBBLElBQU87O0FBQ3ZCLGlCQUFLSCxRQUFMLENBQWMsRUFBQ0osWUFBWU8sSUFBYixF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Qkk7QUFBQSwwQ0FBTSxPQUFOO0FBQUEsc0JBQWMsV0FBZDtBQUNJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLGdCQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFRLFNBQVMsS0FBS3pCLEtBQUwsQ0FBVzBCLGVBQTVCO0FBQTZDLG1GQUFNLE1BQUssYUFBWDtBQUE3Qyx5QkFESjtBQUVJLHlGQUFnQixTQUFTLHVEQUFNLE1BQUssT0FBWCxHQUF6QjtBQUZKO0FBREo7QUFoQkosYUFESjtBQXlCSDs7Ozs7O0FBR0xILElBQUlJLFNBQUosR0FBZ0I7QUFDWmxCLFVBQU0sb0JBQVVtQixNQURKO0FBRVpKLFVBQU0sb0JBQVVJLE1BRko7QUFHWkgsVUFBTSxvQkFBVUc7QUFISixDQUFoQjs7a0JBTWVMLEciLCJmaWxlIjoiMC42MmM4ZGU0MDlhNmEwYzVjMzdjMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7R3JpZCwgTWVudSwgSW1hZ2UsIEljb24sIENhcmQsIEJ1dHRvbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyJ1xuaW1wb3J0IFNlYXJjaEV4YW1wbGVTdGFuZGFyZCBmcm9tICcuLi9jb21wb25lbnRzL1NlYXJjaEV4YW1wbGVTdGFuZGFyZCdcbmltcG9ydCBNYXAgZnJvbSAnLi4vY29tcG9uZW50cy9NYXAnXG5pbXBvcnQgU2lkZWJhclJpZ2h0T3ZlcmxheSBmcm9tICcuLi9jb21wb25lbnRzL1NpZGViYXJSaWdodE92ZXJsYXknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7YWN0aXZlSXRlbTogJ3ByaXZhdGUnLCBtYXBzQ291bnQ6IDZ9XG4gICAgICAgIHRoaXMuaGFuZGxlSXRlbUNsaWNrID0gdGhpcy5oYW5kbGVJdGVtQ2xpY2suYmluZCh0aGlzKVxuICAgIH1cblxuICAgIGFkZE1hcCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1hcHNDb3VudDogdGhpcy5zdGF0ZS5tYXBzQ291bnQgKyAxfSlcbiAgICB9XG5cbiAgICBkZWxldGVNYXAoaSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWFwc0NvdW50OiB0aGlzLnN0YXRlLm1hcHNDb3VudCAtIDF9KVxuICAgIH1cblxuICAgIGhhbmRsZUl0ZW1DbGljayhlLCB7bmFtZX0pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlSXRlbTogbmFtZX0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7YWN0aXZlSXRlbX0gPSB0aGlzLnN0YXRlXG4gICAgICAgIGNvbnN0IGNvbHMgPSB7XG4gICAgICAgICAgICAnY29tcHV0ZXInOiA0LFxuICAgICAgICAgICAgJ3RhYmxldCc6IDIsXG4gICAgICAgICAgICAnbW9iaWxlJzogMVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPE5hdkJhci8+XG4gICAgICAgICAgICAgICAgPFNpZGViYXJSaWdodE92ZXJsYXkgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxNn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEV4YW1wbGVTdGFuZGFyZCBzdHJldGNoZWQgc291cmNlPXttYXBzfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudSBmbHVpZCB2ZXJ0aWNhbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPSdhZGQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFkZE1hcH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIG5ld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9J3ByaXZhdGUnIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ3ByaXZhdGUnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT0nc2hhcmVkJyBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdzaGFyZWQnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHN0cmV0Y2hlZCB3aWR0aD17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMoY29scykubWFwKGNvbHNOYW1lID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbLi4uQXJyYXkoTWF0aC5yb3VuZCh0aGlzLnN0YXRlLm1hcHNDb3VudCAvIGNvbHNbY29sc05hbWVdKSkua2V5cygpXS5tYXAocm93ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Sb3cgY29sdW1ucz17Y29sc1tjb2xzTmFtZV19IG9ubHk9e2NvbHNOYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1suLi5BcnJheShjb2xzW2NvbHNOYW1lXSkua2V5cygpXS5tYXAoY29sID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWFwIG5hbWU9e2BNYXAgJHtyb3cgKiBjb2xzW2NvbHNOYW1lXSArIGNvbCArIDF9YH0gZGVzYz0nRGVzY3JpcHRpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlPScwNS4xMS4xNycgb25EZWxldGVDbGlja2VkPXsoKSA9PiB0aGlzLmRlbGV0ZU1hcChyb3cgKiBjb2xzW2NvbHNOYW1lXSl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICB9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udGFpbmVycy9NYXBzLmpzIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7Q2FyZCwgSW1hZ2UsIEljb24sIEJ1dHRvbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgTG9nbyBmcm9tICcuLi9yZXMvaW1hZ2VzL2xvZ28ucG5nJ1xuaW1wb3J0IENvbmZpcm1FeGFtcGxlIGZyb20gJy4vQ29uZmlybUV4YW1wbGVDb25maXJtJ1xuXG5jbGFzcyBNYXAgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e0xvZ299Lz5cbiAgICAgICAgICAgICAgICA8Q2FyZC5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5NZXRhPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkYXRlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPSd0aW1lJy8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkLk1ldGE+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGVzY31cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxuICAgICAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQgZXh0cmE+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd1aSB0d28gYnV0dG9ucyc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMub25EZWxldGVDbGlja2VkfT48SWNvbiBuYW1lPSdpbmZvIGxldHRlcicvPjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbmZpcm1FeGFtcGxlIGNvbnRlbnQ9ezxJY29uIG5hbWU9J3RyYXNoJy8+fS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICApXG4gICAgfVxufVxuXG5NYXAuUHJvcFR5cGVzID0ge1xuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkZXNjOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hcFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL01hcC5qcyJdLCJzb3VyY2VSb290IjoiIn0=