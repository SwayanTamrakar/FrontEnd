import { useState } from 'react';
import { Link, useNavigate } from 'react-router'
import api from '../api/axios';
import { AuthDivider, GoogleSignInButton } from '../components/GoogleSignInButton';

type RegisterForm = {
  username: string;
  email: string;
  password: string;
};

const inputClass =
  'mt-1.5 w-full rounded-lg border border-foreground/15 bg-page px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-button focus:ring-2 focus:ring-button/25';

export function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState<RegisterForm>({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const googleLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await api.post("/auth/register", form);
      alert("Registration successful");
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Registration failed");
    }
  };

  return (
    <div className="mx-auto flex min-h-[50vh] max-w-md flex-col justify-center px-4 py-8 sm:px-6">
      <h1 className="text-center text-2xl font-bold text-foreground">Create account</h1>

      <form
        className="mt-5 space-y-3"
        onSubmit={handleSubmit}
      >
        <div>
          <div>
            <label htmlFor="reg-first-name" className="block text-xs font-medium text-foreground">
              Name
            </label>
            <input
              id="reg-first-name"
              name="username"
              value={form.username}
              onChange={handleChange}
              type="text"
              autoComplete="given-name"
              required
              className={inputClass}
            />
          </div>
        </div>
        <div>
          <label htmlFor="reg-email" className="block text-xs font-medium text-foreground">
            Email
          </label>
          <input
            id="reg-email"
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            autoComplete="email"
            className={inputClass}
          />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label htmlFor="reg-password" className="block text-xs font-medium text-foreground">
              Password
            </label>
            <input
              id="reg-password"
              name="password"
              value={form.password}
              onChange={handleChange}
              type="password"
              autoComplete="new-password"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="reg-password-confirm" className="block text-xs font-medium text-foreground">
              Confirm password
            </label>
            <input
              id="reg-password-confirm"
              name="passwordConfirm"
              type="password"
              autoComplete="new-password"
              className={inputClass}
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-button py-2.5 text-sm font-semibold text-page transition hover:brightness-95"
        >
          Register
        </button>
        <button onClick={googleLogin} className="w-full rounded-lg bg-button py-2.5 text-sm font-semibold text-page transition hover:brightness-95">Login with Google</button>
      </form>

      <AuthDivider label="or" />
      <GoogleSignInButton />

      <p className="mt-5 text-center text-sm text-foreground/75">
        Already have an account?{' '}
        <Link to="/login" className="font-medium text-button hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  )
}
