"use client";

import axios from "axios";
import { FormEventHandler, useId, useState } from "react";
import FormInput from "./FormInput";

export default function AddLink() {
  const [sourceUrl, setSourceUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const id = useId();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    axios.post("/api/links", { sourceUrl, shortUrl });
  };

  return (
    <form
      className="bg-indigo-900 p-2 flex flex-col gap-2 text-white"
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
      <button type="submit">🔗 Acortar vínculo</button>
    </form>
  );
}
