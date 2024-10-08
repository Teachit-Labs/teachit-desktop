import { Link } from "@remix-run/react";
import { Button } from "~/components/molecules/button";

export default function Index() {
  return (
    <div className="inset-0 bg-primary-300 h-screen w-screen flex items-center antialiased">
      <div className="flex flex-col gap-8 px-4 items-start w-full">
        <div className="bg-primary-400 px-8 py-2 inline ">Logo goes here</div>
        <h1 className="font-display tracking-wider text-5xl">
          Velkommen til Teachit{" "}
        </h1>
      </div>
      <div className="flex items-center justify-center w-full h-full">
        <div className="bg-white text-black p-10 shadow-md rounded-lg flex flex-col gap-6">
          <h2 className="text-xl mb-2">Logg inn</h2>
          <Button>Logg inn med facebook</Button>
          <Button>Logg inn med google</Button>
          <Button>Logg inn med apple</Button>
          <div className="px-24 py-4">eller logg inn med e-post</div>
          <input type="text" name="" id="" />
          <input type="text" name="" id="" />
          <Link to="#">Glemt passord?</Link>
          <Button>Logg inn</Button>
          <div>
            Trenger du en konto? <Link to="#">Registrer deg</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
