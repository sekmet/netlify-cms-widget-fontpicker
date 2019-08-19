/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import PropTypes from 'prop-types';
import FontPicker from "font-picker-react";

export default class FontpickerControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFontFamily: 'Open Sans',
    };
  }

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string,
    value: PropTypes.node,
    classNameWrapper: PropTypes.string.isRequired,
    setActiveStyle: PropTypes.func.isRequired,
    setInactiveStyle: PropTypes.func.isRequired,
    apiKey: PropTypes.string,
    activeFontFamily: PropTypes.string,
    activeFontCategory: PropTypes.string,
  };

  static defaultProps = {
    value: ''
  };

  render() {
    const {
      forID,
      value,
      onChange,
      classNameWrapper,
      setActiveStyle,
      setInactiveStyle,
    } = this.props;

    return (
      <div style={{width: '100%'}}>
        <FontPicker
          id={forID}
          apiKey={process.env.GATSBY_GOOGLE_FONTS_API_KEY ? process.env.GATSBY_GOOGLE_FONTS_API_KEY : process.env.GOOGLE_FONTS_API_KEY} //'AIzaSyDk-dW0JU7GFHrX3Pg_cgTUvJwH3G2FPhs'
          className={classNameWrapper}
          activeFontFamily={value || this.state.activeFontFamily }
          value={value || '' }
          onFocus={setActiveStyle}
          onBlur={setInactiveStyle}
          onChange={nextFont => {
            this.setState({
              activeFontFamily: nextFont.family,
              activeFontCategory: nextFont.category
            })
            //console.log(this.state.activeFontFamily, nextFont.category)
            //return onChange(`('${this.state.activeFontFamily}', ${nextFont.category ? nextFont.category : 'sans-serif'})`)
            return onChange(`${this.state.activeFontFamily}`)
          }
          }
        />

        <p className="apply-font" style={{paddingTop: '9px'}}>The font will be applied to this text.</p>

      </div>
    );
  }
}
