export default function SquiggleDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        className="w-full h-10"
      >
        <path
          d="M0,20 C100,0 200,40 300,20 C400,0 500,40 600,20 C700,0 800,40 900,20 C1000,0 1100,40 1200,20"
          fill="none"
          stroke="#8B5CF6"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M0,30 C150,10 250,50 450,30 C550,10 650,50 850,30 C950,10 1050,50 1200,30"
          fill="none"
          stroke="#F472B6"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
