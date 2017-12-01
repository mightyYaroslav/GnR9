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
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        _reactDropzone2.default,
                                        { ref: function ref(node) {
                                                _this3.state.dropzoneRef = node;
                                            }, onDrop: function onDrop(accepted, rejected) {
                                                alert(accepted);
                                            } },
                                        _react2.default.createElement(
                                            'p',
                                            null,
                                            'Drop files here.'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'button',
                                        { type: 'button', onClick: function onClick() {
                                                _this3.state.dropzoneRef.open();
                                            } },
                                        'Open File Dialog'
                                    )
                                ),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Qcm9maWxlLmpzIl0sIm5hbWVzIjpbImVycm9yTGFiZWwiLCJQcm9maWxlIiwicHJvcHMiLCJzdGF0ZSIsImVtYWlsIiwiZ2V0VXNlciIsIm5hbWUiLCJkcm9wem9uZVJlZiIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVTdWJtaXQiLCJmaWxlcyIsInNldFN0YXRlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiZ2V0VG9rZW4iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwic3RhdHVzVGV4dCIsInVwZGF0ZVVzZXIiLCJ1c2VyIiwiY2F0Y2giLCJlcnIiLCJCdWZmZXIiLCJpbWFnZSIsInRvU3RyaW5nIiwibWluTGVuZ3RoIiwibWF4TGVuZ3RoIiwiaXNEZWZhdWx0UmVxdWlyZWRWYWx1ZSIsImlzRW1haWwiLCJub2RlIiwiYWNjZXB0ZWQiLCJyZWplY3RlZCIsImFsZXJ0Iiwib3BlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWEsd0RBQU8sT0FBTSxLQUFiLEVBQW1CLFVBQVMsT0FBNUIsR0FBbkI7O0lBRXFCQyxPOzs7QUFFakIscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxzSEFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWE7QUFDVEMsbUJBQU8sZUFBS0MsT0FBTCxHQUFlRCxLQURiO0FBRVRFLGtCQUFNLGVBQUtELE9BQUwsR0FBZUMsSUFGWjtBQUdUTix3QkFBWSxFQUhIO0FBSVRPLHlCQUFhO0FBSkosU0FBYjtBQU1BLGNBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsT0FBcEI7QUFDQSxjQUFLQyxZQUFM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Q0FBTyxLQUFLRyxLQUFMLENBQVdDLEtBSHRCO0FBSUksOENBQVUsS0FBS0ksWUFKbkI7QUFLSSwyREFMSjtBQU1JLGtEQU5KO0FBT0ksaURBQWE7QUFDVDhCLGlEQUFTLElBREE7QUFFVEYsbURBQVc7QUFGRixxQ0FQakI7QUFXSSxzREFBa0I7QUFDZEUsaURBQVMsdUJBREs7QUFFZEYsbURBQVcsa0RBRkc7QUFHZEMsZ0VBQXdCO0FBSFYscUNBWHRCO0FBZ0JJLGdEQUFZckM7QUFoQmhCLGtDQXBCSjtBQXNDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsMENBQVUsS0FBSyxhQUFDdUMsSUFBRCxFQUFVO0FBQUUsdURBQUtwQyxLQUFMLENBQVdJLFdBQVgsR0FBeUJnQyxJQUF6QjtBQUErQiw2Q0FBMUQsRUFBNEQsUUFBUSxnQkFBQ0MsUUFBRCxFQUFXQyxRQUFYLEVBQXdCO0FBQUVDLHNEQUFNRixRQUFOO0FBQWlCLDZDQUEvRztBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixxQ0FESjtBQUlJO0FBQUE7QUFBQSwwQ0FBUSxNQUFLLFFBQWIsRUFBc0IsU0FBUyxtQkFBTTtBQUFFLHVEQUFLckMsS0FBTCxDQUFXSSxXQUFYLENBQXVCb0MsSUFBdkI7QUFBK0IsNkNBQXRFO0FBQUE7QUFBQTtBQUpKLGlDQXRDSjtBQThDSTtBQUFBO0FBQUEsc0NBQVEsYUFBUixFQUFnQixXQUFoQixFQUFzQixNQUFLLFFBQTNCO0FBQUE7QUFBQTtBQTlDSjtBQURKO0FBTEo7QUFESjtBQUZKLGFBREo7QUErREg7Ozs7OztrQkE1SGdCMUMsTyIsImZpbGUiOiIwLjYzNjA4YzU4ZWI1MDMwMWFhOTk1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnZm9ybXN5LXNlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IERyb3B6b25lIGZyb20gJ3JlYWN0LWRyb3B6b25lJ1xuaW1wb3J0IHtCdXR0b24sIEdyaWQsIEltYWdlLCBJbnB1dCwgTGFiZWwsIExpc3QsIFNlZ21lbnR9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdmJhcidcbmltcG9ydCBMb2dvIGZyb20gJy4uL3Jlcy9pbWFnZXMvbG9nby5wbmcnXG5pbXBvcnQgQXV0aCBmcm9tICcuLi9tb2R1bGVzL0F1dGgnXG5cbmNvbnN0IGVycm9yTGFiZWwgPSA8TGFiZWwgY29sb3I9XCJyZWRcIiBwb2ludGluZz0nYWJvdmUnLz5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZmlsZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGVtYWlsOiBBdXRoLmdldFVzZXIoKS5lbWFpbCxcbiAgICAgICAgICAgIG5hbWU6IEF1dGguZ2V0VXNlcigpLm5hbWUsXG4gICAgICAgICAgICBlcnJvckxhYmVsOiAnJyxcbiAgICAgICAgICAgIGRyb3B6b25lUmVmOiBudWxsXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKVxuICAgIH1cblxuICAgIG9uRHJvcChmaWxlcykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGZpbGVzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICAgICAgICAgIGVycm9yTGFiZWw6ICcnXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgZmV0Y2goJy9wcm9maWxlJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYGJlYXJlciAke0F1dGguZ2V0VG9rZW4oKX1gXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLnN0YXRlLmVtYWlsLFxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuc3RhdGUubmFtZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgICAgICAgICAgICAgIGVsc2UgaWYocmVzLnN0YXR1cyA9PT0gNDAwKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz5DYW4ndCBsb2dpbjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBjb2xvcj0ncmVkJz57cmVzLnN0YXR1c1RleHR9PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBBdXRoLnVwZGF0ZVVzZXIoanNvbi51c2VyKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntlcnJ9PC9MYWJlbD5cbiAgICAgICAgICAgIH0pKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPE5hdkJhci8+XG4gICAgICAgICAgICAgICAgPFNlZ21lbnQgcGFkZGVkPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGFzPSdhJyBjb2xvcj0ndGVhbCcgcmliYm9uPkF2YXRhcjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17YGRhdGE6aW1hZ2U7YmFzZTY0LCR7bmV3IEJ1ZmZlcihBdXRoLmdldFVzZXIoKS5pbWFnZSkudG9TdHJpbmcoJ2Jhc2U2NCcpfWB9IGNpcmN1bGFyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gc3RyZXRjaGVkIHdpZHRoPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gb25WYWxpZFN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvckxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nbmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdVc2VybmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW50VmFsaWRhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoOiA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogMjBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoOiAnVXNlcm5hbWUgc2hvdWxkIG5vdCBjb250YWluIGxlc3MgdGhhbiA1IGNoYXJhY3RlcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogJ1VzZXJuYW1lIHNob3VsZCBub3QgY29udGFpbiBtb3JlIHRoYW4gMjAgY2hhcmFjdGVycycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEZWZhdWx0UmVxdWlyZWRWYWx1ZTogJ1VzZXJuYW1lIGlzIHJlcXVpcmVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw9e2Vycm9yTGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdlbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdFbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFudFZhbGlkYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9ucz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRW1haWw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiA1MFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0VtYWlsOiAnRW1haWwgc2hvdWxkIGJlIHZhbGlkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6ICdFbWFpbCBzaG91bGQgbm90IGNvbnRhaW4gbW9yZSB0aGFuIDUwIGNoYXJhY3RlcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVmYXVsdFJlcXVpcmVkVmFsdWU6ICdFbWFpbCBpcyByZXF1aXJlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsPXtlcnJvckxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3B6b25lIHJlZj17KG5vZGUpID0+IHsgdGhpcy5zdGF0ZS5kcm9wem9uZVJlZiA9IG5vZGUgfX0gb25Ecm9wPXsoYWNjZXB0ZWQsIHJlamVjdGVkKSA9PiB7IGFsZXJ0KGFjY2VwdGVkKSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Ecm9wIGZpbGVzIGhlcmUuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wem9uZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHsgdGhpcy5zdGF0ZS5kcm9wem9uZVJlZi5vcGVuKCkgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT3BlbiBGaWxlIERpYWxvZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgZmx1aWQgdHlwZT0nc3VibWl0Jz5TYXZlPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250YWluZXJzL1Byb2ZpbGUuanMiXSwic291cmNlUm9vdCI6IiJ9