import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { Check } from "lucide-react";

import AuthStep from "./AuthStep";
import CategoryStep from "./CategoryStep";
import PaymentStep from "./PaymentStep";
import { useAuth } from "../context/AuthContext";
import { ACTIVE_THEME } from "../config/Theme";
import { authService } from "../service/authService";

/* -------------------- PORTAL -------------------- */
const Portal = ({ children }) =>
  ReactDOM.createPortal(children, document.body);

/* -------------------- MODAL -------------------- */
const AuthModal = ({ isOpen, onClose, userType }) => {
  const { login } = useAuth();

  const [isSignIn, setIsSignIn] = useState(true);
  const [step, setStep] = useState(1);
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  /* ---------- BODY SCROLL LOCK ---------- */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isOpen]);
  useEffect(() => {
  if (!apiError) return;

  const timer = setTimeout(() => {
    setApiError("");
  }, 6000); // ⏱️ 6 seconds

  return () => clearTimeout(timer);
}, [apiError]);


  /* ---------- EMAIL SIGNUP / LOGIN ---------- */
 /* ---------- EMAIL SIGNUP / LOGIN ---------- */
const onSubmit = async (data) => {
  setApiError("");
  setLoading(true);

  try {
    // -------- SIGN UP (creator / public only) --------
    if (!isSignIn) {
      const payload = {
        name: data.name,
        phone: data.phone || "",
        email: data.email,
        password: data.password,
        role_id: userType === "creator" ? "2" : "3", // ✅ ONLY HERE
      };

      const res = await authService.signup(payload);
      authService.saveSession(res);
      login(res.user);
      handleClose();
      return;
    }

    // -------- LOGIN (ADMIN / CREATOR / PUBLIC) --------
    const payload = {
      username: data.email,
      password: data.password,
      provider: "email",
      provider_user_id: "",
      email: data.email,
      phone: "",
      name: "",
      // ❌ NO role_id
    };

    const res = await authService.login(payload);
    authService.saveSession(res);
    login(res.user);
    handleClose();

  } catch (err) {
    setApiError(err.message);
  } finally {
    setLoading(false);
  }
};

const isAdmin = userType === "admin";
  /* ---------- GOOGLE LOGIN ---------- */
  const handleGoogleSignIn = () => {
    if (!window.google?.accounts?.id) return;

    window.google.accounts.id.initialize({
      client_id:
        "881133482472-4ckamgbvg4ipr373uqfl3jg94rh6dmlb.apps.googleusercontent.com",
      callback: async (response) => {
        try {
          setApiError("");
          setLoading(true);

          const payload = JSON.parse(
            atob(response.credential.split(".")[1])
          );

          const res = await authService.login({
            username: payload.email,
            password: "",
            provider: "google",
            provider_user_id: payload.sub,
            email: payload.email,
            phone: "",
            name: payload.name,
            role_id: userType === "creator" ? "2" : "3",
          });

          authService.saveSession(res);
          login(res.user);
          handleClose();
        } catch (err) {
          setApiError(err.message || "Google login failed");
        } finally {
          setLoading(false);
        }
      },
    });

    window.google.accounts.id.prompt();
  };

  /* ---------- CLOSE ---------- */
  const handleClose = () => {
    reset();
    setStep(1);
    setIsSignIn(true);
    setApiError("");
    setLoading(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Portal>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={handleClose}
        />

        <div
          className={`relative w-full max-w-md rounded-2xl shadow-2xl 
          bg-gradient-to-br ${ACTIVE_THEME.gradient.hero}`}
        >
          {/* STEP INDICATOR */}
          {userType === "creator" && !isSignIn && (
            <div className="flex justify-center items-center gap-2 p-4 border-b border-white/10">
              {[1, 2, 3].map((s) => (
                <React.Fragment key={s}>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      step >= s
                        ? `bg-gradient-to-r ${ACTIVE_THEME.primary.from} ${ACTIVE_THEME.primary.to} text-white`
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {step > s ? <Check size={16} /> : s}
                  </div>
                  {s < 3 && (
                    <div
                      className={`h-1 w-12 ${
                        step > s
                          ? `bg-gradient-to-r ${ACTIVE_THEME.primary.from} ${ACTIVE_THEME.primary.to}`
                          : "bg-gray-200"
                      }`}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          )}

          <div className="p-4">
            {/* BACKEND ERROR MESSAGE */}
            {apiError && (
              <div className="mb-3 rounded-lg bg-red-500/15 border border-red-500/40 px-4 py-2 text-red-300 text-sm">
                {apiError}
              </div>
            )}

            {step === 1 && (
             <AuthStep
  register={register}
  errors={errors}
  isSignIn={isAdmin ? true : isSignIn}
  setIsSignIn={isAdmin ? () => {} : setIsSignIn}
  onSubmit={handleSubmit(onSubmit)}
  onGoogleSignIn={handleGoogleSignIn}
  isLoading={loading}
/>

            )}

            {step === 2 && (
              <CategoryStep
                onNext={() => setStep(3)}
                onBack={() => setStep(1)}
              />
            )}

            {step === 3 && (
              <PaymentStep
                onPayment={handleClose}
                onBack={() => setStep(2)}
              />
            )}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export { AuthModal };
