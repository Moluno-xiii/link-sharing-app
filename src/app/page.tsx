import Image from "next/image";

export default function Home() {
  return (
    <main className="text-dark-gray m-10 leading-[150%] max-w-[311px] mx-auto">
      <header className="flex flex-row gap-x-2">
        <Image
          src="/logo.svg"
          width={33.33}
          height={33.33}
          alt="devlinks logo"
        />
        <Image
          src="/devlinks.svg"
          width={135}
          height={26.25}
          alt="devlinks logo"
        />
      </header>

      <section className="flex flex-col gap-y-2 mt-16 mb-8">
        <span className="font-bold text-2xl">Login</span>
        <span className="text-grey text-base">
          Add your details below to get back into the app
        </span>
      </section>

      <form action="" className="flex flex-col gap-y-6">
        <div className="flex flex-col gap-y-1">
          <label className="text-xs" htmlFor="email">
            Email address
          </label>
          <div className="relative">
            <input
              className="border rounded-lg h-[48px] pl-7 pr-3 w-[311px] placeholder-dark-gray placeholder-opacity-50 border-lightGrey"
              type="text"
              id="email"
              placeholder="e.g. alex@email.com"
            />
            <Image
              src="/email-logo.svg"
              width={13}
              height={10}
              className="absolute top-5 left-2"
              alt="email logo"
            />
          </div>
        </div>

        <div className="flex flex-col gap-y-1">
          <label className="text-xs" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              className="border placeholder-dark-gray placeholder-opacity-50 pr-3 pl-7 rounded-lg h-[48px] w-[311px] border-lightGrey"
              type="text"
              id="password"
              placeholder="Enter your password"
            />
            <Image
              src="/password-logo.svg"
              width={13}
              height={10}
              className="absolute top-4 left-2"
              alt="password logo"
            />
          </div>
        </div>

        <button className="bg-primary font-semibold text-base capitalize text-white h-[46px] rounded-lg">
          login
        </button>
      </form>

      <div className="flex flex-col justify-center items-center mt-6">
        <span>{"Don't"} have an account?</span>
        <a href="" className="text-primary">
          Create account
        </a>
      </div>
    </main>
  );
}
