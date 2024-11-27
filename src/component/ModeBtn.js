'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function ModeBtn({ initialMode }) {
  const router = useRouter()
  const [mode, setMode] = useState(initialMode)

  useEffect(() => {
    const modeCookie = (`; ${document.cookie}`).split(`; mode=`).pop().split(";")[0] || "light";
    if (mode !== modeCookie) {
      setMode(modeCookie);
    }
  }, []);

  const toggleMode = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    document.cookie = `mode=${newMode}; max-age=3600`;
    setMode(newMode);
    router.refresh()
  };

  return (
    <button
      className={`modeBtn ${mode}`}
      onClick={toggleMode}
    >
      <img src="/assets/icon/icon_light.svg" alt="icon" />
      <img src="/assets/icon/icon_dark.svg"  alt="icon"/>
    </button>
  )
}

export async function getServerSideProps({ req }) {
  const cookies = req.headers.cookie || "";
  const modeCookie = cookies.split("; ").find((c) => c.startsWith("mode="));
  const initialMode = modeCookie ? modeCookie.split("=")[1] : "light";

  return { props: { initialMode } };
}