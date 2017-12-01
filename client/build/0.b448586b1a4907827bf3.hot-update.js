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
                                            var reader = new FileReader();
                                            reader.onload = function () {
                                                var binaryFile = reader.result;
                                                _this3.setState({
                                                    image: binaryFile
                                                });
                                            };
                                            reader.readAsBinaryString(accepted[0]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Qcm9maWxlLmpzIl0sIm5hbWVzIjpbImVycm9yTGFiZWwiLCJQcm9maWxlIiwicHJvcHMiLCJzdGF0ZSIsImVtYWlsIiwiZ2V0VXNlciIsIm5hbWUiLCJkcm9wem9uZVJlZiIsImltYWdlIiwiQnVmZmVyIiwidG9TdHJpbmciLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlU3VibWl0IiwiZSIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGUiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJnZXRUb2tlbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsInN0YXR1cyIsImpzb24iLCJzdGF0dXNUZXh0IiwidXBkYXRlVXNlciIsInVzZXIiLCJjYXRjaCIsImVyciIsIm5vZGUiLCJhY2NlcHRlZCIsInJlamVjdGVkIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImJpbmFyeUZpbGUiLCJyZXN1bHQiLCJyZWFkQXNCaW5hcnlTdHJpbmciLCJtaW5MZW5ndGgiLCJtYXhMZW5ndGgiLCJpc0RlZmF1bHRSZXF1aXJlZFZhbHVlIiwiaXNFbWFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWEsd0RBQU8sT0FBTSxLQUFiLEVBQW1CLFVBQVMsT0FBNUIsR0FBbkI7O0lBRXFCQyxPOzs7QUFFakIscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxzSEFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWE7QUFDVEMsbUJBQU8sZUFBS0MsT0FBTCxHQUFlRCxLQURiO0FBRVRFLGtCQUFNLGVBQUtELE9BQUwsR0FBZUMsSUFGWjtBQUdUTix3QkFBWSxFQUhIO0FBSVRPLHlCQUFhLElBSko7QUFLVEMsMENBQTRCLElBQUlDLE1B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REFGSjtBQWJKO0FBREosNkJBRko7QUFxQkk7QUFBQSxzREFBTSxNQUFOO0FBQUEsa0NBQWEsZUFBYixFQUF1QixPQUFPLEVBQTlCO0FBQ0ksMEZBQU0sS0FBTjtBQUNJLDBDQUFLLE1BRFQ7QUFFSSwyQ0FBTSxVQUZWO0FBR0ksMkNBQU8sS0FBS0wsS0FBTCxDQUFXRyxJQUh0QjtBQUlJLDhDQUFVLEtBQUtLLFlBSm5CO0FBS0ksMkRBTEo7QUFNSSxrREFOSjtBQU9JLGlEQUFhO0FBQ1RnQyxtREFBVyxDQURGO0FBRVRDLG1EQUFXO0FBRkYscUNBUGpCO0FBV0ksc0RBQWtCO0FBQ2RELG1EQUFXLG9EQURHO0FBRWRDLG1EQUFXLHFEQUZHO0FBR2RDLGdFQUF3QjtBQUhWLHFDQVh0QjtBQWdCSSxnREFBWTdDO0FBaEJoQixrQ0FESjtBQW1CSSwwRkFBTSxLQUFOO0FBQ0ksMENBQUssT0FEVDtBQUVJLDJDQUFNLE9BRlY7QUFHSSwyQ0FBTyxLQUFLRyxLQUFMLENBQVdDLEtBSHRCO0FBSUksOENBQVUsS0FBS08sWUFKbkI7QUFLSSwyREFMSjtBQU1JLGtEQU5KO0FBT0ksaURBQWE7QUFDVG1DLGlEQUFTLElBREE7QUFFVEYsbURBQVc7QUFGRixxQ0FQakI7QUFXSSxzREFBa0I7QUFDZEUsaURBQVMsdUJBREs7QUFFZEYsbURBQVcsa0RBRkc7QUFHZEMsZ0VBQXdCO0FBSFYscUNBWHRCO0FBZ0JJLGdEQUFZN0M7QUFoQmhCLGtDQW5CSjtBQXFDSTtBQUFBO0FBQUEsc0NBQVEsYUFBUixFQUFnQixXQUFoQixFQUFzQixNQUFLLFFBQTNCO0FBQUE7QUFBQTtBQXJDSjtBQXJCSjtBQURKO0FBREo7QUFGSixhQURKO0FBc0VIOzs7Ozs7a0JBL0hnQkMsTyIsImZpbGUiOiIwLmI0NDg1ODZiMWE0OTA3ODI3YmYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtGb3JtfSBmcm9tICdmb3Jtc3ktc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgRHJvcHpvbmUgZnJvbSAncmVhY3QtZHJvcHpvbmUnXG5pbXBvcnQge0J1dHRvbiwgR3JpZCwgSW1hZ2UsIElucHV0LCBMYWJlbCwgTGlzdCwgU2VnbWVudH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyJ1xuaW1wb3J0IExvZ28gZnJvbSAnLi4vcmVzL2ltYWdlcy9sb2dvLnBuZydcbmltcG9ydCBBdXRoIGZyb20gJy4uL21vZHVsZXMvQXV0aCdcblxuY29uc3QgZXJyb3JMYWJlbCA9IDxMYWJlbCBjb2xvcj1cInJlZFwiIHBvaW50aW5nPSdhYm92ZScvPlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9maWxlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZW1haWw6IEF1dGguZ2V0VXNlcigpLmVtYWlsLFxuICAgICAgICAgICAgbmFtZTogQXV0aC5nZXRVc2VyKCkubmFtZSxcbiAgICAgICAgICAgIGVycm9yTGFiZWw6ICcnLFxuICAgICAgICAgICAgZHJvcHpvbmVSZWY6IG51bGwsXG4gICAgICAgICAgICBpbWFnZTogYGRhdGE6aW1hZ2U7YmFzZTY0LCR7bmV3IEJ1ZmZlcihBdXRoLmdldFVzZXIoKS5pbWFnZSkudG9TdHJpbmcoJ2Jhc2U2NCcpfWBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICAgICAgY29uc3Qge25hbWUsIHZhbHVlfSA9IGUudGFyZ2V0XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICAgICAgICAgIGVycm9yTGFiZWw6ICcnXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgZmV0Y2goJy9wcm9maWxlJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYGJlYXJlciAke0F1dGguZ2V0VG9rZW4oKX1gXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLnN0YXRlLmVtYWlsLFxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuc3RhdGUubmFtZSxcbiAgICAgICAgICAgICAgICBpbWFnZTogdGhpcy5zdGF0ZS5pbWFnZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXMuc3RhdHVzID09PSA0MDApXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPkNhbid0IGxvZ2luPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGNvbG9yPSdyZWQnPntyZXMuc3RhdHVzVGV4dH08L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIEF1dGgudXBkYXRlVXNlcihqc29uLnVzZXIpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgY29sb3I9J3JlZCc+e2Vycn08L0xhYmVsPlxuICAgICAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8TmF2QmFyLz5cbiAgICAgICAgICAgICAgICA8U2VnbWVudCBwYWRkZWQ+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIG9uVmFsaWRTdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVycm9yTGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3B6b25lIHJlZj17KG5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZHJvcHpvbmVSZWYgPSBub2RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IG9uRHJvcD17KGFjY2VwdGVkLCByZWplY3RlZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiaW5hcnlGaWxlID0gcmVhZGVyLnJlc3VsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogYmluYXJ5RmlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzQmluYXJ5U3RyaW5nKGFjY2VwdGVkWzBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBhcz0nYScgY29sb3I9J3RlYWwnIHJpYmJvbj5Ecm9wIG5ldyBhdmF0YXI8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt0aGlzLnN0YXRlLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpcmN1bGFyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wem9uZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBzdHJldGNoZWQgd2lkdGg9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J25hbWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nVXNlcm5hbWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFudFZhbGlkYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9ucz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDIwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogJ1VzZXJuYW1lIHNob3VsZCBub3QgY29udGFpbiBsZXNzIHRoYW4gNSBjaGFyYWN0ZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6ICdVc2VybmFtZSBzaG91bGQgbm90IGNvbnRhaW4gbW9yZSB0aGFuIDIwIGNoYXJhY3RlcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVmYXVsdFJlcXVpcmVkVmFsdWU6ICdVc2VybmFtZSBpcyByZXF1aXJlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsPXtlcnJvckxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nZW1haWwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nRW1haWwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbnRWYWxpZGF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0VtYWlsOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogNTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFbWFpbDogJ0VtYWlsIHNob3VsZCBiZSB2YWxpZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiAnRW1haWwgc2hvdWxkIG5vdCBjb250YWluIG1vcmUgdGhhbiA1MCBjaGFyYWN0ZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RlZmF1bHRSZXF1aXJlZFZhbHVlOiAnRW1haWwgaXMgcmVxdWlyZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbD17ZXJyb3JMYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IGZsdWlkIHR5cGU9J3N1Ym1pdCc+U2F2ZTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udGFpbmVycy9Qcm9maWxlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==