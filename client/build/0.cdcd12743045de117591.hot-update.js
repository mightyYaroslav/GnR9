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

                                // this.state.maps.map((m, i) => (
                                //     <div>
                                //     { i % cols[colsName] === 0 &&
                                //     <Grid.Row columns={cols[colsName]} only={colsName}>
                                //     }
                                //     <Grid.Column>
                                //         <Map name={`Map ${i + 1}`} desc='Description'
                                //              date='05.11.17' onDeleteClicked={() => this.deleteMap(i)}/>
                                //     </Grid.Column>
                                //     {i % cols[colsName] === 0 &&
                                //         </Grid.Row>
                                //     }
                                //     </div>
                                // )
                                var rows = Math.ceil(_this2.state.maps.length / cols[colsName]);
                                return [].concat(_toConsumableArray(Array(rows).keys())).map(function (row) {
                                    return _react2.default.createElement(
                                        _semanticUiReact.Grid.Row,
                                        { columns: cols[colsName], only: colsName },
                                        [].concat(_toConsumableArray(Array(row === rows - 1 ? _this2.state.maps.length % cols[colsName] : cols[colsName]).keys())).map(function (col) {
                                            return _react2.default.createElement(
                                                _semanticUiReact.Grid.Column,
                                                null,
                                                _react2.default.createElement(_Map2.default, { name: 'Map ' + (row * cols[colsName] + col + 1),
                                                    desc: 'Description',
                                                    date: '05.11.17',
                                                    onDeleteClicked: function onDeleteClicked() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9NYXBzLmpzIl0sIm5hbWVzIjpbIk1hcHMiLCJwcm9wcyIsInN0YXRlIiwiYWN0aXZlSXRlbSIsIm1hcHMiLCJBcnJheSIsImZyb20iLCJrZXlzIiwibWFwIiwibnVtIiwiaGFuZGxlSXRlbUNsaWNrIiwiYmluZCIsImFkZE1hcCIsImRlbGV0ZU1hcCIsInB1c2giLCJsZW5ndGgiLCJzZXRTdGF0ZSIsImkiLCJzcGxpY2UiLCJlIiwibmFtZSIsImNvbHMiLCJPYmplY3QiLCJyb3dzIiwiTWF0aCIsImNlaWwiLCJjb2xzTmFtZSIsInJvdyIsImNvbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7QUFFakIsa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWEsRUFBQ0MsWUFBWSxTQUFiLEVBQXdCQyxNQUFNQyxNQUFNQyxJQUFOLENBQVdELE1BQU0sRUFBTixFQUFVRSxJQUFWLEVBQVgsRUFBNkJDLEdBQTdCLENBQWlDO0FBQUEsdUJBQU8sUUFBUUMsR0FBZjtBQUFBLGFBQWpDLENBQTlCLEVBQWI7QUFDQSxjQUFLQyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJDLElBQXJCLE9BQXZCO0FBQ0EsY0FBS0MsTUFBTCxHQUFjLE1BQUtBLE1BQUwsQ0FBWUQsSUFBWixPQUFkO0FBQ0EsY0FBS0UsU0FBTCxHQUFpQixNQUFLQSxTQUFMLENBQWVGLElBQWYsT0FBakI7QUFMZTtBQU1sQjs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUQyQjtBQUFBLGlDQUE1QixDQUFQO0FBWUgsNkJBN0JBO0FBREw7QUFESjtBQWxCSjtBQUhSLGFBREo7QUE0REg7Ozs7OztrQkF6SGdCMUIsSSIsImZpbGUiOiIwLmNkY2QxMjc0MzA0NWRlMTE3NTkxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtHcmlkLCBNZW51LCBJbWFnZSwgSWNvbiwgQ2FyZCwgQnV0dG9ufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZiYXInXG5pbXBvcnQgU2VhcmNoRXhhbXBsZVN0YW5kYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoRXhhbXBsZVN0YW5kYXJkJ1xuaW1wb3J0IE1hcCBmcm9tICcuLi9jb21wb25lbnRzL01hcCdcbmltcG9ydCBTaWRlYmFyUmlnaHRPdmVybGF5IGZyb20gJy4uL2NvbXBvbmVudHMvU2lkZWJhclJpZ2h0T3ZlcmxheSdcbmltcG9ydCBBdXRoIGZyb20gJy4uL21vZHVsZXMvQXV0aCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwcyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHthY3RpdmVJdGVtOiAncHJpdmF0ZScsIG1hcHM6IEFycmF5LmZyb20oQXJyYXkoMTApLmtleXMoKSkubWFwKG51bSA9PiAnTWFwJyArIG51bSl9XG4gICAgICAgIHRoaXMuaGFuZGxlSXRlbUNsaWNrID0gdGhpcy5oYW5kbGVJdGVtQ2xpY2suYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmFkZE1hcCA9IHRoaXMuYWRkTWFwLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5kZWxldGVNYXAgPSB0aGlzLmRlbGV0ZU1hcC5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgLy8gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIC8vICAgICBmZXRjaCgnL3Byb2plY3RzJywge1xuICAgIC8vICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAvLyAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAvLyAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAvLyAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYGJlYXJlciAke0F1dGguZ2V0VG9rZW4oKX1gXG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH0pXG4gICAgLy8gICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgIC8vICAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMClcbiAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAvLyAgICAgICAgICAgICBlbHNlXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntyZXMuc3RhdHVzVGV4dH08L0xhYmVsPixcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgLy8gICAgICAgICAgICAgICAgIH0pXG4gICAgLy8gICAgICAgICB9KVxuICAgIC8vICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoanNvbikpXG4gICAgLy8gICAgICAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7IHByb2ZpbGVzOiBqc29uLnVzZXJzLCBsb2FkaW5nOiBmYWxzZSB9KVxuICAgIC8vICAgICAgICAgfSlcbiAgICAvLyAgICAgICAgIC5jYXRjaChlcnIgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgLy8gICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntlcnJ9PC9MYWJlbD4sXG4gICAgLy8gICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAvLyAgICAgICAgIH0pKVxuICAgIC8vIH1cblxuICAgIGFkZE1hcCgpIHtcbiAgICAgICAgbGV0IG1hcHMgPSB0aGlzLnN0YXRlLm1hcHNcbiAgICAgICAgbWFwcy5wdXNoKCdNYXBzJyttYXBzLmxlbmd0aClcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1hcHMgfSlcbiAgICB9XG5cbiAgICBkZWxldGVNYXAoaSkge1xuICAgICAgICBsZXQgbWFwcyA9IHRoaXMuc3RhdGUubWFwc1xuICAgICAgICBtYXBzLnNwbGljZShpLCAxKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWFwcyB9KVxuICAgIH1cblxuICAgIGhhbmRsZUl0ZW1DbGljayhlLCB7bmFtZX0pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlSXRlbTogbmFtZX0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7YWN0aXZlSXRlbX0gPSB0aGlzLnN0YXRlXG4gICAgICAgIGNvbnN0IGNvbHMgPSB7XG4gICAgICAgICAgICAnY29tcHV0ZXInOiA0LFxuICAgICAgICAgICAgJ3RhYmxldCc6IDIsXG4gICAgICAgICAgICAnbW9iaWxlJzogMVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPE5hdkJhci8+XG4gICAgICAgICAgICAgICAgey8qPFNpZGViYXJSaWdodE92ZXJsYXkgY29udGVudD17Ki99XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxNn0+XG4gICAgICAgICAgICAgICAgICAgIHsgLyo8U2VhcmNoRXhhbXBsZVN0YW5kYXJkIHN0cmV0Y2hlZCBzb3VyY2U9e21hcHN9Lz4gKi8gfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUgZmx1aWQgdmVydGljYWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT0nYWRkJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5hZGRNYXB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBuZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPSdwcml2YXRlJyBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdwcml2YXRlJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9J3NoYXJlZCcgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnc2hhcmVkJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBzdHJldGNoZWQgd2lkdGg9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKGNvbHMpLm1hcChjb2xzTmFtZSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc3RhdGUubWFwcy5tYXAoKG0sIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHsgaSAlIGNvbHNbY29sc05hbWVdID09PSAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgPEdyaWQuUm93IGNvbHVtbnM9e2NvbHNbY29sc05hbWVdfSBvbmx5PXtjb2xzTmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIDxHcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPE1hcCBuYW1lPXtgTWFwICR7aSArIDF9YH0gZGVzYz0nRGVzY3JpcHRpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgZGF0ZT0nMDUuMTEuMTcnIG9uRGVsZXRlQ2xpY2tlZD17KCkgPT4gdGhpcy5kZWxldGVNYXAoaSl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHtpICUgY29sc1tjb2xzTmFtZV0gPT09IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dzID0gTWF0aC5jZWlsKHRoaXMuc3RhdGUubWFwcy5sZW5ndGggLyBjb2xzW2NvbHNOYW1lXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbLi4uQXJyYXkocm93cykua2V5cygpXS5tYXAocm93ID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdyBjb2x1bW5zPXtjb2xzW2NvbHNOYW1lXX0gb25seT17Y29sc05hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1suLi5BcnJheShyb3cgPT09IHJvd3MgLSAxID8gdGhpcy5zdGF0ZS5tYXBzLmxlbmd0aCAlIGNvbHNbY29sc05hbWVdIDogY29sc1tjb2xzTmFtZV0pLmtleXMoKV0ubWFwKGNvbCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWFwIG5hbWU9e2BNYXAgJHtyb3cgKiBjb2xzW2NvbHNOYW1lXSArIGNvbCArIDF9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjPSdEZXNjcmlwdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlPScwNS4xMS4xNydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRlbGV0ZUNsaWNrZWQ9eygpID0+IHRoaXMuZGVsZXRlTWFwKHJvdyAqIGNvbHNbY29sc05hbWVdKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICB7LyogIC8+Ki99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udGFpbmVycy9NYXBzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==