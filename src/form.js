import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { InputGroup, Button, Classes, Intent } from '@blueprintjs/core';
import cx from 'classnames';


export const Form = ({ value, onChange, onSubmit, onClear }) => {
    return (
      <div>
        <form
          onSubmit={onSubmit} 
        >
        <InputGroup
          value={value}
          onChange={onChange}
          className={cx(Classes.LARGE)}
          leftIconName="search"
          placeholder="Who are you looking for?..."
          rightElement={
            <div>
              <Button
                intent={Intent.DANGER}
                iconName="cross"
                onClick={onClear}
              />
              <Button
                intent={Intent.PRIMARY}
                iconName="arrow-right"
                onClick={onSubmit}
              />
            </div>
          }
        />
        </form>
      </div>
    )
};

Form.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};
