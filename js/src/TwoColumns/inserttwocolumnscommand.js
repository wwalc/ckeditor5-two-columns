import { Command } from 'ckeditor5/src/core';

export default class InsertTwoColumnsCommand extends Command {
  // Runs only when the command is executed.
  execute() {
    const { model } = this.editor;

    model.change((writer) => {
      const twoCol = writer.createElement('twoColumns');
      const col1 = writer.createElement('column');
      const col2 = writer.createElement('column');

      writer.append(col1, twoCol);
      writer.append(col2, twoCol);

      // [UX enhancement] 
      // Here we intentionally insert an empty paragraph to which we will later move the selection.
      // This way the user will be able to immediately start typing in the newly created column.
      const paragraph = writer.createElement('paragraph');
      writer.append(paragraph, col1);
      writer.appendElement('paragraph', col2);

      model.insertContent(twoCol);

      writer.setSelection(paragraph, 'in');
    });
  }

  // Runs every time changes are made to the model, including changing the selection.
  refresh() {
    const { model } = this.editor;
    const { selection } = model.document;
    const allowedIn = model.schema.findAllowedParent(
      selection.getFirstPosition(),
      'twoColumns',
    );

    // Command is enabled whenever the <twoCol> is allowed in the current selection.
    this.isEnabled = allowedIn !== null;
  }
}
