"use client";
import { useState } from "react";
import FAQ from "./faq";
import Image from "next/image";
import { HiChevronRight, HiChevronDown } from "react-icons/hi2";
import { motion } from "framer-motion";

const Download = ({ post }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const togglePost = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const [active, setActive] = useState(false);
  setTimeout(() => {
    setActive(true);
  }, 4000);

  return (
    <main className="mx-2 lg:max-w-3xl md:max-w-2xl md:mx-auto">
      <h1 className="mt-2 not-h1 text-center font-semibold">
        Download {post.acf.name}
      </h1>
      <p className="not-p text-sm text-center">Latest Version</p>
      <section className="bg-white px-3 py-1 rounded-3xl shadow my-2">
        {active ? (
          <>
            <div className="flex flex-col gap-1 my-3">
              {post.acf.file_link.map((dlfile) => (
                <>
                  <a
                    href={dlfile.link.url}
                    className="flex gap-3 border shadow-sm bg-gray-50 px-2 py-2 my-1 transition-all  hover:bg-gray-200 hover:shadow-md rounded-2xl"
                  >
                    <div>
                      <Image
                        priority
                        src={post.acf.icon}
                        alt={post.acf.name}
                        title={post.acf.name}
                        height={100}
                        width={100}
                        className="h-[3.5rem] w-[3.5rem] aspect-square rounded-xl shadow-lg"
                      />
                    </div>
                    <div className="flex flex-col gap-[0.15rem]">
                      <p className="not-p text-gray-900 hover:text-blue-500">
                        {dlfile.link.title} ({dlfile.size})
                      </p>
                      <span className="flex gap-2 items-center text-gray-600 text-xs pt-1">
                        <p className="not-p">{dlfile.version}</p>
                        <p className="not-p bg-green-500 px-2 text-white rounded-2xl uppercase">
                          {dlfile.device}
                        </p>
                        {dlfile.mod && (
                          <p className="not-p bg-orange-500 px-2 text-white rounded-2xl">
                            MOD
                          </p>
                        )}
                      </span>
                    </div>
                  </a>
                  {dlfile.details && (
                    <div
                      dangerouslySetInnerHTML={{ __html: dlfile.details }}
                      className="not-div text-sm text-gray-700 bg-amber-100 p-3 my-3 rounded-xl border border-amber-300"
                    ></div>
                  )}
                </>
              ))}

              <>
                {post.acf.old_version && (
                  <>
                    <p className="text-center">Other Version</p>
                    <div>
                      {post.acf.old_version.map((old, index) => (
                        <div key={index}>
                          <p
                            className="bg-gray-200 px-3 py-3 border border-gray-400 shadow-sm not-p mb-3 rounded-xl flex justify-between items-center"
                            onClick={() => togglePost(index)}
                            style={{ cursor: "pointer" }}
                          >
                            {old.title}
                            {expandedIndex === index ? (
                              <HiChevronDown />
                            ) : (
                              <HiChevronRight />
                            )}
                          </p>
                          {expandedIndex === index && (
                            <>
                              {old.details && (
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: old.details,
                                  }}
                                  className="not-div text-sm text-gray-700 bg-amber-100 p-3 my-3 rounded-xl border border-amber-300"
                                ></div>
                              )}
                              <div>
                                {old.files.map((file, fileIndex) => (
                                  <a
                                    key={fileIndex}
                                    href={file.links.url}
                                    className="flex border bg-gray-50 gap-3 px-2 py-2 my-2 transition-all  hover:bg-gray-100 rounded-2xl"
                                  >
                                    <div>
                                      <Image
                                        priority
                                        src={post.acf.icon}
                                        alt={post.acf.name}
                                        title={post.acf.name}
                                        height={100}
                                        width={100}
                                        className="h-[3.5rem] w-[3.5rem] aspect-square rounded-xl shadow-lg"
                                      />
                                    </div>
                                    <div className="flex flex-col gap-[0.15rem]">
                                      <p className="not-p text-gray-900 hover:text-blue-500">
                                        {post.acf.name} ({file.size})
                                      </p>
                                      <span className="flex gap-2 items-center text-gray-600 text-xs pt-1">
                                        <p className="not-p">{file.version}</p>
                                        <p className="not-p bg-green-500 px-2 text-white rounded-2xl uppercase">
                                          {file.device}
                                        </p>
                                        {file.mod && (
                                          <p className="not-p bg-orange-500 px-2 text-white rounded-2xl">
                                            MOD
                                          </p>
                                        )}
                                      </span>
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </>
            </div>
          </>
        ) : (
          <div>
            <div className="w-full h-4 mb-4 bg-gray-200 rounded-full my-6 ">
              <motion.div
                className="h-4 bg-mainlight rounded-full dark:bg-mainlight"
                style={{ width: "45%" }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 4, ease: "easeInOut" }}
              ></motion.div>
            </div>
          </div>
        )}
      </section>
      <FAQ name={post.acf.name} type={post.type} />
    </main>
  );
};
export default Download;
