'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState('')
  const [responseMessage, setResponseMessage] = useState('');

  const onSubmit = async () => {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`,{
      method: "POST",
      body: JSON.stringify({"contents":[{"parts":[{"text": text}]}]})
    })
    const data = await response.json()
    const message = data.candidates[0].content.parts[0].text
    setResponseMessage(message);
  }

  return (
      <div className="container">
        <h1>Gemini Test</h1>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="メッセージを入力" />
          <Button type="submit" onClick={onSubmit}>送信</Button>
        </div>
        <p>Gemini の返答</p>
        <p>{responseMessage}</p>
      </div>
    );
}
