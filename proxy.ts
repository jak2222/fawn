/**
 * Maintenance / offline gate.
 *
 * Returns a 503 maintenance page for every request so the site reads as
 * temporarily down (correct semantics for search engines: 503 + Retry-After
 * tells crawlers it's transient and not to deindex).
 *
 * To bring the site back online: delete this file and push.
 */

const MAINTENANCE_HTML = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>fawn — back soon</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { height: 100%; }
  body {
    font-family: Georgia, "Times New Roman", serif;
    background: #F2EDE4;
    color: #1F1B17;
    display: grid;
    place-items: center;
    padding: 2rem;
    text-align: center;
    -webkit-font-smoothing: antialiased;
  }
  .wordmark {
    font-size: clamp(4.5rem, 13vw, 10rem);
    letter-spacing: -0.025em;
    font-weight: 400;
    line-height: 0.95;
    margin-bottom: 1.25rem;
  }
  .tagline {
    font-style: italic;
    color: #6E1E1E;
    font-size: clamp(1rem, 1.4vw, 1.25rem);
    letter-spacing: 0.005em;
  }
</style>
</head>
<body>
  <main>
    <h1 class="wordmark">fawn.</h1>
    <p class="tagline">Back soon.</p>
  </main>
</body>
</html>`;

export function proxy() {
  return new Response(MAINTENANCE_HTML, {
    status: 503,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Retry-After": "3600",
      "Cache-Control": "no-store",
    },
  });
}

export const config = {
  // Match every request — including any future routes or assets — so
  // nothing leaks through while offline.
  matcher: "/:path*",
};
