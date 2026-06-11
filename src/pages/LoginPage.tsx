import { Link, useNavigate } from 'react-router'
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import api from '../api/axios';
import { AuthDivider, GoogleSignInButton } from '../components/GoogleSignInButton';
import { saveProfilePassword } from '../utils/profileStorage';

type LoginForm = {
  email: string;
  password: string;
};

type LoginResponse = {
  token: string;
};

export function LoginPage() {
  const navigate =
    useNavigate();

  const { login } =
    useAuth();

  const [form, setForm] =
    useState<LoginForm>({
      email: "",
      password: "",
    });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    try {

      const response =
        await api.post<LoginResponse>(
          "/auth/login",
          form
        );

      login(response.data.token, form.email)
      saveProfilePassword(form.email, form.password)

      navigate("/");

    } catch (error) {

      console.error(error);

      alert("Invalid credentials");
    }
  };

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-md flex-col justify-center px-4 py-16 sm:px-6">
      <h1 className="text-center text-2xl font-bold text-foreground">Sign in</h1>

      <form
        className="mt-5 space-y-3"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            autoComplete="email"
            className="mt-2 w-full rounded-xl border border-foreground/15 bg-page px-4 py-3 text-foreground outline-none focus:border-button focus:ring-2 focus:ring-button/25"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-foreground">
            Password
          </label>
          <input
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            type="password"
            autoComplete="current-password"
            className="mt-2 w-full rounded-xl border border-foreground/15 bg-page px-4 py-3 text-foreground outline-none focus:border-button focus:ring-2 focus:ring-button/25"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-xl bg-button py-3 text-sm font-semibold text-page transition hover:brightness-95"
        >
          Log in
        </button>
      </form>

      <AuthDivider label="or" />
      <GoogleSignInButton />

      <p className="mt-5 text-center text-sm text-foreground/75">
        New here?{' '}
        <Link to="/register" className="font-medium text-button hover:underline">
          Create an account
        </Link>
      </p>

      <Link to="/" className="mt-6 text-center text-sm font-medium text-button hover:underline">
        Back to home
      </Link>
    </div>
  )
}
