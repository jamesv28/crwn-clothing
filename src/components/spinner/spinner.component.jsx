import React from 'react';
import {
    SpinnerOverlay,
    SpinnerContainer
} from './spinner.styles';

const Spinner = WrappedComponent => {
    const SpinnerComponent = ({isLoading, ...otherProps}) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) : (
            <WrappedComponent {...otherProps} />
        )
    }
    return SpinnerComponent;
}

export default Spinner;