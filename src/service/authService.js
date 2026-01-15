const API_BASE_URL = "https://prodapi.otvinsight.com";

/* -------------------- RESPONSE HANDLER -------------------- */
const parseResponse = async (res) => {
  const text = await res.text();
  let data = {};

  try {
    data = JSON.parse(text);
  } catch {
    data = {};
  }

  if (!res.ok) {
    // backend usually sends { msg: "..."} or { message: "..." }
    throw new Error(
      data.msg || data.message || "Something went wrong. Please try again."
    );
  }

  return data;
};

/* -------------------- SIGN UP (role decided here) -------------------- */
const signup = async ({ name, phone, email, password, role_id }) => {
  const res = await fetch(`${API_BASE_URL}/api/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      phone,
      email,
      password,
      role_id, // ✅ allowed ONLY in signup
    }),
  });

  return parseResponse(res);
};

/* -------------------- LOGIN (NO role_id here ❌) -------------------- */
const login = async ({
  username,
  password,
  provider,
  provider_user_id,
  email,
  phone,
  name,
}) => {
  const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
      provider,           // "email" | "google"
      provider_user_id,   // "" for email login
      email,
      phone,
      name,
      // ❌ DO NOT SEND role_id here
    }),
  });

  return parseResponse(res);
};

/* -------------------- SESSION STORAGE -------------------- */
const saveSession = (res) => {
  if (res?.token) {
    sessionStorage.setItem("insight2026_token", res.token);
  }

  if (res?.user) {
    sessionStorage.setItem(
      "insight2026_user",
      JSON.stringify(res.user)
    );
  }
};

/* -------------------- HELPERS -------------------- */
const getCurrentUser = () => {
  const user = sessionStorage.getItem("insight2026_user");
  return user ? JSON.parse(user) : null;
};

const logout = () => {
  sessionStorage.removeItem("insight2026_token");
  sessionStorage.removeItem("insight2026_user");
};

export const authService = {
  signup,
  login,
  saveSession,
  getCurrentUser,
  logout,
};
