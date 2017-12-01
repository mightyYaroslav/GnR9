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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Qcm9maWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kcm9wem9uZS9kaXN0L2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kcm9wem9uZS9kaXN0L2VzL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hdHRyLWFjY2VwdC9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kcm9wem9uZS9kaXN0L2VzL3V0aWxzL3N0eWxlcy5qcyJdLCJuYW1lcyI6WyJlcnJvckxhYmVsIiwiUHJvZmlsZSIsInByb3BzIiwic3RhdGUiLCJlbWFpbCIsImdldFVzZXIiLCJuYW1lIiwiZHJvcHpvbmVSZWYiLCJpbWFnZSIsImltYWdlVXJsIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImhhbmRsZVN1Ym1pdCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImZpZWxkIiwiYXBwZW5kIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiZ2V0VG9rZW4iLCJib2R5IiwidGhlbiIsInJlcyIsInN0YXR1cyIsImpzb24iLCJzdGF0dXNUZXh0IiwidXBkYXRlVXNlciIsInVzZXIiLCJjYXRjaCIsImVyciIsImFjY2VwdGVkIiwicmVqZWN0ZWQiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsIm1pbkxlbmd0aCIsIm1heExlbmd0aCIsImlzRGVmYXVsdFJlcXVpcmVkVmFsdWUiLCJpc0VtYWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYSx3REFBTyxPQUFN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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0MsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQsV0FBVztBQUNYO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0M7QUFDcEM7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0JBQWtCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0Esd0ZBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN2xCQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3pDQSwyQkFBMkIsY0FBYyw0QkFBNEIsWUFBWSxVQUFVLGlCQUFpQixnRUFBZ0UsU0FBUywrQkFBK0Isa0JBQWtCLGFBQWEscURBQXFELFNBQVMsaUJBQWlCLHdGQUF3RixPQUFPLHFCQUFxQixlQUFlLGtIQUFrSCxHQUFHLEdBQUcsaUNBQWlDLFNBQVMsd0JBQXdCLGVBQWUsaUJBQWlCLGlCQUFpQiw4QkFBOEIsZUFBZSw4SUFBOEksOEJBQThCLGlCQUFpQiwrREFBK0Qsa0JBQWtCLDZCQUE2QixtQkFBbUIsc0RBQXNELFdBQVcseUJBQXlCLEVBQUUsU0FBUyxrS0FBa0ssVUFBVSwyREFBMkQsaUJBQWlCLG1CQUFtQixnQ0FBZ0MsNkJBQTZCLGlCQUFpQixpQkFBaUIsZUFBZSxhQUFhLFdBQVcsbURBQW1ELGdOQUFnTixlQUFlLHdCQUF3QixzQkFBc0IsbUVBQW1FLGlCQUFpQixpQ0FBaUMsc0JBQXNCLHFEQUFxRCxpQkFBaUIsZ0NBQWdDLGlCQUFpQixxQ0FBcUMsZUFBZSxzQkFBc0IsaUVBQWlFLFVBQVUsZUFBZSxRQUFRLFVBQVUsc0JBQXNCLDhCQUE4QixpQkFBaUIsWUFBWSwwQkFBMEIsNEJBQTRCLFVBQVUsMEJBQTBCLG9CQUFvQiw0QkFBNEIsc0JBQXNCLDhCQUE4Qix3QkFBd0Isa0JBQWtCLDhCQUE4QixlQUFlLHNCQUFzQix5REFBeUQsVUFBVSxpQkFBaUIsc0JBQXNCLFVBQVUsSUFBSSxZQUFZLFNBQVMsSUFBSSx3Q0FBd0MsV0FBVyxVQUFVLGVBQWUsc0JBQXNCLElBQUksWUFBWSxTQUFTLFdBQVcsZUFBZSxzQkFBc0Isd0RBQXdELGlCQUFpQixvQ0FBb0Msc0JBQXNCLE1BQU0scURBQXFELGVBQWUsd0JBQXdCLE9BQU8sZ0VBQWdFLGlCQUFpQiw2RUFBNkUsK0JBQStCLGlCQUFpQiw4QkFBOEIsNEhBQTRILGtDQUFrQyxxREFBcUQsRUFBRSxpQkFBaUIsa0RBQWtELEVBQUUsc0JBQXNCLHFCQUFxQixHQUFHLGlCQUFpQixvQkFBb0IsMEJBQTBCLDhEQUE4RCxxQkFBcUIsaUJBQWlCLDRCQUE0QixrQ0FBa0MsTUFBTSxlQUFlLFVBQVUsSUFBSSxFQUFFLGVBQWUsNkJBQTZCLHNCQUFzQixtQ0FBbUMsaUJBQWlCLHVCQUF1QixzQkFBc0IsdUNBQXVDLGlCQUFpQixhQUFhLGdEQUFnRCw2QkFBNkIscUJBQXFCLGlIQUFpSCxrREFBa0QsRUFBRSxpQkFBaUIsMENBQTBDLGlCQUFpQixxQ0FBcUMsd0VBQXdFLEdBQUcsa09BQWtPLEc7Ozs7Ozs7O0FDQXAzSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEciLCJmaWxlIjoiMC4wZTVlZjViYWUxZDA5ZjJiMTBhZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7Rm9ybX0gZnJvbSAnZm9ybXN5LXNlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IERyb3B6b25lIGZyb20gJ3JlYWN0LWRyb3B6b25lJ1xuaW1wb3J0IHtCdXR0b24sIEdyaWQsIEltYWdlLCBJbnB1dCwgTGFiZWwsIExpc3QsIFNlZ21lbnR9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdmJhcidcbmltcG9ydCBMb2dvIGZyb20gJy4uL3Jlcy9pbWFnZXMvbG9nby5wbmcnXG5pbXBvcnQgQXV0aCBmcm9tICcuLi9tb2R1bGVzL0F1dGgnXG5cbmNvbnN0IGVycm9yTGFiZWwgPSA8TGFiZWwgY29sb3I9XCJyZWRcIiBwb2ludGluZz0nYWJvdmUnLz5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZmlsZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGVtYWlsOiBBdXRoLmdldFVzZXIoKS5lbWFpbCxcbiAgICAgICAgICAgIG5hbWU6IEF1dGguZ2V0VXNlcigpLm5hbWUsXG4gICAgICAgICAgICBlcnJvckxhYmVsOiAnJyxcbiAgICAgICAgICAgIGRyb3B6b25lUmVmOiBudWxsLFxuICAgICAgICAgICAgaW1hZ2U6IEF1dGguZ2V0VXNlcigpLmltYWdlLFxuICAgICAgICAgICAgaW1hZ2VVcmw6ICcnXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKVxuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgICAgIGNvbnN0IHtuYW1lLCB2YWx1ZX0gPSBlLnRhcmdldFxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgICAgICAgICBlcnJvckxhYmVsOiAnJ1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICAgIGZvciAobGV0IGZpZWxkIG9mIFsnZW1haWwnLCAnbmFtZScsICdpbWFnZSddKVxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGZpZWxkLCB0aGlzLnN0YXRlW2ZpZWxkXSlcblxuICAgICAgICBmZXRjaCgnL3Byb2ZpbGUnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgYmVhcmVyICR7QXV0aC5nZXRUb2tlbigpfWBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBmb3JtRGF0YVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlcy5zdGF0dXMgPT09IDQwMClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiA8TGFiZWwgYXM9J2EnIGNvbG9yPSdyZWQnPkNhbid0IGxvZ2luPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGFzPSdhJyBjb2xvcj0ncmVkJz57cmVzLnN0YXR1c1RleHR9PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBBdXRoLnVwZGF0ZVVzZXIoanNvbi51c2VyKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogPExhYmVsIGFzPSdhJyBjb2xvcj0ncmVkJz57ZXJyIHx8ICdFcnJvcid9PC9MYWJlbD5cbiAgICAgICAgICAgIH0pKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPE5hdkJhci8+XG4gICAgICAgICAgICAgICAgPFNlZ21lbnQgcGFkZGVkPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSBvblZhbGlkU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvckxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3B6b25lIG9uRHJvcD17KGFjY2VwdGVkLCByZWplY3RlZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IGFjY2VwdGVkWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybDogcmVhZGVyLnJlc3VsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChhY2NlcHRlZFswXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgYXM9J2EnIGNvbG9yPSd0ZWFsJyByaWJib24+RHJvcCBuZXcgYXZhdGFyPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dGhpcy5zdGF0ZS5pbWFnZVVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXJjdWxhci8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcHpvbmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gc3RyZXRjaGVkIHdpZHRoPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSduYW1lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1VzZXJuYW1lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbnRWYWxpZGF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiAyMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg6ICdVc2VybmFtZSBzaG91bGQgbm90IGNvbnRhaW4gbGVzcyB0aGFuIDUgY2hhcmFjdGVycycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiAnVXNlcm5hbWUgc2hvdWxkIG5vdCBjb250YWluIG1vcmUgdGhhbiAyMCBjaGFyYWN0ZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RlZmF1bHRSZXF1aXJlZFZhbHVlOiAnVXNlcm5hbWUgaXMgcmVxdWlyZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbD17ZXJyb3JMYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2VtYWlsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0VtYWlsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW50VmFsaWRhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFbWFpbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDUwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRW1haWw6ICdFbWFpbCBzaG91bGQgYmUgdmFsaWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogJ0VtYWlsIHNob3VsZCBub3QgY29udGFpbiBtb3JlIHRoYW4gNTAgY2hhcmFjdGVycycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEZWZhdWx0UmVxdWlyZWRWYWx1ZTogJ0VtYWlsIGlzIHJlcXVpcmVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWw9e2Vycm9yTGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBmbHVpZCB0eXBlPSdzdWJtaXQnPlNhdmU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRhaW5lcnMvUHJvZmlsZS5qcyIsInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyogZXNsaW50IHByZWZlci10ZW1wbGF0ZTogMCAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHN1cHBvcnRNdWx0aXBsZSwgZmlsZUFjY2VwdGVkLCBhbGxGaWxlc0FjY2VwdGVkLCBmaWxlTWF0Y2hTaXplLCBvbkRvY3VtZW50RHJhZ092ZXIsIGdldERhdGFUcmFuc2Zlckl0ZW1zIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdXRpbHMvc3R5bGVzJztcblxudmFyIERyb3B6b25lID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKERyb3B6b25lLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBEcm9wem9uZShwcm9wcywgY29udGV4dCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEcm9wem9uZSk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoRHJvcHpvbmUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihEcm9wem9uZSkpLmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpKTtcblxuICAgIF90aGlzLnJlbmRlckNoaWxkcmVuID0gZnVuY3Rpb24gKGNoaWxkcmVuLCBpc0RyYWdBY3RpdmUsIGlzRHJhZ0FjY2VwdCwgaXNEcmFnUmVqZWN0KSB7XG4gICAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjaGlsZHJlbihfZXh0ZW5kcyh7fSwgX3RoaXMuc3RhdGUsIHtcbiAgICAgICAgICBpc0RyYWdBY3RpdmU6IGlzRHJhZ0FjdGl2ZSxcbiAgICAgICAgICBpc0RyYWdBY2NlcHQ6IGlzRHJhZ0FjY2VwdCxcbiAgICAgICAgICBpc0RyYWdSZWplY3Q6IGlzRHJhZ1JlamVjdFxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgfTtcblxuICAgIF90aGlzLmNvbXBvc2VIYW5kbGVycyA9IF90aGlzLmNvbXBvc2VIYW5kbGVycy5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5vbkNsaWNrID0gX3RoaXMub25DbGljay5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5vbkRvY3VtZW50RHJvcCA9IF90aGlzLm9uRG9jdW1lbnREcm9wLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLm9uRHJhZ0VudGVyID0gX3RoaXMub25EcmFnRW50ZXIuYmluZChfdGhpcyk7XG4gICAgX3RoaXMub25EcmFnTGVhdmUgPSBfdGhpcy5vbkRyYWdMZWF2ZS5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5vbkRyYWdPdmVyID0gX3RoaXMub25EcmFnT3Zlci5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5vbkRyYWdTdGFydCA9IF90aGlzLm9uRHJhZ1N0YXJ0LmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLm9uRHJvcCA9IF90aGlzLm9uRHJvcC5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5vbkZpbGVEaWFsb2dDYW5jZWwgPSBfdGhpcy5vbkZpbGVEaWFsb2dDYW5jZWwuYmluZChfdGhpcyk7XG4gICAgX3RoaXMub25JbnB1dEVsZW1lbnRDbGljayA9IF90aGlzLm9uSW5wdXRFbGVtZW50Q2xpY2suYmluZChfdGhpcyk7XG5cbiAgICBfdGhpcy5zZXRSZWYgPSBfdGhpcy5zZXRSZWYuYmluZChfdGhpcyk7XG4gICAgX3RoaXMuc2V0UmVmcyA9IF90aGlzLnNldFJlZnMuYmluZChfdGhpcyk7XG5cbiAgICBfdGhpcy5pc0ZpbGVEaWFsb2dBY3RpdmUgPSBmYWxzZTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgZHJhZ2dlZEZpbGVzOiBbXSxcbiAgICAgIGFjY2VwdGVkRmlsZXM6IFtdLFxuICAgICAgcmVqZWN0ZWRGaWxlczogW11cbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEcm9wem9uZSwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIHByZXZlbnREcm9wT25Eb2N1bWVudCA9IHRoaXMucHJvcHMucHJldmVudERyb3BPbkRvY3VtZW50O1xuXG4gICAgICB0aGlzLmRyYWdUYXJnZXRzID0gW107XG5cbiAgICAgIGlmIChwcmV2ZW50RHJvcE9uRG9jdW1lbnQpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBvbkRvY3VtZW50RHJhZ092ZXIsIGZhbHNlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMub25Eb2N1bWVudERyb3AsIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZmlsZUlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uSW5wdXRFbGVtZW50Q2xpY2ssIGZhbHNlKTtcbiAgICAgIC8vIFRyaWVkIGltcGxlbWVudGluZyBhZGRFdmVudExpc3RlbmVyLCBidXQgZGlkbid0IHdvcmsgb3V0XG4gICAgICBkb2N1bWVudC5ib2R5Lm9uZm9jdXMgPSB0aGlzLm9uRmlsZURpYWxvZ0NhbmNlbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdmFyIHByZXZlbnREcm9wT25Eb2N1bWVudCA9IHRoaXMucHJvcHMucHJldmVudERyb3BPbkRvY3VtZW50O1xuXG4gICAgICBpZiAocHJldmVudERyb3BPbkRvY3VtZW50KSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgb25Eb2N1bWVudERyYWdPdmVyKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMub25Eb2N1bWVudERyb3ApO1xuICAgICAgfVxuICAgICAgdGhpcy5maWxlSW5wdXRFbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25JbnB1dEVsZW1lbnRDbGljaywgZmFsc2UpO1xuICAgICAgLy8gQ2FuIGJlIHJlcGxhY2VkIHdpdGggcmVtb3ZlRXZlbnRMaXN0ZW5lciwgaWYgYWRkRXZlbnRMaXN0ZW5lciB3b3Jrc1xuICAgICAgZG9jdW1lbnQuYm9keS5vbmZvY3VzID0gbnVsbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb3NlSGFuZGxlcnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb3NlSGFuZGxlcnMoaGFuZGxlcikge1xuICAgICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoYW5kbGVyO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uRG9jdW1lbnREcm9wJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25Eb2N1bWVudERyb3AoZXZ0KSB7XG4gICAgICBpZiAodGhpcy5ub2RlICYmIHRoaXMubm9kZS5jb250YWlucyhldnQudGFyZ2V0KSkge1xuICAgICAgICAvLyBpZiB3ZSBpbnRlcmNlcHRlZCBhbiBldmVudCBmb3Igb3VyIGluc3RhbmNlLCBsZXQgaXQgcHJvcGFnYXRlIGRvd24gdG8gdGhlIGluc3RhbmNlJ3Mgb25Ecm9wIGhhbmRsZXJcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmRyYWdUYXJnZXRzID0gW107XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25EcmFnU3RhcnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkRyYWdTdGFydChldnQpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uRHJhZ1N0YXJ0KSB7XG4gICAgICAgIHRoaXMucHJvcHMub25EcmFnU3RhcnQuY2FsbCh0aGlzLCBldnQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uRHJhZ0VudGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25EcmFnRW50ZXIoZXZ0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgLy8gQ291bnQgdGhlIGRyb3B6b25lIGFuZCBhbnkgY2hpbGRyZW4gdGhhdCBhcmUgZW50ZXJlZC5cbiAgICAgIGlmICh0aGlzLmRyYWdUYXJnZXRzLmluZGV4T2YoZXZ0LnRhcmdldCkgPT09IC0xKSB7XG4gICAgICAgIHRoaXMuZHJhZ1RhcmdldHMucHVzaChldnQudGFyZ2V0KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzRHJhZ0FjdGl2ZTogdHJ1ZSwgLy8gRG8gbm90IHJlbHkgb24gZmlsZXMgZm9yIHRoZSBkcmFnIHN0YXRlLiBJdCBkb2Vzbid0IHdvcmsgaW4gU2FmYXJpLlxuICAgICAgICBkcmFnZ2VkRmlsZXM6IGdldERhdGFUcmFuc2Zlckl0ZW1zKGV2dClcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkRyYWdFbnRlcikge1xuICAgICAgICB0aGlzLnByb3BzLm9uRHJhZ0VudGVyLmNhbGwodGhpcywgZXZ0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbkRyYWdPdmVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25EcmFnT3ZlcihldnQpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0cnkge1xuICAgICAgICBldnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnY29weSc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvLyBjb250aW51ZSByZWdhcmRsZXNzIG9mIGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uRHJhZ092ZXIpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkRyYWdPdmVyLmNhbGwodGhpcywgZXZ0KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbkRyYWdMZWF2ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uRHJhZ0xlYXZlKGV2dCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAvLyBPbmx5IGRlYWN0aXZhdGUgb25jZSB0aGUgZHJvcHpvbmUgYW5kIGFsbCBjaGlsZHJlbiBoYXZlIGJlZW4gbGVmdC5cbiAgICAgIHRoaXMuZHJhZ1RhcmdldHMgPSB0aGlzLmRyYWdUYXJnZXRzLmZpbHRlcihmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgcmV0dXJuIGVsICE9PSBldnQudGFyZ2V0ICYmIF90aGlzMi5ub2RlLmNvbnRhaW5zKGVsKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuZHJhZ1RhcmdldHMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIENsZWFyIGRyYWdnaW5nIGZpbGVzIHN0YXRlXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNEcmFnQWN0aXZlOiBmYWxzZSxcbiAgICAgICAgZHJhZ2dlZEZpbGVzOiBbXVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uRHJhZ0xlYXZlKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25EcmFnTGVhdmUuY2FsbCh0aGlzLCBldnQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uRHJvcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uRHJvcChldnQpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBvbkRyb3AgPSBfcHJvcHMub25Ecm9wLFxuICAgICAgICAgIG9uRHJvcEFjY2VwdGVkID0gX3Byb3BzLm9uRHJvcEFjY2VwdGVkLFxuICAgICAgICAgIG9uRHJvcFJlamVjdGVkID0gX3Byb3BzLm9uRHJvcFJlamVjdGVkLFxuICAgICAgICAgIG11bHRpcGxlID0gX3Byb3BzLm11bHRpcGxlLFxuICAgICAgICAgIGRpc2FibGVQcmV2aWV3ID0gX3Byb3BzLmRpc2FibGVQcmV2aWV3LFxuICAgICAgICAgIGFjY2VwdCA9IF9wcm9wcy5hY2NlcHQ7XG5cbiAgICAgIHZhciBmaWxlTGlzdCA9IGdldERhdGFUcmFuc2Zlckl0ZW1zKGV2dCk7XG4gICAgICB2YXIgYWNjZXB0ZWRGaWxlcyA9IFtdO1xuICAgICAgdmFyIHJlamVjdGVkRmlsZXMgPSBbXTtcblxuICAgICAgLy8gU3RvcCBkZWZhdWx0IGJyb3dzZXIgYmVoYXZpb3JcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAvLyBSZXNldCB0aGUgY291bnRlciBhbG9uZyB3aXRoIHRoZSBkcmFnIG9uIGEgZHJvcC5cbiAgICAgIHRoaXMuZHJhZ1RhcmdldHMgPSBbXTtcbiAgICAgIHRoaXMuaXNGaWxlRGlhbG9nQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgIGZpbGVMaXN0LmZvckVhY2goZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgaWYgKCFkaXNhYmxlUHJldmlldykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmaWxlLnByZXZpZXcgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGdlbmVyYXRlIHByZXZpZXcgZm9yIGZpbGUnLCBmaWxlLCBlcnIpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmlsZUFjY2VwdGVkKGZpbGUsIGFjY2VwdCkgJiYgZmlsZU1hdGNoU2l6ZShmaWxlLCBfdGhpczMucHJvcHMubWF4U2l6ZSwgX3RoaXMzLnByb3BzLm1pblNpemUpKSB7XG4gICAgICAgICAgYWNjZXB0ZWRGaWxlcy5wdXNoKGZpbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdGVkRmlsZXMucHVzaChmaWxlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICghbXVsdGlwbGUpIHtcbiAgICAgICAgLy8gaWYgbm90IGluIG11bHRpIG1vZGUgYWRkIGFueSBleHRyYSBhY2NlcHRlZCBmaWxlcyB0byByZWplY3RlZC5cbiAgICAgICAgLy8gVGhpcyB3aWxsIGFsbG93IGVuZCB1c2VycyB0byBlYXNpbHkgaWdub3JlIGEgbXVsdGkgZmlsZSBkcm9wIGluIFwic2luZ2xlXCIgbW9kZS5cbiAgICAgICAgcmVqZWN0ZWRGaWxlcy5wdXNoLmFwcGx5KHJlamVjdGVkRmlsZXMsIF90b0NvbnN1bWFibGVBcnJheShhY2NlcHRlZEZpbGVzLnNwbGljZSgxKSkpO1xuICAgICAgfVxuXG4gICAgICBpZiAob25Ecm9wKSB7XG4gICAgICAgIG9uRHJvcC5jYWxsKHRoaXMsIGFjY2VwdGVkRmlsZXMsIHJlamVjdGVkRmlsZXMsIGV2dCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWplY3RlZEZpbGVzLmxlbmd0aCA+IDAgJiYgb25Ecm9wUmVqZWN0ZWQpIHtcbiAgICAgICAgb25Ecm9wUmVqZWN0ZWQuY2FsbCh0aGlzLCByZWplY3RlZEZpbGVzLCBldnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWNjZXB0ZWRGaWxlcy5sZW5ndGggPiAwICYmIG9uRHJvcEFjY2VwdGVkKSB7XG4gICAgICAgIG9uRHJvcEFjY2VwdGVkLmNhbGwodGhpcywgYWNjZXB0ZWRGaWxlcywgZXZ0KTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2xlYXIgZmlsZXMgdmFsdWVcbiAgICAgIHRoaXMuZHJhZ2dlZEZpbGVzID0gbnVsbDtcblxuICAgICAgLy8gUmVzZXQgZHJhZyBzdGF0ZVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzRHJhZ0FjdGl2ZTogZmFsc2UsXG4gICAgICAgIGRyYWdnZWRGaWxlczogW10sXG4gICAgICAgIGFjY2VwdGVkRmlsZXM6IGFjY2VwdGVkRmlsZXMsXG4gICAgICAgIHJlamVjdGVkRmlsZXM6IHJlamVjdGVkRmlsZXNcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uQ2xpY2snLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNsaWNrKGV2dCkge1xuICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIG9uQ2xpY2sgPSBfcHJvcHMyLm9uQ2xpY2ssXG4gICAgICAgICAgZGlzYWJsZUNsaWNrID0gX3Byb3BzMi5kaXNhYmxlQ2xpY2s7XG5cbiAgICAgIGlmICghZGlzYWJsZUNsaWNrKSB7XG4gICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBpZiAob25DbGljaykge1xuICAgICAgICAgIG9uQ2xpY2suY2FsbCh0aGlzLCBldnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaW4gSUUxMS9FZGdlIHRoZSBmaWxlLWJyb3dzZXIgZGlhbG9nIGlzIGJsb2NraW5nLCBlbnN1cmUgdGhpcyBpcyBiZWhpbmQgc2V0VGltZW91dFxuICAgICAgICAvLyB0aGlzIGlzIHNvIHJlYWN0IGNhbiBoYW5kbGUgc3RhdGUgY2hhbmdlcyBpbiB0aGUgb25DbGljayBwcm9wIGFib3ZlIGFib3ZlXG4gICAgICAgIC8vIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWRyb3B6b25lL3JlYWN0LWRyb3B6b25lL2lzc3Vlcy80NTBcbiAgICAgICAgc2V0VGltZW91dCh0aGlzLm9wZW4uYmluZCh0aGlzKSwgMCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25JbnB1dEVsZW1lbnRDbGljaycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uSW5wdXRFbGVtZW50Q2xpY2soZXZ0KSB7XG4gICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAodGhpcy5wcm9wcy5pbnB1dFByb3BzICYmIHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkNsaWNrKSB7XG4gICAgICAgIHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkNsaWNrKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25GaWxlRGlhbG9nQ2FuY2VsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25GaWxlRGlhbG9nQ2FuY2VsKCkge1xuICAgICAgLy8gdGltZW91dCB3aWxsIG5vdCByZWNvZ25pemUgY29udGV4dCBvZiB0aGlzIG1ldGhvZFxuICAgICAgdmFyIG9uRmlsZURpYWxvZ0NhbmNlbCA9IHRoaXMucHJvcHMub25GaWxlRGlhbG9nQ2FuY2VsO1xuICAgICAgdmFyIGZpbGVJbnB1dEVsID0gdGhpcy5maWxlSW5wdXRFbDtcbiAgICAgIHZhciBpc0ZpbGVEaWFsb2dBY3RpdmUgPSB0aGlzLmlzRmlsZURpYWxvZ0FjdGl2ZTtcbiAgICAgIC8vIGV4ZWN1dGUgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgb25GaWxlRGlhbG9nQ2FuY2VsIGlzIGRlZmluZWQgYW5kIEZpbGVEaWFsb2dcbiAgICAgIC8vIGlzIG9wZW5lZCBpbiB0aGUgYnJvd3NlclxuXG4gICAgICBpZiAob25GaWxlRGlhbG9nQ2FuY2VsICYmIGlzRmlsZURpYWxvZ0FjdGl2ZSkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBSZXR1cm5zIGFuIG9iamVjdCBhcyBGaWxlTGlzdFxuICAgICAgICAgIHZhciBGaWxlTGlzdCA9IGZpbGVJbnB1dEVsLmZpbGVzO1xuICAgICAgICAgIGlmICghRmlsZUxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICBpc0ZpbGVEaWFsb2dBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIG9uRmlsZURpYWxvZ0NhbmNlbCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgMzAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZXRSZWYnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRSZWYocmVmKSB7XG4gICAgICB0aGlzLm5vZGUgPSByZWY7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0UmVmcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFJlZnMocmVmKSB7XG4gICAgICB0aGlzLmZpbGVJbnB1dEVsID0gcmVmO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBPcGVuIHN5c3RlbSBmaWxlIHVwbG9hZCBkaWFsb2cuXG4gICAgICpcbiAgICAgKiBAcHVibGljXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ29wZW4nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvcGVuKCkge1xuICAgICAgdGhpcy5pc0ZpbGVEaWFsb2dBY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5maWxlSW5wdXRFbC52YWx1ZSA9IG51bGw7XG4gICAgICB0aGlzLmZpbGVJbnB1dEVsLmNsaWNrKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGFjY2VwdCA9IF9wcm9wczMuYWNjZXB0LFxuICAgICAgICAgIGFjY2VwdENsYXNzTmFtZSA9IF9wcm9wczMuYWNjZXB0Q2xhc3NOYW1lLFxuICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZSA9IF9wcm9wczMuYWN0aXZlQ2xhc3NOYW1lLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzMy5jaGlsZHJlbixcbiAgICAgICAgICBkaXNhYmxlZCA9IF9wcm9wczMuZGlzYWJsZWQsXG4gICAgICAgICAgZGlzYWJsZWRDbGFzc05hbWUgPSBfcHJvcHMzLmRpc2FibGVkQ2xhc3NOYW1lLFxuICAgICAgICAgIGlucHV0UHJvcHMgPSBfcHJvcHMzLmlucHV0UHJvcHMsXG4gICAgICAgICAgbXVsdGlwbGUgPSBfcHJvcHMzLm11bHRpcGxlLFxuICAgICAgICAgIG5hbWUgPSBfcHJvcHMzLm5hbWUsXG4gICAgICAgICAgcmVqZWN0Q2xhc3NOYW1lID0gX3Byb3BzMy5yZWplY3RDbGFzc05hbWUsXG4gICAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMzLCBbJ2FjY2VwdCcsICdhY2NlcHRDbGFzc05hbWUnLCAnYWN0aXZlQ2xhc3NOYW1lJywgJ2NoaWxkcmVuJywgJ2Rpc2FibGVkJywgJ2Rpc2FibGVkQ2xhc3NOYW1lJywgJ2lucHV0UHJvcHMnLCAnbXVsdGlwbGUnLCAnbmFtZScsICdyZWplY3RDbGFzc05hbWUnXSk7XG5cbiAgICAgIHZhciBhY2NlcHRTdHlsZSA9IHJlc3QuYWNjZXB0U3R5bGUsXG4gICAgICAgICAgYWN0aXZlU3R5bGUgPSByZXN0LmFjdGl2ZVN0eWxlLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IHJlc3QuY2xhc3NOYW1lLFxuICAgICAgICAgIGRpc2FibGVkU3R5bGUgPSByZXN0LmRpc2FibGVkU3R5bGUsXG4gICAgICAgICAgcmVqZWN0U3R5bGUgPSByZXN0LnJlamVjdFN0eWxlLFxuICAgICAgICAgIHN0eWxlID0gcmVzdC5zdHlsZSxcbiAgICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhyZXN0LCBbJ2FjY2VwdFN0eWxlJywgJ2FjdGl2ZVN0eWxlJywgJ2NsYXNzTmFtZScsICdkaXNhYmxlZFN0eWxlJywgJ3JlamVjdFN0eWxlJywgJ3N0eWxlJ10pO1xuXG4gICAgICB2YXIgX3N0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBpc0RyYWdBY3RpdmUgPSBfc3RhdGUuaXNEcmFnQWN0aXZlLFxuICAgICAgICAgIGRyYWdnZWRGaWxlcyA9IF9zdGF0ZS5kcmFnZ2VkRmlsZXM7XG5cbiAgICAgIHZhciBmaWxlc0NvdW50ID0gZHJhZ2dlZEZpbGVzLmxlbmd0aDtcbiAgICAgIHZhciBpc011bHRpcGxlQWxsb3dlZCA9IG11bHRpcGxlIHx8IGZpbGVzQ291bnQgPD0gMTtcbiAgICAgIHZhciBpc0RyYWdBY2NlcHQgPSBmaWxlc0NvdW50ID4gMCAmJiBhbGxGaWxlc0FjY2VwdGVkKGRyYWdnZWRGaWxlcywgdGhpcy5wcm9wcy5hY2NlcHQpO1xuICAgICAgdmFyIGlzRHJhZ1JlamVjdCA9IGZpbGVzQ291bnQgPiAwICYmICghaXNEcmFnQWNjZXB0IHx8ICFpc011bHRpcGxlQWxsb3dlZCk7XG4gICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUgfHwgJyc7XG4gICAgICB2YXIgbm9TdHlsZXMgPSAhY2xhc3NOYW1lICYmICFzdHlsZSAmJiAhYWN0aXZlU3R5bGUgJiYgIWFjY2VwdFN0eWxlICYmICFyZWplY3RTdHlsZSAmJiAhZGlzYWJsZWRTdHlsZTtcblxuICAgICAgaWYgKGlzRHJhZ0FjdGl2ZSAmJiBhY3RpdmVDbGFzc05hbWUpIHtcbiAgICAgICAgY2xhc3NOYW1lICs9ICcgJyArIGFjdGl2ZUNsYXNzTmFtZTtcbiAgICAgIH1cbiAgICAgIGlmIChpc0RyYWdBY2NlcHQgJiYgYWNjZXB0Q2xhc3NOYW1lKSB7XG4gICAgICAgIGNsYXNzTmFtZSArPSAnICcgKyBhY2NlcHRDbGFzc05hbWU7XG4gICAgICB9XG4gICAgICBpZiAoaXNEcmFnUmVqZWN0ICYmIHJlamVjdENsYXNzTmFtZSkge1xuICAgICAgICBjbGFzc05hbWUgKz0gJyAnICsgcmVqZWN0Q2xhc3NOYW1lO1xuICAgICAgfVxuICAgICAgaWYgKGRpc2FibGVkICYmIGRpc2FibGVkQ2xhc3NOYW1lKSB7XG4gICAgICAgIGNsYXNzTmFtZSArPSAnICcgKyBkaXNhYmxlZENsYXNzTmFtZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5vU3R5bGVzKSB7XG4gICAgICAgIHN0eWxlID0gc3R5bGVzLmRlZmF1bHQ7XG4gICAgICAgIGFjdGl2ZVN0eWxlID0gc3R5bGVzLmFjdGl2ZTtcbiAgICAgICAgYWNjZXB0U3R5bGUgPSBzdHlsZS5hY3RpdmU7XG4gICAgICAgIHJlamVjdFN0eWxlID0gc3R5bGVzLnJlamVjdGVkO1xuICAgICAgICBkaXNhYmxlZFN0eWxlID0gc3R5bGVzLmRpc2FibGVkO1xuICAgICAgfVxuXG4gICAgICB2YXIgYXBwbGllZFN0eWxlID0gX2V4dGVuZHMoe30sIHN0eWxlKTtcbiAgICAgIGlmIChhY3RpdmVTdHlsZSAmJiBpc0RyYWdBY3RpdmUpIHtcbiAgICAgICAgYXBwbGllZFN0eWxlID0gX2V4dGVuZHMoe30sIHN0eWxlLCBhY3RpdmVTdHlsZSk7XG4gICAgICB9XG4gICAgICBpZiAoYWNjZXB0U3R5bGUgJiYgaXNEcmFnQWNjZXB0KSB7XG4gICAgICAgIGFwcGxpZWRTdHlsZSA9IF9leHRlbmRzKHt9LCBhcHBsaWVkU3R5bGUsIGFjY2VwdFN0eWxlKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZWplY3RTdHlsZSAmJiBpc0RyYWdSZWplY3QpIHtcbiAgICAgICAgYXBwbGllZFN0eWxlID0gX2V4dGVuZHMoe30sIGFwcGxpZWRTdHlsZSwgcmVqZWN0U3R5bGUpO1xuICAgICAgfVxuICAgICAgaWYgKGRpc2FibGVkU3R5bGUgJiYgZGlzYWJsZWQpIHtcbiAgICAgICAgYXBwbGllZFN0eWxlID0gX2V4dGVuZHMoe30sIHN0eWxlLCBkaXNhYmxlZFN0eWxlKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGlucHV0QXR0cmlidXRlcyA9IHtcbiAgICAgICAgYWNjZXB0OiBhY2NlcHQsXG4gICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgdHlwZTogJ2ZpbGUnLFxuICAgICAgICBzdHlsZTogeyBkaXNwbGF5OiAnbm9uZScgfSxcbiAgICAgICAgbXVsdGlwbGU6IHN1cHBvcnRNdWx0aXBsZSAmJiBtdWx0aXBsZSxcbiAgICAgICAgcmVmOiB0aGlzLnNldFJlZnMsXG4gICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uRHJvcCxcbiAgICAgICAgYXV0b0NvbXBsZXRlOiAnb2ZmJ1xuICAgICAgfTtcblxuICAgICAgaWYgKG5hbWUgJiYgbmFtZS5sZW5ndGgpIHtcbiAgICAgICAgaW5wdXRBdHRyaWJ1dGVzLm5hbWUgPSBuYW1lO1xuICAgICAgfVxuXG4gICAgICAvLyBSZW1vdmUgY3VzdG9tIHByb3BlcnRpZXMgYmVmb3JlIHBhc3NpbmcgdGhlbSB0byB0aGUgd3JhcHBlciBkaXYgZWxlbWVudFxuICAgICAgdmFyIGN1c3RvbVByb3BzID0gWydhY2NlcHRlZEZpbGVzJywgJ3ByZXZlbnREcm9wT25Eb2N1bWVudCcsICdkaXNhYmxlUHJldmlldycsICdkaXNhYmxlQ2xpY2snLCAnYWN0aXZlQ2xhc3NOYW1lJywgJ2FjY2VwdENsYXNzTmFtZScsICdyZWplY3RDbGFzc05hbWUnLCAnZGlzYWJsZWRDbGFzc05hbWUnLCAnb25Ecm9wQWNjZXB0ZWQnLCAnb25Ecm9wUmVqZWN0ZWQnLCAnb25GaWxlRGlhbG9nQ2FuY2VsJywgJ21heFNpemUnLCAnbWluU2l6ZSddO1xuICAgICAgdmFyIGRpdlByb3BzID0gX2V4dGVuZHMoe30sIHByb3BzKTtcbiAgICAgIGN1c3RvbVByb3BzLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgcmV0dXJuIGRlbGV0ZSBkaXZQcm9wc1twcm9wXTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIF9leHRlbmRzKHtcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgICBzdHlsZTogYXBwbGllZFN0eWxlXG4gICAgICAgIH0sIGRpdlByb3BzIC8qIGV4cGFuZCB1c2VyIHByb3ZpZGVkIHByb3BzIGZpcnN0IHNvIGV2ZW50IGhhbmRsZXJzIGFyZSBuZXZlciBvdmVycmlkZGVuICovLCB7XG4gICAgICAgICAgb25DbGljazogdGhpcy5jb21wb3NlSGFuZGxlcnModGhpcy5vbkNsaWNrKSxcbiAgICAgICAgICBvbkRyYWdTdGFydDogdGhpcy5jb21wb3NlSGFuZGxlcnModGhpcy5vbkRyYWdTdGFydCksXG4gICAgICAgICAgb25EcmFnRW50ZXI6IHRoaXMuY29tcG9zZUhhbmRsZXJzKHRoaXMub25EcmFnRW50ZXIpLFxuICAgICAgICAgIG9uRHJhZ092ZXI6IHRoaXMuY29tcG9zZUhhbmRsZXJzKHRoaXMub25EcmFnT3ZlciksXG4gICAgICAgICAgb25EcmFnTGVhdmU6IHRoaXMuY29tcG9zZUhhbmRsZXJzKHRoaXMub25EcmFnTGVhdmUpLFxuICAgICAgICAgIG9uRHJvcDogdGhpcy5jb21wb3NlSGFuZGxlcnModGhpcy5vbkRyb3ApLFxuICAgICAgICAgIHJlZjogdGhpcy5zZXRSZWYsXG4gICAgICAgICAgJ2FyaWEtZGlzYWJsZWQnOiBkaXNhYmxlZFxuICAgICAgICB9KSxcbiAgICAgICAgdGhpcy5yZW5kZXJDaGlsZHJlbihjaGlsZHJlbiwgaXNEcmFnQWN0aXZlLCBpc0RyYWdBY2NlcHQsIGlzRHJhZ1JlamVjdCksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgX2V4dGVuZHMoe30sIGlucHV0UHJvcHMgLyogZXhwYW5kIHVzZXIgcHJvdmlkZWQgaW5wdXRQcm9wcyBmaXJzdCBzbyBpbnB1dEF0dHJpYnV0ZXMgb3ZlcnJpZGUgdGhlbSAqLywgaW5wdXRBdHRyaWJ1dGVzKSlcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIERyb3B6b25lO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBEcm9wem9uZTtcblxuRHJvcHpvbmUucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQWxsb3cgc3BlY2lmaWMgdHlwZXMgb2YgZmlsZXMuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vb2tvbmV0L2F0dHItYWNjZXB0IGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgKiBLZWVwIGluIG1pbmQgdGhhdCBtaW1lIHR5cGUgZGV0ZXJtaW5hdGlvbiBpcyBub3QgcmVsaWFibGUgYWNyb3NzIHBsYXRmb3Jtcy4gQ1NWIGZpbGVzLFxuICAgKiBmb3IgZXhhbXBsZSwgYXJlIHJlcG9ydGVkIGFzIHRleHQvcGxhaW4gdW5kZXIgbWFjT1MgYnV0IGFzIGFwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbCB1bmRlclxuICAgKiBXaW5kb3dzLiBJbiBzb21lIGNhc2VzIHRoZXJlIG1pZ2h0IG5vdCBiZSBhIG1pbWUgdHlwZSBzZXQgYXQgYWxsLlxuICAgKiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1kcm9wem9uZS9yZWFjdC1kcm9wem9uZS9pc3N1ZXMvMjc2XG4gICAqL1xuICBhY2NlcHQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIENvbnRlbnRzIG9mIHRoZSBkcm9wem9uZVxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZnVuY10pLFxuXG4gIC8qKlxuICAgKiBEaXNhbGxvdyBjbGlja2luZyBvbiB0aGUgZHJvcHpvbmUgY29udGFpbmVyIHRvIG9wZW4gZmlsZSBkaWFsb2dcbiAgICovXG4gIGRpc2FibGVDbGljazogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICogRW5hYmxlL2Rpc2FibGUgdGhlIGRyb3B6b25lIGVudGlyZWx5XG4gICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRW5hYmxlL2Rpc2FibGUgcHJldmlldyBnZW5lcmF0aW9uXG4gICAqL1xuICBkaXNhYmxlUHJldmlldzogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGZhbHNlLCBhbGxvdyBkcm9wcGVkIGl0ZW1zIHRvIHRha2Ugb3ZlciB0aGUgY3VycmVudCBicm93c2VyIHdpbmRvd1xuICAgKi9cbiAgcHJldmVudERyb3BPbkRvY3VtZW50OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogUGFzcyBhZGRpdGlvbmFsIGF0dHJpYnV0ZXMgdG8gdGhlIGA8aW5wdXQgdHlwZT1cImZpbGVcIi8+YCB0YWdcbiAgICovXG4gIGlucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEFsbG93IGRyb3BwaW5nIG11bHRpcGxlIGZpbGVzXG4gICAqL1xuICBtdWx0aXBsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIGBuYW1lYCBhdHRyaWJ1dGUgZm9yIHRoZSBpbnB1dCB0YWdcbiAgICovXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIE1heGltdW0gZmlsZSBzaXplXG4gICAqL1xuICBtYXhTaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBNaW5pbXVtIGZpbGUgc2l6ZVxuICAgKi9cbiAgbWluU2l6ZTogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogY2xhc3NOYW1lXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIGNsYXNzTmFtZSBmb3IgYWN0aXZlIHN0YXRlXG4gICAqL1xuICBhY3RpdmVDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIGNsYXNzTmFtZSBmb3IgYWNjZXB0ZWQgc3RhdGVcbiAgICovXG4gIGFjY2VwdENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogY2xhc3NOYW1lIGZvciByZWplY3RlZCBzdGF0ZVxuICAgKi9cbiAgcmVqZWN0Q2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBjbGFzc05hbWUgZm9yIGRpc2FibGVkIHN0YXRlXG4gICAqL1xuICBkaXNhYmxlZENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQ1NTIHN0eWxlcyB0byBhcHBseVxuICAgKi9cbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIENTUyBzdHlsZXMgdG8gYXBwbHkgd2hlbiBkcmFnIGlzIGFjdGl2ZVxuICAgKi9cbiAgYWN0aXZlU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIENTUyBzdHlsZXMgdG8gYXBwbHkgd2hlbiBkcm9wIHdpbGwgYmUgYWNjZXB0ZWRcbiAgICovXG4gIGFjY2VwdFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBDU1Mgc3R5bGVzIHRvIGFwcGx5IHdoZW4gZHJvcCB3aWxsIGJlIHJlamVjdGVkXG4gICAqL1xuICByZWplY3RTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQ1NTIHN0eWxlcyB0byBhcHBseSB3aGVuIGRyb3B6b25lIGlzIGRpc2FibGVkXG4gICAqL1xuICBkaXNhYmxlZFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBvbkNsaWNrIGNhbGxiYWNrXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAqL1xuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogb25Ecm9wIGNhbGxiYWNrXG4gICAqL1xuICBvbkRyb3A6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBvbkRyb3BBY2NlcHRlZCBjYWxsYmFja1xuICAgKi9cbiAgb25Ecm9wQWNjZXB0ZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBvbkRyb3BSZWplY3RlZCBjYWxsYmFja1xuICAgKi9cbiAgb25Ecm9wUmVqZWN0ZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBvbkRyYWdTdGFydCBjYWxsYmFja1xuICAgKi9cbiAgb25EcmFnU3RhcnQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBvbkRyYWdFbnRlciBjYWxsYmFja1xuICAgKi9cbiAgb25EcmFnRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBvbkRyYWdPdmVyIGNhbGxiYWNrXG4gICAqL1xuICBvbkRyYWdPdmVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogb25EcmFnTGVhdmUgY2FsbGJhY2tcbiAgICovXG4gIG9uRHJhZ0xlYXZlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogUHJvdmlkZSBhIGNhbGxiYWNrIG9uIGNsaWNraW5nIHRoZSBjYW5jZWwgYnV0dG9uIG9mIHRoZSBmaWxlIGRpYWxvZ1xuICAgKi9cbiAgb25GaWxlRGlhbG9nQ2FuY2VsOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuRHJvcHpvbmUuZGVmYXVsdFByb3BzID0ge1xuICBwcmV2ZW50RHJvcE9uRG9jdW1lbnQ6IHRydWUsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgZGlzYWJsZVByZXZpZXc6IGZhbHNlLFxuICBkaXNhYmxlQ2xpY2s6IGZhbHNlLFxuICBtdWx0aXBsZTogdHJ1ZSxcbiAgbWF4U2l6ZTogSW5maW5pdHksXG4gIG1pblNpemU6IDBcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtZHJvcHpvbmUvZGlzdC9lcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gODk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBhY2NlcHRzIGZyb20gJ2F0dHItYWNjZXB0JztcblxuZXhwb3J0IHZhciBzdXBwb3J0TXVsdGlwbGUgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgPyAnbXVsdGlwbGUnIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykgOiB0cnVlO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YVRyYW5zZmVySXRlbXMoZXZlbnQpIHtcbiAgdmFyIGRhdGFUcmFuc2Zlckl0ZW1zTGlzdCA9IFtdO1xuICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyKSB7XG4gICAgdmFyIGR0ID0gZXZlbnQuZGF0YVRyYW5zZmVyO1xuICAgIGlmIChkdC5maWxlcyAmJiBkdC5maWxlcy5sZW5ndGgpIHtcbiAgICAgIGRhdGFUcmFuc2Zlckl0ZW1zTGlzdCA9IGR0LmZpbGVzO1xuICAgIH0gZWxzZSBpZiAoZHQuaXRlbXMgJiYgZHQuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAvLyBEdXJpbmcgdGhlIGRyYWcgZXZlbiB0aGUgZGF0YVRyYW5zZmVyLmZpbGVzIGlzIG51bGxcbiAgICAgIC8vIGJ1dCBDaHJvbWUgaW1wbGVtZW50cyBzb21lIGRyYWcgc3RvcmUsIHdoaWNoIGlzIGFjY2VzaWJsZSB2aWEgZGF0YVRyYW5zZmVyLml0ZW1zXG4gICAgICBkYXRhVHJhbnNmZXJJdGVtc0xpc3QgPSBkdC5pdGVtcztcbiAgICB9XG4gIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5maWxlcykge1xuICAgIGRhdGFUcmFuc2Zlckl0ZW1zTGlzdCA9IGV2ZW50LnRhcmdldC5maWxlcztcbiAgfVxuICAvLyBDb252ZXJ0IGZyb20gRGF0YVRyYW5zZmVySXRlbXNMaXN0IHRvIHRoZSBuYXRpdmUgQXJyYXlcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRhdGFUcmFuc2Zlckl0ZW1zTGlzdCk7XG59XG5cbi8vIEZpcmVmb3ggdmVyc2lvbnMgcHJpb3IgdG8gNTMgcmV0dXJuIGEgYm9ndXMgTUlNRSB0eXBlIGZvciBldmVyeSBmaWxlIGRyYWcsIHNvIGRyYWdvdmVycyB3aXRoXG4vLyB0aGF0IE1JTUUgdHlwZSB3aWxsIGFsd2F5cyBiZSBhY2NlcHRlZFxuZXhwb3J0IGZ1bmN0aW9uIGZpbGVBY2NlcHRlZChmaWxlLCBhY2NlcHQpIHtcbiAgcmV0dXJuIGZpbGUudHlwZSA9PT0gJ2FwcGxpY2F0aW9uL3gtbW96LWZpbGUnIHx8IGFjY2VwdHMoZmlsZSwgYWNjZXB0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbGVNYXRjaFNpemUoZmlsZSwgbWF4U2l6ZSwgbWluU2l6ZSkge1xuICByZXR1cm4gZmlsZS5zaXplIDw9IG1heFNpemUgJiYgZmlsZS5zaXplID49IG1pblNpemU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbGxGaWxlc0FjY2VwdGVkKGZpbGVzLCBhY2NlcHQpIHtcbiAgcmV0dXJuIGZpbGVzLmV2ZXJ5KGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgcmV0dXJuIGZpbGVBY2NlcHRlZChmaWxlLCBhY2NlcHQpO1xuICB9KTtcbn1cblxuLy8gYWxsb3cgdGhlIGVudGlyZSBkb2N1bWVudCB0byBiZSBhIGRyYWcgdGFyZ2V0XG5leHBvcnQgZnVuY3Rpb24gb25Eb2N1bWVudERyYWdPdmVyKGV2dCkge1xuICBldnQucHJldmVudERlZmF1bHQoKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1kcm9wem9uZS9kaXN0L2VzL3V0aWxzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4OThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gbihlKXtpZihyW2VdKXJldHVybiByW2VdLmV4cG9ydHM7dmFyIG89cltlXT17ZXhwb3J0czp7fSxpZDplLGxvYWRlZDohMX07cmV0dXJuIHRbZV0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsbiksby5sb2FkZWQ9ITAsby5leHBvcnRzfXZhciByPXt9O3JldHVybiBuLm09dCxuLmM9cixuLnA9XCJcIixuKDApfShbZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO24uX19lc01vZHVsZT0hMCxyKDgpLHIoOSksbltcImRlZmF1bHRcIl09ZnVuY3Rpb24odCxuKXtpZih0JiZuKXt2YXIgcj1mdW5jdGlvbigpe3ZhciByPUFycmF5LmlzQXJyYXkobik/bjpuLnNwbGl0KFwiLFwiKSxlPXQubmFtZXx8XCJcIixvPXQudHlwZXx8XCJcIixpPW8ucmVwbGFjZSgvXFwvLiokLyxcIlwiKTtyZXR1cm57djpyLnNvbWUoZnVuY3Rpb24odCl7dmFyIG49dC50cmltKCk7cmV0dXJuXCIuXCI9PT1uLmNoYXJBdCgwKT9lLnRvTG93ZXJDYXNlKCkuZW5kc1dpdGgobi50b0xvd2VyQ2FzZSgpKTovXFwvXFwqJC8udGVzdChuKT9pPT09bi5yZXBsYWNlKC9cXC8uKiQvLFwiXCIpOm89PT1ufSl9fSgpO2lmKFwib2JqZWN0XCI9PXR5cGVvZiByKXJldHVybiByLnZ9cmV0dXJuITB9LHQuZXhwb3J0cz1uW1wiZGVmYXVsdFwiXX0sZnVuY3Rpb24odCxuKXt2YXIgcj10LmV4cG9ydHM9e3ZlcnNpb246XCIxLjIuMlwifTtcIm51bWJlclwiPT10eXBlb2YgX19lJiYoX19lPXIpfSxmdW5jdGlvbih0LG4pe3ZhciByPXQuZXhwb3J0cz1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3cuTWF0aD09TWF0aD93aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGYmJnNlbGYuTWF0aD09TWF0aD9zZWxmOkZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcIm51bWJlclwiPT10eXBlb2YgX19nJiYoX19nPXIpfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigyKSxvPXIoMSksaT1yKDQpLHU9cigxOSksYz1cInByb3RvdHlwZVwiLGY9ZnVuY3Rpb24odCxuKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gdC5hcHBseShuLGFyZ3VtZW50cyl9fSxzPWZ1bmN0aW9uKHQsbixyKXt2YXIgYSxwLGwseSxkPXQmcy5HLGg9dCZzLlAsdj1kP2U6dCZzLlM/ZVtuXXx8KGVbbl09e30pOihlW25dfHx7fSlbY10seD1kP286b1tuXXx8KG9bbl09e30pO2QmJihyPW4pO2ZvcihhIGluIHIpcD0hKHQmcy5GKSYmdiYmYSBpbiB2LGw9KHA/djpyKVthXSx5PXQmcy5CJiZwP2YobCxlKTpoJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBsP2YoRnVuY3Rpb24uY2FsbCxsKTpsLHYmJiFwJiZ1KHYsYSxsKSx4W2FdIT1sJiZpKHgsYSx5KSxoJiYoKHhbY118fCh4W2NdPXt9KSlbYV09bCl9O2UuY29yZT1vLHMuRj0xLHMuRz0yLHMuUz00LHMuUD04LHMuQj0xNixzLlc9MzIsdC5leHBvcnRzPXN9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDUpLG89cigxOCk7dC5leHBvcnRzPXIoMjIpP2Z1bmN0aW9uKHQsbixyKXtyZXR1cm4gZS5zZXREZXNjKHQsbixvKDEscikpfTpmdW5jdGlvbih0LG4scil7cmV0dXJuIHRbbl09cix0fX0sZnVuY3Rpb24odCxuKXt2YXIgcj1PYmplY3Q7dC5leHBvcnRzPXtjcmVhdGU6ci5jcmVhdGUsZ2V0UHJvdG86ci5nZXRQcm90b3R5cGVPZixpc0VudW06e30ucHJvcGVydHlJc0VudW1lcmFibGUsZ2V0RGVzYzpyLmdldE93blByb3BlcnR5RGVzY3JpcHRvcixzZXREZXNjOnIuZGVmaW5lUHJvcGVydHksc2V0RGVzY3M6ci5kZWZpbmVQcm9wZXJ0aWVzLGdldEtleXM6ci5rZXlzLGdldE5hbWVzOnIuZ2V0T3duUHJvcGVydHlOYW1lcyxnZXRTeW1ib2xzOnIuZ2V0T3duUHJvcGVydHlTeW1ib2xzLGVhY2g6W10uZm9yRWFjaH19LGZ1bmN0aW9uKHQsbil7dmFyIHI9MCxlPU1hdGgucmFuZG9tKCk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVyblwiU3ltYm9sKFwiLmNvbmNhdCh2b2lkIDA9PT10P1wiXCI6dCxcIilfXCIsKCsrcitlKS50b1N0cmluZygzNikpfX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMjApKFwid2tzXCIpLG89cigyKS5TeW1ib2w7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBlW3RdfHwoZVt0XT1vJiZvW3RdfHwob3x8cig2KSkoXCJTeW1ib2wuXCIrdCkpfX0sZnVuY3Rpb24odCxuLHIpe3IoMjYpLHQuZXhwb3J0cz1yKDEpLkFycmF5LnNvbWV9LGZ1bmN0aW9uKHQsbixyKXtyKDI1KSx0LmV4cG9ydHM9cigxKS5TdHJpbmcuZW5kc1dpdGh9LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpdGhyb3cgVHlwZUVycm9yKHQrXCIgaXMgbm90IGEgZnVuY3Rpb24hXCIpO3JldHVybiB0fX0sZnVuY3Rpb24odCxuKXt2YXIgcj17fS50b1N0cmluZzt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHIuY2FsbCh0KS5zbGljZSg4LC0xKX19LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDEwKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuLHIpe2lmKGUodCksdm9pZCAwPT09bilyZXR1cm4gdDtzd2l0Y2gocil7Y2FzZSAxOnJldHVybiBmdW5jdGlvbihyKXtyZXR1cm4gdC5jYWxsKG4scil9O2Nhc2UgMjpyZXR1cm4gZnVuY3Rpb24ocixlKXtyZXR1cm4gdC5jYWxsKG4scixlKX07Y2FzZSAzOnJldHVybiBmdW5jdGlvbihyLGUsbyl7cmV0dXJuIHQuY2FsbChuLHIsZSxvKX19cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHQuYXBwbHkobixhcmd1bWVudHMpfX19LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe2lmKHZvaWQgMD09dCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIrdCk7cmV0dXJuIHR9fSxmdW5jdGlvbih0LG4scil7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBuPS8uLzt0cnl7XCIvLi9cIlt0XShuKX1jYXRjaChlKXt0cnl7cmV0dXJuIG5bcig3KShcIm1hdGNoXCIpXT0hMSwhXCIvLi9cIlt0XShuKX1jYXRjaChvKXt9fXJldHVybiEwfX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dHJ5e3JldHVybiEhdCgpfWNhdGNoKG4pe3JldHVybiEwfX19LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiB0P251bGwhPT10OlwiZnVuY3Rpb25cIj09dHlwZW9mIHR9fSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigxNiksbz1yKDExKSxpPXIoNykoXCJtYXRjaFwiKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIG47cmV0dXJuIGUodCkmJih2b2lkIDAhPT0obj10W2ldKT8hIW46XCJSZWdFeHBcIj09byh0KSl9fSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz1mdW5jdGlvbih0LG4pe3JldHVybntlbnVtZXJhYmxlOiEoMSZ0KSxjb25maWd1cmFibGU6ISgyJnQpLHdyaXRhYmxlOiEoNCZ0KSx2YWx1ZTpufX19LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDIpLG89cig0KSxpPXIoNikoXCJzcmNcIiksdT1cInRvU3RyaW5nXCIsYz1GdW5jdGlvblt1XSxmPShcIlwiK2MpLnNwbGl0KHUpO3IoMSkuaW5zcGVjdFNvdXJjZT1mdW5jdGlvbih0KXtyZXR1cm4gYy5jYWxsKHQpfSwodC5leHBvcnRzPWZ1bmN0aW9uKHQsbixyLHUpe1wiZnVuY3Rpb25cIj09dHlwZW9mIHImJihvKHIsaSx0W25dP1wiXCIrdFtuXTpmLmpvaW4oU3RyaW5nKG4pKSksXCJuYW1lXCJpbiByfHwoci5uYW1lPW4pKSx0PT09ZT90W25dPXI6KHV8fGRlbGV0ZSB0W25dLG8odCxuLHIpKX0pKEZ1bmN0aW9uLnByb3RvdHlwZSx1LGZ1bmN0aW9uKCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdGhpcyYmdGhpc1tpXXx8Yy5jYWxsKHRoaXMpfSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDIpLG89XCJfX2NvcmUtanNfc2hhcmVkX19cIixpPWVbb118fChlW29dPXt9KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIGlbdF18fChpW3RdPXt9KX19LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDE3KSxvPXIoMTMpO3QuZXhwb3J0cz1mdW5jdGlvbih0LG4scil7aWYoZShuKSl0aHJvdyBUeXBlRXJyb3IoXCJTdHJpbmcjXCIrcitcIiBkb2Vzbid0IGFjY2VwdCByZWdleCFcIik7cmV0dXJuIFN0cmluZyhvKHQpKX19LGZ1bmN0aW9uKHQsbixyKXt0LmV4cG9ydHM9IXIoMTUpKGZ1bmN0aW9uKCl7cmV0dXJuIDchPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSxcImFcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIDd9fSkuYX0pfSxmdW5jdGlvbih0LG4pe3ZhciByPU1hdGguY2VpbCxlPU1hdGguZmxvb3I7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBpc05hTih0PSt0KT8wOih0PjA/ZTpyKSh0KX19LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDIzKSxvPU1hdGgubWluO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gdD4wP28oZSh0KSw5MDA3MTk5MjU0NzQwOTkxKTowfX0sZnVuY3Rpb24odCxuLHIpe1widXNlIHN0cmljdFwiO3ZhciBlPXIoMyksbz1yKDI0KSxpPXIoMjEpLHU9XCJlbmRzV2l0aFwiLGM9XCJcIlt1XTtlKGUuUCtlLkYqcigxNCkodSksXCJTdHJpbmdcIix7ZW5kc1dpdGg6ZnVuY3Rpb24odCl7dmFyIG49aSh0aGlzLHQsdSkscj1hcmd1bWVudHMsZT1yLmxlbmd0aD4xP3JbMV06dm9pZCAwLGY9byhuLmxlbmd0aCkscz12b2lkIDA9PT1lP2Y6TWF0aC5taW4obyhlKSxmKSxhPVN0cmluZyh0KTtyZXR1cm4gYz9jLmNhbGwobixhLHMpOm4uc2xpY2Uocy1hLmxlbmd0aCxzKT09PWF9fSl9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDUpLG89cigzKSxpPXIoMSkuQXJyYXl8fEFycmF5LHU9e30sYz1mdW5jdGlvbih0LG4pe2UuZWFjaC5jYWxsKHQuc3BsaXQoXCIsXCIpLGZ1bmN0aW9uKHQpe3ZvaWQgMD09biYmdCBpbiBpP3VbdF09aVt0XTp0IGluW10mJih1W3RdPXIoMTIpKEZ1bmN0aW9uLmNhbGwsW11bdF0sbikpfSl9O2MoXCJwb3AscmV2ZXJzZSxzaGlmdCxrZXlzLHZhbHVlcyxlbnRyaWVzXCIsMSksYyhcImluZGV4T2YsZXZlcnksc29tZSxmb3JFYWNoLG1hcCxmaWx0ZXIsZmluZCxmaW5kSW5kZXgsaW5jbHVkZXNcIiwzKSxjKFwiam9pbixzbGljZSxjb25jYXQscHVzaCxzcGxpY2UsdW5zaGlmdCxzb3J0LGxhc3RJbmRleE9mLHJlZHVjZSxyZWR1Y2VSaWdodCxjb3B5V2l0aGluLGZpbGxcIiksbyhvLlMsXCJBcnJheVwiLHUpfV0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2F0dHItYWNjZXB0L2Rpc3QvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDg5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHJlamVjdGVkOiB7XG4gICAgYm9yZGVyU3R5bGU6ICdzb2xpZCcsXG4gICAgYm9yZGVyQ29sb3I6ICcjYzY2JyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWVlJ1xuICB9LFxuICBkaXNhYmxlZDoge1xuICAgIG9wYWNpdHk6IDAuNVxuICB9LFxuICBhY3RpdmU6IHtcbiAgICBib3JkZXJTdHlsZTogJ3NvbGlkJyxcbiAgICBib3JkZXJDb2xvcjogJyM2YzYnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNlZWUnXG4gIH0sXG4gIGRlZmF1bHQ6IHtcbiAgICB3aWR0aDogMjAwLFxuICAgIGhlaWdodDogMjAwLFxuICAgIGJvcmRlcldpZHRoOiAyLFxuICAgIGJvcmRlckNvbG9yOiAnIzY2NicsXG4gICAgYm9yZGVyU3R5bGU6ICdkYXNoZWQnLFxuICAgIGJvcmRlclJhZGl1czogNVxuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRyb3B6b25lL2Rpc3QvZXMvdXRpbHMvc3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA5MDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==