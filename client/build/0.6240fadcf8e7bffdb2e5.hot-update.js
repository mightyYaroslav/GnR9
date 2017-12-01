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
            var cols = 4;
            var tabletCols = 2;
            var mobileCols = 1;

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
                                [].concat(_toConsumableArray(Array(Math.round(mapsCount / cols)).keys())).map(function (row) {
                                    return _react2.default.createElement(
                                        _semanticUiReact.Grid.Row,
                                        { columns: cols, only: 'large screen widescreen' },
                                        [].concat(_toConsumableArray(Array(cols).keys())).map(function (col) {
                                            return _react2.default.createElement(
                                                _semanticUiReact.Grid.Column,
                                                null,
                                                _react2.default.createElement(_Map2.default, { name: 'Map ' + (row * cols + col + 1), desc: 'Description', date: '05.11.17' })
                                            );
                                        })
                                    );
                                })
                            ),
                            _react2.default.createElement(
                                _semanticUiReact.Grid,
                                null,
                                [].concat(_toConsumableArray(Array(Math.round(mapsCount / tabletCols)).keys())).map(function (row) {
                                    return _react2.default.createElement(
                                        _semanticUiReact.Grid.Row,
                                        { columns: tabletCols, only: 'tablet' },
                                        [].concat(_toConsumableArray(Array(cols).keys())).map(function (col) {
                                            return _react2.default.createElement(
                                                _semanticUiReact.Grid.Column,
                                                null,
                                                _react2.default.createElement(_Map2.default, { name: 'Map ' + (row * tabletCols + col + 1), desc: 'Description', date: '05.11.17' })
                                            );
                                        })
                                    );
                                })
                            ),
                            _react2.default.createElement(
                                _semanticUiReact.Grid,
                                null,
                                [].concat(_toConsumableArray(Array(Math.round(mapsCount / mobileCols)).keys())).map(function (row) {
                                    return _react2.default.createElement(
                                        _semanticUiReact.Grid.Row,
                                        { columns: mobileCols, only: 'mobile' },
                                        [].concat(_toConsumableArray(Array(cols).keys())).map(function (col) {
                                            return _react2.default.createElement(
                                                _semanticUiReact.Grid.Column,
                                                null,
                                                _react2.default.createElement(_Map2.default, { name: 'Map ' + (row * mobileCols + col + 1), desc: 'Description', date: '05.11.17' })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9NYXBzLmpzIl0sIm5hbWVzIjpbIk1hcHMiLCJwcm9wcyIsInN0YXRlIiwiYWN0aXZlSXRlbSIsImhhbmRsZUl0ZW1DbGljayIsImJpbmQiLCJlIiwibmFtZSIsInNldFN0YXRlIiwibWFwcyIsIm1hcHNDb3VudCIsImNvbHMiLCJ0YWJsZXRDb2xzIiwibW9iaWxlQ29scyIsIkFycmF5IiwiTWF0aCIsInJvdW5kIiwia2V5cyIsIm1hcCIsInJvdyIsImNvbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7O0FBRWpCLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsS0FBTCxHQUFhLEVBQUNDLFlBQVksU0FBYixFQUFiO0FBQ0EsY0FBS0MsZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCQyxJQUFyQixPQUF2QjtBQUhlO0FBSWxCOzs7O3dDQUVlQyxDLFFBQVc7QUFBQSxnQkFBUEMsSUFBTyxRQUFQQSxJQUFPOztBQUN2QixpQkFBS0MsUUFBTCxDQUFjLEVBQUNMLFlBQVlJLElBQWIsRUFBZDtBQUNIOzs7aUNBRVE7QUFBQSxnQkFDRUosVUFERixHQUNnQixLQUFLRCxLQURyQixDQUNFQyxVQURGOztBQUVMLGdCQUFNTSxPQUFPLENBQUM7QUFDVkYsc0JBQU07QUFESSxhQUFELEVBRVY7QUFDQ0Esc0JBQU07QUFEUCxhQUZVLENBQWI7QUFLQSxnQkFBTUcsWUFBWSxDQUFsQjtBQUNBLGdCQUFNQyxPQUFPLENBQWI7QUFDQSxnQkFBTUMsYUFBYSxDQUFuQjtBQUNBLGdCQUFNQyxhQUFhLENBQW5COztBQUVBLG1CQUNJO0FBQUE7QUFBQTtBQUNJLHFFQURKO0FBRUksK0VBQXFCLFNBQ2pCO0FBQUE7QUFBQTtBQUNJO0FBQUEsa0RBQU0sTUFB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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtHcmlkLCBNZW51LCBJbWFnZSwgSWNvbiwgQ2FyZCwgQnV0dG9ufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZiYXInXG5pbXBvcnQgU2VhcmNoRXhhbXBsZVN0YW5kYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoRXhhbXBsZVN0YW5kYXJkJ1xuaW1wb3J0IE1hcCBmcm9tICcuLi9jb21wb25lbnRzL01hcCdcbmltcG9ydCBTaWRlYmFyUmlnaHRPdmVybGF5IGZyb20gJy4uL2NvbXBvbmVudHMvU2lkZWJhclJpZ2h0T3ZlcmxheSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwcyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHthY3RpdmVJdGVtOiAncHJpdmF0ZSd9XG4gICAgICAgIHRoaXMuaGFuZGxlSXRlbUNsaWNrID0gdGhpcy5oYW5kbGVJdGVtQ2xpY2suYmluZCh0aGlzKVxuICAgIH1cblxuICAgIGhhbmRsZUl0ZW1DbGljayhlLCB7bmFtZX0pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlSXRlbTogbmFtZX0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7YWN0aXZlSXRlbX0gPSB0aGlzLnN0YXRlXG4gICAgICAgIGNvbnN0IG1hcHMgPSBbe1xuICAgICAgICAgICAgbmFtZTogJ01hcDEnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdNYXAyJ1xuICAgICAgICB9XVxuICAgICAgICBjb25zdCBtYXBzQ291bnQgPSA2XG4gICAgICAgIGNvbnN0IGNvbHMgPSA0XG4gICAgICAgIGNvbnN0IHRhYmxldENvbHMgPSAyXG4gICAgICAgIGNvbnN0IG1vYmlsZUNvbHMgPSAxXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPE5hdkJhci8+XG4gICAgICAgICAgICAgICAgPFNpZGViYXJSaWdodE92ZXJsYXkgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxNn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEV4YW1wbGVTdGFuZGFyZCBzdHJldGNoZWQgc291cmNlPXttYXBzfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudSBmbHVpZCB2ZXJ0aWNhbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPSdhZGQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgbmV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT0ncHJpdmF0ZScgYWN0aXZlPXthY3RpdmVJdGVtID09PSAncHJpdmF0ZSd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPSdzaGFyZWQnIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ3NoYXJlZCd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gc3RyZXRjaGVkIHdpZHRoPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtbLi4uQXJyYXkoTWF0aC5yb3VuZChtYXBzQ291bnQgLyBjb2xzKSkua2V5cygpXS5tYXAocm93ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdyBjb2x1bW5zPXtjb2xzfSBvbmx5PSdsYXJnZSBzY3JlZW4gd2lkZXNjcmVlbic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1suLi5BcnJheShjb2xzKS5rZXlzKCldLm1hcChjb2wgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWFwIG5hbWU9e2BNYXAgJHtyb3cgKiBjb2xzICsgY29sICsgMX1gfSBkZXNjPSdEZXNjcmlwdGlvbicgZGF0ZT0nMDUuMTEuMTcnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1suLi5BcnJheShNYXRoLnJvdW5kKG1hcHNDb3VudCAvIHRhYmxldENvbHMpKS5rZXlzKCldLm1hcChyb3cgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93IGNvbHVtbnM9e3RhYmxldENvbHN9IG9ubHk9J3RhYmxldCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1suLi5BcnJheShjb2xzKS5rZXlzKCldLm1hcChjb2wgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1hcCBuYW1lPXtgTWFwICR7cm93ICogdGFibGV0Q29scyArIGNvbCArIDF9YH0gZGVzYz0nRGVzY3JpcHRpb24nIGRhdGU9JzA1LjExLjE3Jy8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtbLi4uQXJyYXkoTWF0aC5yb3VuZChtYXBzQ291bnQgLyBtb2JpbGVDb2xzKSkua2V5cygpXS5tYXAocm93ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdyBjb2x1bW5zPXttb2JpbGVDb2xzfSBvbmx5PSdtb2JpbGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtbLi4uQXJyYXkoY29scykua2V5cygpXS5tYXAoY29sID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1hcCBuYW1lPXtgTWFwICR7cm93ICogbW9iaWxlQ29scyArIGNvbCArIDF9YH0gZGVzYz0nRGVzY3JpcHRpb24nIGRhdGU9JzA1LjExLjE3Jy8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRhaW5lcnMvTWFwcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=