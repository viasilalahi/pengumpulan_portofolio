import { fixedItemsMotionProps } from "@/functions/motionConfig";
import { motion } from "motion/react";
import s from "./FixedEmail.module.scss";

const FixedEmail = () => {
  return (
    <motion.div className={s.fixedEmail} {...fixedItemsMotionProps()}>
      <a href="mailto:moamalalaapro1@gmail.com" title="Send me an email">
        viaoktarianasilalahi@gmail.com
      </a>
    </motion.div>
  );
};

export default FixedEmail;
