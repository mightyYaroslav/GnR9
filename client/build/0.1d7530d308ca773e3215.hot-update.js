webpackHotUpdate(0,{

/***/ 900:
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

var _Auth = __webpack_require__(82);

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
            image: '',
            imageUrl: _Auth2.default.getUser().image
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
        value: function handleSubmit() {
            var _this2 = this;

            var formData = new FormData();
            var _arr = ['email', 'name', 'image'];
            for (var _i = 0; _i < _arr.length; _i++) {
                var field = _arr[_i];
                formData.append(field, this.state[field]);
            }this.setState({
                loading: true
            });

            fetch('/profile', {
                method: 'PUT',
                headers: {
                    'Authorization': 'bearer ' + _Auth2.default.getToken()
                },
                body: formData
            }).then(function (res) {
                if (res.status === 200) {
                    _Auth2.default.updateUser(_this2.state);
                    _this2.setState({ loading: false });
                } else if (res.status === 400) _this2.setState({
                    errorLabel: _react2.default.createElement(
                        _semanticUiReact.Label,
                        { as: 'a', color: 'red' },
                        'Can\'t login'
                    ),
                    loading: false
                });else _this2.setState({
                    errorLabel: _react2.default.createElement(
                        _semanticUiReact.Label,
                        { as: 'a', color: 'red' },
                        res.statusText
                    ),
                    loading: false
                });
            }).catch(function (err) {
                return _this2.setState({
                    errorLabel: _react2.default.createElement(
                        _semanticUiReact.Label,
                        { as: 'a', color: 'red' },
                        err || 'Error'
                    ),
                    loading: false
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
                        _semanticUiReact.Dimmer,
                        { active: this.state.loading, inverted: true },
                        _react2.default.createElement(_semanticUiReact.Loader, null)
                    ),
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
                                    { onDrop: function onDrop(accepted) {
                                            var reader = new FileReader();
                                            reader.onload = function () {
                                                _this3.setState({
                                                    image: accepted[0],
                                                    imageUrl: reader.result,
                                                    loading: false
                                                });
                                            };
                                            reader.readAsDataURL(accepted[0]);
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Qcm9maWxlLmpzIl0sIm5hbWVzIjpbImVycm9yTGFiZWwiLCJQcm9maWxlIiwicHJvcHMiLCJzdGF0ZSIsImVtYWlsIiwiZ2V0VXNlciIsIm5hbWUiLCJkcm9wem9uZVJlZiIsImltYWdlIiwiaW1hZ2VVcmwiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlU3VibWl0IiwiZSIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGUiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZmllbGQiLCJhcHBlbmQiLCJsb2FkaW5nIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiZ2V0VG9rZW4iLCJib2R5IiwidGhlbiIsInJlcyIsInN0YXR1cyIsInVwZGF0ZVVzZXIiLCJzdGF0dXNUZXh0IiwiY2F0Y2giLCJlcnIiLCJhY2NlcHRlZCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwibWluTGVuZ3RoIiwibWF4TGVuZ3RoIiwiaXNEZWZhdWx0UmVxdWlyZWRWYWx1ZSIsImlzRW1haWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhLHdEQUFPLE9BQU0sS0FBYixFQUFtQixVQUFTLE9BQTVCLEdBQW5COztJQUVxQkMsTzs7O0FBRWpCLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsc0hBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLG1CQUFPLGVBQUtDLE9BQUwsR0FBZUQsS0FEYjtBQUVURSxrQkFBTSxlQUFLRCxPQUFMLEdBQWVDLElBRlo7QUFHVE4sd0JBQVksRUFISDtBQUlUTyx5QkFBYSxJQUpKO0FBS1RDLG1CQUFPLEVBTEU7QUFNVEMsc0JBQVUsZUFBS0osT0FBTCxHQUFlRztBQU5o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ZTMyMTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge0Zvcm19IGZyb20gJ2Zvcm1zeS1zZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBEcm9wem9uZSBmcm9tICdyZWFjdC1kcm9wem9uZSdcbmltcG9ydCB7QnV0dG9uLCBHcmlkLCBJbWFnZSwgSW5wdXQsIExhYmVsLCBMaXN0LCBTZWdtZW50LCBEaW1tZXIsIExvYWRlcn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyJ1xuaW1wb3J0IExvZ28gZnJvbSAnLi4vcmVzL2ltYWdlcy9sb2dvLnBuZydcbmltcG9ydCBBdXRoIGZyb20gJy4uL21vZHVsZXMvQXV0aCdcblxuY29uc3QgZXJyb3JMYWJlbCA9IDxMYWJlbCBjb2xvcj1cInJlZFwiIHBvaW50aW5nPSdhYm92ZScvPlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9maWxlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZW1haWw6IEF1dGguZ2V0VXNlcigpLmVtYWlsLFxuICAgICAgICAgICAgbmFtZTogQXV0aC5nZXRVc2VyKCkubmFtZSxcbiAgICAgICAgICAgIGVycm9yTGFiZWw6ICcnLFxuICAgICAgICAgICAgZHJvcHpvbmVSZWY6IG51bGwsXG4gICAgICAgICAgICBpbWFnZTogJycsXG4gICAgICAgICAgICBpbWFnZVVybDogQXV0aC5nZXRVc2VyKCkuaW1hZ2VcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICAgICAgY29uc3Qge25hbWUsIHZhbHVlfSA9IGUudGFyZ2V0XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICAgICAgICAgIGVycm9yTGFiZWw6ICcnLFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZVN1Ym1pdCgpIHtcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICAgICAgZm9yIChsZXQgZmllbGQgb2YgWydlbWFpbCcsICduYW1lJywgJ2ltYWdlJ10pXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoZmllbGQsIHRoaXMuc3RhdGVbZmllbGRdKVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxuICAgICAgICB9KVxuXG4gICAgICAgIGZldGNoKCcvcHJvZmlsZScsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgYmVhcmVyICR7QXV0aC5nZXRUb2tlbigpfWBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBmb3JtRGF0YVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIEF1dGgudXBkYXRlVXNlcih0aGlzLnN0YXRlKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmVzLnN0YXR1cyA9PT0gNDAwKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBhcz0nYScgY29sb3I9J3JlZCc+Q2FuJ3QgbG9naW48L0xhYmVsPixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBhcz0nYScgY29sb3I9J3JlZCc+e3Jlcy5zdGF0dXNUZXh0fTwvTGFiZWw+LFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBhcz0nYScgY29sb3I9J3JlZCc+e2VyciB8fCAnRXJyb3InfTwvTGFiZWw+LFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxOYXZCYXIvPlxuICAgICAgICAgICAgICAgIDxTZWdtZW50IHBhZGRlZD5cbiAgICAgICAgICAgICAgICAgICAgPERpbW1lciBhY3RpdmU9e3RoaXMuc3RhdGUubG9hZGluZ30gaW52ZXJ0ZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGVyLz5cbiAgICAgICAgICAgICAgICAgICAgPC9EaW1tZXI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIG9uVmFsaWRTdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVycm9yTGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcHpvbmUgb25Ecm9wPXsoYWNjZXB0ZWQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiBhY2NlcHRlZFswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw6IHJlYWRlci5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGFjY2VwdGVkWzBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBhcz0nYScgY29sb3I9J3RlYWwnIHJpYmJvbj5Ecm9wIG5ldyBhdmF0YXI8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt0aGlzLnN0YXRlLmltYWdlVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpcmN1bGFyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wem9uZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBzdHJldGNoZWQgd2lkdGg9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J25hbWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nVXNlcm5hbWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFudFZhbGlkYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9ucz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDIwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogJ1VzZXJuYW1lIHNob3VsZCBub3QgY29udGFpbiBsZXNzIHRoYW4gNSBjaGFyYWN0ZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6ICdVc2VybmFtZSBzaG91bGQgbm90IGNvbnRhaW4gbW9yZSB0aGFuIDIwIGNoYXJhY3RlcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVmYXVsdFJlcXVpcmVkVmFsdWU6ICdVc2VybmFtZSBpcyByZXF1aXJlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsPXtlcnJvckxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nZW1haWwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nRW1haWwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbnRWYWxpZGF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0VtYWlsOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogNTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFbWFpbDogJ0VtYWlsIHNob3VsZCBiZSB2YWxpZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiAnRW1haWwgc2hvdWxkIG5vdCBjb250YWluIG1vcmUgdGhhbiA1MCBjaGFyYWN0ZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RlZmF1bHRSZXF1aXJlZFZhbHVlOiAnRW1haWwgaXMgcmVxdWlyZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbD17ZXJyb3JMYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IGZsdWlkIHR5cGU9J3N1Ym1pdCc+U2F2ZTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udGFpbmVycy9Qcm9maWxlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==