import Image from "next/image";
import classes from "./selectLan.module.css";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const [selectedLang, setSelectedLang] = useState({
    code: "en",
    name: "ENG",
    flag: "/icons/us.png",
  });

  const languages = [
    { code: "en", name: "ENG", flag: "/icons/us.png" },
    { code: "fr", name: "FRA", flag: "/icons/france.png" },
  ];

  return (
    <div ref={dropdownRef} className={classes.languageDropdown}>
      <div onClick={() => setIsOpen(!isOpen)} className={classes.selectedLang}>
        <Image
          src={selectedLang.flag}
          alt={selectedLang.name}
          width={30}
          height={30}
        />
        <span>{selectedLang.name}</span>

        <Image
          src={"/icons/chevron-down.svg"}
          alt={"dropdown"}
          width={30}
          height={30}
        />
      </div>
      {isOpen && (
        <div className={classes.dropdownList}>
          {languages.map((lang) => (
            <div
              key={lang.code}
              className={classes.dropdownItem}
              onClick={() => {
                setSelectedLang(lang);
                setIsOpen(false);
              }}
            >
              <Image src={lang.flag} alt={lang.name} width={20} height={15} />
              <span>{lang.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
