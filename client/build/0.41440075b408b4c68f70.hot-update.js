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
            image: 'data:image;base64,' + new Buffer(_Auth2.default.getUser().image).toString('base64')
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

            fetch('/profile', {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'bearer ' + _Auth2.default.getToken()
                },
                body: JSON.stringify({
                    email: this.state.email,
                    name: this.state.name,
                    image: this.state.image
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
                        _formsySemanticUiReact.Form,
                        { onValidSubmit: this.handleSubmit },
                        _react2.default.createElement(
                            _semanticUiReact.Grid,
                            null,
                            this.state.errorLabel,
                            _react2.default.createElement(
                                _semanticUiReact.Grid.Column,
                                { width: 4 },
                                _react2.default.createElement(
                                    _reactDropzone2.default,
                                    { ref: function ref(node) {
                                            _this3.state.dropzoneRef = node;
                                        }, onDrop: function onDrop(accepted, rejected) {
                                            _this3.setState({
                                                image: accepted
                                            });
                                        } },
                                    _react2.default.createElement(
                                        _semanticUiReact.Label,
                                        { as: 'a', color: 'teal', ribbon: true },
                                        'Drop new avatar'
                                    ),
                                    _react2.default.createElement(_semanticUiReact.Image, {
                                        src: this.state.image,
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(897).Buffer))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Qcm9maWxlLmpzIl0sIm5hbWVzIjpbImVycm9yTGFiZWwiLCJQcm9maWxlIiwicHJvcHMiLCJzdGF0ZSIsImVtYWlsIiwiZ2V0VXNlciIsIm5hbWUiLCJkcm9wem9uZVJlZiIsImltYWdlIiwiQnVmZmVyIiwidG9TdHJpbmciLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlU3VibWl0IiwiZSIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGUiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJnZXRUb2tlbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsInN0YXR1cyIsImpzb24iLCJzdGF0dXNUZXh0IiwidXBkYXRlVXNlciIsInVzZXIiLCJjYXRjaCIsImVyciIsIm5vZGUiLCJhY2NlcHRlZCIsInJlamVjdGVkIiwibWluTGVuZ3RoIiwibWF4TGVuZ3RoIiwiaXNEZWZhdWx0UmVxdWlyZWRWYWx1ZSIsImlzRW1haWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhLHdEQUFPLE9BQU0sS0FBYixFQUFtQixVQUFTLE9BQTVCLEdBQW5COztJQUVxQkMsTzs7O0FBRWpCLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsc0hBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLG1CQUFPLGVBQUtDLE9BQUwsR0FBZUQsS0FEYjtBQUVURSxrQkFBTSxlQUFLRCxPQUFMLEdBQWVDLElBRlo7QUFHVE4sd0JBQVksRUFISDtBQUlUTyx5QkFBYSxJQUpKO0FBS1RDLDBDQUE0QixJQUFJQyxNQUFKLENBQVcsZUFBS0osT0FBTCxHQUFlRyxLQUExQixFQUFpQ0UsUUFBakMsQ0FBMEMsUUFBMUM7QUFMbkIsU0FBYjtBQU9BLGNBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsT0FBcEI7QUFDQSxjQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JELElBQWxCLE9BQXBCO0FBVmU7QUFXbEI7Ozs7cUNBRVlFLEMsRUFBRztBQUFBOztBQUFBLDRCQUNVQSxFQUFFQyxNQURaO0FBQUEsZ0JBQ0xULElBREssYUFDTEEsSUFESztBQUFBLGdCQUNDVSxLQURELGFBQ0NBLEtBREQ7O0FBRVosaUJBQUtDLFFBQUwsNkNBQ0tYLElBREwsRUFDWVUsS0FEWiw0Q0FFZ0IsRUFGaEI7QUFJSDs7O3FDQUVZRixDLEVBQUc7QUFBQTs7QUFDWkksa0JBQU0sVUFBTixFQUFrQjtBQUNkQyx3QkFBUSxLQURNO0FBRWRDLHlCQUFTO0FBQ0wsb0NBQWdCLGtCQURYO0FBRUwsaURBQTJCLGVBQUtDLFFBQUw7QUFGdEIsaUJBRks7QUFNZEMsc0JBQU1DLEtBQUtDLFNBQUwsQ0FBZTtBQUNqQnBCLDJCQUFPLEtBQUtELEtBQUwsQ0FBV0MsS0FERDtBQUVqQkUsMEJBQU0sS0FBS0gsS0FBTCxDQUFXRyxJQUZBO0FBR2pCRSwyQkFBTyxLQUFLTCxLQUFMLENBQVdLO0FBSEQsaUJBQWY7QUFOUSxhQUFsQixFQVlLaUIsSUFaTCxDQVlVLGVBQU87QUFDVCxvQkFBSUMsSUFBSUMsTUFBSixLQUFlLEdBQW5CLEVBQ0ksT0FBT0QsSUFBSUUsSUFBSixFQUFQLENBREosS0FFSyxJQUFJRixJQUFJQyxNQUFKLEtBQWUsR0FBbkIsRUFDRCxPQUFLVixRQUFMLENBQWM7QUFDVmpCLGdDQUFZO0FBQUE7QUFBQSwwQkFBTyxPQUFNLEtBQWI7QUFBQTtBQUFBO0FBREYsaUJBQWQsRUFEQyxLQUtELE9BQUtpQixRQUFMLENBQWM7QUFDVmpCLGdDQUFZO0FBQUE7QUFBQSwwQkFBTyxPQUFNLEtBQWI7QUFBb0IwQiw0QkFBSUc7QUFBeEI7QUFERixpQkFBZDtBQUdQLGFBdkJMLEVBd0JLSixJQXhCTCxDQXdCVSxnQkFBUTtBQUNWLCtCQUFLSyxVQUFMLENBQWdCRixLQUFLRyxJQUFyQjtBQUNILGFBMUJMLEVBMkJLQyxLQTNCTCxDQTJCVztBQUFBLHVCQUFPLE9BQUtmLFFBQUwsQ0FBYztBQUN4QmpCLGdDQUFZO0FBQUE7QUFBQSwwQkFBTyxPQUFNLEtBQWI7QUFBb0JpQztBQUFwQjtBQURZLGlCQUFkLENBQVA7QUFBQSxhQTNCWDtBQThCSDs7O2lDQUVRO0FBQUE7O0FBQ0wsbUJBQ0k7QUFBQTtBQUFBO0FBQ0kscUVBREo7QUFFSTtBQUFBO0FBQUEsc0JBQVMsWUFBVDtBQUNJO0FBQUE7QUFBQSwwQkFBTSxlQUFlLEtBQUtwQixZQUExQjtBQUNJO0FBQUE7QUFBQTtBQUNLLGlDQUFLVixLQUFMLENBQVdILFVBRGhCO0FBRUk7QUFBQSxzREFBTSxNQUFOO0FBQUEsa0NBQWEsT0FBTyxDQUFwQjtBQUNJO0FBQUE7QUFBQSxzQ0FBVSxLQUFLLGFBQUNrQyxJQUFELEVBQVU7QUFDckIsbURBQUsvQixLQUFMLENBQVdJLFdBQVgsR0FBeUIyQixJQUF6QjtBQUNILHlDQUZELEVBRUcsUUFBUSxnQkFBQ0MsUUFBRCxFQUFXQyxRQUFYLEVBQXdCO0FBQy9CLG1EQUFLbkIsUUFBTCxDQUFjO0FBQ1ZULHVEQUFPMkI7QUFERyw2Q0FBZDtBQUdILHlDQU5EO0FBT0k7QUFBQTtBQUFBLDBDQUFPLElBQUcsR0FBVixFQUFjLE9BQU0sTUFBcEIsRUFBMkIsWUFBM0I7QUFBQTtBQUFBLHFDQVBKO0FBUUk7QUFDSSw2Q0FBSyxLQUFLaEMsS0FBTCxDQUFXSyxLQURwQjtBQUVJLHNEQUZKO0FBUko7QUFESiw2QkFGSjtBQWdCSTtBQUFBLHNEQUFNLE1BQU47QUFBQSxrQ0FBYSxlQUFiLEVBQXVCLE9BQU8sRUFBOUI7QUFDSSwwRkFBTSxLQUFOO0FBQ0ksMENBQUssTUFEVDtBQUVJLDJDQUFNLFVBRlY7QUFHSSwyQ0FBTyxLQUFLTCxLQUFMLENBQVdHLElBSHRCO0FBSUksOENBQVUsS0FBS0ssWUFKbkI7QUFLSSwyREFMSjtBQU1JLGtEQU5KO0FBT0ksaURBQWE7QUFDVDBCLG1EQUFXLENBREY7QUFFVEMsbURBQVc7QUFGRixxQ0FQakI7QUFXSSxzREFBa0I7QUFDZEQsbURBQVcsb0RBREc7QUFFZEMsbURBQVcscURBRkc7QUFHZEMsZ0VBQXdCO0FBSFYscUNBWHRCO0FBZ0JJLGdEQUFZdkM7QUFoQmhCLGtDQURKO0FBbUJJLDBGQUFNLEtBQU47QUFDSSwwQ0FBSyxPQURUO0FBRUksMkNBQU0sT0FGVjtBQUdJLDJDQUFPLEtBQUtHLEtBQUwsQ0FBV0MsS0FIdEI7QUFJSSw4Q0FBVSxLQUFLTyxZQUpuQjtBQUtJLDJEQUxKO0FBTUksa0RBTko7QUFPSSxpREFBYTtBQUNUNkIsaURBQVMsSUFEQTtBQUVURixtREFBVztBQUZGLHFDQVBqQjtBQVdJLHNEQUFrQjtBQUNkRSxpREFBUyx1QkFESztBQUVkRixtREFBVyxrREFGRztBQUdkQyxnRUFBd0I7QUFIVixxQ0FYdEI7QUFnQkksZ0RBQVl2QztBQWhCaEIsa0NBbkJKO0FBcUNJO0FBQUE7QUFBQSxzQ0FBUSxhQUFSLEVBQWdCLFdBQWhCLEVBQXNCLE1BQUssUUFBM0I7QUFBQTtBQUFBO0FBckNKO0FBaEJKO0FBREo7QUFESjtBQUZKLGFBREo7QUFpRUg7Ozs7OztrQkExSGdCQyxPIiwiZmlsZSI6IjAuNDE0NDAwNzViNDA4YjRjNjhmNzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge0Zvcm19IGZyb20gJ2Zvcm1zeS1zZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBEcm9wem9uZSBmcm9tICdyZWFjdC1kcm9wem9uZSdcbmltcG9ydCB7QnV0dG9uLCBHcmlkLCBJbWFnZSwgSW5wdXQsIExhYmVsLCBMaXN0LCBTZWdtZW50fSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZiYXInXG5pbXBvcnQgTG9nbyBmcm9tICcuLi9yZXMvaW1hZ2VzL2xvZ28ucG5nJ1xuaW1wb3J0IEF1dGggZnJvbSAnLi4vbW9kdWxlcy9BdXRoJ1xuXG5jb25zdCBlcnJvckxhYmVsID0gPExhYmVsIGNvbG9yPVwicmVkXCIgcG9pbnRpbmc9J2Fib3ZlJy8+XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2ZpbGUgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBlbWFpbDogQXV0aC5nZXRVc2VyKCkuZW1haWwsXG4gICAgICAgICAgICBuYW1lOiBBdXRoLmdldFVzZXIoKS5uYW1lLFxuICAgICAgICAgICAgZXJyb3JMYWJlbDogJycsXG4gICAgICAgICAgICBkcm9wem9uZVJlZjogbnVsbCxcbiAgICAgICAgICAgIGltYWdlOiBgZGF0YTppbWFnZTtiYXNlNjQsJHtuZXcgQnVmZmVyKEF1dGguZ2V0VXNlcigpLmltYWdlKS50b1N0cmluZygnYmFzZTY0Jyl9YFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcylcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gZS50YXJnZXRcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBbbmFtZV06IHZhbHVlLFxuICAgICAgICAgICAgZXJyb3JMYWJlbDogJydcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgICBmZXRjaCgnL3Byb2ZpbGUnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgYmVhcmVyICR7QXV0aC5nZXRUb2tlbigpfWBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgZW1haWw6IHRoaXMuc3RhdGUuZW1haWwsXG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5zdGF0ZS5uYW1lLFxuICAgICAgICAgICAgICAgIGltYWdlOiB0aGlzLnN0YXRlLmltYWdlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlcy5zdGF0dXMgPT09IDQwMClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgY29sb3I9J3JlZCc+Q2FuJ3QgbG9naW48L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgY29sb3I9J3JlZCc+e3Jlcy5zdGF0dXNUZXh0fTwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgQXV0aC51cGRhdGVVc2VyKGpzb24udXNlcilcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57ZXJyfTwvTGFiZWw+XG4gICAgICAgICAgICB9KSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxOYXZCYXIvPlxuICAgICAgICAgICAgICAgIDxTZWdtZW50IHBhZGRlZD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gb25WYWxpZFN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3JMYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcHpvbmUgcmVmPXsobm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kcm9wem9uZVJlZiA9IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gb25Ecm9wPXsoYWNjZXB0ZWQsIHJlamVjdGVkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogYWNjZXB0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGFzPSdhJyBjb2xvcj0ndGVhbCcgcmliYm9uPkRyb3AgbmV3IGF2YXRhcjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3RoaXMuc3RhdGUuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2lyY3VsYXIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3B6b25lPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHN0cmV0Y2hlZCB3aWR0aD17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nbmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdVc2VybmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW50VmFsaWRhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoOiA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogMjBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoOiAnVXNlcm5hbWUgc2hvdWxkIG5vdCBjb250YWluIGxlc3MgdGhhbiA1IGNoYXJhY3RlcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogJ1VzZXJuYW1lIHNob3VsZCBub3QgY29udGFpbiBtb3JlIHRoYW4gMjAgY2hhcmFjdGVycycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEZWZhdWx0UmVxdWlyZWRWYWx1ZTogJ1VzZXJuYW1lIGlzIHJlcXVpcmVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw9e2Vycm9yTGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdlbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdFbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFudFZhbGlkYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9ucz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRW1haWw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiA1MFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0VtYWlsOiAnRW1haWwgc2hvdWxkIGJlIHZhbGlkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6ICdFbWFpbCBzaG91bGQgbm90IGNvbnRhaW4gbW9yZSB0aGFuIDUwIGNoYXJhY3RlcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVmYXVsdFJlcXVpcmVkVmFsdWU6ICdFbWFpbCBpcyByZXF1aXJlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsPXtlcnJvckxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgZmx1aWQgdHlwZT0nc3VibWl0Jz5TYXZlPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250YWluZXJzL1Byb2ZpbGUuanMiXSwic291cmNlUm9vdCI6IiJ9