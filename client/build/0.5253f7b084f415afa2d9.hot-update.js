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

var _navbar = __webpack_require__(74);

var _navbar2 = _interopRequireDefault(_navbar);

var _SearchExampleStandard = __webpack_require__(895);

var _SearchExampleStandard2 = _interopRequireDefault(_SearchExampleStandard);

var _Map = __webpack_require__(897);

var _Map2 = _interopRequireDefault(_Map);

var _SidebarRightOverlay = __webpack_require__(899);

var _SidebarRightOverlay2 = _interopRequireDefault(_SidebarRightOverlay);

var _Auth = __webpack_require__(82);

var _Auth2 = _interopRequireDefault(_Auth);

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

        _this.state = { activeItem: 'private', loading: true };
        _this.handleItemClick = _this.handleItemClick.bind(_this);
        _this.addMap = _this.addMap.bind(_this);
        _this.deleteMap = _this.deleteMap.bind(_this);
        return _this;
    }

    _createClass(Maps, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            fetch('/projects', {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'bearer ' + _Auth2.default.getToken()
                }
            }).then(function (res) {
                if (res.status === 200) return res.json();else _this2.setState({
                    errorLabel: _react2.default.createElement(
                        Label,
                        { color: 'red' },
                        res.statusText
                    ),
                    loading: false
                });
            }).then(function (json) {
                console.log(JSON.stringify(json.projects));
                _this2.setState({ maps: json.projects });
            }).catch(function (err) {
                return _this2.setState({
                    errorLabel: _react2.default.createElement(
                        Label,
                        { color: 'red' },
                        err
                    ),
                    loading: false
                });
            });
        }
    }, {
        key: 'addMap',
        value: function addMap() {
            var maps = this.state.maps;
            maps.push('Maps' + maps.length);
            this.setState({ maps: maps });
        }
    }, {
        key: 'deleteMap',
        value: function deleteMap(i) {
            var maps = this.state.maps;
            maps.splice(i, 1);
            this.setState({ maps: maps });
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
            var _this3 = this;

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
                    _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 16 }),
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
                                var rows = Math.ceil(_this3.state.maps.length / cols[colsName]);
                                var lastRowCols = _this3.state.maps.length % cols[colsName];
                                lastRowCols = lastRowCols === 0 ? cols[colsName] : lastRowCols;
                                return [].concat(_toConsumableArray(Array(rows).keys())).map(function (row) {
                                    return _react2.default.createElement(
                                        _semanticUiReact.Grid.Row,
                                        { columns: cols[colsName], only: colsName },
                                        [].concat(_toConsumableArray(Array(row === rows - 1 ? lastRowCols : cols[colsName]).keys())).map(function (col) {
                                            return _react2.default.createElement(
                                                _semanticUiReact.Grid.Column,
                                                null,
                                                _react2.default.createElement(_Map2.default, { name: _this3.state.maps[row * cols[colsName] + col].name,
                                                    desc: _this3.state.maps[row * cols[colsName] + col].desc,
                                                    date: _this3.state.maps[row * cols[colsName] + col].date,
                                                    onDeleteClicked: function onDeleteClicked() {
                                                        return _this3.deleteMap(row * cols[colsName] + col);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9NYXBzLmpzIl0sIm5hbWVzIjpbIk1hcHMiLCJwcm9wcyIsInN0YXRlIiwiYWN0aXZlSXRlbSIsImxvYWRpbmciLCJoYW5kbGVJdGVtQ2xpY2siLCJiaW5kIiwiYWRkTWFwIiwiZGVsZXRlTWFwIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiZ2V0VG9rZW4iLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwianNvbiIsInNldFN0YXRlIiwiZXJyb3JMYWJlbCIsInN0YXR1c1RleHQiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsInByb2plY3RzIiwibWFwcyIsImNhdGNoIiwiZXJyIiwicHVzaCIsImxlbmd0aCIsImkiLCJzcGxpY2UiLCJlIiwibmFtZSIsImNvbHMiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwicm93cyIsIk1hdGgiLCJjZWlsIiwiY29sc05hbWUiLCJsYXN0Um93Q29scyIsIkFycmF5Iiwicm93IiwiY29sIiwiZGVzYyIsImRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7O0FBRWpCLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsS0FBTCxHQUFhLEVBQUVDLFlBQVksU0FBZCxFQUF5QkMsU0FBUyxJQUFsQyxFQUFiO0FBQ0EsY0FBS0MsZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCQyxJQUFyQixPQUF2QjtBQUNBLGNBQUtDLE1BQUwsR0FBYyxNQUFLQSxNQUFMLENBQVlELElBQVosT0FBZDtBQUNBLGNBQUtFLFNBQUwsR0FBaUIsTUFBS0EsU0FBTCxDQUFlRixJQUFmLE9BQWpCO0FBTGU7QUFNbEI7Ozs7NkNBRW9CO0FBQUE7O0FBQ2pCRyxrQkFBTSxXQUFOLEVBQW1CO0FBQ2ZD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ODRmNDE1YWZhMmQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtHcmlkLCBNZW51LCBJbWFnZSwgSWNvbiwgQ2FyZCwgQnV0dG9ufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZiYXInXG5pbXBvcnQgU2VhcmNoRXhhbXBsZVN0YW5kYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoRXhhbXBsZVN0YW5kYXJkJ1xuaW1wb3J0IE1hcCBmcm9tICcuLi9jb21wb25lbnRzL01hcCdcbmltcG9ydCBTaWRlYmFyUmlnaHRPdmVybGF5IGZyb20gJy4uL2NvbXBvbmVudHMvU2lkZWJhclJpZ2h0T3ZlcmxheSdcbmltcG9ydCBBdXRoIGZyb20gJy4uL21vZHVsZXMvQXV0aCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwcyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgYWN0aXZlSXRlbTogJ3ByaXZhdGUnLCBsb2FkaW5nOiB0cnVlIH1cbiAgICAgICAgdGhpcy5oYW5kbGVJdGVtQ2xpY2sgPSB0aGlzLmhhbmRsZUl0ZW1DbGljay5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuYWRkTWFwID0gdGhpcy5hZGRNYXAuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmRlbGV0ZU1hcCA9IHRoaXMuZGVsZXRlTWFwLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGZldGNoKCcvcHJvamVjdHMnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgYmVhcmVyICR7QXV0aC5nZXRUb2tlbigpfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgY29sb3I9J3JlZCc+e3Jlcy5zdGF0dXNUZXh0fTwvTGFiZWw+LFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShqc29uLnByb2plY3RzKSlcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWFwczoganNvbi5wcm9qZWN0cyB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntlcnJ9PC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pKVxuICAgIH1cblxuICAgIGFkZE1hcCgpIHtcbiAgICAgICAgbGV0IG1hcHMgPSB0aGlzLnN0YXRlLm1hcHNcbiAgICAgICAgbWFwcy5wdXNoKCdNYXBzJyttYXBzLmxlbmd0aClcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1hcHMgfSlcbiAgICB9XG5cbiAgICBkZWxldGVNYXAoaSkge1xuICAgICAgICBsZXQgbWFwcyA9IHRoaXMuc3RhdGUubWFwc1xuICAgICAgICBtYXBzLnNwbGljZShpLCAxKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWFwcyB9KVxuICAgIH1cblxuICAgIGhhbmRsZUl0ZW1DbGljayhlLCB7bmFtZX0pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlSXRlbTogbmFtZX0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7YWN0aXZlSXRlbX0gPSB0aGlzLnN0YXRlXG4gICAgICAgIGNvbnN0IGNvbHMgPSB7XG4gICAgICAgICAgICAnY29tcHV0ZXInOiA0LFxuICAgICAgICAgICAgJ3RhYmxldCc6IDIsXG4gICAgICAgICAgICAnbW9iaWxlJzogMVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPE5hdkJhci8+XG4gICAgICAgICAgICAgICAgey8qPFNpZGViYXJSaWdodE92ZXJsYXkgY29udGVudD17Ki99XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxNn0+XG4gICAgICAgICAgICAgICAgICAgIHsgLyo8U2VhcmNoRXhhbXBsZVN0YW5kYXJkIHN0cmV0Y2hlZCBzb3VyY2U9e21hcHN9Lz4gKi8gfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUgZmx1aWQgdmVydGljYWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT0nYWRkJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5hZGRNYXB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBuZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPSdwcml2YXRlJyBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdwcml2YXRlJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9J3NoYXJlZCcgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnc2hhcmVkJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBzdHJldGNoZWQgd2lkdGg9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKGNvbHMpLm1hcChjb2xzTmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dzID0gTWF0aC5jZWlsKHRoaXMuc3RhdGUubWFwcy5sZW5ndGggLyBjb2xzW2NvbHNOYW1lXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsYXN0Um93Q29scyA9IHRoaXMuc3RhdGUubWFwcy5sZW5ndGggJSBjb2xzW2NvbHNOYW1lXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFJvd0NvbHMgPSBsYXN0Um93Q29scyA9PT0gMCA/IGNvbHNbY29sc05hbWVdIDogbGFzdFJvd0NvbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbLi4uQXJyYXkocm93cykua2V5cygpXS5tYXAocm93ID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdyBjb2x1bW5zPXtjb2xzW2NvbHNOYW1lXX0gb25seT17Y29sc05hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1suLi5BcnJheShyb3cgPT09IHJvd3MgLSAxID8gbGFzdFJvd0NvbHMgOiBjb2xzW2NvbHNOYW1lXSkua2V5cygpXS5tYXAoY29sID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYXAgbmFtZT17IHRoaXMuc3RhdGUubWFwc1tyb3cgKiBjb2xzW2NvbHNOYW1lXSArIGNvbF0ubmFtZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzYz17IHRoaXMuc3RhdGUubWFwc1tyb3cgKiBjb2xzW2NvbHNOYW1lXSArIGNvbF0uZGVzYyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17IHRoaXMuc3RhdGUubWFwc1tyb3cgKiBjb2xzW2NvbHNOYW1lXSArIGNvbF0uZGF0ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EZWxldGVDbGlja2VkPXsoKSA9PiB0aGlzLmRlbGV0ZU1hcChyb3cgKiBjb2xzW2NvbHNOYW1lXSArIGNvbCl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgey8qICAvPiovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRhaW5lcnMvTWFwcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=