import './bootstrap.js'
import CMS, { init } from 'netlify-cms'
import 'netlify-cms/dist/cms.css'
import { Control, Preview } from '../src'

const config = {
  backend: {
    name: 'test-repo',
    login: false,
  },
  media_folder: 'assets',
  collections: [{
    name: 'test',
    label: 'Test',
    files: [{
      file: 'test.yml',
      name: 'test',
      label: 'Test',
      fields: [
        { name: 'font_picker', label: 'Font Picker', widget: 'fontpicker'},
      ],
    }],
  }],
}

CMS.registerWidget('fontpicker', Control, Preview)

init({ config })
