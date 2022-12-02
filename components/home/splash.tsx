import { Trans } from "next-i18next";
import Image from "next/image";
import background from "~/public/images/home/background.png";
import iPhones from "~/public/images/home/iPhones.png";
import WaitlistForm from "../shared/waitlist-form";

const Splash = () => {
  return (
    <section className="relative h-full flex bg-black text-white pt-32 px-16">
      <div className="absolute overflow-hidden h-screen inset-0 bg-black">
        <Image
          src={background}
          alt=""
          className="h-full w-2/3 absolute right-0"
        />
        <div className="w-full bg-black h-64 -mt-32 blur-3xl"></div>
      </div>
      <div className="flex items-center flex-col lg:flex-row">
        <div className="relative flex flex-1 flex-col text-center lg:text-left 2xl:px-20 2xlpt-52 pt-16 px-2.5 justify-start pb-32">
          <h2 className="text-6xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-white via-gray-400  to-white">
            <Trans i18nKey="splash.headline">
              The wallet made to replace your bank.
            </Trans>
          </h2>
          <p className="text-xl text-offset mt-4">
            <Trans i18nKey="splash.subtitle">
              Send and receive money instantly. Banking compatible.
              <br />
              Zero network fees.
            </Trans>
          </p>
          <div className="mt-8">
            <WaitlistForm />
          </div>
        </div>

        <div className="flex-1 flex justify-center z-10">
          <Image
            priority
            className="mx-24"
            width={410}
            src={iPhones}
            alt="iPhone 13 with Screenshot of the Superlight App"
          />
        </div>
      </div>
    </section>
  );
};

export default Splash;
