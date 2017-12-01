webpackHotUpdate(0,{

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Auth = function () {
    function Auth() {
        _classCallCheck(this, Auth);
    }

    _createClass(Auth, null, [{
        key: 'authenticate',
        value: function authenticate(token, user) {
            user.imageUrl = 'data:image;base64,' + new Buffer(user.image).toString('base64');
            console.log('User', user);
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
        }
    }, {
        key: 'deauthenticate',
        value: function deauthenticate() {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        }
    }, {
        key: 'getToken',
        value: function getToken() {
            return localStorage.getItem('token');
        }
    }, {
        key: 'getUser',
        value: function getUser() {
            return JSON.parse(localStorage.getItem('user'));
        }
    }, {
        key: 'updateUser',
        value: function updateUser(state) {
            var user = Auth.getUser();
            user.email = state.email;
            user.name = state.name;
            user.image = state.imageUrl;
            console.log('User2', user);
            localStorage.setItem('user', JSON.stringify(user));
        }
    }, {
        key: 'getRole',
        value: function getRole() {
            return Auth.getUser().role;
        }
    }, {
        key: 'isAuthenticated',
        value: function isAuthenticated() {
            return localStorage.getItem('token') !== null;
        }
    }, {
        key: 'isAdmin',
        value: function isAdmin() {
            return Auth.isAuthenticated() && Auth.getRole() === 'admin';
        }
    }]);

    return Auth;
}();

exports.default = Auth;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(882).Buffer))

/***/ }),

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
            image: _Auth2.default.getUser().image,
            imageUrl: _Auth2.default.getUser().imageUrl
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
                                                    errorLabel: '',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9BdXRoLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL1Byb2ZpbGUuanMiXSwibmFtZXMiOlsiQXV0aCIsInRva2VuIiwidXNlciIsImltYWdlVXJsIiwiQnVmZmVyIiwiaW1hZ2UiLCJ0b1N0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlbW92ZUl0ZW0iLCJnZXRJdGVtIiwicGFyc2UiLCJzdGF0ZSIsImdldFVzZXIiLCJlbWFpbCIsIm5hbWUiLCJyb2xlIiwiaXNBdXRoZW50aWNhdGVkIiwiZ2V0Um9sZSIsImVycm9yTGFiZWwiLCJQcm9maWxlIiwicHJvcHMiLCJkcm9wem9uZVJlZiIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVTdWJtaXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRTdGF0ZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJmaWVsZCIsImFwcGVuZCIsImxvYWRpbmciLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJnZXRUb2tlbiIsImJvZHkiLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwidXBkYXRlVXNlciIsInN0YXR1c1RleHQiLCJjYXRjaCIsImVyciIsImFjY2VwdGVkIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJtaW5MZW5ndGgiLCJtYXhMZW5ndGgiLCJpc0RlZmF1bHRSZXF1aXJlZFZhbHVlIiwiaXNFbWFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztJQUFxQkEsSTs7Ozs7OztxQ0FJR0MsSyxFQUFPQyxJLEVBQU07QUFDN0JBLGlCQUFLQyxRQUFMLDBCQUFxQyxJQUFJQyxNQUFKLENBQVdGLEtBQUtHLEtBQWhCLEVBQXVCQyxRQUF2QixDQUFnQyxRQUFoQyxDQUFyQztBQUNBQyxvQkFBUUMsR0FBUixDQUFZ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TEo7QUFNSSxrREFOSjtBQU9JLGlEQUFhO0FBQ1RpQyxpREFBUyxJQURBO0FBRVRGLG1EQUFXO0FBRkYscUNBUGpCO0FBV0ksc0RBQWtCO0FBQ2RFLGlEQUFTLHVCQURLO0FBRWRGLG1EQUFXLGtEQUZHO0FBR2RDLGdFQUF3QjtBQUhWLHFDQVh0QjtBQWdCSSxnREFBWXBDO0FBaEJoQixrQ0FuQko7QUFxQ0k7QUFBQTtBQUFBLHNDQUFRLGFBQVIsRUFBZ0IsV0FBaEIsRUFBc0IsTUFBSyxRQUEzQjtBQUFBO0FBQUE7QUFyQ0o7QUFwQko7QUFGSjtBQUpKO0FBRkosYUFESjtBQXlFSDs7Ozs7O2tCQXhJZ0JDLE8iLCJmaWxlIjoiMC5iZmRhYzQ4MjY5M2M3ODZmZmNhOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aCB7XG5cbiAgICBcblxuICAgIHN0YXRpYyBhdXRoZW50aWNhdGUodG9rZW4sIHVzZXIpIHtcbiAgICAgICAgdXNlci5pbWFnZVVybCA9IGBkYXRhOmltYWdlO2Jhc2U2NCwke25ldyBCdWZmZXIodXNlci5pbWFnZSkudG9TdHJpbmcoJ2Jhc2U2NCcpfWBcbiAgICAgICAgY29uc29sZS5sb2coJ1VzZXInLCB1c2VyKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbilcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyKSlcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVhdXRoZW50aWNhdGUoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJylcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0VG9rZW4oKSB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRVc2VyKCkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKVxuICAgIH1cblxuICAgIHN0YXRpYyB1cGRhdGVVc2VyKHN0YXRlKSB7XG4gICAgICAgIGxldCB1c2VyID0gQXV0aC5nZXRVc2VyKClcbiAgICAgICAgdXNlci5lbWFpbCA9IHN0YXRlLmVtYWlsXG4gICAgICAgIHVzZXIubmFtZSA9IHN0YXRlLm5hbWVcbiAgICAgICAgdXNlci5pbWFnZSA9IHN0YXRlLmltYWdlVXJsXG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2VyMicsIHVzZXIpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpXG4gICAgfVxuXG4gICAgc3RhdGljIGdldFJvbGUoKSB7XG4gICAgICAgIHJldHVybiBBdXRoLmdldFVzZXIoKS5yb2xlXG4gICAgfVxuXG4gICAgc3RhdGljIGlzQXV0aGVudGljYXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpICE9PSBudWxsXG4gICAgfVxuXG4gICAgc3RhdGljIGlzQWRtaW4oKSB7XG4gICAgICAgIHJldHVybiBBdXRoLmlzQXV0aGVudGljYXRlZCgpICYmIEF1dGguZ2V0Um9sZSgpID09PSAnYWRtaW4nXG4gICAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvQXV0aC5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge0Zvcm19IGZyb20gJ2Zvcm1zeS1zZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBEcm9wem9uZSBmcm9tICdyZWFjdC1kcm9wem9uZSdcbmltcG9ydCB7QnV0dG9uLCBHcmlkLCBJbWFnZSwgSW5wdXQsIExhYmVsLCBMaXN0LCBTZWdtZW50LCBEaW1tZXIsIExvYWRlcn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyJ1xuaW1wb3J0IExvZ28gZnJvbSAnLi4vcmVzL2ltYWdlcy9sb2dvLnBuZydcbmltcG9ydCBBdXRoIGZyb20gJy4uL21vZHVsZXMvQXV0aCdcblxuY29uc3QgZXJyb3JMYWJlbCA9IDxMYWJlbCBjb2xvcj1cInJlZFwiIHBvaW50aW5nPSdhYm92ZScvPlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9maWxlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZW1haWw6IEF1dGguZ2V0VXNlcigpLmVtYWlsLFxuICAgICAgICAgICAgbmFtZTogQXV0aC5nZXRVc2VyKCkubmFtZSxcbiAgICAgICAgICAgIGVycm9yTGFiZWw6ICcnLFxuICAgICAgICAgICAgZHJvcHpvbmVSZWY6IG51bGwsXG4gICAgICAgICAgICBpbWFnZTogQXV0aC5nZXRVc2VyKCkuaW1hZ2UsXG4gICAgICAgICAgICBpbWFnZVVybDogQXV0aC5nZXRVc2VyKCkuaW1hZ2VVcmxcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICAgICAgY29uc3Qge25hbWUsIHZhbHVlfSA9IGUudGFyZ2V0XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICAgICAgICAgIGVycm9yTGFiZWw6ICcnLFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZVN1Ym1pdCgpIHtcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICAgICAgZm9yIChsZXQgZmllbGQgb2YgWydlbWFpbCcsICduYW1lJywgJ2ltYWdlJ10pXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoZmllbGQsIHRoaXMuc3RhdGVbZmllbGRdKVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxuICAgICAgICB9KVxuXG4gICAgICAgIGZldGNoKCcvcHJvZmlsZScsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgYmVhcmVyICR7QXV0aC5nZXRUb2tlbigpfWBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBmb3JtRGF0YVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIEF1dGgudXBkYXRlVXNlcih0aGlzLnN0YXRlKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmVzLnN0YXR1cyA9PT0gNDAwKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBhcz0nYScgY29sb3I9J3JlZCc+Q2FuJ3QgbG9naW48L0xhYmVsPixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBhcz0nYScgY29sb3I9J3JlZCc+e3Jlcy5zdGF0dXNUZXh0fTwvTGFiZWw+LFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBhcz0nYScgY29sb3I9J3JlZCc+e2VyciB8fCAnRXJyb3InfTwvTGFiZWw+LFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxOYXZCYXIvPlxuICAgICAgICAgICAgICAgIDxTZWdtZW50IHBhZGRlZD5cbiAgICAgICAgICAgICAgICAgICAgPERpbW1lciBhY3RpdmU9e3RoaXMuc3RhdGUubG9hZGluZ30gaW52ZXJ0ZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGVyLz5cbiAgICAgICAgICAgICAgICAgICAgPC9EaW1tZXI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIG9uVmFsaWRTdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVycm9yTGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcHpvbmUgb25Ecm9wPXsoYWNjZXB0ZWQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiBhY2NlcHRlZFswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw6IHJlYWRlci5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChhY2NlcHRlZFswXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgYXM9J2EnIGNvbG9yPSd0ZWFsJyByaWJib24+RHJvcCBuZXcgYXZhdGFyPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dGhpcy5zdGF0ZS5pbWFnZVVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXJjdWxhci8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcHpvbmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gc3RyZXRjaGVkIHdpZHRoPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSduYW1lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1VzZXJuYW1lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbnRWYWxpZGF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiAyMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg6ICdVc2VybmFtZSBzaG91bGQgbm90IGNvbnRhaW4gbGVzcyB0aGFuIDUgY2hhcmFjdGVycycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiAnVXNlcm5hbWUgc2hvdWxkIG5vdCBjb250YWluIG1vcmUgdGhhbiAyMCBjaGFyYWN0ZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RlZmF1bHRSZXF1aXJlZFZhbHVlOiAnVXNlcm5hbWUgaXMgcmVxdWlyZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbD17ZXJyb3JMYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2VtYWlsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0VtYWlsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW50VmFsaWRhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFbWFpbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDUwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRW1haWw6ICdFbWFpbCBzaG91bGQgYmUgdmFsaWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogJ0VtYWlsIHNob3VsZCBub3QgY29udGFpbiBtb3JlIHRoYW4gNTAgY2hhcmFjdGVycycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEZWZhdWx0UmVxdWlyZWRWYWx1ZTogJ0VtYWlsIGlzIHJlcXVpcmVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw9e2Vycm9yTGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBmbHVpZCB0eXBlPSdzdWJtaXQnPlNhdmU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRhaW5lcnMvUHJvZmlsZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=