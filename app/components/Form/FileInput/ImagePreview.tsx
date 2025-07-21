"use client";

import { User } from "lucide-react";
import { useFileInput } from "./Root";
import { useMemo } from "react";
import Image from "next/image";

export function ImagePreview() {
  const { files } = useFileInput();

  const previewUrl = useMemo(() => {
    if (files.length === 0) {
      return null;
    }
    return URL.createObjectURL(files[0]);
  }, [files]);

  if (previewUrl === null) {
    return (
      <div className="bg-violet-50 flex h-16 w-16 items-center justify-center rounded-full">
        <User className="w-8 h-8 text-violet-500" />
      </div>
    );
  } else {
    return (
      <Image
        src={previewUrl}
        alt={""}
        height={64}
        width={64}
        className="rounded-full object-cover"
      />
    );
  }
}
