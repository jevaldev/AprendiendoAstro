import { useState } from "preact/hooks";

export default function Greeting({ messages }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <>
      <h3>{greeting}! Gracias por visitar mi página</h3>
      <button onClick={() => setGreeting(randomMessage())}>Nuevo saludo</button>
    </>
  );
}
