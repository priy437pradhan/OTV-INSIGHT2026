import React from "react";
import { Check } from "lucide-react";

const PaymentStep = ({ onPayment, onBack }) => {
  return (
    <>
      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-white mb-2">
          Registration Fee
        </h2>
        <p className="text-gray-300 mb-4">
          Complete your registration with a one-time payment
        </p>

        {/* Price Card */}
        <div className="bg-black/40 border border-white/20 rounded-xl p-6 mb-4">
          <p className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent mb-2">
            ₹500
          </p>
          <p className="text-sm text-gray-300">
            One-time registration fee
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="space-y-3 mb-4">
        {[
          "Access to all creator features",
          "Participate in awards voting",
          "Creator dashboard access",
        ].map((text) => (
          <div
            key={text}
            className="flex items-center gap-3 text-sm text-gray-300"
          >
            <Check className="text-green-400 flex-shrink-0" size={20} />
            <span>{text}</span>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="flex-1 border border-white/30 text-white py-3 rounded-lg
          font-semibold hover:bg-white/10 transition-all"
        >
          Back
        </button>

        <button
          onClick={onPayment}
          className="flex-1 bg-gradient-to-r from-orange-500 to-pink-600
          text-white py-3 rounded-lg font-semibold
          hover:opacity-90 transition-all"
        >
          Pay Now
        </button>
      </div>

      {/* Footer */}
      <p className="text-xs text-gray-400 text-center mt-4">
        Secure payment powered by Razorpay
      </p>
    </>
  );
};

export default PaymentStep;
