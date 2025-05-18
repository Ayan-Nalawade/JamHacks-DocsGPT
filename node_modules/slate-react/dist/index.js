'use strict';

var getDirection = require('direction');
var debounce = require('lodash/debounce');
var throttle = require('lodash/throttle');
var React = require('react');
var scrollIntoView = require('scroll-into-view-if-needed');
var slate = require('slate');
var slateDom = require('slate-dom');
var resizeObserver = require('@juggle/resize-observer');
var ReactDOM = require('react-dom');

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var arrayWithHoles = createCommonjsModule(function (module) {
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

unwrapExports(arrayWithHoles);

var iterableToArrayLimit = createCommonjsModule(function (module) {
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

unwrapExports(iterableToArrayLimit);

var arrayLikeToArray = createCommonjsModule(function (module) {
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

unwrapExports(arrayLikeToArray);

var unsupportedIterableToArray = createCommonjsModule(function (module) {
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

unwrapExports(unsupportedIterableToArray);

var nonIterableRest = createCommonjsModule(function (module) {
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

unwrapExports(nonIterableRest);

var slicedToArray = createCommonjsModule(function (module) {
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _slicedToArray = unwrapExports(slicedToArray);

var objectWithoutPropertiesLoose = createCommonjsModule(function (module) {
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

unwrapExports(objectWithoutPropertiesLoose);

var objectWithoutProperties = createCommonjsModule(function (module) {
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
module.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _objectWithoutProperties = unwrapExports(objectWithoutProperties);

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

unwrapExports(_typeof_1);

var toPrimitive = createCommonjsModule(function (module) {
var _typeof = _typeof_1["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

unwrapExports(toPrimitive);

var toPropertyKey = createCommonjsModule(function (module) {
var _typeof = _typeof_1["default"];

function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

unwrapExports(toPropertyKey);

var defineProperty = createCommonjsModule(function (module) {
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _defineProperty = unwrapExports(defineProperty);

/**
 * A React context for sharing the editor object.
 */
var EditorContext = /*#__PURE__*/React.createContext(null);
/**
 * Get the current editor object from the React context.
 */
var useSlateStatic = function useSlateStatic() {
  var editor = React.useContext(EditorContext);
  if (!editor) {
    throw new Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
  }
  return editor;
};

// eslint-disable-next-line no-redeclare
var ReactEditor = slateDom.DOMEditor;

function ownKeys$6(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$6(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$6(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$6(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
// https://github.com/facebook/draft-js/blob/main/src/component/handlers/composition/DraftEditorCompositionHandler.js#L41
// When using keyboard English association function, conpositionEnd triggered too fast, resulting in after `insertText` still maintain association state.
var RESOLVE_DELAY = 25;
// Time with no user interaction before the current user action is considered as done.
var FLUSH_DELAY = 200;
// Replace with `const debug = console.log` to debug
var debug = function debug() {};
// Type guard to check if a value is a DataTransfer
var isDataTransfer = function isDataTransfer(value) {
  return (value === null || value === void 0 ? void 0 : value.constructor.name) === 'DataTransfer';
};
function createAndroidInputManager(_ref) {
  var editor = _ref.editor,
    scheduleOnDOMSelectionChange = _ref.scheduleOnDOMSelectionChange,
    onDOMSelectionChange = _ref.onDOMSelectionChange;
  var flushing = false;
  var compositionEndTimeoutId = null;
  var flushTimeoutId = null;
  var actionTimeoutId = null;
  var idCounter = 0;
  var insertPositionHint = false;
  var applyPendingSelection = function applyPendingSelection() {
    var pendingSelection = slateDom.EDITOR_TO_PENDING_SELECTION.get(editor);
    slateDom.EDITOR_TO_PENDING_SELECTION["delete"](editor);
    if (pendingSelection) {
      var selection = editor.selection;
      var normalized = slateDom.normalizeRange(editor, pendingSelection);
      if (normalized && (!selection || !slate.Range.equals(normalized, selection))) {
        slate.Transforms.select(editor, normalized);
      }
    }
  };
  var performAction = function performAction() {
    var action = slateDom.EDITOR_TO_PENDING_ACTION.get(editor);
    slateDom.EDITOR_TO_PENDING_ACTION["delete"](editor);
    if (!action) {
      return;
    }
    if (action.at) {
      var target = slate.Point.isPoint(action.at) ? slateDom.normalizePoint(editor, action.at) : slateDom.normalizeRange(editor, action.at);
      if (!target) {
        return;
      }
      var _targetRange = slate.Editor.range(editor, target);
      if (!editor.selection || !slate.Range.equals(editor.selection, _targetRange)) {
        slate.Transforms.select(editor, target);
      }
    }
    action.run();
  };
  var flush = function flush() {
    if (flushTimeoutId) {
      clearTimeout(flushTimeoutId);
      flushTimeoutId = null;
    }
    if (actionTimeoutId) {
      clearTimeout(actionTimeoutId);
      actionTimeoutId = null;
    }
    if (!hasPendingDiffs() && !hasPendingAction()) {
      applyPendingSelection();
      return;
    }
    if (!flushing) {
      flushing = true;
      setTimeout(function () {
        return flushing = false;
      });
    }
    if (hasPendingAction()) {
      flushing = 'action';
    }
    var selectionRef = editor.selection && slate.Editor.rangeRef(editor, editor.selection, {
      affinity: 'forward'
    });
    slateDom.EDITOR_TO_USER_MARKS.set(editor, editor.marks);
    debug('flush', slateDom.EDITOR_TO_PENDING_ACTION.get(editor), slateDom.EDITOR_TO_PENDING_DIFFS.get(editor));
    var scheduleSelectionChange = hasPendingDiffs();
    var diff;
    while (diff = (_EDITOR_TO_PENDING_DI = slateDom.EDITOR_TO_PENDING_DIFFS.get(editor)) === null || _EDITOR_TO_PENDING_DI === void 0 ? void 0 : _EDITOR_TO_PENDING_DI[0]) {
      var _EDITOR_TO_PENDING_DI, _EDITOR_TO_PENDING_DI2;
      var pendingMarks = slateDom.EDITOR_TO_PENDING_INSERTION_MARKS.get(editor);
      if (pendingMarks !== undefined) {
        slateDom.EDITOR_TO_PENDING_INSERTION_MARKS["delete"](editor);
        editor.marks = pendingMarks;
      }
      if (pendingMarks && insertPositionHint === false) {
        insertPositionHint = null;
      }
      var range = slateDom.targetRange(diff);
      if (!editor.selection || !slate.Range.equals(editor.selection, range)) {
        slate.Transforms.select(editor, range);
      }
      if (diff.diff.text) {
        slate.Editor.insertText(editor, diff.diff.text);
      } else {
        slate.Editor.deleteFragment(editor);
      }
      // Remove diff only after we have applied it to account for it when transforming
      // pending ranges.
      slateDom.EDITOR_TO_PENDING_DIFFS.set(editor, (_EDITOR_TO_PENDING_DI2 = slateDom.EDITOR_TO_PENDING_DIFFS.get(editor)) === null || _EDITOR_TO_PENDING_DI2 === void 0 ? void 0 : _EDITOR_TO_PENDING_DI2.filter(function (_ref2) {
        var id = _ref2.id;
        return id !== diff.id;
      }));
      if (!slateDom.verifyDiffState(editor, diff)) {
        scheduleSelectionChange = false;
        slateDom.EDITOR_TO_PENDING_ACTION["delete"](editor);
        slateDom.EDITOR_TO_USER_MARKS["delete"](editor);
        flushing = 'action';
        // Ensure we don't restore the pending user (dom) selection
        // since the document and dom state do not match.
        slateDom.EDITOR_TO_PENDING_SELECTION["delete"](editor);
        scheduleOnDOMSelectionChange.cancel();
        onDOMSelectionChange.cancel();
        selectionRef === null || selectionRef === void 0 || selectionRef.unref();
      }
    }
    var selection = selectionRef === null || selectionRef === void 0 ? void 0 : selectionRef.unref();
    if (selection && !slateDom.EDITOR_TO_PENDING_SELECTION.get(editor) && (!editor.selection || !slate.Range.equals(selection, editor.selection))) {
      slate.Transforms.select(editor, selection);
    }
    if (hasPendingAction()) {
      performAction();
      return;
    }
    // COMPAT: The selectionChange event is fired after the action is performed,
    // so we have to manually schedule it to ensure we don't 'throw away' the selection
    // while rendering if we have pending changes.
    if (scheduleSelectionChange) {
      scheduleOnDOMSelectionChange();
    }
    scheduleOnDOMSelectionChange.flush();
    onDOMSelectionChange.flush();
    applyPendingSelection();
    var userMarks = slateDom.EDITOR_TO_USER_MARKS.get(editor);
    slateDom.EDITOR_TO_USER_MARKS["delete"](editor);
    if (userMarks !== undefined) {
      editor.marks = userMarks;
      editor.onChange();
    }
  };
  var handleCompositionEnd = function handleCompositionEnd(_event) {
    if (compositionEndTimeoutId) {
      clearTimeout(compositionEndTimeoutId);
    }
    compositionEndTimeoutId = setTimeout(function () {
      slateDom.IS_COMPOSING.set(editor, false);
      flush();
    }, RESOLVE_DELAY);
  };
  var handleCompositionStart = function handleCompositionStart(_event) {
    slateDom.IS_COMPOSING.set(editor, true);
    if (compositionEndTimeoutId) {
      clearTimeout(compositionEndTimeoutId);
      compositionEndTimeoutId = null;
    }
  };
  var updatePlaceholderVisibility = function updatePlaceholderVisibility() {
    var forceHide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var placeholderElement = slateDom.EDITOR_TO_PLACEHOLDER_ELEMENT.get(editor);
    if (!placeholderElement) {
      return;
    }
    if (hasPendingDiffs() || forceHide) {
      placeholderElement.style.display = 'none';
      return;
    }
    placeholderElement.style.removeProperty('display');
  };
  var storeDiff = function storeDiff(path, diff) {
    var _EDITOR_TO_PENDING_DI3;
    var pendingDiffs = (_EDITOR_TO_PENDING_DI3 = slateDom.EDITOR_TO_PENDING_DIFFS.get(editor)) !== null && _EDITOR_TO_PENDING_DI3 !== void 0 ? _EDITOR_TO_PENDING_DI3 : [];
    slateDom.EDITOR_TO_PENDING_DIFFS.set(editor, pendingDiffs);
    var target = slate.Node.leaf(editor, path);
    var idx = pendingDiffs.findIndex(function (change) {
      return slate.Path.equals(change.path, path);
    });
    if (idx < 0) {
      var normalized = slateDom.normalizeStringDiff(target.text, diff);
      if (normalized) {
        pendingDiffs.push({
          path: path,
          diff: diff,
          id: idCounter++
        });
      }
      updatePlaceholderVisibility();
      return;
    }
    var merged = slateDom.mergeStringDiffs(target.text, pendingDiffs[idx].diff, diff);
    if (!merged) {
      pendingDiffs.splice(idx, 1);
      updatePlaceholderVisibility();
      return;
    }
    pendingDiffs[idx] = _objectSpread$6(_objectSpread$6({}, pendingDiffs[idx]), {}, {
      diff: merged
    });
  };
  var scheduleAction = function scheduleAction(run) {
    var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      at = _ref3.at;
    insertPositionHint = false;
    slateDom.EDITOR_TO_PENDING_SELECTION["delete"](editor);
    scheduleOnDOMSelectionChange.cancel();
    onDOMSelectionChange.cancel();
    if (hasPendingAction()) {
      flush();
    }
    slateDom.EDITOR_TO_PENDING_ACTION.set(editor, {
      at: at,
      run: run
    });
    // COMPAT: When deleting before a non-contenteditable element chrome only fires a beforeinput,
    // (no input) and doesn't perform any dom mutations. Without a flush timeout we would never flush
    // in this case and thus never actually perform the action.
    actionTimeoutId = setTimeout(flush);
  };
  var handleDOMBeforeInput = function handleDOMBeforeInput(event) {
    var _targetRange2;
    if (flushTimeoutId) {
      clearTimeout(flushTimeoutId);
      flushTimeoutId = null;
    }
    if (slateDom.IS_NODE_MAP_DIRTY.get(editor)) {
      return;
    }
    var type = event.inputType;
    var targetRange = null;
    var data = event.dataTransfer || event.data || undefined;
    if (insertPositionHint !== false && type !== 'insertText' && type !== 'insertCompositionText') {
      insertPositionHint = false;
    }
    var _event$getTargetRange = event.getTargetRanges(),
      _event$getTargetRange2 = _slicedToArray(_event$getTargetRange, 1),
      nativeTargetRange = _event$getTargetRange2[0];
    if (nativeTargetRange) {
      targetRange = ReactEditor.toSlateRange(editor, nativeTargetRange, {
        exactMatch: false,
        suppressThrow: true
      });
    }
    // COMPAT: SelectionChange event is fired after the action is performed, so we
    // have to manually get the selection here to ensure it's up-to-date.
    var window = ReactEditor.getWindow(editor);
    var domSelection = window.getSelection();
    if (!targetRange && domSelection) {
      nativeTargetRange = domSelection;
      targetRange = ReactEditor.toSlateRange(editor, domSelection, {
        exactMatch: false,
        suppressThrow: true
      });
    }
    targetRange = (_targetRange2 = targetRange) !== null && _targetRange2 !== void 0 ? _targetRange2 : editor.selection;
    if (!targetRange) {
      return;
    }
    // By default, the input manager tries to store text diffs so that we can
    // defer flushing them at a later point in time. We don't want to flush
    // for every input event as this can be expensive. However, there are some
    // scenarios where we cannot safely store the text diff and must instead
    // schedule an action to let Slate normalize the editor state.
    var canStoreDiff = true;
    if (type.startsWith('delete')) {
      if (slate.Range.isExpanded(targetRange)) {
        var _Range$edges = slate.Range.edges(targetRange),
          _Range$edges2 = _slicedToArray(_Range$edges, 2),
          _start = _Range$edges2[0],
          _end = _Range$edges2[1];
        var _leaf = slate.Node.leaf(editor, _start.path);
        if (_leaf.text.length === _start.offset && _end.offset === 0) {
          var next = slate.Editor.next(editor, {
            at: _start.path,
            match: slate.Text.isText
          });
          if (next && slate.Path.equals(next[1], _end.path)) {
            targetRange = {
              anchor: _end,
              focus: _end
            };
          }
        }
      }
      var direction = type.endsWith('Backward') ? 'backward' : 'forward';
      var _Range$edges3 = slate.Range.edges(targetRange),
        _Range$edges4 = _slicedToArray(_Range$edges3, 2),
        start = _Range$edges4[0],
        end = _Range$edges4[1];
      var _Editor$leaf = slate.Editor.leaf(editor, start.path),
        _Editor$leaf2 = _slicedToArray(_Editor$leaf, 2),
        leaf = _Editor$leaf2[0],
        path = _Editor$leaf2[1];
      var diff = {
        text: '',
        start: start.offset,
        end: end.offset
      };
      var pendingDiffs = slateDom.EDITOR_TO_PENDING_DIFFS.get(editor);
      var relevantPendingDiffs = pendingDiffs === null || pendingDiffs === void 0 ? void 0 : pendingDiffs.find(function (change) {
        return slate.Path.equals(change.path, path);
      });
      var diffs = relevantPendingDiffs ? [relevantPendingDiffs.diff, diff] : [diff];
      var text = slateDom.applyStringDiff.apply(void 0, [leaf.text].concat(diffs));
      if (text.length === 0) {
        // Text leaf will be removed, so we need to schedule an
        // action to remove it so that Slate can normalize instead
        // of storing as a diff
        canStoreDiff = false;
      }
      if (slate.Range.isExpanded(targetRange)) {
        if (canStoreDiff && slate.Path.equals(targetRange.anchor.path, targetRange.focus.path)) {
          var point = {
            path: targetRange.anchor.path,
            offset: start.offset
          };
          var range = slate.Editor.range(editor, point, point);
          handleUserSelect(range);
          return storeDiff(targetRange.anchor.path, {
            text: '',
            end: end.offset,
            start: start.offset
          });
        }
        return scheduleAction(function () {
          return slate.Editor.deleteFragment(editor, {
            direction: direction
          });
        }, {
          at: targetRange
        });
      }
    }
    switch (type) {
      case 'deleteByComposition':
      case 'deleteByCut':
      case 'deleteByDrag':
        {
          return scheduleAction(function () {
            return slate.Editor.deleteFragment(editor);
          }, {
            at: targetRange
          });
        }
      case 'deleteContent':
      case 'deleteContentForward':
        {
          var _targetRange3 = targetRange,
            anchor = _targetRange3.anchor;
          if (canStoreDiff && slate.Range.isCollapsed(targetRange)) {
            var targetNode = slate.Node.leaf(editor, anchor.path);
            if (anchor.offset < targetNode.text.length) {
              return storeDiff(anchor.path, {
                text: '',
                start: anchor.offset,
                end: anchor.offset + 1
              });
            }
          }
          return scheduleAction(function () {
            return slate.Editor.deleteForward(editor);
          }, {
            at: targetRange
          });
        }
      case 'deleteContentBackward':
        {
          var _nativeTargetRange;
          var _targetRange4 = targetRange,
            _anchor = _targetRange4.anchor;
          // If we have a mismatch between the native and slate selection being collapsed
          // we are most likely deleting a zero-width placeholder and thus should perform it
          // as an action to ensure correct behavior (mostly happens with mark placeholders)
          var nativeCollapsed = slateDom.isDOMSelection(nativeTargetRange) ? nativeTargetRange.isCollapsed : !!((_nativeTargetRange = nativeTargetRange) !== null && _nativeTargetRange !== void 0 && _nativeTargetRange.collapsed);
          if (canStoreDiff && nativeCollapsed && slate.Range.isCollapsed(targetRange) && _anchor.offset > 0) {
            return storeDiff(_anchor.path, {
              text: '',
              start: _anchor.offset - 1,
              end: _anchor.offset
            });
          }
          return scheduleAction(function () {
            return slate.Editor.deleteBackward(editor);
          }, {
            at: targetRange
          });
        }
      case 'deleteEntireSoftLine':
        {
          return scheduleAction(function () {
            slate.Editor.deleteBackward(editor, {
              unit: 'line'
            });
            slate.Editor.deleteForward(editor, {
              unit: 'line'
            });
          }, {
            at: targetRange
          });
        }
      case 'deleteHardLineBackward':
        {
          return scheduleAction(function () {
            return slate.Editor.deleteBackward(editor, {
              unit: 'block'
            });
          }, {
            at: targetRange
          });
        }
      case 'deleteSoftLineBackward':
        {
          return scheduleAction(function () {
            return slate.Editor.deleteBackward(editor, {
              unit: 'line'
            });
          }, {
            at: targetRange
          });
        }
      case 'deleteHardLineForward':
        {
          return scheduleAction(function () {
            return slate.Editor.deleteForward(editor, {
              unit: 'block'
            });
          }, {
            at: targetRange
          });
        }
      case 'deleteSoftLineForward':
        {
          return scheduleAction(function () {
            return slate.Editor.deleteForward(editor, {
              unit: 'line'
            });
          }, {
            at: targetRange
          });
        }
      case 'deleteWordBackward':
        {
          return scheduleAction(function () {
            return slate.Editor.deleteBackward(editor, {
              unit: 'word'
            });
          }, {
            at: targetRange
          });
        }
      case 'deleteWordForward':
        {
          return scheduleAction(function () {
            return slate.Editor.deleteForward(editor, {
              unit: 'word'
            });
          }, {
            at: targetRange
          });
        }
      case 'insertLineBreak':
        {
          return scheduleAction(function () {
            return slate.Editor.insertSoftBreak(editor);
          }, {
            at: targetRange
          });
        }
      case 'insertParagraph':
        {
          return scheduleAction(function () {
            return slate.Editor.insertBreak(editor);
          }, {
            at: targetRange
          });
        }
      case 'insertCompositionText':
      case 'deleteCompositionText':
      case 'insertFromComposition':
      case 'insertFromDrop':
      case 'insertFromPaste':
      case 'insertFromYank':
      case 'insertReplacementText':
      case 'insertText':
        {
          if (isDataTransfer(data)) {
            return scheduleAction(function () {
              return ReactEditor.insertData(editor, data);
            }, {
              at: targetRange
            });
          }
          var _text = data !== null && data !== void 0 ? data : '';
          // COMPAT: If we are writing inside a placeholder, the ime inserts the text inside
          // the placeholder itself and thus includes the zero-width space inside edit events.
          if (slateDom.EDITOR_TO_PENDING_INSERTION_MARKS.get(editor)) {
            _text = _text.replace("\uFEFF", '');
          }
          // Pastes from the Android clipboard will generate `insertText` events.
          // If the copied text contains any newlines, Android will append an
          // extra newline to the end of the copied text.
          if (type === 'insertText' && /.*\n.*\n$/.test(_text)) {
            _text = _text.slice(0, -1);
          }
          // If the text includes a newline, split it at newlines and paste each component
          // string, with soft breaks in between each.
          if (_text.includes('\n')) {
            return scheduleAction(function () {
              var parts = _text.split('\n');
              parts.forEach(function (line, i) {
                if (line) {
                  slate.Editor.insertText(editor, line);
                }
                if (i !== parts.length - 1) {
                  slate.Editor.insertSoftBreak(editor);
                }
              });
            }, {
              at: targetRange
            });
          }
          if (slate.Path.equals(targetRange.anchor.path, targetRange.focus.path)) {
            var _Range$edges5 = slate.Range.edges(targetRange),
              _Range$edges6 = _slicedToArray(_Range$edges5, 2),
              _start2 = _Range$edges6[0],
              _end2 = _Range$edges6[1];
            var _diff = {
              start: _start2.offset,
              end: _end2.offset,
              text: _text
            };
            // COMPAT: Swiftkey has a weird bug where the target range of the 2nd word
            // inserted after a mark placeholder is inserted with an anchor offset off by 1.
            // So writing 'some text' will result in 'some ttext'. Luckily all 'normal' insert
            // text events are fired with the correct target ranges, only the final 'insertComposition'
            // isn't, so we can adjust the target range start offset if we are confident this is the
            // swiftkey insert causing the issue.
            if (_text && insertPositionHint && type === 'insertCompositionText') {
              var hintPosition = insertPositionHint.start + insertPositionHint.text.search(/\S|$/);
              var diffPosition = _diff.start + _diff.text.search(/\S|$/);
              if (diffPosition === hintPosition + 1 && _diff.end === insertPositionHint.start + insertPositionHint.text.length) {
                _diff.start -= 1;
                insertPositionHint = null;
                scheduleFlush();
              } else {
                insertPositionHint = false;
              }
            } else if (type === 'insertText') {
              if (insertPositionHint === null) {
                insertPositionHint = _diff;
              } else if (insertPositionHint && slate.Range.isCollapsed(targetRange) && insertPositionHint.end + insertPositionHint.text.length === _start2.offset) {
                insertPositionHint = _objectSpread$6(_objectSpread$6({}, insertPositionHint), {}, {
                  text: insertPositionHint.text + _text
                });
              } else {
                insertPositionHint = false;
              }
            } else {
              insertPositionHint = false;
            }
            if (canStoreDiff) {
              storeDiff(_start2.path, _diff);
              return;
            }
          }
          return scheduleAction(function () {
            return slate.Editor.insertText(editor, _text);
          }, {
            at: targetRange
          });
        }
    }
  };
  var hasPendingAction = function hasPendingAction() {
    return !!slateDom.EDITOR_TO_PENDING_ACTION.get(editor);
  };
  var hasPendingDiffs = function hasPendingDiffs() {
    var _EDITOR_TO_PENDING_DI4;
    return !!((_EDITOR_TO_PENDING_DI4 = slateDom.EDITOR_TO_PENDING_DIFFS.get(editor)) !== null && _EDITOR_TO_PENDING_DI4 !== void 0 && _EDITOR_TO_PENDING_DI4.length);
  };
  var hasPendingChanges = function hasPendingChanges() {
    return hasPendingAction() || hasPendingDiffs();
  };
  var isFlushing = function isFlushing() {
    return flushing;
  };
  var handleUserSelect = function handleUserSelect(range) {
    slateDom.EDITOR_TO_PENDING_SELECTION.set(editor, range);
    if (flushTimeoutId) {
      clearTimeout(flushTimeoutId);
      flushTimeoutId = null;
    }
    var selection = editor.selection;
    if (!range) {
      return;
    }
    var pathChanged = !selection || !slate.Path.equals(selection.anchor.path, range.anchor.path);
    var parentPathChanged = !selection || !slate.Path.equals(selection.anchor.path.slice(0, -1), range.anchor.path.slice(0, -1));
    if (pathChanged && insertPositionHint || parentPathChanged) {
      insertPositionHint = false;
    }
    if (pathChanged || hasPendingDiffs()) {
      flushTimeoutId = setTimeout(flush, FLUSH_DELAY);
    }
  };
  var handleInput = function handleInput() {
    if (hasPendingAction() || !hasPendingDiffs()) {
      flush();
    }
  };
  var handleKeyDown = function handleKeyDown(_) {
    // COMPAT: Swiftkey closes the keyboard when typing inside a empty node
    // directly next to a non-contenteditable element (= the placeholder).
    // The only event fired soon enough for us to allow hiding the placeholder
    // without swiftkey picking it up is the keydown event, so we have to hide it
    // here. See https://github.com/ianstormtaylor/slate/pull/4988#issuecomment-1201050535
    if (!hasPendingDiffs()) {
      updatePlaceholderVisibility(true);
      setTimeout(updatePlaceholderVisibility);
    }
  };
  var scheduleFlush = function scheduleFlush() {
    if (!hasPendingAction()) {
      actionTimeoutId = setTimeout(flush);
    }
  };
  var handleDomMutations = function handleDomMutations(mutations) {
    if (hasPendingDiffs() || hasPendingAction()) {
      return;
    }
    if (mutations.some(function (mutation) {
      return slateDom.isTrackedMutation(editor, mutation, mutations);
    })) {
      var _EDITOR_TO_FORCE_REND;
      // Cause a re-render to restore the dom state if we encounter tracked mutations without
      // a corresponding pending action.
      (_EDITOR_TO_FORCE_REND = slateDom.EDITOR_TO_FORCE_RENDER.get(editor)) === null || _EDITOR_TO_FORCE_REND === void 0 || _EDITOR_TO_FORCE_REND();
    }
  };
  return {
    flush: flush,
    scheduleFlush: scheduleFlush,
    hasPendingDiffs: hasPendingDiffs,
    hasPendingAction: hasPendingAction,
    hasPendingChanges: hasPendingChanges,
    isFlushing: isFlushing,
    handleUserSelect: handleUserSelect,
    handleCompositionEnd: handleCompositionEnd,
    handleCompositionStart: handleCompositionStart,
    handleDOMBeforeInput: handleDOMBeforeInput,
    handleKeyDown: handleKeyDown,
    handleDomMutations: handleDomMutations,
    handleInput: handleInput
  };
}

function useIsMounted() {
  var isMountedRef = React.useRef(false);
  React.useEffect(function () {
    isMountedRef.current = true;
    return function () {
      isMountedRef.current = false;
    };
  }, []);
  return isMountedRef.current;
}

/**
 * Prevent warning on SSR by falling back to useEffect when DOM isn't available
 */
var useIsomorphicLayoutEffect = slateDom.CAN_USE_DOM ? React.useLayoutEffect : React.useEffect;

function useMutationObserver(node, callback, options) {
  var _useState = React.useState(function () {
      return new MutationObserver(callback);
    }),
    _useState2 = _slicedToArray(_useState, 1),
    mutationObserver = _useState2[0];
  useIsomorphicLayoutEffect(function () {
    // Discard mutations caused during render phase. This works due to react calling
    // useLayoutEffect synchronously after the render phase before the next tick.
    mutationObserver.takeRecords();
  });
  React.useEffect(function () {
    if (!node.current) {
      throw new Error('Failed to attach MutationObserver, `node` is undefined');
    }
    mutationObserver.observe(node.current, options);
    return function () {
      return mutationObserver.disconnect();
    };
  }, [mutationObserver, node, options]);
}

var _excluded$2 = ["node"];
function ownKeys$5(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$5(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$5(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$5(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var MUTATION_OBSERVER_CONFIG$1 = {
  subtree: true,
  childList: true,
  characterData: true
};
var useAndroidInputManager = !slateDom.IS_ANDROID ? function () {
  return null;
} : function (_ref) {
  var node = _ref.node,
    options = _objectWithoutProperties(_ref, _excluded$2);
  if (!slateDom.IS_ANDROID) {
    return null;
  }
  var editor = useSlateStatic();
  var isMounted = useIsMounted();
  var _useState = React.useState(function () {
      return createAndroidInputManager(_objectSpread$5({
        editor: editor
      }, options));
    }),
    _useState2 = _slicedToArray(_useState, 1),
    inputManager = _useState2[0];
  useMutationObserver(node, inputManager.handleDomMutations, MUTATION_OBSERVER_CONFIG$1);
  slateDom.EDITOR_TO_SCHEDULE_FLUSH.set(editor, inputManager.scheduleFlush);
  if (isMounted) {
    inputManager.flush();
  }
  return inputManager;
};

function ownKeys$4(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$4(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$4(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * Leaf content strings.
 */
var String$1 = function String(props) {
  var isLast = props.isLast,
    leaf = props.leaf,
    parent = props.parent,
    text = props.text;
  var editor = useSlateStatic();
  var path = ReactEditor.findPath(editor, text);
  var parentPath = slate.Path.parent(path);
  var isMarkPlaceholder = Boolean(leaf[slateDom.MARK_PLACEHOLDER_SYMBOL]);
  // COMPAT: Render text inside void nodes with a zero-width space.
  // So the node can contain selection but the text is not visible.
  if (editor.isVoid(parent)) {
    return /*#__PURE__*/React.createElement(ZeroWidthString, {
      length: slate.Node.string(parent).length
    });
  }
  // COMPAT: If this is the last text node in an empty block, render a zero-
  // width space that will convert into a line break when copying and pasting
  // to support expected plain text.
  if (leaf.text === '' && parent.children[parent.children.length - 1] === text && !editor.isInline(parent) && slate.Editor.string(editor, parentPath) === '') {
    return /*#__PURE__*/React.createElement(ZeroWidthString, {
      isLineBreak: true,
      isMarkPlaceholder: isMarkPlaceholder
    });
  }
  // COMPAT: If the text is empty, it's because it's on the edge of an inline
  // node, so we render a zero-width space so that the selection can be
  // inserted next to it still.
  if (leaf.text === '') {
    return /*#__PURE__*/React.createElement(ZeroWidthString, {
      isMarkPlaceholder: isMarkPlaceholder
    });
  }
  // COMPAT: Browsers will collapse trailing new lines at the end of blocks,
  // so we need to add an extra trailing new lines to prevent that.
  if (isLast && leaf.text.slice(-1) === '\n') {
    return /*#__PURE__*/React.createElement(TextString, {
      isTrailing: true,
      text: leaf.text
    });
  }
  return /*#__PURE__*/React.createElement(TextString, {
    text: leaf.text
  });
};
/**
 * Leaf strings with text in them.
 */
var TextString = function TextString(props) {
  var text = props.text,
    _props$isTrailing = props.isTrailing,
    isTrailing = _props$isTrailing === void 0 ? false : _props$isTrailing;
  var ref = React.useRef(null);
  var getTextContent = function getTextContent() {
    return "".concat(text !== null && text !== void 0 ? text : '').concat(isTrailing ? '\n' : '');
  };
  var _useState = React.useState(getTextContent),
    _useState2 = _slicedToArray(_useState, 1),
    initialText = _useState2[0];
  // This is the actual text rendering boundary where we interface with the DOM
  // The text is not rendered as part of the virtual DOM, as since we handle basic character insertions natively,
  // updating the DOM is not a one way dataflow anymore. What we need here is not reconciliation and diffing
  // with previous version of the virtual DOM, but rather diffing with the actual DOM element, and replace the DOM <span> content
  // exactly if and only if its current content does not match our current virtual DOM.
  // Otherwise the DOM TextNode would always be replaced by React as the user types, which interferes with native text features,
  // eg makes native spellcheck opt out from checking the text node.
  // useLayoutEffect: updating our span before browser paint
  useIsomorphicLayoutEffect(function () {
    // null coalescing text to make sure we're not outputing "null" as a string in the extreme case it is nullish at runtime
    var textWithTrailing = getTextContent();
    if (ref.current && ref.current.textContent !== textWithTrailing) {
      ref.current.textContent = textWithTrailing;
    }
    // intentionally not specifying dependencies, so that this effect runs on every render
    // as this effectively replaces "specifying the text in the virtual DOM under the <span> below" on each render
  });
  // We intentionally render a memoized <span> that only receives the initial text content when the component is mounted.
  // We defer to the layout effect above to update the `textContent` of the span element when needed.
  return /*#__PURE__*/React.createElement(MemoizedText$1, {
    ref: ref
  }, initialText);
};
var MemoizedText$1 = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement("span", {
    "data-slate-string": true,
    ref: ref
  }, props.children);
}));
/**
 * Leaf strings without text, render as zero-width strings.
 */
var ZeroWidthString = function ZeroWidthString(props) {
  var _props$length = props.length,
    length = _props$length === void 0 ? 0 : _props$length,
    _props$isLineBreak = props.isLineBreak,
    isLineBreak = _props$isLineBreak === void 0 ? false : _props$isLineBreak,
    _props$isMarkPlacehol = props.isMarkPlaceholder,
    isMarkPlaceholder = _props$isMarkPlacehol === void 0 ? false : _props$isMarkPlacehol;
  var attributes = {
    'data-slate-zero-width': isLineBreak ? 'n' : 'z',
    'data-slate-length': length
  };
  if (isMarkPlaceholder) {
    attributes['data-slate-mark-placeholder'] = true;
  }
  return /*#__PURE__*/React.createElement("span", _objectSpread$4({}, attributes), !(slateDom.IS_ANDROID || slateDom.IS_IOS) || !isLineBreak ? "\uFEFF" : null, isLineBreak ? /*#__PURE__*/React.createElement("br", null) : null);
};

function ownKeys$3(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$3(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$3(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
// Delay the placeholder on Android to prevent the keyboard from closing.
// (https://github.com/ianstormtaylor/slate/pull/5368)
var PLACEHOLDER_DELAY = slateDom.IS_ANDROID ? 300 : 0;
function disconnectPlaceholderResizeObserver(placeholderResizeObserver, releaseObserver) {
  if (placeholderResizeObserver.current) {
    placeholderResizeObserver.current.disconnect();
    if (releaseObserver) {
      placeholderResizeObserver.current = null;
    }
  }
}
function clearTimeoutRef(timeoutRef) {
  if (timeoutRef.current) {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
  }
}
/**
 * Individual leaves in a text node with unique formatting.
 */
var Leaf = function Leaf(props) {
  var leaf = props.leaf,
    isLast = props.isLast,
    text = props.text,
    parent = props.parent,
    renderPlaceholder = props.renderPlaceholder,
    _props$renderLeaf = props.renderLeaf,
    renderLeaf = _props$renderLeaf === void 0 ? function (props) {
      return /*#__PURE__*/React.createElement(DefaultLeaf, _objectSpread$3({}, props));
    } : _props$renderLeaf,
    leafPosition = props.leafPosition;
  var editor = useSlateStatic();
  var placeholderResizeObserver = React.useRef(null);
  var placeholderRef = React.useRef(null);
  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showPlaceholder = _useState2[0],
    setShowPlaceholder = _useState2[1];
  var showPlaceholderTimeoutRef = React.useRef(null);
  var callbackPlaceholderRef = React.useCallback(function (placeholderEl) {
    disconnectPlaceholderResizeObserver(placeholderResizeObserver, placeholderEl == null);
    if (placeholderEl == null) {
      var _leaf$onPlaceholderRe;
      slateDom.EDITOR_TO_PLACEHOLDER_ELEMENT["delete"](editor);
      (_leaf$onPlaceholderRe = leaf.onPlaceholderResize) === null || _leaf$onPlaceholderRe === void 0 || _leaf$onPlaceholderRe.call(leaf, null);
    } else {
      slateDom.EDITOR_TO_PLACEHOLDER_ELEMENT.set(editor, placeholderEl);
      if (!placeholderResizeObserver.current) {
        // Create a new observer and observe the placeholder element.
        var ResizeObserver = window.ResizeObserver || resizeObserver.ResizeObserver;
        placeholderResizeObserver.current = new ResizeObserver(function () {
          var _leaf$onPlaceholderRe2;
          (_leaf$onPlaceholderRe2 = leaf.onPlaceholderResize) === null || _leaf$onPlaceholderRe2 === void 0 || _leaf$onPlaceholderRe2.call(leaf, placeholderEl);
        });
      }
      placeholderResizeObserver.current.observe(placeholderEl);
      placeholderRef.current = placeholderEl;
    }
  }, [placeholderRef, leaf, editor]);
  var children = /*#__PURE__*/React.createElement(String$1, {
    isLast: isLast,
    leaf: leaf,
    parent: parent,
    text: text
  });
  var leafIsPlaceholder = Boolean(leaf[slateDom.PLACEHOLDER_SYMBOL]);
  React.useEffect(function () {
    if (leafIsPlaceholder) {
      if (!showPlaceholderTimeoutRef.current) {
        // Delay the placeholder, so it will not render in a selection
        showPlaceholderTimeoutRef.current = setTimeout(function () {
          setShowPlaceholder(true);
          showPlaceholderTimeoutRef.current = null;
        }, PLACEHOLDER_DELAY);
      }
    } else {
      clearTimeoutRef(showPlaceholderTimeoutRef);
      setShowPlaceholder(false);
    }
    return function () {
      return clearTimeoutRef(showPlaceholderTimeoutRef);
    };
  }, [leafIsPlaceholder, setShowPlaceholder]);
  if (leafIsPlaceholder && showPlaceholder) {
    var placeholderProps = {
      children: leaf.placeholder,
      attributes: {
        'data-slate-placeholder': true,
        style: {
          position: 'absolute',
          top: 0,
          pointerEvents: 'none',
          width: '100%',
          maxWidth: '100%',
          display: 'block',
          opacity: '0.333',
          userSelect: 'none',
          textDecoration: 'none',
          // Fixes https://github.com/udecode/plate/issues/2315
          WebkitUserModify: slateDom.IS_WEBKIT ? 'inherit' : undefined
        },
        contentEditable: false,
        ref: callbackPlaceholderRef
      }
    };
    children = /*#__PURE__*/React.createElement(React.Fragment, null, renderPlaceholder(placeholderProps), children);
  }
  // COMPAT: Having the `data-` attributes on these leaf elements ensures that
  // in certain misbehaving browsers they aren't weirdly cloned/destroyed by
  // contenteditable behaviors. (2019/05/08)
  var attributes = {
    'data-slate-leaf': true
  };
  return renderLeaf({
    attributes: attributes,
    children: children,
    leaf: leaf,
    text: text,
    leafPosition: leafPosition
  });
};
var MemoizedLeaf = /*#__PURE__*/React.memo(Leaf, function (prev, next) {
  return next.parent === prev.parent && next.isLast === prev.isLast && next.renderLeaf === prev.renderLeaf && next.renderPlaceholder === prev.renderPlaceholder && next.text === prev.text && slate.Text.equals(next.leaf, prev.leaf) && next.leaf[slateDom.PLACEHOLDER_SYMBOL] === prev.leaf[slateDom.PLACEHOLDER_SYMBOL];
});
var DefaultLeaf = function DefaultLeaf(props) {
  var attributes = props.attributes,
    children = props.children;
  return /*#__PURE__*/React.createElement("span", _objectSpread$3({}, attributes), children);
};

function ownKeys$2(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$2(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$2(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * Text.
 */
var Text = function Text(props) {
  var decorations = props.decorations,
    isLast = props.isLast,
    parent = props.parent,
    renderPlaceholder = props.renderPlaceholder,
    renderLeaf = props.renderLeaf,
    _props$renderText = props.renderText,
    renderText = _props$renderText === void 0 ? function (props) {
      return /*#__PURE__*/React.createElement(DefaultText, _objectSpread$2({}, props));
    } : _props$renderText,
    text = props.text;
  var editor = useSlateStatic();
  var ref = React.useRef(null);
  var decoratedLeaves = slate.Text.decorations(text, decorations);
  var key = ReactEditor.findKey(editor, text);
  var children = [];
  for (var i = 0; i < decoratedLeaves.length; i++) {
    var _decoratedLeaves$i = decoratedLeaves[i],
      leaf = _decoratedLeaves$i.leaf,
      position = _decoratedLeaves$i.position;
    children.push( /*#__PURE__*/React.createElement(MemoizedLeaf, {
      isLast: isLast && i === decoratedLeaves.length - 1,
      key: "".concat(key.id, "-").concat(i),
      renderPlaceholder: renderPlaceholder,
      leaf: leaf,
      leafPosition: position,
      text: text,
      parent: parent,
      renderLeaf: renderLeaf
    }));
  }
  // Update element-related weak maps with the DOM element ref.
  var callbackRef = React.useCallback(function (span) {
    var KEY_TO_ELEMENT = slateDom.EDITOR_TO_KEY_TO_ELEMENT.get(editor);
    if (span) {
      KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 || KEY_TO_ELEMENT.set(key, span);
      slateDom.NODE_TO_ELEMENT.set(text, span);
      slateDom.ELEMENT_TO_NODE.set(span, text);
    } else {
      KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 || KEY_TO_ELEMENT["delete"](key);
      slateDom.NODE_TO_ELEMENT["delete"](text);
      if (ref.current) {
        slateDom.ELEMENT_TO_NODE["delete"](ref.current);
      }
    }
    ref.current = span;
  }, [ref, editor, key, text]);
  var attributes = {
    'data-slate-node': 'text',
    ref: callbackRef
  };
  return renderText({
    text: text,
    children: children,
    attributes: attributes
  });
};
var MemoizedText = /*#__PURE__*/React.memo(Text, function (prev, next) {
  return next.parent === prev.parent && next.isLast === prev.isLast && next.renderText === prev.renderText && next.renderLeaf === prev.renderLeaf && next.renderPlaceholder === prev.renderPlaceholder && next.text === prev.text && slateDom.isTextDecorationsEqual(next.decorations, prev.decorations);
});
var DefaultText = function DefaultText(props) {
  var attributes = props.attributes,
    children = props.children;
  return /*#__PURE__*/React.createElement("span", _objectSpread$2({}, attributes), children);
};

function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * Element.
 */
var Element = function Element(props) {
  var decorations = props.decorations,
    element = props.element,
    _props$renderElement = props.renderElement,
    renderElement = _props$renderElement === void 0 ? function (p) {
      return /*#__PURE__*/React.createElement(DefaultElement, _objectSpread$1({}, p));
    } : _props$renderElement,
    renderPlaceholder = props.renderPlaceholder,
    renderLeaf = props.renderLeaf,
    renderText = props.renderText,
    selection = props.selection;
  var editor = useSlateStatic();
  var readOnly = useReadOnly();
  var isInline = editor.isInline(element);
  var key = ReactEditor.findKey(editor, element);
  var ref = React.useCallback(function (ref) {
    // Update element-related weak maps with the DOM element ref.
    var KEY_TO_ELEMENT = slateDom.EDITOR_TO_KEY_TO_ELEMENT.get(editor);
    if (ref) {
      KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 || KEY_TO_ELEMENT.set(key, ref);
      slateDom.NODE_TO_ELEMENT.set(element, ref);
      slateDom.ELEMENT_TO_NODE.set(ref, element);
    } else {
      KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 || KEY_TO_ELEMENT["delete"](key);
      slateDom.NODE_TO_ELEMENT["delete"](element);
    }
  }, [editor, key, element]);
  var children = useChildren({
    decorations: decorations,
    node: element,
    renderElement: renderElement,
    renderPlaceholder: renderPlaceholder,
    renderLeaf: renderLeaf,
    renderText: renderText,
    selection: selection
  });
  // Attributes that the developer must mix into the element in their
  // custom node renderer component.
  var attributes = {
    'data-slate-node': 'element',
    ref: ref
  };
  if (isInline) {
    attributes['data-slate-inline'] = true;
  }
  // If it's a block node with inline children, add the proper `dir` attribute
  // for text direction.
  if (!isInline && slate.Editor.hasInlines(editor, element)) {
    var text = slate.Node.string(element);
    var dir = getDirection(text);
    if (dir === 'rtl') {
      attributes.dir = dir;
    }
  }
  // If it's a void node, wrap the children in extra void-specific elements.
  if (slate.Editor.isVoid(editor, element)) {
    attributes['data-slate-void'] = true;
    if (!readOnly && isInline) {
      attributes.contentEditable = false;
    }
    var Tag = isInline ? 'span' : 'div';
    var _Node$texts = slate.Node.texts(element),
      _Node$texts2 = _slicedToArray(_Node$texts, 1),
      _Node$texts2$ = _slicedToArray(_Node$texts2[0], 1),
      _text = _Node$texts2$[0];
    children = /*#__PURE__*/React.createElement(Tag, {
      "data-slate-spacer": true,
      style: {
        height: '0',
        color: 'transparent',
        outline: 'none',
        position: 'absolute'
      }
    }, /*#__PURE__*/React.createElement(MemoizedText, {
      renderPlaceholder: renderPlaceholder,
      decorations: [],
      isLast: false,
      parent: element,
      text: _text
    }));
    slateDom.NODE_TO_INDEX.set(_text, 0);
    slateDom.NODE_TO_PARENT.set(_text, element);
  }
  return renderElement({
    attributes: attributes,
    children: children,
    element: element
  });
};
var MemoizedElement = /*#__PURE__*/React.memo(Element, function (prev, next) {
  return prev.element === next.element && prev.renderElement === next.renderElement && prev.renderText === next.renderText && prev.renderLeaf === next.renderLeaf && prev.renderPlaceholder === next.renderPlaceholder && slateDom.isElementDecorationsEqual(prev.decorations, next.decorations) && (prev.selection === next.selection || !!prev.selection && !!next.selection && slate.Range.equals(prev.selection, next.selection));
});
/**
 * The default element renderer.
 */
var DefaultElement = function DefaultElement(props) {
  var attributes = props.attributes,
    children = props.children,
    element = props.element;
  var editor = useSlateStatic();
  var Tag = editor.isInline(element) ? 'span' : 'div';
  return /*#__PURE__*/React.createElement(Tag, _objectSpread$1(_objectSpread$1({}, attributes), {}, {
    style: {
      position: 'relative'
    }
  }), children);
};

/**
 * A React context for sharing the `decorate` prop of the editable.
 */
var DecorateContext = /*#__PURE__*/React.createContext(function () {
  return [];
});
/**
 * Get the current `decorate` prop of the editable.
 */
var useDecorate = function useDecorate() {
  return React.useContext(DecorateContext);
};

/**
 * A React context for sharing the `selected` state of an element.
 */
var SelectedContext = /*#__PURE__*/React.createContext(false);
/**
 * Get the current `selected` state of an element.
 */
var useSelected = function useSelected() {
  return React.useContext(SelectedContext);
};

function _createForOfIteratorHelper$1(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }
function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Children.
 */
var useChildren = function useChildren(props) {
  var decorations = props.decorations,
    node = props.node,
    renderElement = props.renderElement,
    renderPlaceholder = props.renderPlaceholder,
    renderText = props.renderText,
    renderLeaf = props.renderLeaf,
    selection = props.selection;
  var decorate = useDecorate();
  var editor = useSlateStatic();
  slateDom.IS_NODE_MAP_DIRTY.set(editor, false);
  var path = ReactEditor.findPath(editor, node);
  var children = [];
  var isLeafBlock = slate.Element.isElement(node) && !editor.isInline(node) && slate.Editor.hasInlines(editor, node);
  for (var i = 0; i < node.children.length; i++) {
    var p = path.concat(i);
    var n = node.children[i];
    var key = ReactEditor.findKey(editor, n);
    var range = slate.Editor.range(editor, p);
    var sel = selection && slate.Range.intersection(range, selection);
    var ds = decorate([n, p]);
    var _iterator = _createForOfIteratorHelper$1(decorations),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var dec = _step.value;
        var d = slate.Range.intersection(dec, range);
        if (d) {
          ds.push(d);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (slate.Element.isElement(n)) {
      children.push( /*#__PURE__*/React.createElement(SelectedContext.Provider, {
        key: "provider-".concat(key.id),
        value: !!sel
      }, /*#__PURE__*/React.createElement(MemoizedElement, {
        decorations: ds,
        element: n,
        key: key.id,
        renderElement: renderElement,
        renderPlaceholder: renderPlaceholder,
        renderLeaf: renderLeaf,
        renderText: renderText,
        selection: sel
      })));
    } else {
      children.push( /*#__PURE__*/React.createElement(MemoizedText, {
        decorations: ds,
        key: key.id,
        isLast: isLeafBlock && i === node.children.length - 1,
        parent: node,
        renderPlaceholder: renderPlaceholder,
        renderLeaf: renderLeaf,
        renderText: renderText,
        text: n
      }));
    }
    slateDom.NODE_TO_INDEX.set(n, i);
    slateDom.NODE_TO_PARENT.set(n, node);
  }
  return children;
};

/**
 * A React context for sharing the `readOnly` state of the editor.
 */
var ReadOnlyContext = /*#__PURE__*/React.createContext(false);
/**
 * Get the current `readOnly` state of the editor.
 */
var useReadOnly = function useReadOnly() {
  return React.useContext(ReadOnlyContext);
};

var SlateContext = /*#__PURE__*/React.createContext(null);
/**
 * Get the current editor object from the React context.
 */
var useSlate = function useSlate() {
  var context = React.useContext(SlateContext);
  if (!context) {
    throw new Error("The `useSlate` hook must be used inside the <Slate> component's context.");
  }
  var editor = context.editor;
  return editor;
};
var useSlateWithV = function useSlateWithV() {
  var context = React.useContext(SlateContext);
  if (!context) {
    throw new Error("The `useSlate` hook must be used inside the <Slate> component's context.");
  }
  return context;
};

function useTrackUserInput() {
  var editor = useSlateStatic();
  var receivedUserInput = React.useRef(false);
  var animationFrameIdRef = React.useRef(0);
  var onUserInput = React.useCallback(function () {
    if (receivedUserInput.current) {
      return;
    }
    receivedUserInput.current = true;
    var window = ReactEditor.getWindow(editor);
    window.cancelAnimationFrame(animationFrameIdRef.current);
    animationFrameIdRef.current = window.requestAnimationFrame(function () {
      receivedUserInput.current = false;
    });
  }, [editor]);
  React.useEffect(function () {
    return function () {
      return cancelAnimationFrame(animationFrameIdRef.current);
    };
  }, []);
  return {
    receivedUserInput: receivedUserInput,
    onUserInput: onUserInput
  };
}

var classCallCheck = createCommonjsModule(function (module) {
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _classCallCheck = unwrapExports(classCallCheck);

var createClass = createCommonjsModule(function (module) {
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _createClass = unwrapExports(createClass);

var assertThisInitialized = createCommonjsModule(function (module) {
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _assertThisInitialized = unwrapExports(assertThisInitialized);

var setPrototypeOf = createCommonjsModule(function (module) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

unwrapExports(setPrototypeOf);

var inherits = createCommonjsModule(function (module) {
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _inherits = unwrapExports(inherits);

var possibleConstructorReturn = createCommonjsModule(function (module) {
var _typeof = _typeof_1["default"];

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _possibleConstructorReturn = unwrapExports(possibleConstructorReturn);

var getPrototypeOf = createCommonjsModule(function (module) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _getPrototypeOf = unwrapExports(getPrototypeOf);

var arrayWithoutHoles = createCommonjsModule(function (module) {
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

unwrapExports(arrayWithoutHoles);

var iterableToArray = createCommonjsModule(function (module) {
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

unwrapExports(iterableToArray);

var nonIterableSpread = createCommonjsModule(function (module) {
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

unwrapExports(nonIterableSpread);

var toConsumableArray = createCommonjsModule(function (module) {
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _toConsumableArray = unwrapExports(toConsumableArray);

var createRestoreDomManager = function createRestoreDomManager(editor, receivedUserInput) {
  var bufferedMutations = [];
  var clear = function clear() {
    bufferedMutations = [];
  };
  var registerMutations = function registerMutations(mutations) {
    var _bufferedMutations;
    if (!receivedUserInput.current) {
      return;
    }
    var trackedMutations = mutations.filter(function (mutation) {
      return slateDom.isTrackedMutation(editor, mutation, mutations);
    });
    (_bufferedMutations = bufferedMutations).push.apply(_bufferedMutations, _toConsumableArray(trackedMutations));
  };
  function restoreDOM() {
    if (bufferedMutations.length > 0) {
      bufferedMutations.reverse().forEach(function (mutation) {
        if (mutation.type === 'characterData') {
          // We don't want to restore the DOM for characterData mutations
          // because this interrupts the composition.
          return;
        }
        mutation.removedNodes.forEach(function (node) {
          mutation.target.insertBefore(node, mutation.nextSibling);
        });
        mutation.addedNodes.forEach(function (node) {
          mutation.target.removeChild(node);
        });
      });
      // Clear buffered mutations to ensure we don't undo them twice
      clear();
    }
  }
  return {
    registerMutations: registerMutations,
    restoreDOM: restoreDOM,
    clear: clear
  };
};

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var MUTATION_OBSERVER_CONFIG = {
  subtree: true,
  childList: true,
  characterData: true,
  characterDataOldValue: true
};
// We have to use a class component here since we rely on `getSnapshotBeforeUpdate` which has no FC equivalent
// to run code synchronously immediately before react commits the component update to the DOM.
var RestoreDOMComponent = /*#__PURE__*/function (_Component) {
  _inherits(RestoreDOMComponent, _Component);
  var _super = _createSuper(RestoreDOMComponent);
  function RestoreDOMComponent() {
    var _this;
    _classCallCheck(this, RestoreDOMComponent);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "context", null);
    _defineProperty(_assertThisInitialized(_this), "manager", null);
    _defineProperty(_assertThisInitialized(_this), "mutationObserver", null);
    return _this;
  }
  _createClass(RestoreDOMComponent, [{
    key: "observe",
    value: function observe() {
      var _this$mutationObserve;
      var node = this.props.node;
      if (!node.current) {
        throw new Error('Failed to attach MutationObserver, `node` is undefined');
      }
      (_this$mutationObserve = this.mutationObserver) === null || _this$mutationObserve === void 0 || _this$mutationObserve.observe(node.current, MUTATION_OBSERVER_CONFIG);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var receivedUserInput = this.props.receivedUserInput;
      var editor = this.context;
      this.manager = createRestoreDomManager(editor, receivedUserInput);
      this.mutationObserver = new MutationObserver(this.manager.registerMutations);
      this.observe();
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate() {
      var _this$mutationObserve2, _this$mutationObserve3, _this$manager2;
      var pendingMutations = (_this$mutationObserve2 = this.mutationObserver) === null || _this$mutationObserve2 === void 0 ? void 0 : _this$mutationObserve2.takeRecords();
      if (pendingMutations !== null && pendingMutations !== void 0 && pendingMutations.length) {
        var _this$manager;
        (_this$manager = this.manager) === null || _this$manager === void 0 || _this$manager.registerMutations(pendingMutations);
      }
      (_this$mutationObserve3 = this.mutationObserver) === null || _this$mutationObserve3 === void 0 || _this$mutationObserve3.disconnect();
      (_this$manager2 = this.manager) === null || _this$manager2 === void 0 || _this$manager2.restoreDOM();
      return null;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$manager3;
      (_this$manager3 = this.manager) === null || _this$manager3 === void 0 || _this$manager3.clear();
      this.observe();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$mutationObserve4;
      (_this$mutationObserve4 = this.mutationObserver) === null || _this$mutationObserve4 === void 0 || _this$mutationObserve4.disconnect();
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return RestoreDOMComponent;
}(React.Component);
_defineProperty(RestoreDOMComponent, "contextType", EditorContext);
var RestoreDOM = slateDom.IS_ANDROID ? RestoreDOMComponent : function (_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(React.Fragment, null, children);
};

/**
 * A React context for sharing the `composing` state of the editor.
 */
var ComposingContext = /*#__PURE__*/React.createContext(false);
/**
 * Get the current `composing` state of the editor.
 */
var useComposing = function useComposing() {
  return React.useContext(ComposingContext);
};

var _excluded$1 = ["autoFocus", "decorate", "onDOMBeforeInput", "placeholder", "readOnly", "renderElement", "renderLeaf", "renderText", "renderPlaceholder", "scrollSelectionIntoView", "style", "as", "disableDefaultStyles"],
  _excluded2 = ["text"];
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Children = function Children(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, useChildren(props));
};
/**
 * Editable.
 */
var Editable = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  var defaultRenderPlaceholder = React.useCallback(function (props) {
    return /*#__PURE__*/React.createElement(DefaultPlaceholder, _objectSpread({}, props));
  }, []);
  var autoFocus = props.autoFocus,
    _props$decorate = props.decorate,
    decorate = _props$decorate === void 0 ? defaultDecorate : _props$decorate,
    propsOnDOMBeforeInput = props.onDOMBeforeInput,
    placeholder = props.placeholder,
    _props$readOnly = props.readOnly,
    readOnly = _props$readOnly === void 0 ? false : _props$readOnly,
    renderElement = props.renderElement,
    renderLeaf = props.renderLeaf,
    renderText = props.renderText,
    _props$renderPlacehol = props.renderPlaceholder,
    renderPlaceholder = _props$renderPlacehol === void 0 ? defaultRenderPlaceholder : _props$renderPlacehol,
    _props$scrollSelectio = props.scrollSelectionIntoView,
    scrollSelectionIntoView = _props$scrollSelectio === void 0 ? defaultScrollSelectionIntoView : _props$scrollSelectio,
    _props$style = props.style,
    userStyle = _props$style === void 0 ? {} : _props$style,
    _props$as = props.as,
    Component = _props$as === void 0 ? 'div' : _props$as,
    _props$disableDefault = props.disableDefaultStyles,
    disableDefaultStyles = _props$disableDefault === void 0 ? false : _props$disableDefault,
    attributes = _objectWithoutProperties(props, _excluded$1);
  var editor = useSlate();
  // Rerender editor when composition status changed
  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isComposing = _useState2[0],
    setIsComposing = _useState2[1];
  var ref = React.useRef(null);
  var deferredOperations = React.useRef([]);
  var _useState3 = React.useState(),
    _useState4 = _slicedToArray(_useState3, 2),
    placeholderHeight = _useState4[0],
    setPlaceholderHeight = _useState4[1];
  var processing = React.useRef(false);
  var _useTrackUserInput = useTrackUserInput(),
    onUserInput = _useTrackUserInput.onUserInput,
    receivedUserInput = _useTrackUserInput.receivedUserInput;
  var _useReducer = React.useReducer(function (s) {
      return s + 1;
    }, 0),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    forceRender = _useReducer2[1];
  slateDom.EDITOR_TO_FORCE_RENDER.set(editor, forceRender);
  // Update internal state on each render.
  slateDom.IS_READ_ONLY.set(editor, readOnly);
  // Keep track of some state for the event handler logic.
  var state = React.useMemo(function () {
    return {
      isDraggingInternally: false,
      isUpdatingSelection: false,
      latestElement: null,
      hasMarkPlaceholder: false
    };
  }, []);
  // The autoFocus TextareaHTMLAttribute doesn't do anything on a div, so it
  // needs to be manually focused.
  React.useEffect(function () {
    if (ref.current && autoFocus) {
      ref.current.focus();
    }
  }, [autoFocus]);
  /**
   * The AndroidInputManager object has a cyclical dependency on onDOMSelectionChange
   *
   * It is defined as a reference to simplify hook dependencies and clarify that
   * it needs to be initialized.
   */
  var androidInputManagerRef = React.useRef();
  // Listen on the native `selectionchange` event to be able to update any time
  // the selection changes. This is required because React's `onSelect` is leaky
  // and non-standard so it doesn't fire until after a selection has been
  // released. This causes issues in situations where another change happens
  // while a selection is being dragged.
  var onDOMSelectionChange = React.useMemo(function () {
    return throttle(function () {
      if (slateDom.IS_NODE_MAP_DIRTY.get(editor)) {
        onDOMSelectionChange();
        return;
      }
      var el = ReactEditor.toDOMNode(editor, editor);
      var root = el.getRootNode();
      if (!processing.current && slateDom.IS_WEBKIT && root instanceof ShadowRoot) {
        processing.current = true;
        var active = slateDom.getActiveElement();
        if (active) {
          document.execCommand('indent');
        } else {
          slate.Transforms.deselect(editor);
        }
        processing.current = false;
        return;
      }
      var androidInputManager = androidInputManagerRef.current;
      if ((slateDom.IS_ANDROID || !ReactEditor.isComposing(editor)) && (!state.isUpdatingSelection || androidInputManager !== null && androidInputManager !== void 0 && androidInputManager.isFlushing()) && !state.isDraggingInternally) {
        var _root = ReactEditor.findDocumentOrShadowRoot(editor);
        var activeElement = _root.activeElement;
        var _el = ReactEditor.toDOMNode(editor, editor);
        var domSelection = slateDom.getSelection(_root);
        if (activeElement === _el) {
          state.latestElement = activeElement;
          slateDom.IS_FOCUSED.set(editor, true);
        } else {
          slateDom.IS_FOCUSED["delete"](editor);
        }
        if (!domSelection) {
          return slate.Transforms.deselect(editor);
        }
        var anchorNode = domSelection.anchorNode,
          focusNode = domSelection.focusNode;
        var anchorNodeSelectable = ReactEditor.hasEditableTarget(editor, anchorNode) || ReactEditor.isTargetInsideNonReadonlyVoid(editor, anchorNode);
        var focusNodeInEditor = ReactEditor.hasTarget(editor, focusNode);
        if (anchorNodeSelectable && focusNodeInEditor) {
          var range = ReactEditor.toSlateRange(editor, domSelection, {
            exactMatch: false,
            suppressThrow: true
          });
          if (range) {
            if (!ReactEditor.isComposing(editor) && !(androidInputManager !== null && androidInputManager !== void 0 && androidInputManager.hasPendingChanges()) && !(androidInputManager !== null && androidInputManager !== void 0 && androidInputManager.isFlushing())) {
              slate.Transforms.select(editor, range);
            } else {
              androidInputManager === null || androidInputManager === void 0 || androidInputManager.handleUserSelect(range);
            }
          }
        }
        // Deselect the editor if the dom selection is not selectable in readonly mode
        if (readOnly && (!anchorNodeSelectable || !focusNodeInEditor)) {
          slate.Transforms.deselect(editor);
        }
      }
    }, 100);
  }, [editor, readOnly, state]);
  var scheduleOnDOMSelectionChange = React.useMemo(function () {
    return debounce(onDOMSelectionChange, 0);
  }, [onDOMSelectionChange]);
  androidInputManagerRef.current = useAndroidInputManager({
    node: ref,
    onDOMSelectionChange: onDOMSelectionChange,
    scheduleOnDOMSelectionChange: scheduleOnDOMSelectionChange
  });
  useIsomorphicLayoutEffect(function () {
    var _androidInputManagerR, _androidInputManagerR2;
    // Update element-related weak maps with the DOM element ref.
    var window;
    if (ref.current && (window = slateDom.getDefaultView(ref.current))) {
      slateDom.EDITOR_TO_WINDOW.set(editor, window);
      slateDom.EDITOR_TO_ELEMENT.set(editor, ref.current);
      slateDom.NODE_TO_ELEMENT.set(editor, ref.current);
      slateDom.ELEMENT_TO_NODE.set(ref.current, editor);
    } else {
      slateDom.NODE_TO_ELEMENT["delete"](editor);
    }
    // Make sure the DOM selection state is in sync.
    var selection = editor.selection;
    var root = ReactEditor.findDocumentOrShadowRoot(editor);
    var domSelection = slateDom.getSelection(root);
    if (!domSelection || !ReactEditor.isFocused(editor) || (_androidInputManagerR = androidInputManagerRef.current) !== null && _androidInputManagerR !== void 0 && _androidInputManagerR.hasPendingAction()) {
      return;
    }
    var setDomSelection = function setDomSelection(forceChange) {
      var hasDomSelection = domSelection.type !== 'None';
      // If the DOM selection is properly unset, we're done.
      if (!selection && !hasDomSelection) {
        return;
      }
      // Get anchorNode and focusNode
      var focusNode = domSelection.focusNode;
      var anchorNode;
      // COMPAT: In firefox the normal selection way does not work
      // (https://github.com/ianstormtaylor/slate/pull/5486#issue-1820720223)
      if (slateDom.IS_FIREFOX && domSelection.rangeCount > 1) {
        var firstRange = domSelection.getRangeAt(0);
        var lastRange = domSelection.getRangeAt(domSelection.rangeCount - 1);
        // Right to left
        if (firstRange.startContainer === focusNode) {
          anchorNode = lastRange.endContainer;
        } else {
          // Left to right
          anchorNode = firstRange.startContainer;
        }
      } else {
        anchorNode = domSelection.anchorNode;
      }
      // verify that the dom selection is in the editor
      var editorElement = slateDom.EDITOR_TO_ELEMENT.get(editor);
      var hasDomSelectionInEditor = false;
      if (editorElement.contains(anchorNode) && editorElement.contains(focusNode)) {
        hasDomSelectionInEditor = true;
      }
      // If the DOM selection is in the editor and the editor selection is already correct, we're done.
      if (hasDomSelection && hasDomSelectionInEditor && selection && !forceChange) {
        var slateRange = ReactEditor.toSlateRange(editor, domSelection, {
          exactMatch: true,
          // domSelection is not necessarily a valid Slate range
          // (e.g. when clicking on contentEditable:false element)
          suppressThrow: true
        });
        if (slateRange && slate.Range.equals(slateRange, selection)) {
          var _anchorNode;
          if (!state.hasMarkPlaceholder) {
            return;
          }
          // Ensure selection is inside the mark placeholder
          if ((_anchorNode = anchorNode) !== null && _anchorNode !== void 0 && (_anchorNode = _anchorNode.parentElement) !== null && _anchorNode !== void 0 && _anchorNode.hasAttribute('data-slate-mark-placeholder')) {
            return;
          }
        }
      }
      // when <Editable/> is being controlled through external value
      // then its children might just change - DOM responds to it on its own
      // but Slate's value is not being updated through any operation
      // and thus it doesn't transform selection on its own
      if (selection && !ReactEditor.hasRange(editor, selection)) {
        editor.selection = ReactEditor.toSlateRange(editor, domSelection, {
          exactMatch: false,
          suppressThrow: true
        });
        return;
      }
      // Otherwise the DOM selection is out of sync, so update it.
      state.isUpdatingSelection = true;
      var newDomRange = null;
      try {
        newDomRange = selection && ReactEditor.toDOMRange(editor, selection);
      } catch (e) {
        // Ignore, dom and state might be out of sync
      }
      if (newDomRange) {
        if (ReactEditor.isComposing(editor) && !slateDom.IS_ANDROID) {
          domSelection.collapseToEnd();
        } else if (slate.Range.isBackward(selection)) {
          domSelection.setBaseAndExtent(newDomRange.endContainer, newDomRange.endOffset, newDomRange.startContainer, newDomRange.startOffset);
        } else {
          domSelection.setBaseAndExtent(newDomRange.startContainer, newDomRange.startOffset, newDomRange.endContainer, newDomRange.endOffset);
        }
        scrollSelectionIntoView(editor, newDomRange);
      } else {
        domSelection.removeAllRanges();
      }
      return newDomRange;
    };
    // In firefox if there is more then 1 range and we call setDomSelection we remove the ability to select more cells in a table
    if (domSelection.rangeCount <= 1) {
      setDomSelection();
    }
    var ensureSelection = ((_androidInputManagerR2 = androidInputManagerRef.current) === null || _androidInputManagerR2 === void 0 ? void 0 : _androidInputManagerR2.isFlushing()) === 'action';
    if (!slateDom.IS_ANDROID || !ensureSelection) {
      setTimeout(function () {
        state.isUpdatingSelection = false;
      });
      return;
    }
    var timeoutId = null;
    var animationFrameId = requestAnimationFrame(function () {
      if (ensureSelection) {
        var ensureDomSelection = function ensureDomSelection(forceChange) {
          try {
            var el = ReactEditor.toDOMNode(editor, editor);
            el.focus();
            setDomSelection(forceChange);
          } catch (e) {
            // Ignore, dom and state might be out of sync
          }
        };
        // Compat: Android IMEs try to force their selection by manually re-applying it even after we set it.
        // This essentially would make setting the slate selection during an update meaningless, so we force it
        // again here. We can't only do it in the setTimeout after the animation frame since that would cause a
        // visible flicker.
        ensureDomSelection();
        timeoutId = setTimeout(function () {
          // COMPAT: While setting the selection in an animation frame visually correctly sets the selection,
          // it doesn't update GBoards spellchecker state. We have to manually trigger a selection change after
          // the animation frame to ensure it displays the correct state.
          ensureDomSelection(true);
          state.isUpdatingSelection = false;
        });
      }
    });
    return function () {
      cancelAnimationFrame(animationFrameId);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  });
  // Listen on the native `beforeinput` event to get real "Level 2" events. This
  // is required because React's `beforeinput` is fake and never really attaches
  // to the real event sadly. (2019/11/01)
  // https://github.com/facebook/react/issues/11211
  var onDOMBeforeInput = React.useCallback(function (event) {
    handleNativeHistoryEvents(editor, event);
    var el = ReactEditor.toDOMNode(editor, editor);
    var root = el.getRootNode();
    if (processing !== null && processing !== void 0 && processing.current && slateDom.IS_WEBKIT && root instanceof ShadowRoot) {
      var ranges = event.getTargetRanges();
      var range = ranges[0];
      var newRange = new window.Range();
      newRange.setStart(range.startContainer, range.startOffset);
      newRange.setEnd(range.endContainer, range.endOffset);
      // Translate the DOM Range into a Slate Range
      var slateRange = ReactEditor.toSlateRange(editor, newRange, {
        exactMatch: false,
        suppressThrow: false
      });
      slate.Transforms.select(editor, slateRange);
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }
    onUserInput();
    if (!readOnly && ReactEditor.hasEditableTarget(editor, event.target) && !isDOMEventHandled(event, propsOnDOMBeforeInput)) {
      var _EDITOR_TO_USER_SELEC;
      // COMPAT: BeforeInput events aren't cancelable on android, so we have to handle them differently using the android input manager.
      if (androidInputManagerRef.current) {
        return androidInputManagerRef.current.handleDOMBeforeInput(event);
      }
      // Some IMEs/Chrome extensions like e.g. Grammarly set the selection immediately before
      // triggering a `beforeinput` expecting the change to be applied to the immediately before
      // set selection.
      scheduleOnDOMSelectionChange.flush();
      onDOMSelectionChange.flush();
      var selection = editor.selection;
      var type = event.inputType;
      var data = event.dataTransfer || event.data || undefined;
      var isCompositionChange = type === 'insertCompositionText' || type === 'deleteCompositionText';
      // COMPAT: use composition change events as a hint to where we should insert
      // composition text if we aren't composing to work around https://github.com/ianstormtaylor/slate/issues/5038
      if (isCompositionChange && ReactEditor.isComposing(editor)) {
        return;
      }
      var _native = false;
      if (type === 'insertText' && selection && slate.Range.isCollapsed(selection) &&
      // Only use native character insertion for single characters a-z or space for now.
      // Long-press events (hold a + press 4 = ä) to choose a special character otherwise
      // causes duplicate inserts.
      event.data && event.data.length === 1 && /[a-z ]/i.test(event.data) &&
      // Chrome has issues correctly editing the start of nodes: https://bugs.chromium.org/p/chromium/issues/detail?id=1249405
      // When there is an inline element, e.g. a link, and you select
      // right after it (the start of the next node).
      selection.anchor.offset !== 0) {
        _native = true;
        // Skip native if there are marks, as
        // `insertText` will insert a node, not just text.
        if (editor.marks) {
          _native = false;
        }
        // If the NODE_MAP is dirty, we can't trust the selection anchor (eg ReactEditor.toDOMPoint)
        if (!slateDom.IS_NODE_MAP_DIRTY.get(editor)) {
          var _node$parentElement, _window$getComputedSt;
          // Chrome also has issues correctly editing the end of anchor elements: https://bugs.chromium.org/p/chromium/issues/detail?id=1259100
          // Therefore we don't allow native events to insert text at the end of anchor nodes.
          var anchor = selection.anchor;
          var _ReactEditor$toDOMPoi = ReactEditor.toDOMPoint(editor, anchor),
            _ReactEditor$toDOMPoi2 = _slicedToArray(_ReactEditor$toDOMPoi, 2),
            node = _ReactEditor$toDOMPoi2[0],
            offset = _ReactEditor$toDOMPoi2[1];
          var anchorNode = (_node$parentElement = node.parentElement) === null || _node$parentElement === void 0 ? void 0 : _node$parentElement.closest('a');
          var _window = ReactEditor.getWindow(editor);
          if (_native && anchorNode && ReactEditor.hasDOMNode(editor, anchorNode)) {
            var _lastText$textContent;
            // Find the last text node inside the anchor.
            var lastText = _window === null || _window === void 0 ? void 0 : _window.document.createTreeWalker(anchorNode, NodeFilter.SHOW_TEXT).lastChild();
            if (lastText === node && ((_lastText$textContent = lastText.textContent) === null || _lastText$textContent === void 0 ? void 0 : _lastText$textContent.length) === offset) {
              _native = false;
            }
          }
          // Chrome has issues with the presence of tab characters inside elements with whiteSpace = 'pre'
          // causing abnormal insert behavior: https://bugs.chromium.org/p/chromium/issues/detail?id=1219139
          if (_native && node.parentElement && (_window === null || _window === void 0 || (_window$getComputedSt = _window.getComputedStyle(node.parentElement)) === null || _window$getComputedSt === void 0 ? void 0 : _window$getComputedSt.whiteSpace) === 'pre') {
            var block = slate.Editor.above(editor, {
              at: anchor.path,
              match: function match(n) {
                return slate.Element.isElement(n) && slate.Editor.isBlock(editor, n);
              }
            });
            if (block && slate.Node.string(block[0]).includes('\t')) {
              _native = false;
            }
          }
        }
      }
      // COMPAT: For the deleting forward/backward input types we don't want
      // to change the selection because it is the range that will be deleted,
      // and those commands determine that for themselves.
      // If the NODE_MAP is dirty, we can't trust the selection anchor (eg ReactEditor.toDOMPoint via ReactEditor.toSlateRange)
      if ((!type.startsWith('delete') || type.startsWith('deleteBy')) && !slateDom.IS_NODE_MAP_DIRTY.get(editor)) {
        var _event$getTargetRange = event.getTargetRanges(),
          _event$getTargetRange2 = _slicedToArray(_event$getTargetRange, 1),
          targetRange = _event$getTargetRange2[0];
        if (targetRange) {
          var _range = ReactEditor.toSlateRange(editor, targetRange, {
            exactMatch: false,
            suppressThrow: false
          });
          if (!selection || !slate.Range.equals(selection, _range)) {
            _native = false;
            var selectionRef = !isCompositionChange && editor.selection && slate.Editor.rangeRef(editor, editor.selection);
            slate.Transforms.select(editor, _range);
            if (selectionRef) {
              slateDom.EDITOR_TO_USER_SELECTION.set(editor, selectionRef);
            }
          }
        }
      }
      // Composition change types occur while a user is composing text and can't be
      // cancelled. Let them through and wait for the composition to end.
      if (isCompositionChange) {
        return;
      }
      if (!_native) {
        event.preventDefault();
      }
      // COMPAT: If the selection is expanded, even if the command seems like
      // a delete forward/backward command it should delete the selection.
      if (selection && slate.Range.isExpanded(selection) && type.startsWith('delete')) {
        var direction = type.endsWith('Backward') ? 'backward' : 'forward';
        slate.Editor.deleteFragment(editor, {
          direction: direction
        });
        return;
      }
      switch (type) {
        case 'deleteByComposition':
        case 'deleteByCut':
        case 'deleteByDrag':
          {
            slate.Editor.deleteFragment(editor);
            break;
          }
        case 'deleteContent':
        case 'deleteContentForward':
          {
            slate.Editor.deleteForward(editor);
            break;
          }
        case 'deleteContentBackward':
          {
            slate.Editor.deleteBackward(editor);
            break;
          }
        case 'deleteEntireSoftLine':
          {
            slate.Editor.deleteBackward(editor, {
              unit: 'line'
            });
            slate.Editor.deleteForward(editor, {
              unit: 'line'
            });
            break;
          }
        case 'deleteHardLineBackward':
          {
            slate.Editor.deleteBackward(editor, {
              unit: 'block'
            });
            break;
          }
        case 'deleteSoftLineBackward':
          {
            slate.Editor.deleteBackward(editor, {
              unit: 'line'
            });
            break;
          }
        case 'deleteHardLineForward':
          {
            slate.Editor.deleteForward(editor, {
              unit: 'block'
            });
            break;
          }
        case 'deleteSoftLineForward':
          {
            slate.Editor.deleteForward(editor, {
              unit: 'line'
            });
            break;
          }
        case 'deleteWordBackward':
          {
            slate.Editor.deleteBackward(editor, {
              unit: 'word'
            });
            break;
          }
        case 'deleteWordForward':
          {
            slate.Editor.deleteForward(editor, {
              unit: 'word'
            });
            break;
          }
        case 'insertLineBreak':
          slate.Editor.insertSoftBreak(editor);
          break;
        case 'insertParagraph':
          {
            slate.Editor.insertBreak(editor);
            break;
          }
        case 'insertFromComposition':
        case 'insertFromDrop':
        case 'insertFromPaste':
        case 'insertFromYank':
        case 'insertReplacementText':
        case 'insertText':
          {
            if (type === 'insertFromComposition') {
              // COMPAT: in Safari, `compositionend` is dispatched after the
              // `beforeinput` for "insertFromComposition". But if we wait for it
              // then we will abort because we're still composing and the selection
              // won't be updated properly.
              // https://www.w3.org/TR/input-events-2/
              if (ReactEditor.isComposing(editor)) {
                setIsComposing(false);
                slateDom.IS_COMPOSING.set(editor, false);
              }
            }
            // use a weak comparison instead of 'instanceof' to allow
            // programmatic access of paste events coming from external windows
            // like cypress where cy.window does not work realibly
            if ((data === null || data === void 0 ? void 0 : data.constructor.name) === 'DataTransfer') {
              ReactEditor.insertData(editor, data);
            } else if (typeof data === 'string') {
              // Only insertText operations use the native functionality, for now.
              // Potentially expand to single character deletes, as well.
              if (_native) {
                deferredOperations.current.push(function () {
                  return slate.Editor.insertText(editor, data);
                });
              } else {
                slate.Editor.insertText(editor, data);
              }
            }
            break;
          }
      }
      // Restore the actual user section if nothing manually set it.
      var toRestore = (_EDITOR_TO_USER_SELEC = slateDom.EDITOR_TO_USER_SELECTION.get(editor)) === null || _EDITOR_TO_USER_SELEC === void 0 ? void 0 : _EDITOR_TO_USER_SELEC.unref();
      slateDom.EDITOR_TO_USER_SELECTION["delete"](editor);
      if (toRestore && (!editor.selection || !slate.Range.equals(editor.selection, toRestore))) {
        slate.Transforms.select(editor, toRestore);
      }
    }
  }, [editor, onDOMSelectionChange, onUserInput, propsOnDOMBeforeInput, readOnly, scheduleOnDOMSelectionChange]);
  var callbackRef = React.useCallback(function (node) {
    if (node == null) {
      onDOMSelectionChange.cancel();
      scheduleOnDOMSelectionChange.cancel();
      slateDom.EDITOR_TO_ELEMENT["delete"](editor);
      slateDom.NODE_TO_ELEMENT["delete"](editor);
      if (ref.current && slateDom.HAS_BEFORE_INPUT_SUPPORT) {
        // @ts-ignore The `beforeinput` event isn't recognized.
        ref.current.removeEventListener('beforeinput', onDOMBeforeInput);
      }
    } else {
      // Attach a native DOM event handler for `beforeinput` events, because React's
      // built-in `onBeforeInput` is actually a leaky polyfill that doesn't expose
      // real `beforeinput` events sadly... (2019/11/04)
      // https://github.com/facebook/react/issues/11211
      if (slateDom.HAS_BEFORE_INPUT_SUPPORT) {
        // @ts-ignore The `beforeinput` event isn't recognized.
        node.addEventListener('beforeinput', onDOMBeforeInput);
      }
    }
    ref.current = node;
    if (typeof forwardedRef === 'function') {
      forwardedRef(node);
    } else if (forwardedRef) {
      forwardedRef.current = node;
    }
  }, [onDOMSelectionChange, scheduleOnDOMSelectionChange, editor, onDOMBeforeInput, forwardedRef]);
  useIsomorphicLayoutEffect(function () {
    var window = ReactEditor.getWindow(editor);
    // COMPAT: In Chrome, `selectionchange` events can fire when <input> and
    // <textarea> elements are appended to the DOM, causing
    // `editor.selection` to be overwritten in some circumstances.
    // (2025/01/16) https://issues.chromium.org/issues/389368412
    var onSelectionChange = function onSelectionChange(_ref) {
      var target = _ref.target;
      var targetElement = target instanceof HTMLElement ? target : null;
      var targetTagName = targetElement === null || targetElement === void 0 ? void 0 : targetElement.tagName;
      if (targetTagName === 'INPUT' || targetTagName === 'TEXTAREA') {
        return;
      }
      scheduleOnDOMSelectionChange();
    };
    // Attach a native DOM event handler for `selectionchange`, because React's
    // built-in `onSelect` handler doesn't fire for all selection changes. It's
    // a leaky polyfill that only fires on keypresses or clicks. Instead, we
    // want to fire for any change to the selection inside the editor.
    // (2019/11/04) https://github.com/facebook/react/issues/5785
    window.document.addEventListener('selectionchange', onSelectionChange);
    // Listen for dragend and drop globally. In Firefox, if a drop handler
    // initiates an operation that causes the originally dragged element to
    // unmount, that element will not emit a dragend event. (2024/06/21)
    var stoppedDragging = function stoppedDragging() {
      state.isDraggingInternally = false;
    };
    window.document.addEventListener('dragend', stoppedDragging);
    window.document.addEventListener('drop', stoppedDragging);
    return function () {
      window.document.removeEventListener('selectionchange', onSelectionChange);
      window.document.removeEventListener('dragend', stoppedDragging);
      window.document.removeEventListener('drop', stoppedDragging);
    };
  }, [scheduleOnDOMSelectionChange, state]);
  var decorations = decorate([editor, []]);
  var showPlaceholder = placeholder && editor.children.length === 1 && Array.from(slate.Node.texts(editor)).length === 1 && slate.Node.string(editor) === '' && !isComposing;
  var placeHolderResizeHandler = React.useCallback(function (placeholderEl) {
    if (placeholderEl && showPlaceholder) {
      var _placeholderEl$getBou;
      setPlaceholderHeight((_placeholderEl$getBou = placeholderEl.getBoundingClientRect()) === null || _placeholderEl$getBou === void 0 ? void 0 : _placeholderEl$getBou.height);
    } else {
      setPlaceholderHeight(undefined);
    }
  }, [showPlaceholder]);
  if (showPlaceholder) {
    var _decorations$push;
    var start = slate.Editor.start(editor, []);
    decorations.push((_decorations$push = {}, _defineProperty(_decorations$push, slateDom.PLACEHOLDER_SYMBOL, true), _defineProperty(_decorations$push, "placeholder", placeholder), _defineProperty(_decorations$push, "onPlaceholderResize", placeHolderResizeHandler), _defineProperty(_decorations$push, "anchor", start), _defineProperty(_decorations$push, "focus", start), _decorations$push));
  }
  var marks = editor.marks;
  state.hasMarkPlaceholder = false;
  if (editor.selection && slate.Range.isCollapsed(editor.selection) && marks) {
    var anchor = editor.selection.anchor;
    var leaf = slate.Node.leaf(editor, anchor.path);
    leaf.text;
      var rest = _objectWithoutProperties(leaf, _excluded2);
    // While marks isn't a 'complete' text, we can still use loose Text.equals
    // here which only compares marks anyway.
    if (!slate.Text.equals(leaf, marks, {
      loose: true
    })) {
      state.hasMarkPlaceholder = true;
      var unset = Object.fromEntries(Object.keys(rest).map(function (mark) {
        return [mark, null];
      }));
      decorations.push(_objectSpread(_objectSpread(_objectSpread(_defineProperty({}, slateDom.MARK_PLACEHOLDER_SYMBOL, true), unset), marks), {}, {
        anchor: anchor,
        focus: anchor
      }));
    }
  }
  // Update EDITOR_TO_MARK_PLACEHOLDER_MARKS in setTimeout useEffect to ensure we don't set it
  // before we receive the composition end event.
  React.useEffect(function () {
    setTimeout(function () {
      var selection = editor.selection;
      if (selection) {
        var _anchor = selection.anchor;
        var _text = slate.Node.leaf(editor, _anchor.path);
        // While marks isn't a 'complete' text, we can still use loose Text.equals
        // here which only compares marks anyway.
        if (marks && !slate.Text.equals(_text, marks, {
          loose: true
        })) {
          slateDom.EDITOR_TO_PENDING_INSERTION_MARKS.set(editor, marks);
          return;
        }
      }
      slateDom.EDITOR_TO_PENDING_INSERTION_MARKS["delete"](editor);
    });
  });
  return /*#__PURE__*/React.createElement(ReadOnlyContext.Provider, {
    value: readOnly
  }, /*#__PURE__*/React.createElement(ComposingContext.Provider, {
    value: isComposing
  }, /*#__PURE__*/React.createElement(DecorateContext.Provider, {
    value: decorate
  }, /*#__PURE__*/React.createElement(RestoreDOM, {
    node: ref,
    receivedUserInput: receivedUserInput
  }, /*#__PURE__*/React.createElement(Component, _objectSpread(_objectSpread({
    role: readOnly ? undefined : 'textbox',
    "aria-multiline": readOnly ? undefined : true
  }, attributes), {}, {
    // COMPAT: Certain browsers don't support the `beforeinput` event, so we'd
    // have to use hacks to make these replacement-based features work.
    // For SSR situations HAS_BEFORE_INPUT_SUPPORT is false and results in prop
    // mismatch warning app moves to browser. Pass-through consumer props when
    // not CAN_USE_DOM (SSR) and default to falsy value
    spellCheck: slateDom.HAS_BEFORE_INPUT_SUPPORT || !slateDom.CAN_USE_DOM ? attributes.spellCheck : false,
    autoCorrect: slateDom.HAS_BEFORE_INPUT_SUPPORT || !slateDom.CAN_USE_DOM ? attributes.autoCorrect : 'false',
    autoCapitalize: slateDom.HAS_BEFORE_INPUT_SUPPORT || !slateDom.CAN_USE_DOM ? attributes.autoCapitalize : 'false',
    "data-slate-editor": true,
    "data-slate-node": "value",
    // explicitly set this
    contentEditable: !readOnly,
    // in some cases, a decoration needs access to the range / selection to decorate a text node,
    // then you will select the whole text node when you select part the of text
    // this magic zIndex="-1" will fix it
    zindex: -1,
    suppressContentEditableWarning: true,
    ref: callbackRef,
    style: _objectSpread(_objectSpread({}, disableDefaultStyles ? {} : _objectSpread({
      // Allow positioning relative to the editable element.
      position: 'relative',
      // Preserve adjacent whitespace and new lines.
      whiteSpace: 'pre-wrap',
      // Allow words to break if they are too long.
      wordWrap: 'break-word'
    }, placeholderHeight ? {
      minHeight: placeholderHeight
    } : {})), userStyle),
    onBeforeInput: React.useCallback(function (event) {
      // COMPAT: Certain browsers don't support the `beforeinput` event, so we
      // fall back to React's leaky polyfill instead just for it. It
      // only works for the `insertText` input type.
      if (!slateDom.HAS_BEFORE_INPUT_SUPPORT && !readOnly && !isEventHandled(event, attributes.onBeforeInput) && ReactEditor.hasSelectableTarget(editor, event.target)) {
        event.preventDefault();
        if (!ReactEditor.isComposing(editor)) {
          var _text2 = event.data;
          slate.Editor.insertText(editor, _text2);
        }
      }
    }, [attributes.onBeforeInput, editor, readOnly]),
    onInput: React.useCallback(function (event) {
      if (isEventHandled(event, attributes.onInput)) {
        return;
      }
      if (androidInputManagerRef.current) {
        androidInputManagerRef.current.handleInput();
        return;
      }
      // Flush native operations, as native events will have propogated
      // and we can correctly compare DOM text values in components
      // to stop rendering, so that browser functions like autocorrect
      // and spellcheck work as expected.
      var _iterator = _createForOfIteratorHelper(deferredOperations.current),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var op = _step.value;
          op();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      deferredOperations.current = [];
      // COMPAT: Since `beforeinput` doesn't fully `preventDefault`,
      // there's a chance that content might be placed in the browser's undo stack.
      // This means undo can be triggered even when the div is not focused,
      // and it only triggers the input event for the node. (2024/10/09)
      if (!ReactEditor.isFocused(editor)) {
        handleNativeHistoryEvents(editor, event.nativeEvent);
      }
    }, [attributes.onInput, editor]),
    onBlur: React.useCallback(function (event) {
      if (readOnly || state.isUpdatingSelection || !ReactEditor.hasSelectableTarget(editor, event.target) || isEventHandled(event, attributes.onBlur)) {
        return;
      }
      // COMPAT: If the current `activeElement` is still the previous
      // one, this is due to the window being blurred when the tab
      // itself becomes unfocused, so we want to abort early to allow to
      // editor to stay focused when the tab becomes focused again.
      var root = ReactEditor.findDocumentOrShadowRoot(editor);
      if (state.latestElement === root.activeElement) {
        return;
      }
      var relatedTarget = event.relatedTarget;
      var el = ReactEditor.toDOMNode(editor, editor);
      // COMPAT: The event should be ignored if the focus is returning
      // to the editor from an embedded editable element (eg. an <input>
      // element inside a void node).
      if (relatedTarget === el) {
        return;
      }
      // COMPAT: The event should be ignored if the focus is moving from
      // the editor to inside a void node's spacer element.
      if (slateDom.isDOMElement(relatedTarget) && relatedTarget.hasAttribute('data-slate-spacer')) {
        return;
      }
      // COMPAT: The event should be ignored if the focus is moving to a
      // non- editable section of an element that isn't a void node (eg.
      // a list item of the check list example).
      if (relatedTarget != null && slateDom.isDOMNode(relatedTarget) && ReactEditor.hasDOMNode(editor, relatedTarget)) {
        var node = ReactEditor.toSlateNode(editor, relatedTarget);
        if (slate.Element.isElement(node) && !editor.isVoid(node)) {
          return;
        }
      }
      // COMPAT: Safari doesn't always remove the selection even if the content-
      // editable element no longer has focus. Refer to:
      // https://stackoverflow.com/questions/12353247/force-contenteditable-div-to-stop-accepting-input-after-it-loses-focus-under-web
      if (slateDom.IS_WEBKIT) {
        var domSelection = slateDom.getSelection(root);
        domSelection === null || domSelection === void 0 || domSelection.removeAllRanges();
      }
      slateDom.IS_FOCUSED["delete"](editor);
    }, [readOnly, state.isUpdatingSelection, state.latestElement, editor, attributes.onBlur]),
    onClick: React.useCallback(function (event) {
      if (ReactEditor.hasTarget(editor, event.target) && !isEventHandled(event, attributes.onClick) && slateDom.isDOMNode(event.target)) {
        var node = ReactEditor.toSlateNode(editor, event.target);
        var path = ReactEditor.findPath(editor, node);
        // At this time, the Slate document may be arbitrarily different,
        // because onClick handlers can change the document before we get here.
        // Therefore we must check that this path actually exists,
        // and that it still refers to the same node.
        if (!slate.Editor.hasPath(editor, path) || slate.Node.get(editor, path) !== node) {
          return;
        }
        if (event.detail === slateDom.TRIPLE_CLICK && path.length >= 1) {
          var blockPath = path;
          if (!(slate.Element.isElement(node) && slate.Editor.isBlock(editor, node))) {
            var _block$;
            var block = slate.Editor.above(editor, {
              match: function match(n) {
                return slate.Element.isElement(n) && slate.Editor.isBlock(editor, n);
              },
              at: path
            });
            blockPath = (_block$ = block === null || block === void 0 ? void 0 : block[1]) !== null && _block$ !== void 0 ? _block$ : path.slice(0, 1);
          }
          var range = slate.Editor.range(editor, blockPath);
          slate.Transforms.select(editor, range);
          return;
        }
        if (readOnly) {
          return;
        }
        var _start = slate.Editor.start(editor, path);
        var end = slate.Editor.end(editor, path);
        var startVoid = slate.Editor["void"](editor, {
          at: _start
        });
        var endVoid = slate.Editor["void"](editor, {
          at: end
        });
        if (startVoid && endVoid && slate.Path.equals(startVoid[1], endVoid[1])) {
          var _range2 = slate.Editor.range(editor, _start);
          slate.Transforms.select(editor, _range2);
        }
      }
    }, [editor, attributes.onClick, readOnly]),
    onCompositionEnd: React.useCallback(function (event) {
      if (ReactEditor.hasSelectableTarget(editor, event.target)) {
        var _androidInputManagerR3;
        if (ReactEditor.isComposing(editor)) {
          Promise.resolve().then(function () {
            setIsComposing(false);
            slateDom.IS_COMPOSING.set(editor, false);
          });
        }
        (_androidInputManagerR3 = androidInputManagerRef.current) === null || _androidInputManagerR3 === void 0 || _androidInputManagerR3.handleCompositionEnd(event);
        if (isEventHandled(event, attributes.onCompositionEnd) || slateDom.IS_ANDROID) {
          return;
        }
        // COMPAT: In Chrome, `beforeinput` events for compositions
        // aren't correct and never fire the "insertFromComposition"
        // type that we need. So instead, insert whenever a composition
        // ends since it will already have been committed to the DOM.
        if (!slateDom.IS_WEBKIT && !slateDom.IS_FIREFOX_LEGACY && !slateDom.IS_IOS && !slateDom.IS_WECHATBROWSER && !slateDom.IS_UC_MOBILE && event.data) {
          var placeholderMarks = slateDom.EDITOR_TO_PENDING_INSERTION_MARKS.get(editor);
          slateDom.EDITOR_TO_PENDING_INSERTION_MARKS["delete"](editor);
          // Ensure we insert text with the marks the user was actually seeing
          if (placeholderMarks !== undefined) {
            slateDom.EDITOR_TO_USER_MARKS.set(editor, editor.marks);
            editor.marks = placeholderMarks;
          }
          slate.Editor.insertText(editor, event.data);
          var userMarks = slateDom.EDITOR_TO_USER_MARKS.get(editor);
          slateDom.EDITOR_TO_USER_MARKS["delete"](editor);
          if (userMarks !== undefined) {
            editor.marks = userMarks;
          }
        }
      }
    }, [attributes.onCompositionEnd, editor]),
    onCompositionUpdate: React.useCallback(function (event) {
      if (ReactEditor.hasSelectableTarget(editor, event.target) && !isEventHandled(event, attributes.onCompositionUpdate)) {
        if (!ReactEditor.isComposing(editor)) {
          setIsComposing(true);
          slateDom.IS_COMPOSING.set(editor, true);
        }
      }
    }, [attributes.onCompositionUpdate, editor]),
    onCompositionStart: React.useCallback(function (event) {
      if (ReactEditor.hasSelectableTarget(editor, event.target)) {
        var _androidInputManagerR4;
        (_androidInputManagerR4 = androidInputManagerRef.current) === null || _androidInputManagerR4 === void 0 || _androidInputManagerR4.handleCompositionStart(event);
        if (isEventHandled(event, attributes.onCompositionStart) || slateDom.IS_ANDROID) {
          return;
        }
        setIsComposing(true);
        var selection = editor.selection;
        if (selection && slate.Range.isExpanded(selection)) {
          slate.Editor.deleteFragment(editor);
          return;
        }
      }
    }, [attributes.onCompositionStart, editor]),
    onCopy: React.useCallback(function (event) {
      if (ReactEditor.hasSelectableTarget(editor, event.target) && !isEventHandled(event, attributes.onCopy) && !isDOMEventTargetInput(event)) {
        event.preventDefault();
        ReactEditor.setFragmentData(editor, event.clipboardData, 'copy');
      }
    }, [attributes.onCopy, editor]),
    onCut: React.useCallback(function (event) {
      if (!readOnly && ReactEditor.hasSelectableTarget(editor, event.target) && !isEventHandled(event, attributes.onCut) && !isDOMEventTargetInput(event)) {
        event.preventDefault();
        ReactEditor.setFragmentData(editor, event.clipboardData, 'cut');
        var selection = editor.selection;
        if (selection) {
          if (slate.Range.isExpanded(selection)) {
            slate.Editor.deleteFragment(editor);
          } else {
            var node = slate.Node.parent(editor, selection.anchor.path);
            if (slate.Editor.isVoid(editor, node)) {
              slate.Transforms["delete"](editor);
            }
          }
        }
      }
    }, [readOnly, editor, attributes.onCut]),
    onDragOver: React.useCallback(function (event) {
      if (ReactEditor.hasTarget(editor, event.target) && !isEventHandled(event, attributes.onDragOver)) {
        // Only when the target is void, call `preventDefault` to signal
        // that drops are allowed. Editable content is droppable by
        // default, and calling `preventDefault` hides the cursor.
        var node = ReactEditor.toSlateNode(editor, event.target);
        if (slate.Element.isElement(node) && slate.Editor.isVoid(editor, node)) {
          event.preventDefault();
        }
      }
    }, [attributes.onDragOver, editor]),
    onDragStart: React.useCallback(function (event) {
      if (!readOnly && ReactEditor.hasTarget(editor, event.target) && !isEventHandled(event, attributes.onDragStart)) {
        var node = ReactEditor.toSlateNode(editor, event.target);
        var path = ReactEditor.findPath(editor, node);
        var voidMatch = slate.Element.isElement(node) && slate.Editor.isVoid(editor, node) || slate.Editor["void"](editor, {
          at: path,
          voids: true
        });
        // If starting a drag on a void node, make sure it is selected
        // so that it shows up in the selection's fragment.
        if (voidMatch) {
          var range = slate.Editor.range(editor, path);
          slate.Transforms.select(editor, range);
        }
        state.isDraggingInternally = true;
        ReactEditor.setFragmentData(editor, event.dataTransfer, 'drag');
      }
    }, [readOnly, editor, attributes.onDragStart, state]),
    onDrop: React.useCallback(function (event) {
      if (!readOnly && ReactEditor.hasTarget(editor, event.target) && !isEventHandled(event, attributes.onDrop)) {
        event.preventDefault();
        // Keep a reference to the dragged range before updating selection
        var draggedRange = editor.selection;
        // Find the range where the drop happened
        var range = ReactEditor.findEventRange(editor, event);
        var data = event.dataTransfer;
        slate.Transforms.select(editor, range);
        if (state.isDraggingInternally) {
          if (draggedRange && !slate.Range.equals(draggedRange, range) && !slate.Editor["void"](editor, {
            at: range,
            voids: true
          })) {
            slate.Transforms["delete"](editor, {
              at: draggedRange
            });
          }
        }
        ReactEditor.insertData(editor, data);
        // When dragging from another source into the editor, it's possible
        // that the current editor does not have focus.
        if (!ReactEditor.isFocused(editor)) {
          ReactEditor.focus(editor);
        }
      }
    }, [readOnly, editor, attributes.onDrop, state]),
    onDragEnd: React.useCallback(function (event) {
      if (!readOnly && state.isDraggingInternally && attributes.onDragEnd && ReactEditor.hasTarget(editor, event.target)) {
        attributes.onDragEnd(event);
      }
    }, [readOnly, state, attributes, editor]),
    onFocus: React.useCallback(function (event) {
      if (!readOnly && !state.isUpdatingSelection && ReactEditor.hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onFocus)) {
        var el = ReactEditor.toDOMNode(editor, editor);
        var root = ReactEditor.findDocumentOrShadowRoot(editor);
        state.latestElement = root.activeElement;
        // COMPAT: If the editor has nested editable elements, the focus
        // can go to them. In Firefox, this must be prevented because it
        // results in issues with keyboard navigation. (2017/03/30)
        if (slateDom.IS_FIREFOX && event.target !== el) {
          el.focus();
          return;
        }
        slateDom.IS_FOCUSED.set(editor, true);
      }
    }, [readOnly, state, editor, attributes.onFocus]),
    onKeyDown: React.useCallback(function (event) {
      if (!readOnly && ReactEditor.hasEditableTarget(editor, event.target)) {
        var _androidInputManagerR5;
        (_androidInputManagerR5 = androidInputManagerRef.current) === null || _androidInputManagerR5 === void 0 || _androidInputManagerR5.handleKeyDown(event);
        var nativeEvent = event.nativeEvent;
        // COMPAT: The composition end event isn't fired reliably in all browsers,
        // so we sometimes might end up stuck in a composition state even though we
        // aren't composing any more.
        if (ReactEditor.isComposing(editor) && nativeEvent.isComposing === false) {
          slateDom.IS_COMPOSING.set(editor, false);
          setIsComposing(false);
        }
        if (isEventHandled(event, attributes.onKeyDown) || ReactEditor.isComposing(editor)) {
          return;
        }
        var selection = editor.selection;
        var element = editor.children[selection !== null ? selection.focus.path[0] : 0];
        var isRTL = getDirection(slate.Node.string(element)) === 'rtl';
        // COMPAT: Since we prevent the default behavior on
        // `beforeinput` events, the browser doesn't think there's ever
        // any history stack to undo or redo, so we have to manage these
        // hotkeys ourselves. (2019/11/06)
        if (slateDom.Hotkeys.isRedo(nativeEvent)) {
          event.preventDefault();
          var maybeHistoryEditor = editor;
          if (typeof maybeHistoryEditor.redo === 'function') {
            maybeHistoryEditor.redo();
          }
          return;
        }
        if (slateDom.Hotkeys.isUndo(nativeEvent)) {
          event.preventDefault();
          var _maybeHistoryEditor = editor;
          if (typeof _maybeHistoryEditor.undo === 'function') {
            _maybeHistoryEditor.undo();
          }
          return;
        }
        // COMPAT: Certain browsers don't handle the selection updates
        // properly. In Chrome, the selection isn't properly extended.
        // And in Firefox, the selection isn't properly collapsed.
        // (2017/10/17)
        if (slateDom.Hotkeys.isMoveLineBackward(nativeEvent)) {
          event.preventDefault();
          slate.Transforms.move(editor, {
            unit: 'line',
            reverse: true
          });
          return;
        }
        if (slateDom.Hotkeys.isMoveLineForward(nativeEvent)) {
          event.preventDefault();
          slate.Transforms.move(editor, {
            unit: 'line'
          });
          return;
        }
        if (slateDom.Hotkeys.isExtendLineBackward(nativeEvent)) {
          event.preventDefault();
          slate.Transforms.move(editor, {
            unit: 'line',
            edge: 'focus',
            reverse: true
          });
          return;
        }
        if (slateDom.Hotkeys.isExtendLineForward(nativeEvent)) {
          event.preventDefault();
          slate.Transforms.move(editor, {
            unit: 'line',
            edge: 'focus'
          });
          return;
        }
        // COMPAT: If a void node is selected, or a zero-width text node
        // adjacent to an inline is selected, we need to handle these
        // hotkeys manually because browsers won't be able to skip over
        // the void node with the zero-width space not being an empty
        // string.
        if (slateDom.Hotkeys.isMoveBackward(nativeEvent)) {
          event.preventDefault();
          if (selection && slate.Range.isCollapsed(selection)) {
            slate.Transforms.move(editor, {
              reverse: !isRTL
            });
          } else {
            slate.Transforms.collapse(editor, {
              edge: isRTL ? 'end' : 'start'
            });
          }
          return;
        }
        if (slateDom.Hotkeys.isMoveForward(nativeEvent)) {
          event.preventDefault();
          if (selection && slate.Range.isCollapsed(selection)) {
            slate.Transforms.move(editor, {
              reverse: isRTL
            });
          } else {
            slate.Transforms.collapse(editor, {
              edge: isRTL ? 'start' : 'end'
            });
          }
          return;
        }
        if (slateDom.Hotkeys.isMoveWordBackward(nativeEvent)) {
          event.preventDefault();
          if (selection && slate.Range.isExpanded(selection)) {
            slate.Transforms.collapse(editor, {
              edge: 'focus'
            });
          }
          slate.Transforms.move(editor, {
            unit: 'word',
            reverse: !isRTL
          });
          return;
        }
        if (slateDom.Hotkeys.isMoveWordForward(nativeEvent)) {
          event.preventDefault();
          if (selection && slate.Range.isExpanded(selection)) {
            slate.Transforms.collapse(editor, {
              edge: 'focus'
            });
          }
          slate.Transforms.move(editor, {
            unit: 'word',
            reverse: isRTL
          });
          return;
        }
        // COMPAT: Certain browsers don't support the `beforeinput` event, so we
        // fall back to guessing at the input intention for hotkeys.
        // COMPAT: In iOS, some of these hotkeys are handled in the
        if (!slateDom.HAS_BEFORE_INPUT_SUPPORT) {
          // We don't have a core behavior for these, but they change the
          // DOM if we don't prevent them, so we have to.
          if (slateDom.Hotkeys.isBold(nativeEvent) || slateDom.Hotkeys.isItalic(nativeEvent) || slateDom.Hotkeys.isTransposeCharacter(nativeEvent)) {
            event.preventDefault();
            return;
          }
          if (slateDom.Hotkeys.isSoftBreak(nativeEvent)) {
            event.preventDefault();
            slate.Editor.insertSoftBreak(editor);
            return;
          }
          if (slateDom.Hotkeys.isSplitBlock(nativeEvent)) {
            event.preventDefault();
            slate.Editor.insertBreak(editor);
            return;
          }
          if (slateDom.Hotkeys.isDeleteBackward(nativeEvent)) {
            event.preventDefault();
            if (selection && slate.Range.isExpanded(selection)) {
              slate.Editor.deleteFragment(editor, {
                direction: 'backward'
              });
            } else {
              slate.Editor.deleteBackward(editor);
            }
            return;
          }
          if (slateDom.Hotkeys.isDeleteForward(nativeEvent)) {
            event.preventDefault();
            if (selection && slate.Range.isExpanded(selection)) {
              slate.Editor.deleteFragment(editor, {
                direction: 'forward'
              });
            } else {
              slate.Editor.deleteForward(editor);
            }
            return;
          }
          if (slateDom.Hotkeys.isDeleteLineBackward(nativeEvent)) {
            event.preventDefault();
            if (selection && slate.Range.isExpanded(selection)) {
              slate.Editor.deleteFragment(editor, {
                direction: 'backward'
              });
            } else {
              slate.Editor.deleteBackward(editor, {
                unit: 'line'
              });
            }
            return;
          }
          if (slateDom.Hotkeys.isDeleteLineForward(nativeEvent)) {
            event.preventDefault();
            if (selection && slate.Range.isExpanded(selection)) {
              slate.Editor.deleteFragment(editor, {
                direction: 'forward'
              });
            } else {
              slate.Editor.deleteForward(editor, {
                unit: 'line'
              });
            }
            return;
          }
          if (slateDom.Hotkeys.isDeleteWordBackward(nativeEvent)) {
            event.preventDefault();
            if (selection && slate.Range.isExpanded(selection)) {
              slate.Editor.deleteFragment(editor, {
                direction: 'backward'
              });
            } else {
              slate.Editor.deleteBackward(editor, {
                unit: 'word'
              });
            }
            return;
          }
          if (slateDom.Hotkeys.isDeleteWordForward(nativeEvent)) {
            event.preventDefault();
            if (selection && slate.Range.isExpanded(selection)) {
              slate.Editor.deleteFragment(editor, {
                direction: 'forward'
              });
            } else {
              slate.Editor.deleteForward(editor, {
                unit: 'word'
              });
            }
            return;
          }
        } else {
          if (slateDom.IS_CHROME || slateDom.IS_WEBKIT) {
            // COMPAT: Chrome and Safari support `beforeinput` event but do not fire
            // an event when deleting backwards in a selected void inline node
            if (selection && (slateDom.Hotkeys.isDeleteBackward(nativeEvent) || slateDom.Hotkeys.isDeleteForward(nativeEvent)) && slate.Range.isCollapsed(selection)) {
              var currentNode = slate.Node.parent(editor, selection.anchor.path);
              if (slate.Element.isElement(currentNode) && slate.Editor.isVoid(editor, currentNode) && (slate.Editor.isInline(editor, currentNode) || slate.Editor.isBlock(editor, currentNode))) {
                event.preventDefault();
                slate.Editor.deleteBackward(editor, {
                  unit: 'block'
                });
                return;
              }
            }
          }
        }
      }
    }, [readOnly, editor, attributes.onKeyDown]),
    onPaste: React.useCallback(function (event) {
      if (!readOnly && ReactEditor.hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onPaste)) {
        // COMPAT: Certain browsers don't support the `beforeinput` event, so we
        // fall back to React's `onPaste` here instead.
        // COMPAT: Firefox, Chrome and Safari don't emit `beforeinput` events
        // when "paste without formatting" is used, so fallback. (2020/02/20)
        // COMPAT: Safari InputEvents generated by pasting won't include
        // application/x-slate-fragment items, so use the
        // ClipboardEvent here. (2023/03/15)
        if (!slateDom.HAS_BEFORE_INPUT_SUPPORT || slateDom.isPlainTextOnlyPaste(event.nativeEvent) || slateDom.IS_WEBKIT) {
          event.preventDefault();
          ReactEditor.insertData(editor, event.clipboardData);
        }
      }
    }, [readOnly, editor, attributes.onPaste])
  }), /*#__PURE__*/React.createElement(Children, {
    decorations: decorations,
    node: editor,
    renderElement: renderElement,
    renderPlaceholder: renderPlaceholder,
    renderLeaf: renderLeaf,
    renderText: renderText,
    selection: editor.selection
  }))))));
});
/**
 * The default placeholder element
 */
var DefaultPlaceholder = function DefaultPlaceholder(_ref2) {
  var attributes = _ref2.attributes,
    children = _ref2.children;
  return (
    /*#__PURE__*/
    // COMPAT: Artificially add a line-break to the end on the placeholder element
    // to prevent Android IMEs to pick up its content in autocorrect and to auto-capitalize the first letter
    React.createElement("span", _objectSpread({}, attributes), children, slateDom.IS_ANDROID && /*#__PURE__*/React.createElement("br", null))
  );
};
/**
 * A default memoized decorate function.
 */
var defaultDecorate = function defaultDecorate() {
  return [];
};
/**
 * A default implement to scroll dom range into view.
 */
var defaultScrollSelectionIntoView = function defaultScrollSelectionIntoView(editor, domRange) {
  // This was affecting the selection of multiple blocks and dragging behavior,
  // so enabled only if the selection has been collapsed.
  if (domRange.getBoundingClientRect && (!editor.selection || editor.selection && slate.Range.isCollapsed(editor.selection))) {
    var leafEl = domRange.startContainer.parentElement;
    leafEl.getBoundingClientRect = domRange.getBoundingClientRect.bind(domRange);
    scrollIntoView(leafEl, {
      scrollMode: 'if-needed'
    });
    // @ts-expect-error an unorthodox delete D:
    delete leafEl.getBoundingClientRect;
  }
};
/**
 * Check if an event is overrided by a handler.
 */
var isEventHandled = function isEventHandled(event, handler) {
  if (!handler) {
    return false;
  }
  // The custom event handler may return a boolean to specify whether the event
  // shall be treated as being handled or not.
  var shouldTreatEventAsHandled = handler(event);
  if (shouldTreatEventAsHandled != null) {
    return shouldTreatEventAsHandled;
  }
  return event.isDefaultPrevented() || event.isPropagationStopped();
};
/**
 * Check if the event's target is an input element
 */
var isDOMEventTargetInput = function isDOMEventTargetInput(event) {
  return slateDom.isDOMNode(event.target) && (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement);
};
/**
 * Check if a DOM event is overrided by a handler.
 */
var isDOMEventHandled = function isDOMEventHandled(event, handler) {
  if (!handler) {
    return false;
  }
  // The custom event handler may return a boolean to specify whether the event
  // shall be treated as being handled or not.
  var shouldTreatEventAsHandled = handler(event);
  if (shouldTreatEventAsHandled != null) {
    return shouldTreatEventAsHandled;
  }
  return event.defaultPrevented;
};
var handleNativeHistoryEvents = function handleNativeHistoryEvents(editor, event) {
  var maybeHistoryEditor = editor;
  if (event.inputType === 'historyUndo' && typeof maybeHistoryEditor.undo === 'function') {
    maybeHistoryEditor.undo();
    return;
  }
  if (event.inputType === 'historyRedo' && typeof maybeHistoryEditor.redo === 'function') {
    maybeHistoryEditor.redo();
    return;
  }
};

/**
 * A React context for sharing the `focused` state of the editor.
 */
var FocusedContext = /*#__PURE__*/React.createContext(false);
/**
 * Get the current `focused` state of the editor.
 */
var useFocused = function useFocused() {
  return React.useContext(FocusedContext);
};

function isError(error) {
  return error instanceof Error;
}
/**
 * A React context for sharing the editor selector context in a way to control rerenders
 */
var SlateSelectorContext = /*#__PURE__*/React.createContext({});
var refEquality = function refEquality(a, b) {
  return a === b;
};
/**
 * use redux style selectors to prevent rerendering on every keystroke.
 * Bear in mind rerendering can only prevented if the returned value is a value type or for reference types (e.g. objects and arrays) add a custom equality function.
 *
 * Example:
 * ```
 *  const isSelectionActive = useSlateSelector(editor => Boolean(editor.selection));
 * ```
 */
function useSlateSelector(selector) {
  var equalityFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : refEquality;
  var _useReducer = React.useReducer(function (s) {
      return s + 1;
    }, 0),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    forceRender = _useReducer2[1];
  var context = React.useContext(SlateSelectorContext);
  if (!context) {
    throw new Error("The `useSlateSelector` hook must be used inside the <Slate> component's context.");
  }
  var getSlate = context.getSlate,
    addEventListener = context.addEventListener;
  var latestSubscriptionCallbackError = React.useRef();
  var latestSelector = React.useRef(function () {
    return null;
  });
  var latestSelectedState = React.useRef(null);
  var selectedState;
  try {
    if (selector !== latestSelector.current || latestSubscriptionCallbackError.current) {
      var selectorResult = selector(getSlate());
      if (equalityFn(latestSelectedState.current, selectorResult)) {
        selectedState = latestSelectedState.current;
      } else {
        selectedState = selectorResult;
      }
    } else {
      selectedState = latestSelectedState.current;
    }
  } catch (err) {
    if (latestSubscriptionCallbackError.current && isError(err)) {
      err.message += "\nThe error may be correlated with this previous error:\n".concat(latestSubscriptionCallbackError.current.stack, "\n\n");
    }
    throw err;
  }
  useIsomorphicLayoutEffect(function () {
    latestSelector.current = selector;
    latestSelectedState.current = selectedState;
    latestSubscriptionCallbackError.current = undefined;
  });
  useIsomorphicLayoutEffect(function () {
    function checkForUpdates() {
      try {
        var newSelectedState = latestSelector.current(getSlate());
        if (equalityFn(newSelectedState, latestSelectedState.current)) {
          return;
        }
        latestSelectedState.current = newSelectedState;
      } catch (err) {
        // we ignore all errors here, since when the component
        // is re-rendered, the selectors are called again, and
        // will throw again, if neither props nor store state
        // changed
        if (err instanceof Error) {
          latestSubscriptionCallbackError.current = err;
        } else {
          latestSubscriptionCallbackError.current = new Error(String(err));
        }
      }
      forceRender();
    }
    var unsubscribe = addEventListener(checkForUpdates);
    checkForUpdates();
    return function () {
      return unsubscribe();
    };
  },
  // don't rerender on equalityFn change since we want to be able to define it inline
  [addEventListener, getSlate]);
  return selectedState;
}
/**
 * Create selector context with editor updating on every editor change
 */
function useSelectorContext(editor) {
  var eventListeners = React.useRef([]).current;
  var slateRef = React.useRef({
    editor: editor
  }).current;
  var onChange = React.useCallback(function (editor) {
    slateRef.editor = editor;
    eventListeners.forEach(function (listener) {
      return listener(editor);
    });
  }, [eventListeners, slateRef]);
  var selectorContext = React.useMemo(function () {
    return {
      getSlate: function getSlate() {
        return slateRef.editor;
      },
      addEventListener: function addEventListener(callback) {
        eventListeners.push(callback);
        return function () {
          eventListeners.splice(eventListeners.indexOf(callback), 1);
        };
      }
    };
  }, [eventListeners, slateRef]);
  return {
    selectorContext: selectorContext,
    onChange: onChange
  };
}

var REACT_MAJOR_VERSION = parseInt(React.version.split('.')[0], 10);

var _excluded = ["editor", "children", "onChange", "onSelectionChange", "onValueChange", "initialValue"];
/**
 * A wrapper around the provider to handle `onChange` events, because the editor
 * is a mutable singleton so it won't ever register as "changed" otherwise.
 */
var Slate = function Slate(props) {
  var editor = props.editor,
    children = props.children,
    onChange = props.onChange,
    onSelectionChange = props.onSelectionChange,
    onValueChange = props.onValueChange,
    initialValue = props.initialValue,
    rest = _objectWithoutProperties(props, _excluded);
  var _React$useState = React.useState(function () {
      if (!slate.Node.isNodeList(initialValue)) {
        throw new Error("[Slate] initialValue is invalid! Expected a list of elements but got: ".concat(slate.Scrubber.stringify(initialValue)));
      }
      if (!slate.Editor.isEditor(editor)) {
        throw new Error("[Slate] editor is invalid! You passed: ".concat(slate.Scrubber.stringify(editor)));
      }
      editor.children = initialValue;
      Object.assign(editor, rest);
      return {
        v: 0,
        editor: editor
      };
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    context = _React$useState2[0],
    setContext = _React$useState2[1];
  var _useSelectorContext = useSelectorContext(editor),
    selectorContext = _useSelectorContext.selectorContext,
    handleSelectorChange = _useSelectorContext.onChange;
  var onContextChange = React.useCallback(function (options) {
    var _options$operation;
    if (onChange) {
      onChange(editor.children);
    }
    switch (options === null || options === void 0 || (_options$operation = options.operation) === null || _options$operation === void 0 ? void 0 : _options$operation.type) {
      case 'set_selection':
        onSelectionChange === null || onSelectionChange === void 0 || onSelectionChange(editor.selection);
        break;
      default:
        onValueChange === null || onValueChange === void 0 || onValueChange(editor.children);
    }
    setContext(function (prevContext) {
      return {
        v: prevContext.v + 1,
        editor: editor
      };
    });
    handleSelectorChange(editor);
  }, [editor, handleSelectorChange, onChange, onSelectionChange, onValueChange]);
  React.useEffect(function () {
    slateDom.EDITOR_TO_ON_CHANGE.set(editor, onContextChange);
    return function () {
      slateDom.EDITOR_TO_ON_CHANGE.set(editor, function () {});
    };
  }, [editor, onContextChange]);
  var _useState = React.useState(ReactEditor.isFocused(editor)),
    _useState2 = _slicedToArray(_useState, 2),
    isFocused = _useState2[0],
    setIsFocused = _useState2[1];
  React.useEffect(function () {
    setIsFocused(ReactEditor.isFocused(editor));
  }, [editor]);
  useIsomorphicLayoutEffect(function () {
    var fn = function fn() {
      return setIsFocused(ReactEditor.isFocused(editor));
    };
    if (REACT_MAJOR_VERSION >= 17) {
      // In React >= 17 onFocus and onBlur listen to the focusin and focusout events during the bubbling phase.
      // Therefore in order for <Editable />'s handlers to run first, which is necessary for ReactEditor.isFocused(editor)
      // to return the correct value, we have to listen to the focusin and focusout events without useCapture here.
      document.addEventListener('focusin', fn);
      document.addEventListener('focusout', fn);
      return function () {
        document.removeEventListener('focusin', fn);
        document.removeEventListener('focusout', fn);
      };
    } else {
      document.addEventListener('focus', fn, true);
      document.addEventListener('blur', fn, true);
      return function () {
        document.removeEventListener('focus', fn, true);
        document.removeEventListener('blur', fn, true);
      };
    }
  }, []);
  return /*#__PURE__*/React.createElement(SlateSelectorContext.Provider, {
    value: selectorContext
  }, /*#__PURE__*/React.createElement(SlateContext.Provider, {
    value: context
  }, /*#__PURE__*/React.createElement(EditorContext.Provider, {
    value: context.editor
  }, /*#__PURE__*/React.createElement(FocusedContext.Provider, {
    value: isFocused
  }, children))));
};

/**
 * Get the current editor object from the React context.
 * @deprecated Use useSlateStatic instead.
 */
var useEditor = function useEditor() {
  var editor = React.useContext(EditorContext);
  if (!editor) {
    throw new Error("The `useEditor` hook must be used inside the <Slate> component's context.");
  }
  return editor;
};

/**
 * Get the current slate selection.
 * Only triggers a rerender when the selection actually changes
 */
var useSlateSelection = function useSlateSelection() {
  return useSlateSelector(function (editor) {
    return editor.selection;
  }, isSelectionEqual);
};
var isSelectionEqual = function isSelectionEqual(a, b) {
  if (!a && !b) return true;
  if (!a || !b) return false;
  return slate.Range.equals(a, b);
};

/**
 * `withReact` adds React and DOM specific behaviors to the editor.
 *
 * If you are using TypeScript, you must extend Slate's CustomTypes to use
 * this plugin.
 *
 * See https://docs.slatejs.org/concepts/11-typescript to learn how.
 */
var withReact = function withReact(editor) {
  var clipboardFormatKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'x-slate-fragment';
  var e = editor;
  e = slateDom.withDOM(e, clipboardFormatKey);
  var _e = e,
    onChange = _e.onChange;
  e.onChange = function (options) {
    // COMPAT: React < 18 doesn't batch `setState` hook calls, which means
    // that the children and selection can get out of sync for one render
    // pass. So we have to use this unstable API to ensure it batches them.
    // (2019/12/03)
    // https://github.com/facebook/react/issues/14259#issuecomment-439702367
    var maybeBatchUpdates = REACT_MAJOR_VERSION < 18 ? ReactDOM.unstable_batchedUpdates : function (callback) {
      return callback();
    };
    maybeBatchUpdates(function () {
      onChange(options);
    });
  };
  return e;
};

Object.defineProperty(exports, 'NODE_TO_INDEX', {
	enumerable: true,
	get: function () { return slateDom.NODE_TO_INDEX; }
});
Object.defineProperty(exports, 'NODE_TO_PARENT', {
	enumerable: true,
	get: function () { return slateDom.NODE_TO_PARENT; }
});
exports.DefaultElement = DefaultElement;
exports.DefaultLeaf = DefaultLeaf;
exports.DefaultPlaceholder = DefaultPlaceholder;
exports.DefaultText = DefaultText;
exports.Editable = Editable;
exports.ReactEditor = ReactEditor;
exports.Slate = Slate;
exports.useComposing = useComposing;
exports.useEditor = useEditor;
exports.useFocused = useFocused;
exports.useReadOnly = useReadOnly;
exports.useSelected = useSelected;
exports.useSlate = useSlate;
exports.useSlateSelection = useSlateSelection;
exports.useSlateSelector = useSlateSelector;
exports.useSlateStatic = useSlateStatic;
exports.useSlateWithV = useSlateWithV;
exports.withReact = withReact;
//# sourceMappingURL=index.js.map
