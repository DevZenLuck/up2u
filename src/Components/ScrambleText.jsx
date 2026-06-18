import React, { useEffect, useState } from "react";

const ScrambleText = ({ text, className, trigger }) => {
  const [output, setOutput] = useState("");

  useEffect(() => {
    if (!trigger) return;

    const theLetters = "abcdefghijklmnopqrstuvwxyz#%&^+=-1234567890";
    const speed = 15;
    const increment = 8;

    let si = 0;
    let stri = 0;
    let block = "";
    let fixed = "";
    const clen = text.length;
    let i = clen * increment + 1;

    const rustle = () => {
      const timer = setTimeout(() => {
        if (--i) rustle();
        nextFrame();
        si++;
      }, speed);

      const nextFrame = () => {
        for (let j = 0; j < clen - stri; j++) {
          const num = Math.floor(theLetters.length * Math.random());
          const letter = theLetters.charAt(num);
          block += letter;
        }

        if (si === increment - 1) stri++;
        if (si === increment) {
          fixed += text.charAt(stri - 1);
          si = 0;
        }

        setOutput(fixed + block);
        block = "";
      };
    };

    rustle();
  }, [trigger, text]);

  return <h1 className={className}>{output}</h1>;
};

export default ScrambleText;
