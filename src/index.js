import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ disabled, label, onClick }) => (
  <button disabled={disabled ? 'true' : ''} onClick={onClick}>
    {label}
    <style>
      {`
        button {
          background: #fff;
          border: 0.2rem solid #ff0000;
          color: #ff0000;
          letterspacing: 0.1em;
          fontweight: bold;
          padding: 1em;
          texttransform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        button:hover {
          background: #ff0000;
          color: #fff;
        }
      `}
    </style>
  </button>
)

Button.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.label,
  onClick: PropTypes.func
}

Button.defaultProps = {
  disabled: false,
  label: 'My button'
}

export { Button }
