import { Plugin } from 'ckeditor5/src/core';
import { toWidget, toWidgetEditable } from 'ckeditor5/src/widget';
import { Widget } from 'ckeditor5/src/widget';
import InsertTwoColumnsCommand from './inserttwocolumnscommand';

export default class TwoColumnsEditing extends Plugin {
  static get requires() {
    return [Widget];
  }

  init() {
    this._defineSchema();
    this._defineConverters();

    this.editor.commands.add(
      'insertTwoColumns',
      new InsertTwoColumnsCommand(this.editor),
    );
  }

  _defineSchema() {
    const schema = this.editor.model.schema;

    schema.register('twoColumns', {
      isObject: true,
      allowWhere: '$block',
    });

    schema.register('column', {
      isLimit: true,
      allowIn: 'twoColumns',
      allowContentOf: '$root',
    });
  }

  _defineConverters() {
    this._defineColumnsContainerConverters();
    this._defineColumnConverters();
  }

  _defineColumnsContainerConverters() {
    const { conversion } = this.editor;

    const twoColumns = {
      model: 'twoColumns',
      view: {
        name: 'section',
        classes: 'layout--two-col',
      },
    };

    // HTML content to model conversion.
    conversion.for('upcast').elementToElement(twoColumns);
    // Model to HTML content conversion when getting data out of the editor.
    conversion.for('dataDowncast').elementToElement(twoColumns);

    // Model to HTML conversion in the editing view (in WYSIWYG).
    conversion.for('editingDowncast').elementToElement({
      model: 'twoColumns',
      view: (modelElement, { writer: viewWriter }) => {
        const section = viewWriter.createContainerElement('section', {
          class: 'layout--two-col',
        });

        return toWidget(section, viewWriter, { label: 'Two col layout widget' });
      }
    });
  }

  _defineColumnConverters() {
    const { conversion } = this.editor;

    const column = {
      model: 'column',
      view: {
        name: 'div',
        classes: 'layout__col',
      },
    };

    // HTML content to model conversion.
    conversion.for('upcast').elementToElement(column);
    // Model to HTML content conversion when getting data out of the editor
    conversion.for('dataDowncast').elementToElement(column);

    // Model to HTML conversion in the editing view (in WYSIWYG).
    conversion.for('editingDowncast').elementToElement({
      model: 'column',
      view: (modelElement, { writer: viewWriter }) => {
        const div = viewWriter.createEditableElement('div', {
          class: 'layout__col',
        });
        return toWidgetEditable(div, viewWriter);
      },
    });
  }
}

