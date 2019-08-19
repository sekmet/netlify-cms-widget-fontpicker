import React from 'react';
import PropTypes from 'prop-types';
import { WidgetPreviewContainer } from 'netlify-cms-ui-default';

const FontpickerPreview = ({ activeFontFamily, value }) => <WidgetPreviewContainer>{value}</WidgetPreviewContainer>;

FontpickerPreview.propTypes = {
  value: PropTypes.node,
};

export default FontpickerPreview;
