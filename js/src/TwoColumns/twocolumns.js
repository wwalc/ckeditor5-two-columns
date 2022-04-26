import TwoColumnsEditing from './twocolumnsediting';
import TwoColumnsUI from './twocolunmsui';
import { Plugin } from 'ckeditor5/src/core';

export default class TwoColumns extends Plugin {
  static get requires() {
    return [TwoColumnsEditing, TwoColumnsUI];
  }
}
