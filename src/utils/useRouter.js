// ─── HASH-BASED ROUTER HOOK ────────────────────────────────────────────────────
import { useState, useEffect } from 'react';

export function useRouter() {
  const [page, setPage] = useState(
    window.location.hash.replace('#', '') || 'home'
  );

  useEffect(() => {
    const onHash = () =>
      setPage(window.location.hash.replace('#', '') || 'home');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const navigate = (to) => {
    window.location.hash = to;
    setPage(to);
  };

  return { page, navigate };
}
