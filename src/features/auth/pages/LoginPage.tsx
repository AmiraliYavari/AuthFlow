import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";
import Input from "../../../components/ui/Input";
import Logo from "../../../components/ui/Logo";

export default function LoginPage() {
  return (
    <Card>
      <div className="space-y-5">
        <Logo />

        <Input
          label="Email"
          placeholder="example@email.com"
        />

        <Input
          label="Password"
          type="password"
          placeholder="••••••••"
        />

        <Button fullWidth>
          Login
        </Button>
      </div>
    </Card>
  );
}