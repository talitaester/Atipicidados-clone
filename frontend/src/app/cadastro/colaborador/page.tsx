"use client";
import FileInput from "@/components/FileInput";
import NavBar from "@/components/NavBar";
import SelectInput from "@/components/SelectInput";
import TextInput from "@/components/TextInput";
import { Input } from "@/components/ui/input";
import { Link } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Form, useForm } from "react-hook-form";
// import { z } from "zod"

// const formSchema = z.object({
//   username: z.string().min(2).max(50),
// })

export default function Home() {
  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     username: "",
  //   },
  // })

  // function onSubmit(values: z.infer<typeof formSchema>) {
  //   // Do something with the form values.
  //   // ✅ This will be type-safe and validated.
  //   console.log(values)
  // }

  return (
    <main className="flex flex-col min-h-screen items-center bg-[#F0F0F3]">
      <NavBar />
      <div className="flex flex-col gap-6 min-w-[700px] mx-10 mt-16">
        <h2 className="text-3xl font-extrabold">Cadastro Colaborador</h2>
        <p className="-mt-5">Descrição...</p>
        <section className="flex flex-col gap-2">
          <h3 className="ml-2">Geral</h3>
          <SelectInput options={["Masculino", "Feminino", "Intersexo", "Outro sexo", "Prefiro não dizer o sexo"]} placeholder={"Sexo"} />
          <TextInput placeholder="Gênero" />
          <SelectInput options={["Sim, possui ADI", "Não possui ADI"]} placeholder={"Possui ADI?"} />
          <TextInput placeholder="Responsável no atendimento" />
          <SelectInput options={["Sim, possui NIS", "Não possui NIS"]} placeholder={"Possui NIS?"} />
          <SelectInput options={["Sim, recebe BPC", "Não recebe BPC"]} placeholder={"Recebe BPC?"} />
          <SelectInput options={["Sim, recebe Bolsa Família", "Não recebe Bolsa Família"]} placeholder={"Recebe Bolsa Família?"} />
          <SelectInput options={["Sim, tem Passe Livre", "Não tem Passe Livre"]} placeholder={"Tem Passe Livre municipal e intermunicipal?"} />
          <FileInput placeholder="Carteira CIPTEA" />
          <TextInput placeholder="Endereço da terapia (ex.: Rua X, Bairro Y, nº10)" />
          <SelectInput options={["Mãe", "Pai", "Mãe e Pai", "Outra composição"]} placeholder={"Composição familiar"} />
        </section>

        <section className="flex flex-col gap-2">
          <h3 className="ml-2">Escola</h3>
          <TextInput placeholder="Nome da escola" />
          <TextInput placeholder="Série" />
          <TextInput placeholder="Endereço da escola" />
          <SelectInput placeholder={"Tipo"} options={["Pública", "Particular", "Outro tipo de escola"]} />
          <TextInput placeholder="Tempo de estudo (em anos)" />
          <FileInput placeholder="Relatório Escolar" />
          <TextInput placeholder="Responsável no atendimento" />
        </section>

        <div className="flex flex-row w-full justify-between mt-20 mb-10">
          <button className="botao">
            <p className="ml-2">Página anterior</p>
          </button>
          <button className="botao">
            <p className="ml-2">Próxima página</p>
          </button>
        </div>

        {/* <Input type="text" placeholder="Pergunta?" />
        <Input type="file" /> */}
      </div>

      {/* <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form> */}
    </main>
  );
}
