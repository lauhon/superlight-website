import { useTranslation } from "next-i18next";

const WaitlistButton = () => {
  const { t } = useTranslation();
  const click = () => {
    const form = document.querySelector("#WaitlistForm");
    if (!form) return;

    form.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "center",
    });
    form.querySelector("input")?.focus();
  };

  return (
    <button
      onClick={click}
      className="bg-input text-white px-11 py-2 font-bold text-lg rounded-full"
    >
      {t("waitlist.button")}
    </button>
  );
};

export default WaitlistButton;
