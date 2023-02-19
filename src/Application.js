import React, {useEffect, useState} from "react";
import { Formik, Form } from "formik";
import {Input} from "./input";
import * as yup from "yup";


function useInformation() {
   const initialInformation = localStorage.datainformation ? JSON.parse(localStorage.datainformation) : [];
   const [ information, setInformation ] = useState(initialInformation);

    useEffect(() => {
        localStorage.datainformation = JSON.stringify(information);
    }, [information])

    function addInformation(name, number, email) {
        setInformation((prevState) => {
            return [
                ...prevState,
                {
                    id: crypto.randomUUID(),
                    name: name,
                    number: number,
                    email: email,
                }
            ]
        });
    }
    return {
        information,
        addInformation,
    }
}
export const Application = () => {
    //const [ nameValue, setNameValue ] = useState("");
    //const [ emailValue, setEmailValue ] = useState("");
    //const [ numberValue, setNumberValue ] = useState("");
    const { information, addInformation } = useInformation();


    return (
        <div className="container">
            <div className="row">
                <div className="col-8 offset-2 pt-3">
                    <Formik initialValues={{ name: "", number: "", email: "" }} onSubmit={(values, formikHelpers) => {
                        console.log(values);
                        addInformation(values.name, values.number, values.email);
                        formikHelpers.resetForm();
                    }}
                            validationSchema={yup.object().shape({
                                name: yup.string().required(),
                                number: yup.number().min(12).max(12).required(),
                                email: yup.string().email().required()
                            })}>
                        <Form>
                            <Input name="name"  />
                            <Input name="number" type="number" />
                            <Input name="email" />
                            <button className="btn btn-primary w-100" type="submit">
                                Send
                            </button>
                        </Form>
                    </Formik>
                    {
                        information.map(({id, name, number, email}) => {
                            return (
                                <li key={id}>
                                    {name} -
                                    {number}-
                                    {email}
                                </li>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
};