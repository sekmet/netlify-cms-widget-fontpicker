/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import PropTypes from 'prop-types';
import FontPickerStyles from './fontpicker-widget.css';
import FontPicker from "font-picker-react";
const uniqid = require('uniqid');

export default class FontpickerControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pId: uniqid(),
            activeFontFamily: 'Open Sans',
            activeFontCategory: 'sans-serif'
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
                <div
                className={classNameWrapper}
                css={css`
                  ${FontPickerStyles};
                `}>
                <FontPicker
                    id={forID}
                    pickerId={this.state.pId}
                    apiKey={process.env.GATSBY_GOOGLE_FONTS_API_KEY ? process.env.GATSBY_GOOGLE_FONTS_API_KEY : process.env.GOOGLE_FONTS_API_KEY}
                    activeFontFamily={`${value}`.split(',')[0] || this.state.activeFontFamily }
                    value={value || '' }
                    onFocus={setActiveStyle}
                    onBlur={setInactiveStyle}
                    onChange={nextFont => {
                        this.setState({
                            activeFontFamily: nextFont.family,
                            activeFontCategory: nextFont.category ? nextFont.category : 'san-serif'
                        })
                        //console.log(this.state.activeFontFamily, nextFont.category)
                        //return onChange(`('${this.state.activeFontFamily}', ${nextFont.category ? nextFont.category : 'sans-serif'})`)
                        return onChange(`${this.state.activeFontFamily},${this.state.activeFontCategory}`)
                    }
                    }
                />

                <p className={`apply-font-${this.state.pId}`} style={{paddingTop: '9px'}}>The font will be applied to this text.</p>

            </div>
        );
    }
}
