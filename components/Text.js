// t = "plain string"  or  [english, bengali]
export function Text({ t }) {
  if (typeof t === "string") return <>{t}</>;
  return (
    <>
      <span>{t[0]}</span>
      <span className="bn">{t[1]}</span>
    </>
  );
}
