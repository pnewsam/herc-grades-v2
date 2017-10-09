import React from 'react';
import { capitalize } from 'lodash/string';

const FormField = props => (
  <div className="field">
    <label className="label" htmlFor={props.label}>
      {capitalize(props.label)}
    </label>
    <div className="control">{props.children}</div>
  </div>
);

export default FormField;
