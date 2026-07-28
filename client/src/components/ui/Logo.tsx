import { typography } from "../../styles/typography";

export default function Logo() {
  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className={`${typography.h1} tracking-tight`}>
        Auth
        <span className="text-blue-500">Flow</span>
      </h1>

      <p className="text-zinc-400">
        Secure Authentication Platform
      </p>
    </div>
  );
}