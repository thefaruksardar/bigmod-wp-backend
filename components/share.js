"use client";
import { useEffect, useRef, useState } from "react";
import { FiCheck, FiCopy, FiShare2, FiX } from "react-icons/fi";
import {
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
  FacebookShareButton,
  FacebookIcon,
  TumblrShareButton,
  TumblrIcon,
  RedditShareButton,
  RedditIcon,
} from "next-share";
import { motion, AnimatePresence } from "framer-motion";
import useOutsideClick from "@/hooks/useOutsideClick";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -100,
  },
};

const Share = ({ url, title, hashtag }) => {
  const shareref = useRef(null);
  const [toggle, setToggle] = useState(false);
  const [copyToggle, setCopyToggle] = useState(true);

  const copybtn = () => {
    setCopyToggle(!copyToggle);

    setTimeout(() => {
      setCopyToggle(false); // Reset the toggle after 3 seconds
      // clearTimeout(copyTimeout); // Clear the timeout
    }, 3000);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (toggle) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }
  }, []);

  let hookToggle = () => {
    setToggle(!toggle);
  };
  useOutsideClick(shareref, hookToggle);

  return (
    <>
      {toggle ? (
        <>
          <AnimatePresence>
            {toggle && (
              <div className="fixed top-0 left-0 bg-gray-400 h-screen w-screen opacity-30" />
            )}
            <motion.div
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              exit="exit"
              className="fixed bottom-24 p-3 right-6 "
              ref={shareref}
            >
              <div className="flex flex-col justify-center gap-2 items-center">
                <button
                  className={`text-xl p-2 rounded-full border border-gray-400 bg-white ${
                    copyToggle ? "text-[#3d3d3d]" : "text-green border"
                  } `}
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `${process.env.NEXT_PUBLIC_SITE}/${url ? url : ""}`
                    );
                    copybtn();
                  }}
                  width={40}
                >
                  {copyToggle ? <FiCopy /> : <FiCheck />}
                </button>
                <WhatsappShareButton
                  url={`${process.env.NEXT_PUBLIC_SITE}/${url ? url : ""}`}
                  title={
                    title
                      ? title
                      : "Download MOD Games and Apps FREE (BIGMOD.io)"
                  }
                  separator=":: "
                >
                  <WhatsappIcon size={40} round />
                </WhatsappShareButton>
                <TelegramShareButton
                  url={`${process.env.NEXT_PUBLIC_SITE}/${url ? url : ""}`}
                  title={
                    title
                      ? title
                      : "Download MOD Games and Apps FREE (BIGMOD.io)"
                  }
                >
                  <TelegramIcon size={40} round />
                </TelegramShareButton>
                <FacebookShareButton
                  url={`${process.env.NEXT_PUBLIC_SITE}/${url ? url : ""}`}
                  title={
                    title
                      ? title
                      : "Download MOD Games and Apps FREE (BIGMOD.io)"
                  }
                  hashtag={hashtag}
                >
                  <FacebookIcon size={40} round />
                </FacebookShareButton>
                <RedditShareButton
                  url={`${process.env.NEXT_PUBLIC_SITE}/${url ? url : ""}`}
                  title={
                    title
                      ? title
                      : "Download MOD Games and Apps FREE (BIGMOD.io)"
                  }
                >
                  <RedditIcon size={40} round />
                </RedditShareButton>
                <TumblrShareButton
                  url={`${process.env.NEXT_PUBLIC_SITE}/${url ? url : ""}`}
                  title={
                    title
                      ? title
                      : "Download MOD Games and Apps FREE (BIGMOD.io)"
                  }
                >
                  <TumblrIcon size={40} round />
                </TumblrShareButton>
              </div>
            </motion.div>
          </AnimatePresence>

          <div
            onClick={(e) => setToggle(!toggle)}
            className="fixed bottom-10 p-3 right-7 rounded-full shadow-lg bg-red-400 cursor-pointer"
          >
            <FiX className="text-2xl text-white" />
          </div>
        </>
      ) : (
        <div
          onClick={(e) => setToggle(!toggle)}
          className="fixed bottom-10 p-3 right-7 rounded-full shadow-lg bg-red-400 cursor-pointer"
        >
          <FiShare2 className="text-2xl text-white" />
        </div>
      )}
    </>
  );
};
export default Share;
