import Image from "next/image";
import replace from "@/app/images/replacement.jpg"
import instagram from "@/app/images/instagram.png"
import discord from "@/app/images/discord.png"
import facebook from "@/app/images/facebook.png"
import linkedin from "@/app/images/linkedin.png"
import telegram from "@/app/images/telegram.png"
import wa_channel from "@/app/images/wa-channel.png"
import whatsapp from "@/app/images/whatsapp.png"
import youtube from "@/app/images/youtube.png"
import harsh from "@/app/images/harsh.png"
import amna from "@/app/images/amna.png"
import hamza from "@/app/images/hamza.png"
import About from "@/app/components/About";
import Link from "next/link";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
    <div className="w-screen h-screen flex flex-col">
  {/* Hero start */}
  <section className="text-gray-400 bg-xounity-blue body-font mt-10">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div
        className="side lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 delay-200"
      >
        <Image
          className="object-cover object-center rounded"
          src={replace}
          alt="replace"
        />
        {/* https://dummyimage.com/720x600 */}
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1
          className="reveal title-font sm:text-4xl text-3xl mb-4 font-medium text-white delay-75"
        >
          Diverse Minds, One Vision
        </h1>
        <p
          className="reveal mb-8 leading-relaxed delay-100"
        >
          Join us at Xounity, where diverse minds foster innovation and unite
          under one vision. Together, we're creating a zone for an inclusive
          future. #Xounity
        </p>
        <div
          className="reveal flex justify-center delay-100"
        >
          {/* add socialmedia circle logos link with links here */}
          <div className="social-icons flex items-center justify-center gap-4 flex-wrap">
            <Link href="https://www.instagram.com/xounity1" target="_blank">
              <Image
                src={instagram}
                alt="instagram"
                id="s1"
                className="social-icon w-10 object-cover"
              />
            </Link>
            <Link href="https://www.linkedin.com/company/xounity" target="_blank">
              <Image
                src={linkedin}
                alt="linkedin"
                id="s2"
                className="social-icon w-10 object-cover"
              />
            </Link>
            <Link href="https://www.facebook.com/xounity1" target="_blank">
              <Image
                src={facebook}
                alt="facebook"
                id="s3"
                className="social-icon w-10 object-cover"
              />
            </Link>
            <Link href="https://discord.com/invite/V9mJaQUAu4" target="_blank">
              <Image
                src={discord}
                alt="discord"
                id="s4"
                className="social-icon w-10 object-cover"
              />
            </Link>
            <Link href="https://www.youtube.com/@xounity1" target="_blank">
              <Image
                src={youtube}
                alt="youtube"
                id="s5"
                className="social-icon w-10 object-cover"
              />
            </Link>
            <Link href="https://t.me/xounity1" target="_blank">
              <Image
                src={telegram}
                alt="telegram"
                id="s6"
                className="social-icon w-10 object-cover"
              />
            </Link>
            <Link
              href="https://chat.whatsapp.com/Dglys3PUmK3Ktt2OOyKdY6"
              target="_blank"
            >
              <Image
                src={whatsapp}
                alt="whatsapp commmunity"
                id="s7"
                className="social-icon w-10 object-cover"
              />
            </Link>
            <Link
              href="https://whatsapp.com/channel/0029VaYhJmD9cDDVJLuqao0Y"
              target="_blank"
            >
              <Image
                src={wa_channel}
                alt="whatsapp-channel"
                id="s8"
                className="social-icon w-10 object-cover"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
    {/* Hero end */}
    <hr />
    {/* Upcoming events (part of home) */}
    <section>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="reveal text-3xl font-medium title-font mb-4 text-white">
            Recent Events
          </h1>
          <p
            className="reveal lg:w-2/3 mx-auto leading-relaxed text-base delay-100"
          >
            Uncover the future at our recent events. Experience the intersection
            of innovation and diversity as we explore groundbreaking ideas and
            foster inclusive communities.
          </p>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {/* Event 1 */}
            <div
              className="p-4 md:w-1/3 side delay-100"
            >
              <Link
                className="rounded-lg overflow-hidden drop-shadow-lg"
                href="https://www.youtube.com/watch?v=vpBBQ9OX2ho"
                target="_blank"
              >
                <Image
                  alt="event"
                  className="object-cover object-center h-64 w-full cursor-pointer hover:scale-110"
                  src={harsh}
                  style={{ transition: "all 0.5s" }}
                />
              </Link>
              <h2 className="text-xl font-medium title-font text-white mt-5">
                How To Pursue Your Career in UI/UX
              </h2>
              <p className="text-base font-normal leading-relaxed mt-2">
                By Harsh Advani
              </p>
              <Link
                href="https://www.youtube.com/watch?v=vpBBQ9OX2ho"
                target="_blank"
              >
                <button className="text-xounity-orange inline-flex items-center mt-3 hover:text-orange-600 duration-300 ease-in-out font-medium">
                  Watch Now
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </Link>
            </div>
            {/* Event 2 */}
            <div
              className="p-4 md:w-1/3 side delay-150"
            >
              <Link
                className="rounded-lg overflow-hidden drop-shadow-lg"
                href="https://youtu.be/aV5YVTzqsoQ?si=8CCx2tRrZ2AKd2JB"
                target="_blank"
              >
                <Image
                  alt="event"
                  className="object-cover object-center h-64 w-full cursor-pointer hover:scale-110"
                  src={amna}
                  style={{ transition: "all 0.5s" }}
                />
              </Link>
              <h2 className="text-xl font-medium title-font text-white mt-5">
                Unlocking Data Science
              </h2>
              <p className="text-base font-normal leading-relaxed mt-2">
                By Amna Shahzad
              </p>
              <Link
                href="https://youtu.be/aV5YVTzqsoQ?si=8CCx2tRrZ2AKd2JB"
                target="_blank"
              >
                <button className="text-xounity-orange inline-flex items-center mt-3 hover:text-orange-600 duration-300 ease-in-out font-medium">
                  Watch Now
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </Link>
            </div>
            {/* Event 3 */}
            <div
              className="p-4 md:w-1/3 side delay-100"
            >
              <Link
                className="rounded-lg overflow-hidden drop-shadow-lg"
                href="https://www.youtube.com/watch?v=YuT4maa08xg"
                target="_blank"
              >
                <Image
                  alt="event"
                  className="object-cover object-center h-64 w-full cursor-pointer hover:scale-110"
                  src={hamza}
                  style={{ transition: "all 0.5s" }}
                />
              </Link>
              <h2 className="text-xl font-medium title-font text-white mt-5">
                Career Building While Studying
              </h2>
              <p className="text-base leading-relaxed mt-2">
                By Hamza Farooqui
              </p>
              <Link
                href="https://www.youtube.com/watch?v=YuT4maa08xg"
                className="text-xounity-orange inline-flex items-center mt-3"
              >
                <button className="text-xounity-orange inline-flex items-center mt-3 hover:text-orange-600 duration-300 ease-in-out font-medium">
                  Watch Now
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
          <Link href="/Events" className="flex justify-center">
            <button
              className="h-10 mr-2 inline-flex items-center border-solid border-xounity-orange border-2 text-rose-50 focus:outline-none hover:bg-xounity-orange py-1 px-3 rounded text-base mt-8 md:mt-4 delay-100"
            >
              More Events
            </button>
          </Link>
        </div>
      </div>
    </section>
  </section>
  {/* home section end */}
  <hr />
  <About />
  <hr />
  <Contact />
  </div>
    </>
  );
}
