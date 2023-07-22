"use client";

import axios from "axios";
import { mutate } from "swr";
import FormInput from "./FormInput";
import type { CreateLinkDto } from "../lib/link";
import { FormEventHandler, useId, useState } from "react";

export default function AddLink() {
  const [sourceUrl, setSourceUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const id = useId();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    await axios.post<CreateLinkDto>("/api/links", { sourceUrl, shortUrl });
    mutate("/api/links");
  };

  return (
    <form
      className="bg-secondary px-6 pt-6 pb-4 flex flex-col gap-4"
      onSubmit={handleSubmit}
    >
      <FormInput
        id={`${id}-source-url`}
        label="URL original"
        setValue={setSourceUrl}
        value={sourceUrl}
        placeholder="https://example.com/long-url"
        required={true}
      />
      <FormInput
        id={`${id}-short-url`}
        label="URL personalizada"
        setValue={setShortUrl}
        value={shortUrl}
        placeholder="Mi-Link"
        type="text"
        tag={true}
      />
      <button
        type="submit"
        className="bg-primary hover:bg-accent transition-colors py-2 px-6 self-start"
      >
        Crear 🔗
      </button>
    </form>
  );
}
