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
            var cols = {
                'large screen': 4,
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
                                null,
                                Object.keys(cols).map(function (colsName) {
                                    return [].concat(_toConsumableArray(Array(Math.round(mapsCount / cols[colsName])).keys())).map(function (row) {
                                        return _react2.default.createElement(
                                            _semanticUiReact.Grid.Row,
                                            { columns: cols[colsName], only: colsName },
                                            [].concat(_toConsumableArray(Array(cols[colsName]).keys())).map(function (col) {
                                                return _react2.default.createElement(
                                                    _semanticUiReact.Grid.Column,
                                                    null,
                                                    _react2.default.createElement(_Map2.default, { name: 'Map ' + (row * cols[colsName] + col + 1), desc: 'Description',
                                                        date: '05.11.17' })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9NYXBzLmpzIl0sIm5hbWVzIjpbIk1hcHMiLCJwcm9wcyIsInN0YXRlIiwiYWN0aXZlSXRlbSIsImhhbmRsZUl0ZW1DbGljayIsImJpbmQiLCJlIiwibmFtZSIsInNldFN0YXRlIiwibWFwcyIsIm1hcHNDb3VudCIsImNvbHMiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiQXJyYXkiLCJNYXRoIiwicm91bmQiLCJjb2xzTmFtZSIsInJvdyIsImNvbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7O0FBRWpCLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsS0FBTCxHQUFhLEVBQUNDLFlBQVksU0FBYixFQUFiO0FBQ0EsY0FBS0MsZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCQyxJQUFyQixPQUF2QjtBQUhlO0FBSWxCOzs7O3dDQUVlQyxDLFFBQVc7QUFBQSxnQkFBUEMsSUFBTyxRQUFQQSxJQUFPOztBQUN2QixpQkFBS0MsUUFBTCxDQUFjLEVBQUNMLFlBQVlJLElBQWIsRUFBZDtBQUNIOzs7aUNBRVE7QUFBQSxnQkFDRUosVUFERixHQUNnQixLQUFLRCxLQURyQixDQUNFQyxVQURGOztBQUVMLGdCQUFNTSxPQUFPLENBQUM7QUFDVkYsc0JBQU07QUFESSxhQUFELEVBRVY7QUFDQ0Esc0JBQU07QUFEUCxhQUZVLENBQWI7QUFLQSxnQkFBTUcsWUFBWSxDQUFsQjtBQUNBLGdCQUFNQyxPQUFPO0FBQ1QsZ0NBQWdCLENBRFA7QUFFVCwwQkFBVSxDQUZEO0FBR1QsMEJBQVU7QUFIRCxhQUFiOztBQU1BLG1CQUNJO0FBQUE7QUFBQTtBQUNJLHFFQURKO0FBRUksK0VBQXFCLFNBQ2pCO0FBQUE7QUFBQTtBQUNJO0FBQUEsa0RBQU0sTUFBTjtBQUFBLDhCQUFhLE9BQU8sRUFBcEI7QUFDSSw2RkFBdUIsZUFBdkIsRUFBaUMsUUFBUUYsSUFBekM7QUFESix5QkFESjtBQUlJO0FBQUEsa0RBQU0sTUFBTjtBQUFBLDhCQUFhLE9BQU8sQ0FBcEI7QUFDSTtBQUFBO0FBQUEsa0NBQU0sV0FBTixFQUFZLGNBQVo7QUFDSTtBQUFBLDBEQUFNLElBQU47QUFBQSxzQ0FBVyxNQUFLLEtBQWhCO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLGlDQURKO0FBTUksb0ZBQU0sSUFBTixJQUFXLE1BQUssU0FBaEIsRUFBMEIsUUFBUU4sZUFBZSxTQUFqRDtBQUNXLDZDQUFTLEtBQUtDLGVBRHpCLEdBTko7QUFRSSxvRkFBTSxJQUFOLElBQVcsTUFBSyxRQUFoQixFQUF5QixRQUFRRCxlQUFlLFFBQWhEO0FBQ1csNkNBQVMsS0FBS0MsZUFEekI7QUFSSjtBQURKLHlCQUpKO0FBa0JJO0FBQUEsa0RBQU0sTUFBTjtBQUFBLDhCQUFhLGVBQWIsRUFBdUIsT0FBTyxFQUE5QjtBQUNJO0FBQUE7QUFBQTtBQUNLUSx1Q0FBT0MsSUFBUCxDQUFZRixJQUFaLEVBQWtCRyxHQUFsQixDQUFzQjtBQUFBLDJDQUNuQiw2QkFBSUMsTUFBTUMsS0FBS0MsS0FBTCxDQUFXUCxZQUFZQyxLQUFLTyxRQUFMLENBQXZCLENBQU4sRUFBOENMLElBQTlDLEVBQUosR0FBMERDLEdBQTFELENBQThEO0FBQUEsK0NBQzFEO0FBQUEsa0VBQU0sR0FBTjtBQUFBLDhDQUFVLFNBQVNILEtBQUtPLFFBQUwsQ0FBbkIsRUFBbUMsTUFBTUEsUUFBekM7QUFDSyx5RUFBSUgsTUFBTUosS0FBS08sUUFBTCxDQUFOLEVBQXNCTCxJQUF0QixFQUFKLEdBQWtDQyxHQUFsQyxDQUFzQztBQUFBLHVEQUNuQztBQUFBLDBFQUFNLE1BQU47QUFBQTtBQUNJLG1HQUFLLGdCQUFhSyxNQUFNUixLQUFLTyxRQUFMLENBQU4sR0FBdUJFLEdBQXZCLEdBQTZCLENBQTFDLENBQUwsRUFBb0QsTUFBSyxhQUF6RDtBQUNLLDhEQUFLLFVBRFY7QUFESixpREFEbUM7QUFBQSw2Q0FBdEM7QUFETCx5Q0FEMEQ7QUFBQSxxQ0FBOUQsQ0FEbUI7QUFBQSxpQ0FBdEI7QUFETDtBQURKO0FBbEJKLHFCQURKO0FBRkosYUFESjtBQTBDSDs7Ozs7O2tCQXBFZ0JwQixJIiwiZmlsZSI6IjAuYzk4NzI4MjlhYTI3MzU2ZmJmYjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge0dyaWQsIE1lbnUsIEltYWdlLCBJY29uLCBDYXJkLCBCdXR0b259IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdmJhcidcbmltcG9ydCBTZWFyY2hFeGFtcGxlU3RhbmRhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2hFeGFtcGxlU3RhbmRhcmQnXG5pbXBvcnQgTWFwIGZyb20gJy4uL2NvbXBvbmVudHMvTWFwJ1xuaW1wb3J0IFNpZGViYXJSaWdodE92ZXJsYXkgZnJvbSAnLi4vY29tcG9uZW50cy9TaWRlYmFyUmlnaHRPdmVybGF5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge2FjdGl2ZUl0ZW06ICdwcml2YXRlJ31cbiAgICAgICAgdGhpcy5oYW5kbGVJdGVtQ2xpY2sgPSB0aGlzLmhhbmRsZUl0ZW1DbGljay5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgaGFuZGxlSXRlbUNsaWNrKGUsIHtuYW1lfSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHthY3RpdmVJdGVtOiBuYW1lfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHthY3RpdmVJdGVtfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgY29uc3QgbWFwcyA9IFt7XG4gICAgICAgICAgICBuYW1lOiAnTWFwMSdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ01hcDInXG4gICAgICAgIH1dXG4gICAgICAgIGNvbnN0IG1hcHNDb3VudCA9IDZcbiAgICAgICAgY29uc3QgY29scyA9IHtcbiAgICAgICAgICAgICdsYXJnZSBzY3JlZW4nOiA0LFxuICAgICAgICAgICAgJ3RhYmxldCc6IDIsXG4gICAgICAgICAgICAnbW9iaWxlJzogMVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPE5hdkJhci8+XG4gICAgICAgICAgICAgICAgPFNpZGViYXJSaWdodE92ZXJsYXkgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxNn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEV4YW1wbGVTdGFuZGFyZCBzdHJldGNoZWQgc291cmNlPXttYXBzfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudSBmbHVpZCB2ZXJ0aWNhbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPSdhZGQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgbmV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT0ncHJpdmF0ZScgYWN0aXZlPXthY3RpdmVJdGVtID09PSAncHJpdmF0ZSd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPSdzaGFyZWQnIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ3NoYXJlZCd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gc3RyZXRjaGVkIHdpZHRoPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhjb2xzKS5tYXAoY29sc05hbWUgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsuLi5BcnJheShNYXRoLnJvdW5kKG1hcHNDb3VudCAvIGNvbHNbY29sc05hbWVdKSkua2V5cygpXS5tYXAocm93ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Sb3cgY29sdW1ucz17Y29sc1tjb2xzTmFtZV19IG9ubHk9e2NvbHNOYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1suLi5BcnJheShjb2xzW2NvbHNOYW1lXSkua2V5cygpXS5tYXAoY29sID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWFwIG5hbWU9e2BNYXAgJHtyb3cgKiBjb2xzW2NvbHNOYW1lXSArIGNvbCArIDF9YH0gZGVzYz0nRGVzY3JpcHRpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlPScwNS4xMS4xNycvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250YWluZXJzL01hcHMuanMiXSwic291cmNlUm9vdCI6IiJ9