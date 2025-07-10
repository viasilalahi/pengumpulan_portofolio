"use client";

import NumberedHeading from "@/components/Shared/NumberedHeading/NumberedHeading";
import { fadeInOnViewMotionProps } from "@/functions/motionConfig";
import { motion } from "motion/react";
import s from "./AboutSection.module.scss";
import TechList from "./TechList/TechList";

const AboutSection = () => {
  return (
    <motion.section
      className={s.aboutSection}
      id="about"
      {...fadeInOnViewMotionProps({
        visibilityThreshold: 0.4,
        delay: 0.2,
      })}
    >
      <NumberedHeading title="About Me" number="01" />

      <div className={s.content}>
        <p className={s.firstParagraph}>
          Hi, I’m Via, a second-semester student who’s just starting to explore
          the world of front-end development. I’m fascinated by how websites are
          built—not just how they work, but how they look and feel to users.
          That’s why I’m also really interested in UI/UX design.
        </p>

        <p>
          My journey began recently, starting with learning the basics of HTML
          and CSS. It felt exciting to see how simple code could turn into
          something visual. Now, I’m continuing to learn more about JavaScript
          and how to create websites that are not only functional but also
          user-friendly and visually appealing.
        </p>

        <p>
          Right now, I’m still exploring and practicing, but here are a few
          technologies I’ve started learning:
        </p>
      </div>

      <TechList />
    </motion.section>
  );
};

export default AboutSection;
