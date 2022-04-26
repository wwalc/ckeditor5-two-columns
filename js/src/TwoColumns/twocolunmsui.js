import { Plugin } from 'ckeditor5/src/core';
import { ButtonView } from 'ckeditor5/src/ui';
import icon from '../../../icons/two-columns.svg';

export default class TwoColumnsUI extends Plugin {
  init() {
    const editor = this.editor;

    editor.ui.componentFactory.add('twoColumns', (locale) => {
      const insertTwoColumnsCommandName = 'insertTwoColumns';
      const command = editor.commands.get(insertTwoColumnsCommandName);
      const buttonView = new ButtonView(locale);

      buttonView.set({
        label: editor.t('Two Col'),
        icon,
        tooltip: true
      });

      buttonView.bind('isOn', 'isEnabled').to(command, 'value', 'isEnabled');

      this.listenTo(buttonView, 'execute', () => {
        editor.execute(insertTwoColumnsCommandName);
      });

      return buttonView;
    });
  }
}
