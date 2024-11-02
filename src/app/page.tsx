import {
  ArrowRightIcon,
  ComponentIcon,
  FullscreenIcon,
  MonitorIcon,
  PlayIcon,
  SmartphoneIcon,
  TabletIcon,
  TangentIcon,
} from "lucide-react";
import Image from "next/image";

import graphicImage from "../../public/graphic.png";

export default function Home() {
  return (
    <>
      <div className="mx-16 border-x p-8">
        <div className="flex gap-1 items-end">
          <div className="aspect-square w-4 mb-px bg-blue-600" />
          <span className="text-xl font-bold leading-none">21</span>
          <span className="opacity-50 leading-none">Studio</span>
        </div>
      </div>
      <div className="border-t px-16">
        <div className="border-x grid grid-cols-3">
          <div className="p-8 border-r flex flex-col gap-4 bg-violet-100 tablet:bg-emerald-100 desktop:bg-orange-100">
            <div className="hidden desktop:flex py-2 px-4 items-center gap-2 bg-neutral-900 w-fit rounded-full ring-[0.25rem] ring-neutral-900/10">
              <MonitorIcon className="size-4 text-neutral-100" />
              <span className="text-neutral-300 text-sm font-medium">
                Desktop
              </span>
            </div>

            <div className="hidden tablet:flex desktop:hidden py-2 px-4 items-center gap-2 bg-neutral-900 w-fit rounded-full ring-[0.25rem] ring-neutral-900/10">
              <TabletIcon className="size-4 text-neutral-100" />
              <span className="text-neutral-300 text-sm font-medium">
                Tablet
              </span>
            </div>

            <div className="tablet:hidden flex py-2 px-4 items-center gap-2 bg-neutral-900 w-fit rounded-full ring-[0.25rem] ring-neutral-900/10">
              <SmartphoneIcon className="size-4 text-neutral-100" />
              <span className="text-neutral-300 text-sm font-medium">
                Mobile
              </span>
            </div>

            <h1 className="text-3xl font-bold mt-auto">Fluid responsive</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore,
              quasi unde harum consequuntur explicabo, blanditiis tempora dolor
              recusandae beatae eum nihil quam earum sapiente error, eius
              perspiciatis obcaecati autem rem.
            </p>
          </div>
          <div className="p-8 col-span-2 group hover:bg-neutral-100 saturate-50 hover:saturate-100 transition-all cursor-pointer">
            <div className="relative bg-neutral-200 aspect-video grid place-content-center">
              <Image
                src={graphicImage}
                fill
                alt=""
                className="object-cover rounded-xl"
                placeholder="blur"
              />
              <div className="p-8 rounded-full bg-white relative group-hover:bg-black group-hover:text-white">
                <PlayIcon className="w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t px-16">
        <div className="border-x grid grid-cols-3">
          <div className="p-8 border-r hover:bg-neutral-100 cursor-pointer">
            <div className="flex gap-4 items-center">
              <FullscreenIcon className="w-6 shrink-0" />
              <h3 className="text-xl font-medium">
                Get control over your layouts.
              </h3>
            </div>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis illo debitis atque similique nesciunt, eaque ipsam
              esse, iste ex, pariatur nemo incidunt explicabo eos rem ab
              perferendis vel delectus non!
            </p>
            <div className="mt-8 flex gap-3 items-center">
              <span className="font-medium">Learn more</span>
              <ArrowRightIcon className="w-6 shrink-0" />
            </div>
          </div>
          <div className="p-8 border-r hover:bg-neutral-100 cursor-pointer">
            <div className="flex gap-4 items-center">
              <ComponentIcon className="w-6 shrink-0" />
              <h3 className="text-xl font-medium">
                Get control over your layouts.
              </h3>
            </div>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis illo debitis atque similique nesciunt, eaque ipsam
              esse, iste ex, pariatur nemo incidunt explicabo eos rem ab
              perferendis vel delectus non!
            </p>
            <div className="mt-8 flex gap-3 items-center">
              <span className="font-medium">Learn more</span>
              <ArrowRightIcon className="w-6 shrink-0" />
            </div>
          </div>
          <div className="p-8 hover:bg-neutral-100 cursor-pointer">
            <div className="flex gap-4 items-center">
              <TangentIcon className="w-6 shrink-0" />
              <h3 className="text-xl font-medium">
                Get control over your layouts.
              </h3>
            </div>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis illo debitis atque similique nesciunt, eaque ipsam
              esse, iste ex, pariatur nemo incidunt explicabo eos rem ab
              perferendis vel delectus non!
            </p>
            <div className="mt-8 flex gap-3 items-center">
              <span className="font-medium">Learn more</span>
              <ArrowRightIcon className="w-6 shrink-0" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t px-16">
        <div className="border-x p-8">
          <span>All rights reserved.</span>
        </div>
      </div>
    </>
  );
}
