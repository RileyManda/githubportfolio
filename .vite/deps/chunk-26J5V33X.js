import {
  require_classnames,
  require_jsx_runtime,
  useBootstrapPrefix
} from "./chunk-WTMQV53C.js";
import {
  __toESM,
  require_react
} from "./chunk-L7APZED3.js";

// node_modules/react-bootstrap/esm/createWithBsPrefix.js
var import_classnames = __toESM(require_classnames());

// node_modules/dom-helpers/esm/camelize.js
var rHyphen = /-(.)/g;
function camelize(string) {
  return string.replace(rHyphen, function(_, chr) {
    return chr.toUpperCase();
  });
}

// node_modules/react-bootstrap/esm/createWithBsPrefix.js
var React = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var pascalCase = (str) => str[0].toUpperCase() + camelize(str).slice(1);
function createWithBsPrefix(prefix, {
  displayName = pascalCase(prefix),
  Component,
  defaultProps
} = {}) {
  const BsComponent = React.forwardRef(({
    className,
    bsPrefix,
    as: Tag = Component || "div",
    ...props
  }, ref) => {
    const componentProps = {
      ...defaultProps,
      ...props
    };
    const resolvedPrefix = useBootstrapPrefix(bsPrefix, prefix);
    return (0, import_jsx_runtime.jsx)(Tag, {
      ref,
      className: (0, import_classnames.default)(className, resolvedPrefix),
      ...componentProps
    });
  });
  BsComponent.displayName = displayName;
  return BsComponent;
}

export {
  createWithBsPrefix
};
//# sourceMappingURL=chunk-26J5V33X.js.map
