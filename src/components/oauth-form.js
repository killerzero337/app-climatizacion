import {
  loginGoogle
} from "@/lib/actions";

function OAuthForm() {
  return (
    <form className="container flex flex-col items-center gap-4  p-3 rounded-md ">
      <div className="flex flex-row">
        <button
          formAction={loginGoogle}
          className="bg-white/90 transition duration-500 hover:bg-sky-600/50 bg-center bg-[url('/google.svg')] w-20 h-20 rounded-[50%] bg-no-repeat cursor-pointer"
        ></button>
      </div>
    </form>
  );
}

export default OAuthForm;
