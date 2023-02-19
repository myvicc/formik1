import React from "react";
import { useField } from "formik";

export const Input = ({ name, type = "text" }) => {
    const [{ value, onChange, onBlur}, { touched, error}] = useField(name);
    const isErrorShow = touched && !!error;
    return (
        <div className="mb-3">
            <input className={`form-control ${isErrorShow ? "is-invalid" : ""}`} type={type} name={name} value={value} onChange={onChange} onBlur={onBlur}/>
            {
                isErrorShow && (
                    <p className="invalid-feedback">
                        {error}
                    </p>
                )
            }
        </div>
    )
}