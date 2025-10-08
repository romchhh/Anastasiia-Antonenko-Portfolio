'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Portfolio() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to HOLES OF TIME project
    router.push('/portfolio/holes-of-time');
  }, [router]);

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center">
      <div className="text-center">
        <p className="text-[18px] text-[#515151]">Redirecting to HOLES OF TIME...</p>
      </div>
    </div>
  );
}