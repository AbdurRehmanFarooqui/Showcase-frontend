import React from 'react';
import PropTypes from 'prop-types';
import '../../css/user_settings_css/custom_button.css'


const Button = ({ label, onClick, color, className }) => {
    const buttonStyle = {
        backgroundColor: color,
    };

    return (
        <button
            className={`custom-button ${className}`}
            style={buttonStyle}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    color: PropTypes.string,
    className: PropTypes.string,
};

Button.defaultProps = {
    color: '#4FA1EE',
    className: '',
};

export default Button;
