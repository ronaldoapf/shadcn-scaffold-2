import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 mb-4 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email below to login to your account
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="johndoe@example.com" required />
        </Field>
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Link
              to="/password-reset"
              className="ml-auto text-sm underline-offset-4 hover:underline text-indigo-800"
            >
              Forgot your password?
            </Link>
          </div>
          <Input id="password" placeholder="******" type="password" required />
        </Field>
        <Field>
          <Button type="submit">Login</Button>
        </Field>
      </FieldGroup>

      <div className="flex justify-center items-center gap-1">
        <p className="text-sm">Don't have an account?</p>
        <Link
          to="/sign-up"
          className="text-sm underline-offset-4 hover:underline text-indigo-800"
        >
          Sign up
        </Link>
      </div>
    </form>

  )
}
