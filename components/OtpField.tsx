"use client";

import { useEffect, useRef, ChangeEvent, KeyboardEvent } from "react";

interface OTPFieldProps {
  otpFields: string[];
  setOtpFields: (fields: string[]) => void;
}

export const OTPField = ({ otpFields, setOtpFields }: OTPFieldProps) => {
  const firstInputRef = useRef<HTMLInputElement | null>(null);
  const lastInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    firstInputRef.current?.focus();
  }, []);

  const handleGetOTPvalue = (
    e: KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const { key, currentTarget } = e;
    const { nextSibling, previousSibling } = currentTarget;

    if (key === "Backspace") {
      setOtpFields(otpFields.map((otp, i) => (i === index ? "" : otp)));
      if (!currentTarget.value && previousSibling instanceof HTMLInputElement) {
        previousSibling.focus();
      }
      return;
    }

    if (key === "ArrowRight" && nextSibling instanceof HTMLInputElement) {
      nextSibling.focus();
      return;
    }

    if (key === "ArrowLeft" && previousSibling instanceof HTMLInputElement) {
      previousSibling.focus();
      return;
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    if (isNaN(Number(value))) return;

    setOtpFields(otpFields.map((otp, i) => (i === index ? value : otp)));

    if (value && e.target.nextSibling instanceof HTMLInputElement) {
      e.target.nextSibling.focus();
    }
  };

  const handlePasteOTP = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedData = e.clipboardData.getData("text/plain").slice(0, 6);

    if (isNaN(Number(pastedData))) return;

    setOtpFields(
      pastedData.split("").concat(new Array(6 - pastedData.length).fill(""))
    );

    lastInputRef.current?.focus();
  };

  return (
    <div className="flex justify-between gap-2 my-3">
      {otpFields.map((otp, i) => (
        <input
          key={i}
          type="text"
          value={otp}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleGetOTPvalue(e, i)}
          onPaste={handlePasteOTP}
          ref={
            i === 0
              ? firstInputRef
              : i === otpFields.length - 1
              ? lastInputRef
              : null
          }
          maxLength={1}
          required
          className="w-10 sm:w-12 md:w-14 xl:w-16 h-12 text-center text-2xl font-semibold border-2 border-gray-300 rounded-md text-gray-800 focus:border-blue-500 outline-none"
        />
      ))}
    </div>
  );
};
