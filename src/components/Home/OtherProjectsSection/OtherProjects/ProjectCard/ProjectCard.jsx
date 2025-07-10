"use client";

import SvgIcon from "@/components/Shared/SvgIcon";
import { fadeInOnViewMotionProps } from "@/functions/motionConfig";
import { motion } from "framer-motion";
import s from "./ProjectCard.module.scss";

const ProjectCard = ({ data, index }) => {
  const { title, description, technologies, liveUrl, repoUrl, isFeatured } =
    data;

  return (
    <motion.article
      className={s.projectCard}
      {...fadeInOnViewMotionProps({
        delay: index * 0.1,
        duration: 0.4,
      })}
    >
      <header>
        <div className={s.projectTop}>
          <SvgIcon name="folder" />

          <div className={s.projectLinks}>
            {repoUrl && (
              <a
                href={repoUrl}
                title="GitHub Link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SvgIcon name="github" />
              </a>
            )}

            {liveUrl && (
              <a
                href={liveUrl}
                title="External Link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SvgIcon name="live" />
              </a>
            )}
          </div>
        </div>

        <h3 className={s.title}>
          <a href={liveUrl || "#"} target="_blank" rel="noopener noreferrer">
            {title}
            {isFeatured && <span className={s.featured}>Featured</span>}
          </a>
        </h3>

        <p className={s.description}>{description}</p>
      </header>

      <footer>
        <ul className={s.techList}>
          {technologies.map((tech, index) => (
            <li key={`${index}-${tech}`} className={s.tech}>
              {tech}
            </li>
          ))}
        </ul>
      </footer>
    </motion.article>
  );
};

export default ProjectCard;
