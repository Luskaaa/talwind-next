import { ComponentProps } from "react";

export type TextareaProps = ComponentProps<"textarea">;

export function Textarea(props: TextareaProps) {
  return (
    <textarea
      className="min-h-28 resize-y w-full text-sm rounded-lg border border-zinc-300 px-3 py-2 shadow-sm "
      {...props}
    ></textarea>
  );
}
