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

var _Auth = __webpack_require__(100);

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

        _this.state = { activeItem: 'private', maps: Array.from(Array(10).keys()).map(function (num) {
                return 'Map' + num;
            }) };
        _this.handleItemClick = _this.handleItemClick.bind(_this);
        _this.addMap = _this.addMap.bind(_this);
        _this.deleteMap = _this.deleteMap.bind(_this);
        return _this;
    }

    // componentWillMount() {
    //     fetch('/projects', {
    //         method: 'GET',
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": `bearer ${Auth.getToken()}`
    //         }
    //     })
    //         .then(res => {
    //             if(res.status === 200)
    //                 return res.json()
    //             else
    //                 this.setState({
    //                     errorLabel: <Label color='red'>{res.statusText}</Label>,
    //                     loading: false
    //                 })
    //         })
    //         .then(json => {
    //             console.log(JSON.stringify(json))
    //             // this.setState({ profiles: json.users, loading: false })
    //         })
    //         .catch(err => this.setState({
    //             errorLabel: <Label color='red'>{err}</Label>,
    //             loading: false
    //         }))
    // }

    _createClass(Maps, [{
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
            maps = maps.splice(i, 1);
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
                                return [].concat(_toConsumableArray(Array(Math.round(_this2.state.maps.length / cols[colsName])).keys())).map(function (row) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9NYXBzLmpzIl0sIm5hbWVzIjpbIk1hcHMiLCJwcm9wcyIsInN0YXRlIiwiYWN0aXZlSXRlbSIsIm1hcHMiLCJBcnJheSIsImZyb20iLCJrZXlzIiwibWFwIiwibnVtIiwiaGFuZGxlSXRlbUNsaWNrIiwiYmluZCIsImFkZE1hcCIsImRlbGV0ZU1hcCIsInB1c2giLCJsZW5ndGgiLCJzZXRTdGF0ZSIsImkiLCJzcGxpY2UiLCJlIiwibmFtZSIsImNvbHMiLCJPYmplY3QiLCJNYXRoIiwicm91bmQiLCJjb2xzTmFtZSIsInJvdyIsImNvbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7QUFFakIsa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWEsRUFBQ0MsWUFBWSxTQUFiLEVBQXdCQyxNQUFNQyxNQUFNQyxJQUFOLENBQVdELE1BQU0sRUFBTixFQUFVRSxJQUFWLEVBQVgsRUFBNkJDLEdBQTdCLENBQWlDO0FBQUEsdUJBQU8sUUFBUUMsR0FBZjtBQUFBLGFBQWpDLENBQTlCLEVBQWI7QUFDQSxjQUFLQyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJDLElBQXJCLE9BQXZCO0FBQ0EsY0FBS0MsTUFBTCxHQUFjLE1BQUtBLE1BQUwsQ0FBWUQsSUFBWixPQUFkO0FBQ0EsY0FBS0UsU0FBTCxHQUFpQixNQUFLQSxTQUFMLENBQWVGLElBQWYsT0FBakI7QUFMZTtBQU1sQjs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O2lDQUVTO0FBQ0wsZ0JBQUlQLE9BQU8sS0FBS0YsS0FBTCxDQUFXRSxJQUF0QjtBQUNBQSxpQkFBS1UsSUFBTCxDQUFVLFNBQU9WLEtBQUtXLE1BQXRCO0FBQ0EsaUJBQUtDLFFBQUwsQ0FBYyxFQUFFWixVQUFGLEVBQWQ7QUFDSDs7O2tDQUVTYSxDLEVBQUc7QUFDVCxnQkFBSWIsT0FBTyxLQUFLRixLQUFMLENBQVdFLElBQXRCO0FBQ0FBLG1CQUFPQSxLQUFLYyxNQUFMLENBQVlELENBQVosRUFBZSxDQUFmLENBQVA7QUFDQSxpQkFBS0QsUUFBTCxDQUFjLEVBQUVaLFVBQUYsRUFBZDtBQUNIOzs7d0NBRWVlLEMsUUFBVztBQUFBLGdCQUFQQyxJQUFPLFFBQVBBLElBQU87O0FBQ3ZCLGlCQUFLSixRQUFMLENBQWMsRUFBQ2IsWUFBWWlCLElBQWIsRUFBZDtBQUNIOzs7aUNBRVE7QUFBQTs7QUFBQSxnQkFDRWpCLFVBREYsR0FDZ0IsS0FBS0QsS0FEckIsQ0FDRUMsVUFERjs7QUFFTCxnQkFBTWtCLE9BQU87QUFDVCw0QkFBWSxDQURIO0FBRVQsMEJBQVUsQ0FGRDtBQUdULDBCQUFVO0FBSEQsYUFBYjs7QUFNQSxtQkFDSTtBQUFBO0FBQUE7QUFDSSxxRUFESjtBQUdRO0FBQUE7QUFBQTtBQUNJLHdFQUFNLE1BQU4sSUFBYSxPQUFPLEVBQXBCLEdBREo7QUFJSTtBQUFBLDhDQUFNLE1BQU47QUFBQSwwQkFBYSxPQUFPLENBQXBCO0FBQ0k7QUFBQTtBQUFBLDhCQUFNLFdBQU4sRUFBWSxjQUFaO0FBQ0k7QUFBQSxzREFBTSxJQUFOO0FBQUEsa0NBQVcsTUFBSyxLQUFoQjtBQUNJO0FBQUE7QUFBQSxzQ0FBUSxTQUFTLEtBQUtULE1BQXRCO0FBQUE7QUFBQTtBQURKLDZCQURKO0FBTUksZ0ZBQU0sSUFBTixJQUFXLE1BQUssU0FBaEIsRUFBMEIsUUFBUVQsZUFBZSxTQUFqRDtBQUNXLHlDQUFTLEtBQUtPLGVBRHpCLEdBTko7QUFRSSxnRkFBTSxJQUFOLElBQVcsTUFBSyxRQUFoQixFQUF5QixRQUFRUCxlQUFlLFFBQWhEO0FBQ1cseUNBQVMsS0FBS08sZUFEekI7QUFSSjtBQURKLHFCQUpKO0FBa0JJO0FBQUEsOENBQU0sTUFBTjtBQUFBLDBCQUFhLGVBQWIsRUFBdUIsT0FBTyxFQUE5QjtBQUNJO0FBQUE7QUFBQTtBQUNLWSxtQ0FBT2YsSUFBUCxDQUFZYyxJQUFaLEVBQWtCYixHQUFsQixDQUFzQjtBQUFBLHVDQUNuQiw2QkFBSUgsTUFBTWtCLEtBQUtDLEtBQUwsQ0FBVyxPQUFLdEIsS0FBTCxDQUFXRSxJQUFYLENBQWdCVyxNQUFoQixHQUF5Qk0sS0FBS0ksUUFBTCxDQUFwQyxDQUFOLEVBQTJEbEIsSUFBM0QsRUFBSixHQUF1RUMsR0FBdkUsQ0FBMkU7QUFBQSwyQ0FDdkU7QUFBQSw4REFBTSxHQUFOO0FBQUEsMENBQVUsU0FBU2EsS0FBS0ksUUFBTCxDQUFuQixFQUFtQyxNQUFNQSxRQUF6QztBQUNLLHFFQUFJcEIsTUFBTWdCLEtBQUtJLFFBQUwsQ0FBTixFQUFzQmxCLElBQXRCLEVBQUosR0FBa0NDLEdBQWxDLENBQXNDO0FBQUEsbURBQ25DO0FBQUEsc0VBQU0sTUFBTjtBQUFBO0FBQ0ksK0ZBQUssZ0JBQWFrQixNQUFNTCxLQUFLSSxRQUFMLENBQU4sR0FBdUJFLEdBQXZCLEdBQTZCLENBQTFDLENBQUwsRUFBb0QsTUFBSyxhQUF6RDtBQUNLLDBEQUFLLFVBRFYsRUFDcUIsaUJBQWlCO0FBQUEsK0RBQU0sT0FBS2QsU0FBTCxDQUFlYSxNQUFNTCxLQUFLSSxRQUFMLENBQXJCLENBQU47QUFBQSxxREFEdEM7QUFESiw2Q0FEbUM7QUFBQSx5Q0FBdEM7QUFETCxxQ0FEdUU7QUFBQSxpQ0FBM0UsQ0FEbUI7QUFBQSw2QkFBdEI7QUFETDtBQURKO0FBbEJKO0FBSFIsYUFESjtBQTBDSDs7Ozs7O2tCQXZHZ0J6QixJIiwiZmlsZSI6IjAuYzI5NjM3ODhjOWU1ZTBlMzY1MWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge0dyaWQsIE1lbnUsIEltYWdlLCBJY29uLCBDYXJkLCBCdXR0b259IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdmJhcidcbmltcG9ydCBTZWFyY2hFeGFtcGxlU3RhbmRhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2hFeGFtcGxlU3RhbmRhcmQnXG5pbXBvcnQgTWFwIGZyb20gJy4uL2NvbXBvbmVudHMvTWFwJ1xuaW1wb3J0IFNpZGViYXJSaWdodE92ZXJsYXkgZnJvbSAnLi4vY29tcG9uZW50cy9TaWRlYmFyUmlnaHRPdmVybGF5J1xuaW1wb3J0IEF1dGggZnJvbSAnLi4vbW9kdWxlcy9BdXRoJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge2FjdGl2ZUl0ZW06ICdwcml2YXRlJywgbWFwczogQXJyYXkuZnJvbShBcnJheSgxMCkua2V5cygpKS5tYXAobnVtID0+ICdNYXAnICsgbnVtKX1cbiAgICAgICAgdGhpcy5oYW5kbGVJdGVtQ2xpY2sgPSB0aGlzLmhhbmRsZUl0ZW1DbGljay5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuYWRkTWFwID0gdGhpcy5hZGRNYXAuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmRlbGV0ZU1hcCA9IHRoaXMuZGVsZXRlTWFwLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICAvLyBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgLy8gICAgIGZldGNoKCcvcHJvamVjdHMnLCB7XG4gICAgLy8gICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgIC8vICAgICAgICAgaGVhZGVyczoge1xuICAgIC8vICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIC8vICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgYmVhcmVyICR7QXV0aC5nZXRUb2tlbigpfWBcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgLy8gICAgICAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKVxuICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgIC8vICAgICAgICAgICAgIGVsc2VcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgY29sb3I9J3JlZCc+e3Jlcy5zdGF0dXNUZXh0fTwvTGFiZWw+LFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAvLyAgICAgICAgICAgICAgICAgfSlcbiAgICAvLyAgICAgICAgIH0pXG4gICAgLy8gICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShqc29uKSlcbiAgICAvLyAgICAgICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHsgcHJvZmlsZXM6IGpzb24udXNlcnMsIGxvYWRpbmc6IGZhbHNlIH0pXG4gICAgLy8gICAgICAgICB9KVxuICAgIC8vICAgICAgICAgLmNhdGNoKGVyciA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAvLyAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgY29sb3I9J3JlZCc+e2Vycn08L0xhYmVsPixcbiAgICAvLyAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgIC8vICAgICAgICAgfSkpXG4gICAgLy8gfVxuXG4gICAgYWRkTWFwKCkge1xuICAgICAgICBsZXQgbWFwcyA9IHRoaXMuc3RhdGUubWFwc1xuICAgICAgICBtYXBzLnB1c2goJ01hcHMnK21hcHMubGVuZ3RoKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWFwcyB9KVxuICAgIH1cblxuICAgIGRlbGV0ZU1hcChpKSB7XG4gICAgICAgIGxldCBtYXBzID0gdGhpcy5zdGF0ZS5tYXBzXG4gICAgICAgIG1hcHMgPSBtYXBzLnNwbGljZShpLCAxKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWFwcyB9KVxuICAgIH1cblxuICAgIGhhbmRsZUl0ZW1DbGljayhlLCB7bmFtZX0pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlSXRlbTogbmFtZX0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7YWN0aXZlSXRlbX0gPSB0aGlzLnN0YXRlXG4gICAgICAgIGNvbnN0IGNvbHMgPSB7XG4gICAgICAgICAgICAnY29tcHV0ZXInOiA0LFxuICAgICAgICAgICAgJ3RhYmxldCc6IDIsXG4gICAgICAgICAgICAnbW9iaWxlJzogMVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPE5hdkJhci8+XG4gICAgICAgICAgICAgICAgey8qPFNpZGViYXJSaWdodE92ZXJsYXkgY29udGVudD17Ki99XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxNn0+XG4gICAgICAgICAgICAgICAgICAgIHsgLyo8U2VhcmNoRXhhbXBsZVN0YW5kYXJkIHN0cmV0Y2hlZCBzb3VyY2U9e21hcHN9Lz4gKi8gfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUgZmx1aWQgdmVydGljYWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT0nYWRkJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5hZGRNYXB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBuZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPSdwcml2YXRlJyBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdwcml2YXRlJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9J3NoYXJlZCcgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnc2hhcmVkJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBzdHJldGNoZWQgd2lkdGg9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKGNvbHMpLm1hcChjb2xzTmFtZSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWy4uLkFycmF5KE1hdGgucm91bmQodGhpcy5zdGF0ZS5tYXBzLmxlbmd0aCAvIGNvbHNbY29sc05hbWVdKSkua2V5cygpXS5tYXAocm93ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Sb3cgY29sdW1ucz17Y29sc1tjb2xzTmFtZV19IG9ubHk9e2NvbHNOYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1suLi5BcnJheShjb2xzW2NvbHNOYW1lXSkua2V5cygpXS5tYXAoY29sID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWFwIG5hbWU9e2BNYXAgJHtyb3cgKiBjb2xzW2NvbHNOYW1lXSArIGNvbCArIDF9YH0gZGVzYz0nRGVzY3JpcHRpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlPScwNS4xMS4xNycgb25EZWxldGVDbGlja2VkPXsoKSA9PiB0aGlzLmRlbGV0ZU1hcChyb3cgKiBjb2xzW2NvbHNOYW1lXSl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICB7LyogIC8+Ki99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udGFpbmVycy9NYXBzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==