import Image from "next/image";
import { Button } from "../components/Button/Button";
import { Input } from "../components/Input/Input";
import { Textarea } from "../components/Textarea/Textarea";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-full w-full bg-lightBlue flex justify-center items-center absolute z-40 py-8 top-0">
      <section className="h-5/6 w-5/6 bg-white md:p-16 p-8 relative">
        <h3 className="md:text-6xl text-4xl">Contanos qué <br />tenes en mente</h3>
        <p>Rellene el formulario o envíenos un correo electrónico a tomas@tdm.ar</p>
        <div className="flex w-full md:gap-y-8 gap-y-4 md:my-16 my-8 flex-wrap justify-between">
          <Input text={"Nombre y Apellido"} placeholder={"..."} value={""} setValue={function (value: string): void {
            throw new Error; } } type={""} />
          <Input text={"Correo Electrónico"} placeholder={"..."} value={""} setValue={function (value: string): void {
            throw new Error; } } type={""} />
           <Input text={"Nombre de la Empresa"} placeholder={"..."} value={""} setValue={function (value: string): void {
            throw new Error; } } type={""} />
           <Input text={"Mi presupuesto ronda"} placeholder={"..."} value={""} setValue={function (value: string): void {
            throw new Error; } } type={"number"} />
            <Textarea text={"Contanos sobre tu proyecto o idea"} placeholder={"..."} value={""} setValue={function (value: string): void {
            throw new Error;
          } }/>
        </div>
        <div className="flex w-full justify-between">
            <Link href={"/"}>
            <Button>Atras</Button>
            </Link>
            <Button type="tertiary">Enviar</Button>
          </div>
      </section>
    </main>
  );
}
