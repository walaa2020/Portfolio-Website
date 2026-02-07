import * as React from "react"

import { cn } from "@/lib/utils"

function Input({
  className,
  type,
  ...props
}) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        " placeholder:text-light placeholder:opacity-50 selection:bg-dark selection:text-primary-foreground dark:bg-input/30 border-none text-light h-9 w-full min-w-0 rounded-lg  bg-dark px-3 py-1 font-poppins-Bold  transition-[color,box-shadow] outline-none  disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      "focus-visible:border-primary focus-visible:ring-primary/50 focus-visible:ring-[1px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props} />
  );
}

export { Input }
