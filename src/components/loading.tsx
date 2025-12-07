import { LoaderCircle } from "lucide-react";

interface LoadingProps {
  label?: string;
}

export function Loading({ label }: LoadingProps) {
  return (
    <span className="flex flex-col gap-1 items-center justify-center">
      <LoaderCircle className="animate-spin size-5" />
      {label && (
        <p className="font-semibold text-base">{label}</p>
      )}
    </span>
  )
} 