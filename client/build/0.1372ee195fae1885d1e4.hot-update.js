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

var _reactDropzone = __webpack_require__(897);

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
                    'Authorization': 'bearer ' + _Auth2.default.getToken()
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
                        err || 'Error'
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

/***/ }),

/***/ 897:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(898);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_styles__ = __webpack_require__(900);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint prefer-template: 0 */






var Dropzone = function (_React$Component) {
  _inherits(Dropzone, _React$Component);

  function Dropzone(props, context) {
    _classCallCheck(this, Dropzone);

    var _this = _possibleConstructorReturn(this, (Dropzone.__proto__ || Object.getPrototypeOf(Dropzone)).call(this, props, context));

    _this.renderChildren = function (children, isDragActive, isDragAccept, isDragReject) {
      if (typeof children === 'function') {
        return children(_extends({}, _this.state, {
          isDragActive: isDragActive,
          isDragAccept: isDragAccept,
          isDragReject: isDragReject
        }));
      }
      return children;
    };

    _this.composeHandlers = _this.composeHandlers.bind(_this);
    _this.onClick = _this.onClick.bind(_this);
    _this.onDocumentDrop = _this.onDocumentDrop.bind(_this);
    _this.onDragEnter = _this.onDragEnter.bind(_this);
    _this.onDragLeave = _this.onDragLeave.bind(_this);
    _this.onDragOver = _this.onDragOver.bind(_this);
    _this.onDragStart = _this.onDragStart.bind(_this);
    _this.onDrop = _this.onDrop.bind(_this);
    _this.onFileDialogCancel = _this.onFileDialogCancel.bind(_this);
    _this.onInputElementClick = _this.onInputElementClick.bind(_this);

    _this.setRef = _this.setRef.bind(_this);
    _this.setRefs = _this.setRefs.bind(_this);

    _this.isFileDialogActive = false;

    _this.state = {
      draggedFiles: [],
      acceptedFiles: [],
      rejectedFiles: []
    };
    return _this;
  }

  _createClass(Dropzone, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var preventDropOnDocument = this.props.preventDropOnDocument;

      this.dragTargets = [];

      if (preventDropOnDocument) {
        document.addEventListener('dragover', __WEBPACK_IMPORTED_MODULE_2__utils__["e" /* onDocumentDragOver */], false);
        document.addEventListener('drop', this.onDocumentDrop, false);
      }
      this.fileInputEl.addEventListener('click', this.onInputElementClick, false);
      // Tried implementing addEventListener, but didn't work out
      document.body.onfocus = this.onFileDialogCancel;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var preventDropOnDocument = this.props.preventDropOnDocument;

      if (preventDropOnDocument) {
        document.removeEventListener('dragover', __WEBPACK_IMPORTED_MODULE_2__utils__["e" /* onDocumentDragOver */]);
        document.removeEventListener('drop', this.onDocumentDrop);
      }
      this.fileInputEl.removeEventListener('click', this.onInputElementClick, false);
      // Can be replaced with removeEventListener, if addEventListener works
      document.body.onfocus = null;
    }
  }, {
    key: 'composeHandlers',
    value: function composeHandlers(handler) {
      if (this.props.disabled) {
        return null;
      }

      return handler;
    }
  }, {
    key: 'onDocumentDrop',
    value: function onDocumentDrop(evt) {
      if (this.node && this.node.contains(evt.target)) {
        // if we intercepted an event for our instance, let it propagate down to the instance's onDrop handler
        return;
      }
      evt.preventDefault();
      this.dragTargets = [];
    }
  }, {
    key: 'onDragStart',
    value: function onDragStart(evt) {
      if (this.props.onDragStart) {
        this.props.onDragStart.call(this, evt);
      }
    }
  }, {
    key: 'onDragEnter',
    value: function onDragEnter(evt) {
      evt.preventDefault();

      // Count the dropzone and any children that are entered.
      if (this.dragTargets.indexOf(evt.target) === -1) {
        this.dragTargets.push(evt.target);
      }

      this.setState({
        isDragActive: true, // Do not rely on files for the drag state. It doesn't work in Safari.
        draggedFiles: Object(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* getDataTransferItems */])(evt)
      });

      if (this.props.onDragEnter) {
        this.props.onDragEnter.call(this, evt);
      }
    }
  }, {
    key: 'onDragOver',
    value: function onDragOver(evt) {
      // eslint-disable-line class-methods-use-this
      evt.preventDefault();
      evt.stopPropagation();
      try {
        evt.dataTransfer.dropEffect = 'copy'; // eslint-disable-line no-param-reassign
      } catch (err) {
        // continue regardless of error
      }

      if (this.props.onDragOver) {
        this.props.onDragOver.call(this, evt);
      }
      return false;
    }
  }, {
    key: 'onDragLeave',
    value: function onDragLeave(evt) {
      var _this2 = this;

      evt.preventDefault();

      // Only deactivate once the dropzone and all children have been left.
      this.dragTargets = this.dragTargets.filter(function (el) {
        return el !== evt.target && _this2.node.contains(el);
      });
      if (this.dragTargets.length > 0) {
        return;
      }

      // Clear dragging files state
      this.setState({
        isDragActive: false,
        draggedFiles: []
      });

      if (this.props.onDragLeave) {
        this.props.onDragLeave.call(this, evt);
      }
    }
  }, {
    key: 'onDrop',
    value: function onDrop(evt) {
      var _this3 = this;

      var _props = this.props,
          onDrop = _props.onDrop,
          onDropAccepted = _props.onDropAccepted,
          onDropRejected = _props.onDropRejected,
          multiple = _props.multiple,
          disablePreview = _props.disablePreview,
          accept = _props.accept;

      var fileList = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* getDataTransferItems */])(evt);
      var acceptedFiles = [];
      var rejectedFiles = [];

      // Stop default browser behavior
      evt.preventDefault();

      // Reset the counter along with the drag on a drop.
      this.dragTargets = [];
      this.isFileDialogActive = false;

      fileList.forEach(function (file) {
        if (!disablePreview) {
          try {
            file.preview = window.URL.createObjectURL(file); // eslint-disable-line no-param-reassign
          } catch (err) {
            if (process.env.NODE_ENV !== 'production') {
              console.error('Failed to generate preview for file', file, err); // eslint-disable-line no-console
            }
          }
        }

        if (Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* fileAccepted */])(file, accept) && Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* fileMatchSize */])(file, _this3.props.maxSize, _this3.props.minSize)) {
          acceptedFiles.push(file);
        } else {
          rejectedFiles.push(file);
        }
      });

      if (!multiple) {
        // if not in multi mode add any extra accepted files to rejected.
        // This will allow end users to easily ignore a multi file drop in "single" mode.
        rejectedFiles.push.apply(rejectedFiles, _toConsumableArray(acceptedFiles.splice(1)));
      }

      if (onDrop) {
        onDrop.call(this, acceptedFiles, rejectedFiles, evt);
      }

      if (rejectedFiles.length > 0 && onDropRejected) {
        onDropRejected.call(this, rejectedFiles, evt);
      }

      if (acceptedFiles.length > 0 && onDropAccepted) {
        onDropAccepted.call(this, acceptedFiles, evt);
      }

      // Clear files value
      this.draggedFiles = null;

      // Reset drag state
      this.setState({
        isDragActive: false,
        draggedFiles: [],
        acceptedFiles: acceptedFiles,
        rejectedFiles: rejectedFiles
      });
    }
  }, {
    key: 'onClick',
    value: function onClick(evt) {
      var _props2 = this.props,
          onClick = _props2.onClick,
          disableClick = _props2.disableClick;

      if (!disableClick) {
        evt.stopPropagation();

        if (onClick) {
          onClick.call(this, evt);
        }

        // in IE11/Edge the file-browser dialog is blocking, ensure this is behind setTimeout
        // this is so react can handle state changes in the onClick prop above above
        // see: https://github.com/react-dropzone/react-dropzone/issues/450
        setTimeout(this.open.bind(this), 0);
      }
    }
  }, {
    key: 'onInputElementClick',
    value: function onInputElementClick(evt) {
      evt.stopPropagation();
      if (this.props.inputProps && this.props.inputProps.onClick) {
        this.props.inputProps.onClick();
      }
    }
  }, {
    key: 'onFileDialogCancel',
    value: function onFileDialogCancel() {
      // timeout will not recognize context of this method
      var onFileDialogCancel = this.props.onFileDialogCancel;
      var fileInputEl = this.fileInputEl;
      var isFileDialogActive = this.isFileDialogActive;
      // execute the timeout only if the onFileDialogCancel is defined and FileDialog
      // is opened in the browser

      if (onFileDialogCancel && isFileDialogActive) {
        setTimeout(function () {
          // Returns an object as FileList
          var FileList = fileInputEl.files;
          if (!FileList.length) {
            isFileDialogActive = false;
            onFileDialogCancel();
          }
        }, 300);
      }
    }
  }, {
    key: 'setRef',
    value: function setRef(ref) {
      this.node = ref;
    }
  }, {
    key: 'setRefs',
    value: function setRefs(ref) {
      this.fileInputEl = ref;
    }
    /**
     * Open system file upload dialog.
     *
     * @public
     */

  }, {
    key: 'open',
    value: function open() {
      this.isFileDialogActive = true;
      this.fileInputEl.value = null;
      this.fileInputEl.click();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          accept = _props3.accept,
          acceptClassName = _props3.acceptClassName,
          activeClassName = _props3.activeClassName,
          children = _props3.children,
          disabled = _props3.disabled,
          disabledClassName = _props3.disabledClassName,
          inputProps = _props3.inputProps,
          multiple = _props3.multiple,
          name = _props3.name,
          rejectClassName = _props3.rejectClassName,
          rest = _objectWithoutProperties(_props3, ['accept', 'acceptClassName', 'activeClassName', 'children', 'disabled', 'disabledClassName', 'inputProps', 'multiple', 'name', 'rejectClassName']);

      var acceptStyle = rest.acceptStyle,
          activeStyle = rest.activeStyle,
          className = rest.className,
          disabledStyle = rest.disabledStyle,
          rejectStyle = rest.rejectStyle,
          style = rest.style,
          props = _objectWithoutProperties(rest, ['acceptStyle', 'activeStyle', 'className', 'disabledStyle', 'rejectStyle', 'style']);

      var _state = this.state,
          isDragActive = _state.isDragActive,
          draggedFiles = _state.draggedFiles;

      var filesCount = draggedFiles.length;
      var isMultipleAllowed = multiple || filesCount <= 1;
      var isDragAccept = filesCount > 0 && Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* allFilesAccepted */])(draggedFiles, this.props.accept);
      var isDragReject = filesCount > 0 && (!isDragAccept || !isMultipleAllowed);
      className = className || '';
      var noStyles = !className && !style && !activeStyle && !acceptStyle && !rejectStyle && !disabledStyle;

      if (isDragActive && activeClassName) {
        className += ' ' + activeClassName;
      }
      if (isDragAccept && acceptClassName) {
        className += ' ' + acceptClassName;
      }
      if (isDragReject && rejectClassName) {
        className += ' ' + rejectClassName;
      }
      if (disabled && disabledClassName) {
        className += ' ' + disabledClassName;
      }

      if (noStyles) {
        style = __WEBPACK_IMPORTED_MODULE_3__utils_styles__["a" /* default */].default;
        activeStyle = __WEBPACK_IMPORTED_MODULE_3__utils_styles__["a" /* default */].active;
        acceptStyle = style.active;
        rejectStyle = __WEBPACK_IMPORTED_MODULE_3__utils_styles__["a" /* default */].rejected;
        disabledStyle = __WEBPACK_IMPORTED_MODULE_3__utils_styles__["a" /* default */].disabled;
      }

      var appliedStyle = _extends({}, style);
      if (activeStyle && isDragActive) {
        appliedStyle = _extends({}, style, activeStyle);
      }
      if (acceptStyle && isDragAccept) {
        appliedStyle = _extends({}, appliedStyle, acceptStyle);
      }
      if (rejectStyle && isDragReject) {
        appliedStyle = _extends({}, appliedStyle, rejectStyle);
      }
      if (disabledStyle && disabled) {
        appliedStyle = _extends({}, style, disabledStyle);
      }

      var inputAttributes = {
        accept: accept,
        disabled: disabled,
        type: 'file',
        style: { display: 'none' },
        multiple: __WEBPACK_IMPORTED_MODULE_2__utils__["f" /* supportMultiple */] && multiple,
        ref: this.setRefs,
        onChange: this.onDrop,
        autoComplete: 'off'
      };

      if (name && name.length) {
        inputAttributes.name = name;
      }

      // Remove custom properties before passing them to the wrapper div element
      var customProps = ['acceptedFiles', 'preventDropOnDocument', 'disablePreview', 'disableClick', 'activeClassName', 'acceptClassName', 'rejectClassName', 'disabledClassName', 'onDropAccepted', 'onDropRejected', 'onFileDialogCancel', 'maxSize', 'minSize'];
      var divProps = _extends({}, props);
      customProps.forEach(function (prop) {
        return delete divProps[prop];
      });

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        _extends({
          className: className,
          style: appliedStyle
        }, divProps /* expand user provided props first so event handlers are never overridden */, {
          onClick: this.composeHandlers(this.onClick),
          onDragStart: this.composeHandlers(this.onDragStart),
          onDragEnter: this.composeHandlers(this.onDragEnter),
          onDragOver: this.composeHandlers(this.onDragOver),
          onDragLeave: this.composeHandlers(this.onDragLeave),
          onDrop: this.composeHandlers(this.onDrop),
          ref: this.setRef,
          'aria-disabled': disabled
        }),
        this.renderChildren(children, isDragActive, isDragAccept, isDragReject),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', _extends({}, inputProps /* expand user provided inputProps first so inputAttributes override them */, inputAttributes))
      );
    }
  }]);

  return Dropzone;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Dropzone);

Dropzone.propTypes = {
  /**
   * Allow specific types of files. See https://github.com/okonet/attr-accept for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all.
   * See: https://github.com/react-dropzone/react-dropzone/issues/276
   */
  accept: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,

  /**
   * Contents of the dropzone
   */
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func]),

  /**
   * Disallow clicking on the dropzone container to open file dialog
   */
  disableClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,

  /**
  * Enable/disable the dropzone entirely
  */
  disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,

  /**
   * Enable/disable preview generation
   */
  disablePreview: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,

  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,

  /**
   * Pass additional attributes to the `<input type="file"/>` tag
   */
  inputProps: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,

  /**
   * Allow dropping multiple files
   */
  multiple: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,

  /**
   * `name` attribute for the input tag
   */
  name: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,

  /**
   * Maximum file size
   */
  maxSize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,

  /**
   * Minimum file size
   */
  minSize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,

  /**
   * className
   */
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,

  /**
   * className for active state
   */
  activeClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,

  /**
   * className for accepted state
   */
  acceptClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,

  /**
   * className for rejected state
   */
  rejectClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,

  /**
   * className for disabled state
   */
  disabledClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,

  /**
   * CSS styles to apply
   */
  style: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,

  /**
   * CSS styles to apply when drag is active
   */
  activeStyle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,

  /**
   * CSS styles to apply when drop will be accepted
   */
  acceptStyle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,

  /**
   * CSS styles to apply when drop will be rejected
   */
  rejectStyle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,

  /**
   * CSS styles to apply when dropzone is disabled
   */
  disabledStyle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,

  /**
   * onClick callback
   * @param {Event} event
   */
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,

  /**
   * onDrop callback
   */
  onDrop: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,

  /**
   * onDropAccepted callback
   */
  onDropAccepted: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,

  /**
   * onDropRejected callback
   */
  onDropRejected: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,

  /**
   * onDragStart callback
   */
  onDragStart: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,

  /**
   * onDragEnter callback
   */
  onDragEnter: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,

  /**
   * onDragOver callback
   */
  onDragOver: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,

  /**
   * onDragLeave callback
   */
  onDragLeave: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,

  /**
   * Provide a callback on clicking the cancel button of the file dialog
   */
  onFileDialogCancel: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};

Dropzone.defaultProps = {
  preventDropOnDocument: true,
  disabled: false,
  disablePreview: false,
  disableClick: false,
  multiple: true,
  maxSize: Infinity,
  minSize: 0
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 898:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return supportMultiple; });
/* harmony export (immutable) */ __webpack_exports__["d"] = getDataTransferItems;
/* harmony export (immutable) */ __webpack_exports__["b"] = fileAccepted;
/* harmony export (immutable) */ __webpack_exports__["c"] = fileMatchSize;
/* harmony export (immutable) */ __webpack_exports__["a"] = allFilesAccepted;
/* harmony export (immutable) */ __webpack_exports__["e"] = onDocumentDragOver;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_attr_accept__ = __webpack_require__(899);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_attr_accept___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_attr_accept__);


var supportMultiple = typeof document !== 'undefined' && document && document.createElement ? 'multiple' in document.createElement('input') : true;

function getDataTransferItems(event) {
  var dataTransferItemsList = [];
  if (event.dataTransfer) {
    var dt = event.dataTransfer;
    if (dt.files && dt.files.length) {
      dataTransferItemsList = dt.files;
    } else if (dt.items && dt.items.length) {
      // During the drag even the dataTransfer.files is null
      // but Chrome implements some drag store, which is accesible via dataTransfer.items
      dataTransferItemsList = dt.items;
    }
  } else if (event.target && event.target.files) {
    dataTransferItemsList = event.target.files;
  }
  // Convert from DataTransferItemsList to the native Array
  return Array.prototype.slice.call(dataTransferItemsList);
}

// Firefox versions prior to 53 return a bogus MIME type for every file drag, so dragovers with
// that MIME type will always be accepted
function fileAccepted(file, accept) {
  return file.type === 'application/x-moz-file' || __WEBPACK_IMPORTED_MODULE_0_attr_accept___default()(file, accept);
}

function fileMatchSize(file, maxSize, minSize) {
  return file.size <= maxSize && file.size >= minSize;
}

function allFilesAccepted(files, accept) {
  return files.every(function (file) {
    return fileAccepted(file, accept);
  });
}

// allow the entire document to be a drag target
function onDocumentDragOver(evt) {
  evt.preventDefault();
}

/***/ }),

/***/ 899:
/***/ (function(module, exports) {

module.exports=function(t){function n(e){if(r[e])return r[e].exports;var o=r[e]={exports:{},id:e,loaded:!1};return t[e].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var r={};return n.m=t,n.c=r,n.p="",n(0)}([function(t,n,r){"use strict";n.__esModule=!0,r(8),r(9),n["default"]=function(t,n){if(t&&n){var r=function(){var r=Array.isArray(n)?n:n.split(","),e=t.name||"",o=t.type||"",i=o.replace(/\/.*$/,"");return{v:r.some(function(t){var n=t.trim();return"."===n.charAt(0)?e.toLowerCase().endsWith(n.toLowerCase()):/\/\*$/.test(n)?i===n.replace(/\/.*$/,""):o===n})}}();if("object"==typeof r)return r.v}return!0},t.exports=n["default"]},function(t,n){var r=t.exports={version:"1.2.2"};"number"==typeof __e&&(__e=r)},function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,n,r){var e=r(2),o=r(1),i=r(4),u=r(19),c="prototype",f=function(t,n){return function(){return t.apply(n,arguments)}},s=function(t,n,r){var a,p,l,y,d=t&s.G,h=t&s.P,v=d?e:t&s.S?e[n]||(e[n]={}):(e[n]||{})[c],x=d?o:o[n]||(o[n]={});d&&(r=n);for(a in r)p=!(t&s.F)&&v&&a in v,l=(p?v:r)[a],y=t&s.B&&p?f(l,e):h&&"function"==typeof l?f(Function.call,l):l,v&&!p&&u(v,a,l),x[a]!=l&&i(x,a,y),h&&((x[c]||(x[c]={}))[a]=l)};e.core=o,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,t.exports=s},function(t,n,r){var e=r(5),o=r(18);t.exports=r(22)?function(t,n,r){return e.setDesc(t,n,o(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n){var r=Object;t.exports={create:r.create,getProto:r.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:r.getOwnPropertyDescriptor,setDesc:r.defineProperty,setDescs:r.defineProperties,getKeys:r.keys,getNames:r.getOwnPropertyNames,getSymbols:r.getOwnPropertySymbols,each:[].forEach}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},function(t,n,r){var e=r(20)("wks"),o=r(2).Symbol;t.exports=function(t){return e[t]||(e[t]=o&&o[t]||(o||r(6))("Symbol."+t))}},function(t,n,r){r(26),t.exports=r(1).Array.some},function(t,n,r){r(25),t.exports=r(1).String.endsWith},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(10);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,r){t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[r(7)("match")]=!1,!"/./"[t](n)}catch(o){}}return!0}},function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(16),o=r(11),i=r(7)("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(2),o=r(4),i=r(6)("src"),u="toString",c=Function[u],f=(""+c).split(u);r(1).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,r,u){"function"==typeof r&&(o(r,i,t[n]?""+t[n]:f.join(String(n))),"name"in r||(r.name=n)),t===e?t[n]=r:(u||delete t[n],o(t,n,r))})(Function.prototype,u,function(){return"function"==typeof this&&this[i]||c.call(this)})},function(t,n,r){var e=r(2),o="__core-js_shared__",i=e[o]||(e[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,n,r){var e=r(17),o=r(13);t.exports=function(t,n,r){if(e(n))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(t))}},function(t,n,r){t.exports=!r(15)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){var e=r(23),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n,r){"use strict";var e=r(3),o=r(24),i=r(21),u="endsWith",c=""[u];e(e.P+e.F*r(14)(u),"String",{endsWith:function(t){var n=i(this,t,u),r=arguments,e=r.length>1?r[1]:void 0,f=o(n.length),s=void 0===e?f:Math.min(o(e),f),a=String(t);return c?c.call(n,a,s):n.slice(s-a.length,s)===a}})},function(t,n,r){var e=r(5),o=r(3),i=r(1).Array||Array,u={},c=function(t,n){e.each.call(t.split(","),function(t){void 0==n&&t in i?u[t]=i[t]:t in[]&&(u[t]=r(12)(Function.call,[][t],n))})};c("pop,reverse,shift,keys,values,entries",1),c("indexOf,every,some,forEach,map,filter,find,findIndex,includes",3),c("join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill"),o(o.S,"Array",u)}]);

/***/ }),

/***/ 900:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  rejected: {
    borderStyle: 'solid',
    borderColor: '#c66',
    backgroundColor: '#eee'
  },
  disabled: {
    opacity: 0.5
  },
  active: {
    borderStyle: 'solid',
    borderColor: '#6c6',
    backgroundColor: '#eee'
  },
  default: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: '#666',
    borderStyle: 'dashed',
    borderRadius: 5
  }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Qcm9maWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kcm9wem9uZS9kaXN0L2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kcm9wem9uZS9kaXN0L2VzL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hdHRyLWFjY2VwdC9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kcm9wem9uZS9kaXN0L2VzL3V0aWxzL3N0eWxlcy5qcyJdLCJuYW1lcyI6WyJlcnJvckxhYmVsIiwiUHJvZmlsZSIsInByb3BzIiwic3RhdGUiLCJlbWFpbCIsImdldFVzZXIiLCJuYW1lIiwiZHJvcHpvbmVSZWYiLCJpbWFnZSIsImltYWdlVXJsIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImhhbmRsZVN1Ym1pdCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImZpZWxkIiwiYXBwZW5kIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiZ2V0VG9rZW4iLCJib2R5IiwidGhlbiIsInJlcyIsInN0YXR1cyIsImpzb24iLCJzdGF0dXNUZXh0IiwidXBkYXRlVXNlciIsInVzZXIiLCJjYXRjaCIsImVyciIsImFjY2VwdGVkIiwicmVqZWN0ZWQiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsIm1pbkxlbmd0aCIsIm1heExlbmd0aCIsImlzRGVmYXVsdFJlcXVpcmVkVmFsdWUiLCJpc0VtYWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYSx3REFBTyxPQUFN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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0MsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQsV0FBVztBQUNYO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0M7QUFDcEM7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0JBQWtCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0Esd0ZBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN2xCQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3pDQSwyQkFBMkIsY0FBYyw0QkFBNEIsWUFBWSxVQUFVLGlCQUFpQixnRUFBZ0UsU0FBUywrQkFBK0Isa0JBQWtCLGFBQWEscURBQXFELFNBQVMsaUJBQWlCLHdGQUF3RixPQUFPLHFCQUFxQixlQUFlLGtIQUFrSCxHQUFHLEdBQUcsaUNBQWlDLFNBQVMsd0JBQXdCLGVBQWUsaUJBQWlCLGlCQUFpQiw4QkFBOEIsZUFBZSw4SUFBOEksOEJBQThCLGlCQUFpQiwrREFBK0Qsa0JBQWtCLDZCQUE2QixtQkFBbUIsc0RBQXNELFdBQVcseUJBQXlCLEVBQUUsU0FBUyxrS0FBa0ssVUFBVSwyREFBMkQsaUJBQWlCLG1CQUFtQixnQ0FBZ0MsNkJBQTZCLGlCQUFpQixpQkFBaUIsZUFBZSxhQUFhLFdBQVcsbURBQW1ELGdOQUFnTixlQUFlLHdCQUF3QixzQkFBc0IsbUVBQW1FLGlCQUFpQixpQ0FBaUMsc0JBQXNCLHFEQUFxRCxpQkFBaUIsZ0NBQWdDLGlCQUFpQixxQ0FBcUMsZUFBZSxzQkFBc0IsaUVBQWlFLFVBQVUsZUFBZSxRQUFRLFVBQVUsc0JBQXNCLDhCQUE4QixpQkFBaUIsWUFBWSwwQkFBMEIsNEJBQTRCLFVBQVUsMEJBQTBCLG9CQUFvQiw0QkFBNEIsc0JBQXNCLDhCQUE4Qix3QkFBd0Isa0JBQWtCLDhCQUE4QixlQUFlLHNCQUFzQix5REFBeUQsVUFBVSxpQkFBaUIsc0JBQXNCLFVBQVUsSUFBSSxZQUFZLFNBQVMsSUFBSSx3Q0FBd0MsV0FBVyxVQUFVLGVBQWUsc0JBQXNCLElBQUksWUFBWSxTQUFTLFdBQVcsZUFBZSxzQkFBc0Isd0RBQXdELGlCQUFpQixvQ0FBb0Msc0JBQXNCLE1BQU0scURBQXFELGVBQWUsd0JBQXdCLE9BQU8sZ0VBQWdFLGlCQUFpQiw2RUFBNkUsK0JBQStCLGlCQUFpQiw4QkFBOEIsNEhBQTRILGtDQUFrQyxxREFBcUQsRUFBRSxpQkFBaUIsa0RBQWtELEVBQUUsc0JBQXNCLHFCQUFxQixHQUFHLGlCQUFpQixvQkFBb0IsMEJBQTBCLDhEQUE4RCxxQkFBcUIsaUJBQWlCLDRCQUE0QixrQ0FBa0MsTUFBTSxlQUFlLFVBQVUsSUFBSSxFQUFFLGVBQWUsNkJBQTZCLHNCQUFzQixtQ0FBbUMsaUJBQWlCLHVCQUF1QixzQkFBc0IsdUNBQXVDLGlCQUFpQixhQUFhLGdEQUFnRCw2QkFBNkIscUJBQXFCLGlIQUFpSCxrREFBa0QsRUFBRSxpQkFBaUIsMENBQTBDLGlCQUFpQixxQ0FBcUMsd0VBQXdFLEdBQUcsa09BQWtPLEc7Ozs7Ozs7O0FDQXAzSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEciLCJmaWxlIjoiMC4xMzcyZWUxOTVmYWUxODg1ZDFlNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7Rm9ybX0gZnJvbSAnZm9ybXN5LXNlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IERyb3B6b25lIGZyb20gJ3JlYWN0LWRyb3B6b25lJ1xuaW1wb3J0IHtCdXR0b24sIEdyaWQsIEltYWdlLCBJbnB1dCwgTGFiZWwsIExpc3QsIFNlZ21lbnR9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdmJhcidcbmltcG9ydCBMb2dvIGZyb20gJy4uL3Jlcy9pbWFnZXMvbG9nby5wbmcnXG5pbXBvcnQgQXV0aCBmcm9tICcuLi9tb2R1bGVzL0F1dGgnXG5cbmNvbnN0IGVycm9yTGFiZWwgPSA8TGFiZWwgY29sb3I9XCJyZWRcIiBwb2ludGluZz0nYWJvdmUnLz5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZmlsZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGVtYWlsOiBBdXRoLmdldFVzZXIoKS5lbWFpbCxcbiAgICAgICAgICAgIG5hbWU6IEF1dGguZ2V0VXNlcigpLm5hbWUsXG4gICAgICAgICAgICBlcnJvckxhYmVsOiAnJyxcbiAgICAgICAgICAgIGRyb3B6b25lUmVmOiBudWxsLFxuICAgICAgICAgICAgaW1hZ2U6IEF1dGguZ2V0VXNlcigpLmltYWdlLFxuICAgICAgICAgICAgaW1hZ2VVcmw6ICcnXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKVxuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgICAgIGNvbnN0IHtuYW1lLCB2YWx1ZX0gPSBlLnRhcmdldFxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgICAgICAgICBlcnJvckxhYmVsOiAnJ1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICAgIGZvciAobGV0IGZpZWxkIG9mIFsnZW1haWwnLCAnbmFtZScsICdpbWFnZSddKVxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGZpZWxkLCB0aGlzLnN0YXRlW2ZpZWxkXSlcblxuICAgICAgICBmZXRjaCgnL3Byb2ZpbGUnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYGJlYXJlciAke0F1dGguZ2V0VG9rZW4oKX1gXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogZm9ybURhdGFcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXMuc3RhdHVzID09PSA0MDApXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGFzPSdhJyBjb2xvcj0ncmVkJz5DYW4ndCBsb2dpbjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBhcz0nYScgY29sb3I9J3JlZCc+e3Jlcy5zdGF0dXNUZXh0fTwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgQXV0aC51cGRhdGVVc2VyKGpzb24udXNlcilcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGVycm9yTGFiZWw6IDxMYWJlbCBhcz0nYScgY29sb3I9J3JlZCc+e2VyciB8fCAnRXJyb3InfTwvTGFiZWw+XG4gICAgICAgICAgICB9KSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxOYXZCYXIvPlxuICAgICAgICAgICAgICAgIDxTZWdtZW50IHBhZGRlZD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gb25WYWxpZFN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3JMYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wem9uZSBvbkRyb3A9eyhhY2NlcHRlZCwgcmVqZWN0ZWQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiBhY2NlcHRlZFswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw6IHJlYWRlci5yZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYWNjZXB0ZWRbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGFzPSdhJyBjb2xvcj0ndGVhbCcgcmliYm9uPkRyb3AgbmV3IGF2YXRhcjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3RoaXMuc3RhdGUuaW1hZ2VVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2lyY3VsYXIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3B6b25lPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHN0cmV0Y2hlZCB3aWR0aD17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nbmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdVc2VybmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW50VmFsaWRhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoOiA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogMjBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoOiAnVXNlcm5hbWUgc2hvdWxkIG5vdCBjb250YWluIGxlc3MgdGhhbiA1IGNoYXJhY3RlcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogJ1VzZXJuYW1lIHNob3VsZCBub3QgY29udGFpbiBtb3JlIHRoYW4gMjAgY2hhcmFjdGVycycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEZWZhdWx0UmVxdWlyZWRWYWx1ZTogJ1VzZXJuYW1lIGlzIHJlcXVpcmVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw9e2Vycm9yTGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdlbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdFbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFudFZhbGlkYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9ucz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRW1haWw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiA1MFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0VtYWlsOiAnRW1haWwgc2hvdWxkIGJlIHZhbGlkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6ICdFbWFpbCBzaG91bGQgbm90IGNvbnRhaW4gbW9yZSB0aGFuIDUwIGNoYXJhY3RlcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVmYXVsdFJlcXVpcmVkVmFsdWU6ICdFbWFpbCBpcyByZXF1aXJlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsPXtlcnJvckxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgZmx1aWQgdHlwZT0nc3VibWl0Jz5TYXZlPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250YWluZXJzL1Byb2ZpbGUuanMiLCJ2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qIGVzbGludCBwcmVmZXItdGVtcGxhdGU6IDAgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBzdXBwb3J0TXVsdGlwbGUsIGZpbGVBY2NlcHRlZCwgYWxsRmlsZXNBY2NlcHRlZCwgZmlsZU1hdGNoU2l6ZSwgb25Eb2N1bWVudERyYWdPdmVyLCBnZXREYXRhVHJhbnNmZXJJdGVtcyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3V0aWxzL3N0eWxlcyc7XG5cbnZhciBEcm9wem9uZSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhEcm9wem9uZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRHJvcHpvbmUocHJvcHMsIGNvbnRleHQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRHJvcHpvbmUpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKERyb3B6b25lLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRHJvcHpvbmUpKS5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSk7XG5cbiAgICBfdGhpcy5yZW5kZXJDaGlsZHJlbiA9IGZ1bmN0aW9uIChjaGlsZHJlbiwgaXNEcmFnQWN0aXZlLCBpc0RyYWdBY2NlcHQsIGlzRHJhZ1JlamVjdCkge1xuICAgICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY2hpbGRyZW4oX2V4dGVuZHMoe30sIF90aGlzLnN0YXRlLCB7XG4gICAgICAgICAgaXNEcmFnQWN0aXZlOiBpc0RyYWdBY3RpdmUsXG4gICAgICAgICAgaXNEcmFnQWNjZXB0OiBpc0RyYWdBY2NlcHQsXG4gICAgICAgICAgaXNEcmFnUmVqZWN0OiBpc0RyYWdSZWplY3RcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgIH07XG5cbiAgICBfdGhpcy5jb21wb3NlSGFuZGxlcnMgPSBfdGhpcy5jb21wb3NlSGFuZGxlcnMuYmluZChfdGhpcyk7XG4gICAgX3RoaXMub25DbGljayA9IF90aGlzLm9uQ2xpY2suYmluZChfdGhpcyk7XG4gICAgX3RoaXMub25Eb2N1bWVudERyb3AgPSBfdGhpcy5vbkRvY3VtZW50RHJvcC5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5vbkRyYWdFbnRlciA9IF90aGlzLm9uRHJhZ0VudGVyLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLm9uRHJhZ0xlYXZlID0gX3RoaXMub25EcmFnTGVhdmUuYmluZChfdGhpcyk7XG4gICAgX3RoaXMub25EcmFnT3ZlciA9IF90aGlzLm9uRHJhZ092ZXIuYmluZChfdGhpcyk7XG4gICAgX3RoaXMub25EcmFnU3RhcnQgPSBfdGhpcy5vbkRyYWdTdGFydC5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5vbkRyb3AgPSBfdGhpcy5vbkRyb3AuYmluZChfdGhpcyk7XG4gICAgX3RoaXMub25GaWxlRGlhbG9nQ2FuY2VsID0gX3RoaXMub25GaWxlRGlhbG9nQ2FuY2VsLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLm9uSW5wdXRFbGVtZW50Q2xpY2sgPSBfdGhpcy5vbklucHV0RWxlbWVudENsaWNrLmJpbmQoX3RoaXMpO1xuXG4gICAgX3RoaXMuc2V0UmVmID0gX3RoaXMuc2V0UmVmLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLnNldFJlZnMgPSBfdGhpcy5zZXRSZWZzLmJpbmQoX3RoaXMpO1xuXG4gICAgX3RoaXMuaXNGaWxlRGlhbG9nQWN0aXZlID0gZmFsc2U7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRyYWdnZWRGaWxlczogW10sXG4gICAgICBhY2NlcHRlZEZpbGVzOiBbXSxcbiAgICAgIHJlamVjdGVkRmlsZXM6IFtdXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRHJvcHpvbmUsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBwcmV2ZW50RHJvcE9uRG9jdW1lbnQgPSB0aGlzLnByb3BzLnByZXZlbnREcm9wT25Eb2N1bWVudDtcblxuICAgICAgdGhpcy5kcmFnVGFyZ2V0cyA9IFtdO1xuXG4gICAgICBpZiAocHJldmVudERyb3BPbkRvY3VtZW50KSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgb25Eb2N1bWVudERyYWdPdmVyLCBmYWxzZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLm9uRG9jdW1lbnREcm9wLCBmYWxzZSk7XG4gICAgICB9XG4gICAgICB0aGlzLmZpbGVJbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbklucHV0RWxlbWVudENsaWNrLCBmYWxzZSk7XG4gICAgICAvLyBUcmllZCBpbXBsZW1lbnRpbmcgYWRkRXZlbnRMaXN0ZW5lciwgYnV0IGRpZG4ndCB3b3JrIG91dFxuICAgICAgZG9jdW1lbnQuYm9keS5vbmZvY3VzID0gdGhpcy5vbkZpbGVEaWFsb2dDYW5jZWw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHZhciBwcmV2ZW50RHJvcE9uRG9jdW1lbnQgPSB0aGlzLnByb3BzLnByZXZlbnREcm9wT25Eb2N1bWVudDtcblxuICAgICAgaWYgKHByZXZlbnREcm9wT25Eb2N1bWVudCkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIG9uRG9jdW1lbnREcmFnT3Zlcik7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLm9uRG9jdW1lbnREcm9wKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZmlsZUlucHV0RWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uSW5wdXRFbGVtZW50Q2xpY2ssIGZhbHNlKTtcbiAgICAgIC8vIENhbiBiZSByZXBsYWNlZCB3aXRoIHJlbW92ZUV2ZW50TGlzdGVuZXIsIGlmIGFkZEV2ZW50TGlzdGVuZXIgd29ya3NcbiAgICAgIGRvY3VtZW50LmJvZHkub25mb2N1cyA9IG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9zZUhhbmRsZXJzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9zZUhhbmRsZXJzKGhhbmRsZXIpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaGFuZGxlcjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbkRvY3VtZW50RHJvcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uRG9jdW1lbnREcm9wKGV2dCkge1xuICAgICAgaWYgKHRoaXMubm9kZSAmJiB0aGlzLm5vZGUuY29udGFpbnMoZXZ0LnRhcmdldCkpIHtcbiAgICAgICAgLy8gaWYgd2UgaW50ZXJjZXB0ZWQgYW4gZXZlbnQgZm9yIG91ciBpbnN0YW5jZSwgbGV0IGl0IHByb3BhZ2F0ZSBkb3duIHRvIHRoZSBpbnN0YW5jZSdzIG9uRHJvcCBoYW5kbGVyXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5kcmFnVGFyZ2V0cyA9IFtdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uRHJhZ1N0YXJ0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25EcmFnU3RhcnQoZXZ0KSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkRyYWdTdGFydCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uRHJhZ1N0YXJ0LmNhbGwodGhpcywgZXZ0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbkRyYWdFbnRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uRHJhZ0VudGVyKGV2dCkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIC8vIENvdW50IHRoZSBkcm9wem9uZSBhbmQgYW55IGNoaWxkcmVuIHRoYXQgYXJlIGVudGVyZWQuXG4gICAgICBpZiAodGhpcy5kcmFnVGFyZ2V0cy5pbmRleE9mKGV2dC50YXJnZXQpID09PSAtMSkge1xuICAgICAgICB0aGlzLmRyYWdUYXJnZXRzLnB1c2goZXZ0LnRhcmdldCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpc0RyYWdBY3RpdmU6IHRydWUsIC8vIERvIG5vdCByZWx5IG9uIGZpbGVzIGZvciB0aGUgZHJhZyBzdGF0ZS4gSXQgZG9lc24ndCB3b3JrIGluIFNhZmFyaS5cbiAgICAgICAgZHJhZ2dlZEZpbGVzOiBnZXREYXRhVHJhbnNmZXJJdGVtcyhldnQpXG4gICAgICB9KTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMub25EcmFnRW50ZXIpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkRyYWdFbnRlci5jYWxsKHRoaXMsIGV2dCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25EcmFnT3ZlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uRHJhZ092ZXIoZXZ0KSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZXZ0LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ2NvcHknOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgLy8gY29udGludWUgcmVnYXJkbGVzcyBvZiBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkRyYWdPdmVyKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25EcmFnT3Zlci5jYWxsKHRoaXMsIGV2dCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25EcmFnTGVhdmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkRyYWdMZWF2ZShldnQpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgLy8gT25seSBkZWFjdGl2YXRlIG9uY2UgdGhlIGRyb3B6b25lIGFuZCBhbGwgY2hpbGRyZW4gaGF2ZSBiZWVuIGxlZnQuXG4gICAgICB0aGlzLmRyYWdUYXJnZXRzID0gdGhpcy5kcmFnVGFyZ2V0cy5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHJldHVybiBlbCAhPT0gZXZ0LnRhcmdldCAmJiBfdGhpczIubm9kZS5jb250YWlucyhlbCk7XG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLmRyYWdUYXJnZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBDbGVhciBkcmFnZ2luZyBmaWxlcyBzdGF0ZVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzRHJhZ0FjdGl2ZTogZmFsc2UsXG4gICAgICAgIGRyYWdnZWRGaWxlczogW11cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkRyYWdMZWF2ZSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uRHJhZ0xlYXZlLmNhbGwodGhpcywgZXZ0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbkRyb3AnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkRyb3AoZXZ0KSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgb25Ecm9wID0gX3Byb3BzLm9uRHJvcCxcbiAgICAgICAgICBvbkRyb3BBY2NlcHRlZCA9IF9wcm9wcy5vbkRyb3BBY2NlcHRlZCxcbiAgICAgICAgICBvbkRyb3BSZWplY3RlZCA9IF9wcm9wcy5vbkRyb3BSZWplY3RlZCxcbiAgICAgICAgICBtdWx0aXBsZSA9IF9wcm9wcy5tdWx0aXBsZSxcbiAgICAgICAgICBkaXNhYmxlUHJldmlldyA9IF9wcm9wcy5kaXNhYmxlUHJldmlldyxcbiAgICAgICAgICBhY2NlcHQgPSBfcHJvcHMuYWNjZXB0O1xuXG4gICAgICB2YXIgZmlsZUxpc3QgPSBnZXREYXRhVHJhbnNmZXJJdGVtcyhldnQpO1xuICAgICAgdmFyIGFjY2VwdGVkRmlsZXMgPSBbXTtcbiAgICAgIHZhciByZWplY3RlZEZpbGVzID0gW107XG5cbiAgICAgIC8vIFN0b3AgZGVmYXVsdCBicm93c2VyIGJlaGF2aW9yXG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgLy8gUmVzZXQgdGhlIGNvdW50ZXIgYWxvbmcgd2l0aCB0aGUgZHJhZyBvbiBhIGRyb3AuXG4gICAgICB0aGlzLmRyYWdUYXJnZXRzID0gW107XG4gICAgICB0aGlzLmlzRmlsZURpYWxvZ0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICBmaWxlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICAgIGlmICghZGlzYWJsZVByZXZpZXcpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgZmlsZS5wcmV2aWV3ID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBnZW5lcmF0ZSBwcmV2aWV3IGZvciBmaWxlJywgZmlsZSwgZXJyKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZpbGVBY2NlcHRlZChmaWxlLCBhY2NlcHQpICYmIGZpbGVNYXRjaFNpemUoZmlsZSwgX3RoaXMzLnByb3BzLm1heFNpemUsIF90aGlzMy5wcm9wcy5taW5TaXplKSkge1xuICAgICAgICAgIGFjY2VwdGVkRmlsZXMucHVzaChmaWxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3RlZEZpbGVzLnB1c2goZmlsZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIW11bHRpcGxlKSB7XG4gICAgICAgIC8vIGlmIG5vdCBpbiBtdWx0aSBtb2RlIGFkZCBhbnkgZXh0cmEgYWNjZXB0ZWQgZmlsZXMgdG8gcmVqZWN0ZWQuXG4gICAgICAgIC8vIFRoaXMgd2lsbCBhbGxvdyBlbmQgdXNlcnMgdG8gZWFzaWx5IGlnbm9yZSBhIG11bHRpIGZpbGUgZHJvcCBpbiBcInNpbmdsZVwiIG1vZGUuXG4gICAgICAgIHJlamVjdGVkRmlsZXMucHVzaC5hcHBseShyZWplY3RlZEZpbGVzLCBfdG9Db25zdW1hYmxlQXJyYXkoYWNjZXB0ZWRGaWxlcy5zcGxpY2UoMSkpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9uRHJvcCkge1xuICAgICAgICBvbkRyb3AuY2FsbCh0aGlzLCBhY2NlcHRlZEZpbGVzLCByZWplY3RlZEZpbGVzLCBldnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVqZWN0ZWRGaWxlcy5sZW5ndGggPiAwICYmIG9uRHJvcFJlamVjdGVkKSB7XG4gICAgICAgIG9uRHJvcFJlamVjdGVkLmNhbGwodGhpcywgcmVqZWN0ZWRGaWxlcywgZXZ0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFjY2VwdGVkRmlsZXMubGVuZ3RoID4gMCAmJiBvbkRyb3BBY2NlcHRlZCkge1xuICAgICAgICBvbkRyb3BBY2NlcHRlZC5jYWxsKHRoaXMsIGFjY2VwdGVkRmlsZXMsIGV2dCk7XG4gICAgICB9XG5cbiAgICAgIC8vIENsZWFyIGZpbGVzIHZhbHVlXG4gICAgICB0aGlzLmRyYWdnZWRGaWxlcyA9IG51bGw7XG5cbiAgICAgIC8vIFJlc2V0IGRyYWcgc3RhdGVcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpc0RyYWdBY3RpdmU6IGZhbHNlLFxuICAgICAgICBkcmFnZ2VkRmlsZXM6IFtdLFxuICAgICAgICBhY2NlcHRlZEZpbGVzOiBhY2NlcHRlZEZpbGVzLFxuICAgICAgICByZWplY3RlZEZpbGVzOiByZWplY3RlZEZpbGVzXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbkNsaWNrJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25DbGljayhldnQpIHtcbiAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBvbkNsaWNrID0gX3Byb3BzMi5vbkNsaWNrLFxuICAgICAgICAgIGRpc2FibGVDbGljayA9IF9wcm9wczIuZGlzYWJsZUNsaWNrO1xuXG4gICAgICBpZiAoIWRpc2FibGVDbGljaykge1xuICAgICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgaWYgKG9uQ2xpY2spIHtcbiAgICAgICAgICBvbkNsaWNrLmNhbGwodGhpcywgZXZ0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGluIElFMTEvRWRnZSB0aGUgZmlsZS1icm93c2VyIGRpYWxvZyBpcyBibG9ja2luZywgZW5zdXJlIHRoaXMgaXMgYmVoaW5kIHNldFRpbWVvdXRcbiAgICAgICAgLy8gdGhpcyBpcyBzbyByZWFjdCBjYW4gaGFuZGxlIHN0YXRlIGNoYW5nZXMgaW4gdGhlIG9uQ2xpY2sgcHJvcCBhYm92ZSBhYm92ZVxuICAgICAgICAvLyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1kcm9wem9uZS9yZWFjdC1kcm9wem9uZS9pc3N1ZXMvNDUwXG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5vcGVuLmJpbmQodGhpcyksIDApO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uSW5wdXRFbGVtZW50Q2xpY2snLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbklucHV0RWxlbWVudENsaWNrKGV2dCkge1xuICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKHRoaXMucHJvcHMuaW5wdXRQcm9wcyAmJiB0aGlzLnByb3BzLmlucHV0UHJvcHMub25DbGljaykge1xuICAgICAgICB0aGlzLnByb3BzLmlucHV0UHJvcHMub25DbGljaygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uRmlsZURpYWxvZ0NhbmNlbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uRmlsZURpYWxvZ0NhbmNlbCgpIHtcbiAgICAgIC8vIHRpbWVvdXQgd2lsbCBub3QgcmVjb2duaXplIGNvbnRleHQgb2YgdGhpcyBtZXRob2RcbiAgICAgIHZhciBvbkZpbGVEaWFsb2dDYW5jZWwgPSB0aGlzLnByb3BzLm9uRmlsZURpYWxvZ0NhbmNlbDtcbiAgICAgIHZhciBmaWxlSW5wdXRFbCA9IHRoaXMuZmlsZUlucHV0RWw7XG4gICAgICB2YXIgaXNGaWxlRGlhbG9nQWN0aXZlID0gdGhpcy5pc0ZpbGVEaWFsb2dBY3RpdmU7XG4gICAgICAvLyBleGVjdXRlIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIG9uRmlsZURpYWxvZ0NhbmNlbCBpcyBkZWZpbmVkIGFuZCBGaWxlRGlhbG9nXG4gICAgICAvLyBpcyBvcGVuZWQgaW4gdGhlIGJyb3dzZXJcblxuICAgICAgaWYgKG9uRmlsZURpYWxvZ0NhbmNlbCAmJiBpc0ZpbGVEaWFsb2dBY3RpdmUpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gUmV0dXJucyBhbiBvYmplY3QgYXMgRmlsZUxpc3RcbiAgICAgICAgICB2YXIgRmlsZUxpc3QgPSBmaWxlSW5wdXRFbC5maWxlcztcbiAgICAgICAgICBpZiAoIUZpbGVMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgaXNGaWxlRGlhbG9nQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBvbkZpbGVEaWFsb2dDYW5jZWwoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDMwMCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0UmVmJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UmVmKHJlZikge1xuICAgICAgdGhpcy5ub2RlID0gcmVmO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldFJlZnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRSZWZzKHJlZikge1xuICAgICAgdGhpcy5maWxlSW5wdXRFbCA9IHJlZjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogT3BlbiBzeXN0ZW0gZmlsZSB1cGxvYWQgZGlhbG9nLlxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdvcGVuJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb3BlbigpIHtcbiAgICAgIHRoaXMuaXNGaWxlRGlhbG9nQWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuZmlsZUlucHV0RWwudmFsdWUgPSBudWxsO1xuICAgICAgdGhpcy5maWxlSW5wdXRFbC5jbGljaygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBhY2NlcHQgPSBfcHJvcHMzLmFjY2VwdCxcbiAgICAgICAgICBhY2NlcHRDbGFzc05hbWUgPSBfcHJvcHMzLmFjY2VwdENsYXNzTmFtZSxcbiAgICAgICAgICBhY3RpdmVDbGFzc05hbWUgPSBfcHJvcHMzLmFjdGl2ZUNsYXNzTmFtZSxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wczMuY2hpbGRyZW4sXG4gICAgICAgICAgZGlzYWJsZWQgPSBfcHJvcHMzLmRpc2FibGVkLFxuICAgICAgICAgIGRpc2FibGVkQ2xhc3NOYW1lID0gX3Byb3BzMy5kaXNhYmxlZENsYXNzTmFtZSxcbiAgICAgICAgICBpbnB1dFByb3BzID0gX3Byb3BzMy5pbnB1dFByb3BzLFxuICAgICAgICAgIG11bHRpcGxlID0gX3Byb3BzMy5tdWx0aXBsZSxcbiAgICAgICAgICBuYW1lID0gX3Byb3BzMy5uYW1lLFxuICAgICAgICAgIHJlamVjdENsYXNzTmFtZSA9IF9wcm9wczMucmVqZWN0Q2xhc3NOYW1lLFxuICAgICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzMywgWydhY2NlcHQnLCAnYWNjZXB0Q2xhc3NOYW1lJywgJ2FjdGl2ZUNsYXNzTmFtZScsICdjaGlsZHJlbicsICdkaXNhYmxlZCcsICdkaXNhYmxlZENsYXNzTmFtZScsICdpbnB1dFByb3BzJywgJ211bHRpcGxlJywgJ25hbWUnLCAncmVqZWN0Q2xhc3NOYW1lJ10pO1xuXG4gICAgICB2YXIgYWNjZXB0U3R5bGUgPSByZXN0LmFjY2VwdFN0eWxlLFxuICAgICAgICAgIGFjdGl2ZVN0eWxlID0gcmVzdC5hY3RpdmVTdHlsZSxcbiAgICAgICAgICBjbGFzc05hbWUgPSByZXN0LmNsYXNzTmFtZSxcbiAgICAgICAgICBkaXNhYmxlZFN0eWxlID0gcmVzdC5kaXNhYmxlZFN0eWxlLFxuICAgICAgICAgIHJlamVjdFN0eWxlID0gcmVzdC5yZWplY3RTdHlsZSxcbiAgICAgICAgICBzdHlsZSA9IHJlc3Quc3R5bGUsXG4gICAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocmVzdCwgWydhY2NlcHRTdHlsZScsICdhY3RpdmVTdHlsZScsICdjbGFzc05hbWUnLCAnZGlzYWJsZWRTdHlsZScsICdyZWplY3RTdHlsZScsICdzdHlsZSddKTtcblxuICAgICAgdmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgaXNEcmFnQWN0aXZlID0gX3N0YXRlLmlzRHJhZ0FjdGl2ZSxcbiAgICAgICAgICBkcmFnZ2VkRmlsZXMgPSBfc3RhdGUuZHJhZ2dlZEZpbGVzO1xuXG4gICAgICB2YXIgZmlsZXNDb3VudCA9IGRyYWdnZWRGaWxlcy5sZW5ndGg7XG4gICAgICB2YXIgaXNNdWx0aXBsZUFsbG93ZWQgPSBtdWx0aXBsZSB8fCBmaWxlc0NvdW50IDw9IDE7XG4gICAgICB2YXIgaXNEcmFnQWNjZXB0ID0gZmlsZXNDb3VudCA+IDAgJiYgYWxsRmlsZXNBY2NlcHRlZChkcmFnZ2VkRmlsZXMsIHRoaXMucHJvcHMuYWNjZXB0KTtcbiAgICAgIHZhciBpc0RyYWdSZWplY3QgPSBmaWxlc0NvdW50ID4gMCAmJiAoIWlzRHJhZ0FjY2VwdCB8fCAhaXNNdWx0aXBsZUFsbG93ZWQpO1xuICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lIHx8ICcnO1xuICAgICAgdmFyIG5vU3R5bGVzID0gIWNsYXNzTmFtZSAmJiAhc3R5bGUgJiYgIWFjdGl2ZVN0eWxlICYmICFhY2NlcHRTdHlsZSAmJiAhcmVqZWN0U3R5bGUgJiYgIWRpc2FibGVkU3R5bGU7XG5cbiAgICAgIGlmIChpc0RyYWdBY3RpdmUgJiYgYWN0aXZlQ2xhc3NOYW1lKSB7XG4gICAgICAgIGNsYXNzTmFtZSArPSAnICcgKyBhY3RpdmVDbGFzc05hbWU7XG4gICAgICB9XG4gICAgICBpZiAoaXNEcmFnQWNjZXB0ICYmIGFjY2VwdENsYXNzTmFtZSkge1xuICAgICAgICBjbGFzc05hbWUgKz0gJyAnICsgYWNjZXB0Q2xhc3NOYW1lO1xuICAgICAgfVxuICAgICAgaWYgKGlzRHJhZ1JlamVjdCAmJiByZWplY3RDbGFzc05hbWUpIHtcbiAgICAgICAgY2xhc3NOYW1lICs9ICcgJyArIHJlamVjdENsYXNzTmFtZTtcbiAgICAgIH1cbiAgICAgIGlmIChkaXNhYmxlZCAmJiBkaXNhYmxlZENsYXNzTmFtZSkge1xuICAgICAgICBjbGFzc05hbWUgKz0gJyAnICsgZGlzYWJsZWRDbGFzc05hbWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChub1N0eWxlcykge1xuICAgICAgICBzdHlsZSA9IHN0eWxlcy5kZWZhdWx0O1xuICAgICAgICBhY3RpdmVTdHlsZSA9IHN0eWxlcy5hY3RpdmU7XG4gICAgICAgIGFjY2VwdFN0eWxlID0gc3R5bGUuYWN0aXZlO1xuICAgICAgICByZWplY3RTdHlsZSA9IHN0eWxlcy5yZWplY3RlZDtcbiAgICAgICAgZGlzYWJsZWRTdHlsZSA9IHN0eWxlcy5kaXNhYmxlZDtcbiAgICAgIH1cblxuICAgICAgdmFyIGFwcGxpZWRTdHlsZSA9IF9leHRlbmRzKHt9LCBzdHlsZSk7XG4gICAgICBpZiAoYWN0aXZlU3R5bGUgJiYgaXNEcmFnQWN0aXZlKSB7XG4gICAgICAgIGFwcGxpZWRTdHlsZSA9IF9leHRlbmRzKHt9LCBzdHlsZSwgYWN0aXZlU3R5bGUpO1xuICAgICAgfVxuICAgICAgaWYgKGFjY2VwdFN0eWxlICYmIGlzRHJhZ0FjY2VwdCkge1xuICAgICAgICBhcHBsaWVkU3R5bGUgPSBfZXh0ZW5kcyh7fSwgYXBwbGllZFN0eWxlLCBhY2NlcHRTdHlsZSk7XG4gICAgICB9XG4gICAgICBpZiAocmVqZWN0U3R5bGUgJiYgaXNEcmFnUmVqZWN0KSB7XG4gICAgICAgIGFwcGxpZWRTdHlsZSA9IF9leHRlbmRzKHt9LCBhcHBsaWVkU3R5bGUsIHJlamVjdFN0eWxlKTtcbiAgICAgIH1cbiAgICAgIGlmIChkaXNhYmxlZFN0eWxlICYmIGRpc2FibGVkKSB7XG4gICAgICAgIGFwcGxpZWRTdHlsZSA9IF9leHRlbmRzKHt9LCBzdHlsZSwgZGlzYWJsZWRTdHlsZSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBpbnB1dEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIGFjY2VwdDogYWNjZXB0LFxuICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgIHR5cGU6ICdmaWxlJyxcbiAgICAgICAgc3R5bGU6IHsgZGlzcGxheTogJ25vbmUnIH0sXG4gICAgICAgIG11bHRpcGxlOiBzdXBwb3J0TXVsdGlwbGUgJiYgbXVsdGlwbGUsXG4gICAgICAgIHJlZjogdGhpcy5zZXRSZWZzLFxuICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkRyb3AsXG4gICAgICAgIGF1dG9Db21wbGV0ZTogJ29mZidcbiAgICAgIH07XG5cbiAgICAgIGlmIChuYW1lICYmIG5hbWUubGVuZ3RoKSB7XG4gICAgICAgIGlucHV0QXR0cmlidXRlcy5uYW1lID0gbmFtZTtcbiAgICAgIH1cblxuICAgICAgLy8gUmVtb3ZlIGN1c3RvbSBwcm9wZXJ0aWVzIGJlZm9yZSBwYXNzaW5nIHRoZW0gdG8gdGhlIHdyYXBwZXIgZGl2IGVsZW1lbnRcbiAgICAgIHZhciBjdXN0b21Qcm9wcyA9IFsnYWNjZXB0ZWRGaWxlcycsICdwcmV2ZW50RHJvcE9uRG9jdW1lbnQnLCAnZGlzYWJsZVByZXZpZXcnLCAnZGlzYWJsZUNsaWNrJywgJ2FjdGl2ZUNsYXNzTmFtZScsICdhY2NlcHRDbGFzc05hbWUnLCAncmVqZWN0Q2xhc3NOYW1lJywgJ2Rpc2FibGVkQ2xhc3NOYW1lJywgJ29uRHJvcEFjY2VwdGVkJywgJ29uRHJvcFJlamVjdGVkJywgJ29uRmlsZURpYWxvZ0NhbmNlbCcsICdtYXhTaXplJywgJ21pblNpemUnXTtcbiAgICAgIHZhciBkaXZQcm9wcyA9IF9leHRlbmRzKHt9LCBwcm9wcyk7XG4gICAgICBjdXN0b21Qcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgIHJldHVybiBkZWxldGUgZGl2UHJvcHNbcHJvcF07XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBfZXh0ZW5kcyh7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgICAgc3R5bGU6IGFwcGxpZWRTdHlsZVxuICAgICAgICB9LCBkaXZQcm9wcyAvKiBleHBhbmQgdXNlciBwcm92aWRlZCBwcm9wcyBmaXJzdCBzbyBldmVudCBoYW5kbGVycyBhcmUgbmV2ZXIgb3ZlcnJpZGRlbiAqLywge1xuICAgICAgICAgIG9uQ2xpY2s6IHRoaXMuY29tcG9zZUhhbmRsZXJzKHRoaXMub25DbGljayksXG4gICAgICAgICAgb25EcmFnU3RhcnQ6IHRoaXMuY29tcG9zZUhhbmRsZXJzKHRoaXMub25EcmFnU3RhcnQpLFxuICAgICAgICAgIG9uRHJhZ0VudGVyOiB0aGlzLmNvbXBvc2VIYW5kbGVycyh0aGlzLm9uRHJhZ0VudGVyKSxcbiAgICAgICAgICBvbkRyYWdPdmVyOiB0aGlzLmNvbXBvc2VIYW5kbGVycyh0aGlzLm9uRHJhZ092ZXIpLFxuICAgICAgICAgIG9uRHJhZ0xlYXZlOiB0aGlzLmNvbXBvc2VIYW5kbGVycyh0aGlzLm9uRHJhZ0xlYXZlKSxcbiAgICAgICAgICBvbkRyb3A6IHRoaXMuY29tcG9zZUhhbmRsZXJzKHRoaXMub25Ecm9wKSxcbiAgICAgICAgICByZWY6IHRoaXMuc2V0UmVmLFxuICAgICAgICAgICdhcmlhLWRpc2FibGVkJzogZGlzYWJsZWRcbiAgICAgICAgfSksXG4gICAgICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4oY2hpbGRyZW4sIGlzRHJhZ0FjdGl2ZSwgaXNEcmFnQWNjZXB0LCBpc0RyYWdSZWplY3QpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIF9leHRlbmRzKHt9LCBpbnB1dFByb3BzIC8qIGV4cGFuZCB1c2VyIHByb3ZpZGVkIGlucHV0UHJvcHMgZmlyc3Qgc28gaW5wdXRBdHRyaWJ1dGVzIG92ZXJyaWRlIHRoZW0gKi8sIGlucHV0QXR0cmlidXRlcykpXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBEcm9wem9uZTtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgRHJvcHpvbmU7XG5cbkRyb3B6b25lLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEFsbG93IHNwZWNpZmljIHR5cGVzIG9mIGZpbGVzLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL29rb25ldC9hdHRyLWFjY2VwdCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICogS2VlcCBpbiBtaW5kIHRoYXQgbWltZSB0eXBlIGRldGVybWluYXRpb24gaXMgbm90IHJlbGlhYmxlIGFjcm9zcyBwbGF0Zm9ybXMuIENTViBmaWxlcyxcbiAgICogZm9yIGV4YW1wbGUsIGFyZSByZXBvcnRlZCBhcyB0ZXh0L3BsYWluIHVuZGVyIG1hY09TIGJ1dCBhcyBhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwgdW5kZXJcbiAgICogV2luZG93cy4gSW4gc29tZSBjYXNlcyB0aGVyZSBtaWdodCBub3QgYmUgYSBtaW1lIHR5cGUgc2V0IGF0IGFsbC5cbiAgICogU2VlOiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtZHJvcHpvbmUvcmVhY3QtZHJvcHpvbmUvaXNzdWVzLzI3NlxuICAgKi9cbiAgYWNjZXB0OiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBDb250ZW50cyBvZiB0aGUgZHJvcHpvbmVcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLmZ1bmNdKSxcblxuICAvKipcbiAgICogRGlzYWxsb3cgY2xpY2tpbmcgb24gdGhlIGRyb3B6b25lIGNvbnRhaW5lciB0byBvcGVuIGZpbGUgZGlhbG9nXG4gICAqL1xuICBkaXNhYmxlQ2xpY2s6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAqIEVuYWJsZS9kaXNhYmxlIHRoZSBkcm9wem9uZSBlbnRpcmVseVxuICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEVuYWJsZS9kaXNhYmxlIHByZXZpZXcgZ2VuZXJhdGlvblxuICAgKi9cbiAgZGlzYWJsZVByZXZpZXc6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBmYWxzZSwgYWxsb3cgZHJvcHBlZCBpdGVtcyB0byB0YWtlIG92ZXIgdGhlIGN1cnJlbnQgYnJvd3NlciB3aW5kb3dcbiAgICovXG4gIHByZXZlbnREcm9wT25Eb2N1bWVudDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFBhc3MgYWRkaXRpb25hbCBhdHRyaWJ1dGVzIHRvIHRoZSBgPGlucHV0IHR5cGU9XCJmaWxlXCIvPmAgdGFnXG4gICAqL1xuICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBBbGxvdyBkcm9wcGluZyBtdWx0aXBsZSBmaWxlc1xuICAgKi9cbiAgbXVsdGlwbGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBgbmFtZWAgYXR0cmlidXRlIGZvciB0aGUgaW5wdXQgdGFnXG4gICAqL1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBNYXhpbXVtIGZpbGUgc2l6ZVxuICAgKi9cbiAgbWF4U2l6ZTogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogTWluaW11bSBmaWxlIHNpemVcbiAgICovXG4gIG1pblNpemU6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIGNsYXNzTmFtZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBjbGFzc05hbWUgZm9yIGFjdGl2ZSBzdGF0ZVxuICAgKi9cbiAgYWN0aXZlQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBjbGFzc05hbWUgZm9yIGFjY2VwdGVkIHN0YXRlXG4gICAqL1xuICBhY2NlcHRDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIGNsYXNzTmFtZSBmb3IgcmVqZWN0ZWQgc3RhdGVcbiAgICovXG4gIHJlamVjdENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogY2xhc3NOYW1lIGZvciBkaXNhYmxlZCBzdGF0ZVxuICAgKi9cbiAgZGlzYWJsZWRDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIENTUyBzdHlsZXMgdG8gYXBwbHlcbiAgICovXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBDU1Mgc3R5bGVzIHRvIGFwcGx5IHdoZW4gZHJhZyBpcyBhY3RpdmVcbiAgICovXG4gIGFjdGl2ZVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBDU1Mgc3R5bGVzIHRvIGFwcGx5IHdoZW4gZHJvcCB3aWxsIGJlIGFjY2VwdGVkXG4gICAqL1xuICBhY2NlcHRTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQ1NTIHN0eWxlcyB0byBhcHBseSB3aGVuIGRyb3Agd2lsbCBiZSByZWplY3RlZFxuICAgKi9cbiAgcmVqZWN0U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIENTUyBzdHlsZXMgdG8gYXBwbHkgd2hlbiBkcm9wem9uZSBpcyBkaXNhYmxlZFxuICAgKi9cbiAgZGlzYWJsZWRTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogb25DbGljayBjYWxsYmFja1xuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgKi9cbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIG9uRHJvcCBjYWxsYmFja1xuICAgKi9cbiAgb25Ecm9wOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogb25Ecm9wQWNjZXB0ZWQgY2FsbGJhY2tcbiAgICovXG4gIG9uRHJvcEFjY2VwdGVkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogb25Ecm9wUmVqZWN0ZWQgY2FsbGJhY2tcbiAgICovXG4gIG9uRHJvcFJlamVjdGVkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogb25EcmFnU3RhcnQgY2FsbGJhY2tcbiAgICovXG4gIG9uRHJhZ1N0YXJ0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogb25EcmFnRW50ZXIgY2FsbGJhY2tcbiAgICovXG4gIG9uRHJhZ0VudGVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogb25EcmFnT3ZlciBjYWxsYmFja1xuICAgKi9cbiAgb25EcmFnT3ZlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIG9uRHJhZ0xlYXZlIGNhbGxiYWNrXG4gICAqL1xuICBvbkRyYWdMZWF2ZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFByb3ZpZGUgYSBjYWxsYmFjayBvbiBjbGlja2luZyB0aGUgY2FuY2VsIGJ1dHRvbiBvZiB0aGUgZmlsZSBkaWFsb2dcbiAgICovXG4gIG9uRmlsZURpYWxvZ0NhbmNlbDogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbkRyb3B6b25lLmRlZmF1bHRQcm9wcyA9IHtcbiAgcHJldmVudERyb3BPbkRvY3VtZW50OiB0cnVlLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIGRpc2FibGVQcmV2aWV3OiBmYWxzZSxcbiAgZGlzYWJsZUNsaWNrOiBmYWxzZSxcbiAgbXVsdGlwbGU6IHRydWUsXG4gIG1heFNpemU6IEluZmluaXR5LFxuICBtaW5TaXplOiAwXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRyb3B6b25lL2Rpc3QvZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDg5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgYWNjZXB0cyBmcm9tICdhdHRyLWFjY2VwdCc7XG5cbmV4cG9ydCB2YXIgc3VwcG9ydE11bHRpcGxlID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5jcmVhdGVFbGVtZW50ID8gJ211bHRpcGxlJyBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpIDogdHJ1ZTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGFUcmFuc2Zlckl0ZW1zKGV2ZW50KSB7XG4gIHZhciBkYXRhVHJhbnNmZXJJdGVtc0xpc3QgPSBbXTtcbiAgaWYgKGV2ZW50LmRhdGFUcmFuc2Zlcikge1xuICAgIHZhciBkdCA9IGV2ZW50LmRhdGFUcmFuc2ZlcjtcbiAgICBpZiAoZHQuZmlsZXMgJiYgZHQuZmlsZXMubGVuZ3RoKSB7XG4gICAgICBkYXRhVHJhbnNmZXJJdGVtc0xpc3QgPSBkdC5maWxlcztcbiAgICB9IGVsc2UgaWYgKGR0Lml0ZW1zICYmIGR0Lml0ZW1zLmxlbmd0aCkge1xuICAgICAgLy8gRHVyaW5nIHRoZSBkcmFnIGV2ZW4gdGhlIGRhdGFUcmFuc2Zlci5maWxlcyBpcyBudWxsXG4gICAgICAvLyBidXQgQ2hyb21lIGltcGxlbWVudHMgc29tZSBkcmFnIHN0b3JlLCB3aGljaCBpcyBhY2Nlc2libGUgdmlhIGRhdGFUcmFuc2Zlci5pdGVtc1xuICAgICAgZGF0YVRyYW5zZmVySXRlbXNMaXN0ID0gZHQuaXRlbXM7XG4gICAgfVxuICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuZmlsZXMpIHtcbiAgICBkYXRhVHJhbnNmZXJJdGVtc0xpc3QgPSBldmVudC50YXJnZXQuZmlsZXM7XG4gIH1cbiAgLy8gQ29udmVydCBmcm9tIERhdGFUcmFuc2Zlckl0ZW1zTGlzdCB0byB0aGUgbmF0aXZlIEFycmF5XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkYXRhVHJhbnNmZXJJdGVtc0xpc3QpO1xufVxuXG4vLyBGaXJlZm94IHZlcnNpb25zIHByaW9yIHRvIDUzIHJldHVybiBhIGJvZ3VzIE1JTUUgdHlwZSBmb3IgZXZlcnkgZmlsZSBkcmFnLCBzbyBkcmFnb3ZlcnMgd2l0aFxuLy8gdGhhdCBNSU1FIHR5cGUgd2lsbCBhbHdheXMgYmUgYWNjZXB0ZWRcbmV4cG9ydCBmdW5jdGlvbiBmaWxlQWNjZXB0ZWQoZmlsZSwgYWNjZXB0KSB7XG4gIHJldHVybiBmaWxlLnR5cGUgPT09ICdhcHBsaWNhdGlvbi94LW1vei1maWxlJyB8fCBhY2NlcHRzKGZpbGUsIGFjY2VwdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWxlTWF0Y2hTaXplKGZpbGUsIG1heFNpemUsIG1pblNpemUpIHtcbiAgcmV0dXJuIGZpbGUuc2l6ZSA8PSBtYXhTaXplICYmIGZpbGUuc2l6ZSA+PSBtaW5TaXplO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWxsRmlsZXNBY2NlcHRlZChmaWxlcywgYWNjZXB0KSB7XG4gIHJldHVybiBmaWxlcy5ldmVyeShmdW5jdGlvbiAoZmlsZSkge1xuICAgIHJldHVybiBmaWxlQWNjZXB0ZWQoZmlsZSwgYWNjZXB0KTtcbiAgfSk7XG59XG5cbi8vIGFsbG93IHRoZSBlbnRpcmUgZG9jdW1lbnQgdG8gYmUgYSBkcmFnIHRhcmdldFxuZXhwb3J0IGZ1bmN0aW9uIG9uRG9jdW1lbnREcmFnT3ZlcihldnQpIHtcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtZHJvcHpvbmUvZGlzdC9lcy91dGlscy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gODk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIG4oZSl7aWYocltlXSlyZXR1cm4gcltlXS5leHBvcnRzO3ZhciBvPXJbZV09e2V4cG9ydHM6e30saWQ6ZSxsb2FkZWQ6ITF9O3JldHVybiB0W2VdLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLG4pLG8ubG9hZGVkPSEwLG8uZXhwb3J0c312YXIgcj17fTtyZXR1cm4gbi5tPXQsbi5jPXIsbi5wPVwiXCIsbigwKX0oW2Z1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjtuLl9fZXNNb2R1bGU9ITAscig4KSxyKDkpLG5bXCJkZWZhdWx0XCJdPWZ1bmN0aW9uKHQsbil7aWYodCYmbil7dmFyIHI9ZnVuY3Rpb24oKXt2YXIgcj1BcnJheS5pc0FycmF5KG4pP246bi5zcGxpdChcIixcIiksZT10Lm5hbWV8fFwiXCIsbz10LnR5cGV8fFwiXCIsaT1vLnJlcGxhY2UoL1xcLy4qJC8sXCJcIik7cmV0dXJue3Y6ci5zb21lKGZ1bmN0aW9uKHQpe3ZhciBuPXQudHJpbSgpO3JldHVyblwiLlwiPT09bi5jaGFyQXQoMCk/ZS50b0xvd2VyQ2FzZSgpLmVuZHNXaXRoKG4udG9Mb3dlckNhc2UoKSk6L1xcL1xcKiQvLnRlc3Qobik/aT09PW4ucmVwbGFjZSgvXFwvLiokLyxcIlwiKTpvPT09bn0pfX0oKTtpZihcIm9iamVjdFwiPT10eXBlb2YgcilyZXR1cm4gci52fXJldHVybiEwfSx0LmV4cG9ydHM9bltcImRlZmF1bHRcIl19LGZ1bmN0aW9uKHQsbil7dmFyIHI9dC5leHBvcnRzPXt2ZXJzaW9uOlwiMS4yLjJcIn07XCJudW1iZXJcIj09dHlwZW9mIF9fZSYmKF9fZT1yKX0sZnVuY3Rpb24odCxuKXt2YXIgcj10LmV4cG9ydHM9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93Lk1hdGg9PU1hdGg/d2luZG93OlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmJiZzZWxmLk1hdGg9PU1hdGg/c2VsZjpGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XCJudW1iZXJcIj09dHlwZW9mIF9fZyYmKF9fZz1yKX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMiksbz1yKDEpLGk9cig0KSx1PXIoMTkpLGM9XCJwcm90b3R5cGVcIixmPWZ1bmN0aW9uKHQsbil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHQuYXBwbHkobixhcmd1bWVudHMpfX0scz1mdW5jdGlvbih0LG4scil7dmFyIGEscCxsLHksZD10JnMuRyxoPXQmcy5QLHY9ZD9lOnQmcy5TP2Vbbl18fChlW25dPXt9KTooZVtuXXx8e30pW2NdLHg9ZD9vOm9bbl18fChvW25dPXt9KTtkJiYocj1uKTtmb3IoYSBpbiByKXA9ISh0JnMuRikmJnYmJmEgaW4gdixsPShwP3Y6cilbYV0seT10JnMuQiYmcD9mKGwsZSk6aCYmXCJmdW5jdGlvblwiPT10eXBlb2YgbD9mKEZ1bmN0aW9uLmNhbGwsbCk6bCx2JiYhcCYmdSh2LGEsbCkseFthXSE9bCYmaSh4LGEseSksaCYmKCh4W2NdfHwoeFtjXT17fSkpW2FdPWwpfTtlLmNvcmU9byxzLkY9MSxzLkc9MixzLlM9NCxzLlA9OCxzLkI9MTYscy5XPTMyLHQuZXhwb3J0cz1zfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cig1KSxvPXIoMTgpO3QuZXhwb3J0cz1yKDIyKT9mdW5jdGlvbih0LG4scil7cmV0dXJuIGUuc2V0RGVzYyh0LG4sbygxLHIpKX06ZnVuY3Rpb24odCxuLHIpe3JldHVybiB0W25dPXIsdH19LGZ1bmN0aW9uKHQsbil7dmFyIHI9T2JqZWN0O3QuZXhwb3J0cz17Y3JlYXRlOnIuY3JlYXRlLGdldFByb3RvOnIuZ2V0UHJvdG90eXBlT2YsaXNFbnVtOnt9LnByb3BlcnR5SXNFbnVtZXJhYmxlLGdldERlc2M6ci5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Isc2V0RGVzYzpyLmRlZmluZVByb3BlcnR5LHNldERlc2NzOnIuZGVmaW5lUHJvcGVydGllcyxnZXRLZXlzOnIua2V5cyxnZXROYW1lczpyLmdldE93blByb3BlcnR5TmFtZXMsZ2V0U3ltYm9sczpyLmdldE93blByb3BlcnR5U3ltYm9scyxlYWNoOltdLmZvckVhY2h9fSxmdW5jdGlvbih0LG4pe3ZhciByPTAsZT1NYXRoLnJhbmRvbSgpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm5cIlN5bWJvbChcIi5jb25jYXQodm9pZCAwPT09dD9cIlwiOnQsXCIpX1wiLCgrK3IrZSkudG9TdHJpbmcoMzYpKX19LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDIwKShcIndrc1wiKSxvPXIoMikuU3ltYm9sO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gZVt0XXx8KGVbdF09byYmb1t0XXx8KG98fHIoNikpKFwiU3ltYm9sLlwiK3QpKX19LGZ1bmN0aW9uKHQsbixyKXtyKDI2KSx0LmV4cG9ydHM9cigxKS5BcnJheS5zb21lfSxmdW5jdGlvbih0LG4scil7cigyNSksdC5leHBvcnRzPXIoMSkuU3RyaW5nLmVuZHNXaXRofSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz1mdW5jdGlvbih0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0KXRocm93IFR5cGVFcnJvcih0K1wiIGlzIG5vdCBhIGZ1bmN0aW9uIVwiKTtyZXR1cm4gdH19LGZ1bmN0aW9uKHQsbil7dmFyIHI9e30udG9TdHJpbmc7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiByLmNhbGwodCkuc2xpY2UoOCwtMSl9fSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigxMCk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbixyKXtpZihlKHQpLHZvaWQgMD09PW4pcmV0dXJuIHQ7c3dpdGNoKHIpe2Nhc2UgMTpyZXR1cm4gZnVuY3Rpb24ocil7cmV0dXJuIHQuY2FsbChuLHIpfTtjYXNlIDI6cmV0dXJuIGZ1bmN0aW9uKHIsZSl7cmV0dXJuIHQuY2FsbChuLHIsZSl9O2Nhc2UgMzpyZXR1cm4gZnVuY3Rpb24ocixlLG8pe3JldHVybiB0LmNhbGwobixyLGUsbyl9fXJldHVybiBmdW5jdGlvbigpe3JldHVybiB0LmFwcGx5KG4sYXJndW1lbnRzKX19fSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz1mdW5jdGlvbih0KXtpZih2b2lkIDA9PXQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiK3QpO3JldHVybiB0fX0sZnVuY3Rpb24odCxuLHIpe3QuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgbj0vLi87dHJ5e1wiLy4vXCJbdF0obil9Y2F0Y2goZSl7dHJ5e3JldHVybiBuW3IoNykoXCJtYXRjaFwiKV09ITEsIVwiLy4vXCJbdF0obil9Y2F0Y2gobyl7fX1yZXR1cm4hMH19LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3RyeXtyZXR1cm4hIXQoKX1jYXRjaChuKXtyZXR1cm4hMH19fSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgdD9udWxsIT09dDpcImZ1bmN0aW9uXCI9PXR5cGVvZiB0fX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMTYpLG89cigxMSksaT1yKDcpKFwibWF0Y2hcIik7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBuO3JldHVybiBlKHQpJiYodm9pZCAwIT09KG49dFtpXSk/ISFuOlwiUmVnRXhwXCI9PW8odCkpfX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuKXtyZXR1cm57ZW51bWVyYWJsZTohKDEmdCksY29uZmlndXJhYmxlOiEoMiZ0KSx3cml0YWJsZTohKDQmdCksdmFsdWU6bn19fSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigyKSxvPXIoNCksaT1yKDYpKFwic3JjXCIpLHU9XCJ0b1N0cmluZ1wiLGM9RnVuY3Rpb25bdV0sZj0oXCJcIitjKS5zcGxpdCh1KTtyKDEpLmluc3BlY3RTb3VyY2U9ZnVuY3Rpb24odCl7cmV0dXJuIGMuY2FsbCh0KX0sKHQuZXhwb3J0cz1mdW5jdGlvbih0LG4scix1KXtcImZ1bmN0aW9uXCI9PXR5cGVvZiByJiYobyhyLGksdFtuXT9cIlwiK3Rbbl06Zi5qb2luKFN0cmluZyhuKSkpLFwibmFtZVwiaW4gcnx8KHIubmFtZT1uKSksdD09PWU/dFtuXT1yOih1fHxkZWxldGUgdFtuXSxvKHQsbixyKSl9KShGdW5jdGlvbi5wcm90b3R5cGUsdSxmdW5jdGlvbigpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMmJnRoaXNbaV18fGMuY2FsbCh0aGlzKX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigyKSxvPVwiX19jb3JlLWpzX3NoYXJlZF9fXCIsaT1lW29dfHwoZVtvXT17fSk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBpW3RdfHwoaVt0XT17fSl9fSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigxNyksbz1yKDEzKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuLHIpe2lmKGUobikpdGhyb3cgVHlwZUVycm9yKFwiU3RyaW5nI1wiK3IrXCIgZG9lc24ndCBhY2NlcHQgcmVnZXghXCIpO3JldHVybiBTdHJpbmcobyh0KSl9fSxmdW5jdGlvbih0LG4scil7dC5leHBvcnRzPSFyKDE1KShmdW5jdGlvbigpe3JldHVybiA3IT1PYmplY3QuZGVmaW5lUHJvcGVydHkoe30sXCJhXCIse2dldDpmdW5jdGlvbigpe3JldHVybiA3fX0pLmF9KX0sZnVuY3Rpb24odCxuKXt2YXIgcj1NYXRoLmNlaWwsZT1NYXRoLmZsb29yO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gaXNOYU4odD0rdCk/MDoodD4wP2U6cikodCl9fSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigyMyksbz1NYXRoLm1pbjt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHQ+MD9vKGUodCksOTAwNzE5OTI1NDc0MDk5MSk6MH19LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDMpLG89cigyNCksaT1yKDIxKSx1PVwiZW5kc1dpdGhcIixjPVwiXCJbdV07ZShlLlArZS5GKnIoMTQpKHUpLFwiU3RyaW5nXCIse2VuZHNXaXRoOmZ1bmN0aW9uKHQpe3ZhciBuPWkodGhpcyx0LHUpLHI9YXJndW1lbnRzLGU9ci5sZW5ndGg+MT9yWzFdOnZvaWQgMCxmPW8obi5sZW5ndGgpLHM9dm9pZCAwPT09ZT9mOk1hdGgubWluKG8oZSksZiksYT1TdHJpbmcodCk7cmV0dXJuIGM/Yy5jYWxsKG4sYSxzKTpuLnNsaWNlKHMtYS5sZW5ndGgscyk9PT1hfX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cig1KSxvPXIoMyksaT1yKDEpLkFycmF5fHxBcnJheSx1PXt9LGM9ZnVuY3Rpb24odCxuKXtlLmVhY2guY2FsbCh0LnNwbGl0KFwiLFwiKSxmdW5jdGlvbih0KXt2b2lkIDA9PW4mJnQgaW4gaT91W3RdPWlbdF06dCBpbltdJiYodVt0XT1yKDEyKShGdW5jdGlvbi5jYWxsLFtdW3RdLG4pKX0pfTtjKFwicG9wLHJldmVyc2Usc2hpZnQsa2V5cyx2YWx1ZXMsZW50cmllc1wiLDEpLGMoXCJpbmRleE9mLGV2ZXJ5LHNvbWUsZm9yRWFjaCxtYXAsZmlsdGVyLGZpbmQsZmluZEluZGV4LGluY2x1ZGVzXCIsMyksYyhcImpvaW4sc2xpY2UsY29uY2F0LHB1c2gsc3BsaWNlLHVuc2hpZnQsc29ydCxsYXN0SW5kZXhPZixyZWR1Y2UscmVkdWNlUmlnaHQsY29weVdpdGhpbixmaWxsXCIpLG8oby5TLFwiQXJyYXlcIix1KX1dKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hdHRyLWFjY2VwdC9kaXN0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4OTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQge1xuICByZWplY3RlZDoge1xuICAgIGJvcmRlclN0eWxlOiAnc29saWQnLFxuICAgIGJvcmRlckNvbG9yOiAnI2M2NicsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2VlZSdcbiAgfSxcbiAgZGlzYWJsZWQ6IHtcbiAgICBvcGFjaXR5OiAwLjVcbiAgfSxcbiAgYWN0aXZlOiB7XG4gICAgYm9yZGVyU3R5bGU6ICdzb2xpZCcsXG4gICAgYm9yZGVyQ29sb3I6ICcjNmM2JyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWVlJ1xuICB9LFxuICBkZWZhdWx0OiB7XG4gICAgd2lkdGg6IDIwMCxcbiAgICBoZWlnaHQ6IDIwMCxcbiAgICBib3JkZXJXaWR0aDogMixcbiAgICBib3JkZXJDb2xvcjogJyM2NjYnLFxuICAgIGJvcmRlclN0eWxlOiAnZGFzaGVkJyxcbiAgICBib3JkZXJSYWRpdXM6IDVcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1kcm9wem9uZS9kaXN0L2VzL3V0aWxzL3N0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gOTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=