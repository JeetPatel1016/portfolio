"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import Link from "next/link";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: theme === "light" ? "#f3f4f6" : "#1d2432",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #f3f4f6"
                    : "0.4rem solid #1d2432",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(8px)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize text-xl">{item.title}</h3>
              <Link
                href={item.link}
                className="font-normal text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-gray-200 !mt-0"
              >
                {item.location}
              </Link>
              <ul className="!mt-6 !font-normal text-gray-700 dark:text-white/75 list-disc px-4">
                {item.description.map((description, index) => (
                  <li key={index} className="mb-2">
                    {description}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
