import Image from "next/image";

export default function Login() {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-4 md:grid-cols-12 mt-40">
          <span className="col-span-2 col-start-2 md:col-start-6 text-3xl font-medium flex justify-center text-gray-800">
            로그인
          </span>

          <button className="col-span-4 md:col-start-5 flex py-4 bg-white hover:bg-gray-100 border border-gray-300 rounded-md shadow mt-10 px-3">
            <Image
              src="/icons/google_logo.svg"
              width={32}
              height={32}
              alt="google logo"
            />
            <span className="text-xl font-normal flex-grow text-center text-gray-700">
              구글 계정으로 로그인
            </span>
          </button>

          <div className="col-span-2 col-start-2 md:col-start-6 text-sm font-medium flex justify-center text-gray-600 mt-5">
            <span>처음이신가요?</span>&nbsp;
            <span className="font-bold underline text-gray-700">회원가입</span>
          </div>
        </div>
      </div>
    </>
  );
}
