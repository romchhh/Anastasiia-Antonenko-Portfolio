"use client";

import React, { useMemo, useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [formState, setFormState] = useState<"idle" | "submitting" | "submitted" | "error">("idle");

  // Simple email mask/validator: keeps only allowed chars and auto-lowers, also checks pattern
  const emailRegex = useMemo(
    () => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    []
  );

  const onEmailChange = (value: string) => {
    const sanitized = value
      .replace(/[^a-zA-Z0-9@._%+\-]/g, "") // allow common email chars only
      .replace(/@{2,}/g, "@")
      .toLowerCase();
    setEmail(sanitized);
  };

  const isEmailValid = email.length > 0 && emailRegex.test(email);
  const isNameValid = name.trim().length > 1;
  const isMessageValid = message.trim().length > 3;
  const isFormValid = isEmailValid && isNameValid && isMessageValid;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (!isFormValid) return;

    setFormState("submitting");

    try {
      const formData = new FormData();
      formData.append("access_key", "2fab4520-f7a6-4066-a0e8-37f581cbf04e");
      formData.append("name", name);
      formData.append("email", email);
      formData.append("message", message);
      formData.append("subject", "New Portfolio Contact Form Submission");
      formData.append("from_name", "Portfolio Contact Form");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();
      
      if (result.success) {
        setFormState("submitted");
        // Reset form fields
        setName("");
        setEmail("");
        setMessage("");
        setTouched({ name: false, email: false, message: false });
      } else {
        console.error("Web3Forms error:", result);
        setFormState("error");
        setTimeout(() => setFormState("idle"), 3000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormState("error");
      setTimeout(() => setFormState("idle"), 3000);
    }
  };

  if (formState === "submitted") {
    return (
      <>
        <h3 className="text-[28px] sm:text-[35px] md:text-[45px] font-normal leading-[100%] tracking-[0.03em] text-[#1A1A1A] lowercase">
          thank you
          <br />
          for your interest!
        </h3>
        <div className="mt-2 w-full max-w-[395px]">
          <p className="text-[16px] md:text-[18px] font-normal leading-[150%] tracking-[0.03em] text-[#515151] lowercase">
            your message has been sent.
          </p>
          <p className="text-[16px] md:text-[18px] font-normal leading-[150%] tracking-[0.03em] text-[#515151] lowercase">
            I look forward to continuing the conversation.
          </p>
        </div>
      </>
    );
  }

  return (
    <div className="mt-7.5">
      <h3 className="text-[28px] sm:text-[35px] md:text-[45px] font-normal leading-[100%] tracking-[0.03em] text-[#1A1A1A] lowercase">
        interested in prints
        <br />
        or collaborations?
      </h3>
      <p className="mt-4 text-[16px] md:text-[18px] font-normal leading-[150%] tracking-[0.03em] text-[#515151] lowercase w-full max-w-[477px]">
        leave your message below and I&apos;ll get back to you soon
      </p>

      <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
        <textarea
          className={`w-full max-w-[600px] h-[117px] border border-gray-300 bg-transparent px-4 py-3 text-[16px] font-light leading-[150%] tracking-[-1%] outline-none focus:border-gray-300 resize-none ${
            touched.message && !isMessageValid
              ? "placeholder-red-500"
              : "placeholder-gray-500"
          }`}
          placeholder={
            touched.message && !isMessageValid
              ? "Please write your message here"
              : "Your message here"
          }
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, message: true }))}
          style={{
            color: touched.message && !isMessageValid ? "#ef4444" : "#999",
            fontFamily: "Work Sans",
          }}
        />
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-end">
          <div className="flex flex-col gap-1 w-full sm:w-auto">
            <input
              className={`w-full sm:w-[240px] h-[40px] bg-transparent border-0 border-b border-gray-300 px-0 py-1 text-[16px] font-light leading-[150%] tracking-[-1%] outline-none focus:border-gray-300 ${
                touched.name && !isNameValid
                  ? "placeholder-red-500"
                  : "placeholder-gray-500"
              }`}
              placeholder={
                touched.name && !isNameValid ? "Please enter your name" : "Name"
              }
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, name: true }))}
              style={{
                color: touched.name && !isNameValid ? "#ef4444" : "#999",
                fontFamily: "Work Sans",
              }}
            />
          </div>
          <div className="flex flex-col-reverse gap-1 w-full sm:w-auto">
            {touched.email && !isEmailValid && email.length > 0 && (
              <span className="text-[10px] text-red-500">
                please enter a valid email address
              </span>
            )}
            <input
              className={`w-full sm:w-[240px] h-[40px] bg-transparent border-0 border-b border-gray-300 px-0 py-1 text-[16px] font-light leading-[150%] tracking-[-1%] outline-none focus:border-gray-300 ${
                touched.email && !isEmailValid
                  ? "placeholder-red-500 border-red-500"
                  : "placeholder-gray-500"
              }`}
              placeholder={
                touched.email && !isEmailValid ? "Invalid email" : "Email"
              }
              inputMode="email"
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, email: true }))}
              style={{
                color: touched.email && !isEmailValid ? "#ef4444" : "#999",
                borderBottomColor:
                  touched.email && !isEmailValid ? "#ef4444" : undefined,
                fontFamily: "Work Sans",
              }}
            />
          </div>
          <button
            type="submit"
            disabled={formState === "submitting"}
            className={`h-[50px] px-10 mt-4 text-white text-[16px] font-normal transition-colors border whitespace-nowrap w-full sm:w-auto ${
              formState === "submitting"
                ? "bg-gray-400 border-gray-400 cursor-not-allowed"
                : "bg-[#1A1A1A] border-[#1A1A1A] hover:bg-[#333] cursor-pointer"
            }`}
            style={{ fontFamily: "Work Sans" }}
          >
            {formState === "submitting" ? "sending..." : "get in touch"}
          </button>
        </div>
        {formState === "error" && (
          <p className="mt-3 text-[14px] text-red-500">
            Failed to send message. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}
