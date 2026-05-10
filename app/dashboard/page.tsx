"use client";

import { Progress } from "@/components/ui/progress";
import { useState } from "react";

const data = [
  { label: "Learn Complete Sabre GDS", value: 70 },
  { label: "Become Aviation Expert", value: 40 },
  { label: "Learn Complete Sabre GDS", value: 50 },
];

export default function Dashboard() {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? data : data.slice(0, 2);

  return (
    <div>
      <h3 className="text-2xl font-bold">
        Welcome Again{" "}
        <span style={{ color: "var(--primary-color)" }}>Taiatul Islam</span>
      </h3>

      <div className="mt-5 py-5">
        <h3 className="text-lg font-semibold mb-3">Your Learning</h3>

        <div className="flex flex-col gap-7">
          {visibleItems?.map((item, index) => (
            <div key={index}>
              <p className="text-[#716A6A] mb-2">{item?.label}</p>
              <Progress
                value={item?.value}
                className="bg-gray-200 [&>div]:bg-primary"
              />
            </div>
          ))}
        </div>

        {data.length > 2 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-(--text-gray) text-sm font-medium underline underline-offset-4 mt-5"
          >
            {showAll ? "Click to Show Less" : "Click to Show More"}
          </button>
        )}
      </div>
    </div>
  );
}
