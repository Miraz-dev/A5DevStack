// import { use } from "react";
// import type { Tech } from "../../Types/techTypes";
// import YourStack from "./YourStack";
// import TechCard from "./TechCard";

// interface ITechPromiseProp {
//   techsPromise: Promise<Tech[]>;
// }

// const TechSection = ({ techsPromise }: ITechPromiseProp) => {
//   const allTechs = use(techsPromise);

//   return (
//     <div>
//       {/* First: Section Headings on Top */}
//       <div>
//         <h2>Explore the Technologies</h2>
//         <h5>Pick one technology per category to pick your ideal stack.</h5>
//       </div>

//       <div>
//         {/* Second: Loading the techs to show them in cards part */}
//         <div>
//           {allTechs.map((singleTech) => (
//             <TechCard key={singleTech.id} singleTech={singleTech} />
//           ))}
//         </div>

//         {/* Third: "Your Stack part" */}
//         <div>
//           <YourStack />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TechSection;

import { use, useState } from "react";
import type { Tech } from "../../Types/techTypes";
import YourStack from "./YourStack";
import TechCard from "./TechCard";

interface ITechPromiseProp {
  techsPromise: Promise<Tech[]>;
}

const TechSection = ({ techsPromise }: ITechPromiseProp) => {
  const allTechs = use(techsPromise);

  const onAdd = (tech: Tech) => {
    // setIsSelected(true);
    console.log(tech);
  };

  return (
    <section
      id="technologies"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20"
    >
      {/* Section Heading */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Explore the Technologies
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
          Pick one technology per category to build your ideal development
          stack.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
        {/* Technology Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-2">
          {allTechs.map((singleTech) => (
            <TechCard
              key={singleTech.id}
              singleTech={singleTech}
              onAdd={onAdd}
            />
          ))}
        </div>

        {/* Your Stack Sidebar */}
        <div className="w-full lg:sticky lg:top-6">
          <YourStack />
        </div>
      </div>
    </section>
  );
};

export default TechSection;
