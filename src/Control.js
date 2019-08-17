import PropTypes from 'prop-types';
import React from 'react';
import FontPicker from "font-picker-react";

export default class Control extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFontFamily: "Open Sans",
    };
  }
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string,
    apiKey: PropTypes.string,
    activeFontFamily: PropTypes.string,
    activeFontCategory: PropTypes.string,
    value: PropTypes.node,
    classNameWrapper: PropTypes.string.isRequired,
  }

  static defaultProps = {
    activeFontCategory: "",
    activeFontFamily: "Open Sans",
  }

  render() {
    const {
      forID,
      activeFontFamily,
      activeFontCategory,
      value,
      onChange,
      classNameWrapper,
    } = this.props;

    return (
      <div>
        <FontPicker
          id={forID}
          apiKey={process.env.GATSBY_GOOGLE_FONTS_API_KEY ? process.env.GATSBY_GOOGLE_FONTS_API_KEY : process.env.GOOGLE_FONTS_API_KEY}
          className={classNameWrapper}
          activeFontFamily={this.state.activeFontFamily}
          value={value | '' }
          onChange={nextFont => {
            this.setState({
              activeFontFamily: nextFont.family,
              activeFontCategory: nextFont.category
            })
            //console.log(this.state.activeFontFamily, nextFont.category)
            return onChange(`('${this.state.activeFontFamily}', ${nextFont.category ? nextFont.category : 'sans-serif'})`)
          }
          }
        />
        <p className="apply-font">The font will be applied to this text.</p>
      </div>
    );
  }
}
