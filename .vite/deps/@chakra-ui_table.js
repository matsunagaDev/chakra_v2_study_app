"use client";
import {
  chakra,
  createContext,
  cx,
  forwardRef,
  omitThemingProps,
  useMultiStyleConfig
} from "./chunk-WOLPXEIS.js";
import {
  require_jsx_runtime
} from "./chunk-IESXOJ55.js";
import "./chunk-W4EHDCLL.js";
import {
  __toESM
} from "./chunk-EWTE5DHJ.js";

// node_modules/@chakra-ui/table/dist/chunk-GEJVU65N.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var [TableStylesProvider, useTableStyles] = createContext({
  name: `TableStylesContext`,
  errorMessage: `useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Table />" `
});
var Table = forwardRef((props, ref) => {
  const styles = useMultiStyleConfig("Table", props);
  const { className, layout, ...tableProps } = omitThemingProps(props);
  return (0, import_jsx_runtime.jsx)(TableStylesProvider, { value: styles, children: (0, import_jsx_runtime.jsx)(
    chakra.table,
    {
      ref,
      __css: { tableLayout: layout, ...styles.table },
      className: cx("chakra-table", className),
      ...tableProps
    }
  ) });
});
Table.displayName = "Table";

// node_modules/@chakra-ui/table/dist/chunk-DRZNIHMG.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var Thead = forwardRef((props, ref) => {
  const styles = useTableStyles();
  return (0, import_jsx_runtime2.jsx)(chakra.thead, { ...props, ref, __css: styles.thead });
});

// node_modules/@chakra-ui/table/dist/chunk-GIQFRSD6.mjs
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var Tr = forwardRef((props, ref) => {
  const styles = useTableStyles();
  return (0, import_jsx_runtime3.jsx)(chakra.tr, { ...props, ref, __css: styles.tr });
});

// node_modules/@chakra-ui/table/dist/chunk-V3K6UINC.mjs
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var TableCaption = forwardRef(
  (props, ref) => {
    const { placement = "bottom", ...rest } = props;
    const styles = useTableStyles();
    return (0, import_jsx_runtime4.jsx)(
      chakra.caption,
      {
        ...rest,
        ref,
        __css: {
          ...styles.caption,
          captionSide: placement
        }
      }
    );
  }
);
TableCaption.displayName = "TableCaption";

// node_modules/@chakra-ui/table/dist/chunk-OA6OURRG.mjs
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var TableContainer = forwardRef(
  (props, ref) => {
    var _a;
    const { overflow, overflowX, className, ...rest } = props;
    return (0, import_jsx_runtime5.jsx)(
      chakra.div,
      {
        ref,
        className: cx("chakra-table__container", className),
        ...rest,
        __css: {
          display: "block",
          whiteSpace: "nowrap",
          WebkitOverflowScrolling: "touch",
          overflowX: (_a = overflow != null ? overflow : overflowX) != null ? _a : "auto",
          overflowY: "hidden",
          maxWidth: "100%"
        }
      }
    );
  }
);

// node_modules/@chakra-ui/table/dist/chunk-J4QO5GAJ.mjs
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var Tbody = forwardRef((props, ref) => {
  const styles = useTableStyles();
  return (0, import_jsx_runtime6.jsx)(chakra.tbody, { ...props, ref, __css: styles.tbody });
});

// node_modules/@chakra-ui/table/dist/chunk-T2WCTPDH.mjs
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var Td = forwardRef(
  ({ isNumeric, ...rest }, ref) => {
    const styles = useTableStyles();
    return (0, import_jsx_runtime7.jsx)(
      chakra.td,
      {
        ...rest,
        ref,
        __css: styles.td,
        "data-is-numeric": isNumeric
      }
    );
  }
);

// node_modules/@chakra-ui/table/dist/chunk-B5H2YLEF.mjs
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
var Tfoot = forwardRef((props, ref) => {
  const styles = useTableStyles();
  return (0, import_jsx_runtime8.jsx)(chakra.tfoot, { ...props, ref, __css: styles.tfoot });
});

// node_modules/@chakra-ui/table/dist/chunk-MGVPL3OH.mjs
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var Th = forwardRef(
  ({ isNumeric, ...rest }, ref) => {
    const styles = useTableStyles();
    return (0, import_jsx_runtime9.jsx)(
      chakra.th,
      {
        ...rest,
        ref,
        __css: styles.th,
        "data-is-numeric": isNumeric
      }
    );
  }
);
export {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  useTableStyles
};
//# sourceMappingURL=@chakra-ui_table.js.map
