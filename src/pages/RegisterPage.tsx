import { useState } from 'react';
import { Link, useNavigate } from 'react-router'
import api from '../api/axios';

type RegisterForm = {
  email: string;
  password: string;
};

export function RegisterPage() {
  const navigate =
    useNavigate();

  const [form, setForm] =
    useState<RegisterForm>({
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

      await api.post(
        "/auth/register",
        form
      );

      alert("Registration successful");

      navigate("/login");

    } catch (error) {

      console.error(error);

      alert("Registration failed");
    }
  };

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-md flex-col justify-center px-4 py-16 sm:px-6">
      <h1 className="text-center text-3xl font-bold text-foreground">Create account</h1>

      <form
        className="mt-10 space-y-5"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="reg-email" className="block text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="reg-email"
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            autoComplete="email"
            className="mt-2 w-full rounded-xl border border-foreground/15 bg-page px-4 py-3 text-foreground outline-none focus:border-button focus:ring-2 focus:ring-button/25"
          />
        </div>
        <div>
          <label htmlFor="reg-password" className="block text-sm font-medium text-foreground">
            Password
          </label>
          <input
            id="reg-password"
            name="password"
            value={form.password}
            onChange={handleChange}
            type="password"
            autoComplete="new-password"
            className="mt-2 w-full rounded-xl border border-foreground/15 bg-page px-4 py-3 text-foreground outline-none focus:border-button focus:ring-2 focus:ring-button/25"
          />
        </div>
        <div>
          <label htmlFor="reg-password-confirm" className="block text-sm font-medium text-foreground">
            Confirm password
          </label>
          <input
            id="reg-password-confirm"
            name="passwordConfirm"
            type="password"
            autoComplete="new-password"
            className="mt-2 w-full rounded-xl border border-foreground/15 bg-page px-4 py-3 text-foreground outline-none focus:border-button focus:ring-2 focus:ring-button/25"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-xl bg-button py-3 text-sm font-semibold text-page transition hover:brightness-95"
        >
          Register
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-foreground/75">
        Already have an account?{' '}
        <Link to="/login" className="font-medium text-button hover:underline">
          Sign in
        </Link>
      </p>

      <Link to="/" className="mt-6 text-center text-sm font-medium text-button hover:underline">
        Back to home
      </Link>
    </div>
  )
}
