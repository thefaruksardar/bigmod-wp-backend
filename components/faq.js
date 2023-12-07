"use client";
import React, { useState } from "react";
import { MdAdd, MdRemove } from "react-icons/md";

const FAQ = ({ name, type }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqData = [
    {
      question: `How to Download ${name} from BIGMOD.io?`,
      answer: {
        __html: `<p className="not-p">
          You can download all kinds of ${name} from BIGMOD site for
          free.
        </p>
        <p className="not-p">Follow the steps to download the PPSSPP game.</p>

        <ol className="list-decimal pl-4 text-gray-600 pb-4">
          <li>Click on the Download button.</li>
          <li>On next page wait while the link is generating.</li>
          <li>Once the Link is generated click on it.</li>
          <li>The game ROM starts downLoadingui on your device.</li>
        </ol>`,
      },
    },

    {
      question: `How to Install ${name} on Android?`,
      answer: {
        __html: `<p className="not-p">
          Once you download the ${name} ${
          type === "games" ? "game" : "app"
        } from our site you can install it on your Androi device easily fy following below steps.
        </p>
        <ol className="!list-decimal !pl-4 text-gray-600 pb-4">
          <li>
            Open file manager app on your device.
          </li>
          <li>Look for the Downloaded file.</li>
          <li>Click on the file.</li>
          <li>Now click on Install option.</li>
          <li>Wait while the game/app is installing.</li>
          <li>Once installed you can start playing the game.</li>
        </ol>`,
      },
    },
    {
      question: `New Version of ${name} Relesed?`,
      answer: {
        __html: ` <p className="not-p">
          If we miss to provde the most recent version of ${name} ${
          type === "games" ? "game" : "app"
        }, kindly <a href="/contact">send us an email</a> containing the necessary details (App Name, version).
        </p>
        <p>We will promptly work on updating the ${name} ${
          type === "games" ? "game" : "app"
        } latest version.</p>`,
      },
    },
    {
      question: "I want to request a Game/App/ROM?",
      answer: {
        __html: `<p className="not-p">
          We really care about the Games/Apps/ROMs you ask for, and we work hard to get them to you quickly.
        </p>
        <p className="not-p">
          Just send us the details (Name, version) <a href="/contact">using our email</a>.
        </p>`,
      },
    },
    {
      question: ` Is BIGMOD.io Safe?`,
      answer: {
        __html: `<p className="not-p">
          We carefully check all the Games, Apps, ROM files before giving them to users
          to make sure there are no problems with the features.
        </p>
        <p className="not-p">
          Still facing Problem?
          <a href="/contact" className="text-blue-500">
            Contact us
          </a>
        </p>`,
      },
    },
  ];

  return (
    <section className="bg-white px-3 py-[.4rem] rounded-3xl shadow my-3 post">
      {faqData.map((faq, index) => (
        <div
          onClick={() => handleClick(index)}
          key={index}
          className="bg-gray-100 py-2 px-3 rounded-3xl my-2 cursor-pointer"
        >
          <div className="flex justify-between items-center">
            <h3 className="not-h3 font-semibold m-0 ">{faq.question}</h3>
            {activeIndex === index ? (
              <span>{<MdRemove />}</span>
            ) : (
              <span>{<MdAdd />}</span>
            )}
          </div>

          {activeIndex === index && (
            <div dangerouslySetInnerHTML={faq.answer}></div>
          )}
        </div>
      ))}
    </section>
  );
};

export default FAQ;
