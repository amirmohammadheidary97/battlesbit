/* eslint-disable prefer-arrow-functions/prefer-arrow-functions */
/* eslint-disable max-lines */
import type {CSSProperties} from 'react';

type CssFlexInstance = {
  result: CSSProperties;
  grow(num?: number): CssFlexInstance;
  wrap(): CssFlexInstance;
  wrapreverse: () => CssFlexInstance;
  nowrap: () => CssFlexInstance;
  //
  grow: (num?: number) => CssFlexInstance;
  //
  row: () => CssFlexInstance;
  rowreverse: () => CssFlexInstance;
  column: () => CssFlexInstance;
  columnreverse: () => CssFlexInstance;
  //
  j: (
    value:
      | 'flex-start'
      | 'flex-end'
      | 'center'
      | 'space-between'
      | 'space-around'
      | 'space-even'
      | 'none'
      | 'unset'
      | 'auto',
  ) => CssFlexInstance;
  jstart: () => CssFlexInstance;
  jend: () => CssFlexInstance;
  jcenter: () => CssFlexInstance;
  jbetween: () => CssFlexInstance;
  jaround: () => CssFlexInstance;
  jeven: () => CssFlexInstance;
  //
  a: (
    value:
      | 'flex-start'
      | 'flex-end'
      | 'center'
      | 'base-line'
      | 'stretch'
      | 'auto'
      | 'unset'
      | 'none',
  ) => CssFlexInstance;
  astart: () => CssFlexInstance;
  aend: () => CssFlexInstance;
  acenter: () => CssFlexInstance;
  abaseline: () => CssFlexInstance;
  astretch: () => CssFlexInstance;
  //
  aselfauto: () => CssFlexInstance;
  aselfstart: () => CssFlexInstance;
  aselfend: () => CssFlexInstance;
  aselfcenter: () => CssFlexInstance;
  aselfbaseline: () => CssFlexInstance;
  aselfstretch: () => CssFlexInstance;
  //
  gap: (g: string | number) => CssFlexInstance;
  rowgap: (g: string | number) => CssFlexInstance;
  columngap: (g: string | number) => CssFlexInstance;
};

export const flex = () => {
  const result: CSSProperties = {
    display: 'flex',
  };

  const instance: CssFlexInstance = {
    result,
    grow: function (num: number = 1) {
      result.flexGrow = num;
      return this;
    },
    wrap: () => {
      result.flexWrap = 'wrap';
      return instance;
    },
    wrapreverse: function () {
      result.flexWrap = 'wrap-reverse';
      return instance;
    },
    nowrap: function () {
      result.flexWrap = 'nowrap';
      return instance;
    },
    row: function () {
      result.flexDirection = 'row';
      return instance;
    },
    rowreverse: function () {
      result.flexDirection = 'row-reverse';
      return instance;
    },
    column: function () {
      result.flexDirection = 'column';
      return instance;
    },
    columnreverse: function () {
      result.flexDirection = 'column-reverse';
      return instance;
    },
    j: function (value) {
      result.justifyContent = value;
      return instance;
    },
    jstart: function () {
      result.justifyContent = 'flex-start';
      return instance;
    },
    jend: function () {
      result.justifyContent = 'flex-end';
      return instance;
    },
    jcenter: function () {
      result.justifyContent = 'center';
      return instance;
    },
    jaround: function () {
      result.justifyContent = 'space-around';
      return instance;
    },
    jbetween: function () {
      result.justifyContent = 'space-between';
      return instance;
    },
    jeven: function () {
      result.justifyContent = 'space-evenly';
      return instance;
    },
    a: function (value) {
      result.alignItems = value;
      return instance;
    },
    astart: function () {
      result.alignItems = 'flex-start';
      return instance;
    },
    aend: function () {
      result.alignItems = 'flex-end';
      return instance;
    },
    acenter: function () {
      result.alignItems = 'center';
      return instance;
    },
    abaseline: function (): CssFlexInstance {
      result.alignItems = 'baseline';
      return instance;
    },
    astretch: function () {
      result.alignItems = 'stretch';
      return instance;
    },
    //
    aselfauto: function () {
      result.alignSelf = 'auto';
      return instance;
    },
    aselfstart: function () {
      result.alignSelf = 'flex-start';
      return instance;
    },
    aselfend: function () {
      result.alignSelf = 'flex-end';
      return instance;
    },
    aselfcenter: function () {
      result.alignSelf = 'center';
      return instance;
    },
    aselfbaseline: function () {
      result.alignSelf = 'baseline';
      return instance;
    },
    aselfstretch: function () {
      result.alignSelf = 'stretch';
      return instance;
    },
    //
    gap: function (g: string | number) {
      result.gap = g;
      return instance;
    },
    rowgap: function (g: string | number) {
      result.rowGap = g;
      return instance;
    },
    columngap: function (g: string | number): CssFlexInstance {
      result.columnGap = g;
      return instance;
    },
  };

  return instance;
};
