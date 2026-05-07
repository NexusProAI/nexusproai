const NAV_OFFSET = 64;

// easeInOutCubic — suave na saída, desacelera graciosamente na chegada
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function smoothScrollTo(elementId, duration = 900) {
  const element = document.getElementById(elementId);
  if (!element) return;

  const start = window.scrollY;
  const target = element.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  const distance = target - start;
  let startTime = null;

  const step = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, start + distance * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}
