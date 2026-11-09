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
  choosen: Tech[];
}

const TechCard = ({ singleTech, onAdd, choosen }: ITechProp) => {
  // const [isSelected, setIsSelected] = useState(false);

  // const handleBtn = () => {
  //   setIsSelected(true);
  // };
  const isSelected = choosen.some((tech) => tech.id === singleTech.id);

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
        onClick={() => onAdd(singleTech)}
        disabled={isSelected}
        className={`mt-5 w-full rounded-lg border py-2.5 text-xs font-semibold transition-all duration-200 ${
          isSelected
            ? "cursor-not-allowed border-slate-200 bg-slate-100 text-slate-400"
            : "border-pink-200 text-pink-600 hover:border-pink-500 hover:bg-pink-50"
        }`}
      >
        {isSelected ? "✓ Added to Stack" : "+ Add to Stack"}
      </button>
    </div>
  );
};

export default TechCard;
