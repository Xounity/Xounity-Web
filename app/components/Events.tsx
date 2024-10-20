import React from 'react';
import Image from 'next/image';
import harsh from "@/app/images/harsh.png";
import amna from "@/app/images/amna.png";
import hamza from "@/app/images/hamza.png";
import Link from 'next/link';

const Events = () => {
  return (
    <>
    <section className="text-gray-400 bg-xounity-blue body-font mt-10">
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
</>

  )
}

export default Events