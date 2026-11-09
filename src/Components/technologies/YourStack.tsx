import type { Tech } from "../../Types/techTypes";

interface IStacks {
  choosen: Tech[];
  onRemove: () => void;
}

const YourStack = ({ choosen, onRemove }: IStacks) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      {/* Sidebar Header */}
      <div className="flex items-center justify-between gap-3">
        <div>
          <h3 className="text-base font-bold text-slate-800">Your Stack</h3>

          <p className="mt-1 text-xs text-slate-400">
            Your selected technologies
          </p>
        </div>

        <span className="shrink-0 rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-600">
          {choosen.length}
        </span>
      </div>

      {/* Remove All Button */}
      <div className="mt-5">
        <button
          type="button"
          onClick={onRemove}
          disabled={choosen.length === 0}
          className="w-full rounded-lg border border-slate-200 py-2 text-xs font-medium text-slate-500 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:text-slate-300"
        >
          Remove All
        </button>
      </div>

      {/* Selected Technologies / Empty State */}
      <div className="mt-5">
        {choosen.length > 0 ? (
          <div className="space-y-3">
            {choosen.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50 p-3"
              >
                {/* Technology Icon */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white p-2">
                  <img
                    src={tech.icon}
                    alt={`${tech.name} logo`}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Technology Details */}
                <div className="min-w-0 flex-1">
                  <h4 className="truncate text-sm font-semibold text-slate-700">
                    {tech.name}
                  </h4>

                  <p className="mt-1 text-xs text-slate-400">{tech.category}</p>
                </div>

                {/* Selected Indicator */}
                <span className="text-sm font-bold text-pink-500">✓</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex min-h-[220px] flex-col items-center justify-center rounded-lg border border-dashed border-slate-200 bg-slate-50/50 px-4 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-50">
              <span className="text-2xl text-pink-400">+</span>
            </div>

            <h4 className="mt-4 text-sm font-semibold text-slate-700">
              Your stack is empty
            </h4>

            <p className="mt-2 max-w-[200px] text-xs leading-5 text-slate-400">
              Start building your ideal development stack by adding
              technologies.
            </p>
          </div>
        )}
      </div>

      {/* Footer Information */}
      <p className="mt-4 text-center text-[11px] leading-5 text-slate-400">
        Select one technology from each category to build your stack.
      </p>
    </div>
  );
};

export default YourStack;

// <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-50">
//   <span className="text-2xl text-pink-400">+</span>
// </div>

// <h4 className="mt-4 text-sm font-semibold text-slate-700">
//   Your stack is empty
// </h4>

// <p className="mt-2 max-w-[200px] text-xs leading-5 text-slate-400">
//   Start building your ideal development stack by adding technologies.
// </p>
