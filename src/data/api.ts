export const submitText = async (text: string) => {
  const response = await fetch("/api/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  const data = await response.json();
  return data;
};
