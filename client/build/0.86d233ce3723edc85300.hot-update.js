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
            this.setState({ maps: this.state.maps.splice(i, 1) });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9NYXBzLmpzIl0sIm5hbWVzIjpbIk1hcHMiLCJwcm9wcyIsInN0YXRlIiwiYWN0aXZlSXRlbSIsIm1hcHMiLCJBcnJheSIsImZyb20iLCJrZXlzIiwibWFwIiwibnVtIiwiaGFuZGxlSXRlbUNsaWNrIiwiYmluZCIsImFkZE1hcCIsImRlbGV0ZU1hcCIsInB1c2giLCJsZW5ndGgiLCJzZXRTdGF0ZSIsImkiLCJzcGxpY2UiLCJlIiwibmFtZSIsImNvbHMiLCJPYmplY3QiLCJNYXRoIiwicm91bmQiLCJjb2xzTmFtZSIsInJvdyIsImNvbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7QUFFakIsa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWEsRUFBQ0MsWUFBWSxTQUFiLEVBQXdCQyxNQUFNQyxNQUFNQyxJQUFOLENBQVdELE1BQU0sRUFBTixFQUFVRSxJQUFWLEVBQVgsRUFBNkJDLEdBQTdCLENBQWlDO0FBQUEsdUJBQU8sUUFBUUMsR0FBZjtBQUFBLGFBQWpDLENBQTlCLEVBQWI7QUFDQSxjQUFLQyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJDLElBQXJCLE9BQXZCO0FBQ0EsY0FBS0MsTUFBTCxHQUFjLE1BQUtBLE1BQUwsQ0FBWUQsSUFBWixPQUFkO0FBQ0EsY0FBS0UsU0FBTCxHQUFpQixNQUFLQSxTQUFMLENBQWVGLElBQWYsT0FBakI7QUFMZTtBQU1sQjs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O2lDQUVTO0FBQ0wsZ0JBQU1QLE9BQU8sS0FBS0YsS0FBTCxDQUFXRSxJQUF4QjtBQUNBQSxpQkFBS1UsSUFBTCxDQUFVLFNBQU9WLEtBQUtXLE1BQXRCO0FBQ0EsaUJBQUtDLFFBQUwsQ0FBYyxFQUFFWixVQUFGLEVBQWQ7QUFDSDs7O2tDQUVTYSxDLEVBQUc7QUFDVCxpQkFBS0QsUUFBTCxDQUFjLEVBQUVaLE1BQU0sS0FBS0YsS0FBTCxDQUFXRSxJQUFYLENBQWdCYyxNQUFoQixDQUF1QkQsQ0FBdkIsRUFBMEIsQ0FBMUIsQ0FBUixFQUFkO0FBQ0g7Ozt3Q0FFZUUsQyxRQUFXO0FBQUEsZ0JBQVBDLElBQU8sUUFBUEEsSUFBTzs7QUFDdkIsaUJBQUtKLFFBQUwsQ0FBYyxFQUFDYixZQUFZaUIsSUFBYixFQUFkO0FBQ0g7OztpQ0FFUTtBQUFBOztBQUFBLGdCQUNFakIsVUFERixHQUNnQixLQUFLRCxLQURyQixDQUNFQyxVQURGOztBQUVMLGdCQUFNa0IsT0FBTztBQUNULDRCQUFZLENBREg7QUFFVCwwQkFBVSxDQUZEO0FBR1QsMEJBQVU7QUFIRCxhQUFiOztBQU1BLG1CQUNJO0FBQUE7QUFBQTtBQUNJLHFFQURKO0FBR1E7QUFBQTtBQUFBO0FBQ0ksd0VBQU0sTUFBTixJQUFhLE9BQU8sRUFBcEIsR0FESjtBQUlJO0FBQUEsOENBQU0sTUFBTjtBQUFBLDBCQUFhLE9BQU8sQ0FBcEI7QUFDSTtBQUFBO0FBQUEsOEJBQU0sV0FBTixFQUFZLGNBQVo7QUFDSTtBQUFBLHNEQUFNLElBQU47QUFBQSxrQ0FBVyxNQUFLLEtBQWhCO0FBQ0k7QUFBQTtBQUFBLHNDQUFRLFNBQVMsS0FBS1QsTUFBdEI7QUFBQTtBQUFBO0FBREosNkJBREo7QUFNSSxnRkFBTSxJQUFOLElBQVcsTUFBSyxTQUFoQixFQUEwQixRQUFRVCxlQUFlLFNBQWpEO0FBQ1cseUNBQVMsS0FBS08sZUFEekIsR0FOSjtBQVFJLGdGQUFNLElBQU4sSUFBVyxNQUFLLFFBQWhCLEVBQXlCLFFBQVFQLGVBQWUsUUFBaEQ7QUFDVyx5Q0FBUyxLQUFLTyxlQUR6QjtBQVJKO0FBREoscUJBSko7QUFrQkk7QUFBQSw4Q0FBTSxNQUFOO0FBQUEsMEJBQWEsZUFBYixFQUF1QixPQUFPLEVBQTlCO0FBQ0k7QUFBQTtBQUFBO0FBQ0tZLG1DQUFPZixJQUFQLENBQVljLElBQVosRUFBa0JiLEdBQWxCLENBQXNCO0FBQUEsdUNBQ25CLDZCQUFJSCxNQUFNa0IsS0FBS0MsS0FBTCxDQUFXLE9BQUt0QixLQUFMLENBQVdFLElBQVgsQ0FBZ0JXLE1BQWhCLEdBQXlCTSxLQUFLSSxRQUFMLENBQXBDLENBQU4sRUFBMkRsQixJQUEzRCxFQUFKLEdBQXVFQyxHQUF2RSxDQUEyRTtBQUFBLDJDQUN2RTtBQUFBLDhEQUFNLEdBQU47QUFBQSwwQ0FBVSxTQUFTYSxLQUFLSSxRQUFMLENBQW5CLEVBQW1DLE1BQU1BLFFBQXpDO0FBQ0sscUVBQUlwQixNQUFNZ0IsS0FBS0ksUUFBTCxDQUFOLEVBQXNCbEIsSUFBdEIsRUFBSixHQUFrQ0MsR0FBbEMsQ0FBc0M7QUFBQSxtREFDbkM7QUFBQSxzRUFBTSxNQUFOO0FBQUE7QUFDSSwrRkFBSyxnQkFBYWtCLE1BQU1MLEtBQUtJLFFBQUwsQ0FBTixHQUF1QkUsR0FBdkIsR0FBNkIsQ0FBMUMsQ0FBTCxFQUFvRCxNQUFLLGFBQXpEO0FBQ0ssMERBQUssVUFEVixFQUNxQixpQkFBaUI7QUFBQSwrREFBTSxPQUFLZCxTQUFMLENBQWVhLE1BQU1MLEtBQUtJLFFBQUwsQ0FBckIsQ0FBTjtBQUFBLHFEQUR0QztBQURKLDZDQURtQztBQUFBLHlDQUF0QztBQURMLHFDQUR1RTtBQUFBLGlDQUEzRSxDQURtQjtBQUFBLDZCQUF0QjtBQURMO0FBREo7QUFsQko7QUFIUixhQURKO0FBMENIOzs7Ozs7a0JBckdnQnpCLEkiLCJmaWxlIjoiMC44NmQyMzNjZTM3MjNlZGM4NTMwMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7R3JpZCwgTWVudSwgSW1hZ2UsIEljb24sIENhcmQsIEJ1dHRvbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyJ1xuaW1wb3J0IFNlYXJjaEV4YW1wbGVTdGFuZGFyZCBmcm9tICcuLi9jb21wb25lbnRzL1NlYXJjaEV4YW1wbGVTdGFuZGFyZCdcbmltcG9ydCBNYXAgZnJvbSAnLi4vY29tcG9uZW50cy9NYXAnXG5pbXBvcnQgU2lkZWJhclJpZ2h0T3ZlcmxheSBmcm9tICcuLi9jb21wb25lbnRzL1NpZGViYXJSaWdodE92ZXJsYXknXG5pbXBvcnQgQXV0aCBmcm9tICcuLi9tb2R1bGVzL0F1dGgnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7YWN0aXZlSXRlbTogJ3ByaXZhdGUnLCBtYXBzOiBBcnJheS5mcm9tKEFycmF5KDEwKS5rZXlzKCkpLm1hcChudW0gPT4gJ01hcCcgKyBudW0pfVxuICAgICAgICB0aGlzLmhhbmRsZUl0ZW1DbGljayA9IHRoaXMuaGFuZGxlSXRlbUNsaWNrLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5hZGRNYXAgPSB0aGlzLmFkZE1hcC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuZGVsZXRlTWFwID0gdGhpcy5kZWxldGVNYXAuYmluZCh0aGlzKVxuICAgIH1cblxuICAgIC8vIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAvLyAgICAgZmV0Y2goJy9wcm9qZWN0cycsIHtcbiAgICAvLyAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgLy8gICAgICAgICBoZWFkZXJzOiB7XG4gICAgLy8gICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgLy8gICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBiZWFyZXIgJHtBdXRoLmdldFRva2VuKCl9YFxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9KVxuICAgIC8vICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAvLyAgICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApXG4gICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgLy8gICAgICAgICAgICAgZWxzZVxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57cmVzLnN0YXR1c1RleHR9PC9MYWJlbD4sXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgIC8vICAgICAgICAgICAgICAgICB9KVxuICAgIC8vICAgICAgICAgfSlcbiAgICAvLyAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGpzb24pKVxuICAgIC8vICAgICAgICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBwcm9maWxlczoganNvbi51c2VycywgbG9hZGluZzogZmFsc2UgfSlcbiAgICAvLyAgICAgICAgIH0pXG4gICAgLy8gICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57ZXJyfTwvTGFiZWw+LFxuICAgIC8vICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgLy8gICAgICAgICB9KSlcbiAgICAvLyB9XG5cbiAgICBhZGRNYXAoKSB7XG4gICAgICAgIGNvbnN0IG1hcHMgPSB0aGlzLnN0YXRlLm1hcHNcbiAgICAgICAgbWFwcy5wdXNoKCdNYXBzJyttYXBzLmxlbmd0aClcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1hcHMgfSlcbiAgICB9XG5cbiAgICBkZWxldGVNYXAoaSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWFwczogdGhpcy5zdGF0ZS5tYXBzLnNwbGljZShpLCAxKX0pXG4gICAgfVxuXG4gICAgaGFuZGxlSXRlbUNsaWNrKGUsIHtuYW1lfSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHthY3RpdmVJdGVtOiBuYW1lfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHthY3RpdmVJdGVtfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgY29uc3QgY29scyA9IHtcbiAgICAgICAgICAgICdjb21wdXRlcic6IDQsXG4gICAgICAgICAgICAndGFibGV0JzogMixcbiAgICAgICAgICAgICdtb2JpbGUnOiAxXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8TmF2QmFyLz5cbiAgICAgICAgICAgICAgICB7Lyo8U2lkZWJhclJpZ2h0T3ZlcmxheSBjb250ZW50PXsqL31cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezE2fT5cbiAgICAgICAgICAgICAgICAgICAgeyAvKjxTZWFyY2hFeGFtcGxlU3RhbmRhcmQgc3RyZXRjaGVkIHNvdXJjZT17bWFwc30vPiAqLyB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudSBmbHVpZCB2ZXJ0aWNhbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPSdhZGQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFkZE1hcH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIG5ld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9J3ByaXZhdGUnIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ3ByaXZhdGUnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT0nc2hhcmVkJyBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdzaGFyZWQnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHN0cmV0Y2hlZCB3aWR0aD17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMoY29scykubWFwKGNvbHNOYW1lID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbLi4uQXJyYXkoTWF0aC5yb3VuZCh0aGlzLnN0YXRlLm1hcHMubGVuZ3RoIC8gY29sc1tjb2xzTmFtZV0pKS5rZXlzKCldLm1hcChyb3cgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdyBjb2x1bW5zPXtjb2xzW2NvbHNOYW1lXX0gb25seT17Y29sc05hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Wy4uLkFycmF5KGNvbHNbY29sc05hbWVdKS5rZXlzKCldLm1hcChjb2wgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYXAgbmFtZT17YE1hcCAke3JvdyAqIGNvbHNbY29sc05hbWVdICsgY29sICsgMX1gfSBkZXNjPSdEZXNjcmlwdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9JzA1LjExLjE3JyBvbkRlbGV0ZUNsaWNrZWQ9eygpID0+IHRoaXMuZGVsZXRlTWFwKHJvdyAqIGNvbHNbY29sc05hbWVdKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIHsvKiAgLz4qL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250YWluZXJzL01hcHMuanMiXSwic291cmNlUm9vdCI6IiJ9