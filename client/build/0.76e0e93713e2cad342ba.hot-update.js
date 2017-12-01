webpackHotUpdate(0,{

/***/ 896:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _formsySemanticUiReact = __webpack_require__(256);

var _reactDropzone = __webpack_require__(902);

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _semanticUiReact = __webpack_require__(18);

var _navbar = __webpack_require__(73);

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
            dropzoneRef: null
        };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(Profile, [{
        key: 'onDrop',
        value: function onDrop(files) {
            this.setState({
                files: files
            });
        }
    }, {
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

            fetch('/profile', {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'bearer ' + _Auth2.default.getToken()
                },
                body: JSON.stringify({
                    email: this.state.email,
                    name: this.state.name
                })
            }).then(function (res) {
                if (res.status === 200) return res.json();else if (res.status === 400) _this2.setState({
                    errorLabel: _react2.default.createElement(
                        _semanticUiReact.Label,
                        { color: 'red' },
                        'Can\'t login'
                    )
                });else _this2.setState({
                    errorLabel: _react2.default.createElement(
                        _semanticUiReact.Label,
                        { color: 'red' },
                        res.statusText
                    )
                });
            }).then(function (json) {
                _Auth2.default.updateUser(json.user);
            }).catch(function (err) {
                return _this2.setState({
                    errorLabel: _react2.default.createElement(
                        _semanticUiReact.Label,
                        { color: 'red' },
                        err
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
                        _semanticUiReact.Grid,
                        null,
                        _react2.default.createElement(
                            _semanticUiReact.Grid.Column,
                            { width: 4 },
                            _react2.default.createElement(
                                _semanticUiReact.Label,
                                { as: 'a', color: 'teal', ribbon: true },
                                'Avatar'
                            ),
                            _react2.default.createElement(_semanticUiReact.Image, { src: 'data:image;base64,' + new Buffer(_Auth2.default.getUser().image).toString('base64'), circular: true })
                        ),
                        _react2.default.createElement(
                            _semanticUiReact.Grid.Column,
                            { stretched: true, width: 12 },
                            _react2.default.createElement(
                                _formsySemanticUiReact.Form,
                                { onValidSubmit: this.handleSubmit },
                                this.state.errorLabel,
                                _react2.default.createElement(
                                    _reactDropzone2.default,
                                    { ref: function ref(node) {
                                            _this3.state.dropzoneRef = node;
                                        }, onDrop: function onDrop(accepted, rejected) {
                                            alert(accepted);
                                        } },
                                    _react2.default.createElement(
                                        _semanticUiReact.Label,
                                        null,
                                        'Drop new avatar'
                                    )
                                ),
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(898).Buffer))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Qcm9maWxlLmpzIl0sIm5hbWVzIjpbImVycm9yTGFiZWwiLCJQcm9maWxlIiwicHJvcHMiLCJzdGF0ZSIsImVtYWlsIiwiZ2V0VXNlciIsIm5hbWUiLCJkcm9wem9uZVJlZiIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVTdWJtaXQiLCJmaWxlcyIsInNldFN0YXRlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiZ2V0VG9rZW4iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwic3RhdHVzVGV4dCIsInVwZGF0ZVVzZXIiLCJ1c2VyIiwiY2F0Y2giLCJlcnIiLCJCdWZmZXIiLCJpbWFnZSIsInRvU3RyaW5nIiwibm9kZSIsImFjY2VwdGVkIiwicmVqZWN0ZWQiLCJhbGVydCIsIm1pbkxlbmd0aCIsIm1heExlbmd0aCIsImlzRGVmYXVsdFJlcXVpcmVkVmFsdWUiLCJpc0VtYWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYSx3REFBTyxPQUFNLEtBQWIsRUFBbUIsVUFBUyxPQUE1QixHQUFuQjs7SUFFcUJDLE87OztBQUVqQixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHNIQUNUQSxLQURTOztBQUVmLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyxtQkFBTyxlQUFLQyxPQUFMLEdBQWVELEtBRGI7QUFFVEUsa0JBQU0sZUFBS0QsT0FBTCxHQUFlQyxJQUZaO0FBR1ROLHdCQUFZLEVBSEg7QUFJVE8seUJBQWE7QUFKSixTQUFiO0FBTUEsY0FBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixPQUFwQjtBQUNBLGNBQUtDLFlBQUwsR0FBb0Is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QWE7QUFDVCtCLG1EQUFXLENBREY7QUFFVEMsbURBQVc7QUFGRixxQ0FQakI7QUFXSSxzREFBa0I7QUFDZEQsbURBQVcsb0RBREc7QUFFZEMsbURBQVcscURBRkc7QUFHZEMsZ0VBQXdCO0FBSFYscUNBWHRCO0FBZ0JJLGdEQUFZekM7QUFoQmhCLGtDQVBKO0FBeUJJLDBGQUFNLEtBQU47QUFDSSwwQ0FBSyxPQURUO0FBRUksMkNBQU0sT0FGVjtBQUdJLDJDQUFPLEtBQUtHLEtBQUwsQ0FBV0MsS0FIdEI7QUFJSSw4Q0FBVSxLQUFLSSxZQUpuQjtBQUtJLDJEQUxKO0FBTUksa0RBTko7QUFPSSxpREFBYTtBQUNUa0MsaURBQVMsSUFEQTtBQUVURixtREFBVztBQUZGLHFDQVBqQjtBQVdJLHNEQUFrQjtBQUNkRSxpREFBUyx1QkFESztBQUVkRixtREFBVyxrREFGRztBQUdkQyxnRUFBd0I7QUFIVixxQ0FYdEI7QUFnQkksZ0RBQVl6QztBQWhCaEIsa0NBekJKO0FBMkNJO0FBQUE7QUFBQSxzQ0FBUSxhQUFSLEVBQWdCLFdBQWhCLEVBQXNCLE1BQUssUUFBM0I7QUFBQTtBQUFBO0FBM0NKO0FBREo7QUFMSjtBQURKO0FBRkosYUFESjtBQTRESDs7Ozs7O2tCQXpIZ0JDLE8iLCJmaWxlIjoiMC43NmUwZTkzNzEzZTJjYWQzNDJiYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gJ2Zvcm1zeS1zZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBEcm9wem9uZSBmcm9tICdyZWFjdC1kcm9wem9uZSdcbmltcG9ydCB7QnV0dG9uLCBHcmlkLCBJbWFnZSwgSW5wdXQsIExhYmVsLCBMaXN0LCBTZWdtZW50fSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZiYXInXG5pbXBvcnQgTG9nbyBmcm9tICcuLi9yZXMvaW1hZ2VzL2xvZ28ucG5nJ1xuaW1wb3J0IEF1dGggZnJvbSAnLi4vbW9kdWxlcy9BdXRoJ1xuXG5jb25zdCBlcnJvckxhYmVsID0gPExhYmVsIGNvbG9yPVwicmVkXCIgcG9pbnRpbmc9J2Fib3ZlJy8+XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2ZpbGUgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBlbWFpbDogQXV0aC5nZXRVc2VyKCkuZW1haWwsXG4gICAgICAgICAgICBuYW1lOiBBdXRoLmdldFVzZXIoKS5uYW1lLFxuICAgICAgICAgICAgZXJyb3JMYWJlbDogJycsXG4gICAgICAgICAgICBkcm9wem9uZVJlZjogbnVsbFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcylcbiAgICB9XG5cbiAgICBvbkRyb3AoZmlsZXMpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBmaWxlc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldFxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgICAgICAgICBlcnJvckxhYmVsOiAnJ1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICAgIGZldGNoKCcvcHJvZmlsZScsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBiZWFyZXIgJHtBdXRoLmdldFRva2VuKCl9YFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy5zdGF0ZS5lbWFpbCxcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnN0YXRlLm5hbWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgICAgICAgICAgICBlbHNlIGlmKHJlcy5zdGF0dXMgPT09IDQwMClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgY29sb3I9J3JlZCc+Q2FuJ3QgbG9naW48L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgY29sb3I9J3JlZCc+e3Jlcy5zdGF0dXNUZXh0fTwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgQXV0aC51cGRhdGVVc2VyKGpzb24udXNlcilcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57ZXJyfTwvTGFiZWw+XG4gICAgICAgICAgICB9KSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxOYXZCYXIvPlxuICAgICAgICAgICAgICAgIDxTZWdtZW50IHBhZGRlZD5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBhcz0nYScgY29sb3I9J3RlYWwnIHJpYmJvbj5BdmF0YXI8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2BkYXRhOmltYWdlO2Jhc2U2NCwke25ldyBCdWZmZXIoQXV0aC5nZXRVc2VyKCkuaW1hZ2UpLnRvU3RyaW5nKCdiYXNlNjQnKX1gfSBjaXJjdWxhci8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHN0cmV0Y2hlZCB3aWR0aD17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIG9uVmFsaWRTdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3JMYWJlbH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcHpvbmUgcmVmPXsobm9kZSkgPT4geyB0aGlzLnN0YXRlLmRyb3B6b25lUmVmID0gbm9kZSB9fSBvbkRyb3A9eyhhY2NlcHRlZCwgcmVqZWN0ZWQpID0+IHsgYWxlcnQoYWNjZXB0ZWQpIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsPkRyb3AgbmV3IGF2YXRhcjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcHpvbmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxCdXR0b24gcHJpbWFyeSBmbHVpZCBvbkNsaWNrPXsoKSA9PiB7IHRoaXMuc3RhdGUuZHJvcHpvbmVSZWYub3BlbigpIH19Pk9wZW4gRmlsZSBEaWFsb2c8L0J1dHRvbj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J25hbWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nVXNlcm5hbWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFudFZhbGlkYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9ucz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDIwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogJ1VzZXJuYW1lIHNob3VsZCBub3QgY29udGFpbiBsZXNzIHRoYW4gNSBjaGFyYWN0ZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6ICdVc2VybmFtZSBzaG91bGQgbm90IGNvbnRhaW4gbW9yZSB0aGFuIDIwIGNoYXJhY3RlcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVmYXVsdFJlcXVpcmVkVmFsdWU6ICdVc2VybmFtZSBpcyByZXF1aXJlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsPXtlcnJvckxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nZW1haWwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nRW1haWwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbnRWYWxpZGF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0VtYWlsOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogNTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFbWFpbDogJ0VtYWlsIHNob3VsZCBiZSB2YWxpZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiAnRW1haWwgc2hvdWxkIG5vdCBjb250YWluIG1vcmUgdGhhbiA1MCBjaGFyYWN0ZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RlZmF1bHRSZXF1aXJlZFZhbHVlOiAnRW1haWwgaXMgcmVxdWlyZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbD17ZXJyb3JMYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IGZsdWlkIHR5cGU9J3N1Ym1pdCc+U2F2ZTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udGFpbmVycy9Qcm9maWxlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==