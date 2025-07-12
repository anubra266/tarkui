export default function BasicAccordion() {
  return (
    <div className="w-full p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-center space-x-3">
      <div className="w-4 h-4 bg-amber-400 rounded-full flex items-center justify-center">
        <div className="w-2 h-2 bg-amber-900 rounded-full"></div>
      </div>
      <span className="text-amber-200 text-sm">
        Basic accordion item expanded
      </span>
    </div>
  );
}
