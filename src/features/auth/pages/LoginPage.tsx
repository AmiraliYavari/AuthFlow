import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";
import Input from "../../../components/ui/Input";
import Logo from "../../../components/ui/Logo";

export default function LoginPage() {
  return (
    <Card>
      <div className="space-y-6">
        <Logo />

        <Input
          type="email"
          placeholder="Email"
        />

        <Input
          type="password"
          placeholder="Password"
        />

        <Button>
          Login
        </Button>
      </div>
    </Card>
  );
}