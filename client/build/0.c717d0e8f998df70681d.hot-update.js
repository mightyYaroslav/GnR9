webpackHotUpdate(0,{

/***/ 896:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _formsySemanticUiReact = __webpack_require__(256);

var _reactDropzone = __webpack_require__(901);

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _semanticUiReact = __webpack_require__(18);

var _navbar = __webpack_require__(74);

var _navbar2 = _interopRequireDefault(_navbar);

var _logo = __webpack_require__(159);

var _logo2 = _interopRequireDefault(_logo);

var _Auth = __webpack_require__(100);

var _Auth2 = _interopRequireDefault(_Auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var errorLabel = _react2.default.createElement(_semanticUiReact.Label, { color: 'red', pointing: 'above' });

var Profile = function (_Component) {
    _inherits(Profile, _Component);

    function Profile(props) {
        _classCallCheck(this, Profile);

        var _this = _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));

        _this.state = {
            email: _Auth2.default.getUser().email,
            name: _Auth2.default.getUser().name,
            errorLabel: '',
            dropzoneRef: null,
            image: _Auth2.default.getUser().image,
            imageUrl: ''
        };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(Profile, [{
        key: 'handleChange',
        value: function handleChange(e) {
            var _setState;

            var _e$target = e.target,
                name = _e$target.name,
                value = _e$target.value;

            this.setState((_setState = {}, _defineProperty(_setState, name, value), _defineProperty(_setState, 'errorLabel', ''), _setState));
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            var _this2 = this;

            var formData = new FormData();
            var _arr = ['email', 'name', 'image'];
            for (var _i = 0; _i < _arr.length; _i++) {
                var field = _arr[_i];
                formData.append(field, this.state[field]);
            }fetch('/profile', {
                method: 'PUT',
                headers: {
                    "Authorization": 'bearer ' + _Auth2.default.getToken()
                },
                body: formData
            }).then(function (res) {
                if (res.status === 200) return res.json();else if (res.status === 400) _this2.setState({
                    errorLabel: _react2.default.createElement(
                        _semanticUiReact.Label,
                        { as: 'a', color: 'red' },
                        'Can\'t login'
                    )
                });else _this2.setState({
                    errorLabel: _react2.default.createElement(
                        _semanticUiReact.Label,
                        { as: 'a', color: 'red' },
                        res.statusText
                    )
                });
            }).then(function (json) {
                _Auth2.default.updateUser(json.user);
            }).catch(function (err) {
                return _this2.setState({
                    errorLabel: _react2.default.createElement(
                        _semanticUiReact.Label,
                        { as: 'a', color: 'red' },
                        err || "Error"
                    )
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_navbar2.default, null),
                _react2.default.createElement(
                    _semanticUiReact.Segment,
                    { padded: true },
                    _react2.default.createElement(
                        _formsySemanticUiReact.Form,
                        { onValidSubmit: this.handleSubmit },
                        this.state.errorLabel,
                        _react2.default.createElement(
                            _semanticUiReact.Grid,
                            null,
                            _react2.default.createElement(
                                _semanticUiReact.Grid.Column,
                                { width: 4 },
                                _react2.default.createElement(
                                    _reactDropzone2.default,
                                    { onDrop: function onDrop(accepted, rejected) {
                                            var reader = new FileReader();
                                            reader.onload = function () {
                                                _this3.setState({
                                                    image: accepted[0],
                                                    imageUrl: reader.result
                                                });
                                            };
                                            reader.readAsDataUrl(accepted[0]);
                                        } },
                                    _react2.default.createElement(
                                        _semanticUiReact.Label,
                                        { as: 'a', color: 'teal', ribbon: true },
                                        'Drop new avatar'
                                    ),
                                    _react2.default.createElement(_semanticUiReact.Image, {
                                        src: this.state.imageUrl,
                                        circular: true })
                                )
                            ),
                            _react2.default.createElement(
                                _semanticUiReact.Grid.Column,
                                { stretched: true, width: 12 },
                                _react2.default.createElement(_formsySemanticUiReact.Form.Input, {
                                    name: 'name',
                                    label: 'Username',
                                    value: this.state.name,
                                    onChange: this.handleChange,
                                    instantValidation: true,
                                    required: true,
                                    validations: {
                                        minLength: 5,
                                        maxLength: 20
                                    },
                                    validationErrors: {
                                        minLength: 'Username should not contain less than 5 characters',
                                        maxLength: 'Username should not contain more than 20 characters',
                                        isDefaultRequiredValue: 'Username is required'
                                    },
                                    errorLabel: errorLabel
                                }),
                                _react2.default.createElement(_formsySemanticUiReact.Form.Input, {
                                    name: 'email',
                                    label: 'Email',
                                    value: this.state.email,
                                    onChange: this.handleChange,
                                    instantValidation: true,
                                    required: true,
                                    validations: {
                                        isEmail: true,
                                        maxLength: 50
                                    },
                                    validationErrors: {
                                        isEmail: 'Email should be valid',
                                        maxLength: 'Email should not contain more than 50 characters',
                                        isDefaultRequiredValue: 'Email is required'
                                    },
                                    errorLabel: errorLabel
                                }),
                                _react2.default.createElement(
                                    _semanticUiReact.Button,
                                    { primary: true, fluid: true, type: 'submit' },
                                    'Save'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Profile;
}(_react.Component);

exports.default = Profile;

/***/ }),

/***/ 897:
false,

/***/ 898:
false,

/***/ 899:
false,

/***/ 900:
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Qcm9maWxlLmpzIl0sIm5hbWVzIjpbImVycm9yTGFiZWwiLCJQcm9maWxlIiwicHJvcHMiLCJzdGF0ZSIsImVtYWlsIiwiZ2V0VXNlciIsIm5hbWUiLCJkcm9wem9uZVJlZiIsImltYWdlIiwiaW1hZ2VVcmwiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlU3VibWl0IiwiZSIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGUiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZmllbGQiLCJhcHBlbmQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJnZXRUb2tlbiIsImJvZHkiLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwianNvbiIsInN0YXR1c1RleHQiLCJ1cGRhdGVVc2VyIiwidXNlciIsImNhdGNoIiwiZXJyIiwiYWNjZXB0ZWQiLCJyZWplY3RlZCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVXJsIiwibWluTGVuZ3RoIiwibWF4TGVuZ3RoIiwiaXNEZWZhdWx0UmVxdWlyZWRWYWx1ZSIsImlzRW1haWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhLHdEQUFPLE9BQU0sS0FBYixFQUFtQixVQUFTLE9BQTVCLEdBQW5COztJQUVxQkMsTzs7O0FBRWpCLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsc0hBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLG1CQUFPLGVBQUtDLE9BQUwsR0FBZUQsS0FEYjtBQUVURSxrQkFBTSxlQUFLRCxPQUFMLEdBQWVDLElBRlo7QUFHVE4sd0JBQVksRUFISDtBQUlUTyx5QkFBYSxJQUpKO0FBS1RDLG1CQUFPLGVBQUtILE9BQUwsR0FBZUcsS0FMYjtB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QUFOO0FBQUEsa0NBQWEsZUFBYixFQUF1QixPQUFPLEVBQTlCO0FBQ0ksMEZBQU0sS0FBTjtBQUNJLDBDQUFLLE1BRFQ7QUFFSSwyQ0FBTSxVQUZWO0FBR0ksMkNBQU8sS0FBS04sS0FBTCxDQUFXRyxJQUh0QjtBQUlJLDhDQUFVLEtBQUtJLFlBSm5CO0FBS0ksMkRBTEo7QUFNSSxrREFOSjtBQU9JLGlEQUFhO0FBQ1RnQyxtREFBVyxDQURGO0FBRVRDLG1EQUFXO0FBRkYscUNBUGpCO0FBV0ksc0RBQWtCO0FBQ2RELG1EQUFXLG9EQURHO0FBRWRDLG1EQUFXLHFEQUZHO0FBR2RDLGdFQUF3QjtBQUhWLHFDQVh0QjtBQWdCSSxnREFBWTVDO0FBaEJoQixrQ0FESjtBQW1CSSwwRkFBTSxLQUFOO0FBQ0ksMENBQUssT0FEVDtBQUVJLDJDQUFNLE9BRlY7QUFHSSwyQ0FBTyxLQUFLRyxLQUFMLENBQVdDLEtBSHRCO0FBSUksOENBQVUsS0FBS00sWUFKbkI7QUFLSSwyREFMSjtBQU1JLGtEQU5KO0FBT0ksaURBQWE7QUFDVG1DLGlEQUFTLElBREE7QUFFVEYsbURBQVc7QUFGRixxQ0FQakI7QUFXSSxzREFBa0I7QUFDZEUsaURBQVMsdUJBREs7QUFFZEYsbURBQVcsa0RBRkc7QUFHZEMsZ0VBQXdCO0FBSFYscUNBWHRCO0FBZ0JJLGdEQUFZNUM7QUFoQmhCLGtDQW5CSjtBQXFDSTtBQUFBO0FBQUEsc0NBQVEsYUFBUixFQUFnQixXQUFoQixFQUFzQixNQUFLLFFBQTNCO0FBQUE7QUFBQTtBQXJDSjtBQWxCSjtBQUZKO0FBREo7QUFGSixhQURKO0FBb0VIOzs7Ozs7a0JBN0hnQkMsTyIsImZpbGUiOiIwLmM3MTdkMGU4Zjk5OGRmNzA2ODFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtGb3JtfSBmcm9tICdmb3Jtc3ktc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgRHJvcHpvbmUgZnJvbSAncmVhY3QtZHJvcHpvbmUnXG5pbXBvcnQge0J1dHRvbiwgR3JpZCwgSW1hZ2UsIElucHV0LCBMYWJlbCwgTGlzdCwgU2VnbWVudH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyJ1xuaW1wb3J0IExvZ28gZnJvbSAnLi4vcmVzL2ltYWdlcy9sb2dvLnBuZydcbmltcG9ydCBBdXRoIGZyb20gJy4uL21vZHVsZXMvQXV0aCdcblxuY29uc3QgZXJyb3JMYWJlbCA9IDxMYWJlbCBjb2xvcj1cInJlZFwiIHBvaW50aW5nPSdhYm92ZScvPlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9maWxlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZW1haWw6IEF1dGguZ2V0VXNlcigpLmVtYWlsLFxuICAgICAgICAgICAgbmFtZTogQXV0aC5nZXRVc2VyKCkubmFtZSxcbiAgICAgICAgICAgIGVycm9yTGFiZWw6ICcnLFxuICAgICAgICAgICAgZHJvcHpvbmVSZWY6IG51bGwsXG4gICAgICAgICAgICBpbWFnZTogQXV0aC5nZXRVc2VyKCkuaW1hZ2UsXG4gICAgICAgICAgICBpbWFnZVVybDogJydcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICAgICAgY29uc3Qge25hbWUsIHZhbHVlfSA9IGUudGFyZ2V0XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICAgICAgICAgIGVycm9yTGFiZWw6ICcnXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICAgICAgZm9yIChsZXQgZmllbGQgb2YgWydlbWFpbCcsICduYW1lJywgJ2ltYWdlJ10pXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoZmllbGQsIHRoaXMuc3RhdGVbZmllbGRdKVxuXG4gICAgICAgIGZldGNoKCcvcHJvZmlsZScsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBiZWFyZXIgJHtBdXRoLmdldFRva2VuKCl9YFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmVzLnN0YXR1cyA9PT0gNDAwKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBhcz0nYScgY29sb3I9J3JlZCc+Q2FuJ3QgbG9naW48L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgYXM9J2EnIGNvbG9yPSdyZWQnPntyZXMuc3RhdHVzVGV4dH08L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIEF1dGgudXBkYXRlVXNlcihqc29uLnVzZXIpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgYXM9J2EnIGNvbG9yPSdyZWQnPntlcnIgfHwgXCJFcnJvclwifTwvTGFiZWw+XG4gICAgICAgICAgICB9KSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxOYXZCYXIvPlxuICAgICAgICAgICAgICAgIDxTZWdtZW50IHBhZGRlZD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gb25WYWxpZFN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3JMYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wem9uZSBvbkRyb3A9eyhhY2NlcHRlZCwgcmVqZWN0ZWQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiBhY2NlcHRlZFswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw6IHJlYWRlci5yZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVcmwoYWNjZXB0ZWRbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGFzPSdhJyBjb2xvcj0ndGVhbCcgcmliYm9uPkRyb3AgbmV3IGF2YXRhcjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3RoaXMuc3RhdGUuaW1hZ2VVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2lyY3VsYXIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3B6b25lPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHN0cmV0Y2hlZCB3aWR0aD17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nbmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdVc2VybmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW50VmFsaWRhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoOiA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogMjBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoOiAnVXNlcm5hbWUgc2hvdWxkIG5vdCBjb250YWluIGxlc3MgdGhhbiA1IGNoYXJhY3RlcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogJ1VzZXJuYW1lIHNob3VsZCBub3QgY29udGFpbiBtb3JlIHRoYW4gMjAgY2hhcmFjdGVycycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEZWZhdWx0UmVxdWlyZWRWYWx1ZTogJ1VzZXJuYW1lIGlzIHJlcXVpcmVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw9e2Vycm9yTGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdlbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdFbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFudFZhbGlkYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9ucz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRW1haWw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiA1MFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0VtYWlsOiAnRW1haWwgc2hvdWxkIGJlIHZhbGlkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6ICdFbWFpbCBzaG91bGQgbm90IGNvbnRhaW4gbW9yZSB0aGFuIDUwIGNoYXJhY3RlcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVmYXVsdFJlcXVpcmVkVmFsdWU6ICdFbWFpbCBpcyByZXF1aXJlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsPXtlcnJvckxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgZmx1aWQgdHlwZT0nc3VibWl0Jz5TYXZlPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250YWluZXJzL1Byb2ZpbGUuanMiXSwic291cmNlUm9vdCI6IiJ9