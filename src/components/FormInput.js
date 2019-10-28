import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({ handleSubmit, inputRef, paramNumber, urlParam, updateUrlFunction}) => (
  <form  onSubmit={event => {
    handleSubmit(`param${paramNumber}`)
    event.preventDefault();
  }}>
    <input
      type='text'
      ref={inputRef}
      value={urlParam}
      onChange={event => updateUrlFunction(event.target.value)}
  />
  </form>
);

export default FormInput;

FormInput.propTypes = {
  handleSubmit: PropTypes.func,
  inputRef: PropTypes.object,
  urlParam: PropTypes.string,
  updateUrlFunction: PropTypes.func
};
