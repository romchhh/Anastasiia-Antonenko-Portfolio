import Link from 'next/link';

interface HeaderProps {
  title: string;
  subtitle?: string;
  showLine?: boolean;
}

export default function Header({ title, subtitle, showLine = true }: HeaderProps) {
  return (
    <header className="bg-transparent relative">
      <div className="px-12 py-8">
        <div className="flex items-baseline justify-between">
          <h1 className="text-[45px] font-normal leading-[110%] tracking-[0.03em] text-[#1A1A1A] uppercase -ml-6">
            {title}
          </h1>
          {subtitle && (
            <Link 
              href="/" 
              className="text-[22px] font-normal leading-[110%] tracking-[0.03em] text-[#1A1A1A] lowercase hover:opacity-70 transition-opacity"
            >
              {subtitle}
            </Link>
          )}
        </div>
      </div>
      {showLine && (
        <div className="absolute left-0 right-0 h-px bg-gray-300 md:-mr-3 lg:-mr-6" style={{ bottom: '5.5%' }} />
      )}
    </header>
  );
}
