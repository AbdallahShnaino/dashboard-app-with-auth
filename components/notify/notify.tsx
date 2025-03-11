import Image from "next/image";
export default function Notify() {
  const style = {
    backgroundColor: "#f7f8fa",
    borderRadius: "40px",
    padding: "0.8rem",
    cursor: "pointer",
  };
  return (
    <Image
      style={style}
      width={24}
      height={24}
      alt="Notification icon"
      src="/icons/notify.svg"
    />
  );
}
