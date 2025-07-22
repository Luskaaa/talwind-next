import { LogOut } from "lucide-react";
import Image from "next/image";
import { Button } from "../Button";

export function Profile() {
  return (
    <div className="grid-cols-profile grid items-center gap-3">
      <Image
        src={"https://github.com/Luskaaa.png"}
        alt={"icon"}
        width={40}
        height={40}
        className="rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Lucas Migueis
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          lucasmigueis1311@gmail.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5" />
      </Button>
    </div>
  );
}
