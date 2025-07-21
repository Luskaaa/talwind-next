import { LogOut } from "lucide-react";
import Image from "next/image";
import { Button } from "../Button";

export function Profile() {
  return (
    <div className="grid items-center gap-3 grid-cols-profile">
      <Image
        src={"https://github.com/Luskaaa.png"}
        alt={"icon"}
        width={40}
        height={40}
        className="rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Lucas Migueis
        </span>
        <span className="text-sm text-zinc-500 truncate">
          lucasmigueis1311@gmail.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="w-5 h-5 text-zinc-500" />
      </Button>
    </div>
  );
}
