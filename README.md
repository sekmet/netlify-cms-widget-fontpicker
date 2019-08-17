# netlify-cms-widget-fontpicker

A Google Font Picker widget for Netlify CMS.

## Install

As an npm package:

```shell
npm install --save netlify-cms-widget-fontpicker
```

```js
import * as FontPicker from 'netlify-cms-widget-fontpicker'

CMS.registerWidget('fontpicker', FontPicker.Control, FontPicker.Preview)
```

Via `script` tag:

```html
<script src="https://unpkg.com/netlify-cms-widget-fontpicker@^0.3.0"></script>

<script>
  CMS.registerWidget('fontpicker', FontPicker.Control, FontPicker.Preview)
</script>
```

## How to use

Add to your Netlify CMS configuration:

```yaml
    fields:
      - { name: <fieldname>, label: <fieldlabel>, widget: fontpicker }
```

## Configuration

Add your *Google Fonts Api key* as a enviromental variable

GOOGLE_FONTS_API_KEY=*YOUR-KEY*

## Support

For help with this widget, open an [issue](https://github.com/sekmet/netlify-cms-widget-fontpicker) or ask the Netlify CMS community in [Gitter](https://gitter.im/netlify/netlifycms).