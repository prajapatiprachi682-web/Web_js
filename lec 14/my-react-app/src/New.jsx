import { createContext, useContext, useState } from "react";

/*
  ========================================================
  useContext DEMO — Theme Switcher
  --------------------------------------------------------
  Idea: App (parent) ek theme banata hai. Wo theme
  seedhe sabse niche wale child (ThemedButton) tak
  pahunchta hai — beech wale Toolbar ko props dene ki
  zaroorat NAHI. Isi ko "prop drilling se bachna" kehte hain.

  Component tree:
      App  (Provider — yahan se data bhejte hain)
        └── Toolbar   (beech ka child — ise theme se matlab nahi)
              └── ThemedButton  (yahan theme use hoti hai)
  ========================================================
*/

// STEP 1: Context banao. Yeh ek "box" hai jisme data rakhenge.
const ThemeContext = createContext(null);

// STEP 2: Sabse niche wala child — yahan useContext se data nikalte hain.
//          Dhyaan do: ise koi prop nahi mil rahi, fir bhi theme mil gayi!
function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: isDark ? "#1f2937" : "#fde68a",
        color: isDark ? "#fde68a" : "#1f2937",
        border: "2px solid",
        borderColor: isDark ? "#fde68a" : "#1f2937",
        padding: "12px 22px",
        borderRadius: 999,
        fontSize: 16,
        fontWeight: 700,
        cursor: "pointer",
        transition: "all 0.25s ease",
      }}
    >
      {isDark ? "🌙 Dark mode" : "☀️ Light mode"} — switch karo
    </button>
  );
}

// STEP 3: Beech ka child. Ye theme ke baare mein kuch nahi janta,
//          bas ThemedButton ko render karta hai. (No props passing!)
function Toolbar() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ThemedButton />
    </div>
  );
}

// Chhota sa tree diagram taaki samajh aaye data kaise neeche jaata hai
function TreeDiagram({ theme }) {
  const isDark = theme === "dark";
  const dim = isDark ? "#9ca3af" : "#6b7280";
  const hot = isDark ? "#fde68a" : "#b45309";
  return (
    <pre
      style={{
        fontFamily: "ui-monospace, monospace",
        fontSize: 13,
        lineHeight: 1.7,
        color: dim,
        margin: 0,
      }}
    >
      <span style={{ color: hot, fontWeight: 700 }}>App</span>  ← Provider (theme: "{theme}")
      {"\n"}  └─ Toolbar       <span style={{ fontStyle: "italic" }}>(theme se matlab nahi)</span>
      {"\n"}       └─ <span style={{ color: hot, fontWeight: 700 }}>ThemedButton</span>  ← useContext() se theme yahan mili
    </pre>
  );
}

// STEP 4: App — yahan state banti hai aur Provider se sabko di jaati hai.
export default function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((t) => (t === "light" ? "dark" : "light"));

  const isDark = theme === "dark";

  return (
    // value={...} mein jo bhi doge, woh har child ko mil jaayega
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          minHeight: "100vh",
          background: isDark ? "#0f172a" : "#fffbeb",
          color: isDark ? "#e5e7eb" : "#1f2937",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
          transition: "background 0.25s ease",
        }}
      >
        <div
          style={{
            maxWidth: 520,
            width: "100%",
            background: isDark ? "#1e293b" : "#ffffff",
            borderRadius: 18,
            padding: "32px 28px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
          }}
        >
          <h1 style={{ fontSize: 24, fontWeight: 800, margin: "0 0 6px" }}>
            useContext Demo
          </h1>
          <p style={{ margin: "0 0 22px", color: isDark ? "#94a3b8" : "#6b7280" }}>
            Niche button dabao — theme poori app me badal jaayegi, bina props
            pass kiye.
          </p>

          <div
            style={{
              background: isDark ? "#0f172a" : "#f9fafb",
              borderRadius: 12,
              padding: 16,
              marginBottom: 24,
            }}
          >
            <TreeDiagram theme={theme} />
          </div>

          <Toolbar />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}