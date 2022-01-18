import React from 'react';
import PropTypes from 'prop-types';
import './components.css';

export const Dropdown = ({
  data
}) => {
  return (
    <div className='select'>
      <select> 
        {data.map((el, i) => {
          return <option key={i}>{el}</option>
        })}
      </select>
    </div>
  )
}

export const Button = ({variant, size, label}) => {
  let variantClass = '';

  if(variant === 'Primary') variantClass='primary'
  else if(variant === 'Secondary') variantClass='secondary'
  else if(variant === 'Light') variantClass='light'
  else if(variant === 'Dark') variantClass='dark'
  else if(variant === 'Success') variantClass='success'
  else if(variant === 'Warning') variantClass='warning'
  else if(variant === 'Danger') variantClass='danger'

  return (
    <button
      type="button"
      className={[size, variantClass].join(' ')}
    >
      {label}
    </button>
  )
}

Dropdown.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
}

Button.propTypes = {
  variant: PropTypes.string,
  size: PropTypes.string,
  label: PropTypes.string,
}

Dropdown.defaultProps = {
  data: ['Option 1', 'Option 2', 'Option 3'],
}

Button.defaultProps = {
  variant: 'Light',
  size: 'medium',
  label: 'Button'
}