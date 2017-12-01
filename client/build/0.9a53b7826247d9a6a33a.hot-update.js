webpackHotUpdate(0,{

/***/ 914:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _formsySemanticUiReact = __webpack_require__(257);

var _reactDropzone = __webpack_require__(915);

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _semanticUiReact = __webpack_require__(17);

var _navbar = __webpack_require__(63);

var _navbar2 = _interopRequireDefault(_navbar);

var _logo = __webpack_require__(159);

var _logo2 = _interopRequireDefault(_logo);

var _Auth = __webpack_require__(73);

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
                                _semanticUiReact.Grid.Row,
                                { container: true, cols: true },
                                _react2.default.createElement(
                                    _semanticUiReact.Grid.Column,
                                    { width: 4 },
                                    _react2.default.createElement(
                                        _semanticUiReact.Label,
                                        { as: 'a', color: 'teal', ribbon: true },
                                        'Drop new avatar'
                                    ),
                                    _react2.default.createElement(
                                        _reactDropzone2.default,
                                        { accept: 'image/*', onDrop: function onDrop(accepted) {
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
                                        _react2.default.createElement(_semanticUiReact.Image, { style: { maxWidth: '100%', maxHeight: '100%' }, src: this.state.imageUrl })
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
                )
            );
        }
    }]);

    return Profile;
}(_react.Component);

exports.default = Profile;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Qcm9maWxlLmpzIl0sIm5hbWVzIjpbImVycm9yTGFiZWwiLCJQcm9maWxlIiwicHJvcHMiLCJzdGF0ZSIsImVtYWlsIiwiZ2V0VXNlciIsIm5hbWUiLCJkcm9wem9uZVJlZiIsImltYWdlIiwiaW1hZ2VVcmwiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlU3VibWl0IiwiZSIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGUiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZmllbGQiLCJhcHBlbmQiLCJsb2FkaW5nIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiZ2V0VG9rZW4iLCJib2R5IiwidGhlbiIsInJlcyIsInN0YXR1cyIsInVwZGF0ZVVzZXIiLCJzdGF0dXNUZXh0IiwiY2F0Y2giLCJlcnIiLCJhY2NlcHRlZCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJtaW5MZW5ndGgiLCJtYXhMZW5ndGgiLCJpc0RlZmF1bHRSZXF1aXJlZFZhbHVlIiwiaXNFbWFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWEsd0RBQU8sT0FBTSxLQUFiLEVBQW1CLFVBQVMsT0FBNUIsR0FBbkI7O0lBRXFCQyxPOzs7QUFFakIscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxzSEFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWE7QUFDVEMsbUJBQU8sZUFBS0MsT0FBTCxHQUFlRCxLQURiO0FBRVRFLGtCQUFNLGVBQUtELE9BQUwsR0FBZUMsSUFGWjtBQUdUTix3QkFBWSxFQUhIO0FBSVRPLHlCQUFhLElBSko7QUFLVEMsbUJBQU8sRUFMRTtBQU1UQyxzQkFB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QUFxQ0k7QUFBQTtBQUFBLDBDQUFRLGFBQVIsRUFBZ0IsV0FBaEIsRUFBc0IsTUFBSyxRQUEzQjtBQUFBO0FBQUE7QUFyQ0o7QUFsQkE7QUFESjtBQUZKO0FBSko7QUFGSixhQURKO0FBeUVIOzs7Ozs7a0JBeElnQkMsTyIsImZpbGUiOiIwLjlhNTNiNzgyNjI0N2Q5YTZhMzNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtGb3JtfSBmcm9tICdmb3Jtc3ktc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgRHJvcHpvbmUgZnJvbSAncmVhY3QtZHJvcHpvbmUnXG5pbXBvcnQge0J1dHRvbiwgR3JpZCwgSW1hZ2UsIElucHV0LCBMYWJlbCwgTGlzdCwgU2VnbWVudCwgRGltbWVyLCBMb2FkZXJ9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdmJhcidcbmltcG9ydCBMb2dvIGZyb20gJy4uL3Jlcy9pbWFnZXMvbG9nby5wbmcnXG5pbXBvcnQgQXV0aCBmcm9tICcuLi9tb2R1bGVzL0F1dGgnXG5cbmNvbnN0IGVycm9yTGFiZWwgPSA8TGFiZWwgY29sb3I9XCJyZWRcIiBwb2ludGluZz0nYWJvdmUnLz5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZmlsZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGVtYWlsOiBBdXRoLmdldFVzZXIoKS5lbWFpbCxcbiAgICAgICAgICAgIG5hbWU6IEF1dGguZ2V0VXNlcigpLm5hbWUsXG4gICAgICAgICAgICBlcnJvckxhYmVsOiAnJyxcbiAgICAgICAgICAgIGRyb3B6b25lUmVmOiBudWxsLFxuICAgICAgICAgICAgaW1hZ2U6ICcnLFxuICAgICAgICAgICAgaW1hZ2VVcmw6IEF1dGguZ2V0VXNlcigpLmltYWdlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKVxuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgICAgIGNvbnN0IHtuYW1lLCB2YWx1ZX0gPSBlLnRhcmdldFxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgICAgICAgICBlcnJvckxhYmVsOiAnJyxcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVTdWJtaXQoKSB7XG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICAgIGZvciAobGV0IGZpZWxkIG9mIFsnZW1haWwnLCAnbmFtZScsICdpbWFnZSddKVxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGZpZWxkLCB0aGlzLnN0YXRlW2ZpZWxkXSlcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgICAgfSlcblxuICAgICAgICBmZXRjaCgnL3Byb2ZpbGUnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYGJlYXJlciAke0F1dGguZ2V0VG9rZW4oKX1gXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogZm9ybURhdGFcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICBBdXRoLnVwZGF0ZVVzZXIodGhpcy5zdGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlcy5zdGF0dXMgPT09IDQwMClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgYXM9J2EnIGNvbG9yPSdyZWQnPkNhbid0IGxvZ2luPC9MYWJlbD4sXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgYXM9J2EnIGNvbG9yPSdyZWQnPntyZXMuc3RhdHVzVGV4dH08L0xhYmVsPixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgYXM9J2EnIGNvbG9yPSdyZWQnPntlcnIgfHwgJ0Vycm9yJ308L0xhYmVsPixcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8TmF2QmFyLz5cbiAgICAgICAgICAgICAgICA8U2VnbWVudCBwYWRkZWQ+XG4gICAgICAgICAgICAgICAgICAgIDxEaW1tZXIgYWN0aXZlPXt0aGlzLnN0YXRlLmxvYWRpbmd9IGludmVydGVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRlci8+XG4gICAgICAgICAgICAgICAgICAgIDwvRGltbWVyPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSBvblZhbGlkU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvckxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93IGNvbnRhaW5lciBjb2xzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBhcz0nYScgY29sb3I9J3RlYWwnIHJpYmJvbj5Ecm9wIG5ldyBhdmF0YXI8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcHpvbmUgYWNjZXB0PXsnaW1hZ2UvKid9IG9uRHJvcD17KGFjY2VwdGVkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogYWNjZXB0ZWRbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsOiByZWFkZXIucmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYWNjZXB0ZWRbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0eWxlPXt7bWF4V2lkdGg6ICcxMDAlJywgbWF4SGVpZ2h0OiAnMTAwJSd9fSBzcmM9e3RoaXMuc3RhdGUuaW1hZ2VVcmx9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcHpvbmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gc3RyZXRjaGVkIHdpZHRoPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSduYW1lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1VzZXJuYW1lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbnRWYWxpZGF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiAyMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg6ICdVc2VybmFtZSBzaG91bGQgbm90IGNvbnRhaW4gbGVzcyB0aGFuIDUgY2hhcmFjdGVycycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiAnVXNlcm5hbWUgc2hvdWxkIG5vdCBjb250YWluIG1vcmUgdGhhbiAyMCBjaGFyYWN0ZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RlZmF1bHRSZXF1aXJlZFZhbHVlOiAnVXNlcm5hbWUgaXMgcmVxdWlyZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbD17ZXJyb3JMYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2VtYWlsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0VtYWlsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW50VmFsaWRhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFbWFpbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDUwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRW1haWw6ICdFbWFpbCBzaG91bGQgYmUgdmFsaWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogJ0VtYWlsIHNob3VsZCBub3QgY29udGFpbiBtb3JlIHRoYW4gNTAgY2hhcmFjdGVycycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEZWZhdWx0UmVxdWlyZWRWYWx1ZTogJ0VtYWlsIGlzIHJlcXVpcmVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw9e2Vycm9yTGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBmbHVpZCB0eXBlPSdzdWJtaXQnPlNhdmU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udGFpbmVycy9Qcm9maWxlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==