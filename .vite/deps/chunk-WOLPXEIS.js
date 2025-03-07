import {
  ThemeContext,
  _extends,
  init_emotion_is_prop_valid_esm,
  init_emotion_memoize_esm,
  isPropValid,
  memoize,
  murmur2,
  require_jsx_runtime,
  unitlessKeys,
  useInsertionEffectAlwaysWithSyncFallback,
  withEmotionCache
} from "./chunk-IESXOJ55.js";
import {
  require_react
} from "./chunk-W4EHDCLL.js";
import {
  __commonJS,
  __toESM
} from "./chunk-EWTE5DHJ.js";

// node_modules/lodash.mergewith/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.mergewith/index.js"(exports, module) {
    var LARGE_ARRAY_SIZE = 200;
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var HOT_COUNT = 800;
    var HOT_SPAN = 16;
    var MAX_SAFE_INTEGER = 9007199254740991;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var asyncTag = "[object AsyncFunction]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var nullTag = "[object Null]";
    var objectTag = "[object Object]";
    var proxyTag = "[object Proxy]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var undefinedTag = "[object Undefined]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    function overArg(func, transform3) {
      return function(arg) {
        return func(transform3(arg));
      };
    }
    var arrayProto = Array.prototype;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var coreJsData = root["__core-js_shared__"];
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    var nativeObjectToString = objectProto.toString;
    var objectCtorString = funcToString.call(Object);
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    var Buffer = moduleExports ? root.Buffer : void 0;
    var Symbol = root.Symbol;
    var Uint8Array = root.Uint8Array;
    var allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    var objectCreate = Object.create;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var splice = arrayProto.splice;
    var symToStringTag = Symbol ? Symbol.toStringTag : void 0;
    var defineProperty = function() {
      try {
        var func = getNative(Object, "defineProperty");
        func({}, "", {});
        return func;
      } catch (e) {
      }
    }();
    var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
    var nativeMax = Math.max;
    var nativeNow = Date.now;
    var Map2 = getNative(root, "Map");
    var nativeCreate = getNative(Object, "create");
    var baseCreate = /* @__PURE__ */ function() {
      function object() {
      }
      return function(proto) {
        if (!isObject4(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object();
        object.prototype = void 0;
        return result;
      };
    }();
    function Hash(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    function ListCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    function MapCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size2 = data.size;
      data.set(key, value);
      this.size += data.size == size2 ? 0 : 1;
      return this;
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    function stackGet(key) {
      return this.__data__.get(key);
    }
    function stackHas(key) {
      return this.__data__.has(key);
    }
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray3(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
        (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
        isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    function assignMergeValue(object, key, value) {
      if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    function baseAssignValue(object, key, value) {
      if (key == "__proto__" && defineProperty) {
        defineProperty(object, key, {
          "configurable": true,
          "enumerable": true,
          "value": value,
          "writable": true
        });
      } else {
        object[key] = value;
      }
    }
    var baseFor = createBaseFor();
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    function baseIsNative(value) {
      if (!isObject4(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction6(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    function baseKeysIn(object) {
      if (!isObject4(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object), result = [];
      for (var key in object) {
        if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }
    function baseMerge(object, source, srcIndex, customizer, stack) {
      if (object === source) {
        return;
      }
      baseFor(source, function(srcValue, key) {
        stack || (stack = new Stack());
        if (isObject4(srcValue)) {
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        } else {
          var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
          if (newValue === void 0) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      }, keysIn);
    }
    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
      if (stacked) {
        assignMergeValue(object, key, stacked);
        return;
      }
      var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
      var isCommon = newValue === void 0;
      if (isCommon) {
        var isArr = isArray3(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray3(objValue)) {
            newValue = objValue;
          } else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          } else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          } else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          } else {
            newValue = [];
          }
        } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          } else if (!isObject4(objValue) || isFunction6(objValue)) {
            newValue = initCloneObject(srcValue);
          }
        } else {
          isCommon = false;
        }
      }
      if (isCommon) {
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack["delete"](srcValue);
      }
      assignMergeValue(object, key, newValue);
    }
    function baseRest(func, start) {
      return setToString(overRest(func, start, identity), func + "");
    }
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, "toString", {
        "configurable": true,
        "enumerable": false,
        "value": constant(string),
        "writable": true
      });
    };
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
      buffer.copy(result);
      return result;
    }
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }
    function copyArray(source, array) {
      var index = -1, length = source.length;
      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});
      var index = -1, length = props.length;
      while (++index < length) {
        var key = props[index];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
        if (newValue === void 0) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard2 = length > 2 ? sources[2] : void 0;
        customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
        if (guard2 && isIterateeCall(sources[0], sources[1], guard2)) {
          customizer = length < 3 ? void 0 : customizer;
          length = 1;
        }
        object = Object(object);
        while (++index < length) {
          var source = sources[index];
          if (source) {
            assigner(object, source, index, customizer);
          }
        }
        return object;
      });
    }
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    function initCloneObject(object) {
      return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
    }
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    function isIterateeCall(value, index, object) {
      if (!isObject4(object)) {
        return false;
      }
      var type = typeof index;
      if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
        return eq(object[index], value);
      }
      return false;
    }
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    function overRest(func, start, transform3) {
      start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
      return function() {
        var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
        while (++index < length) {
          array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = transform3(array);
        return apply(func, this, otherArgs);
      };
    }
    function safeGet(object, key) {
      if (key === "constructor" && typeof object[key] === "function") {
        return;
      }
      if (key == "__proto__") {
        return;
      }
      return object[key];
    }
    var setToString = shortOut(baseSetToString);
    function shortOut(func) {
      var count = 0, lastCalled = 0;
      return function() {
        var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(void 0, arguments);
      };
    }
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    var isArguments = baseIsArguments(/* @__PURE__ */ function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    var isArray3 = Array.isArray;
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction6(value);
    }
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }
    var isBuffer = nativeIsBuffer || stubFalse;
    function isFunction6(value) {
      if (!isObject4(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject4(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
      return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
    }
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    function toPlainObject(value) {
      return copyObject(value, keysIn(value));
    }
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }
    var mergeWith7 = createAssigner(function(object, source, srcIndex, customizer) {
      baseMerge(object, source, srcIndex, customizer);
    });
    function constant(value) {
      return function() {
        return value;
      };
    }
    function identity(value) {
      return value;
    }
    function stubFalse() {
      return false;
    }
    module.exports = mergeWith7;
  }
});

// node_modules/react-fast-compare/index.js
var require_react_fast_compare = __commonJS({
  "node_modules/react-fast-compare/index.js"(exports, module) {
    var hasElementType = typeof Element !== "undefined";
    var hasMap = typeof Map === "function";
    var hasSet = typeof Set === "function";
    var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
    function equal(a, b) {
      if (a === b) return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor) return false;
        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length) return false;
          for (i = length; i-- !== 0; )
            if (!equal(a[i], b[i])) return false;
          return true;
        }
        var it;
        if (hasMap && a instanceof Map && b instanceof Map) {
          if (a.size !== b.size) return false;
          it = a.entries();
          while (!(i = it.next()).done)
            if (!b.has(i.value[0])) return false;
          it = a.entries();
          while (!(i = it.next()).done)
            if (!equal(i.value[1], b.get(i.value[0]))) return false;
          return true;
        }
        if (hasSet && a instanceof Set && b instanceof Set) {
          if (a.size !== b.size) return false;
          it = a.entries();
          while (!(i = it.next()).done)
            if (!b.has(i.value[0])) return false;
          return true;
        }
        if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
          length = a.length;
          if (length != b.length) return false;
          for (i = length; i-- !== 0; )
            if (a[i] !== b[i]) return false;
          return true;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === "function" && typeof b.valueOf === "function") return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString && typeof a.toString === "function" && typeof b.toString === "function") return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        if (hasElementType && a instanceof Element) return false;
        for (i = length; i-- !== 0; ) {
          if ((keys[i] === "_owner" || keys[i] === "__v" || keys[i] === "__o") && a.$$typeof) {
            continue;
          }
          if (!equal(a[keys[i]], b[keys[i]])) return false;
        }
        return true;
      }
      return a !== a && b !== b;
    }
    module.exports = function isEqual2(a, b) {
      try {
        return equal(a, b);
      } catch (error3) {
        if ((error3.message || "").match(/stack|recursion/i)) {
          console.warn("react-fast-compare cannot handle circular refs");
          return false;
        }
        throw error3;
      }
    };
  }
});

// node_modules/@chakra-ui/react-context/dist/index.mjs
var import_react = __toESM(require_react(), 1);
function getErrorMessage(hook, provider) {
  return `${hook} returned \`undefined\`. Seems you forgot to wrap component within ${provider}`;
}
function createContext(options = {}) {
  const {
    name,
    strict = true,
    hookName = "useContext",
    providerName = "Provider",
    errorMessage,
    defaultValue
  } = options;
  const Context = (0, import_react.createContext)(defaultValue);
  Context.displayName = name;
  function useContext4() {
    var _a7;
    const context = (0, import_react.useContext)(Context);
    if (!context && strict) {
      const error3 = new Error(
        errorMessage != null ? errorMessage : getErrorMessage(hookName, providerName)
      );
      error3.name = "ContextError";
      (_a7 = Error.captureStackTrace) == null ? void 0 : _a7.call(Error, error3, useContext4);
      throw error3;
    }
    return context;
  }
  return [Context.Provider, useContext4, Context];
}

// node_modules/@chakra-ui/system/dist/chunk-UIGT7YZF.mjs
var import_react3 = __toESM(require_react(), 1);
function useTheme() {
  const theme2 = (0, import_react3.useContext)(
    ThemeContext
  );
  if (!theme2) {
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  }
  return theme2;
}

// node_modules/@chakra-ui/shared-utils/dist/index.mjs
var cx = (...classNames2) => classNames2.filter(Boolean).join(" ");
function isDev() {
  return true;
}
function isObject(value) {
  const type = typeof value;
  return value != null && (type === "object" || type === "function") && !Array.isArray(value);
}
var warn = (options) => {
  const { condition, message } = options;
  if (condition && isDev()) {
    console.warn(message);
  }
};
function runIfFn(valueOrFn, ...args) {
  return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}
var isFunction = (value) => typeof value === "function";
var dataAttr = (condition) => condition ? "" : void 0;
var ariaAttr = (condition) => condition ? true : void 0;
function callAllHandlers(...fns) {
  return function func(event) {
    fns.some((fn) => {
      fn == null ? void 0 : fn(event);
      return event == null ? void 0 : event.defaultPrevented;
    });
  };
}

// node_modules/@chakra-ui/system/node_modules/@chakra-ui/styled-system/dist/index.mjs
var import_lodash = __toESM(require_lodash(), 1);
var import_lodash2 = __toESM(require_lodash(), 1);
var import_lodash3 = __toESM(require_lodash(), 1);
var import_lodash4 = __toESM(require_lodash(), 1);
var isImportant = (value) => /!(important)?$/.test(value);
var withoutImportant = (value) => typeof value === "string" ? value.replace(/!(important)?$/, "").trim() : value;
var tokenToCSSVar = (scale, value) => (theme2) => {
  const valueStr = String(value);
  const important = isImportant(valueStr);
  const valueWithoutImportant = withoutImportant(valueStr);
  const key = scale ? `${scale}.${valueWithoutImportant}` : valueWithoutImportant;
  let transformed = isObject(theme2.__cssMap) && key in theme2.__cssMap ? theme2.__cssMap[key].varRef : value;
  transformed = withoutImportant(transformed);
  return important ? `${transformed} !important` : transformed;
};
function createTransform(options) {
  const { scale, transform: transform22, compose: compose3 } = options;
  const fn = (value, theme2) => {
    var _a7;
    const _value = tokenToCSSVar(scale, value)(theme2);
    let result = (_a7 = transform22 == null ? void 0 : transform22(_value, theme2)) != null ? _a7 : _value;
    if (compose3) {
      result = compose3(result, theme2);
    }
    return result;
  };
  return fn;
}
var pipe = (...fns) => (v) => fns.reduce((a, b) => b(a), v);
function toConfig(scale, transform22) {
  return (property) => {
    const result = { property, scale };
    result.transform = createTransform({
      scale,
      transform: transform22
    });
    return result;
  };
}
var getRtl = ({ rtl, ltr }) => (theme2) => theme2.direction === "rtl" ? rtl : ltr;
function logical(options) {
  const { property, scale, transform: transform22 } = options;
  return {
    scale,
    property: getRtl(property),
    transform: scale ? createTransform({
      scale,
      compose: transform22
    }) : transform22
  };
}
var transformTemplate = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function getTransformTemplate() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...transformTemplate
  ].join(" ");
}
function getTransformGpuTemplate() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...transformTemplate
  ].join(" ");
}
var filterTemplate = {
  "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
  filter: [
    "var(--chakra-blur)",
    "var(--chakra-brightness)",
    "var(--chakra-contrast)",
    "var(--chakra-grayscale)",
    "var(--chakra-hue-rotate)",
    "var(--chakra-invert)",
    "var(--chakra-saturate)",
    "var(--chakra-sepia)",
    "var(--chakra-drop-shadow)"
  ].join(" ")
};
var backdropFilterTemplate = {
  backdropFilter: [
    "var(--chakra-backdrop-blur)",
    "var(--chakra-backdrop-brightness)",
    "var(--chakra-backdrop-contrast)",
    "var(--chakra-backdrop-grayscale)",
    "var(--chakra-backdrop-hue-rotate)",
    "var(--chakra-backdrop-invert)",
    "var(--chakra-backdrop-opacity)",
    "var(--chakra-backdrop-saturate)",
    "var(--chakra-backdrop-sepia)"
  ].join(" "),
  "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)"
};
function getRingTemplate(value) {
  return {
    "--chakra-ring-offset-shadow": `var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)`,
    "--chakra-ring-shadow": `var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)`,
    "--chakra-ring-width": value,
    boxShadow: [
      `var(--chakra-ring-offset-shadow)`,
      `var(--chakra-ring-shadow)`,
      `var(--chakra-shadow, 0 0 #0000)`
    ].join(", ")
  };
}
var flexDirectionTemplate = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
};
var directionMap = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
};
var valueSet = new Set(Object.values(directionMap));
var globalSet = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]);
var trimSpace = (str) => str.trim();
function parseGradient(value, theme2) {
  if (value == null || globalSet.has(value))
    return value;
  const prevent = isCSSFunction(value) || globalSet.has(value);
  if (!prevent)
    return `url('${value}')`;
  const regex = /(^[a-z-A-Z]+)\((.*)\)/g;
  const results = regex.exec(value);
  const type = results == null ? void 0 : results[1];
  const values = results == null ? void 0 : results[2];
  if (!type || !values)
    return value;
  const _type = type.includes("-gradient") ? type : `${type}-gradient`;
  const [maybeDirection, ...stops] = values.split(",").map(trimSpace).filter(Boolean);
  if ((stops == null ? void 0 : stops.length) === 0)
    return value;
  const direction2 = maybeDirection in directionMap ? directionMap[maybeDirection] : maybeDirection;
  stops.unshift(direction2);
  const _values = stops.map((stop) => {
    if (valueSet.has(stop))
      return stop;
    const firstStop = stop.indexOf(" ");
    const [_color, _stop] = firstStop !== -1 ? [stop.substr(0, firstStop), stop.substr(firstStop + 1)] : [stop];
    const _stopOrFunc = isCSSFunction(_stop) ? _stop : _stop && _stop.split(" ");
    const key = `colors.${_color}`;
    const color22 = key in theme2.__cssMap ? theme2.__cssMap[key].varRef : _color;
    return _stopOrFunc ? [
      color22,
      ...Array.isArray(_stopOrFunc) ? _stopOrFunc : [_stopOrFunc]
    ].join(" ") : color22;
  });
  return `${_type}(${_values.join(", ")})`;
}
var isCSSFunction = (value) => {
  return typeof value === "string" && value.includes("(") && value.includes(")");
};
var gradientTransform = (value, theme2) => parseGradient(value, theme2 != null ? theme2 : {});
function isCssVar(value) {
  return /^var\(--.+\)$/.test(value);
}
var analyzeCSSValue = (value) => {
  const num = parseFloat(value.toString());
  const unit = value.toString().replace(String(num), "");
  return { unitless: !unit, value: num, unit };
};
var wrap = (str) => (value) => `${str}(${value})`;
var transformFunctions = {
  filter(value) {
    return value !== "auto" ? value : filterTemplate;
  },
  backdropFilter(value) {
    return value !== "auto" ? value : backdropFilterTemplate;
  },
  ring(value) {
    return getRingTemplate(transformFunctions.px(value));
  },
  bgClip(value) {
    return value === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: value };
  },
  transform(value) {
    if (value === "auto")
      return getTransformTemplate();
    if (value === "auto-gpu")
      return getTransformGpuTemplate();
    return value;
  },
  vh(value) {
    return value === "$100vh" ? "var(--chakra-vh)" : value;
  },
  px(value) {
    if (value == null)
      return value;
    const { unitless } = analyzeCSSValue(value);
    return unitless || typeof value === "number" ? `${value}px` : value;
  },
  fraction(value) {
    return !(typeof value === "number") || value > 1 ? value : `${value * 100}%`;
  },
  float(value, theme2) {
    const map = { left: "right", right: "left" };
    return theme2.direction === "rtl" ? map[value] : value;
  },
  degree(value) {
    if (isCssVar(value) || value == null)
      return value;
    const unitless = typeof value === "string" && !value.endsWith("deg");
    return typeof value === "number" || unitless ? `${value}deg` : value;
  },
  gradient: gradientTransform,
  blur: wrap("blur"),
  opacity: wrap("opacity"),
  brightness: wrap("brightness"),
  contrast: wrap("contrast"),
  dropShadow: wrap("drop-shadow"),
  grayscale: wrap("grayscale"),
  hueRotate: (value) => wrap("hue-rotate")(transformFunctions.degree(value)),
  invert: wrap("invert"),
  saturate: wrap("saturate"),
  sepia: wrap("sepia"),
  bgImage(value) {
    if (value == null)
      return value;
    const prevent = isCSSFunction(value) || globalSet.has(value);
    return !prevent ? `url(${value})` : value;
  },
  outline(value) {
    const isNoneOrZero = String(value) === "0" || String(value) === "none";
    return value !== null && isNoneOrZero ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: value };
  },
  flexDirection(value) {
    var _a7;
    const { space: space22, divide: divide22 } = (_a7 = flexDirectionTemplate[value]) != null ? _a7 : {};
    const result = { flexDirection: value };
    if (space22)
      result[space22] = 1;
    if (divide22)
      result[divide22] = 1;
    return result;
  }
};
var t = {
  borderWidths: toConfig("borderWidths"),
  borderStyles: toConfig("borderStyles"),
  colors: toConfig("colors"),
  borders: toConfig("borders"),
  gradients: toConfig("gradients", transformFunctions.gradient),
  radii: toConfig("radii", transformFunctions.px),
  space: toConfig("space", pipe(transformFunctions.vh, transformFunctions.px)),
  spaceT: toConfig("space", pipe(transformFunctions.vh, transformFunctions.px)),
  degreeT(property) {
    return { property, transform: transformFunctions.degree };
  },
  prop(property, scale, transform22) {
    return {
      property,
      scale,
      ...scale && {
        transform: createTransform({ scale, transform: transform22 })
      }
    };
  },
  propT(property, transform22) {
    return { property, transform: transform22 };
  },
  sizes: toConfig("sizes", pipe(transformFunctions.vh, transformFunctions.px)),
  sizesT: toConfig("sizes", pipe(transformFunctions.vh, transformFunctions.fraction)),
  shadows: toConfig("shadows"),
  logical,
  blur: toConfig("blur", transformFunctions.blur)
};
var background = {
  background: t.colors("background"),
  backgroundColor: t.colors("backgroundColor"),
  backgroundImage: t.gradients("backgroundImage"),
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true,
  backgroundAttachment: true,
  backgroundClip: { transform: transformFunctions.bgClip },
  bgSize: t.prop("backgroundSize"),
  bgPosition: t.prop("backgroundPosition"),
  bg: t.colors("background"),
  bgColor: t.colors("backgroundColor"),
  bgPos: t.prop("backgroundPosition"),
  bgRepeat: t.prop("backgroundRepeat"),
  bgAttachment: t.prop("backgroundAttachment"),
  bgGradient: t.gradients("backgroundImage"),
  bgClip: { transform: transformFunctions.bgClip }
};
Object.assign(background, {
  bgImage: background.backgroundImage,
  bgImg: background.backgroundImage
});
var border = {
  border: t.borders("border"),
  borderWidth: t.borderWidths("borderWidth"),
  borderStyle: t.borderStyles("borderStyle"),
  borderColor: t.colors("borderColor"),
  borderRadius: t.radii("borderRadius"),
  borderTop: t.borders("borderTop"),
  borderBlockStart: t.borders("borderBlockStart"),
  borderTopLeftRadius: t.radii("borderTopLeftRadius"),
  borderStartStartRadius: t.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: t.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: t.radii("borderTopRightRadius"),
  borderStartEndRadius: t.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: t.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: t.borders("borderRight"),
  borderInlineEnd: t.borders("borderInlineEnd"),
  borderBottom: t.borders("borderBottom"),
  borderBlockEnd: t.borders("borderBlockEnd"),
  borderBottomLeftRadius: t.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: t.radii("borderBottomRightRadius"),
  borderLeft: t.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: t.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: t.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: t.borders(["borderLeft", "borderRight"]),
  borderInline: t.borders("borderInline"),
  borderY: t.borders(["borderTop", "borderBottom"]),
  borderBlock: t.borders("borderBlock"),
  borderTopWidth: t.borderWidths("borderTopWidth"),
  borderBlockStartWidth: t.borderWidths("borderBlockStartWidth"),
  borderTopColor: t.colors("borderTopColor"),
  borderBlockStartColor: t.colors("borderBlockStartColor"),
  borderTopStyle: t.borderStyles("borderTopStyle"),
  borderBlockStartStyle: t.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: t.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: t.borderWidths("borderBlockEndWidth"),
  borderBottomColor: t.colors("borderBottomColor"),
  borderBlockEndColor: t.colors("borderBlockEndColor"),
  borderBottomStyle: t.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: t.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: t.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: t.borderWidths("borderInlineStartWidth"),
  borderLeftColor: t.colors("borderLeftColor"),
  borderInlineStartColor: t.colors("borderInlineStartColor"),
  borderLeftStyle: t.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: t.borderStyles("borderInlineStartStyle"),
  borderRightWidth: t.borderWidths("borderRightWidth"),
  borderInlineEndWidth: t.borderWidths("borderInlineEndWidth"),
  borderRightColor: t.colors("borderRightColor"),
  borderInlineEndColor: t.colors("borderInlineEndColor"),
  borderRightStyle: t.borderStyles("borderRightStyle"),
  borderInlineEndStyle: t.borderStyles("borderInlineEndStyle"),
  borderTopRadius: t.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: t.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ]),
  borderLeftRadius: t.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: t.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius"
  ])
};
Object.assign(border, {
  rounded: border.borderRadius,
  roundedTop: border.borderTopRadius,
  roundedTopLeft: border.borderTopLeftRadius,
  roundedTopRight: border.borderTopRightRadius,
  roundedTopStart: border.borderStartStartRadius,
  roundedTopEnd: border.borderStartEndRadius,
  roundedBottom: border.borderBottomRadius,
  roundedBottomLeft: border.borderBottomLeftRadius,
  roundedBottomRight: border.borderBottomRightRadius,
  roundedBottomStart: border.borderEndStartRadius,
  roundedBottomEnd: border.borderEndEndRadius,
  roundedLeft: border.borderLeftRadius,
  roundedRight: border.borderRightRadius,
  roundedStart: border.borderInlineStartRadius,
  roundedEnd: border.borderInlineEndRadius,
  borderStart: border.borderInlineStart,
  borderEnd: border.borderInlineEnd,
  borderTopStartRadius: border.borderStartStartRadius,
  borderTopEndRadius: border.borderStartEndRadius,
  borderBottomStartRadius: border.borderEndStartRadius,
  borderBottomEndRadius: border.borderEndEndRadius,
  borderStartRadius: border.borderInlineStartRadius,
  borderEndRadius: border.borderInlineEndRadius,
  borderStartWidth: border.borderInlineStartWidth,
  borderEndWidth: border.borderInlineEndWidth,
  borderStartColor: border.borderInlineStartColor,
  borderEndColor: border.borderInlineEndColor,
  borderStartStyle: border.borderInlineStartStyle,
  borderEndStyle: border.borderInlineEndStyle
});
var color = {
  color: t.colors("color"),
  textColor: t.colors("color"),
  fill: t.colors("fill"),
  stroke: t.colors("stroke")
};
var effect = {
  boxShadow: t.shadows("boxShadow"),
  mixBlendMode: true,
  blendMode: t.prop("mixBlendMode"),
  backgroundBlendMode: true,
  bgBlendMode: t.prop("backgroundBlendMode"),
  opacity: true
};
Object.assign(effect, {
  shadow: effect.boxShadow
});
var filter = {
  filter: { transform: transformFunctions.filter },
  blur: t.blur("--chakra-blur"),
  brightness: t.propT("--chakra-brightness", transformFunctions.brightness),
  contrast: t.propT("--chakra-contrast", transformFunctions.contrast),
  hueRotate: t.propT("--chakra-hue-rotate", transformFunctions.hueRotate),
  invert: t.propT("--chakra-invert", transformFunctions.invert),
  saturate: t.propT("--chakra-saturate", transformFunctions.saturate),
  dropShadow: t.propT("--chakra-drop-shadow", transformFunctions.dropShadow),
  backdropFilter: { transform: transformFunctions.backdropFilter },
  backdropBlur: t.blur("--chakra-backdrop-blur"),
  backdropBrightness: t.propT(
    "--chakra-backdrop-brightness",
    transformFunctions.brightness
  ),
  backdropContrast: t.propT("--chakra-backdrop-contrast", transformFunctions.contrast),
  backdropHueRotate: t.propT(
    "--chakra-backdrop-hue-rotate",
    transformFunctions.hueRotate
  ),
  backdropInvert: t.propT("--chakra-backdrop-invert", transformFunctions.invert),
  backdropSaturate: t.propT("--chakra-backdrop-saturate", transformFunctions.saturate)
};
var flexbox = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: { transform: transformFunctions.flexDirection },
  flex: true,
  flexFlow: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: t.sizes("flexBasis"),
  justifySelf: true,
  alignSelf: true,
  order: true,
  placeItems: true,
  placeContent: true,
  placeSelf: true,
  gap: t.space("gap"),
  rowGap: t.space("rowGap"),
  columnGap: t.space("columnGap")
};
Object.assign(flexbox, {
  flexDir: flexbox.flexDirection
});
var grid = {
  gridGap: t.space("gridGap"),
  gridColumnGap: t.space("gridColumnGap"),
  gridRowGap: t.space("gridRowGap"),
  gridColumn: true,
  gridRow: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridColumnStart: true,
  gridColumnEnd: true,
  gridRowStart: true,
  gridRowEnd: true,
  gridAutoRows: true,
  gridTemplate: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true
};
var interactivity = {
  appearance: true,
  cursor: true,
  resize: true,
  userSelect: true,
  pointerEvents: true,
  outline: { transform: transformFunctions.outline },
  outlineOffset: true,
  outlineColor: t.colors("outlineColor")
};
var layout = {
  width: t.sizesT("width"),
  inlineSize: t.sizesT("inlineSize"),
  height: t.sizes("height"),
  blockSize: t.sizes("blockSize"),
  boxSize: t.sizes(["width", "height"]),
  minWidth: t.sizes("minWidth"),
  minInlineSize: t.sizes("minInlineSize"),
  minHeight: t.sizes("minHeight"),
  minBlockSize: t.sizes("minBlockSize"),
  maxWidth: t.sizes("maxWidth"),
  maxInlineSize: t.sizes("maxInlineSize"),
  maxHeight: t.sizes("maxHeight"),
  maxBlockSize: t.sizes("maxBlockSize"),
  overflow: true,
  overflowX: true,
  overflowY: true,
  overscrollBehavior: true,
  overscrollBehaviorX: true,
  overscrollBehaviorY: true,
  display: true,
  aspectRatio: true,
  hideFrom: {
    scale: "breakpoints",
    transform: (value, theme2) => {
      var _a7, _b5, _c3;
      const breakpoint = (_c3 = (_b5 = (_a7 = theme2.__breakpoints) == null ? void 0 : _a7.get(value)) == null ? void 0 : _b5.minW) != null ? _c3 : value;
      const mq = `@media screen and (min-width: ${breakpoint})`;
      return { [mq]: { display: "none" } };
    }
  },
  hideBelow: {
    scale: "breakpoints",
    transform: (value, theme2) => {
      var _a7, _b5, _c3;
      const breakpoint = (_c3 = (_b5 = (_a7 = theme2.__breakpoints) == null ? void 0 : _a7.get(value)) == null ? void 0 : _b5._minW) != null ? _c3 : value;
      const mq = `@media screen and (max-width: ${breakpoint})`;
      return { [mq]: { display: "none" } };
    }
  },
  verticalAlign: true,
  boxSizing: true,
  boxDecorationBreak: true,
  float: t.propT("float", transformFunctions.float),
  objectFit: true,
  objectPosition: true,
  visibility: true,
  isolation: true
};
Object.assign(layout, {
  w: layout.width,
  h: layout.height,
  minW: layout.minWidth,
  maxW: layout.maxWidth,
  minH: layout.minHeight,
  maxH: layout.maxHeight,
  overscroll: layout.overscrollBehavior,
  overscrollX: layout.overscrollBehaviorX,
  overscrollY: layout.overscrollBehaviorY
});
var list = {
  listStyleType: true,
  listStylePosition: true,
  listStylePos: t.prop("listStylePosition"),
  listStyleImage: true,
  listStyleImg: t.prop("listStyleImage")
};
function get(obj, path, fallback, index) {
  const key = typeof path === "string" ? path.split(".") : [path];
  for (index = 0; index < key.length; index += 1) {
    if (!obj)
      break;
    obj = obj[key[index]];
  }
  return obj === void 0 ? fallback : obj;
}
var memoize2 = (fn) => {
  const cache = /* @__PURE__ */ new WeakMap();
  const memoizedFn = (obj, path, fallback, index) => {
    if (typeof obj === "undefined") {
      return fn(obj, path, fallback);
    }
    if (!cache.has(obj)) {
      cache.set(obj, /* @__PURE__ */ new Map());
    }
    const map = cache.get(obj);
    if (map.has(path)) {
      return map.get(path);
    }
    const value = fn(obj, path, fallback, index);
    map.set(path, value);
    return value;
  };
  return memoizedFn;
};
var memoizedGet = memoize2(get);
var srOnly = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
};
var srFocusable = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
};
var getWithPriority = (theme2, key, styles2) => {
  const result = {};
  const obj = memoizedGet(theme2, key, {});
  for (const prop in obj) {
    const isInStyles = prop in styles2 && styles2[prop] != null;
    if (!isInStyles)
      result[prop] = obj[prop];
  }
  return result;
};
var others = {
  srOnly: {
    transform(value) {
      if (value === true)
        return srOnly;
      if (value === "focusable")
        return srFocusable;
      return {};
    }
  },
  layerStyle: {
    processResult: true,
    transform: (value, theme2, styles2) => getWithPriority(theme2, `layerStyles.${value}`, styles2)
  },
  textStyle: {
    processResult: true,
    transform: (value, theme2, styles2) => getWithPriority(theme2, `textStyles.${value}`, styles2)
  },
  apply: {
    processResult: true,
    transform: (value, theme2, styles2) => getWithPriority(theme2, value, styles2)
  }
};
var position = {
  position: true,
  pos: t.prop("position"),
  zIndex: t.prop("zIndex", "zIndices"),
  inset: t.spaceT("inset"),
  insetX: t.spaceT(["left", "right"]),
  insetInline: t.spaceT("insetInline"),
  insetY: t.spaceT(["top", "bottom"]),
  insetBlock: t.spaceT("insetBlock"),
  top: t.spaceT("top"),
  insetBlockStart: t.spaceT("insetBlockStart"),
  bottom: t.spaceT("bottom"),
  insetBlockEnd: t.spaceT("insetBlockEnd"),
  left: t.spaceT("left"),
  insetInlineStart: t.logical({
    scale: "space",
    property: { ltr: "left", rtl: "right" }
  }),
  right: t.spaceT("right"),
  insetInlineEnd: t.logical({
    scale: "space",
    property: { ltr: "right", rtl: "left" }
  })
};
Object.assign(position, {
  insetStart: position.insetInlineStart,
  insetEnd: position.insetInlineEnd
});
var ring = {
  ring: { transform: transformFunctions.ring },
  ringColor: t.colors("--chakra-ring-color"),
  ringOffset: t.prop("--chakra-ring-offset-width"),
  ringOffsetColor: t.colors("--chakra-ring-offset-color"),
  ringInset: t.prop("--chakra-ring-inset")
};
var space = {
  margin: t.spaceT("margin"),
  marginTop: t.spaceT("marginTop"),
  marginBlockStart: t.spaceT("marginBlockStart"),
  marginRight: t.spaceT("marginRight"),
  marginInlineEnd: t.spaceT("marginInlineEnd"),
  marginBottom: t.spaceT("marginBottom"),
  marginBlockEnd: t.spaceT("marginBlockEnd"),
  marginLeft: t.spaceT("marginLeft"),
  marginInlineStart: t.spaceT("marginInlineStart"),
  marginX: t.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: t.spaceT("marginInline"),
  marginY: t.spaceT(["marginTop", "marginBottom"]),
  marginBlock: t.spaceT("marginBlock"),
  padding: t.space("padding"),
  paddingTop: t.space("paddingTop"),
  paddingBlockStart: t.space("paddingBlockStart"),
  paddingRight: t.space("paddingRight"),
  paddingBottom: t.space("paddingBottom"),
  paddingBlockEnd: t.space("paddingBlockEnd"),
  paddingLeft: t.space("paddingLeft"),
  paddingInlineStart: t.space("paddingInlineStart"),
  paddingInlineEnd: t.space("paddingInlineEnd"),
  paddingX: t.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: t.space("paddingInline"),
  paddingY: t.space(["paddingTop", "paddingBottom"]),
  paddingBlock: t.space("paddingBlock")
};
Object.assign(space, {
  m: space.margin,
  mt: space.marginTop,
  mr: space.marginRight,
  me: space.marginInlineEnd,
  marginEnd: space.marginInlineEnd,
  mb: space.marginBottom,
  ml: space.marginLeft,
  ms: space.marginInlineStart,
  marginStart: space.marginInlineStart,
  mx: space.marginX,
  my: space.marginY,
  p: space.padding,
  pt: space.paddingTop,
  py: space.paddingY,
  px: space.paddingX,
  pb: space.paddingBottom,
  pl: space.paddingLeft,
  ps: space.paddingInlineStart,
  paddingStart: space.paddingInlineStart,
  pr: space.paddingRight,
  pe: space.paddingInlineEnd,
  paddingEnd: space.paddingInlineEnd
});
var textDecoration = {
  textDecorationColor: t.colors("textDecorationColor"),
  textDecoration: true,
  textDecor: { property: "textDecoration" },
  textDecorationLine: true,
  textDecorationStyle: true,
  textDecorationThickness: true,
  textUnderlineOffset: true,
  textShadow: t.shadows("textShadow")
};
var transform = {
  clipPath: true,
  transform: t.propT("transform", transformFunctions.transform),
  transformOrigin: true,
  translateX: t.spaceT("--chakra-translate-x"),
  translateY: t.spaceT("--chakra-translate-y"),
  skewX: t.degreeT("--chakra-skew-x"),
  skewY: t.degreeT("--chakra-skew-y"),
  scaleX: t.prop("--chakra-scale-x"),
  scaleY: t.prop("--chakra-scale-y"),
  scale: t.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: t.degreeT("--chakra-rotate")
};
var transition = {
  transition: true,
  transitionDelay: true,
  animation: true,
  willChange: true,
  transitionDuration: t.prop("transitionDuration", "transition.duration"),
  transitionProperty: t.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: t.prop(
    "transitionTimingFunction",
    "transition.easing"
  )
};
var typography = {
  fontFamily: t.prop("fontFamily", "fonts"),
  fontSize: t.prop("fontSize", "fontSizes", transformFunctions.px),
  fontWeight: t.prop("fontWeight", "fontWeights"),
  lineHeight: t.prop("lineHeight", "lineHeights"),
  letterSpacing: t.prop("letterSpacing", "letterSpacings"),
  textAlign: true,
  fontStyle: true,
  textIndent: true,
  wordBreak: true,
  overflowWrap: true,
  textOverflow: true,
  textTransform: true,
  whiteSpace: true,
  isTruncated: {
    transform(value) {
      if (value === true) {
        return {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        };
      }
    }
  },
  noOfLines: {
    static: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      //@ts-ignore
      WebkitLineClamp: "var(--chakra-line-clamp)"
    },
    property: "--chakra-line-clamp"
  }
};
var scroll = {
  scrollBehavior: true,
  scrollSnapAlign: true,
  scrollSnapStop: true,
  scrollSnapType: true,
  // scroll margin
  scrollMargin: t.spaceT("scrollMargin"),
  scrollMarginTop: t.spaceT("scrollMarginTop"),
  scrollMarginBottom: t.spaceT("scrollMarginBottom"),
  scrollMarginLeft: t.spaceT("scrollMarginLeft"),
  scrollMarginRight: t.spaceT("scrollMarginRight"),
  scrollMarginX: t.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
  scrollMarginY: t.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
  // scroll padding
  scrollPadding: t.spaceT("scrollPadding"),
  scrollPaddingTop: t.spaceT("scrollPaddingTop"),
  scrollPaddingBottom: t.spaceT("scrollPaddingBottom"),
  scrollPaddingLeft: t.spaceT("scrollPaddingLeft"),
  scrollPaddingRight: t.spaceT("scrollPaddingRight"),
  scrollPaddingX: t.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
  scrollPaddingY: t.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
};
function resolveReference(operand) {
  if (isObject(operand) && operand.reference) {
    return operand.reference;
  }
  return String(operand);
}
var toExpression = (operator, ...operands) => operands.map(resolveReference).join(` ${operator} `).replace(/calc/g, "");
var add = (...operands) => `calc(${toExpression("+", ...operands)})`;
var subtract = (...operands) => `calc(${toExpression("-", ...operands)})`;
var multiply = (...operands) => `calc(${toExpression("*", ...operands)})`;
var divide = (...operands) => `calc(${toExpression("/", ...operands)})`;
var negate = (x) => {
  const value = resolveReference(x);
  if (value != null && !Number.isNaN(parseFloat(value))) {
    return String(value).startsWith("-") ? String(value).slice(1) : `-${value}`;
  }
  return multiply(value, -1);
};
var calc = Object.assign(
  (x) => ({
    add: (...operands) => calc(add(x, ...operands)),
    subtract: (...operands) => calc(subtract(x, ...operands)),
    multiply: (...operands) => calc(multiply(x, ...operands)),
    divide: (...operands) => calc(divide(x, ...operands)),
    negate: () => calc(negate(x)),
    toString: () => x.toString()
  }),
  {
    add,
    subtract,
    multiply,
    divide,
    negate
  }
);
function analyzeCSSValue2(value) {
  const num = parseFloat(value.toString());
  const unit = value.toString().replace(String(num), "");
  return { unitless: !unit, value: num, unit };
}
function px(value) {
  if (value == null)
    return value;
  const { unitless } = analyzeCSSValue2(value);
  return unitless || typeof value === "number" ? `${value}px` : value;
}
function toMediaQueryString(min, max) {
  const query = ["@media screen"];
  if (min)
    query.push("and", `(min-width: ${px(min)})`);
  if (max)
    query.push("and", `(max-width: ${px(max)})`);
  return query.join(" ");
}
var state = {
  hover: (str, post) => `${str}:hover ${post}, ${str}[data-hover] ${post}`,
  focus: (str, post) => `${str}:focus ${post}, ${str}[data-focus] ${post}`,
  focusVisible: (str, post) => `${str}:focus-visible ${post}`,
  focusWithin: (str, post) => `${str}:focus-within ${post}`,
  active: (str, post) => `${str}:active ${post}, ${str}[data-active] ${post}`,
  disabled: (str, post) => `${str}:disabled ${post}, ${str}[data-disabled] ${post}`,
  invalid: (str, post) => `${str}:invalid ${post}, ${str}[data-invalid] ${post}`,
  checked: (str, post) => `${str}:checked ${post}, ${str}[data-checked] ${post}`,
  indeterminate: (str, post) => `${str}:indeterminate ${post}, ${str}[aria-checked=mixed] ${post}, ${str}[data-indeterminate] ${post}`,
  readOnly: (str, post) => `${str}:read-only ${post}, ${str}[readonly] ${post}, ${str}[data-read-only] ${post}`,
  expanded: (str, post) => `${str}:read-only ${post}, ${str}[aria-expanded=true] ${post}, ${str}[data-expanded] ${post}`,
  placeholderShown: (str, post) => `${str}:placeholder-shown ${post}`
};
var toGroup = (fn) => merge((v) => fn(v, "&"), "[role=group]", "[data-group]", ".group");
var toPeer = (fn) => merge((v) => fn(v, "~ &"), "[data-peer]", ".peer");
var merge = (fn, ...selectors) => selectors.map(fn).join(", ");
var pseudoSelectors = {
  /**
   * Styles for CSS selector `&:hover`
   */
  _hover: "&:hover, &[data-hover]",
  /**
   * Styles for CSS Selector `&:active`
   */
  _active: "&:active, &[data-active]",
  /**
   * Styles for CSS selector `&:focus`
   *
   */
  _focus: "&:focus, &[data-focus]",
  /**
   * Styles for the highlighted state.
   */
  _highlighted: "&[data-highlighted]",
  /**
   * Styles to apply when a child of this element has received focus
   * - CSS Selector `&:focus-within`
   */
  _focusWithin: "&:focus-within",
  /**
   * Styles to apply when this element has received focus via tabbing
   * - CSS Selector `&:focus-visible`
   */
  _focusVisible: "&:focus-visible, &[data-focus-visible]",
  /**
   * Styles to apply when this element is disabled. The passed styles are applied to these CSS selectors:
   * - `&[aria-disabled=true]`
   * - `&:disabled`
   * - `&[data-disabled]`
   * - `&[disabled]`
   */
  _disabled: "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
  /**
   * Styles for CSS Selector `&:readonly`
   */
  _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
  /**
   * Styles for CSS selector `&::before`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <Box _before={{content:`""` }}/>
   * ```
   */
  _before: "&::before",
  /**
   * Styles for CSS selector `&::after`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <Box _after={{content:`""` }}/>
   * ```
   */
  _after: "&::after",
  /**
   * Styles for CSS selector `&:empty`
   */
  _empty: "&:empty",
  /**
   * Styles to apply when the ARIA attribute `aria-expanded` is `true`
   * - CSS selector `&[aria-expanded=true]`
   */
  _expanded: "&[aria-expanded=true], &[data-expanded]",
  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `true`
   * - CSS selector `&[aria-checked=true]`
   */
  _checked: "&[aria-checked=true], &[data-checked]",
  /**
   * Styles to apply when the ARIA attribute `aria-grabbed` is `true`
   * - CSS selector `&[aria-grabbed=true]`
   */
  _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
  /**
   * Styles for CSS Selector `&[aria-pressed=true]`
   * Typically used to style the current "pressed" state of toggle buttons
   */
  _pressed: "&[aria-pressed=true], &[data-pressed]",
  /**
   * Styles to apply when the ARIA attribute `aria-invalid` is `true`
   * - CSS selector `&[aria-invalid=true]`
   */
  _invalid: "&[aria-invalid=true], &[data-invalid]",
  /**
   * Styles for the valid state
   * - CSS selector `&[data-valid], &[data-state=valid]`
   */
  _valid: "&[data-valid], &[data-state=valid]",
  /**
   * Styles for CSS Selector `&[aria-busy=true]` or `&[data-loading=true]`.
   * Useful for styling loading states
   */
  _loading: "&[data-loading], &[aria-busy=true]",
  /**
   * Styles to apply when the ARIA attribute `aria-selected` is `true`
   *
   * - CSS selector `&[aria-selected=true]`
   */
  _selected: "&[aria-selected=true], &[data-selected]",
  /**
   * Styles for CSS Selector `[hidden=true]`
   */
  _hidden: "&[hidden], &[data-hidden]",
  /**
   * Styles for CSS Selector `&:-webkit-autofill`
   */
  _autofill: "&:-webkit-autofill",
  /**
   * Styles for CSS Selector `&:nth-child(even)`
   */
  _even: "&:nth-of-type(even)",
  /**
   * Styles for CSS Selector `&:nth-child(odd)`
   */
  _odd: "&:nth-of-type(odd)",
  /**
   * Styles for CSS Selector `&:first-of-type`
   */
  _first: "&:first-of-type",
  /**
   * Styles for CSS selector `&::first-letter`
   *
   * NOTE: This selector is only applied for block-level elements and not preceded by an image or table.
   * @example
   * ```jsx
   * <Text _firstLetter={{ textDecoration: 'underline' }}>Once upon a time</Text>
   * ```
   */
  _firstLetter: "&::first-letter",
  /**
   * Styles for CSS Selector `&:last-of-type`
   */
  _last: "&:last-of-type",
  /**
   * Styles for CSS Selector `&:not(:first-of-type)`
   */
  _notFirst: "&:not(:first-of-type)",
  /**
   * Styles for CSS Selector `&:not(:last-of-type)`
   */
  _notLast: "&:not(:last-of-type)",
  /**
   * Styles for CSS Selector `&:visited`
   */
  _visited: "&:visited",
  /**
   * Used to style the active link in a navigation
   * Styles for CSS Selector `&[aria-current=page]`
   */
  _activeLink: "&[aria-current=page]",
  /**
   * Used to style the current step within a process
   * Styles for CSS Selector `&[aria-current=step]`
   */
  _activeStep: "&[aria-current=step]",
  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `mixed`
   * - CSS selector `&[aria-checked=mixed]`
   */
  _indeterminate: "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is hovered
   */
  _groupHover: toGroup(state.hover),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is hovered
   */
  _peerHover: toPeer(state.hover),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused
   */
  _groupFocus: toGroup(state.focus),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is focused
   */
  _peerFocus: toPeer(state.focus),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus
   */
  _groupFocusVisible: toGroup(state.focusVisible),
  /**
   * Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus
   */
  _peerFocusVisible: toPeer(state.focusVisible),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active
   */
  _groupActive: toGroup(state.active),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is active
   */
  _peerActive: toPeer(state.active),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled
   */
  _groupDisabled: toGroup(state.disabled),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is disabled
   */
  _peerDisabled: toPeer(state.disabled),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid
   */
  _groupInvalid: toGroup(state.invalid),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is invalid
   */
  _peerInvalid: toPeer(state.invalid),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked
   */
  _groupChecked: toGroup(state.checked),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is checked
   */
  _peerChecked: toPeer(state.checked),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within
   */
  _groupFocusWithin: toGroup(state.focusWithin),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` has focus within
   */
  _peerFocusWithin: toPeer(state.focusWithin),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown
   */
  _peerPlaceholderShown: toPeer(state.placeholderShown),
  /**
   * Styles for CSS Selector `&::placeholder`.
   */
  _placeholder: "&::placeholder",
  /**
   * Styles for CSS Selector `&:placeholder-shown`.
   */
  _placeholderShown: "&:placeholder-shown",
  /**
   * Styles for CSS Selector `&:fullscreen`.
   */
  _fullScreen: "&:fullscreen",
  /**
   * Styles for CSS Selector `&::selection`
   */
  _selection: "&::selection",
  /**
   * Styles for CSS Selector `[dir=rtl] &`
   * It is applied when a parent element or this element has `dir="rtl"`
   */
  _rtl: "[dir=rtl] &, &[dir=rtl]",
  /**
   * Styles for CSS Selector `[dir=ltr] &`
   * It is applied when a parent element or this element has `dir="ltr"`
   */
  _ltr: "[dir=ltr] &, &[dir=ltr]",
  /**
   * Styles for CSS Selector `@media (prefers-color-scheme: dark)`
   * It is used when the user has requested the system use a light or dark color theme.
   */
  _mediaDark: "@media (prefers-color-scheme: dark)",
  /**
   * Styles for CSS Selector `@media (prefers-reduced-motion: reduce)`
   * It is used when the user has requested the system to reduce the amount of animations.
   */
  _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
  /**
   * Styles for when `data-theme` is applied to any parent of
   * this component or element.
   */
  _dark: ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
  /**
   * Styles for when `data-theme` is applied to any parent of
   * this component or element.
   */
  _light: ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",
  /**
   * Styles for the CSS Selector `&[data-orientation=horizontal]`
   */
  _horizontal: "&[data-orientation=horizontal]",
  /**
   * Styles for the CSS Selector `&[data-orientation=vertical]`
   */
  _vertical: "&[data-orientation=vertical]"
};
var pseudoPropNames = Object.keys(
  pseudoSelectors
);
function omit(object, keysToOmit = []) {
  const clone = Object.assign({}, object);
  for (const key of keysToOmit) {
    if (key in clone) {
      delete clone[key];
    }
  }
  return clone;
}
var systemProps = (0, import_lodash3.default)(
  {},
  background,
  border,
  color,
  flexbox,
  layout,
  filter,
  ring,
  interactivity,
  grid,
  others,
  position,
  effect,
  space,
  scroll,
  typography,
  textDecoration,
  transform,
  list,
  transition
);
var layoutSystem = Object.assign({}, space, layout, flexbox, grid, position);
var layoutPropNames = Object.keys(
  layoutSystem
);
var propNames = [...Object.keys(systemProps), ...pseudoPropNames];
var styleProps = { ...systemProps, ...pseudoSelectors };
var isStyleProp = (prop) => prop in styleProps;
var expandResponsive = (styles2) => (theme2) => {
  if (!theme2.__breakpoints)
    return styles2;
  const { isResponsive, toArrayValue, media: medias } = theme2.__breakpoints;
  const computedStyles = {};
  for (const key in styles2) {
    let value = runIfFn(styles2[key], theme2);
    if (value == null)
      continue;
    value = isObject(value) && isResponsive(value) ? toArrayValue(value) : value;
    if (!Array.isArray(value)) {
      computedStyles[key] = value;
      continue;
    }
    const queries = value.slice(0, medias.length).length;
    for (let index = 0; index < queries; index += 1) {
      const media = medias == null ? void 0 : medias[index];
      if (!media) {
        computedStyles[key] = value[index];
        continue;
      }
      computedStyles[media] = computedStyles[media] || {};
      if (value[index] == null) {
        continue;
      }
      computedStyles[media][key] = value[index];
    }
  }
  return computedStyles;
};
function splitByComma(value) {
  const chunks = [];
  let chunk3 = "";
  let inParens = false;
  for (let i = 0; i < value.length; i++) {
    const char = value[i];
    if (char === "(") {
      inParens = true;
      chunk3 += char;
    } else if (char === ")") {
      inParens = false;
      chunk3 += char;
    } else if (char === "," && !inParens) {
      chunks.push(chunk3);
      chunk3 = "";
    } else {
      chunk3 += char;
    }
  }
  chunk3 = chunk3.trim();
  if (chunk3) {
    chunks.push(chunk3);
  }
  return chunks;
}
function isCssVar2(value) {
  return /^var\(--.+\)$/.test(value);
}
var isCSSVariableTokenValue = (key, value) => key.startsWith("--") && typeof value === "string" && !isCssVar2(value);
var resolveTokenValue = (theme2, value) => {
  var _a7, _b5;
  if (value == null)
    return value;
  const getVar = (val) => {
    var _a24, _b22;
    return (_b22 = (_a24 = theme2.__cssMap) == null ? void 0 : _a24[val]) == null ? void 0 : _b22.varRef;
  };
  const getValue = (val) => {
    var _a24;
    return (_a24 = getVar(val)) != null ? _a24 : val;
  };
  const [tokenValue, fallbackValue] = splitByComma(value);
  value = (_b5 = (_a7 = getVar(tokenValue)) != null ? _a7 : getValue(fallbackValue)) != null ? _b5 : getValue(value);
  return value;
};
function getCss(options) {
  const { configs = {}, pseudos = {}, theme: theme2 } = options;
  const css2 = (stylesOrFn, nested = false) => {
    var _a7, _b5, _c3;
    const _styles = runIfFn(stylesOrFn, theme2);
    const styles2 = expandResponsive(_styles)(theme2);
    let computedStyles = {};
    for (let key in styles2) {
      const valueOrFn = styles2[key];
      let value = runIfFn(valueOrFn, theme2);
      if (key in pseudos) {
        key = pseudos[key];
      }
      if (isCSSVariableTokenValue(key, value)) {
        value = resolveTokenValue(theme2, value);
      }
      let config2 = configs[key];
      if (config2 === true) {
        config2 = { property: key };
      }
      if (isObject(value)) {
        computedStyles[key] = (_a7 = computedStyles[key]) != null ? _a7 : {};
        computedStyles[key] = (0, import_lodash2.default)(
          {},
          computedStyles[key],
          css2(value, true)
        );
        continue;
      }
      let rawValue = (_c3 = (_b5 = config2 == null ? void 0 : config2.transform) == null ? void 0 : _b5.call(config2, value, theme2, _styles)) != null ? _c3 : value;
      rawValue = (config2 == null ? void 0 : config2.processResult) ? css2(rawValue, true) : rawValue;
      const configProperty = runIfFn(config2 == null ? void 0 : config2.property, theme2);
      if (!nested && (config2 == null ? void 0 : config2.static)) {
        const staticStyles = runIfFn(config2.static, theme2);
        computedStyles = (0, import_lodash2.default)({}, computedStyles, staticStyles);
      }
      if (configProperty && Array.isArray(configProperty)) {
        for (const property of configProperty) {
          computedStyles[property] = rawValue;
        }
        continue;
      }
      if (configProperty) {
        if (configProperty === "&" && isObject(rawValue)) {
          computedStyles = (0, import_lodash2.default)({}, computedStyles, rawValue);
        } else {
          computedStyles[configProperty] = rawValue;
        }
        continue;
      }
      if (isObject(rawValue)) {
        computedStyles = (0, import_lodash2.default)({}, computedStyles, rawValue);
        continue;
      }
      computedStyles[key] = rawValue;
    }
    return computedStyles;
  };
  return css2;
}
var css = (styles2) => (theme2) => {
  const cssFn = getCss({
    theme: theme2,
    pseudos: pseudoSelectors,
    configs: systemProps
  });
  return cssFn(styles2);
};
function normalize2(value, toArray) {
  if (Array.isArray(value))
    return value;
  if (isObject(value))
    return toArray(value);
  if (value != null)
    return [value];
}
function getNextIndex(values, i) {
  for (let j = i + 1; j < values.length; j++) {
    if (values[j] != null)
      return j;
  }
  return -1;
}
function createResolver(theme2) {
  const breakpointUtil = theme2.__breakpoints;
  return function resolver(config2, prop, value, props) {
    var _a7, _b5;
    if (!breakpointUtil)
      return;
    const result = {};
    const normalized = normalize2(value, breakpointUtil.toArrayValue);
    if (!normalized)
      return result;
    const len = normalized.length;
    const isSingle = len === 1;
    const isMultipart = !!config2.parts;
    for (let i = 0; i < len; i++) {
      const key = breakpointUtil.details[i];
      const nextKey = breakpointUtil.details[getNextIndex(normalized, i)];
      const query = toMediaQueryString(key.minW, nextKey == null ? void 0 : nextKey._minW);
      const styles2 = runIfFn((_a7 = config2[prop]) == null ? void 0 : _a7[normalized[i]], props);
      if (!styles2)
        continue;
      if (isMultipart) {
        (_b5 = config2.parts) == null ? void 0 : _b5.forEach((part) => {
          (0, import_lodash4.default)(result, {
            [part]: isSingle ? styles2[part] : { [query]: styles2[part] }
          });
        });
        continue;
      }
      if (!isMultipart) {
        if (isSingle)
          (0, import_lodash4.default)(result, styles2);
        else
          result[query] = styles2;
        continue;
      }
      result[query] = styles2;
    }
    return result;
  };
}
function resolveStyleConfig(config2) {
  return (props) => {
    var _a7;
    const { variant, size: size2, theme: theme2 } = props;
    const recipe = createResolver(theme2);
    return (0, import_lodash4.default)(
      {},
      runIfFn((_a7 = config2.baseStyle) != null ? _a7 : {}, props),
      recipe(config2, "sizes", size2, props),
      recipe(config2, "variants", variant, props)
    );
  };
}
function omitThemingProps(props) {
  return omit(props, ["styleConfig", "size", "variant", "colorScheme"]);
}

// node_modules/@chakra-ui/color-mode/dist/chunk-UQDW7KKV.mjs
var import_react4 = __toESM(require_react(), 1);
var ColorModeContext = (0, import_react4.createContext)({});
ColorModeContext.displayName = "ColorModeContext";
function useColorMode() {
  const context = (0, import_react4.useContext)(ColorModeContext);
  if (context === void 0) {
    throw new Error("useColorMode must be used within a ColorModeProvider");
  }
  return context;
}

// node_modules/@chakra-ui/color-mode/dist/chunk-X7ZBZ4KW.mjs
var classNames = {
  light: "chakra-ui-light",
  dark: "chakra-ui-dark"
};
function getColorModeUtils(options = {}) {
  const { preventTransition = true } = options;
  const utils = {
    setDataset: (value) => {
      const cleanup = preventTransition ? utils.preventTransition() : void 0;
      document.documentElement.dataset.theme = value;
      document.documentElement.style.colorScheme = value;
      cleanup == null ? void 0 : cleanup();
    },
    setClassName(dark) {
      document.body.classList.add(dark ? classNames.dark : classNames.light);
      document.body.classList.remove(dark ? classNames.light : classNames.dark);
    },
    query() {
      return window.matchMedia("(prefers-color-scheme: dark)");
    },
    getSystemTheme(fallback) {
      var _a7;
      const dark = (_a7 = utils.query().matches) != null ? _a7 : fallback === "dark";
      return dark ? "dark" : "light";
    },
    addListener(fn) {
      const mql = utils.query();
      const listener = (e) => {
        fn(e.matches ? "dark" : "light");
      };
      if (typeof mql.addListener === "function")
        mql.addListener(listener);
      else
        mql.addEventListener("change", listener);
      return () => {
        if (typeof mql.removeListener === "function")
          mql.removeListener(listener);
        else
          mql.removeEventListener("change", listener);
      };
    },
    preventTransition() {
      const css2 = document.createElement("style");
      css2.appendChild(
        document.createTextNode(
          `*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`
        )
      );
      document.head.appendChild(css2);
      return () => {
        ;
        (() => window.getComputedStyle(document.body))();
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            document.head.removeChild(css2);
          });
        });
      };
    }
  };
  return utils;
}

// node_modules/@chakra-ui/color-mode/dist/chunk-44OWBZ77.mjs
var STORAGE_KEY = "chakra-ui-color-mode";
function createLocalStorageManager(key) {
  return {
    ssr: false,
    type: "localStorage",
    get(init) {
      if (!(globalThis == null ? void 0 : globalThis.document))
        return init;
      let value;
      try {
        value = localStorage.getItem(key) || init;
      } catch (e) {
      }
      return value || init;
    },
    set(value) {
      try {
        localStorage.setItem(key, value);
      } catch (e) {
      }
    }
  };
}
var localStorageManager = createLocalStorageManager(STORAGE_KEY);
function parseCookie(cookie, key) {
  const match = cookie.match(new RegExp(`(^| )${key}=([^;]+)`));
  return match == null ? void 0 : match[2];
}
function createCookieStorageManager(key, cookie) {
  return {
    ssr: !!cookie,
    type: "cookie",
    get(init) {
      if (cookie)
        return parseCookie(cookie, key);
      if (!(globalThis == null ? void 0 : globalThis.document))
        return init;
      return parseCookie(document.cookie, key) || init;
    },
    set(value) {
      document.cookie = `${key}=${value}; max-age=31536000; path=/`;
    }
  };
}
var cookieStorageManager = createCookieStorageManager(STORAGE_KEY);

// node_modules/@chakra-ui/react-use-safe-layout-effect/dist/index.mjs
var import_react5 = __toESM(require_react(), 1);
var useSafeLayoutEffect = Boolean(globalThis == null ? void 0 : globalThis.document) ? import_react5.useLayoutEffect : import_react5.useEffect;

// node_modules/@chakra-ui/color-mode/dist/chunk-AMBGAKG2.mjs
var import_react6 = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var noop = () => {
};
function getTheme(manager, fallback) {
  return manager.type === "cookie" && manager.ssr ? manager.get(fallback) : fallback;
}
function ColorModeProvider(props) {
  const {
    value,
    children,
    options: {
      useSystemColorMode,
      initialColorMode,
      disableTransitionOnChange
    } = {},
    colorModeManager = localStorageManager
  } = props;
  const defaultColorMode = initialColorMode === "dark" ? "dark" : "light";
  const [colorMode, rawSetColorMode] = (0, import_react6.useState)(
    () => getTheme(colorModeManager, defaultColorMode)
  );
  const [resolvedColorMode, setResolvedColorMode] = (0, import_react6.useState)(
    () => getTheme(colorModeManager)
  );
  const { getSystemTheme, setClassName, setDataset, addListener } = (0, import_react6.useMemo)(
    () => getColorModeUtils({ preventTransition: disableTransitionOnChange }),
    [disableTransitionOnChange]
  );
  const resolvedValue = initialColorMode === "system" && !colorMode ? resolvedColorMode : colorMode;
  const setColorMode = (0, import_react6.useCallback)(
    (value2) => {
      const resolved = value2 === "system" ? getSystemTheme() : value2;
      rawSetColorMode(resolved);
      setClassName(resolved === "dark");
      setDataset(resolved);
      colorModeManager.set(resolved);
    },
    [colorModeManager, getSystemTheme, setClassName, setDataset]
  );
  useSafeLayoutEffect(() => {
    if (initialColorMode === "system") {
      setResolvedColorMode(getSystemTheme());
    }
  }, []);
  (0, import_react6.useEffect)(() => {
    const managerValue = colorModeManager.get();
    if (managerValue) {
      setColorMode(managerValue);
      return;
    }
    if (initialColorMode === "system") {
      setColorMode("system");
      return;
    }
    setColorMode(defaultColorMode);
  }, [colorModeManager, defaultColorMode, initialColorMode, setColorMode]);
  const toggleColorMode = (0, import_react6.useCallback)(() => {
    setColorMode(resolvedValue === "dark" ? "light" : "dark");
  }, [resolvedValue, setColorMode]);
  (0, import_react6.useEffect)(() => {
    if (!useSystemColorMode)
      return;
    return addListener(setColorMode);
  }, [useSystemColorMode, addListener, setColorMode]);
  const context = (0, import_react6.useMemo)(
    () => ({
      colorMode: value != null ? value : resolvedValue,
      toggleColorMode: value ? noop : toggleColorMode,
      setColorMode: value ? noop : setColorMode,
      forced: value !== void 0
    }),
    [resolvedValue, toggleColorMode, setColorMode, value]
  );
  return (0, import_jsx_runtime.jsx)(ColorModeContext.Provider, { value: context, children });
}
ColorModeProvider.displayName = "ColorModeProvider";
function DarkMode(props) {
  const context = (0, import_react6.useMemo)(
    () => ({
      colorMode: "dark",
      toggleColorMode: noop,
      setColorMode: noop,
      forced: true
    }),
    []
  );
  return (0, import_jsx_runtime.jsx)(ColorModeContext.Provider, { value: context, ...props });
}
DarkMode.displayName = "DarkMode";
function LightMode(props) {
  const context = (0, import_react6.useMemo)(
    () => ({
      colorMode: "light",
      toggleColorMode: noop,
      setColorMode: noop,
      forced: true
    }),
    []
  );
  return (0, import_jsx_runtime.jsx)(ColorModeContext.Provider, { value: context, ...props });
}
LightMode.displayName = "LightMode";

// node_modules/@chakra-ui/color-mode/dist/chunk-WP4V2BSL.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);

// node_modules/@chakra-ui/system/dist/chunk-7FWEOSAE.mjs
function useChakra() {
  const colorModeResult = useColorMode();
  const theme2 = useTheme();
  return { ...colorModeResult, theme: theme2 };
}

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-P56GPN75.mjs
var requiredChakraThemeKeys = [
  "borders",
  "breakpoints",
  "colors",
  "components",
  "config",
  "direction",
  "fonts",
  "fontSizes",
  "fontWeights",
  "letterSpacings",
  "lineHeights",
  "radii",
  "shadows",
  "sizes",
  "space",
  "styles",
  "transition",
  "zIndices"
];
function isChakraTheme(unit) {
  if (!isObject(unit)) {
    return false;
  }
  return requiredChakraThemeKeys.every(
    (propertyName) => Object.prototype.hasOwnProperty.call(unit, propertyName)
  );
}

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-SIH73G3H.mjs
var transitionProperty = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
};
var transitionTimingFunction = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
};
var transitionDuration = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
};
var transition2 = {
  property: transitionProperty,
  easing: transitionTimingFunction,
  duration: transitionDuration
};
var transition_default = transition2;

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-45VJLTIL.mjs
var zIndices = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1e3,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800
};
var z_index_default = zIndices;

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-B75T2J64.mjs
var borders = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
};
var borders_default = borders;

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-TXLFBUTF.mjs
var breakpoints = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
};
var breakpoints_default = breakpoints;

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-E47HH2QS.mjs
var colors = {
  transparent: "transparent",
  current: "currentColor",
  black: "#000000",
  white: "#FFFFFF",
  whiteAlpha: {
    50: "rgba(255, 255, 255, 0.04)",
    100: "rgba(255, 255, 255, 0.06)",
    200: "rgba(255, 255, 255, 0.08)",
    300: "rgba(255, 255, 255, 0.16)",
    400: "rgba(255, 255, 255, 0.24)",
    500: "rgba(255, 255, 255, 0.36)",
    600: "rgba(255, 255, 255, 0.48)",
    700: "rgba(255, 255, 255, 0.64)",
    800: "rgba(255, 255, 255, 0.80)",
    900: "rgba(255, 255, 255, 0.92)"
  },
  blackAlpha: {
    50: "rgba(0, 0, 0, 0.04)",
    100: "rgba(0, 0, 0, 0.06)",
    200: "rgba(0, 0, 0, 0.08)",
    300: "rgba(0, 0, 0, 0.16)",
    400: "rgba(0, 0, 0, 0.24)",
    500: "rgba(0, 0, 0, 0.36)",
    600: "rgba(0, 0, 0, 0.48)",
    700: "rgba(0, 0, 0, 0.64)",
    800: "rgba(0, 0, 0, 0.80)",
    900: "rgba(0, 0, 0, 0.92)"
  },
  gray: {
    50: "#F7FAFC",
    100: "#EDF2F7",
    200: "#E2E8F0",
    300: "#CBD5E0",
    400: "#A0AEC0",
    500: "#718096",
    600: "#4A5568",
    700: "#2D3748",
    800: "#1A202C",
    900: "#171923"
  },
  red: {
    50: "#FFF5F5",
    100: "#FED7D7",
    200: "#FEB2B2",
    300: "#FC8181",
    400: "#F56565",
    500: "#E53E3E",
    600: "#C53030",
    700: "#9B2C2C",
    800: "#822727",
    900: "#63171B"
  },
  orange: {
    50: "#FFFAF0",
    100: "#FEEBC8",
    200: "#FBD38D",
    300: "#F6AD55",
    400: "#ED8936",
    500: "#DD6B20",
    600: "#C05621",
    700: "#9C4221",
    800: "#7B341E",
    900: "#652B19"
  },
  yellow: {
    50: "#FFFFF0",
    100: "#FEFCBF",
    200: "#FAF089",
    300: "#F6E05E",
    400: "#ECC94B",
    500: "#D69E2E",
    600: "#B7791F",
    700: "#975A16",
    800: "#744210",
    900: "#5F370E"
  },
  green: {
    50: "#F0FFF4",
    100: "#C6F6D5",
    200: "#9AE6B4",
    300: "#68D391",
    400: "#48BB78",
    500: "#38A169",
    600: "#2F855A",
    700: "#276749",
    800: "#22543D",
    900: "#1C4532"
  },
  teal: {
    50: "#E6FFFA",
    100: "#B2F5EA",
    200: "#81E6D9",
    300: "#4FD1C5",
    400: "#38B2AC",
    500: "#319795",
    600: "#2C7A7B",
    700: "#285E61",
    800: "#234E52",
    900: "#1D4044"
  },
  blue: {
    50: "#ebf8ff",
    100: "#bee3f8",
    200: "#90cdf4",
    300: "#63b3ed",
    400: "#4299e1",
    500: "#3182ce",
    600: "#2b6cb0",
    700: "#2c5282",
    800: "#2a4365",
    900: "#1A365D"
  },
  cyan: {
    50: "#EDFDFD",
    100: "#C4F1F9",
    200: "#9DECF9",
    300: "#76E4F7",
    400: "#0BC5EA",
    500: "#00B5D8",
    600: "#00A3C4",
    700: "#0987A0",
    800: "#086F83",
    900: "#065666"
  },
  purple: {
    50: "#FAF5FF",
    100: "#E9D8FD",
    200: "#D6BCFA",
    300: "#B794F4",
    400: "#9F7AEA",
    500: "#805AD5",
    600: "#6B46C1",
    700: "#553C9A",
    800: "#44337A",
    900: "#322659"
  },
  pink: {
    50: "#FFF5F7",
    100: "#FED7E2",
    200: "#FBB6CE",
    300: "#F687B3",
    400: "#ED64A6",
    500: "#D53F8C",
    600: "#B83280",
    700: "#97266D",
    800: "#702459",
    900: "#521B41"
  },
  linkedin: {
    50: "#E8F4F9",
    100: "#CFEDFB",
    200: "#9BDAF3",
    300: "#68C7EC",
    400: "#34B3E4",
    500: "#00A0DC",
    600: "#008CC9",
    700: "#0077B5",
    800: "#005E93",
    900: "#004471"
  },
  facebook: {
    50: "#E8F4F9",
    100: "#D9DEE9",
    200: "#B7C2DA",
    300: "#6482C0",
    400: "#4267B2",
    500: "#385898",
    600: "#314E89",
    700: "#29487D",
    800: "#223B67",
    900: "#1E355B"
  },
  messenger: {
    50: "#D0E6FF",
    100: "#B9DAFF",
    200: "#A2CDFF",
    300: "#7AB8FF",
    400: "#2E90FF",
    500: "#0078FF",
    600: "#0063D1",
    700: "#0052AC",
    800: "#003C7E",
    900: "#002C5C"
  },
  whatsapp: {
    50: "#dffeec",
    100: "#b9f5d0",
    200: "#90edb3",
    300: "#65e495",
    400: "#3cdd78",
    500: "#22c35e",
    600: "#179848",
    700: "#0c6c33",
    800: "#01421c",
    900: "#001803"
  },
  twitter: {
    50: "#E5F4FD",
    100: "#C8E9FB",
    200: "#A8DCFA",
    300: "#83CDF7",
    400: "#57BBF5",
    500: "#1DA1F2",
    600: "#1A94DA",
    700: "#1681BF",
    800: "#136B9E",
    900: "#0D4D71"
  },
  telegram: {
    50: "#E3F2F9",
    100: "#C5E4F3",
    200: "#A2D4EC",
    300: "#7AC1E4",
    400: "#47A9DA",
    500: "#0088CC",
    600: "#007AB8",
    700: "#006BA1",
    800: "#005885",
    900: "#003F5E"
  }
};
var colors_default = colors;

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-VIVTPWHP.mjs
var radii = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
};
var radius_default = radii;

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-IZUFFCXS.mjs
var shadows = {
  xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
  inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
  none: "none",
  "dark-lg": "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"
};
var shadows_default = shadows;

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-HQ6WXDYV.mjs
var blur = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
};
var blur_default = blur;

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-6XA2KDUD.mjs
var typography2 = {
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    "3": ".75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem"
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  fonts: {
    heading: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`
  },
  fontSizes: {
    "3xs": "0.45rem",
    "2xs": "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem"
  }
};
var typography_default = typography2;

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-V7WMN6TQ.mjs
var spacing = {
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem"
};

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-NJCYBKFH.mjs
var largeSizes = {
  max: "max-content",
  min: "min-content",
  full: "100%",
  "3xs": "14rem",
  "2xs": "16rem",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
  "8xl": "90rem",
  prose: "60ch"
};
var container = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
};
var sizes = {
  ...spacing,
  ...largeSizes,
  container
};
var sizes_default = sizes;

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-3WO5B3NB.mjs
var foundations = {
  breakpoints: breakpoints_default,
  zIndices: z_index_default,
  radii: radius_default,
  blur: blur_default,
  colors: colors_default,
  ...typography_default,
  sizes: sizes_default,
  shadows: shadows_default,
  space: spacing,
  borders: borders_default,
  transition: transition_default
};

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/styled-system/dist/index.mjs
var import_lodash5 = __toESM(require_lodash(), 1);
var import_lodash6 = __toESM(require_lodash(), 1);
var import_lodash7 = __toESM(require_lodash(), 1);
var import_lodash8 = __toESM(require_lodash(), 1);
var isImportant2 = (value) => /!(important)?$/.test(value);
var withoutImportant2 = (value) => typeof value === "string" ? value.replace(/!(important)?$/, "").trim() : value;
var tokenToCSSVar2 = (scale, value) => (theme2) => {
  const valueStr = String(value);
  const important = isImportant2(valueStr);
  const valueWithoutImportant = withoutImportant2(valueStr);
  const key = scale ? `${scale}.${valueWithoutImportant}` : valueWithoutImportant;
  let transformed = isObject(theme2.__cssMap) && key in theme2.__cssMap ? theme2.__cssMap[key].varRef : value;
  transformed = withoutImportant2(transformed);
  return important ? `${transformed} !important` : transformed;
};
function createTransform2(options) {
  const { scale, transform: transform22, compose: compose3 } = options;
  const fn = (value, theme2) => {
    var _a7;
    const _value = tokenToCSSVar2(scale, value)(theme2);
    let result = (_a7 = transform22 == null ? void 0 : transform22(_value, theme2)) != null ? _a7 : _value;
    if (compose3) {
      result = compose3(result, theme2);
    }
    return result;
  };
  return fn;
}
var pipe2 = (...fns) => (v) => fns.reduce((a, b) => b(a), v);
function toConfig2(scale, transform22) {
  return (property) => {
    const result = { property, scale };
    result.transform = createTransform2({
      scale,
      transform: transform22
    });
    return result;
  };
}
var getRtl2 = ({ rtl, ltr }) => (theme2) => theme2.direction === "rtl" ? rtl : ltr;
function logical2(options) {
  const { property, scale, transform: transform22 } = options;
  return {
    scale,
    property: getRtl2(property),
    transform: scale ? createTransform2({
      scale,
      compose: transform22
    }) : transform22
  };
}
var transformTemplate2 = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function getTransformTemplate2() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...transformTemplate2
  ].join(" ");
}
function getTransformGpuTemplate2() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...transformTemplate2
  ].join(" ");
}
var filterTemplate2 = {
  "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
  filter: [
    "var(--chakra-blur)",
    "var(--chakra-brightness)",
    "var(--chakra-contrast)",
    "var(--chakra-grayscale)",
    "var(--chakra-hue-rotate)",
    "var(--chakra-invert)",
    "var(--chakra-saturate)",
    "var(--chakra-sepia)",
    "var(--chakra-drop-shadow)"
  ].join(" ")
};
var backdropFilterTemplate2 = {
  backdropFilter: [
    "var(--chakra-backdrop-blur)",
    "var(--chakra-backdrop-brightness)",
    "var(--chakra-backdrop-contrast)",
    "var(--chakra-backdrop-grayscale)",
    "var(--chakra-backdrop-hue-rotate)",
    "var(--chakra-backdrop-invert)",
    "var(--chakra-backdrop-opacity)",
    "var(--chakra-backdrop-saturate)",
    "var(--chakra-backdrop-sepia)"
  ].join(" "),
  "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)"
};
function getRingTemplate2(value) {
  return {
    "--chakra-ring-offset-shadow": `var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)`,
    "--chakra-ring-shadow": `var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)`,
    "--chakra-ring-width": value,
    boxShadow: [
      `var(--chakra-ring-offset-shadow)`,
      `var(--chakra-ring-shadow)`,
      `var(--chakra-shadow, 0 0 #0000)`
    ].join(", ")
  };
}
var flexDirectionTemplate2 = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
};
var directionMap2 = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
};
var valueSet2 = new Set(Object.values(directionMap2));
var globalSet2 = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]);
var trimSpace2 = (str) => str.trim();
function parseGradient2(value, theme2) {
  if (value == null || globalSet2.has(value))
    return value;
  const prevent = isCSSFunction2(value) || globalSet2.has(value);
  if (!prevent)
    return `url('${value}')`;
  const regex = /(^[a-z-A-Z]+)\((.*)\)/g;
  const results = regex.exec(value);
  const type = results == null ? void 0 : results[1];
  const values = results == null ? void 0 : results[2];
  if (!type || !values)
    return value;
  const _type = type.includes("-gradient") ? type : `${type}-gradient`;
  const [maybeDirection, ...stops] = values.split(",").map(trimSpace2).filter(Boolean);
  if ((stops == null ? void 0 : stops.length) === 0)
    return value;
  const direction2 = maybeDirection in directionMap2 ? directionMap2[maybeDirection] : maybeDirection;
  stops.unshift(direction2);
  const _values = stops.map((stop) => {
    if (valueSet2.has(stop))
      return stop;
    const firstStop = stop.indexOf(" ");
    const [_color, _stop] = firstStop !== -1 ? [stop.substr(0, firstStop), stop.substr(firstStop + 1)] : [stop];
    const _stopOrFunc = isCSSFunction2(_stop) ? _stop : _stop && _stop.split(" ");
    const key = `colors.${_color}`;
    const color22 = key in theme2.__cssMap ? theme2.__cssMap[key].varRef : _color;
    return _stopOrFunc ? [
      color22,
      ...Array.isArray(_stopOrFunc) ? _stopOrFunc : [_stopOrFunc]
    ].join(" ") : color22;
  });
  return `${_type}(${_values.join(", ")})`;
}
var isCSSFunction2 = (value) => {
  return typeof value === "string" && value.includes("(") && value.includes(")");
};
var gradientTransform2 = (value, theme2) => parseGradient2(value, theme2 != null ? theme2 : {});
function isCssVar3(value) {
  return /^var\(--.+\)$/.test(value);
}
var analyzeCSSValue3 = (value) => {
  const num = parseFloat(value.toString());
  const unit = value.toString().replace(String(num), "");
  return { unitless: !unit, value: num, unit };
};
var wrap2 = (str) => (value) => `${str}(${value})`;
var transformFunctions2 = {
  filter(value) {
    return value !== "auto" ? value : filterTemplate2;
  },
  backdropFilter(value) {
    return value !== "auto" ? value : backdropFilterTemplate2;
  },
  ring(value) {
    return getRingTemplate2(transformFunctions2.px(value));
  },
  bgClip(value) {
    return value === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: value };
  },
  transform(value) {
    if (value === "auto")
      return getTransformTemplate2();
    if (value === "auto-gpu")
      return getTransformGpuTemplate2();
    return value;
  },
  vh(value) {
    return value === "$100vh" ? "var(--chakra-vh)" : value;
  },
  px(value) {
    if (value == null)
      return value;
    const { unitless } = analyzeCSSValue3(value);
    return unitless || typeof value === "number" ? `${value}px` : value;
  },
  fraction(value) {
    return !(typeof value === "number") || value > 1 ? value : `${value * 100}%`;
  },
  float(value, theme2) {
    const map = { left: "right", right: "left" };
    return theme2.direction === "rtl" ? map[value] : value;
  },
  degree(value) {
    if (isCssVar3(value) || value == null)
      return value;
    const unitless = typeof value === "string" && !value.endsWith("deg");
    return typeof value === "number" || unitless ? `${value}deg` : value;
  },
  gradient: gradientTransform2,
  blur: wrap2("blur"),
  opacity: wrap2("opacity"),
  brightness: wrap2("brightness"),
  contrast: wrap2("contrast"),
  dropShadow: wrap2("drop-shadow"),
  grayscale: wrap2("grayscale"),
  hueRotate: (value) => wrap2("hue-rotate")(transformFunctions2.degree(value)),
  invert: wrap2("invert"),
  saturate: wrap2("saturate"),
  sepia: wrap2("sepia"),
  bgImage(value) {
    if (value == null)
      return value;
    const prevent = isCSSFunction2(value) || globalSet2.has(value);
    return !prevent ? `url(${value})` : value;
  },
  outline(value) {
    const isNoneOrZero = String(value) === "0" || String(value) === "none";
    return value !== null && isNoneOrZero ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: value };
  },
  flexDirection(value) {
    var _a7;
    const { space: space22, divide: divide22 } = (_a7 = flexDirectionTemplate2[value]) != null ? _a7 : {};
    const result = { flexDirection: value };
    if (space22)
      result[space22] = 1;
    if (divide22)
      result[divide22] = 1;
    return result;
  }
};
var t2 = {
  borderWidths: toConfig2("borderWidths"),
  borderStyles: toConfig2("borderStyles"),
  colors: toConfig2("colors"),
  borders: toConfig2("borders"),
  gradients: toConfig2("gradients", transformFunctions2.gradient),
  radii: toConfig2("radii", transformFunctions2.px),
  space: toConfig2("space", pipe2(transformFunctions2.vh, transformFunctions2.px)),
  spaceT: toConfig2("space", pipe2(transformFunctions2.vh, transformFunctions2.px)),
  degreeT(property) {
    return { property, transform: transformFunctions2.degree };
  },
  prop(property, scale, transform22) {
    return {
      property,
      scale,
      ...scale && {
        transform: createTransform2({ scale, transform: transform22 })
      }
    };
  },
  propT(property, transform22) {
    return { property, transform: transform22 };
  },
  sizes: toConfig2("sizes", pipe2(transformFunctions2.vh, transformFunctions2.px)),
  sizesT: toConfig2("sizes", pipe2(transformFunctions2.vh, transformFunctions2.fraction)),
  shadows: toConfig2("shadows"),
  logical: logical2,
  blur: toConfig2("blur", transformFunctions2.blur)
};
var background2 = {
  background: t2.colors("background"),
  backgroundColor: t2.colors("backgroundColor"),
  backgroundImage: t2.gradients("backgroundImage"),
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true,
  backgroundAttachment: true,
  backgroundClip: { transform: transformFunctions2.bgClip },
  bgSize: t2.prop("backgroundSize"),
  bgPosition: t2.prop("backgroundPosition"),
  bg: t2.colors("background"),
  bgColor: t2.colors("backgroundColor"),
  bgPos: t2.prop("backgroundPosition"),
  bgRepeat: t2.prop("backgroundRepeat"),
  bgAttachment: t2.prop("backgroundAttachment"),
  bgGradient: t2.gradients("backgroundImage"),
  bgClip: { transform: transformFunctions2.bgClip }
};
Object.assign(background2, {
  bgImage: background2.backgroundImage,
  bgImg: background2.backgroundImage
});
var border2 = {
  border: t2.borders("border"),
  borderWidth: t2.borderWidths("borderWidth"),
  borderStyle: t2.borderStyles("borderStyle"),
  borderColor: t2.colors("borderColor"),
  borderRadius: t2.radii("borderRadius"),
  borderTop: t2.borders("borderTop"),
  borderBlockStart: t2.borders("borderBlockStart"),
  borderTopLeftRadius: t2.radii("borderTopLeftRadius"),
  borderStartStartRadius: t2.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: t2.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: t2.radii("borderTopRightRadius"),
  borderStartEndRadius: t2.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: t2.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: t2.borders("borderRight"),
  borderInlineEnd: t2.borders("borderInlineEnd"),
  borderBottom: t2.borders("borderBottom"),
  borderBlockEnd: t2.borders("borderBlockEnd"),
  borderBottomLeftRadius: t2.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: t2.radii("borderBottomRightRadius"),
  borderLeft: t2.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: t2.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: t2.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: t2.borders(["borderLeft", "borderRight"]),
  borderInline: t2.borders("borderInline"),
  borderY: t2.borders(["borderTop", "borderBottom"]),
  borderBlock: t2.borders("borderBlock"),
  borderTopWidth: t2.borderWidths("borderTopWidth"),
  borderBlockStartWidth: t2.borderWidths("borderBlockStartWidth"),
  borderTopColor: t2.colors("borderTopColor"),
  borderBlockStartColor: t2.colors("borderBlockStartColor"),
  borderTopStyle: t2.borderStyles("borderTopStyle"),
  borderBlockStartStyle: t2.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: t2.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: t2.borderWidths("borderBlockEndWidth"),
  borderBottomColor: t2.colors("borderBottomColor"),
  borderBlockEndColor: t2.colors("borderBlockEndColor"),
  borderBottomStyle: t2.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: t2.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: t2.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: t2.borderWidths("borderInlineStartWidth"),
  borderLeftColor: t2.colors("borderLeftColor"),
  borderInlineStartColor: t2.colors("borderInlineStartColor"),
  borderLeftStyle: t2.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: t2.borderStyles("borderInlineStartStyle"),
  borderRightWidth: t2.borderWidths("borderRightWidth"),
  borderInlineEndWidth: t2.borderWidths("borderInlineEndWidth"),
  borderRightColor: t2.colors("borderRightColor"),
  borderInlineEndColor: t2.colors("borderInlineEndColor"),
  borderRightStyle: t2.borderStyles("borderRightStyle"),
  borderInlineEndStyle: t2.borderStyles("borderInlineEndStyle"),
  borderTopRadius: t2.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: t2.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ]),
  borderLeftRadius: t2.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: t2.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius"
  ])
};
Object.assign(border2, {
  rounded: border2.borderRadius,
  roundedTop: border2.borderTopRadius,
  roundedTopLeft: border2.borderTopLeftRadius,
  roundedTopRight: border2.borderTopRightRadius,
  roundedTopStart: border2.borderStartStartRadius,
  roundedTopEnd: border2.borderStartEndRadius,
  roundedBottom: border2.borderBottomRadius,
  roundedBottomLeft: border2.borderBottomLeftRadius,
  roundedBottomRight: border2.borderBottomRightRadius,
  roundedBottomStart: border2.borderEndStartRadius,
  roundedBottomEnd: border2.borderEndEndRadius,
  roundedLeft: border2.borderLeftRadius,
  roundedRight: border2.borderRightRadius,
  roundedStart: border2.borderInlineStartRadius,
  roundedEnd: border2.borderInlineEndRadius,
  borderStart: border2.borderInlineStart,
  borderEnd: border2.borderInlineEnd,
  borderTopStartRadius: border2.borderStartStartRadius,
  borderTopEndRadius: border2.borderStartEndRadius,
  borderBottomStartRadius: border2.borderEndStartRadius,
  borderBottomEndRadius: border2.borderEndEndRadius,
  borderStartRadius: border2.borderInlineStartRadius,
  borderEndRadius: border2.borderInlineEndRadius,
  borderStartWidth: border2.borderInlineStartWidth,
  borderEndWidth: border2.borderInlineEndWidth,
  borderStartColor: border2.borderInlineStartColor,
  borderEndColor: border2.borderInlineEndColor,
  borderStartStyle: border2.borderInlineStartStyle,
  borderEndStyle: border2.borderInlineEndStyle
});
var color2 = {
  color: t2.colors("color"),
  textColor: t2.colors("color"),
  fill: t2.colors("fill"),
  stroke: t2.colors("stroke")
};
var effect2 = {
  boxShadow: t2.shadows("boxShadow"),
  mixBlendMode: true,
  blendMode: t2.prop("mixBlendMode"),
  backgroundBlendMode: true,
  bgBlendMode: t2.prop("backgroundBlendMode"),
  opacity: true
};
Object.assign(effect2, {
  shadow: effect2.boxShadow
});
var filter2 = {
  filter: { transform: transformFunctions2.filter },
  blur: t2.blur("--chakra-blur"),
  brightness: t2.propT("--chakra-brightness", transformFunctions2.brightness),
  contrast: t2.propT("--chakra-contrast", transformFunctions2.contrast),
  hueRotate: t2.propT("--chakra-hue-rotate", transformFunctions2.hueRotate),
  invert: t2.propT("--chakra-invert", transformFunctions2.invert),
  saturate: t2.propT("--chakra-saturate", transformFunctions2.saturate),
  dropShadow: t2.propT("--chakra-drop-shadow", transformFunctions2.dropShadow),
  backdropFilter: { transform: transformFunctions2.backdropFilter },
  backdropBlur: t2.blur("--chakra-backdrop-blur"),
  backdropBrightness: t2.propT(
    "--chakra-backdrop-brightness",
    transformFunctions2.brightness
  ),
  backdropContrast: t2.propT("--chakra-backdrop-contrast", transformFunctions2.contrast),
  backdropHueRotate: t2.propT(
    "--chakra-backdrop-hue-rotate",
    transformFunctions2.hueRotate
  ),
  backdropInvert: t2.propT("--chakra-backdrop-invert", transformFunctions2.invert),
  backdropSaturate: t2.propT("--chakra-backdrop-saturate", transformFunctions2.saturate)
};
var flexbox2 = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: { transform: transformFunctions2.flexDirection },
  flex: true,
  flexFlow: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: t2.sizes("flexBasis"),
  justifySelf: true,
  alignSelf: true,
  order: true,
  placeItems: true,
  placeContent: true,
  placeSelf: true,
  gap: t2.space("gap"),
  rowGap: t2.space("rowGap"),
  columnGap: t2.space("columnGap")
};
Object.assign(flexbox2, {
  flexDir: flexbox2.flexDirection
});
var grid2 = {
  gridGap: t2.space("gridGap"),
  gridColumnGap: t2.space("gridColumnGap"),
  gridRowGap: t2.space("gridRowGap"),
  gridColumn: true,
  gridRow: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridColumnStart: true,
  gridColumnEnd: true,
  gridRowStart: true,
  gridRowEnd: true,
  gridAutoRows: true,
  gridTemplate: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true
};
var interactivity2 = {
  appearance: true,
  cursor: true,
  resize: true,
  userSelect: true,
  pointerEvents: true,
  outline: { transform: transformFunctions2.outline },
  outlineOffset: true,
  outlineColor: t2.colors("outlineColor")
};
var layout2 = {
  width: t2.sizesT("width"),
  inlineSize: t2.sizesT("inlineSize"),
  height: t2.sizes("height"),
  blockSize: t2.sizes("blockSize"),
  boxSize: t2.sizes(["width", "height"]),
  minWidth: t2.sizes("minWidth"),
  minInlineSize: t2.sizes("minInlineSize"),
  minHeight: t2.sizes("minHeight"),
  minBlockSize: t2.sizes("minBlockSize"),
  maxWidth: t2.sizes("maxWidth"),
  maxInlineSize: t2.sizes("maxInlineSize"),
  maxHeight: t2.sizes("maxHeight"),
  maxBlockSize: t2.sizes("maxBlockSize"),
  overflow: true,
  overflowX: true,
  overflowY: true,
  overscrollBehavior: true,
  overscrollBehaviorX: true,
  overscrollBehaviorY: true,
  display: true,
  aspectRatio: true,
  hideFrom: {
    scale: "breakpoints",
    transform: (value, theme2) => {
      var _a7, _b5, _c3;
      const breakpoint = (_c3 = (_b5 = (_a7 = theme2.__breakpoints) == null ? void 0 : _a7.get(value)) == null ? void 0 : _b5.minW) != null ? _c3 : value;
      const mq = `@media screen and (min-width: ${breakpoint})`;
      return { [mq]: { display: "none" } };
    }
  },
  hideBelow: {
    scale: "breakpoints",
    transform: (value, theme2) => {
      var _a7, _b5, _c3;
      const breakpoint = (_c3 = (_b5 = (_a7 = theme2.__breakpoints) == null ? void 0 : _a7.get(value)) == null ? void 0 : _b5._minW) != null ? _c3 : value;
      const mq = `@media screen and (max-width: ${breakpoint})`;
      return { [mq]: { display: "none" } };
    }
  },
  verticalAlign: true,
  boxSizing: true,
  boxDecorationBreak: true,
  float: t2.propT("float", transformFunctions2.float),
  objectFit: true,
  objectPosition: true,
  visibility: true,
  isolation: true
};
Object.assign(layout2, {
  w: layout2.width,
  h: layout2.height,
  minW: layout2.minWidth,
  maxW: layout2.maxWidth,
  minH: layout2.minHeight,
  maxH: layout2.maxHeight,
  overscroll: layout2.overscrollBehavior,
  overscrollX: layout2.overscrollBehaviorX,
  overscrollY: layout2.overscrollBehaviorY
});
var list2 = {
  listStyleType: true,
  listStylePosition: true,
  listStylePos: t2.prop("listStylePosition"),
  listStyleImage: true,
  listStyleImg: t2.prop("listStyleImage")
};
function get2(obj, path, fallback, index) {
  const key = typeof path === "string" ? path.split(".") : [path];
  for (index = 0; index < key.length; index += 1) {
    if (!obj)
      break;
    obj = obj[key[index]];
  }
  return obj === void 0 ? fallback : obj;
}
var memoize3 = (fn) => {
  const cache = /* @__PURE__ */ new WeakMap();
  const memoizedFn = (obj, path, fallback, index) => {
    if (typeof obj === "undefined") {
      return fn(obj, path, fallback);
    }
    if (!cache.has(obj)) {
      cache.set(obj, /* @__PURE__ */ new Map());
    }
    const map = cache.get(obj);
    if (map.has(path)) {
      return map.get(path);
    }
    const value = fn(obj, path, fallback, index);
    map.set(path, value);
    return value;
  };
  return memoizedFn;
};
var memoizedGet2 = memoize3(get2);
var srOnly2 = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
};
var srFocusable2 = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
};
var getWithPriority2 = (theme2, key, styles2) => {
  const result = {};
  const obj = memoizedGet2(theme2, key, {});
  for (const prop in obj) {
    const isInStyles = prop in styles2 && styles2[prop] != null;
    if (!isInStyles)
      result[prop] = obj[prop];
  }
  return result;
};
var others2 = {
  srOnly: {
    transform(value) {
      if (value === true)
        return srOnly2;
      if (value === "focusable")
        return srFocusable2;
      return {};
    }
  },
  layerStyle: {
    processResult: true,
    transform: (value, theme2, styles2) => getWithPriority2(theme2, `layerStyles.${value}`, styles2)
  },
  textStyle: {
    processResult: true,
    transform: (value, theme2, styles2) => getWithPriority2(theme2, `textStyles.${value}`, styles2)
  },
  apply: {
    processResult: true,
    transform: (value, theme2, styles2) => getWithPriority2(theme2, value, styles2)
  }
};
var position2 = {
  position: true,
  pos: t2.prop("position"),
  zIndex: t2.prop("zIndex", "zIndices"),
  inset: t2.spaceT("inset"),
  insetX: t2.spaceT(["left", "right"]),
  insetInline: t2.spaceT("insetInline"),
  insetY: t2.spaceT(["top", "bottom"]),
  insetBlock: t2.spaceT("insetBlock"),
  top: t2.spaceT("top"),
  insetBlockStart: t2.spaceT("insetBlockStart"),
  bottom: t2.spaceT("bottom"),
  insetBlockEnd: t2.spaceT("insetBlockEnd"),
  left: t2.spaceT("left"),
  insetInlineStart: t2.logical({
    scale: "space",
    property: { ltr: "left", rtl: "right" }
  }),
  right: t2.spaceT("right"),
  insetInlineEnd: t2.logical({
    scale: "space",
    property: { ltr: "right", rtl: "left" }
  })
};
Object.assign(position2, {
  insetStart: position2.insetInlineStart,
  insetEnd: position2.insetInlineEnd
});
var ring2 = {
  ring: { transform: transformFunctions2.ring },
  ringColor: t2.colors("--chakra-ring-color"),
  ringOffset: t2.prop("--chakra-ring-offset-width"),
  ringOffsetColor: t2.colors("--chakra-ring-offset-color"),
  ringInset: t2.prop("--chakra-ring-inset")
};
var space2 = {
  margin: t2.spaceT("margin"),
  marginTop: t2.spaceT("marginTop"),
  marginBlockStart: t2.spaceT("marginBlockStart"),
  marginRight: t2.spaceT("marginRight"),
  marginInlineEnd: t2.spaceT("marginInlineEnd"),
  marginBottom: t2.spaceT("marginBottom"),
  marginBlockEnd: t2.spaceT("marginBlockEnd"),
  marginLeft: t2.spaceT("marginLeft"),
  marginInlineStart: t2.spaceT("marginInlineStart"),
  marginX: t2.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: t2.spaceT("marginInline"),
  marginY: t2.spaceT(["marginTop", "marginBottom"]),
  marginBlock: t2.spaceT("marginBlock"),
  padding: t2.space("padding"),
  paddingTop: t2.space("paddingTop"),
  paddingBlockStart: t2.space("paddingBlockStart"),
  paddingRight: t2.space("paddingRight"),
  paddingBottom: t2.space("paddingBottom"),
  paddingBlockEnd: t2.space("paddingBlockEnd"),
  paddingLeft: t2.space("paddingLeft"),
  paddingInlineStart: t2.space("paddingInlineStart"),
  paddingInlineEnd: t2.space("paddingInlineEnd"),
  paddingX: t2.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: t2.space("paddingInline"),
  paddingY: t2.space(["paddingTop", "paddingBottom"]),
  paddingBlock: t2.space("paddingBlock")
};
Object.assign(space2, {
  m: space2.margin,
  mt: space2.marginTop,
  mr: space2.marginRight,
  me: space2.marginInlineEnd,
  marginEnd: space2.marginInlineEnd,
  mb: space2.marginBottom,
  ml: space2.marginLeft,
  ms: space2.marginInlineStart,
  marginStart: space2.marginInlineStart,
  mx: space2.marginX,
  my: space2.marginY,
  p: space2.padding,
  pt: space2.paddingTop,
  py: space2.paddingY,
  px: space2.paddingX,
  pb: space2.paddingBottom,
  pl: space2.paddingLeft,
  ps: space2.paddingInlineStart,
  paddingStart: space2.paddingInlineStart,
  pr: space2.paddingRight,
  pe: space2.paddingInlineEnd,
  paddingEnd: space2.paddingInlineEnd
});
var textDecoration2 = {
  textDecorationColor: t2.colors("textDecorationColor"),
  textDecoration: true,
  textDecor: { property: "textDecoration" },
  textDecorationLine: true,
  textDecorationStyle: true,
  textDecorationThickness: true,
  textUnderlineOffset: true,
  textShadow: t2.shadows("textShadow")
};
var transform2 = {
  clipPath: true,
  transform: t2.propT("transform", transformFunctions2.transform),
  transformOrigin: true,
  translateX: t2.spaceT("--chakra-translate-x"),
  translateY: t2.spaceT("--chakra-translate-y"),
  skewX: t2.degreeT("--chakra-skew-x"),
  skewY: t2.degreeT("--chakra-skew-y"),
  scaleX: t2.prop("--chakra-scale-x"),
  scaleY: t2.prop("--chakra-scale-y"),
  scale: t2.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: t2.degreeT("--chakra-rotate")
};
var transition3 = {
  transition: true,
  transitionDelay: true,
  animation: true,
  willChange: true,
  transitionDuration: t2.prop("transitionDuration", "transition.duration"),
  transitionProperty: t2.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: t2.prop(
    "transitionTimingFunction",
    "transition.easing"
  )
};
var typography3 = {
  fontFamily: t2.prop("fontFamily", "fonts"),
  fontSize: t2.prop("fontSize", "fontSizes", transformFunctions2.px),
  fontWeight: t2.prop("fontWeight", "fontWeights"),
  lineHeight: t2.prop("lineHeight", "lineHeights"),
  letterSpacing: t2.prop("letterSpacing", "letterSpacings"),
  textAlign: true,
  fontStyle: true,
  textIndent: true,
  wordBreak: true,
  overflowWrap: true,
  textOverflow: true,
  textTransform: true,
  whiteSpace: true,
  isTruncated: {
    transform(value) {
      if (value === true) {
        return {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        };
      }
    }
  },
  noOfLines: {
    static: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      //@ts-ignore
      WebkitLineClamp: "var(--chakra-line-clamp)"
    },
    property: "--chakra-line-clamp"
  }
};
var scroll2 = {
  scrollBehavior: true,
  scrollSnapAlign: true,
  scrollSnapStop: true,
  scrollSnapType: true,
  // scroll margin
  scrollMargin: t2.spaceT("scrollMargin"),
  scrollMarginTop: t2.spaceT("scrollMarginTop"),
  scrollMarginBottom: t2.spaceT("scrollMarginBottom"),
  scrollMarginLeft: t2.spaceT("scrollMarginLeft"),
  scrollMarginRight: t2.spaceT("scrollMarginRight"),
  scrollMarginX: t2.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
  scrollMarginY: t2.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
  // scroll padding
  scrollPadding: t2.spaceT("scrollPadding"),
  scrollPaddingTop: t2.spaceT("scrollPaddingTop"),
  scrollPaddingBottom: t2.spaceT("scrollPaddingBottom"),
  scrollPaddingLeft: t2.spaceT("scrollPaddingLeft"),
  scrollPaddingRight: t2.spaceT("scrollPaddingRight"),
  scrollPaddingX: t2.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
  scrollPaddingY: t2.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
};
function resolveReference2(operand) {
  if (isObject(operand) && operand.reference) {
    return operand.reference;
  }
  return String(operand);
}
var toExpression2 = (operator, ...operands) => operands.map(resolveReference2).join(` ${operator} `).replace(/calc/g, "");
var add2 = (...operands) => `calc(${toExpression2("+", ...operands)})`;
var subtract2 = (...operands) => `calc(${toExpression2("-", ...operands)})`;
var multiply2 = (...operands) => `calc(${toExpression2("*", ...operands)})`;
var divide2 = (...operands) => `calc(${toExpression2("/", ...operands)})`;
var negate2 = (x) => {
  const value = resolveReference2(x);
  if (value != null && !Number.isNaN(parseFloat(value))) {
    return String(value).startsWith("-") ? String(value).slice(1) : `-${value}`;
  }
  return multiply2(value, -1);
};
var calc2 = Object.assign(
  (x) => ({
    add: (...operands) => calc2(add2(x, ...operands)),
    subtract: (...operands) => calc2(subtract2(x, ...operands)),
    multiply: (...operands) => calc2(multiply2(x, ...operands)),
    divide: (...operands) => calc2(divide2(x, ...operands)),
    negate: () => calc2(negate2(x)),
    toString: () => x.toString()
  }),
  {
    add: add2,
    subtract: subtract2,
    multiply: multiply2,
    divide: divide2,
    negate: negate2
  }
);
function replaceWhiteSpace(value, replaceValue = "-") {
  return value.replace(/\s+/g, replaceValue);
}
function escape(value) {
  const valueStr = replaceWhiteSpace(value.toString());
  return escapeSymbol(escapeDot(valueStr));
}
function escapeDot(value) {
  if (value.includes("\\."))
    return value;
  const isDecimal2 = !Number.isInteger(parseFloat(value.toString()));
  return isDecimal2 ? value.replace(".", `\\.`) : value;
}
function escapeSymbol(value) {
  return value.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function addPrefix(value, prefix = "") {
  return [prefix, value].filter(Boolean).join("-");
}
function toVarReference(name, fallback) {
  return `var(${name}${fallback ? `, ${fallback}` : ""})`;
}
function toVarDefinition(value, prefix = "") {
  return escape(`--${addPrefix(value, prefix)}`);
}
function cssVar(name, fallback, cssVarPrefix) {
  const cssVariable = toVarDefinition(name, cssVarPrefix);
  return {
    variable: cssVariable,
    reference: toVarReference(cssVariable, fallback)
  };
}
function defineCssVars(scope, keys2) {
  const vars2 = {};
  for (const key of keys2) {
    if (Array.isArray(key)) {
      const [name, fallback] = key;
      vars2[name] = cssVar(`${scope}-${name}`, fallback);
      continue;
    }
    vars2[key] = cssVar(`${scope}-${key}`);
  }
  return vars2;
}
var state2 = {
  hover: (str, post) => `${str}:hover ${post}, ${str}[data-hover] ${post}`,
  focus: (str, post) => `${str}:focus ${post}, ${str}[data-focus] ${post}`,
  focusVisible: (str, post) => `${str}:focus-visible ${post}`,
  focusWithin: (str, post) => `${str}:focus-within ${post}`,
  active: (str, post) => `${str}:active ${post}, ${str}[data-active] ${post}`,
  disabled: (str, post) => `${str}:disabled ${post}, ${str}[data-disabled] ${post}`,
  invalid: (str, post) => `${str}:invalid ${post}, ${str}[data-invalid] ${post}`,
  checked: (str, post) => `${str}:checked ${post}, ${str}[data-checked] ${post}`,
  indeterminate: (str, post) => `${str}:indeterminate ${post}, ${str}[aria-checked=mixed] ${post}, ${str}[data-indeterminate] ${post}`,
  readOnly: (str, post) => `${str}:read-only ${post}, ${str}[readonly] ${post}, ${str}[data-read-only] ${post}`,
  expanded: (str, post) => `${str}:read-only ${post}, ${str}[aria-expanded=true] ${post}, ${str}[data-expanded] ${post}`,
  placeholderShown: (str, post) => `${str}:placeholder-shown ${post}`
};
var toGroup2 = (fn) => merge2((v) => fn(v, "&"), "[role=group]", "[data-group]", ".group");
var toPeer2 = (fn) => merge2((v) => fn(v, "~ &"), "[data-peer]", ".peer");
var merge2 = (fn, ...selectors) => selectors.map(fn).join(", ");
var pseudoSelectors2 = {
  /**
   * Styles for CSS selector `&:hover`
   */
  _hover: "&:hover, &[data-hover]",
  /**
   * Styles for CSS Selector `&:active`
   */
  _active: "&:active, &[data-active]",
  /**
   * Styles for CSS selector `&:focus`
   *
   */
  _focus: "&:focus, &[data-focus]",
  /**
   * Styles for the highlighted state.
   */
  _highlighted: "&[data-highlighted]",
  /**
   * Styles to apply when a child of this element has received focus
   * - CSS Selector `&:focus-within`
   */
  _focusWithin: "&:focus-within",
  /**
   * Styles to apply when this element has received focus via tabbing
   * - CSS Selector `&:focus-visible`
   */
  _focusVisible: "&:focus-visible, &[data-focus-visible]",
  /**
   * Styles to apply when this element is disabled. The passed styles are applied to these CSS selectors:
   * - `&[aria-disabled=true]`
   * - `&:disabled`
   * - `&[data-disabled]`
   * - `&[disabled]`
   */
  _disabled: "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
  /**
   * Styles for CSS Selector `&:readonly`
   */
  _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
  /**
   * Styles for CSS selector `&::before`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <Box _before={{content:`""` }}/>
   * ```
   */
  _before: "&::before",
  /**
   * Styles for CSS selector `&::after`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <Box _after={{content:`""` }}/>
   * ```
   */
  _after: "&::after",
  /**
   * Styles for CSS selector `&:empty`
   */
  _empty: "&:empty",
  /**
   * Styles to apply when the ARIA attribute `aria-expanded` is `true`
   * - CSS selector `&[aria-expanded=true]`
   */
  _expanded: "&[aria-expanded=true], &[data-expanded]",
  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `true`
   * - CSS selector `&[aria-checked=true]`
   */
  _checked: "&[aria-checked=true], &[data-checked]",
  /**
   * Styles to apply when the ARIA attribute `aria-grabbed` is `true`
   * - CSS selector `&[aria-grabbed=true]`
   */
  _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
  /**
   * Styles for CSS Selector `&[aria-pressed=true]`
   * Typically used to style the current "pressed" state of toggle buttons
   */
  _pressed: "&[aria-pressed=true], &[data-pressed]",
  /**
   * Styles to apply when the ARIA attribute `aria-invalid` is `true`
   * - CSS selector `&[aria-invalid=true]`
   */
  _invalid: "&[aria-invalid=true], &[data-invalid]",
  /**
   * Styles for the valid state
   * - CSS selector `&[data-valid], &[data-state=valid]`
   */
  _valid: "&[data-valid], &[data-state=valid]",
  /**
   * Styles for CSS Selector `&[aria-busy=true]` or `&[data-loading=true]`.
   * Useful for styling loading states
   */
  _loading: "&[data-loading], &[aria-busy=true]",
  /**
   * Styles to apply when the ARIA attribute `aria-selected` is `true`
   *
   * - CSS selector `&[aria-selected=true]`
   */
  _selected: "&[aria-selected=true], &[data-selected]",
  /**
   * Styles for CSS Selector `[hidden=true]`
   */
  _hidden: "&[hidden], &[data-hidden]",
  /**
   * Styles for CSS Selector `&:-webkit-autofill`
   */
  _autofill: "&:-webkit-autofill",
  /**
   * Styles for CSS Selector `&:nth-child(even)`
   */
  _even: "&:nth-of-type(even)",
  /**
   * Styles for CSS Selector `&:nth-child(odd)`
   */
  _odd: "&:nth-of-type(odd)",
  /**
   * Styles for CSS Selector `&:first-of-type`
   */
  _first: "&:first-of-type",
  /**
   * Styles for CSS selector `&::first-letter`
   *
   * NOTE: This selector is only applied for block-level elements and not preceded by an image or table.
   * @example
   * ```jsx
   * <Text _firstLetter={{ textDecoration: 'underline' }}>Once upon a time</Text>
   * ```
   */
  _firstLetter: "&::first-letter",
  /**
   * Styles for CSS Selector `&:last-of-type`
   */
  _last: "&:last-of-type",
  /**
   * Styles for CSS Selector `&:not(:first-of-type)`
   */
  _notFirst: "&:not(:first-of-type)",
  /**
   * Styles for CSS Selector `&:not(:last-of-type)`
   */
  _notLast: "&:not(:last-of-type)",
  /**
   * Styles for CSS Selector `&:visited`
   */
  _visited: "&:visited",
  /**
   * Used to style the active link in a navigation
   * Styles for CSS Selector `&[aria-current=page]`
   */
  _activeLink: "&[aria-current=page]",
  /**
   * Used to style the current step within a process
   * Styles for CSS Selector `&[aria-current=step]`
   */
  _activeStep: "&[aria-current=step]",
  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `mixed`
   * - CSS selector `&[aria-checked=mixed]`
   */
  _indeterminate: "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is hovered
   */
  _groupHover: toGroup2(state2.hover),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is hovered
   */
  _peerHover: toPeer2(state2.hover),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused
   */
  _groupFocus: toGroup2(state2.focus),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is focused
   */
  _peerFocus: toPeer2(state2.focus),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus
   */
  _groupFocusVisible: toGroup2(state2.focusVisible),
  /**
   * Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus
   */
  _peerFocusVisible: toPeer2(state2.focusVisible),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active
   */
  _groupActive: toGroup2(state2.active),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is active
   */
  _peerActive: toPeer2(state2.active),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled
   */
  _groupDisabled: toGroup2(state2.disabled),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is disabled
   */
  _peerDisabled: toPeer2(state2.disabled),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid
   */
  _groupInvalid: toGroup2(state2.invalid),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is invalid
   */
  _peerInvalid: toPeer2(state2.invalid),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked
   */
  _groupChecked: toGroup2(state2.checked),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is checked
   */
  _peerChecked: toPeer2(state2.checked),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within
   */
  _groupFocusWithin: toGroup2(state2.focusWithin),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` has focus within
   */
  _peerFocusWithin: toPeer2(state2.focusWithin),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown
   */
  _peerPlaceholderShown: toPeer2(state2.placeholderShown),
  /**
   * Styles for CSS Selector `&::placeholder`.
   */
  _placeholder: "&::placeholder",
  /**
   * Styles for CSS Selector `&:placeholder-shown`.
   */
  _placeholderShown: "&:placeholder-shown",
  /**
   * Styles for CSS Selector `&:fullscreen`.
   */
  _fullScreen: "&:fullscreen",
  /**
   * Styles for CSS Selector `&::selection`
   */
  _selection: "&::selection",
  /**
   * Styles for CSS Selector `[dir=rtl] &`
   * It is applied when a parent element or this element has `dir="rtl"`
   */
  _rtl: "[dir=rtl] &, &[dir=rtl]",
  /**
   * Styles for CSS Selector `[dir=ltr] &`
   * It is applied when a parent element or this element has `dir="ltr"`
   */
  _ltr: "[dir=ltr] &, &[dir=ltr]",
  /**
   * Styles for CSS Selector `@media (prefers-color-scheme: dark)`
   * It is used when the user has requested the system use a light or dark color theme.
   */
  _mediaDark: "@media (prefers-color-scheme: dark)",
  /**
   * Styles for CSS Selector `@media (prefers-reduced-motion: reduce)`
   * It is used when the user has requested the system to reduce the amount of animations.
   */
  _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
  /**
   * Styles for when `data-theme` is applied to any parent of
   * this component or element.
   */
  _dark: ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
  /**
   * Styles for when `data-theme` is applied to any parent of
   * this component or element.
   */
  _light: ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",
  /**
   * Styles for the CSS Selector `&[data-orientation=horizontal]`
   */
  _horizontal: "&[data-orientation=horizontal]",
  /**
   * Styles for the CSS Selector `&[data-orientation=vertical]`
   */
  _vertical: "&[data-orientation=vertical]"
};
var pseudoPropNames2 = Object.keys(
  pseudoSelectors2
);
var systemProps2 = (0, import_lodash7.default)(
  {},
  background2,
  border2,
  color2,
  flexbox2,
  layout2,
  filter2,
  ring2,
  interactivity2,
  grid2,
  others2,
  position2,
  effect2,
  space2,
  scroll2,
  typography3,
  textDecoration2,
  transform2,
  list2,
  transition3
);
var layoutSystem2 = Object.assign({}, space2, layout2, flexbox2, grid2, position2);
var layoutPropNames2 = Object.keys(
  layoutSystem2
);
var propNames2 = [...Object.keys(systemProps2), ...pseudoPropNames2];
var styleProps2 = { ...systemProps2, ...pseudoSelectors2 };
function defineStyle(styles2) {
  return styles2;
}
function defineStyleConfig(config2) {
  return config2;
}
function createMultiStyleConfigHelpers(parts) {
  return {
    definePartsStyle(config2) {
      return config2;
    },
    defineMultiStyleConfig(config2) {
      return { parts, ...config2 };
    }
  };
}

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-Q5NOVGYN.mjs
var { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers([
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
]);
var $size = cssVar("stepper-indicator-size");
var $iconSize = cssVar("stepper-icon-size");
var $titleFontSize = cssVar("stepper-title-font-size");
var $descFontSize = cssVar("stepper-description-font-size");
var $accentColor = cssVar("stepper-accent-color");
var baseStyle = definePartsStyle(({ colorScheme: c }) => ({
  stepper: {
    display: "flex",
    justifyContent: "space-between",
    gap: "4",
    "&[data-orientation=vertical]": {
      flexDirection: "column",
      alignItems: "flex-start"
    },
    "&[data-orientation=horizontal]": {
      flexDirection: "row",
      alignItems: "center"
    },
    [$accentColor.variable]: `colors.${c}.500`,
    _dark: {
      [$accentColor.variable]: `colors.${c}.200`
    }
  },
  title: {
    fontSize: $titleFontSize.reference,
    fontWeight: "medium"
  },
  description: {
    fontSize: $descFontSize.reference,
    color: "chakra-subtle-text"
  },
  number: {
    fontSize: $titleFontSize.reference
  },
  step: {
    flexShrink: 0,
    position: "relative",
    display: "flex",
    gap: "2",
    "&[data-orientation=horizontal]": {
      alignItems: "center"
    },
    flex: "1",
    "&:last-of-type:not([data-stretch])": {
      flex: "initial"
    }
  },
  icon: {
    flexShrink: 0,
    width: $iconSize.reference,
    height: $iconSize.reference
  },
  indicator: {
    flexShrink: 0,
    borderRadius: "full",
    width: $size.reference,
    height: $size.reference,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&[data-status=active]": {
      borderWidth: "2px",
      borderColor: $accentColor.reference
    },
    "&[data-status=complete]": {
      bg: $accentColor.reference,
      color: "chakra-inverse-text"
    },
    "&[data-status=incomplete]": {
      borderWidth: "2px"
    }
  },
  separator: {
    bg: "chakra-border-color",
    flex: "1",
    "&[data-status=complete]": {
      bg: $accentColor.reference
    },
    "&[data-orientation=horizontal]": {
      width: "100%",
      height: "2px",
      marginStart: "2"
    },
    "&[data-orientation=vertical]": {
      width: "2px",
      position: "absolute",
      height: "100%",
      maxHeight: `calc(100% - ${$size.reference} - 8px)`,
      top: `calc(${$size.reference} + 4px)`,
      insetStart: `calc(${$size.reference} / 2 - 1px)`
    }
  }
}));
var stepperTheme = defineMultiStyleConfig({
  baseStyle,
  sizes: {
    xs: definePartsStyle({
      stepper: {
        [$size.variable]: "sizes.4",
        [$iconSize.variable]: "sizes.3",
        [$titleFontSize.variable]: "fontSizes.xs",
        [$descFontSize.variable]: "fontSizes.xs"
      }
    }),
    sm: definePartsStyle({
      stepper: {
        [$size.variable]: "sizes.6",
        [$iconSize.variable]: "sizes.4",
        [$titleFontSize.variable]: "fontSizes.sm",
        [$descFontSize.variable]: "fontSizes.xs"
      }
    }),
    md: definePartsStyle({
      stepper: {
        [$size.variable]: "sizes.8",
        [$iconSize.variable]: "sizes.5",
        [$titleFontSize.variable]: "fontSizes.md",
        [$descFontSize.variable]: "fontSizes.sm"
      }
    }),
    lg: definePartsStyle({
      stepper: {
        [$size.variable]: "sizes.10",
        [$iconSize.variable]: "sizes.6",
        [$titleFontSize.variable]: "fontSizes.lg",
        [$descFontSize.variable]: "fontSizes.md"
      }
    })
  },
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/anatomy/dist/chunk-OA3DH5LS.mjs
function anatomy(name, map = {}) {
  let called = false;
  function assert() {
    if (!called) {
      called = true;
      return;
    }
    throw new Error(
      "[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?"
    );
  }
  function parts(...values) {
    assert();
    for (const part of values) {
      ;
      map[part] = toPart(part);
    }
    return anatomy(name, map);
  }
  function extend(...parts2) {
    for (const part of parts2) {
      if (part in map)
        continue;
      map[part] = toPart(part);
    }
    return anatomy(name, map);
  }
  function selectors() {
    const value = Object.fromEntries(
      Object.entries(map).map(([key, part]) => [key, part.selector])
    );
    return value;
  }
  function classnames() {
    const value = Object.fromEntries(
      Object.entries(map).map(([key, part]) => [key, part.className])
    );
    return value;
  }
  function toPart(part) {
    const el = ["container", "root"].includes(part != null ? part : "") ? [name] : [name, part];
    const attr = el.filter(Boolean).join("__");
    const className = `chakra-${attr}`;
    const partObj = {
      className,
      selector: `.${className}`,
      toString: () => part
    };
    return partObj;
  }
  const __type = {};
  return {
    parts,
    toPart,
    extend,
    selectors,
    classnames,
    get keys() {
      return Object.keys(map);
    },
    __type
  };
}

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/anatomy/dist/chunk-7OOI6RFH.mjs
var accordionAnatomy = anatomy("accordion").parts("root", "container", "button", "panel").extend("icon");
var alertAnatomy = anatomy("alert").parts("title", "description", "container").extend("icon", "spinner");
var avatarAnatomy = anatomy("avatar").parts("label", "badge", "container").extend("excessLabel", "group");
var breadcrumbAnatomy = anatomy("breadcrumb").parts("link", "item", "container").extend("separator");
var buttonAnatomy = anatomy("button").parts();
var checkboxAnatomy = anatomy("checkbox").parts("control", "icon", "container").extend("label");
var circularProgressAnatomy = anatomy("progress").parts("track", "filledTrack").extend("label");
var drawerAnatomy = anatomy("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer");
var editableAnatomy = anatomy("editable").parts(
  "preview",
  "input",
  "textarea"
);
var formAnatomy = anatomy("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
);
var formErrorAnatomy = anatomy("formError").parts("text", "icon");
var inputAnatomy = anatomy("input").parts(
  "addon",
  "field",
  "element",
  "group"
);
var listAnatomy = anatomy("list").parts("container", "item", "icon");
var menuAnatomy = anatomy("menu").parts("button", "list", "item").extend("groupTitle", "icon", "command", "divider");
var modalAnatomy = anatomy("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer");
var numberInputAnatomy = anatomy("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
var pinInputAnatomy = anatomy("pininput").parts("field");
var popoverAnatomy = anatomy("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton");
var progressAnatomy = anatomy("progress").parts(
  "label",
  "filledTrack",
  "track"
);
var radioAnatomy = anatomy("radio").parts(
  "container",
  "control",
  "label"
);
var selectAnatomy = anatomy("select").parts("field", "icon");
var sliderAnatomy = anatomy("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
);
var statAnatomy = anatomy("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
);
var switchAnatomy = anatomy("switch").parts(
  "container",
  "track",
  "thumb",
  "label"
);
var tableAnatomy = anatomy("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
);
var tabsAnatomy = anatomy("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
);
var tagAnatomy = anatomy("tag").parts(
  "container",
  "label",
  "closeButton"
);
var cardAnatomy = anatomy("card").parts(
  "container",
  "header",
  "body",
  "footer"
);
var stepperAnatomy = anatomy("stepper").parts(
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
);

// node_modules/color2k/dist/index.exports.import.es.mjs
function guard(low, high, value) {
  return Math.min(Math.max(low, value), high);
}
var ColorError = class extends Error {
  constructor(color3) {
    super(`Failed to parse color: "${color3}"`);
  }
};
var ColorError$1 = ColorError;
function parseToRgba(color3) {
  if (typeof color3 !== "string") throw new ColorError$1(color3);
  if (color3.trim().toLowerCase() === "transparent") return [0, 0, 0, 0];
  let normalizedColor = color3.trim();
  normalizedColor = namedColorRegex.test(color3) ? nameToHex(color3) : color3;
  const reducedHexMatch = reducedHexRegex.exec(normalizedColor);
  if (reducedHexMatch) {
    const arr = Array.from(reducedHexMatch).slice(1);
    return [...arr.slice(0, 3).map((x) => parseInt(r(x, 2), 16)), parseInt(r(arr[3] || "f", 2), 16) / 255];
  }
  const hexMatch = hexRegex.exec(normalizedColor);
  if (hexMatch) {
    const arr = Array.from(hexMatch).slice(1);
    return [...arr.slice(0, 3).map((x) => parseInt(x, 16)), parseInt(arr[3] || "ff", 16) / 255];
  }
  const rgbaMatch = rgbaRegex.exec(normalizedColor);
  if (rgbaMatch) {
    const arr = Array.from(rgbaMatch).slice(1);
    return [...arr.slice(0, 3).map((x) => parseInt(x, 10)), parseFloat(arr[3] || "1")];
  }
  const hslaMatch = hslaRegex.exec(normalizedColor);
  if (hslaMatch) {
    const [h, s, l, a] = Array.from(hslaMatch).slice(1).map(parseFloat);
    if (guard(0, 100, s) !== s) throw new ColorError$1(color3);
    if (guard(0, 100, l) !== l) throw new ColorError$1(color3);
    return [...hslToRgb(h, s, l), Number.isNaN(a) ? 1 : a];
  }
  throw new ColorError$1(color3);
}
function hash(str) {
  let hash2 = 5381;
  let i = str.length;
  while (i) {
    hash2 = hash2 * 33 ^ str.charCodeAt(--i);
  }
  return (hash2 >>> 0) % 2341;
}
var colorToInt = (x) => parseInt(x.replace(/_/g, ""), 36);
var compressedColorMap = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((acc, next) => {
  const key = colorToInt(next.substring(0, 3));
  const hex = colorToInt(next.substring(3)).toString(16);
  let prefix = "";
  for (let i = 0; i < 6 - hex.length; i++) {
    prefix += "0";
  }
  acc[key] = `${prefix}${hex}`;
  return acc;
}, {});
function nameToHex(color3) {
  const normalizedColorName = color3.toLowerCase().trim();
  const result = compressedColorMap[hash(normalizedColorName)];
  if (!result) throw new ColorError$1(color3);
  return `#${result}`;
}
var r = (str, amount) => Array.from(Array(amount)).map(() => str).join("");
var reducedHexRegex = new RegExp(`^#${r("([a-f0-9])", 3)}([a-f0-9])?$`, "i");
var hexRegex = new RegExp(`^#${r("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i");
var rgbaRegex = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${r(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i");
var hslaRegex = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i;
var namedColorRegex = /^[a-z]+$/i;
var roundColor = (color3) => {
  return Math.round(color3 * 255);
};
var hslToRgb = (hue, saturation, lightness) => {
  let l = lightness / 100;
  if (saturation === 0) {
    return [l, l, l].map(roundColor);
  }
  const huePrime = (hue % 360 + 360) % 360 / 60;
  const chroma = (1 - Math.abs(2 * l - 1)) * (saturation / 100);
  const secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
  let red = 0;
  let green = 0;
  let blue = 0;
  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = secondComponent;
  }
  const lightnessModification = l - chroma / 2;
  const finalRed = red + lightnessModification;
  const finalGreen = green + lightnessModification;
  const finalBlue = blue + lightnessModification;
  return [finalRed, finalGreen, finalBlue].map(roundColor);
};
function rgba(red, green, blue, alpha) {
  return `rgba(${guard(0, 255, red).toFixed()}, ${guard(0, 255, green).toFixed()}, ${guard(0, 255, blue).toFixed()}, ${parseFloat(guard(0, 1, alpha).toFixed(3))})`;
}
function transparentize(color3, amount) {
  const [r2, g, b, a] = parseToRgba(color3);
  return rgba(r2, g, b, a - amount);
}
function toHex(color3) {
  const [r2, g, b, a] = parseToRgba(color3);
  let hex = (x) => {
    const h = guard(0, 255, x).toString(16);
    return h.length === 1 ? `0${h}` : h;
  };
  return `#${hex(r2)}${hex(g)}${hex(b)}${a < 1 ? hex(Math.round(a * 255)) : ""}`;
}

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme-tools/dist/chunk-6IC2I3BY.mjs
function dlv_es_default(t3, e, l, n, r2) {
  for (e = e.split ? e.split(".") : e, n = 0; n < e.length; n++)
    t3 = t3 ? t3[e[n]] : r2;
  return t3 === r2 ? l : t3;
}
var isEmptyObject = (obj) => Object.keys(obj).length === 0;
var getColor = (theme2, color3, fallback) => {
  const hex = dlv_es_default(theme2, `colors.${color3}`, color3);
  try {
    toHex(hex);
    return hex;
  } catch {
    return fallback != null ? fallback : "#000000";
  }
};
var getBrightness = (color3) => {
  const [r2, g, b] = parseToRgba(color3);
  return (r2 * 299 + g * 587 + b * 114) / 1e3;
};
var tone = (color3) => (theme2) => {
  const hex = getColor(theme2, color3);
  const brightness = getBrightness(hex);
  const isDark2 = brightness < 128;
  return isDark2 ? "dark" : "light";
};
var isDark = (color3) => (theme2) => tone(color3)(theme2) === "dark";
var transparentize2 = (color3, opacity) => (theme2) => {
  const raw = getColor(theme2, color3);
  return transparentize(raw, 1 - opacity);
};
function generateStripe(size2 = "1rem", color3 = "rgba(255, 255, 255, 0.15)") {
  return {
    backgroundImage: `linear-gradient(
    45deg,
    ${color3} 25%,
    transparent 25%,
    transparent 50%,
    ${color3} 50%,
    ${color3} 75%,
    transparent 75%,
    transparent
  )`,
    backgroundSize: `${size2} ${size2}`
  };
}
var randomHex = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function randomColor(opts) {
  const fallback = randomHex();
  if (!opts || isEmptyObject(opts)) {
    return fallback;
  }
  if (opts.string && opts.colors) {
    return randomColorFromList(opts.string, opts.colors);
  }
  if (opts.string && !opts.colors) {
    return randomColorFromString(opts.string);
  }
  if (opts.colors && !opts.string) {
    return randomFromList(opts.colors);
  }
  return fallback;
}
function randomColorFromString(str) {
  let hash2 = 0;
  if (str.length === 0)
    return hash2.toString();
  for (let i = 0; i < str.length; i += 1) {
    hash2 = str.charCodeAt(i) + ((hash2 << 5) - hash2);
    hash2 = hash2 & hash2;
  }
  let color3 = "#";
  for (let j = 0; j < 3; j += 1) {
    const value = hash2 >> j * 8 & 255;
    color3 += `00${value.toString(16)}`.substr(-2);
  }
  return color3;
}
function randomColorFromList(str, list3) {
  let index = 0;
  if (str.length === 0)
    return list3[0];
  for (let i = 0; i < str.length; i += 1) {
    index = str.charCodeAt(i) + ((index << 5) - index);
    index = index & index;
  }
  index = (index % list3.length + list3.length) % list3.length;
  return list3[index];
}
function randomFromList(list3) {
  return list3[Math.floor(Math.random() * list3.length)];
}

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme-tools/dist/chunk-FNB7ZWWX.mjs
function mode(light, dark) {
  return (props) => props.colorMode === "dark" ? dark : light;
}
function orient(options) {
  const { orientation, vertical, horizontal } = options;
  if (!orientation)
    return {};
  return orientation === "vertical" ? vertical : horizontal;
}

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme-tools/dist/chunk-XMZHFSTS.mjs
function toRef(operand) {
  if (isObject(operand) && operand.reference) {
    return operand.reference;
  }
  return String(operand);
}
var toExpr = (operator, ...operands) => operands.map(toRef).join(` ${operator} `).replace(/calc/g, "");
var add3 = (...operands) => `calc(${toExpr("+", ...operands)})`;
var subtract3 = (...operands) => `calc(${toExpr("-", ...operands)})`;
var multiply3 = (...operands) => `calc(${toExpr("*", ...operands)})`;
var divide3 = (...operands) => `calc(${toExpr("/", ...operands)})`;
var negate3 = (x) => {
  const value = toRef(x);
  if (value != null && !Number.isNaN(parseFloat(value))) {
    return String(value).startsWith("-") ? String(value).slice(1) : `-${value}`;
  }
  return multiply3(value, -1);
};
var calc3 = Object.assign(
  (x) => ({
    add: (...operands) => calc3(add3(x, ...operands)),
    subtract: (...operands) => calc3(subtract3(x, ...operands)),
    multiply: (...operands) => calc3(multiply3(x, ...operands)),
    divide: (...operands) => calc3(divide3(x, ...operands)),
    negate: () => calc3(negate3(x)),
    toString: () => x.toString()
  }),
  {
    add: add3,
    subtract: subtract3,
    multiply: multiply3,
    divide: divide3,
    negate: negate3
  }
);

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme-tools/dist/chunk-WSAJBJJ4.mjs
function isDecimal(value) {
  return !Number.isInteger(parseFloat(value.toString()));
}
function replaceWhiteSpace2(value, replaceValue = "-") {
  return value.replace(/\s+/g, replaceValue);
}
function escape2(value) {
  const valueStr = replaceWhiteSpace2(value.toString());
  if (valueStr.includes("\\."))
    return value;
  return isDecimal(value) ? valueStr.replace(".", `\\.`) : value;
}
function addPrefix2(value, prefix = "") {
  return [prefix, escape2(value)].filter(Boolean).join("-");
}
function toVarRef(name, fallback) {
  return `var(${escape2(name)}${fallback ? `, ${fallback}` : ""})`;
}
function toVar(value, prefix = "") {
  return `--${addPrefix2(value, prefix)}`;
}
function cssVar2(name, options) {
  const cssVariable = toVar(name, options == null ? void 0 : options.prefix);
  return {
    variable: cssVariable,
    reference: toVarRef(cssVariable, getFallback(options == null ? void 0 : options.fallback))
  };
}
function getFallback(fallback) {
  if (typeof fallback === "string")
    return fallback;
  return fallback == null ? void 0 : fallback.reference;
}

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-SG67NFYS.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig2, definePartsStyle: definePartsStyle2 } = createMultiStyleConfigHelpers(switchAnatomy.keys);
var $width = cssVar2("switch-track-width");
var $height = cssVar2("switch-track-height");
var $diff = cssVar2("switch-track-diff");
var diffValue = calc3.subtract($width, $height);
var $translateX = cssVar2("switch-thumb-x");
var $bg = cssVar2("switch-bg");
var baseStyleTrack = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [$width.reference],
    height: [$height.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    [$bg.variable]: "colors.gray.300",
    _dark: {
      [$bg.variable]: "colors.whiteAlpha.400"
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      [$bg.variable]: `colors.${c}.500`,
      _dark: {
        [$bg.variable]: `colors.${c}.200`
      }
    },
    bg: $bg.reference
  };
});
var baseStyleThumb = defineStyle({
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [$height.reference],
  height: [$height.reference],
  _checked: {
    transform: `translateX(${$translateX.reference})`
  }
});
var baseStyle2 = definePartsStyle2((props) => ({
  container: {
    [$diff.variable]: diffValue,
    [$translateX.variable]: $diff.reference,
    _rtl: {
      [$translateX.variable]: calc3($diff).negate().toString()
    }
  },
  track: baseStyleTrack(props),
  thumb: baseStyleThumb
}));
var sizes2 = {
  sm: definePartsStyle2({
    container: {
      [$width.variable]: "1.375rem",
      [$height.variable]: "sizes.3"
    }
  }),
  md: definePartsStyle2({
    container: {
      [$width.variable]: "1.875rem",
      [$height.variable]: "sizes.4"
    }
  }),
  lg: definePartsStyle2({
    container: {
      [$width.variable]: "2.875rem",
      [$height.variable]: "sizes.6"
    }
  })
};
var switchTheme = defineMultiStyleConfig2({
  baseStyle: baseStyle2,
  sizes: sizes2,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-QWN3S45W.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig3, definePartsStyle: definePartsStyle3 } = createMultiStyleConfigHelpers(tableAnatomy.keys);
var baseStyle3 = definePartsStyle3({
  table: {
    fontVariantNumeric: "lining-nums tabular-nums",
    borderCollapse: "collapse",
    width: "full"
  },
  th: {
    fontFamily: "heading",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "wider",
    textAlign: "start"
  },
  td: {
    textAlign: "start"
  },
  caption: {
    mt: 4,
    fontFamily: "heading",
    textAlign: "center",
    fontWeight: "medium"
  }
});
var numericStyles = defineStyle({
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
});
var variantSimple = definePartsStyle3((props) => {
  const { colorScheme: c } = props;
  return {
    th: {
      color: mode("gray.600", "gray.400")(props),
      borderBottom: "1px",
      borderColor: mode(`${c}.100`, `${c}.700`)(props),
      ...numericStyles
    },
    td: {
      borderBottom: "1px",
      borderColor: mode(`${c}.100`, `${c}.700`)(props),
      ...numericStyles
    },
    caption: {
      color: mode("gray.600", "gray.100")(props)
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
});
var variantStripe = definePartsStyle3((props) => {
  const { colorScheme: c } = props;
  return {
    th: {
      color: mode("gray.600", "gray.400")(props),
      borderBottom: "1px",
      borderColor: mode(`${c}.100`, `${c}.700`)(props),
      ...numericStyles
    },
    td: {
      borderBottom: "1px",
      borderColor: mode(`${c}.100`, `${c}.700`)(props),
      ...numericStyles
    },
    caption: {
      color: mode("gray.600", "gray.100")(props)
    },
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "1px",
            borderColor: mode(`${c}.100`, `${c}.700`)(props)
          },
          td: {
            background: mode(`${c}.100`, `${c}.700`)(props)
          }
        }
      }
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
});
var variants = {
  simple: variantSimple,
  striped: variantStripe,
  unstyled: defineStyle({})
};
var sizes3 = {
  sm: definePartsStyle3({
    th: {
      px: "4",
      py: "1",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "4",
      py: "2",
      fontSize: "sm",
      lineHeight: "4"
    },
    caption: {
      px: "4",
      py: "2",
      fontSize: "xs"
    }
  }),
  md: definePartsStyle3({
    th: {
      px: "6",
      py: "3",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "6",
      py: "4",
      lineHeight: "5"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "sm"
    }
  }),
  lg: definePartsStyle3({
    th: {
      px: "8",
      py: "4",
      lineHeight: "5",
      fontSize: "sm"
    },
    td: {
      px: "8",
      py: "5",
      lineHeight: "6"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "md"
    }
  })
};
var tableTheme = defineMultiStyleConfig3({
  baseStyle: baseStyle3,
  variants,
  sizes: sizes3,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
});

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-GYISOX2E.mjs
var $fg = cssVar("tabs-color");
var $bg2 = cssVar("tabs-bg");
var $border = cssVar("tabs-border-color");
var { defineMultiStyleConfig: defineMultiStyleConfig4, definePartsStyle: definePartsStyle4 } = createMultiStyleConfigHelpers(tabsAnatomy.keys);
var baseStyleRoot = defineStyle((props) => {
  const { orientation } = props;
  return {
    display: orientation === "vertical" ? "flex" : "block"
  };
});
var baseStyleTab = defineStyle((props) => {
  const { isFitted } = props;
  return {
    flex: isFitted ? 1 : void 0,
    transitionProperty: "common",
    transitionDuration: "normal",
    _focusVisible: {
      zIndex: 1,
      boxShadow: "outline"
    },
    _disabled: {
      cursor: "not-allowed",
      opacity: 0.4
    }
  };
});
var baseStyleTablist = defineStyle((props) => {
  const { align = "start", orientation } = props;
  const alignments = {
    end: "flex-end",
    center: "center",
    start: "flex-start"
  };
  return {
    justifyContent: alignments[align],
    flexDirection: orientation === "vertical" ? "column" : "row"
  };
});
var baseStyleTabpanel = defineStyle({
  p: 4
});
var baseStyle4 = definePartsStyle4((props) => ({
  root: baseStyleRoot(props),
  tab: baseStyleTab(props),
  tablist: baseStyleTablist(props),
  tabpanel: baseStyleTabpanel
}));
var sizes4 = {
  sm: definePartsStyle4({
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  }),
  md: definePartsStyle4({
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  }),
  lg: definePartsStyle4({
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  })
};
var variantLine = definePartsStyle4((props) => {
  const { colorScheme: c, orientation } = props;
  const isVertical = orientation === "vertical";
  const borderProp = isVertical ? "borderStart" : "borderBottom";
  const marginProp = isVertical ? "marginStart" : "marginBottom";
  return {
    tablist: {
      [borderProp]: "2px solid",
      borderColor: "inherit"
    },
    tab: {
      [borderProp]: "2px solid",
      borderColor: "transparent",
      [marginProp]: "-2px",
      _selected: {
        [$fg.variable]: `colors.${c}.600`,
        _dark: {
          [$fg.variable]: `colors.${c}.300`
        },
        borderColor: "currentColor"
      },
      _active: {
        [$bg2.variable]: "colors.gray.200",
        _dark: {
          [$bg2.variable]: "colors.whiteAlpha.300"
        }
      },
      _disabled: {
        _active: { bg: "none" }
      },
      color: $fg.reference,
      bg: $bg2.reference
    }
  };
});
var variantEnclosed = definePartsStyle4((props) => {
  const { colorScheme: c } = props;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [$border.variable]: "transparent",
      _selected: {
        [$fg.variable]: `colors.${c}.600`,
        [$border.variable]: `colors.white`,
        _dark: {
          [$fg.variable]: `colors.${c}.300`,
          [$border.variable]: `colors.gray.800`
        },
        borderColor: "inherit",
        borderBottomColor: $border.reference
      },
      color: $fg.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
});
var variantEnclosedColored = definePartsStyle4((props) => {
  const { colorScheme: c } = props;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      [$bg2.variable]: "colors.gray.50",
      _dark: {
        [$bg2.variable]: "colors.whiteAlpha.50"
      },
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        [$bg2.variable]: "colors.white",
        [$fg.variable]: `colors.${c}.600`,
        _dark: {
          [$bg2.variable]: "colors.gray.800",
          [$fg.variable]: `colors.${c}.300`
        },
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      },
      color: $fg.reference,
      bg: $bg2.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
});
var variantSoftRounded = definePartsStyle4((props) => {
  const { colorScheme: c, theme: theme2 } = props;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: getColor(theme2, `${c}.700`),
        bg: getColor(theme2, `${c}.100`)
      }
    }
  };
});
var variantSolidRounded = definePartsStyle4((props) => {
  const { colorScheme: c } = props;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      [$fg.variable]: "colors.gray.600",
      _dark: {
        [$fg.variable]: "inherit"
      },
      _selected: {
        [$fg.variable]: "colors.white",
        [$bg2.variable]: `colors.${c}.600`,
        _dark: {
          [$fg.variable]: "colors.gray.800",
          [$bg2.variable]: `colors.${c}.300`
        }
      },
      color: $fg.reference,
      bg: $bg2.reference
    }
  };
});
var variantUnstyled = definePartsStyle4({});
var variants2 = {
  line: variantLine,
  enclosed: variantEnclosed,
  "enclosed-colored": variantEnclosedColored,
  "soft-rounded": variantSoftRounded,
  "solid-rounded": variantSolidRounded,
  unstyled: variantUnstyled
};
var tabsTheme = defineMultiStyleConfig4({
  baseStyle: baseStyle4,
  sizes: sizes4,
  variants: variants2,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
});

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-ZQMLTFF3.mjs
var vars = defineCssVars("badge", ["bg", "color", "shadow"]);
var baseStyle5 = defineStyle({
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
  bg: vars.bg.reference,
  color: vars.color.reference,
  boxShadow: vars.shadow.reference
});
var variantSolid = defineStyle((props) => {
  const { colorScheme: c, theme: theme2 } = props;
  const dark = transparentize2(`${c}.500`, 0.6)(theme2);
  return {
    [vars.bg.variable]: `colors.${c}.500`,
    [vars.color.variable]: `colors.white`,
    _dark: {
      [vars.bg.variable]: dark,
      [vars.color.variable]: `colors.whiteAlpha.800`
    }
  };
});
var variantSubtle = defineStyle((props) => {
  const { colorScheme: c, theme: theme2 } = props;
  const darkBg = transparentize2(`${c}.200`, 0.16)(theme2);
  return {
    [vars.bg.variable]: `colors.${c}.100`,
    [vars.color.variable]: `colors.${c}.800`,
    _dark: {
      [vars.bg.variable]: darkBg,
      [vars.color.variable]: `colors.${c}.200`
    }
  };
});
var variantOutline = defineStyle((props) => {
  const { colorScheme: c, theme: theme2 } = props;
  const darkColor = transparentize2(`${c}.200`, 0.8)(theme2);
  return {
    [vars.color.variable]: `colors.${c}.500`,
    _dark: {
      [vars.color.variable]: darkColor
    },
    [vars.shadow.variable]: `inset 0 0 0px 1px ${vars.color.reference}`
  };
});
var variants3 = {
  solid: variantSolid,
  subtle: variantSubtle,
  outline: variantOutline
};
var badgeTheme = defineStyleConfig({
  baseStyle: baseStyle5,
  variants: variants3,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
});

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-7RVLYCMR.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig5, definePartsStyle: definePartsStyle5 } = createMultiStyleConfigHelpers(tagAnatomy.keys);
var $bg3 = cssVar("tag-bg");
var $color = cssVar("tag-color");
var $shadow = cssVar("tag-shadow");
var $minH = cssVar("tag-min-height");
var $minW = cssVar("tag-min-width");
var $fontSize = cssVar("tag-font-size");
var $paddingX = cssVar("tag-padding-inline");
var baseStyleContainer = defineStyle({
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  [$color.variable]: vars.color.reference,
  [$bg3.variable]: vars.bg.reference,
  [$shadow.variable]: vars.shadow.reference,
  color: $color.reference,
  bg: $bg3.reference,
  boxShadow: $shadow.reference,
  borderRadius: "md",
  minH: $minH.reference,
  minW: $minW.reference,
  fontSize: $fontSize.reference,
  px: $paddingX.reference,
  _focusVisible: {
    [$shadow.variable]: "shadows.outline"
  }
});
var baseStyleLabel = defineStyle({
  lineHeight: 1.2,
  overflow: "visible"
});
var baseStyleCloseButton = defineStyle({
  fontSize: "lg",
  w: "5",
  h: "5",
  transitionProperty: "common",
  transitionDuration: "normal",
  borderRadius: "full",
  marginStart: "1.5",
  marginEnd: "-1",
  opacity: 0.5,
  _disabled: {
    opacity: 0.4
  },
  _focusVisible: {
    boxShadow: "outline",
    bg: "rgba(0, 0, 0, 0.14)"
  },
  _hover: {
    opacity: 0.8
  },
  _active: {
    opacity: 1
  }
});
var baseStyle6 = definePartsStyle5({
  container: baseStyleContainer,
  label: baseStyleLabel,
  closeButton: baseStyleCloseButton
});
var sizes5 = {
  sm: definePartsStyle5({
    container: {
      [$minH.variable]: "sizes.5",
      [$minW.variable]: "sizes.5",
      [$fontSize.variable]: "fontSizes.xs",
      [$paddingX.variable]: "space.2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: definePartsStyle5({
    container: {
      [$minH.variable]: "sizes.6",
      [$minW.variable]: "sizes.6",
      [$fontSize.variable]: "fontSizes.sm",
      [$paddingX.variable]: "space.2"
    }
  }),
  lg: definePartsStyle5({
    container: {
      [$minH.variable]: "sizes.8",
      [$minW.variable]: "sizes.8",
      [$fontSize.variable]: "fontSizes.md",
      [$paddingX.variable]: "space.3"
    }
  })
};
var variants4 = {
  subtle: definePartsStyle5((props) => {
    var _a7;
    return {
      container: (_a7 = badgeTheme.variants) == null ? void 0 : _a7.subtle(props)
    };
  }),
  solid: definePartsStyle5((props) => {
    var _a7;
    return {
      container: (_a7 = badgeTheme.variants) == null ? void 0 : _a7.solid(props)
    };
  }),
  outline: definePartsStyle5((props) => {
    var _a7;
    return {
      container: (_a7 = badgeTheme.variants) == null ? void 0 : _a7.outline(props)
    };
  })
};
var tagTheme = defineMultiStyleConfig5({
  variants: variants4,
  baseStyle: baseStyle6,
  sizes: sizes5,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
});

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-ICL3HPTT.mjs
var { definePartsStyle: definePartsStyle6, defineMultiStyleConfig: defineMultiStyleConfig6 } = createMultiStyleConfigHelpers(inputAnatomy.keys);
var $height2 = cssVar("input-height");
var $fontSize2 = cssVar("input-font-size");
var $padding = cssVar("input-padding");
var $borderRadius = cssVar("input-border-radius");
var baseStyle7 = definePartsStyle6({
  addon: {
    height: $height2.reference,
    fontSize: $fontSize2.reference,
    px: $padding.reference,
    borderRadius: $borderRadius.reference
  },
  field: {
    width: "100%",
    height: $height2.reference,
    fontSize: $fontSize2.reference,
    px: $padding.reference,
    borderRadius: $borderRadius.reference,
    minWidth: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  }
});
var size = {
  lg: defineStyle({
    [$fontSize2.variable]: "fontSizes.lg",
    [$padding.variable]: "space.4",
    [$borderRadius.variable]: "radii.md",
    [$height2.variable]: "sizes.12"
  }),
  md: defineStyle({
    [$fontSize2.variable]: "fontSizes.md",
    [$padding.variable]: "space.4",
    [$borderRadius.variable]: "radii.md",
    [$height2.variable]: "sizes.10"
  }),
  sm: defineStyle({
    [$fontSize2.variable]: "fontSizes.sm",
    [$padding.variable]: "space.3",
    [$borderRadius.variable]: "radii.sm",
    [$height2.variable]: "sizes.8"
  }),
  xs: defineStyle({
    [$fontSize2.variable]: "fontSizes.xs",
    [$padding.variable]: "space.2",
    [$borderRadius.variable]: "radii.sm",
    [$height2.variable]: "sizes.6"
  })
};
var sizes6 = {
  lg: definePartsStyle6({
    field: size.lg,
    group: size.lg
  }),
  md: definePartsStyle6({
    field: size.md,
    group: size.md
  }),
  sm: definePartsStyle6({
    field: size.sm,
    group: size.sm
  }),
  xs: definePartsStyle6({
    field: size.xs,
    group: size.xs
  })
};
function getDefaults(props) {
  const { focusBorderColor: fc, errorBorderColor: ec } = props;
  return {
    focusBorderColor: fc || mode("blue.500", "blue.300")(props),
    errorBorderColor: ec || mode("red.500", "red.300")(props)
  };
}
var variantOutline2 = definePartsStyle6((props) => {
  const { theme: theme2 } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);
  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: mode("gray.300", "whiteAlpha.400")(props)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: getColor(theme2, ec),
        boxShadow: `0 0 0 1px ${getColor(theme2, ec)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: getColor(theme2, fc),
        boxShadow: `0 0 0 1px ${getColor(theme2, fc)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: mode("inherit", "whiteAlpha.50")(props),
      bg: mode("gray.100", "whiteAlpha.300")(props)
    }
  };
});
var variantFilled = definePartsStyle6((props) => {
  const { theme: theme2 } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);
  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: mode("gray.100", "whiteAlpha.50")(props),
      _hover: {
        bg: mode("gray.200", "whiteAlpha.100")(props)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: getColor(theme2, ec)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: getColor(theme2, fc)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: mode("gray.100", "whiteAlpha.50")(props)
    }
  };
});
var variantFlushed = definePartsStyle6((props) => {
  const { theme: theme2 } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);
  return {
    field: {
      borderBottom: "1px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent",
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: getColor(theme2, ec),
        boxShadow: `0px 1px 0px 0px ${getColor(theme2, ec)}`
      },
      _focusVisible: {
        borderColor: getColor(theme2, fc),
        boxShadow: `0px 1px 0px 0px ${getColor(theme2, fc)}`
      }
    },
    addon: {
      borderBottom: "2px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent"
    }
  };
});
var variantUnstyled2 = definePartsStyle6({
  field: {
    bg: "transparent",
    px: "0",
    height: "auto"
  },
  addon: {
    bg: "transparent",
    px: "0",
    height: "auto"
  }
});
var variants5 = {
  outline: variantOutline2,
  filled: variantFilled,
  flushed: variantFlushed,
  unstyled: variantUnstyled2
};
var inputTheme = defineMultiStyleConfig6({
  baseStyle: baseStyle7,
  sizes: sizes6,
  variants: variants5,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
});

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-KJ26FGJD.mjs
var _a;
var baseStyle8 = defineStyle({
  ...(_a = inputTheme.baseStyle) == null ? void 0 : _a.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
});
var _a2;
var _b;
var variants6 = {
  outline: defineStyle(
    (props) => {
      var _a42, _b32;
      return (_b32 = (_a42 = inputTheme.variants) == null ? void 0 : _a42.outline(props).field) != null ? _b32 : {};
    }
  ),
  flushed: defineStyle(
    (props) => {
      var _a42, _b32;
      return (_b32 = (_a42 = inputTheme.variants) == null ? void 0 : _a42.flushed(props).field) != null ? _b32 : {};
    }
  ),
  filled: defineStyle(
    (props) => {
      var _a42, _b32;
      return (_b32 = (_a42 = inputTheme.variants) == null ? void 0 : _a42.filled(props).field) != null ? _b32 : {};
    }
  ),
  unstyled: (_b = (_a2 = inputTheme.variants) == null ? void 0 : _a2.unstyled.field) != null ? _b : {}
};
var _a3;
var _b2;
var _c;
var _d;
var _e;
var _f;
var _g;
var _h;
var sizes7 = {
  xs: (_b2 = (_a3 = inputTheme.sizes) == null ? void 0 : _a3.xs.field) != null ? _b2 : {},
  sm: (_d = (_c = inputTheme.sizes) == null ? void 0 : _c.sm.field) != null ? _d : {},
  md: (_f = (_e = inputTheme.sizes) == null ? void 0 : _e.md.field) != null ? _f : {},
  lg: (_h = (_g = inputTheme.sizes) == null ? void 0 : _g.lg.field) != null ? _h : {}
};
var textareaTheme = defineStyleConfig({
  baseStyle: baseStyle8,
  sizes: sizes7,
  variants: variants6,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
});

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-R7ZISUMV.mjs
var $bg4 = cssVar2("tooltip-bg");
var $fg2 = cssVar2("tooltip-fg");
var $arrowBg = cssVar2("popper-arrow-bg");
var baseStyle9 = defineStyle({
  bg: $bg4.reference,
  color: $fg2.reference,
  [$bg4.variable]: "colors.gray.700",
  [$fg2.variable]: "colors.whiteAlpha.900",
  _dark: {
    [$bg4.variable]: "colors.gray.300",
    [$fg2.variable]: "colors.gray.900"
  },
  [$arrowBg.variable]: $bg4.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
});
var tooltipTheme = defineStyleConfig({
  baseStyle: baseStyle9
});

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-37MNRBP2.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig7, definePartsStyle: definePartsStyle7 } = createMultiStyleConfigHelpers(progressAnatomy.keys);
var filledStyle = defineStyle((props) => {
  const { colorScheme: c, theme: t3, isIndeterminate, hasStripe } = props;
  const stripeStyle = mode(
    generateStripe(),
    generateStripe("1rem", "rgba(0,0,0,0.1)")
  )(props);
  const bgColor = mode(`${c}.500`, `${c}.200`)(props);
  const gradient = `linear-gradient(
    to right,
    transparent 0%,
    ${getColor(t3, bgColor)} 50%,
    transparent 100%
  )`;
  const addStripe = !isIndeterminate && hasStripe;
  return {
    ...addStripe && stripeStyle,
    ...isIndeterminate ? { bgImage: gradient } : { bgColor }
  };
});
var baseStyleLabel2 = defineStyle({
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
});
var baseStyleTrack2 = defineStyle((props) => {
  return {
    bg: mode("gray.100", "whiteAlpha.300")(props)
  };
});
var baseStyleFilledTrack = defineStyle((props) => {
  return {
    transitionProperty: "common",
    transitionDuration: "slow",
    ...filledStyle(props)
  };
});
var baseStyle10 = definePartsStyle7((props) => ({
  label: baseStyleLabel2,
  filledTrack: baseStyleFilledTrack(props),
  track: baseStyleTrack2(props)
}));
var sizes8 = {
  xs: definePartsStyle7({
    track: { h: "1" }
  }),
  sm: definePartsStyle7({
    track: { h: "2" }
  }),
  md: definePartsStyle7({
    track: { h: "3" }
  }),
  lg: definePartsStyle7({
    track: { h: "4" }
  })
};
var progressTheme = defineMultiStyleConfig7({
  sizes: sizes8,
  baseStyle: baseStyle10,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-UV3F75RF.mjs
var isFunction2 = (value) => typeof value === "function";
function runIfFn2(valueOrFn, ...args) {
  return isFunction2(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-XHYVH6UO.mjs
var { definePartsStyle: definePartsStyle8, defineMultiStyleConfig: defineMultiStyleConfig8 } = createMultiStyleConfigHelpers(checkboxAnatomy.keys);
var $size2 = cssVar("checkbox-size");
var baseStyleControl = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    w: $size2.reference,
    h: $size2.reference,
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "inherit",
    color: "white",
    _checked: {
      bg: mode(`${c}.500`, `${c}.200`)(props),
      borderColor: mode(`${c}.500`, `${c}.200`)(props),
      color: mode("white", "gray.900")(props),
      _hover: {
        bg: mode(`${c}.600`, `${c}.300`)(props),
        borderColor: mode(`${c}.600`, `${c}.300`)(props)
      },
      _disabled: {
        borderColor: mode("gray.200", "transparent")(props),
        bg: mode("gray.200", "whiteAlpha.300")(props),
        color: mode("gray.500", "whiteAlpha.500")(props)
      }
    },
    _indeterminate: {
      bg: mode(`${c}.500`, `${c}.200`)(props),
      borderColor: mode(`${c}.500`, `${c}.200`)(props),
      color: mode("white", "gray.900")(props)
    },
    _disabled: {
      bg: mode("gray.100", "whiteAlpha.100")(props),
      borderColor: mode("gray.100", "transparent")(props)
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: mode("red.500", "red.300")(props)
    }
  };
});
var baseStyleContainer2 = defineStyle({
  _disabled: { cursor: "not-allowed" }
});
var baseStyleLabel3 = defineStyle({
  userSelect: "none",
  _disabled: { opacity: 0.4 }
});
var baseStyleIcon = defineStyle({
  transitionProperty: "transform",
  transitionDuration: "normal"
});
var baseStyle11 = definePartsStyle8((props) => ({
  icon: baseStyleIcon,
  container: baseStyleContainer2,
  control: runIfFn2(baseStyleControl, props),
  label: baseStyleLabel3
}));
var sizes9 = {
  sm: definePartsStyle8({
    control: { [$size2.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: definePartsStyle8({
    control: { [$size2.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: definePartsStyle8({
    control: { [$size2.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
};
var checkboxTheme = defineMultiStyleConfig8({
  baseStyle: baseStyle11,
  sizes: sizes9,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-VZUATZ4E.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig9, definePartsStyle: definePartsStyle9 } = createMultiStyleConfigHelpers(radioAnatomy.keys);
var baseStyleControl2 = defineStyle((props) => {
  var _a7;
  const controlStyle = (_a7 = runIfFn2(checkboxTheme.baseStyle, props)) == null ? void 0 : _a7.control;
  return {
    ...controlStyle,
    borderRadius: "full",
    _checked: {
      ...controlStyle == null ? void 0 : controlStyle["_checked"],
      _before: {
        content: `""`,
        display: "inline-block",
        pos: "relative",
        w: "50%",
        h: "50%",
        borderRadius: "50%",
        bg: "currentColor"
      }
    }
  };
});
var baseStyle12 = definePartsStyle9((props) => {
  var _a7, _b5, _c3, _d3;
  return {
    label: (_b5 = (_a7 = checkboxTheme).baseStyle) == null ? void 0 : _b5.call(_a7, props).label,
    container: (_d3 = (_c3 = checkboxTheme).baseStyle) == null ? void 0 : _d3.call(_c3, props).container,
    control: baseStyleControl2(props)
  };
});
var sizes10 = {
  md: definePartsStyle9({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: definePartsStyle9({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: definePartsStyle9({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
};
var radioTheme = defineMultiStyleConfig9({
  baseStyle: baseStyle12,
  sizes: sizes10,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-NNA4E64A.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig10, definePartsStyle: definePartsStyle10 } = createMultiStyleConfigHelpers(selectAnatomy.keys);
var $bg5 = cssVar("select-bg");
var _a4;
var baseStyleField = defineStyle({
  ...(_a4 = inputTheme.baseStyle) == null ? void 0 : _a4.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: $bg5.reference,
  [$bg5.variable]: "colors.white",
  _dark: {
    [$bg5.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: $bg5.reference
  }
});
var baseStyleIcon2 = defineStyle({
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
});
var baseStyle13 = definePartsStyle10({
  field: baseStyleField,
  icon: baseStyleIcon2
});
var iconSpacing = defineStyle({
  paddingInlineEnd: "8"
});
var _a22;
var _b3;
var _c2;
var _d2;
var _e2;
var _f2;
var _g2;
var _h2;
var sizes11 = {
  lg: {
    ...(_a22 = inputTheme.sizes) == null ? void 0 : _a22.lg,
    field: {
      ...(_b3 = inputTheme.sizes) == null ? void 0 : _b3.lg.field,
      ...iconSpacing
    }
  },
  md: {
    ...(_c2 = inputTheme.sizes) == null ? void 0 : _c2.md,
    field: {
      ...(_d2 = inputTheme.sizes) == null ? void 0 : _d2.md.field,
      ...iconSpacing
    }
  },
  sm: {
    ...(_e2 = inputTheme.sizes) == null ? void 0 : _e2.sm,
    field: {
      ...(_f2 = inputTheme.sizes) == null ? void 0 : _f2.sm.field,
      ...iconSpacing
    }
  },
  xs: {
    ...(_g2 = inputTheme.sizes) == null ? void 0 : _g2.xs,
    field: {
      ...(_h2 = inputTheme.sizes) == null ? void 0 : _h2.xs.field,
      ...iconSpacing
    },
    icon: {
      insetEnd: "1"
    }
  }
};
var selectTheme = defineMultiStyleConfig10({
  baseStyle: baseStyle13,
  sizes: sizes11,
  variants: inputTheme.variants,
  defaultProps: inputTheme.defaultProps
});

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-X6XFE4TF.mjs
var $startColor = cssVar("skeleton-start-color");
var $endColor = cssVar("skeleton-end-color");
var baseStyle14 = defineStyle({
  [$startColor.variable]: "colors.gray.100",
  [$endColor.variable]: "colors.gray.400",
  _dark: {
    [$startColor.variable]: "colors.gray.800",
    [$endColor.variable]: "colors.gray.600"
  },
  background: $startColor.reference,
  borderColor: $endColor.reference,
  opacity: 0.7,
  borderRadius: "sm"
});
var skeletonTheme = defineStyleConfig({
  baseStyle: baseStyle14
});

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-ZREGO6US.mjs
var $bg6 = cssVar("skip-link-bg");
var baseStyle15 = defineStyle({
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [$bg6.variable]: "colors.white",
    _dark: {
      [$bg6.variable]: "colors.gray.700"
    },
    bg: $bg6.reference
  }
});
var skipLinkTheme = defineStyleConfig({
  baseStyle: baseStyle15
});

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-5FA7Y3RP.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig11, definePartsStyle: definePartsStyle11 } = createMultiStyleConfigHelpers(sliderAnatomy.keys);
var $thumbSize = cssVar("slider-thumb-size");
var $trackSize = cssVar("slider-track-size");
var $bg7 = cssVar("slider-bg");
var baseStyleContainer3 = defineStyle((props) => {
  const { orientation } = props;
  return {
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    _disabled: {
      opacity: 0.6,
      cursor: "default",
      pointerEvents: "none"
    },
    ...orient({
      orientation,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
});
var baseStyleTrack3 = defineStyle((props) => {
  const orientationStyles = orient({
    orientation: props.orientation,
    horizontal: { h: $trackSize.reference },
    vertical: { w: $trackSize.reference }
  });
  return {
    ...orientationStyles,
    overflow: "hidden",
    borderRadius: "sm",
    [$bg7.variable]: "colors.gray.200",
    _dark: {
      [$bg7.variable]: "colors.whiteAlpha.200"
    },
    _disabled: {
      [$bg7.variable]: "colors.gray.300",
      _dark: {
        [$bg7.variable]: "colors.whiteAlpha.300"
      }
    },
    bg: $bg7.reference
  };
});
var baseStyleThumb2 = defineStyle((props) => {
  const { orientation } = props;
  const orientationStyle = orient({
    orientation,
    vertical: {
      left: "50%",
      transform: `translateX(-50%)`,
      _active: {
        transform: `translateX(-50%) scale(1.15)`
      }
    },
    horizontal: {
      top: "50%",
      transform: `translateY(-50%)`,
      _active: {
        transform: `translateY(-50%) scale(1.15)`
      }
    }
  });
  return {
    ...orientationStyle,
    w: $thumbSize.reference,
    h: $thumbSize.reference,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    outline: 0,
    zIndex: 1,
    borderRadius: "full",
    bg: "white",
    boxShadow: "base",
    border: "1px solid",
    borderColor: "transparent",
    transitionProperty: "transform",
    transitionDuration: "normal",
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      bg: "gray.300"
    }
  };
});
var baseStyleFilledTrack2 = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    width: "inherit",
    height: "inherit",
    [$bg7.variable]: `colors.${c}.500`,
    _dark: {
      [$bg7.variable]: `colors.${c}.200`
    },
    bg: $bg7.reference
  };
});
var baseStyle16 = definePartsStyle11((props) => ({
  container: baseStyleContainer3(props),
  track: baseStyleTrack3(props),
  thumb: baseStyleThumb2(props),
  filledTrack: baseStyleFilledTrack2(props)
}));
var sizeLg = definePartsStyle11({
  container: {
    [$thumbSize.variable]: `sizes.4`,
    [$trackSize.variable]: `sizes.1`
  }
});
var sizeMd = definePartsStyle11({
  container: {
    [$thumbSize.variable]: `sizes.3.5`,
    [$trackSize.variable]: `sizes.1`
  }
});
var sizeSm = definePartsStyle11({
  container: {
    [$thumbSize.variable]: `sizes.2.5`,
    [$trackSize.variable]: `sizes.0.5`
  }
});
var sizes12 = {
  lg: sizeLg,
  md: sizeMd,
  sm: sizeSm
};
var sliderTheme = defineMultiStyleConfig11({
  baseStyle: baseStyle16,
  sizes: sizes12,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-L3YAB6CV.mjs
var $size3 = cssVar2("spinner-size");
var baseStyle17 = defineStyle({
  width: [$size3.reference],
  height: [$size3.reference]
});
var sizes13 = {
  xs: defineStyle({
    [$size3.variable]: "sizes.3"
  }),
  sm: defineStyle({
    [$size3.variable]: "sizes.4"
  }),
  md: defineStyle({
    [$size3.variable]: "sizes.6"
  }),
  lg: defineStyle({
    [$size3.variable]: "sizes.8"
  }),
  xl: defineStyle({
    [$size3.variable]: "sizes.12"
  })
};
var spinnerTheme = defineStyleConfig({
  baseStyle: baseStyle17,
  sizes: sizes13,
  defaultProps: {
    size: "md"
  }
});

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-2KWJXISX.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig12, definePartsStyle: definePartsStyle12 } = createMultiStyleConfigHelpers(statAnatomy.keys);
var baseStyleLabel4 = defineStyle({
  fontWeight: "medium"
});
var baseStyleHelpText = defineStyle({
  opacity: 0.8,
  marginBottom: "2"
});
var baseStyleNumber = defineStyle({
  verticalAlign: "baseline",
  fontWeight: "semibold"
});
var baseStyleIcon3 = defineStyle({
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
});
var baseStyle18 = definePartsStyle12({
  container: {},
  label: baseStyleLabel4,
  helpText: baseStyleHelpText,
  number: baseStyleNumber,
  icon: baseStyleIcon3
});
var sizes14 = {
  md: definePartsStyle12({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
};
var statTheme = defineMultiStyleConfig12({
  baseStyle: baseStyle18,
  sizes: sizes14,
  defaultProps: {
    size: "md"
  }
});

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-AFCBUAM5.mjs
var $bg8 = cssVar("kbd-bg");
var baseStyle19 = defineStyle({
  [$bg8.variable]: "colors.gray.100",
  _dark: {
    [$bg8.variable]: "colors.whiteAlpha.100"
  },
  bg: $bg8.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
});
var kbdTheme = defineStyleConfig({
  baseStyle: baseStyle19
});

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-V5KSHSOQ.mjs
var baseStyle20 = defineStyle({
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline"
  },
  _focusVisible: {
    boxShadow: "outline"
  }
});
var linkTheme = defineStyleConfig({
  baseStyle: baseStyle20
});

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-MGNM2WZQ.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig13, definePartsStyle: definePartsStyle13 } = createMultiStyleConfigHelpers(listAnatomy.keys);
var baseStyleIcon4 = defineStyle({
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
});
var baseStyle21 = definePartsStyle13({
  icon: baseStyleIcon4
});
var listTheme = defineMultiStyleConfig13({
  baseStyle: baseStyle21
});

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-N2GP2AF7.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig14, definePartsStyle: definePartsStyle14 } = createMultiStyleConfigHelpers(menuAnatomy.keys);
var $bg9 = cssVar("menu-bg");
var $shadow2 = cssVar("menu-shadow");
var baseStyleList = defineStyle({
  [$bg9.variable]: "#fff",
  [$shadow2.variable]: "shadows.sm",
  _dark: {
    [$bg9.variable]: "colors.gray.700",
    [$shadow2.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: 1,
  borderRadius: "md",
  borderWidth: "1px",
  bg: $bg9.reference,
  boxShadow: $shadow2.reference
});
var baseStyleItem = defineStyle({
  py: "1.5",
  px: "3",
  transitionProperty: "background",
  transitionDuration: "ultra-fast",
  transitionTimingFunction: "ease-in",
  _focus: {
    [$bg9.variable]: "colors.gray.100",
    _dark: {
      [$bg9.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [$bg9.variable]: "colors.gray.200",
    _dark: {
      [$bg9.variable]: "colors.whiteAlpha.200"
    }
  },
  _expanded: {
    [$bg9.variable]: "colors.gray.100",
    _dark: {
      [$bg9.variable]: "colors.whiteAlpha.100"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  bg: $bg9.reference
});
var baseStyleGroupTitle = defineStyle({
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
});
var baseStyleIcon5 = defineStyle({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
});
var baseStyleCommand = defineStyle({
  opacity: 0.6
});
var baseStyleDivider = defineStyle({
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
});
var baseStyleButton = defineStyle({
  transitionProperty: "common",
  transitionDuration: "normal"
});
var baseStyle22 = definePartsStyle14({
  button: baseStyleButton,
  list: baseStyleList,
  item: baseStyleItem,
  groupTitle: baseStyleGroupTitle,
  icon: baseStyleIcon5,
  command: baseStyleCommand,
  divider: baseStyleDivider
});
var menuTheme = defineMultiStyleConfig14({
  baseStyle: baseStyle22
});

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-JN6QBAR6.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig15, definePartsStyle: definePartsStyle15 } = createMultiStyleConfigHelpers(modalAnatomy.keys);
var $bg10 = cssVar("modal-bg");
var $shadow3 = cssVar("modal-shadow");
var baseStyleOverlay = defineStyle({
  bg: "blackAlpha.600",
  zIndex: "modal"
});
var baseStyleDialogContainer = defineStyle((props) => {
  const { isCentered, scrollBehavior } = props;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: isCentered ? "center" : "flex-start",
    overflow: scrollBehavior === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
});
var baseStyleDialog = defineStyle((props) => {
  const { isCentered, scrollBehavior } = props;
  return {
    borderRadius: "md",
    color: "inherit",
    my: isCentered ? "auto" : "16",
    mx: isCentered ? "auto" : void 0,
    zIndex: "modal",
    maxH: scrollBehavior === "inside" ? "calc(100% - 7.5rem)" : void 0,
    [$bg10.variable]: "colors.white",
    [$shadow3.variable]: "shadows.lg",
    _dark: {
      [$bg10.variable]: "colors.gray.700",
      [$shadow3.variable]: "shadows.dark-lg"
    },
    bg: $bg10.reference,
    boxShadow: $shadow3.reference
  };
});
var baseStyleHeader = defineStyle({
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
});
var baseStyleCloseButton2 = defineStyle({
  position: "absolute",
  top: "2",
  insetEnd: "3"
});
var baseStyleBody = defineStyle((props) => {
  const { scrollBehavior } = props;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: scrollBehavior === "inside" ? "auto" : void 0
  };
});
var baseStyleFooter = defineStyle({
  px: "6",
  py: "4"
});
var baseStyle23 = definePartsStyle15((props) => ({
  overlay: baseStyleOverlay,
  dialogContainer: runIfFn2(baseStyleDialogContainer, props),
  dialog: runIfFn2(baseStyleDialog, props),
  header: baseStyleHeader,
  closeButton: baseStyleCloseButton2,
  body: runIfFn2(baseStyleBody, props),
  footer: baseStyleFooter
}));
function getSize(value) {
  if (value === "full") {
    return definePartsStyle15({
      dialog: {
        maxW: "100vw",
        minH: "$100vh",
        my: "0",
        borderRadius: "0"
      }
    });
  }
  return definePartsStyle15({
    dialog: { maxW: value }
  });
}
var sizes15 = {
  xs: getSize("xs"),
  sm: getSize("sm"),
  md: getSize("md"),
  lg: getSize("lg"),
  xl: getSize("xl"),
  "2xl": getSize("2xl"),
  "3xl": getSize("3xl"),
  "4xl": getSize("4xl"),
  "5xl": getSize("5xl"),
  "6xl": getSize("6xl"),
  full: getSize("full")
};
var modalTheme = defineMultiStyleConfig15({
  baseStyle: baseStyle23,
  sizes: sizes15,
  defaultProps: { size: "md" }
});

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-57T4IAPW.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig16, definePartsStyle: definePartsStyle16 } = createMultiStyleConfigHelpers(numberInputAnatomy.keys);
var $stepperWidth = cssVar2("number-input-stepper-width");
var $inputPadding = cssVar2("number-input-input-padding");
var inputPaddingValue = calc3($stepperWidth).add("0.5rem").toString();
var $bg11 = cssVar2("number-input-bg");
var $fg3 = cssVar2("number-input-color");
var $border2 = cssVar2("number-input-border-color");
var baseStyleRoot2 = defineStyle({
  [$stepperWidth.variable]: "sizes.6",
  [$inputPadding.variable]: inputPaddingValue
});
var baseStyleField2 = defineStyle(
  (props) => {
    var _a7, _b5;
    return (_b5 = (_a7 = runIfFn2(inputTheme.baseStyle, props)) == null ? void 0 : _a7.field) != null ? _b5 : {};
  }
);
var baseStyleStepperGroup = defineStyle({
  width: $stepperWidth.reference
});
var baseStyleStepper = defineStyle({
  borderStart: "1px solid",
  borderStartColor: $border2.reference,
  color: $fg3.reference,
  bg: $bg11.reference,
  [$fg3.variable]: "colors.chakra-body-text",
  [$border2.variable]: "colors.chakra-border-color",
  _dark: {
    [$fg3.variable]: "colors.whiteAlpha.800",
    [$border2.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [$bg11.variable]: "colors.gray.200",
    _dark: {
      [$bg11.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
});
var baseStyle24 = definePartsStyle16((props) => {
  var _a7;
  return {
    root: baseStyleRoot2,
    field: (_a7 = runIfFn2(baseStyleField2, props)) != null ? _a7 : {},
    stepperGroup: baseStyleStepperGroup,
    stepper: baseStyleStepper
  };
});
function getSize2(size2) {
  var _a7, _b5, _c3;
  const sizeStyle = (_a7 = inputTheme.sizes) == null ? void 0 : _a7[size2];
  const radius = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  };
  const _fontSize = (_c3 = (_b5 = sizeStyle.field) == null ? void 0 : _b5.fontSize) != null ? _c3 : "md";
  const fontSize = typography_default.fontSizes[_fontSize];
  return definePartsStyle16({
    field: {
      ...sizeStyle.field,
      paddingInlineEnd: $inputPadding.reference,
      verticalAlign: "top"
    },
    stepper: {
      fontSize: calc3(fontSize).multiply(0.75).toString(),
      _first: {
        borderTopEndRadius: radius[size2]
      },
      _last: {
        borderBottomEndRadius: radius[size2],
        mt: "-1px",
        borderTopWidth: 1
      }
    }
  });
}
var sizes16 = {
  xs: getSize2("xs"),
  sm: getSize2("sm"),
  md: getSize2("md"),
  lg: getSize2("lg")
};
var numberInputTheme = defineMultiStyleConfig16({
  baseStyle: baseStyle24,
  sizes: sizes16,
  variants: inputTheme.variants,
  defaultProps: inputTheme.defaultProps
});

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-OEFJDLVS.mjs
var _a5;
var baseStyle25 = defineStyle({
  ...(_a5 = inputTheme.baseStyle) == null ? void 0 : _a5.field,
  textAlign: "center"
});
var sizes17 = {
  lg: defineStyle({
    fontSize: "lg",
    w: 12,
    h: 12,
    borderRadius: "md"
  }),
  md: defineStyle({
    fontSize: "md",
    w: 10,
    h: 10,
    borderRadius: "md"
  }),
  sm: defineStyle({
    fontSize: "sm",
    w: 8,
    h: 8,
    borderRadius: "sm"
  }),
  xs: defineStyle({
    fontSize: "xs",
    w: 6,
    h: 6,
    borderRadius: "sm"
  })
};
var _a23;
var _b4;
var variants7 = {
  outline: defineStyle(
    (props) => {
      var _a32, _b22, _c3;
      return (_c3 = (_b22 = runIfFn2((_a32 = inputTheme.variants) == null ? void 0 : _a32.outline, props)) == null ? void 0 : _b22.field) != null ? _c3 : {};
    }
  ),
  flushed: defineStyle(
    (props) => {
      var _a32, _b22, _c3;
      return (_c3 = (_b22 = runIfFn2((_a32 = inputTheme.variants) == null ? void 0 : _a32.flushed, props)) == null ? void 0 : _b22.field) != null ? _c3 : {};
    }
  ),
  filled: defineStyle(
    (props) => {
      var _a32, _b22, _c3;
      return (_c3 = (_b22 = runIfFn2((_a32 = inputTheme.variants) == null ? void 0 : _a32.filled, props)) == null ? void 0 : _b22.field) != null ? _c3 : {};
    }
  ),
  unstyled: (_b4 = (_a23 = inputTheme.variants) == null ? void 0 : _a23.unstyled.field) != null ? _b4 : {}
};
var pinInputTheme = defineStyleConfig({
  baseStyle: baseStyle25,
  sizes: sizes17,
  variants: variants7,
  defaultProps: inputTheme.defaultProps
});

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-U3INMHUO.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig17, definePartsStyle: definePartsStyle17 } = createMultiStyleConfigHelpers(popoverAnatomy.keys);
var $popperBg = cssVar2("popper-bg");
var $arrowBg2 = cssVar2("popper-arrow-bg");
var $arrowShadowColor = cssVar2("popper-arrow-shadow-color");
var baseStylePopper = defineStyle({ zIndex: 10 });
var baseStyleContent = defineStyle({
  [$popperBg.variable]: `colors.white`,
  bg: $popperBg.reference,
  [$arrowBg2.variable]: $popperBg.reference,
  [$arrowShadowColor.variable]: `colors.gray.200`,
  _dark: {
    [$popperBg.variable]: `colors.gray.700`,
    [$arrowShadowColor.variable]: `colors.whiteAlpha.300`
  },
  width: "xs",
  border: "1px solid",
  borderColor: "inherit",
  borderRadius: "md",
  boxShadow: "sm",
  zIndex: "inherit",
  _focusVisible: {
    outline: 0,
    boxShadow: "outline"
  }
});
var baseStyleHeader2 = defineStyle({
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
});
var baseStyleBody2 = defineStyle({
  px: 3,
  py: 2
});
var baseStyleFooter2 = defineStyle({
  px: 3,
  py: 2,
  borderTopWidth: "1px"
});
var baseStyleCloseButton3 = defineStyle({
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
});
var baseStyle26 = definePartsStyle17({
  popper: baseStylePopper,
  content: baseStyleContent,
  header: baseStyleHeader2,
  body: baseStyleBody2,
  footer: baseStyleFooter2,
  closeButton: baseStyleCloseButton3
});
var popoverTheme = defineMultiStyleConfig17({
  baseStyle: baseStyle26
});

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-VWP3ZVQT.mjs
var { definePartsStyle: definePartsStyle18, defineMultiStyleConfig: defineMultiStyleConfig18 } = createMultiStyleConfigHelpers(drawerAnatomy.keys);
var $bg12 = cssVar("drawer-bg");
var $bs = cssVar("drawer-box-shadow");
function getSize3(value) {
  if (value === "full") {
    return definePartsStyle18({
      dialog: { maxW: "100vw", h: "100vh" }
    });
  }
  return definePartsStyle18({
    dialog: { maxW: value }
  });
}
var baseStyleOverlay2 = defineStyle({
  bg: "blackAlpha.600",
  zIndex: "modal"
});
var baseStyleDialogContainer2 = defineStyle({
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
});
var baseStyleDialog2 = defineStyle((props) => {
  const { isFullHeight } = props;
  return {
    ...isFullHeight && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [$bg12.variable]: "colors.white",
    [$bs.variable]: "shadows.lg",
    _dark: {
      [$bg12.variable]: "colors.gray.700",
      [$bs.variable]: "shadows.dark-lg"
    },
    bg: $bg12.reference,
    boxShadow: $bs.reference
  };
});
var baseStyleHeader3 = defineStyle({
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
});
var baseStyleCloseButton4 = defineStyle({
  position: "absolute",
  top: "2",
  insetEnd: "3"
});
var baseStyleBody3 = defineStyle({
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
});
var baseStyleFooter3 = defineStyle({
  px: "6",
  py: "4"
});
var baseStyle27 = definePartsStyle18((props) => ({
  overlay: baseStyleOverlay2,
  dialogContainer: baseStyleDialogContainer2,
  dialog: runIfFn2(baseStyleDialog2, props),
  header: baseStyleHeader3,
  closeButton: baseStyleCloseButton4,
  body: baseStyleBody3,
  footer: baseStyleFooter3
}));
var sizes18 = {
  xs: getSize3("xs"),
  sm: getSize3("md"),
  md: getSize3("lg"),
  lg: getSize3("2xl"),
  xl: getSize3("4xl"),
  full: getSize3("full")
};
var drawerTheme = defineMultiStyleConfig18({
  baseStyle: baseStyle27,
  sizes: sizes18,
  defaultProps: {
    size: "xs"
  }
});

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-D6DZ26HA.mjs
var { definePartsStyle: definePartsStyle19, defineMultiStyleConfig: defineMultiStyleConfig19 } = createMultiStyleConfigHelpers(editableAnatomy.keys);
var baseStylePreview = defineStyle({
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
});
var baseStyleInput = defineStyle({
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
});
var baseStyleTextarea = defineStyle({
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
});
var baseStyle28 = definePartsStyle19({
  preview: baseStylePreview,
  input: baseStyleInput,
  textarea: baseStyleTextarea
});
var editableTheme = defineMultiStyleConfig19({
  baseStyle: baseStyle28
});

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-O6GGGS4Y.mjs
var { definePartsStyle: definePartsStyle20, defineMultiStyleConfig: defineMultiStyleConfig20 } = createMultiStyleConfigHelpers(formAnatomy.keys);
var $fg4 = cssVar("form-control-color");
var baseStyleRequiredIndicator = defineStyle({
  marginStart: "1",
  [$fg4.variable]: "colors.red.500",
  _dark: {
    [$fg4.variable]: "colors.red.300"
  },
  color: $fg4.reference
});
var baseStyleHelperText = defineStyle({
  mt: "2",
  [$fg4.variable]: "colors.gray.600",
  _dark: {
    [$fg4.variable]: "colors.whiteAlpha.600"
  },
  color: $fg4.reference,
  lineHeight: "normal",
  fontSize: "sm"
});
var baseStyle29 = definePartsStyle20({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: baseStyleRequiredIndicator,
  helperText: baseStyleHelperText
});
var formTheme = defineMultiStyleConfig20({
  baseStyle: baseStyle29
});

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-SRBDDT7F.mjs
var { definePartsStyle: definePartsStyle21, defineMultiStyleConfig: defineMultiStyleConfig21 } = createMultiStyleConfigHelpers(formErrorAnatomy.keys);
var $fg5 = cssVar("form-error-color");
var baseStyleText = defineStyle({
  [$fg5.variable]: `colors.red.500`,
  _dark: {
    [$fg5.variable]: `colors.red.300`
  },
  color: $fg5.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
});
var baseStyleIcon6 = defineStyle({
  marginEnd: "0.5em",
  [$fg5.variable]: `colors.red.500`,
  _dark: {
    [$fg5.variable]: `colors.red.300`
  },
  color: $fg5.reference
});
var baseStyle30 = definePartsStyle21({
  text: baseStyleText,
  icon: baseStyleIcon6
});
var formErrorTheme = defineMultiStyleConfig21({
  baseStyle: baseStyle30
});

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-VHM7WLW6.mjs
var baseStyle31 = defineStyle({
  fontSize: "md",
  marginEnd: "3",
  mb: "2",
  fontWeight: "medium",
  transitionProperty: "common",
  transitionDuration: "normal",
  opacity: 1,
  _disabled: {
    opacity: 0.4
  }
});
var formLabelTheme = defineStyleConfig({
  baseStyle: baseStyle31
});

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-WXARPSDQ.mjs
var baseStyle32 = defineStyle({
  fontFamily: "heading",
  fontWeight: "bold"
});
var sizes19 = {
  "4xl": defineStyle({
    fontSize: ["6xl", null, "7xl"],
    lineHeight: 1
  }),
  "3xl": defineStyle({
    fontSize: ["5xl", null, "6xl"],
    lineHeight: 1
  }),
  "2xl": defineStyle({
    fontSize: ["4xl", null, "5xl"],
    lineHeight: [1.2, null, 1]
  }),
  xl: defineStyle({
    fontSize: ["3xl", null, "4xl"],
    lineHeight: [1.33, null, 1.2]
  }),
  lg: defineStyle({
    fontSize: ["2xl", null, "3xl"],
    lineHeight: [1.33, null, 1.2]
  }),
  md: defineStyle({
    fontSize: "xl",
    lineHeight: 1.2
  }),
  sm: defineStyle({
    fontSize: "md",
    lineHeight: 1.2
  }),
  xs: defineStyle({
    fontSize: "sm",
    lineHeight: 1.2
  })
};
var headingTheme = defineStyleConfig({
  baseStyle: baseStyle32,
  sizes: sizes19,
  defaultProps: {
    size: "xl"
  }
});

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-FU5DDBRC.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig22, definePartsStyle: definePartsStyle22 } = createMultiStyleConfigHelpers(breadcrumbAnatomy.keys);
var $decor = cssVar("breadcrumb-link-decor");
var baseStyleLink = defineStyle({
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  textDecoration: $decor.reference,
  [$decor.variable]: "none",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    _hover: {
      [$decor.variable]: "underline"
    },
    _focusVisible: {
      boxShadow: "outline"
    }
  }
});
var baseStyle33 = definePartsStyle22({
  link: baseStyleLink
});
var breadcrumbTheme = defineMultiStyleConfig22({
  baseStyle: baseStyle33
});

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-MBVM6PEK.mjs
var baseStyle34 = defineStyle({
  lineHeight: "1.2",
  borderRadius: "md",
  fontWeight: "semibold",
  transitionProperty: "common",
  transitionDuration: "normal",
  _focusVisible: {
    boxShadow: "outline"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    _disabled: {
      bg: "initial"
    }
  }
});
var variantGhost = defineStyle((props) => {
  const { colorScheme: c, theme: theme2 } = props;
  if (c === "gray") {
    return {
      color: mode(`gray.800`, `whiteAlpha.900`)(props),
      _hover: {
        bg: mode(`gray.100`, `whiteAlpha.200`)(props)
      },
      _active: { bg: mode(`gray.200`, `whiteAlpha.300`)(props) }
    };
  }
  const darkHoverBg = transparentize2(`${c}.200`, 0.12)(theme2);
  const darkActiveBg = transparentize2(`${c}.200`, 0.24)(theme2);
  return {
    color: mode(`${c}.600`, `${c}.200`)(props),
    bg: "transparent",
    _hover: {
      bg: mode(`${c}.50`, darkHoverBg)(props)
    },
    _active: {
      bg: mode(`${c}.100`, darkActiveBg)(props)
    }
  };
});
var variantOutline3 = defineStyle((props) => {
  const { colorScheme: c } = props;
  const borderColor = mode(`gray.200`, `whiteAlpha.300`)(props);
  return {
    border: "1px solid",
    borderColor: c === "gray" ? borderColor : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ...runIfFn2(variantGhost, props)
  };
});
var accessibleColorMap = {
  yellow: {
    bg: "yellow.400",
    color: "black",
    hoverBg: "yellow.500",
    activeBg: "yellow.600"
  },
  cyan: {
    bg: "cyan.400",
    color: "black",
    hoverBg: "cyan.500",
    activeBg: "cyan.600"
  }
};
var variantSolid2 = defineStyle((props) => {
  var _a7;
  const { colorScheme: c } = props;
  if (c === "gray") {
    const bg2 = mode(`gray.100`, `whiteAlpha.200`)(props);
    return {
      bg: bg2,
      color: mode(`gray.800`, `whiteAlpha.900`)(props),
      _hover: {
        bg: mode(`gray.200`, `whiteAlpha.300`)(props),
        _disabled: {
          bg: bg2
        }
      },
      _active: { bg: mode(`gray.300`, `whiteAlpha.400`)(props) }
    };
  }
  const {
    bg = `${c}.500`,
    color: color3 = "white",
    hoverBg = `${c}.600`,
    activeBg = `${c}.700`
  } = (_a7 = accessibleColorMap[c]) != null ? _a7 : {};
  const background3 = mode(bg, `${c}.200`)(props);
  return {
    bg: background3,
    color: mode(color3, `gray.800`)(props),
    _hover: {
      bg: mode(hoverBg, `${c}.300`)(props),
      _disabled: {
        bg: background3
      }
    },
    _active: { bg: mode(activeBg, `${c}.400`)(props) }
  };
});
var variantLink = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: mode(`${c}.500`, `${c}.200`)(props),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: mode(`${c}.700`, `${c}.500`)(props)
    }
  };
});
var variantUnstyled3 = defineStyle({
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
});
var variants8 = {
  ghost: variantGhost,
  outline: variantOutline3,
  solid: variantSolid2,
  link: variantLink,
  unstyled: variantUnstyled3
};
var sizes20 = {
  lg: defineStyle({
    h: "12",
    minW: "12",
    fontSize: "lg",
    px: "6"
  }),
  md: defineStyle({
    h: "10",
    minW: "10",
    fontSize: "md",
    px: "4"
  }),
  sm: defineStyle({
    h: "8",
    minW: "8",
    fontSize: "sm",
    px: "3"
  }),
  xs: defineStyle({
    h: "6",
    minW: "6",
    fontSize: "xs",
    px: "2"
  })
};
var buttonTheme = defineStyleConfig({
  baseStyle: baseStyle34,
  variants: variants8,
  sizes: sizes20,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
});

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-F7CKIHPM.mjs
var { definePartsStyle: definePartsStyle23, defineMultiStyleConfig: defineMultiStyleConfig23 } = createMultiStyleConfigHelpers(cardAnatomy.keys);
var $bg13 = cssVar("card-bg");
var $padding2 = cssVar("card-padding");
var $shadow4 = cssVar("card-shadow");
var $radius = cssVar("card-radius");
var $border3 = cssVar("card-border-width", "0");
var $borderColor = cssVar("card-border-color");
var baseStyle35 = definePartsStyle23({
  container: {
    [$bg13.variable]: "colors.chakra-body-bg",
    backgroundColor: $bg13.reference,
    boxShadow: $shadow4.reference,
    borderRadius: $radius.reference,
    color: "chakra-body-text",
    borderWidth: $border3.reference,
    borderColor: $borderColor.reference
  },
  body: {
    padding: $padding2.reference,
    flex: "1 1 0%"
  },
  header: {
    padding: $padding2.reference
  },
  footer: {
    padding: $padding2.reference
  }
});
var sizes21 = {
  sm: definePartsStyle23({
    container: {
      [$radius.variable]: "radii.base",
      [$padding2.variable]: "space.3"
    }
  }),
  md: definePartsStyle23({
    container: {
      [$radius.variable]: "radii.md",
      [$padding2.variable]: "space.5"
    }
  }),
  lg: definePartsStyle23({
    container: {
      [$radius.variable]: "radii.xl",
      [$padding2.variable]: "space.7"
    }
  })
};
var variants9 = {
  elevated: definePartsStyle23({
    container: {
      [$shadow4.variable]: "shadows.base",
      _dark: {
        [$bg13.variable]: "colors.gray.700"
      }
    }
  }),
  outline: definePartsStyle23({
    container: {
      [$border3.variable]: "1px",
      [$borderColor.variable]: "colors.chakra-border-color"
    }
  }),
  filled: definePartsStyle23({
    container: {
      [$bg13.variable]: "colors.chakra-subtle-bg"
    }
  }),
  unstyled: {
    body: {
      [$padding2.variable]: 0
    },
    header: {
      [$padding2.variable]: 0
    },
    footer: {
      [$padding2.variable]: 0
    }
  }
};
var cardTheme = defineMultiStyleConfig23({
  baseStyle: baseStyle35,
  variants: variants9,
  sizes: sizes21,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
});

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-OB7MMEC3.mjs
var $size4 = cssVar2("close-button-size");
var $bg14 = cssVar2("close-button-bg");
var baseStyle36 = defineStyle({
  w: [$size4.reference],
  h: [$size4.reference],
  borderRadius: "md",
  transitionProperty: "common",
  transitionDuration: "normal",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    [$bg14.variable]: "colors.blackAlpha.100",
    _dark: {
      [$bg14.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [$bg14.variable]: "colors.blackAlpha.200",
    _dark: {
      [$bg14.variable]: "colors.whiteAlpha.200"
    }
  },
  _focusVisible: {
    boxShadow: "outline"
  },
  bg: $bg14.reference
});
var sizes22 = {
  lg: defineStyle({
    [$size4.variable]: "sizes.10",
    fontSize: "md"
  }),
  md: defineStyle({
    [$size4.variable]: "sizes.8",
    fontSize: "xs"
  }),
  sm: defineStyle({
    [$size4.variable]: "sizes.6",
    fontSize: "2xs"
  })
};
var closeButtonTheme = defineStyleConfig({
  baseStyle: baseStyle36,
  sizes: sizes22,
  defaultProps: {
    size: "md"
  }
});

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-K3RH7Y2L.mjs
var { variants: variants10, defaultProps } = badgeTheme;
var baseStyle37 = defineStyle({
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: vars.bg.reference,
  color: vars.color.reference,
  boxShadow: vars.shadow.reference
});
var codeTheme = defineStyleConfig({
  baseStyle: baseStyle37,
  variants: variants10,
  defaultProps
});

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-TECE6HDR.mjs
var baseStyle38 = defineStyle({
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
});
var containerTheme = defineStyleConfig({
  baseStyle: baseStyle38
});

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-5S44M2O4.mjs
var baseStyle39 = defineStyle({
  opacity: 0.6,
  borderColor: "inherit"
});
var variantSolid3 = defineStyle({
  borderStyle: "solid"
});
var variantDashed = defineStyle({
  borderStyle: "dashed"
});
var variants11 = {
  solid: variantSolid3,
  dashed: variantDashed
};
var dividerTheme = defineStyleConfig({
  baseStyle: baseStyle39,
  variants: variants11,
  defaultProps: {
    variant: "solid"
  }
});

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-J7AGDWFO.mjs
var { definePartsStyle: definePartsStyle24, defineMultiStyleConfig: defineMultiStyleConfig24 } = createMultiStyleConfigHelpers(accordionAnatomy.keys);
var baseStyleContainer4 = defineStyle({
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
});
var baseStyleButton2 = defineStyle({
  transitionProperty: "common",
  transitionDuration: "normal",
  fontSize: "md",
  _focusVisible: {
    boxShadow: "outline"
  },
  _hover: {
    bg: "blackAlpha.50"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  px: "4",
  py: "2"
});
var baseStylePanel = defineStyle({
  pt: "2",
  px: "4",
  pb: "5"
});
var baseStyleIcon7 = defineStyle({
  fontSize: "1.25em"
});
var baseStyle40 = definePartsStyle24({
  container: baseStyleContainer4,
  button: baseStyleButton2,
  panel: baseStylePanel,
  icon: baseStyleIcon7
});
var accordionTheme = defineMultiStyleConfig24({ baseStyle: baseStyle40 });

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-BNQWYFTH.mjs
var { definePartsStyle: definePartsStyle25, defineMultiStyleConfig: defineMultiStyleConfig25 } = createMultiStyleConfigHelpers(alertAnatomy.keys);
var $fg6 = cssVar("alert-fg");
var $bg15 = cssVar("alert-bg");
var baseStyle41 = definePartsStyle25({
  container: {
    bg: $bg15.reference,
    px: "4",
    py: "3"
  },
  title: {
    fontWeight: "bold",
    lineHeight: "6",
    marginEnd: "2"
  },
  description: {
    lineHeight: "6"
  },
  icon: {
    color: $fg6.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "6"
  },
  spinner: {
    color: $fg6.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "5"
  }
});
function getBg(props) {
  const { theme: theme2, colorScheme: c } = props;
  const darkBg = transparentize2(`${c}.200`, 0.16)(theme2);
  return {
    light: `colors.${c}.100`,
    dark: darkBg
  };
}
var variantSubtle2 = definePartsStyle25((props) => {
  const { colorScheme: c } = props;
  const bg = getBg(props);
  return {
    container: {
      [$fg6.variable]: `colors.${c}.600`,
      [$bg15.variable]: bg.light,
      _dark: {
        [$fg6.variable]: `colors.${c}.200`,
        [$bg15.variable]: bg.dark
      }
    }
  };
});
var variantLeftAccent = definePartsStyle25((props) => {
  const { colorScheme: c } = props;
  const bg = getBg(props);
  return {
    container: {
      [$fg6.variable]: `colors.${c}.600`,
      [$bg15.variable]: bg.light,
      _dark: {
        [$fg6.variable]: `colors.${c}.200`,
        [$bg15.variable]: bg.dark
      },
      paddingStart: "3",
      borderStartWidth: "4px",
      borderStartColor: $fg6.reference
    }
  };
});
var variantTopAccent = definePartsStyle25((props) => {
  const { colorScheme: c } = props;
  const bg = getBg(props);
  return {
    container: {
      [$fg6.variable]: `colors.${c}.600`,
      [$bg15.variable]: bg.light,
      _dark: {
        [$fg6.variable]: `colors.${c}.200`,
        [$bg15.variable]: bg.dark
      },
      pt: "2",
      borderTopWidth: "4px",
      borderTopColor: $fg6.reference
    }
  };
});
var variantSolid4 = definePartsStyle25((props) => {
  const { colorScheme: c } = props;
  return {
    container: {
      [$fg6.variable]: `colors.white`,
      [$bg15.variable]: `colors.${c}.600`,
      _dark: {
        [$fg6.variable]: `colors.gray.900`,
        [$bg15.variable]: `colors.${c}.200`
      },
      color: $fg6.reference
    }
  };
});
var variants12 = {
  subtle: variantSubtle2,
  "left-accent": variantLeftAccent,
  "top-accent": variantTopAccent,
  solid: variantSolid4
};
var alertTheme = defineMultiStyleConfig25({
  baseStyle: baseStyle41,
  variants: variants12,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
});

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-Q5ZQE4MD.mjs
var { definePartsStyle: definePartsStyle26, defineMultiStyleConfig: defineMultiStyleConfig26 } = createMultiStyleConfigHelpers(avatarAnatomy.keys);
var $border4 = cssVar("avatar-border-color");
var $bg16 = cssVar("avatar-bg");
var $fs = cssVar("avatar-font-size");
var $size5 = cssVar("avatar-size");
var baseStyleBadge = defineStyle({
  borderRadius: "full",
  border: "0.2em solid",
  borderColor: $border4.reference,
  [$border4.variable]: "white",
  _dark: {
    [$border4.variable]: "colors.gray.800"
  }
});
var baseStyleExcessLabel = defineStyle({
  bg: $bg16.reference,
  fontSize: $fs.reference,
  width: $size5.reference,
  height: $size5.reference,
  lineHeight: "1",
  [$bg16.variable]: "colors.gray.200",
  _dark: {
    [$bg16.variable]: "colors.whiteAlpha.400"
  }
});
var baseStyleContainer5 = defineStyle((props) => {
  const { name, theme: theme2 } = props;
  const bg = name ? randomColor({ string: name }) : "colors.gray.400";
  const isBgDark = isDark(bg)(theme2);
  let color3 = "white";
  if (!isBgDark)
    color3 = "gray.800";
  return {
    bg: $bg16.reference,
    fontSize: $fs.reference,
    color: color3,
    borderColor: $border4.reference,
    verticalAlign: "top",
    width: $size5.reference,
    height: $size5.reference,
    "&:not([data-loaded])": {
      [$bg16.variable]: bg
    },
    [$border4.variable]: "colors.white",
    _dark: {
      [$border4.variable]: "colors.gray.800"
    }
  };
});
var baseStyleLabel5 = defineStyle({
  fontSize: $fs.reference,
  lineHeight: "1"
});
var baseStyle42 = definePartsStyle26((props) => ({
  badge: runIfFn2(baseStyleBadge, props),
  excessLabel: runIfFn2(baseStyleExcessLabel, props),
  container: runIfFn2(baseStyleContainer5, props),
  label: baseStyleLabel5
}));
function getSize4(size2) {
  const themeSize = size2 !== "100%" ? sizes_default[size2] : void 0;
  return definePartsStyle26({
    container: {
      [$size5.variable]: themeSize != null ? themeSize : size2,
      [$fs.variable]: `calc(${themeSize != null ? themeSize : size2} / 2.5)`
    },
    excessLabel: {
      [$size5.variable]: themeSize != null ? themeSize : size2,
      [$fs.variable]: `calc(${themeSize != null ? themeSize : size2} / 2.5)`
    }
  });
}
var sizes23 = {
  "2xs": getSize4(4),
  xs: getSize4(6),
  sm: getSize4(8),
  md: getSize4(12),
  lg: getSize4(16),
  xl: getSize4(24),
  "2xl": getSize4(32),
  full: getSize4("100%")
};
var avatarTheme = defineMultiStyleConfig26({
  baseStyle: baseStyle42,
  sizes: sizes23,
  defaultProps: {
    size: "md"
  }
});

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-P7SDT22G.mjs
var components = {
  Accordion: accordionTheme,
  Alert: alertTheme,
  Avatar: avatarTheme,
  Badge: badgeTheme,
  Breadcrumb: breadcrumbTheme,
  Button: buttonTheme,
  Checkbox: checkboxTheme,
  CloseButton: closeButtonTheme,
  Code: codeTheme,
  Container: containerTheme,
  Divider: dividerTheme,
  Drawer: drawerTheme,
  Editable: editableTheme,
  Form: formTheme,
  FormError: formErrorTheme,
  FormLabel: formLabelTheme,
  Heading: headingTheme,
  Input: inputTheme,
  Kbd: kbdTheme,
  Link: linkTheme,
  List: listTheme,
  Menu: menuTheme,
  Modal: modalTheme,
  NumberInput: numberInputTheme,
  PinInput: pinInputTheme,
  Popover: popoverTheme,
  Progress: progressTheme,
  Radio: radioTheme,
  Select: selectTheme,
  Skeleton: skeletonTheme,
  SkipLink: skipLinkTheme,
  Slider: sliderTheme,
  Spinner: spinnerTheme,
  Stat: statTheme,
  Switch: switchTheme,
  Table: tableTheme,
  Tabs: tabsTheme,
  Tag: tagTheme,
  Textarea: textareaTheme,
  Tooltip: tooltipTheme,
  Card: cardTheme,
  Stepper: stepperTheme
};

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-5GOSZLB7.mjs
var semanticTokens = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
    "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
    "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
};

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/chunk-3F7U33P5.mjs
var styles = {
  global: {
    body: {
      fontFamily: "body",
      color: "chakra-body-text",
      bg: "chakra-body-bg",
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base"
    },
    "*::placeholder": {
      color: "chakra-placeholder-color"
    },
    "*, *::before, &::after": {
      borderColor: "chakra-border-color"
    }
  }
};

// node_modules/@chakra-ui/theme-utils/node_modules/@chakra-ui/theme/dist/index.mjs
var direction = "ltr";
var config = {
  useSystemColorMode: false,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
};
var theme = {
  semanticTokens,
  direction,
  ...foundations,
  components,
  styles,
  config
};
var baseTheme = {
  semanticTokens,
  direction,
  components: {},
  ...foundations,
  styles,
  config
};

// node_modules/@chakra-ui/theme-utils/dist/chunk-LIR5QAZY.mjs
var import_lodash9 = __toESM(require_lodash(), 1);
function isFunction3(value) {
  return typeof value === "function";
}
function pipe3(...fns) {
  return (v) => fns.reduce((a, b) => b(a), v);
}
var createExtendTheme = (theme2) => {
  return function extendTheme2(...extensions) {
    let overrides = [...extensions];
    let activeTheme = extensions[extensions.length - 1];
    if (isChakraTheme(activeTheme) && // this ensures backward compatibility
    // previously only `extendTheme(override, activeTheme?)` was allowed
    overrides.length > 1) {
      overrides = overrides.slice(0, overrides.length - 1);
    } else {
      activeTheme = theme2;
    }
    return pipe3(
      ...overrides.map(
        (extension) => (prevTheme) => isFunction3(extension) ? extension(prevTheme) : mergeThemeOverride(prevTheme, extension)
      )
    )(activeTheme);
  };
};
var extendTheme = createExtendTheme(theme);
var extendBaseTheme = createExtendTheme(baseTheme);
function mergeThemeOverride(...overrides) {
  return (0, import_lodash9.default)({}, ...overrides, mergeThemeCustomizer);
}
function mergeThemeCustomizer(source, override, key, object) {
  if ((isFunction3(source) || isFunction3(override)) && Object.prototype.hasOwnProperty.call(object, key)) {
    return (...args) => {
      const sourceValue = isFunction3(source) ? source(...args) : source;
      const overrideValue = isFunction3(override) ? override(...args) : override;
      return (0, import_lodash9.default)({}, sourceValue, overrideValue, mergeThemeCustomizer);
    };
  }
  return void 0;
}

// node_modules/@chakra-ui/system/node_modules/@chakra-ui/utils/dist/chunk-O3SWHQEE.mjs
function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
var isBrowser = canUseDOM();

// node_modules/@chakra-ui/system/node_modules/@chakra-ui/utils/dist/chunk-YTQ3XZ3T.mjs
var import_lodash10 = __toESM(require_lodash(), 1);
function omit2(object, keys) {
  const result = {};
  Object.keys(object).forEach((key) => {
    if (keys.includes(key))
      return;
    result[key] = object[key];
  });
  return result;
}
function get3(obj, path, fallback, index) {
  const key = typeof path === "string" ? path.split(".") : [path];
  for (index = 0; index < key.length; index += 1) {
    if (!obj)
      break;
    obj = obj[key[index]];
  }
  return obj === void 0 ? fallback : obj;
}
var memoize4 = (fn) => {
  const cache = /* @__PURE__ */ new WeakMap();
  const memoizedFn = (obj, path, fallback, index) => {
    if (typeof obj === "undefined") {
      return fn(obj, path, fallback);
    }
    if (!cache.has(obj)) {
      cache.set(obj, /* @__PURE__ */ new Map());
    }
    const map = cache.get(obj);
    if (map.has(path)) {
      return map.get(path);
    }
    const value = fn(obj, path, fallback, index);
    map.set(path, value);
    return value;
  };
  return memoizedFn;
};
var memoizedGet3 = memoize4(get3);
function objectFilter(object, fn) {
  const result = {};
  Object.keys(object).forEach((key) => {
    const value = object[key];
    const shouldPass = fn(value, key, object);
    if (shouldPass) {
      result[key] = value;
    }
  });
  return result;
}
var filterUndefined = (object) => objectFilter(object, (val) => val !== null && val !== void 0);

// node_modules/@chakra-ui/system/node_modules/@chakra-ui/utils/dist/chunk-Y5FGD7DM.mjs
function isFunction4(value) {
  return typeof value === "function";
}
var __DEV__ = true;

// node_modules/@chakra-ui/system/node_modules/@chakra-ui/utils/dist/chunk-M3TFMUOL.mjs
function runIfFn3(valueOrFn, ...args) {
  return isFunction4(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}
function once(fn) {
  let result;
  return function func(...args) {
    if (fn) {
      result = fn.apply(this, args);
      fn = null;
    }
    return result;
  };
}
var warn2 = once((options) => () => {
  const { condition, message } = options;
  if (condition && __DEV__) {
    console.warn(message);
  }
});
var error = once((options) => () => {
  const { condition, message } = options;
  if (condition && __DEV__) {
    console.error(message);
  }
});

// node_modules/@chakra-ui/system/node_modules/@chakra-ui/utils/dist/chunk-YAFHXCR4.mjs
var minSafeInteger = Number.MIN_SAFE_INTEGER || -9007199254740991;
var maxSafeInteger = Number.MAX_SAFE_INTEGER || 9007199254740991;

// node_modules/framesync/dist/es/on-next-frame.mjs
var defaultTimestep = 1 / 60 * 1e3;
var getCurrentTime = typeof performance !== "undefined" ? () => performance.now() : () => Date.now();
var onNextFrame = typeof window !== "undefined" ? (callback) => window.requestAnimationFrame(callback) : (callback) => setTimeout(() => callback(getCurrentTime()), defaultTimestep);

// node_modules/framesync/dist/es/create-render-step.mjs
function createRenderStep(runNextFrame2) {
  let toRun = [];
  let toRunNextFrame = [];
  let numToRun = 0;
  let isProcessing2 = false;
  let flushNextFrame = false;
  const toKeepAlive = /* @__PURE__ */ new WeakSet();
  const step = {
    schedule: (callback, keepAlive = false, immediate = false) => {
      const addToCurrentFrame = immediate && isProcessing2;
      const buffer = addToCurrentFrame ? toRun : toRunNextFrame;
      if (keepAlive)
        toKeepAlive.add(callback);
      if (buffer.indexOf(callback) === -1) {
        buffer.push(callback);
        if (addToCurrentFrame && isProcessing2)
          numToRun = toRun.length;
      }
      return callback;
    },
    cancel: (callback) => {
      const index = toRunNextFrame.indexOf(callback);
      if (index !== -1)
        toRunNextFrame.splice(index, 1);
      toKeepAlive.delete(callback);
    },
    process: (frameData) => {
      if (isProcessing2) {
        flushNextFrame = true;
        return;
      }
      isProcessing2 = true;
      [toRun, toRunNextFrame] = [toRunNextFrame, toRun];
      toRunNextFrame.length = 0;
      numToRun = toRun.length;
      if (numToRun) {
        for (let i = 0; i < numToRun; i++) {
          const callback = toRun[i];
          callback(frameData);
          if (toKeepAlive.has(callback)) {
            step.schedule(callback);
            runNextFrame2();
          }
        }
      }
      isProcessing2 = false;
      if (flushNextFrame) {
        flushNextFrame = false;
        step.process(frameData);
      }
    }
  };
  return step;
}

// node_modules/framesync/dist/es/index.mjs
var maxElapsed = 40;
var useDefaultElapsed = true;
var runNextFrame = false;
var isProcessing = false;
var frame = {
  delta: 0,
  timestamp: 0
};
var stepsOrder = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
];
var steps = stepsOrder.reduce((acc, key) => {
  acc[key] = createRenderStep(() => runNextFrame = true);
  return acc;
}, {});
var sync = stepsOrder.reduce((acc, key) => {
  const step = steps[key];
  acc[key] = (process2, keepAlive = false, immediate = false) => {
    if (!runNextFrame)
      startLoop();
    return step.schedule(process2, keepAlive, immediate);
  };
  return acc;
}, {});
var cancelSync = stepsOrder.reduce((acc, key) => {
  acc[key] = steps[key].cancel;
  return acc;
}, {});
var flushSync = stepsOrder.reduce((acc, key) => {
  acc[key] = () => steps[key].process(frame);
  return acc;
}, {});
var processStep = (stepId) => steps[stepId].process(frame);
var processFrame = (timestamp) => {
  runNextFrame = false;
  frame.delta = useDefaultElapsed ? defaultTimestep : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);
  frame.timestamp = timestamp;
  isProcessing = true;
  stepsOrder.forEach(processStep);
  isProcessing = false;
  if (runNextFrame) {
    useDefaultElapsed = false;
    onNextFrame(processFrame);
  }
};
var startLoop = () => {
  runNextFrame = true;
  useDefaultElapsed = true;
  if (!isProcessing)
    onNextFrame(processFrame);
};

// node_modules/@chakra-ui/system/node_modules/@chakra-ui/utils/dist/chunk-FGAEJGLB.mjs
var breakpoints2 = Object.freeze([
  "base",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl"
]);

// node_modules/@chakra-ui/system/node_modules/@chakra-ui/utils/dist/chunk-5LUSIWEA.mjs
var focusableElList = [
  "input:not(:disabled):not([disabled])",
  "select:not(:disabled):not([disabled])",
  "textarea:not(:disabled):not([disabled])",
  "embed",
  "iframe",
  "object",
  "a[href]",
  "area[href]",
  "button:not(:disabled):not([disabled])",
  "[tabindex]",
  "audio[controls]",
  "video[controls]",
  "*[tabindex]:not([aria-disabled])",
  "*[contenteditable]"
];
var focusableElSelector = focusableElList.join();

// node_modules/@chakra-ui/system/dist/chunk-DMO4EI7P.mjs
var import_react7 = __toESM(require_react(), 1);
var import_react_fast_compare = __toESM(require_react_fast_compare(), 1);
function useStyleConfigImpl(themeKey, props = {}) {
  var _a7;
  const { styleConfig: styleConfigProp, ...rest } = props;
  const { theme: theme2, colorMode } = useChakra();
  const themeStyleConfig = themeKey ? memoizedGet3(theme2, `components.${themeKey}`) : void 0;
  const styleConfig = styleConfigProp || themeStyleConfig;
  const mergedProps = (0, import_lodash10.default)(
    { theme: theme2, colorMode },
    (_a7 = styleConfig == null ? void 0 : styleConfig.defaultProps) != null ? _a7 : {},
    filterUndefined(omit2(rest, ["children"]))
  );
  const stylesRef = (0, import_react7.useRef)({});
  if (styleConfig) {
    const getStyles = resolveStyleConfig(styleConfig);
    const styles2 = getStyles(mergedProps);
    const isStyleEqual = (0, import_react_fast_compare.default)(stylesRef.current, styles2);
    if (!isStyleEqual) {
      stylesRef.current = styles2;
    }
  }
  return stylesRef.current;
}
function useStyleConfig(themeKey, props = {}) {
  return useStyleConfigImpl(themeKey, props);
}
function useMultiStyleConfig(themeKey, props = {}) {
  return useStyleConfigImpl(themeKey, props);
}

// node_modules/@chakra-ui/system/dist/chunk-FDQH4LQI.mjs
var allPropNames = /* @__PURE__ */ new Set([
  ...propNames,
  "textStyle",
  "layerStyle",
  "apply",
  "noOfLines",
  "focusBorderColor",
  "errorBorderColor",
  "as",
  "__css",
  "css",
  "sx"
]);
var validHTMLProps = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function shouldForwardProp(prop) {
  return validHTMLProps.has(prop) || !allPropNames.has(prop);
}

// node_modules/@chakra-ui/object-utils/dist/chunk-OLTBUDV5.mjs
function assignAfter(target, ...sources) {
  if (target == null) {
    throw new TypeError("Cannot convert undefined or null to object");
  }
  const result = { ...target };
  for (const nextSource of sources) {
    if (nextSource == null)
      continue;
    for (const nextKey in nextSource) {
      if (!Object.prototype.hasOwnProperty.call(nextSource, nextKey))
        continue;
      if (nextKey in result)
        delete result[nextKey];
      result[nextKey] = nextSource[nextKey];
    }
  }
  return result;
}

// node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.development.esm.js
var React = __toESM(require_react());
init_emotion_is_prop_valid_esm();

// node_modules/@emotion/styled/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js
var isBrowser2 = true;
function getRegisteredStyles(registered, registeredStyles, classNames2) {
  var rawClassName = "";
  classNames2.split(" ").forEach(function(className) {
    if (registered[className] !== void 0) {
      registeredStyles.push(registered[className] + ";");
    } else if (className) {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles2(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;
  if (
    // we only need to add the styles to the registered cache if the
    // class name could be used further down
    // the tree but if it's a string tag, we know it won't
    // so we don't have to add it to registered cache.
    // this improves memory usage since we can avoid storing the whole style string
    (isStringTag === false || // we need to always store it if we're in compat mode and
    // in node since emotion-server relies on whether a style is in
    // the registered cache to know whether a style is global or not
    // also, note that this check will be dead code eliminated in the browser
    isBrowser2 === false) && cache.registered[className] === void 0
  ) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles2(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;
  if (cache.inserted[serialized.name] === void 0) {
    var current = serialized;
    do {
      cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
      current = current.next;
    } while (current !== void 0);
  }
};

// node_modules/@emotion/styled/node_modules/@emotion/serialize/dist/emotion-serialize.development.esm.js
init_emotion_memoize_esm();
var isDevelopment = true;
var ILLEGAL_ESCAPE_SEQUENCE_ERROR = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`;
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty2(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue2(value) {
  return value != null && typeof value !== "boolean";
};
var processStyleName = memoize(function(styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
});
var processStyleValue = function processStyleValue2(key, value) {
  switch (key) {
    case "animation":
    case "animationName": {
      if (typeof value === "string") {
        return value.replace(animationRegex, function(match, p1, p2) {
          cursor = {
            name: p1,
            styles: p2,
            next: cursor
          };
          return p1;
        });
      }
    }
  }
  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
    return value + "px";
  }
  return value;
};
{
  contentValuePattern = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
  contentValues = ["normal", "none", "initial", "inherit", "unset"];
  oldProcessStyleValue = processStyleValue;
  msPattern = /^-ms-/;
  hyphenPattern = /-(.)/g;
  hyphenatedCache = {};
  processStyleValue = function processStyleValue3(key, value) {
    if (key === "content") {
      if (typeof value !== "string" || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }
    var processed = oldProcessStyleValue(key, value);
    if (processed !== "" && !isCustomProperty(key) && key.indexOf("-") !== -1 && hyphenatedCache[key] === void 0) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, "ms-").replace(hyphenPattern, function(str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }
    return processed;
  };
}
var contentValuePattern;
var contentValues;
var oldProcessStyleValue;
var msPattern;
var hyphenPattern;
var hyphenatedCache;
var noComponentSelectorMessage = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return "";
  }
  var componentSelector = interpolation;
  if (componentSelector.__emotion_styles !== void 0) {
    if (String(componentSelector) === "NO_COMPONENT_SELECTOR") {
      throw new Error(noComponentSelectorMessage);
    }
    return componentSelector;
  }
  switch (typeof interpolation) {
    case "boolean": {
      return "";
    }
    case "object": {
      var keyframes2 = interpolation;
      if (keyframes2.anim === 1) {
        cursor = {
          name: keyframes2.name,
          styles: keyframes2.styles,
          next: cursor
        };
        return keyframes2.name;
      }
      var serializedStyles = interpolation;
      if (serializedStyles.styles !== void 0) {
        var next = serializedStyles.next;
        if (next !== void 0) {
          while (next !== void 0) {
            cursor = {
              name: next.name,
              styles: next.styles,
              next: cursor
            };
            next = next.next;
          }
        }
        var styles2 = serializedStyles.styles + ";";
        return styles2;
      }
      return createStringFromObject(mergedProps, registered, interpolation);
    }
    case "function": {
      if (mergedProps !== void 0) {
        var previousCursor = cursor;
        var result = interpolation(mergedProps);
        cursor = previousCursor;
        return handleInterpolation(mergedProps, registered, result);
      } else {
        console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      }
      break;
    }
    case "string":
      {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function(_match, _p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, "") + "`");
          return "${" + fakeVarName + "}";
        });
        if (matched.length) {
          console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(matched, ["`" + replaced + "`"]).join("\n") + "\n\nYou should wrap it with `css` like this:\n\ncss`" + replaced + "`");
        }
      }
      break;
  }
  var asString = interpolation;
  if (registered == null) {
    return asString;
  }
  var cached = registered[asString];
  return cached !== void 0 ? cached : asString;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = "";
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var key in obj) {
      var value = obj[key];
      if (typeof value !== "object") {
        var asString = value;
        if (registered != null && registered[asString] !== void 0) {
          string += key + "{" + registered[asString] + "}";
        } else if (isProcessableValue(asString)) {
          string += processStyleName(key) + ":" + processStyleValue(key, asString) + ";";
        }
      } else {
        if (key === "NO_COMPONENT_SELECTOR" && isDevelopment) {
          throw new Error(noComponentSelectorMessage);
        }
        if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(key) + ":" + processStyleValue(key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);
          switch (key) {
            case "animation":
            case "animationName": {
              string += processStyleName(key) + ":" + interpolated + ";";
              break;
            }
            default: {
              if (key === "undefined") {
                console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
              }
              string += key + "{" + interpolated + "}";
            }
          }
        }
      }
    }
  }
  return string;
}
var labelPattern = /label:\s*([^\s;{]+)\s*(;|$)/g;
var cursor;
function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
    return args[0];
  }
  var stringMode = true;
  var styles2 = "";
  cursor = void 0;
  var strings = args[0];
  if (strings == null || strings.raw === void 0) {
    stringMode = false;
    styles2 += handleInterpolation(mergedProps, registered, strings);
  } else {
    var asTemplateStringsArr = strings;
    if (asTemplateStringsArr[0] === void 0) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }
    styles2 += asTemplateStringsArr[0];
  }
  for (var i = 1; i < args.length; i++) {
    styles2 += handleInterpolation(mergedProps, registered, args[i]);
    if (stringMode) {
      var templateStringsArr = strings;
      if (templateStringsArr[i] === void 0) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }
      styles2 += templateStringsArr[i];
    }
  }
  labelPattern.lastIndex = 0;
  var identifierName = "";
  var match;
  while ((match = labelPattern.exec(styles2)) !== null) {
    identifierName += "-" + match[1];
  }
  var name = murmur2(styles2) + identifierName;
  {
    var devStyles = {
      name,
      styles: styles2,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
    return devStyles;
  }
}

// node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.development.esm.js
var testOmitPropsOnStringTag = isPropValid;
var testOmitPropsOnComponent = function testOmitPropsOnComponent2(key) {
  return key !== "theme";
};
var getDefaultShouldForwardProp = function getDefaultShouldForwardProp2(tag) {
  return typeof tag === "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps2(tag, options, isReal) {
  var shouldForwardProp2;
  if (options) {
    var optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp2 = tag.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
      return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
    } : optionsShouldForwardProp;
  }
  if (typeof shouldForwardProp2 !== "function" && isReal) {
    shouldForwardProp2 = tag.__emotion_forwardProp;
  }
  return shouldForwardProp2;
};
var isDevelopment2 = true;
var ILLEGAL_ESCAPE_SEQUENCE_ERROR2 = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`;
var Insertion = function Insertion2(_ref) {
  var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  useInsertionEffectAlwaysWithSyncFallback(function() {
    return insertStyles(cache, serialized, isStringTag);
  });
  return null;
};
var createStyled = function createStyled2(tag, options) {
  {
    if (tag === void 0) {
      throw new Error("You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.");
    }
  }
  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;
  var identifierName;
  var targetClassName;
  if (options !== void 0) {
    identifierName = options.label;
    targetClassName = options.target;
  }
  var shouldForwardProp2 = composeShouldForwardProps(tag, options, isReal);
  var defaultShouldForwardProp = shouldForwardProp2 || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp("as");
  return function() {
    var args = arguments;
    var styles2 = isReal && tag.__emotion_styles !== void 0 ? tag.__emotion_styles.slice(0) : [];
    if (identifierName !== void 0) {
      styles2.push("label:" + identifierName + ";");
    }
    if (args[0] == null || args[0].raw === void 0) {
      styles2.push.apply(styles2, args);
    } else {
      if (args[0][0] === void 0) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR2);
      }
      styles2.push(args[0][0]);
      var len = args.length;
      var i = 1;
      for (; i < len; i++) {
        if (args[0][i] === void 0) {
          console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR2);
        }
        styles2.push(args[i], args[0][i]);
      }
    }
    var Styled = withEmotionCache(function(props, cache, ref) {
      var FinalTag = shouldUseAs && props.as || baseTag;
      var className = "";
      var classInterpolations = [];
      var mergedProps = props;
      if (props.theme == null) {
        mergedProps = {};
        for (var key in props) {
          mergedProps[key] = props[key];
        }
        mergedProps.theme = React.useContext(ThemeContext);
      }
      if (typeof props.className === "string") {
        className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
      } else if (props.className != null) {
        className = props.className + " ";
      }
      var serialized = serializeStyles(styles2.concat(classInterpolations), cache.registered, mergedProps);
      className += cache.key + "-" + serialized.name;
      if (targetClassName !== void 0) {
        className += " " + targetClassName;
      }
      var finalShouldForwardProp = shouldUseAs && shouldForwardProp2 === void 0 ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
      var newProps = {};
      for (var _key in props) {
        if (shouldUseAs && _key === "as") continue;
        if (finalShouldForwardProp(_key)) {
          newProps[_key] = props[_key];
        }
      }
      newProps.className = className;
      if (ref) {
        newProps.ref = ref;
      }
      return React.createElement(React.Fragment, null, React.createElement(Insertion, {
        cache,
        serialized,
        isStringTag: typeof FinalTag === "string"
      }), React.createElement(FinalTag, newProps));
    });
    Styled.displayName = identifierName !== void 0 ? identifierName : "Styled(" + (typeof baseTag === "string" ? baseTag : baseTag.displayName || baseTag.name || "Component") + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles2;
    Styled.__emotion_forwardProp = shouldForwardProp2;
    Object.defineProperty(Styled, "toString", {
      value: function value() {
        if (targetClassName === void 0 && isDevelopment2) {
          return "NO_COMPONENT_SELECTOR";
        }
        return "." + targetClassName;
      }
    });
    Styled.withComponent = function(nextTag, nextOptions) {
      return createStyled2(nextTag, _extends({}, options, nextOptions, {
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
      })).apply(void 0, styles2);
    };
    return Styled;
  };
};

// node_modules/@emotion/styled/dist/emotion-styled.browser.development.esm.js
var import_react9 = __toESM(require_react());
init_emotion_is_prop_valid_esm();
var tags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
];
var newStyled = createStyled.bind();
tags.forEach(function(tagName) {
  newStyled[tagName] = newStyled(tagName);
});

// node_modules/@chakra-ui/system/dist/chunk-5PL47M24.mjs
var import_react11 = __toESM(require_react(), 1);
var _a6;
var emotion_styled = (_a6 = newStyled.default) != null ? _a6 : newStyled;
var toCSSObject = ({ baseStyle: baseStyle43 }) => (props) => {
  const { theme: theme2, css: cssProp, __css, sx, ...rest } = props;
  const styleProps3 = objectFilter(rest, (_, prop) => isStyleProp(prop));
  const finalBaseStyle = runIfFn3(baseStyle43, props);
  const finalStyles = assignAfter(
    {},
    __css,
    finalBaseStyle,
    filterUndefined(styleProps3),
    sx
  );
  const computedCSS = css(finalStyles)(props.theme);
  return cssProp ? [computedCSS, cssProp] : computedCSS;
};
function styled(component, options) {
  const { baseStyle: baseStyle43, ...styledOptions } = options != null ? options : {};
  if (!styledOptions.shouldForwardProp) {
    styledOptions.shouldForwardProp = shouldForwardProp;
  }
  const styleObject = toCSSObject({ baseStyle: baseStyle43 });
  const Component = emotion_styled(
    component,
    styledOptions
  )(styleObject);
  const chakraComponent = import_react11.default.forwardRef(function ChakraComponent(props, ref) {
    const { colorMode, forced } = useColorMode();
    return import_react11.default.createElement(Component, {
      ref,
      "data-theme": forced ? colorMode : void 0,
      ...props
    });
  });
  return chakraComponent;
}

// node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs
function factory() {
  const cache = /* @__PURE__ */ new Map();
  return new Proxy(styled, {
    /**
     * @example
     * const Div = chakra("div")
     * const WithChakra = chakra(AnotherComponent)
     */
    apply(target, thisArg, argArray) {
      return styled(...argArray);
    },
    /**
     * @example
     * <chakra.div />
     */
    get(_, element) {
      if (!cache.has(element)) {
        cache.set(element, styled(element));
      }
      return cache.get(element);
    }
  });
}
var chakra = factory();

// node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs
var import_react12 = __toESM(require_react(), 1);
function forwardRef(component) {
  return (0, import_react12.forwardRef)(component);
}

// node_modules/@chakra-ui/react-utils/dist/chunk-IH2MM24A.mjs
var import_react13 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react-utils/dist/chunk-ITIKTQWJ.mjs
var import_react14 = __toESM(require_react(), 1);
function createContext3(options = {}) {
  const {
    strict = true,
    errorMessage = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name
  } = options;
  const Context = (0, import_react14.createContext)(void 0);
  Context.displayName = name;
  function useContext4() {
    var _a7;
    const context = (0, import_react14.useContext)(Context);
    if (!context && strict) {
      const error3 = new Error(errorMessage);
      error3.name = "ContextError";
      (_a7 = Error.captureStackTrace) == null ? void 0 : _a7.call(Error, error3, useContext4);
      throw error3;
    }
    return context;
  }
  return [
    Context.Provider,
    useContext4,
    Context
  ];
}

// node_modules/@chakra-ui/react-utils/node_modules/@chakra-ui/utils/dist/chunk-O3SWHQEE.mjs
function canUseDOM2() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
var isBrowser3 = canUseDOM2();

// node_modules/@chakra-ui/react-utils/node_modules/@chakra-ui/utils/dist/chunk-YTQ3XZ3T.mjs
var import_lodash11 = __toESM(require_lodash(), 1);
function get4(obj, path, fallback, index) {
  const key = typeof path === "string" ? path.split(".") : [path];
  for (index = 0; index < key.length; index += 1) {
    if (!obj)
      break;
    obj = obj[key[index]];
  }
  return obj === void 0 ? fallback : obj;
}
var memoize5 = (fn) => {
  const cache = /* @__PURE__ */ new WeakMap();
  const memoizedFn = (obj, path, fallback, index) => {
    if (typeof obj === "undefined") {
      return fn(obj, path, fallback);
    }
    if (!cache.has(obj)) {
      cache.set(obj, /* @__PURE__ */ new Map());
    }
    const map = cache.get(obj);
    if (map.has(path)) {
      return map.get(path);
    }
    const value = fn(obj, path, fallback, index);
    map.set(path, value);
    return value;
  };
  return memoizedFn;
};
var memoizedGet4 = memoize5(get4);

// node_modules/@chakra-ui/react-utils/node_modules/@chakra-ui/utils/dist/chunk-Y5FGD7DM.mjs
var __DEV__2 = true;

// node_modules/@chakra-ui/react-utils/node_modules/@chakra-ui/utils/dist/chunk-M3TFMUOL.mjs
function once2(fn) {
  let result;
  return function func(...args) {
    if (fn) {
      result = fn.apply(this, args);
      fn = null;
    }
    return result;
  };
}
var warn3 = once2((options) => () => {
  const { condition, message } = options;
  if (condition && __DEV__2) {
    console.warn(message);
  }
});
var error2 = once2((options) => () => {
  const { condition, message } = options;
  if (condition && __DEV__2) {
    console.error(message);
  }
});

// node_modules/@chakra-ui/react-utils/node_modules/@chakra-ui/utils/dist/chunk-YAFHXCR4.mjs
var minSafeInteger2 = Number.MIN_SAFE_INTEGER || -9007199254740991;
var maxSafeInteger2 = Number.MAX_SAFE_INTEGER || 9007199254740991;

// node_modules/@chakra-ui/react-utils/node_modules/@chakra-ui/utils/dist/chunk-FGAEJGLB.mjs
var breakpoints3 = Object.freeze([
  "base",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl"
]);

// node_modules/@chakra-ui/react-utils/node_modules/@chakra-ui/utils/dist/chunk-5LUSIWEA.mjs
var focusableElList2 = [
  "input:not(:disabled):not([disabled])",
  "select:not(:disabled):not([disabled])",
  "textarea:not(:disabled):not([disabled])",
  "embed",
  "iframe",
  "object",
  "a[href]",
  "area[href]",
  "button:not(:disabled):not([disabled])",
  "[tabindex]",
  "audio[controls]",
  "video[controls]",
  "*[tabindex]:not([aria-disabled])",
  "*[contenteditable]"
];
var focusableElSelector2 = focusableElList2.join();

// node_modules/@chakra-ui/system/dist/chunk-MFVQSVQB.mjs
var import_react16 = __toESM(require_react(), 1);
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var [StylesProvider, useStyles] = createContext3({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});

export {
  createContext,
  useTheme,
  useSafeLayoutEffect,
  cx,
  warn,
  dataAttr,
  ariaAttr,
  callAllHandlers,
  omitThemingProps,
  useStyleConfig,
  useMultiStyleConfig,
  chakra,
  forwardRef
};
//# sourceMappingURL=chunk-WOLPXEIS.js.map
