import React, { useState } from "react";
import css from "styled-jsx/css";
import axios from "axios";
import Button from "../button/Button";
import { useFormik } from "formik";
import { TailSpin } from "react-loader-spinner";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

function ContactForm() {
  const [status, setStatus] = useState("unsubmitted");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit: async (values) => {
      setStatus("submitting");
      const res = await axios.post("/api/contact", values);
      setStatus("success");
    },
  });

  return (
    <>
      <style jsx>{styles}</style>
      <div className="container">
        {(function () {
          if (status == "unsubmitted") {
            return (
              <form onSubmit={formik.handleSubmit}>
                <div>
                  <label>Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                </div>
                <div>
                  <label>Email</label>
                  <input
                    id="name"
                    name="email"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </div>
                <div className="button-wrapper">
                  <Button>Get in touch!</Button>
                </div>
              </form>
            );
          } else if (status == "submitting") {
            return (
              <>
                <TailSpin color="blue" width="200" height="200" />
              </>
            );
          } else if (status == "success") {
            return (
              <>
                <FaCheckCircle color="green" size="200" />
              </>
            );
          } else if (status == "failed") {
            return (
              <>
                <FaTimesCircle color="red" size="200" />
              </>
            );
          }
        })()}
      </div>
    </>
  );
}

const styles = css`
  .container {
    display: flex;
    height: 400px;
    justify-content: center;
  }
  form {
    margin: auto;
    flex: 1 1 100%;
    align-self: stretch;
    max-width: 700px;
    padding-bottom: 60px;
  }
  label {
    display: block;
    font-size: 24px;
  }
  input {
    display: block;
    width: 100%;
    font-size: 24px;
    line-height: 32px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid white;
    outline: none;
    display: block;
    color: #eee;
    margin-top: 20px;
    margin-bottom: 30px;
    padding: 10px 0;
  }
  input:focus {
    color: #2e9ed2;
    border-bottom: 1px solid #2e9ed2;
  }
  .button-wrapper {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  p {
    font-size: 24px;
    padding-top: 30px;
    align-self: stretch;
  }
`;

export default ContactForm;
