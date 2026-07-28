import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";
import Input from "../../../components/ui/Input";
import Logo from "../../../components/ui/Logo";

import {
  loginSchema,
  type LoginSchema,
} from "../schemas/loginSchema";

import { useAuthStore } from "../../../store/auth.store";

export default function LoginPage() {
  const navigate = useNavigate();

  const setAuth = useAuthStore((state) => state.setAuth);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(data: LoginSchema) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setAuth(
      {
        id: "1",
        email: data.email,
        username: "Amirali",
      },
      "fake-jwt-token"
    );

    navigate("/profile");
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <Card>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          <Logo />

          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            error={errors.email?.message}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            {...register("password")}
            error={errors.password?.message}
          />

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-zinc-300">
              <input type="checkbox" />
              Remember me
            </label>

            <Link
              to="/forgot-password"
              className="text-blue-500 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <Button
            loading={isSubmitting}
            fullWidth
            type="submit"
          >
            Sign In
          </Button>

          <p className="text-center text-sm text-zinc-400">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-500 hover:underline"
            >
              Create one
            </Link>
          </p>
        </form>
      </Card>
    </motion.div>
  );
}
