'use client'
import React from "react";
import { useState } from "react";
import emailjs from '@emailjs/browser'
const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const publicKeyEnv = process.env.NEXT_PUBLIC_PUBLIC_KEY;


export default function Inputs() {
    const [input, setInput] = useState({
        name: "",
        email: ""
    });
    const [success, setSuccess] = useState(0); 

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send(
          serviceId,
          templateId,
          input,
          { publicKey: publicKeyEnv }
        )
        .then(() => {
          setSuccess(1)
        })
        .catch((error) => {
          // console.error('EmailJS error:', error);
          setSuccess(2)
        });
    }

  return (
    <>
        {success === 0 ? 
    <form className="contact-card">
      <div className="field-group">
        <p className="form-intro">Fill out the form below to be the first to know when we fully launch!</p>
        <label className="field-label" htmlFor="fullName">
          Name
        </label>
        <input
          className="field-input"
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
          autoComplete="name"
          onChange={handleChange}
        />
      </div>

      <div className="field-group">
        <label className="field-label" htmlFor="email">
          Email
        </label>
        <input
          className="field-input"
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          autoComplete="email"
          onChange={handleChange}
        />
      </div>

      <button className="submit-button" type="submit" onClick={handleSubmit}>
        Submit
      </button>

      <style jsx>{`
        .contact-card {
          width: min(100%, 420px);
          margin: 0 auto;
          margin-top: 72px;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .field-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-intro {
          margin: 0 0 18px;
          color: #f3f3f3;
          font-size: 1.05rem;
          line-height: 1.7;
          text-align: center;
          text-wrap: balance;
          max-width: 34ch;
          align-self: center;
        }

        .field-label {
          font-size: 0.95rem;
          font-weight: 700;
          color: #d8d8d8;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .field-input {
          width: 100%;
          padding: 16px 0 14px;
          border: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.28);
          border-radius: 0;
          background: transparent;
          color: #ffffff;
          font-size: 1rem;
          outline: none;
          transition:
            border-color 0.2s ease,
            transform 0.2s ease;
        }

        .field-input::placeholder {
          color: rgba(255, 255, 255, 0.38);
        }

        .field-input:focus {
          border-color: #ed1c24;
          transform: translateY(-1px);
        }

        .submit-button {
          margin-top: 10px;
          border: none;
          border-radius: 999px;
          padding: 14px 18px;
          background: linear-gradient(135deg, #b51219, #ed1c24);
          color: #ffffff;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            filter 0.2s ease;
          box-shadow: 0 14px 28px rgba(237, 28, 36, 0.24);
        }

        .submit-button:hover {
          transform: translateY(-1px);
          filter: brightness(1.02);
          box-shadow: 0 18px 34px rgba(237, 28, 36, 0.32);
        }

        .submit-button:focus-visible {
          outline: 3px solid rgba(237, 28, 36, 0.35);
          outline-offset: 3px;
        }

        @media (max-width: 600px) {
          .contact-card {
            margin-top: 48px;
          }
        }
      `}</style>
    </form> : null }
    {success === 1 ? 
      <div className="status-message status-success">
        <p className="status-title">Thank you! We will let you know when we are launching!</p>
        <p className="status-copy">You are on the list, and we will reach out as soon as we are ready to go live.</p>
      </div>
     : null }
    {success === 2 ? 
    <div className="status-message status-error">
      <p className="status-title">Sorry, something went wrong.</p>
      <p className="status-copy">Please refresh the page and try again.</p>
    </div>  : null}
    <>
    <style jsx>{`
      .status-message {
        width: min(100%, 460px);
        margin: 72px auto 0;
        padding: 40px 24px 28px;
        border-radius: 22px;
        text-align: center;
        backdrop-filter: blur(6px);
        box-shadow: 0 20px 45px rgba(0, 0, 0, 0.26);
      }

      .status-title {
        margin: 0;
        font-size: 1.15rem;
        font-weight: 700;
        line-height: 1.5;
      }

      .status-copy {
        margin: 10px 0 0;
        font-size: 0.98rem;
        line-height: 1.7;
        color: rgba(255, 255, 255, 0.78);
      }

      .status-success {
        border: 1px solid rgba(255, 255, 255, 0.12);
        background: linear-gradient(180deg, rgba(237, 28, 36, 0.14), rgba(255, 255, 255, 0.03));
      }

      .status-success .status-title {
        color: #ffffff;
      }

      .status-error {
        border: 1px solid rgba(237, 28, 36, 0.28);
        background: linear-gradient(180deg, rgba(237, 28, 36, 0.18), rgba(85, 7, 10, 0.18));
      }

      .status-error .status-title {
        color: #ffb3b6;
      }

      @media (max-width: 600px) {
        .status-message {
          margin-top: 48px;
          padding: 32px 18px 22px;
          border-radius: 18px;
        }
      }
    `}</style>
    </>
    </>
  );
}
