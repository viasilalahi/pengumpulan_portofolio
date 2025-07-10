"use client";

import SvgIcon from "@/components/Shared/SvgIcon";
import { fadeInOnViewMotionProps } from "@/functions/motionConfig";
import { motion } from "framer-motion";
import Image from "next/image";
import s from "./FeaturedProject.module.scss";

const FeaturedProject = ({ data, shouldReverse }) => {
  const { title, description, technologies, repoUrl, liveUrl, previewImg } =
    data;

  return (
    <motion.div
      className={s.featuredProject}
      dir={shouldReverse ? "rtl" : "ltr"}
      {...fadeInOnViewMotionProps({
        visibilityThreshold: 0.1,
        duration: 0.5,
        delay: 0.1,
        initialY: 40,
      })}
    >
      <div className={s.content}>
        <div className={s.projectHeader}>
          <span className={s.featuredText}>Featured Project</span>
          <h3 className={s.title}>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h3>
        </div>

        <p className={s.description}>{description}</p>

        <ul className={s.techList}>
          {technologies.map((tech, index) => (
            <li key={`${index}-${tech}`}>{tech}</li>
          ))}
        </ul>

        <div className={s.projectLinks}>
          <a href={repoUrl} target="_blank" rel="noopener noreferrer">
            <SvgIcon name="github" />
            Source
          </a>
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            <SvgIcon name="live" />
            Live
          </a>
        </div>
      </div>

      <a
        className={s.previewImg}
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        title={`View ${title}`}
      >
        <Image src={previewImg} alt={title} width={628} height={435} />
      </a>
    </motion.div>
  );
};

export default FeaturedProject;
