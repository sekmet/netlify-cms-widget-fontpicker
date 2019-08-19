# netlify-cms-widget-fontpicker

A Google Font Picker widget for Netlify CMS.
[![npm version](https://badge.fury.io/js/netlify-cms-widget-fontpicker.svg)](https://badge.fury.io/js/netlify-cms-widget-fontpicker)
[![GitHub version](https://badge.fury.io/gh/sekmet%2Fnetlify-cms-widget-fontpicker.svg)](https://badge.fury.io/gh/sekmet%2Fnetlify-cms-widget-fontpicker)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)


## Install

As an npm package:

```shell
yarn add netlify-cms-widget-fontpicker

OR

npm install --save netlify-cms-widget-fontpicker
```

```js
import NetlifyCmsWidgetFontpicker from 'netlify-cms-widget-fontpicker';

CMS.registerWidget([
  NetlifyCmsWidgetFontpicker.Widget()
])
```

## How to use

Add to your Netlify CMS configuration:

```yaml
    fields:
      - { name: <fieldname>, label: <fieldlabel>, widget: fontpicker }
```

## Configuration

Add your *Google Fonts API key* as a enviroment variable

GOOGLE_FONTS_API_KEY=*YOUR-KEY*


## Support

For help with this widget, open an [issue](https://github.com/sekmet/netlify-cms-widget-fontpicker) or ask the Netlify CMS community in [Gitter](https://gitter.im/netlify/netlifycms).
