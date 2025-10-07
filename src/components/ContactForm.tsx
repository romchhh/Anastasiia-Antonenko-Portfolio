'use client';

import React, { useMemo, useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [formState, setFormState] = useState<'idle' | 'submitted'>('idle');

  // Simple email mask/validator: keeps only allowed chars and auto-lowers, also checks pattern
  const emailRegex = useMemo(() => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    []);

  const onEmailChange = (value: string) => {
    const sanitized = value
      .replace(/[^a-zA-Z0-9@._%+\-]/g, '') // allow common email chars only
      .replace(/@{2,}/g, '@')
      .toLowerCase();
    setEmail(sanitized);
  };

  const isEmailValid = email.length > 0 && emailRegex.test(email);
  const isNameValid = name.trim().length > 1;
  const isMessageValid = message.trim().length > 3;
  const isFormValid = isEmailValid && isNameValid && isMessageValid;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (!isFormValid) return;
    
    // Simulate form submission
    setFormState('submitted');
    
    // For now just open the email client. Later can be wired to API.
    const subject = encodeURIComponent('Portfolio contact');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:stushaphotofilm@gmail.com?subject=${subject}&body=${body}`;
  };

  if (formState === 'submitted') {
    return (
      <>
        <h3 className="text-[45px] font-normal leading-[100%] tracking-[0.03em] text-[#1A1A1A] lowercase">thank you<br />for your interest!</h3>
        <div className="mt-2 w-[395px]">
          <p className="text-[18px] font-normal leading-[150%] tracking-[0.03em] text-[#515151] lowercase">your message has been sent.</p>
          <p className="text-[18px] font-normal leading-[150%] tracking-[0.03em] text-[#515151] lowercase">I look forward to continuing the conversation.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <h3 className="text-[45px] font-normal leading-[100%] tracking-[0.03em] text-[#1A1A1A] lowercase">interested in prints<br />or collaborations?</h3>
      <p className="mt-2 text-[18px] font-normal leading-[150%] tracking-[0.03em] text-[#515151] lowercase w-[477px]">leave your message below and I&apos;ll get back to you soon</p>

      <form
        className="mt-4 space-y-3"
        onSubmit={handleSubmit}
      >
        <textarea
          className={`w-[500px] h-[117px] border border-gray-300 bg-transparent px-3 py-2 text-[12px] outline-none focus:border-gray-300 resize-none ${touched.message && !isMessageValid ? 'placeholder-red-500' : 'placeholder-gray-500'}`}
          placeholder={touched.message && !isMessageValid ? "Please write your message here" : "Your message here"}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, message: true }))}
          style={{ 
            color: touched.message && !isMessageValid ? '#ef4444' : '#999'
          }}
        />
        <div className="flex gap-5 items-end">
          <div className="flex flex-col gap-1">
            <input
              className={`w-[240px] h-[29px] bg-transparent border-0 border-b border-gray-300 px-0 py-0 text-[12px] outline-none focus:border-gray-300 ${touched.name && !isNameValid ? 'placeholder-red-500' : 'placeholder-gray-500'}`}
              placeholder={touched.name && !isNameValid ? "Please enter your name" : "Name"}
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, name: true }))}
              style={{ 
                color: touched.name && !isNameValid ? '#ef4444' : '#999'
              }}
            />
          </div>
          <div className="flex flex-col-reverse gap-1">
            {touched.email && !isEmailValid && email.length > 0 && (
              <span className="text-[10px] text-red-500">please enter a valid email address</span>
            )}
            <input
              className={`w-[240px] h-[29px] bg-transparent border-0 border-b border-gray-300 px-0 py-0 text-[12px] outline-none focus:border-gray-300 ${touched.email && !isEmailValid ? 'placeholder-red-500 border-red-500' : 'placeholder-gray-500'}`}
              placeholder={touched.email && !isEmailValid ? "Invalid email" : "Email"}
              inputMode="email"
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, email: true }))}
              style={{ 
                color: touched.email && !isEmailValid ? '#ef4444' : '#999',
                borderBottomColor: touched.email && !isEmailValid ? '#ef4444' : undefined
              }}
            />
          </div>
          <button
            type="submit"
            className="h-[40px] px-10 bg-[#1A1A1A] text-white text-[12px] hover:bg-[#333] transition-colors border border-[#1A1A1A] whitespace-nowrap"
          >
            get in touch
          </button>
        </div>
      </form>
    </>
  );
}

