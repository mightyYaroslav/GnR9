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
        _this.addMap = _this.addMap.bind(_this);
        _this.deleteMap = _this.deleteMap.bind(_this);
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9NYXBzLmpzIl0sIm5hbWVzIjpbIk1hcHMiLCJwcm9wcyIsInN0YXRlIiwiYWN0aXZlSXRlbSIsIm1hcHNDb3VudCIsImhhbmRsZUl0ZW1DbGljayIsImJpbmQiLCJhZGRNYXAiLCJkZWxldGVNYXAiLCJzZXRTdGF0ZSIsImkiLCJlIiwibmFtZSIsImNvbHMiLCJtYXBzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsIkFycmF5IiwiTWF0aCIsInJvdW5kIiwiY29sc05hbWUiLCJyb3ciLCJjb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEk7OztBQUVqQixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdIQUNUQSxLQURTOztBQUVmLGNBQUtDLEtBQUwsR0FBYSxFQUFDQyxZQUFZLFNBQWIsRUFBd0JDLFdBQVcsQ0FBbkMsRUFBYjtBQUNBLGNBQUtDLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQkMsSUFBckIsT0FBdkI7QUFDQSxjQUFLQyxNQUFMLEdBQWMsTUFBS0EsTUFBTCxDQUFZRCxJQUFaLE9BQWQ7QUFDQSxjQUFLRSxTQUFMLEdBQWlCLE1BQUtBLFNBQUwsQ0FBZUYsSUFBZixPQUFqQjtBQUxlO0FBTWxCOzs7O2lDQUVRO0FBQ0wsaUJBQUtHLFFBQUwsQ0FBYyxFQUFFTCxXQUFXLEtBQUtGLEtBQUwsQ0FBV0UsU0FBWCxHQUF1QixDQUFwQyxFQUFkO0FBQ0g7OztrQ0FFU00sQyxFQUFHO0FBQ1QsaUJBQUtELFFBQUwsQ0FBYyxFQUFFTCxXQUFXLEtBQUtGLEtBQUwsQ0FBV0UsU0FBWCxHQUF1QixDQUFwQyxFQUFkO0FBQ0g7Ozt3Q0FFZU8sQyxRQUFXO0FBQUEsZ0JBQVBDLElBQU8sUUFBUEEsSUFBTzs7QUFDdkIsaUJBQUtILFFBQUwsQ0FBYyxFQUFDTixZQUFZUyxJQUFiLEVBQWQ7QUFDSDs7O2lDQUVRO0FBQUE7O0FBQUEsZ0JBQ0VULFVBREYsR0FDZ0IsS0FBS0QsS0FEckIsQ0FDRUMsVUFERjs7QUFFTCxnQkFBTVUsT0FBTztBQUNULDRCQUFZLENBREg7QUFFVCwwQkFBVSxDQUZEO0FBR1QsMEJBQVU7QUFIRCxhQUFiOztBQU1BLG1CQUNJO0FBQUE7QUFBQTtBQUNJLHFFQURKO0FBRUksK0VBQXFCLFNBQ2pCO0FBQUE7QUFBQTtBQUNJO0FBQUEsa0RBQU0sTUFBTjtBQUFBLDhCQUFhLE9BQU8sRUFBcEI7QUFDSSw2RkFBdUIsZUFBdkIsRUFBaUMsUUFBUUMsSUFBekM7QUFESix5QkFESjtBQUlJO0FBQUEsa0RBQU0sTUFBTjtBQUFBLDhCQUFhLE9BQU8sQ0FBcEI7QUFDSTtBQUFBO0FBQUEsa0NBQU0sV0FBTixFQUFZLGNBQVo7QUFDSTtBQUFBLDBEQUFNLElBQU47QUFBQSxzQ0FBVyxNQUFLLEtBQWhCO0FBQ0k7QUFBQTtBQUFBLDBDQUFRLFNBQVMsS0FBS1AsTUFBdEI7QUFBQTtBQUFBO0FBREosaUNBREo7QUFNSSxvRkFBTSxJQUFOLElBQVcsTUFBSyxTQUFoQixFQUEwQixRQUFRSixlQUFlLFNBQWpEO0FBQ1csNkNBQVMsS0FBS0UsZUFEekIsR0FOSjtBQVFJLG9GQUFNLElBQU4sSUFBVyxNQUFLLFFBQWhCLEVBQXlCLFFBQVFGLGVBQWUsUUFBaEQ7QUFDVyw2Q0FBUyxLQUFLRSxlQUR6QjtBQVJKO0FBREoseUJBSko7QUFrQkk7QUFBQSxrREFBTSxNQUFOO0FBQUEsOEJBQWEsZUFBYixFQUF1QixPQUFPLEVBQTlCO0FBQ0k7QUFBQTtBQUFBO0FBQ0tVLHVDQUFPQyxJQUFQLENBQVlILElBQVosRUFBa0JJLEdBQWxCLENBQXNCO0FBQUEsMkNBQ25CLDZCQUFJQyxNQUFNQyxLQUFLQyxLQUFMLENBQVcsT0FBS2xCLEtBQUwsQ0FBV0UsU0FBWCxHQUF1QlMsS0FBS1EsUUFBTCxDQUFsQyxDQUFOLEVBQXlETCxJQUF6RCxFQUFKLEdBQXFFQyxHQUFyRSxDQUF5RTtBQUFBLCtDQUNyRTtBQUFBLGtFQUFNLEdBQU47QUFBQSw4Q0FBVSxTQUFTSixLQUFLUSxRQUFMLENBQW5CLEVBQW1DLE1BQU1BLFFBQXpDO0FBQ0sseUVBQUlILE1BQU1MLEtBQUtRLFFBQUwsQ0FBTixFQUFzQkwsSUFBdEIsRUFBSixHQUFrQ0MsR0FBbEMsQ0FBc0M7QUFBQSx1REFDbkM7QUFBQSwwRUFBTSxNQUFOO0FBQUE7QUFDSSxtR0FBSyxnQkFBYUssTUFBTVQsS0FBS1EsUUFBTCxDQUFOLEdBQXVCRSxHQUF2QixHQUE2QixDQUExQyxDQUFMLEVBQW9ELE1BQUssYUFBekQ7QUFDSyw4REFBSyxVQURWLEVBQ3FCLGlCQUFpQjtBQUFBLG1FQUFNLE9BQUtmLFNBQUwsQ0FBZWMsTUFBTVQsS0FBS1EsUUFBTCxDQUFyQixDQUFOO0FBQUEseURBRHRDO0FBREosaURBRG1DO0FBQUEsNkNBQXRDO0FBREwseUNBRHFFO0FBQUEscUNBQXpFLENBRG1CO0FBQUEsaUNBQXRCO0FBREw7QUFESjtBQWxCSixxQkFESjtBQUZKLGFBREo7QUEwQ0g7Ozs7OztrQkF4RWdCckIsSSIsImZpbGUiOiIwLjk3N2EzOTAwMTQ0MWI5NDA2YWY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtHcmlkLCBNZW51LCBJbWFnZSwgSWNvbiwgQ2FyZCwgQnV0dG9ufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZiYXInXG5pbXBvcnQgU2VhcmNoRXhhbXBsZVN0YW5kYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoRXhhbXBsZVN0YW5kYXJkJ1xuaW1wb3J0IE1hcCBmcm9tICcuLi9jb21wb25lbnRzL01hcCdcbmltcG9ydCBTaWRlYmFyUmlnaHRPdmVybGF5IGZyb20gJy4uL2NvbXBvbmVudHMvU2lkZWJhclJpZ2h0T3ZlcmxheSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwcyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHthY3RpdmVJdGVtOiAncHJpdmF0ZScsIG1hcHNDb3VudDogNn1cbiAgICAgICAgdGhpcy5oYW5kbGVJdGVtQ2xpY2sgPSB0aGlzLmhhbmRsZUl0ZW1DbGljay5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuYWRkTWFwID0gdGhpcy5hZGRNYXAuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmRlbGV0ZU1hcCA9IHRoaXMuZGVsZXRlTWFwLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICBhZGRNYXAoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtYXBzQ291bnQ6IHRoaXMuc3RhdGUubWFwc0NvdW50ICsgMX0pXG4gICAgfVxuXG4gICAgZGVsZXRlTWFwKGkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1hcHNDb3VudDogdGhpcy5zdGF0ZS5tYXBzQ291bnQgLSAxfSlcbiAgICB9XG5cbiAgICBoYW5kbGVJdGVtQ2xpY2soZSwge25hbWV9KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZUl0ZW06IG5hbWV9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2FjdGl2ZUl0ZW19ID0gdGhpcy5zdGF0ZVxuICAgICAgICBjb25zdCBjb2xzID0ge1xuICAgICAgICAgICAgJ2NvbXB1dGVyJzogNCxcbiAgICAgICAgICAgICd0YWJsZXQnOiAyLFxuICAgICAgICAgICAgJ21vYmlsZSc6IDFcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxOYXZCYXIvPlxuICAgICAgICAgICAgICAgIDxTaWRlYmFyUmlnaHRPdmVybGF5IGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MTZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hFeGFtcGxlU3RhbmRhcmQgc3RyZXRjaGVkIHNvdXJjZT17bWFwc30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUgZmx1aWQgdmVydGljYWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT0nYWRkJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5hZGRNYXB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBuZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPSdwcml2YXRlJyBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdwcml2YXRlJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9J3NoYXJlZCcgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnc2hhcmVkJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBzdHJldGNoZWQgd2lkdGg9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKGNvbHMpLm1hcChjb2xzTmFtZSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWy4uLkFycmF5KE1hdGgucm91bmQodGhpcy5zdGF0ZS5tYXBzQ291bnQgLyBjb2xzW2NvbHNOYW1lXSkpLmtleXMoKV0ubWFwKHJvdyA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93IGNvbHVtbnM9e2NvbHNbY29sc05hbWVdfSBvbmx5PXtjb2xzTmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtbLi4uQXJyYXkoY29sc1tjb2xzTmFtZV0pLmtleXMoKV0ubWFwKGNvbCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1hcCBuYW1lPXtgTWFwICR7cm93ICogY29sc1tjb2xzTmFtZV0gKyBjb2wgKyAxfWB9IGRlc2M9J0Rlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT0nMDUuMTEuMTcnIG9uRGVsZXRlQ2xpY2tlZD17KCkgPT4gdGhpcy5kZWxldGVNYXAocm93ICogY29sc1tjb2xzTmFtZV0pfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRhaW5lcnMvTWFwcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=