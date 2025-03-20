import Image from "next/image";
import PageSection from "@/components/pageSection";

export default function Home(){

  return(

    <main className="home">
      <PageSection body="This is the body of this component"/>
      <PageSection body="The big brown fox jumped over the lazy dogs"/>
      <PageSection body="lorem ipsum dolor et"/>
    </main>

  )

}