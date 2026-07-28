import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <main
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-zinc-950
        px-4
      "
    >
      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      <Outlet />
    </main>
  );
}