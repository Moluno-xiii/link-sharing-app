"use client";
import Image from "next/image";

import Button from "@/components/UI/Button";

const HomePage: React.FC = () => {
  return (
    <div className="mx-auto mt-4 flex w-[343px] flex-col items-center justify-center rounded-xl bg-white px-2 py-4">
      <section className="flex flex-col items-center justify-center gap-y-2">
        <p className="text-2xl font-bold">Customize your links</p>
        <span className="text-grey mx-auto mb-2 w-[295px] text-base">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </span>
        <Button variant="secondary" text="+ Add new link" />
      </section>

      <section className="my-3 flex flex-col items-center border-b border-lightGrey bg-lightGrey p-5 text-black">
        <Image
          src="/get-started-mobile.svg"
          alt="phone"
          height={80}
          width={124.77}
        />
        <p className="text-2xl font-bold">{"Let's"} get you started</p>
        <span className="text-grey text-base">
          Use the “Add new link” button to get started. Once you have more than
          one link, you can reorder and edit them. We’re here to help you share
          your profiles with everyone!
        </span>
      </section>

      <Button variant="primary" text="save" disabled={true} />
    </div>
  );
};

export default HomePage;
