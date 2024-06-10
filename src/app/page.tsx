import { post } from "@/api";
import Link from "next/link";

export default function Home() {
  const submimt = async () => {
    const response = await PostUser();

    console.log(response);
  };

  const PostUser = async () => {
    try {
      const response = await post(`/auth/signup`, {
        name: "umin",
        email: "umin@gmail",
      });
      return response;
    } catch (error) {
      console.error(error);
      throw new Error("error");
    }
  };

  return (
    <Link href="/login">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        로그인
      </button>
    </Link>
  );
}
