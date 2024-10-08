import { Link } from "@remix-run/react";
import { button } from "~/components/molecules/button";
import { input } from "~/components/molecules/input";

export default function Index() {
  return (
    <div className="inset-0 bg-primary-300 h-screen w-screen flex items-center antialiased">
      <div className="flex flex-col gap-8 px-4 items-start w-full ml-32">
        <div className="bg-primary-400 px-8 py-2 inline ">Logo goes here</div>
        <h1 className="font-display tracking-wider text-5xl">
          Velkommen til Teachit{" "}
        </h1>
      </div>
      <div className="flex items-center justify-center w-full h-full">
        <div className="bg-white text-black p-10 shadow-md rounded-lg flex flex-col gap-6">
          <h2 className="text-xl mb-2">Logg inn</h2>
          <button className={button()}>Logg inn med facebook</button>
          <button className={button()}>Logg inn med google</button>
          <button className={button()}>Logg inn med apple</button>
          <div className="py-4 flex items-center gap-2">
            <span className="bg-neutral-200 h-[1px] w-20" />
            eller logg inn med e-post
            <span className="bg-neutral-200 h-[1px] w-20" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">E-post</label>
            <input
              className={input()}
              placeholder="bruker@epost.bo"
              type="text"
              name="email"
              id="email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Passord</label>
            <input
              className={input()}
              type="password"
              placeholder="******"
              name="password"
              id="password"
            />
          </div>
          <Link
            className="text-primary-600 underline underline-offset-2"
            to="#"
          >
            Glemt passord?
          </Link>
          <button className={button({ className: "max-w-48" })}>
            Logg inn
          </button>
          <div>
            Trenger du en konto?{" "}
            <Link
              className="text-primary-600 underline underline-offset-2"
              to="#"
            >
              Registrer deg
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
