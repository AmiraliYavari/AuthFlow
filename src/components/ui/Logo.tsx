export default function Logo() {
  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-4xl font-black tracking-tight text-white">
        Auth
        <span className="text-blue-500">Flow</span>
      </h1>

      <p className="text-sm text-zinc-400">
        Secure Authentication Platform
      </p>
    </div>
  );
}