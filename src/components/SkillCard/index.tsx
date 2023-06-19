"use client";

import { SkillInfo } from "../../helpers/types";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { hideScrollbar, showScrollbar } from "../../utils/scrollbar";

type Props = {
  data: SkillInfo;
};

export default function SkillCard(props: Props) {
  // Destructuring assignment
  const { iconPath, name, description } = props.data;

  const id = useId();

  const [isDescriptionVisible, setDescriptionVisible] = useState<boolean>(false);

  function setIconScale(num: number) {
    const cardImage = document.getElementById(id) as HTMLImageElement;
    cardImage.style.transform = `scale(${num})`;
  }

  return (
    <>
      <div className="w-[180px] h-[220px] p-2">
        <div
          className="w-full h-full flex flex-col cursor-pointer bg-gradient-to-b from-green-500 to-green-800 rounded-md"
          onClick={() => {
            setDescriptionVisible(!isDescriptionVisible);
          }}
          onMouseLeave={() => setIconScale(1)}
          onMouseEnter={() => setIconScale(1.1)}
        >
          <div className="flex flex-1 justify-center items-center">
            <Image
              className="transition-transform ease-in-out duration-500"
              id={id}
              src={iconPath}
              width={80}
              height={80}
              alt="Skill logo"
            />
          </div>
          <h3 className="text-white text-center pb-3 tracking-tight">{name}</h3>
        </div>
      </div>

      <DescriptionModal
        showDescription={isDescriptionVisible}
        description={description}
        onClose={() => setDescriptionVisible(false)}
      />
    </>
  );
}

type DescriptionModalPros = {
  showDescription: boolean;
  description: string;
  onClose?: () => void;
};

function DescriptionModal(props: DescriptionModalPros): JSX.Element {
  const { showDescription, description, onClose } = props;

  const id = useId();
  const [digits, setDigits] = useState<string>(String());
  const [shouldStartDigitAnim, setShouldStartDigitAnim] = useState<boolean>(false);

  let timeoutDigitsSpeed: NodeJS.Timeout;

  function closeModal() {
    const decriptionModalElement = document.getElementById(id);
    if (!decriptionModalElement) return;

    decriptionModalElement.style.opacity = "0";

    setTimeout(() => {
      decriptionModalElement.style.display = "none";
      showScrollbar();
      setShouldStartDigitAnim(false);
      if (timeoutDigitsSpeed) clearTimeout(timeoutDigitsSpeed);
      if (onClose) onClose();
    }, 500);
  }

  function openModal() {
    hideScrollbar();

    const decriptionModalElement = document.getElementById(id);
    if (!decriptionModalElement) return;

    decriptionModalElement.style.display = "flex";

    setTimeout(() => {
      decriptionModalElement.style.opacity = "1";
      setShouldStartDigitAnim(true);
    }, 128);
  }

  function handleEscKey(event: KeyboardEvent) {
    if (event.code === "Escape") closeModal();
  }

  useEffect(() => {
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  useEffect(() => {
    if (showDescription) openModal();
  }, [showDescription, id]);

  useEffect(() => {
    const digitsSpeed = 50;

    if (shouldStartDigitAnim && digits.length < description.length) {
      timeoutDigitsSpeed = setTimeout(() => {
        setDigits(description.substring(0, digits.length + 1));
      }, digitsSpeed);
    }

    if (!shouldStartDigitAnim && digits.length) {
      setDigits(String());
    }
  }, [digits, description, shouldStartDigitAnim]);

  return (
    <div
      className="fixed top-0 right-0 bottom-0 left-0 hidden opacity-0 bg-green-400/75 flex-col justify-center items-center transition-all duration-500 ease-linear z-50"
      id={id}
    >
      <Image
        src={"/static/images/svg/logo.svg"}
        width={60}
        height={60}
        alt={"Logo"}
      />

      <div className="w-full max-w-[480px] p-4">
        <p className="text-white">
          {digits}
          <span className="animate-blink"> ▋</span>
        </p>
      </div>

      <div
        className="absolute top-2 right-2 cursor-pointer text-white"
        onClick={() => closeModal()}
      >
        <h4>X</h4>
      </div>

      <div className="absolute bottom-2 w-full children-center">
        <p className="text-white py-1 px-2 bg-white/30 rounded">
          press <strong>ESC</strong> key to close
        </p>
      </div>
    </div>
  );
}
