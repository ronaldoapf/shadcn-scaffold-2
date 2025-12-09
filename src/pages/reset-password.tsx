import { ResetPasswordForm } from "@/components/forms/reset-password-form"
import { ArrowRight, GalleryVerticalEnd } from "lucide-react"
import { Link } from "react-router-dom"

export function ResetPassword() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="bg-muted relative hidden lg:block">
        <img
          src="https://picsum.photos/1200/1200"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="bg-neutral-50 flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-end md:justify-between items-center gap-2">
          <a href="#" className="md:flex items-center gap-2 font-medium hidden">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Acme Inc.
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-lg">
            <ResetPasswordForm />
          </div>
        </div>
      </div>
    </div>
  )
}
