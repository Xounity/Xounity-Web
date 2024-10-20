import Image from "next/image";
import replace from "@/app/images/replacement.jpg";
import instagram from "@/app/images/instagram.png";
import discord from "@/app/images/discord.png";
import facebook from "@/app/images/facebook.png";
import linkedin from "@/app/images/linkedin.png";
import telegram from "@/app/images/telegram.png";
import wa_channel from "@/app/images/wa-channel.png";
import whatsapp from "@/app/images/whatsapp.png";
import youtube from "@/app/images/youtube.png";
import About from "@/app/components/About";
import Contact from "@/app/components/Contact";
import Event from "@/app/components/Events";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col">
        {/* Hero start */}
        <section className="text-gray-400 bg-xounity-blue body-font mt-10">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="side lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 delay-200">
              <Image
                className="object-cover object-center rounded"
                src={replace}
                alt="replace"
                width={720}
                height={600}
              />
              {/* https://dummyimage.com/720x600 */}
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="reveal title-font sm:text-4xl text-3xl mb-4 font-medium text-white delay-75">
                Diverse Minds, One Vision
              </h1>
              <p className="reveal mb-8 leading-relaxed delay-100">
                Join us at Xounity, where diverse minds foster innovation and
                unite under one vision. Together, we're creating a zone for an
                inclusive future. #Xounity
              </p>
              <div className="reveal flex justify-center delay-100">
                {/* add socialmedia circle logos link with links here */}
                <div className="social-icons flex items-center justify-center gap-4 flex-wrap">
                  <Link href="https://www.instagram.com/xounity1" target="_blank">
                    <Image
                      src={instagram}
                      alt="instagram"
                      id="s1"
                      className="social-icon w-10 object-cover"
                      width={40}
                      height={40}
                    />
                  </Link>
                  <Link href="https://www.linkedin.com/company/xounity" target="_blank">
                    <Image
                      src={linkedin}
                      alt="linkedin"
                      id="s2"
                      className="social-icon w-10 object-cover"
                      width={40}
                      height={40}
                    />
                  </Link>
                  <Link href="https://www.facebook.com/xounity1" target="_blank">
                    <Image
                      src={facebook}
                      alt="facebook"
                      id="s3"
                      className="social-icon w-10 object-cover"
                      width={40}
                      height={40}
                    />
                  </Link>
                  <Link href="https://discord.com/invite/V9mJaQUAu4" target="_blank">
                    <Image
                      src={discord}
                      alt="discord"
                      id="s4"
                      className="social-icon w-10 object-cover"
                      width={40}
                      height={40}
                    />
                  </Link>
                  <Link href="https://www.youtube.com/@xounity1" target="_blank">
                    <Image
                      src={youtube}
                      alt="youtube"
                      id="s5"
                      className="social-icon w-10 object-cover"
                      width={40}
                      height={40}
                    />
                  </Link>
                  <Link href="https://t.me/xounity1" target="_blank">
                    <Image
                      src={telegram}
                      alt="telegram"
                      id="s6"
                      className="social-icon w-10 object-cover"
                      width={40}
                      height={40}
                    />
                  </Link>
                  <Link href="https://chat.whatsapp.com/Dglys3PUmK3Ktt2OOyKdY6" target="_blank">
                    <Image
                      src={whatsapp}
                      alt="whatsapp commmunity"
                      id="s7"
                      className="social-icon w-10 object-cover"
                      width={40}
                      height={40}
                    />
                  </Link>
                  <Link href="https://whatsapp.com/channel/0029VaYhJmD9cDDVJLuqao0Y" target="_blank">
                    <Image
                      src={wa_channel}
                      alt="whatsapp-channel"
                      id="s8"
                      className="social-icon w-10 object-cover"
                      width={40}
                      height={40}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Hero end */}
        <hr />
        {/* Upcoming events (part of home) */}
        <Event />
        {/* home section end */}
        <hr />
        <About />
        <hr />
        <Contact />
      </div>
    </>
  );
}