import React from "react";
import PropTypes from "prop-types";
import { IFormInputProps } from "../../models/props/form-input-props.interface";

function SelectInput(props: IFormInputProps<HTMLSelectElement>): JSX.Element {
  let wrapperClass = "form-group";
  if (props.error && props.error.length > 0) {
    wrapperClass += " has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <select
          id={props.id}
          name={props.name}
          onChange={props.onChange}
          value={props.value}
          className="form-control"
        >
          <option value="" />
          {props.options
            ? props.options.map((opt, index) => (
                <option key={index + 1} value={index + 1}>
                  {opt}
                </option>
              ))
            : null}
        </select>
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
}

SelectInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
};

SelectInput.defaultProps = {
  error: "",
};

export default SelectInput;
