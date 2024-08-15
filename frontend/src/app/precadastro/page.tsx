import Form from "@/components/Form/Form";
import logo from "../../../public/images/logo.png"
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Image
          src={logo}
          alt="logo atipicidades"
          width={60} 
          className="ml-[57px] mt-5"/>
            

      <div className="mx-[147px] mt-[44px] flex flex-col gap-[37px]">
        <h2>Pré-cadastro</h2>

        <Form />
      </div>
    </main>
  );
}
