import controlComponent from './FontpickerControl';
import previewComponent from './FontpickerPreview';

const Widget = (opts = {}) => ({
  name: 'fontpicker',
  controlComponent,
  previewComponent,
  ...opts,
});

export const NetlifyCmsWidgetFontpicker = { Widget, controlComponent, previewComponent };
export default NetlifyCmsWidgetFontpicker;
