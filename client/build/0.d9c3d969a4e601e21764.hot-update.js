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
                _react2.default.createElement(
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
                )
            );
        }
    }]);

    return Maps;
}(_react.Component);

exports.default = Maps;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9NYXBzLmpzIl0sIm5hbWVzIjpbIk1hcHMiLCJwcm9wcyIsInN0YXRlIiwiYWN0aXZlSXRlbSIsIm1hcHNDb3VudCIsImhhbmRsZUl0ZW1DbGljayIsImJpbmQiLCJhZGRNYXAiLCJkZWxldGVNYXAiLCJzZXRTdGF0ZSIsImkiLCJlIiwibmFtZSIsImNvbHMiLCJtYXBzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsIkFycmF5IiwiTWF0aCIsInJvdW5kIiwiY29sc05hbWUiLCJyb3ciLCJjb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEk7OztBQUVqQixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdIQUNUQSxLQURTOztBQUVmLGNBQUtDLEtBQUwsR0FBYSxFQUFDQyxZQUFZLFNBQWIsRUFBd0JDLFdBQVcsQ0FBbkMsRUFBYjtBQUNBLGNBQUtDLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQkMsSUFBckIsT0FBdkI7QUFDQSxjQUFLQyxNQUFMLEdBQWMsTUFBS0EsTUFBTCxDQUFZRCxJQUFaLE9BQWQ7QUFDQSxjQUFLRSxTQUFMLEdBQWlCLE1BQUtBLFNBQUwsQ0FBZUYsSUFBZixPQUFqQjtBQUxlO0FBTWxCOzs7O2lDQUVRO0FBQ0wsaUJBQUtHLFFBQUwsQ0FBYyxFQUFFTCxXQUFXLEtBQUtGLEtBQUwsQ0FBV0UsU0FBWCxHQUF1QixDQUFwQyxFQUFkO0FBQ0g7OztrQ0FFU00sQyxFQUFHO0FBQ1QsaUJBQUtELFFBQUwsQ0FBYyxFQUFFTCxXQUFXLEtBQUtGLEtBQUwsQ0FBV0UsU0FBWCxHQUF1QixDQUFwQyxFQUFkO0FBQ0g7Ozt3Q0FFZU8sQyxRQUFXO0FBQUEsZ0JBQVBDLElBQU8sUUFBUEEsSUFBTzs7QUFDdkIsaUJBQUtILFFBQUwsQ0FBYyxFQUFDTixZQUFZUyxJQUFiLEVBQWQ7QUFDSDs7O2lDQUVRO0FBQUE7O0FBQUEsZ0JBQ0VULFVBREYsR0FDZ0IsS0FBS0QsS0FEckIsQ0FDRUMsVUFERjs7QUFFTCxnQkFBTVUsT0FBTztBQUNULDRCQUFZLENBREg7QUFFVCwwQkFBVSxDQUZEO0FBR1QsMEJBQVU7QUFIRCxhQUFiOztBQU1BLG1CQUNJO0FBQUE7QUFBQTtBQUNJLHFFQURKO0FBR1E7QUFBQTtBQUFBO0FBQ0k7QUFBQSw4Q0FBTSxNQUFOO0FBQUEsMEJBQWEsT0FBTyxFQUFwQjtBQUNJLHlGQUF1QixlQUF2QixFQUFpQyxRQUFRQyxJQUF6QztBQURKLHFCQURKO0FBSUk7QUFBQSw4Q0FBTSxNQUFOO0FBQUEsMEJBQWEsT0FBTyxDQUFwQjtBQUNJO0FBQUE7QUFBQSw4QkFBTSxXQUFOLEVBQVksY0FBWjtBQUNJO0FBQUEsc0RBQU0sSUFBTjtBQUFBLGtDQUFXLE1BQUssS0FBaEI7QUFDSTtBQUFBO0FBQUEsc0NBQVEsU0FBUyxLQUFLUCxNQUF0QjtBQUFBO0FBQUE7QUFESiw2QkFESjtBQU1JLGdGQUFNLElBQU4sSUFBVyxNQUFLLFNBQWhCLEVBQTBCLFFBQVFKLGVBQWUsU0FBakQ7QUFDVyx5Q0FBUyxLQUFLRSxlQUR6QixHQU5KO0FBUUksZ0ZBQU0sSUFBTixJQUFXLE1BQUssUUFBaEIsRUFBeUIsUUFBUUYsZUFBZSxRQUFoRDtBQUNXLHlDQUFTLEtBQUtFLGVBRHpCO0FBUko7QUFESixxQkFKSjtBQWtCSTtBQUFBLDhDQUFNLE1BQU47QUFBQSwwQkFBYSxlQUFiLEVBQXVCLE9BQU8sRUFBOUI7QUFDSTtBQUFBO0FBQUE7QUFDS1UsbUNBQU9DLElBQVAsQ0FBWUgsSUFBWixFQUFrQkksR0FBbEIsQ0FBc0I7QUFBQSx1Q0FDbkIsNkJBQUlDLE1BQU1DLEtBQUtDLEtBQUwsQ0FBVyxPQUFLbEIsS0FBTCxDQUFXRSxTQUFYLEdBQXVCUyxLQUFLUSxRQUFMLENBQWxDLENBQU4sRUFBeURMLElBQXpELEVBQUosR0FBcUVDLEdBQXJFLENBQXlFO0FBQUEsMkNBQ3JFO0FBQUEsOERBQU0sR0FBTjtBQUFBLDBDQUFVLFNBQVNKLEtBQUtRLFFBQUwsQ0FBbkIsRUFBbUMsTUFBTUEsUUFBekM7QUFDSyxxRUFBSUgsTUFBTUwsS0FBS1EsUUFBTCxDQUFOLEVBQXNCTCxJQUF0QixFQUFKLEdBQWtDQyxHQUFsQyxDQUFzQztBQUFBLG1EQUNuQztBQUFBLHNFQUFNLE1BQU47QUFBQTtBQUNJLCtGQUFLLGdCQUFhSyxNQUFNVCxLQUFLUSxRQUFMLENBQU4sR0FBdUJFLEdBQXZCLEdBQTZCLENBQTFDLENBQUwsRUFBb0QsTUFBSyxhQUF6RDtBQUNLLDBEQUFLLFVBRFYsRUFDcUIsaUJBQWlCO0FBQUEsK0RBQU0sT0FBS2YsU0FBTCxDQUFlYyxNQUFNVCxLQUFLUSxRQUFMLENBQXJCLENBQU47QUFBQSxxREFEdEM7QUFESiw2Q0FEbUM7QUFBQSx5Q0FBdEM7QUFETCxxQ0FEcUU7QUFBQSxpQ0FBekUsQ0FEbUI7QUFBQSw2QkFBdEI7QUFETDtBQURKO0FBbEJKO0FBSFIsYUFESjtBQTBDSDs7Ozs7O2tCQXhFZ0JyQixJIiwiZmlsZSI6IjAuZDljM2Q5NjlhNGU2MDFlMjE3NjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge0dyaWQsIE1lbnUsIEltYWdlLCBJY29uLCBDYXJkLCBCdXR0b259IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdmJhcidcbmltcG9ydCBTZWFyY2hFeGFtcGxlU3RhbmRhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2hFeGFtcGxlU3RhbmRhcmQnXG5pbXBvcnQgTWFwIGZyb20gJy4uL2NvbXBvbmVudHMvTWFwJ1xuaW1wb3J0IFNpZGViYXJSaWdodE92ZXJsYXkgZnJvbSAnLi4vY29tcG9uZW50cy9TaWRlYmFyUmlnaHRPdmVybGF5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge2FjdGl2ZUl0ZW06ICdwcml2YXRlJywgbWFwc0NvdW50OiA2fVxuICAgICAgICB0aGlzLmhhbmRsZUl0ZW1DbGljayA9IHRoaXMuaGFuZGxlSXRlbUNsaWNrLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5hZGRNYXAgPSB0aGlzLmFkZE1hcC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuZGVsZXRlTWFwID0gdGhpcy5kZWxldGVNYXAuYmluZCh0aGlzKVxuICAgIH1cblxuICAgIGFkZE1hcCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1hcHNDb3VudDogdGhpcy5zdGF0ZS5tYXBzQ291bnQgKyAxfSlcbiAgICB9XG5cbiAgICBkZWxldGVNYXAoaSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWFwc0NvdW50OiB0aGlzLnN0YXRlLm1hcHNDb3VudCAtIDF9KVxuICAgIH1cblxuICAgIGhhbmRsZUl0ZW1DbGljayhlLCB7bmFtZX0pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlSXRlbTogbmFtZX0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7YWN0aXZlSXRlbX0gPSB0aGlzLnN0YXRlXG4gICAgICAgIGNvbnN0IGNvbHMgPSB7XG4gICAgICAgICAgICAnY29tcHV0ZXInOiA0LFxuICAgICAgICAgICAgJ3RhYmxldCc6IDIsXG4gICAgICAgICAgICAnbW9iaWxlJzogMVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPE5hdkJhci8+XG4gICAgICAgICAgICAgICAgey8qPFNpZGViYXJSaWdodE92ZXJsYXkgY29udGVudD17Ki99XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxNn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEV4YW1wbGVTdGFuZGFyZCBzdHJldGNoZWQgc291cmNlPXttYXBzfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudSBmbHVpZCB2ZXJ0aWNhbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPSdhZGQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFkZE1hcH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIG5ld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9J3ByaXZhdGUnIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ3ByaXZhdGUnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT0nc2hhcmVkJyBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdzaGFyZWQnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHN0cmV0Y2hlZCB3aWR0aD17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMoY29scykubWFwKGNvbHNOYW1lID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbLi4uQXJyYXkoTWF0aC5yb3VuZCh0aGlzLnN0YXRlLm1hcHNDb3VudCAvIGNvbHNbY29sc05hbWVdKSkua2V5cygpXS5tYXAocm93ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Sb3cgY29sdW1ucz17Y29sc1tjb2xzTmFtZV19IG9ubHk9e2NvbHNOYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1suLi5BcnJheShjb2xzW2NvbHNOYW1lXSkua2V5cygpXS5tYXAoY29sID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWFwIG5hbWU9e2BNYXAgJHtyb3cgKiBjb2xzW2NvbHNOYW1lXSArIGNvbCArIDF9YH0gZGVzYz0nRGVzY3JpcHRpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlPScwNS4xMS4xNycgb25EZWxldGVDbGlja2VkPXsoKSA9PiB0aGlzLmRlbGV0ZU1hcChyb3cgKiBjb2xzW2NvbHNOYW1lXSl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICB7LyogfSAvPiovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRhaW5lcnMvTWFwcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=