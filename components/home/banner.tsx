import ArrowLink from "~/icons/arrow-link.svg";

const Banner = () => {
  return (
    <>
      <div className="wrapper text-black bg-primary flex">
        <a
          className="py-2 text-lg marquee flex"
          href="https://zmartup.com"
          target="_blank"
          rel="noreferrer"
        >
          <span className="sr-only">Go to crowd Investing Page in new Tab</span>
          <p aria-hidden="true">
            <ArrowLink aria-hidden className="mx-6 h-6" />
            FINANZIERUNGSRUNDE IST AKTIV
            <ArrowLink aria-hidden className="mx-6 h-6" />
            SICHERE DIR DEINEN ANTEIL
            <ArrowLink aria-hidden className="mx-6 h-6" />
            INVESTIERE JETZT
            <ArrowLink aria-hidden className="mx-6 h-6" />
            FINANZIERUNGSRUNDE IST AKTIV
            <ArrowLink aria-hidden className="mx-6 h-6" />
            SICHERE DIR DEINEN ANTEIL
          </p>
          <p aria-hidden="true">
            <ArrowLink aria-hidden className="mx-6 h-6" />
            FINANZIERUNGSRUNDE IST AKTIV
            <ArrowLink aria-hidden className="mx-6 h-6" />
            SICHERE DIR DEINEN ANTEIL
            <ArrowLink aria-hidden className="mx-6 h-6" />
            INVESTIERE JETZT
            <ArrowLink aria-hidden className="mx-6 h-6" />
            FINANZIERUNGSRUNDE IST AKTIV
            <ArrowLink aria-hidden className="mx-6 h-6" />
            SICHERE DIR DEINEN ANTEIL
          </p>
        </a>
      </div>
      <style jsx>
        {`
          @media (prefers-reduced-motion) {
            .marquee {
              animation: none;
            }
          }

          .wrapper {
            max-width: 100%;
            overflow: hidden;
          }

          .marquee {
            white-space: nowrap;
            animation: marquee 10s linear infinite;
            display: flex;
            flex-direction: row;
          }

          .marquee p {
            display: flex;
            flex-direction: row;
            align-items: center;
          }

          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </>
  );
};

export default Banner;
