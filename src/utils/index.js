export function handleFadein(ref) {
  ref.current.classList.add("fade-in");
  setTimeout(() => {
    if (!ref.current) return;
    ref.current.classList.remove("fade-in");
  }, 500);
}
