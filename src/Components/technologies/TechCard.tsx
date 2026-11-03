// import React from "react";
// import type { Tech } from "../../Types/techTypes";

// interface ITechProp {
//   singleTech: Tech;
// }

// const TechCard = ({ singleTech }: ITechProp) => {
//   return (
//     <div>
//       {card here}
//     </div>
//   );
// };

// export default TechCard;

// import { useState } from "react";
import { useState } from "react";
import type { Tech } from "../../Types/techTypes";

interface ITechProp {
  singleTech: Tech;
  onAdd: (tech: Tech) => void;
}

const TechCard = ({ singleTech, onAdd }: ITechProp) => {
  const [isSelected, setIsSelected] = useState(false);

  // const handleBtn = () => {
  //   setIsSelected(true);
  // };

  return (
    <div className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-lg">
      {/* Card Header */}
      <div className="flex items-start justify-between gap-3">
        {/* Technology Icon and Name */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-50 p-2">
            <img
              src={singleTech.icon}
              alt={`${singleTech.name} logo`}
              className="h-full w-full object-contain"
            />
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-800">
              {singleTech.name}
            </h3>

            <p className="mt-1 text-xs text-slate-400">{singleTech.category}</p>
          </div>
        </div>

        {/* Badge */}
        <span className="shrink-0 rounded-full bg-pink-50 px-2.5 py-1 text-[10px] font-medium text-pink-600">
          {singleTech.badge}
        </span>
      </div>

      {/* Description */}
      <p className="mt-5 min-h-[60px] text-xs leading-[1.7] text-slate-500">
        {singleTech.description}
      </p>

      {/* Rating and Difficulty */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          <span className="text-sm text-amber-400">★</span>

          <span className="text-xs font-semibold text-slate-700">
            {singleTech.rating}
          </span>

          <span className="text-[10px] text-slate-400">/ 5.0</span>
        </div>

        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-medium text-slate-500">
          {singleTech.difficulty}
        </span>
      </div>

      {/* Add to Stack Button */}
      <button
        type="button"
        onClick={() => {
          setIsSelected(true);
          onAdd(singleTech);
        }}
        disabled={isSelected}
        className="mt-5 w-full rounded-lg border border-pink-200 py-2.5 text-xs font-semibold text-pink-600 transition-all duration-200 hover:border-pink-500 hover:bg-pink-50 disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:hover:bg-slate-100"
      >
        {isSelected ? "✓ Added to Stack" : "+ Add to Stack"}
      </button>
    </div>
  );
};

export default TechCard;
