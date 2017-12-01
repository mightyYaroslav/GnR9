webpackHotUpdate(0,{

/***/ 920:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(18);

var _Map = __webpack_require__(910);

var _Map2 = _interopRequireDefault(_Map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MapsGrid = function (_Component) {
    _inherits(MapsGrid, _Component);

    function MapsGrid() {
        _classCallCheck(this, MapsGrid);

        return _possibleConstructorReturn(this, (MapsGrid.__proto__ || Object.getPrototypeOf(MapsGrid)).apply(this, arguments));
    }

    _createClass(MapsGrid, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var cols = {
                'computer': 4,
                'tablet': 2,
                'mobile': 1
            };
            return _react2.default.createElement(
                _semanticUiReact.Grid,
                null,
                Object.keys(cols).map(function (colsName) {
                    var rows = Math.ceil(_this2.props.maps.length / cols[colsName]);
                    var lastRowCols = _this2.props.maps.length % cols[colsName];
                    lastRowCols = lastRowCols === 0 ? cols[colsName] : lastRowCols;
                    return [].concat(_toConsumableArray(Array(rows).keys())).map(function (row) {
                        return _react2.default.createElement(
                            _semanticUiReact.Grid.Row,
                            { columns: cols[colsName], only: colsName },
                            [].concat(_toConsumableArray(Array(row === rows - 1 ? lastRowCols : cols[colsName]).keys())).map(function (col) {
                                return _react2.default.createElement(
                                    _semanticUiReact.Grid.Column,
                                    null,
                                    _react2.default.createElement(_Map2.default, { name: _this2.props.maps[row * cols[colsName] + col].name,
                                        desc: _this2.props.maps[row * cols[colsName] + col].desc,
                                        date: _this2.props.maps[row * cols[colsName] + col].date,
                                        onCardClicked: function onCardClicked() {
                                            return _this2.props.goToCanvas(_this2.props.maps[row * cols[colsName] + col].id);
                                        },
                                        onInfoClicked: function onInfoClicked(e) {
                                            e.stopPropagation();
                                            _this2.props.toggleSidebar(_this2.props.maps[row * cols[colsName] + col]);
                                        },
                                        onDeleteClicked: function onDeleteClicked(e) {
                                            e.stopPropagation();
                                            _this2.props.deleteMap(row * cols[colsName] + col);
                                        } })
                                );
                            })
                        );
                    });
                })
            );
        }
    }]);

    return MapsGrid;
}(_react.Component);

exports.default = MapsGrid;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYXBzR3JpZC5qcyJdLCJuYW1lcyI6WyJNYXBzR3JpZCIsImNvbHMiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwicm93cyIsIk1hdGgiLCJjZWlsIiwicHJvcHMiLCJtYXBzIiwibGVuZ3RoIiwiY29sc05hbWUiLCJsYXN0Um93Q29scyIsIkFycmF5Iiwicm93IiwiY29sIiwibmFtZSIsImRlc2MiLCJkYXRlIiwiZ29Ub0NhbnZhcyIsImlkIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsInRvZ2dsZVNpZGViYXIiLCJkZWxldGVNYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFE7Ozs7Ozs7Ozs7O2lDQUVSO0FBQUE7O0FBQ0wsZ0JBQU1DLE9BQU87QUFDVCw0QkFBWSxDQURIO0FBRVQsMEJBQVUsQ0FGRDtBQUdULDBCQUFVO0FBSEQsYUFBYjtBQUtBLG1CQUNJO0FBQUE7QUFBQTtBQUNLQyx1QkFBT0MsSUFBUCxDQUFZRixJQUFaLEVBQWtCRyxHQUFsQixDQUFzQixvQkFBWTtBQUMvQix3QkFBTUMsT0FBT0MsS0FBS0MsSUFBTCxDQUFVLE9BQUtDLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQkMsTUFBaEIsR0FBeUJULEtBQUtVLFFBQUwsQ0FBbkMsQ0FBYjtBQUNBLHdCQUFJQyxjQUFjLE9BQUtKLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQkMsTUFBaEIsR0FBeUJULEtBQUtVLFFBQUwsQ0FBM0M7QUFDQUMsa0NBQWNBLGdCQUFnQixDQUFoQixHQUFvQlgsS0FBS1UsUUFBTCxDQUFwQixHQUFxQ0MsV0FBbkQ7QUFDQSwyQkFBTyw2QkFBSUMsTUFBTVIsSUFBTixFQUFZRixJQUFaLEVBQUosR0FBd0JDLEdBQXhCLENBQTRCO0FBQUEsK0JBQy9CO0FBQUEsa0RBQU0sR0FBTjtBQUFBLDhCQUFVLFNBQVNILEtBQUtVLFFBQUwsQ0FBbkIsRUFBbUMsTUFBTUEsUUFBekM7QUFDSyx5REFBSUUsTUFBTUMsUUFBUVQsT0FBTyxDQUFmLEdBQW1CTyxXQUFuQixHQUFpQ1gsS0FBS1UsUUFBTCxDQUF2QyxFQUF1RFIsSUFBdkQsRUFBSixHQUFtRUMsR0FBbkUsQ0FBdUU7QUFBQSx1Q0FDcEU7QUFBQSwwREFBTSxNQUFOO0FBQUE7QUFDSSxtRkFBSyxNQUFPLE9BQUtJLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQkssTUFBTWIsS0FBS1UsUUFBTCxDQUFOLEdBQXVCSSxHQUF2QyxFQUE0Q0MsSUFBeEQ7QUFDSyw4Q0FBTyxPQUFLUixLQUFMLENBQVdDLElBQVgsQ0FBZ0JLLE1BQU1iLEtBQUtVLFFBQUwsQ0FBTixHQUF1QkksR0FBdkMsRUFBNENFLElBRHhEO0FBRUssOENBQU8sT0FBS1QsS0FBTCxDQUFXQyxJQUFYLENBQWdCSyxNQUFNYixLQUFLVSxRQUFMLENBQU4sR0FBdUJJLEdBQXZDLEVBQTRDRyxJQUZ4RDtBQUdLLHVEQUFlO0FBQUEsbURBQU0sT0FBS1YsS0FBTCxDQUFXVyxVQUFYLENBQXNCLE9BQUtYLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQkssTUFBTWIsS0FBS1UsUUFBTCxDQUFOLEdBQXVCSSxHQUF2QyxFQUE0Q0ssRUFBbEUsQ0FBTjtBQUFBLHlDQUhwQjtBQUlLLHVEQUFlLHVCQUFDQyxDQUFELEVBQU87QUFDbEJBLDhDQUFFQyxlQUFGO0FBQ0EsbURBQUtkLEtBQUwsQ0FBV2UsYUFBWCxDQUF5QixPQUFLZixLQUFMLENBQVdDLElBQVgsQ0FBZ0JLLE1BQU1iLEtBQUtVLFFBQUwsQ0FBTixHQUF1QkksR0FBdkMsQ0FBekI7QUFDSCx5Q0FQTjtBQVFLLHlEQUFpQix5QkFBQ00sQ0FBRCxFQUFPO0FBQ3BCQSw4Q0FBRUMsZUFBRjtBQUNBLG1EQUFLZCxLQUFMLENBQVdnQixTQUFYLENBQXFCVixNQUFNYixLQUFLVSxRQUFMLENBQU4sR0FBdUJJLEdBQTVDO0FBQ0gseUNBWE47QUFESixpQ0FEb0U7QUFBQSw2QkFBdkU7QUFETCx5QkFEK0I7QUFBQSxxQkFBNUIsQ0FBUDtBQW9CSCxpQkF4QkE7QUFETCxhQURKO0FBNkJIOzs7Ozs7a0JBckNnQmYsUSIsImZpbGUiOiIwLmMwMWI5ZTc1MDIwMmM5MTMyYzA0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtHcmlkLCBGb3JtLCBJbnB1dCwgTGFiZWwsIFRleHRBcmVhLCBTZWdtZW50LCBNZW51LCBJbWFnZSwgSWNvbiwgQ2FyZCwgQnV0dG9uLCBMb2FkZXIsIERpbW1lcn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgTWFwIGZyb20gJy4uL2NvbXBvbmVudHMvTWFwJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBzR3JpZCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGNvbHMgPSB7XG4gICAgICAgICAgICAnY29tcHV0ZXInOiA0LFxuICAgICAgICAgICAgJ3RhYmxldCc6IDIsXG4gICAgICAgICAgICAnbW9iaWxlJzogMVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMoY29scykubWFwKGNvbHNOYW1lID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93cyA9IE1hdGguY2VpbCh0aGlzLnByb3BzLm1hcHMubGVuZ3RoIC8gY29sc1tjb2xzTmFtZV0pXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXN0Um93Q29scyA9IHRoaXMucHJvcHMubWFwcy5sZW5ndGggJSBjb2xzW2NvbHNOYW1lXVxuICAgICAgICAgICAgICAgICAgICBsYXN0Um93Q29scyA9IGxhc3RSb3dDb2xzID09PSAwID8gY29sc1tjb2xzTmFtZV0gOiBsYXN0Um93Q29sc1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWy4uLkFycmF5KHJvd3MpLmtleXMoKV0ubWFwKHJvdyA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93IGNvbHVtbnM9e2NvbHNbY29sc05hbWVdfSBvbmx5PXtjb2xzTmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1suLi5BcnJheShyb3cgPT09IHJvd3MgLSAxID8gbGFzdFJvd0NvbHMgOiBjb2xzW2NvbHNOYW1lXSkua2V5cygpXS5tYXAoY29sID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1hcCBuYW1lPXsgdGhpcy5wcm9wcy5tYXBzW3JvdyAqIGNvbHNbY29sc05hbWVdICsgY29sXS5uYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzYz17IHRoaXMucHJvcHMubWFwc1tyb3cgKiBjb2xzW2NvbHNOYW1lXSArIGNvbF0uZGVzYyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9eyB0aGlzLnByb3BzLm1hcHNbcm93ICogY29sc1tjb2xzTmFtZV0gKyBjb2xdLmRhdGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNhcmRDbGlja2VkPXsoKSA9PiB0aGlzLnByb3BzLmdvVG9DYW52YXModGhpcy5wcm9wcy5tYXBzW3JvdyAqIGNvbHNbY29sc05hbWVdICsgY29sXS5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5mb0NsaWNrZWQ9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZVNpZGViYXIodGhpcy5wcm9wcy5tYXBzW3JvdyAqIGNvbHNbY29sc05hbWVdICsgY29sXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EZWxldGVDbGlja2VkPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kZWxldGVNYXAocm93ICogY29sc1tjb2xzTmFtZV0gKyBjb2wpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9NYXBzR3JpZC5qcyJdLCJzb3VyY2VSb290IjoiIn0=