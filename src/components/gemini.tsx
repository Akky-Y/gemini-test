"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { submitText } from "@/data/api";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function Gemini() {
  const [text, setText] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    setLoading(true);
    const data = await submitText(text);
    const message = data.candidates[0].content.parts[0].text;
    setResponseMessage(message);
    setLoading(false);
  };

  return (
    <div>
      <h1>Gemini Test</h1>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="メッセージを入力"
        />
        <Button type="submit" onClick={onSubmit}>
          送信
        </Button>
      </div>
      <p>Gemini の返答</p>
      {loading ? (
        <p>問い合わせ中...</p>
      ) : (
        <ReactMarkdown>{responseMessage}</ReactMarkdown>
      )}
    </div>
  );
}
