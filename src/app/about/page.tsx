import Image from "next/image";

const aboutMe = `
Sou uma pessoa introvertida e espontânea, sem jargões ou segundas intenções. Mesmo me retraindo perante as pessoas, não deixo isso me limitar socialmente por muito tempo, e no cenário de trabalho faço questão de não deixar isso me prejudicar.
<br/><br/>
Minha paixão é desenvolver novas "coisas" e contribuir em projetos interessantes. Desde 2015, tenho um grande interesse pelo desenvolvimento de software e procuro sempre evoluir como profissional.
<br/><br/>
Essa paixão teve um gatilho, um amigo do ensino fundamental. Para essa virada de chave acontecer comigo é graça a essa pessoal, que desejo muito sucesso e que alias já possui muito sucesso.
`;

export default function AboutMe(): JSX.Element {
  return (
    <div className="min-h-screen flex flex-row flex-wrap justify-center items-center pt-20 max-w-[900px] m-auto">
      <div className="mx-3 max-w-md md:max-w-[40%]">
        <Image
          className="rounded-xl"
          src="https://firebasestorage.googleapis.com/v0/b/myself-dg.appspot.com/o/my-website%2FIMG_20230127_220509.jpg?alt=media&token=51dad29d-f830-445d-8575-42c0d74160f3"
          width={250}
          height={330}
          style={{
            objectFit: "cover",
          }}
          alt="Me"
        />
      </div>
      <div className="mx-3 my-8 max-w-md md:max-w-[60%]">
        <h1 className="font-bold text-xl font-poppins ps-2 border-s-4 border-green-700 text-green-600">
          Olá, meu nome é <br />
          David Gaspar
        </h1>
        <p
          className="my-2 font-hind-siliguri"
          dangerouslySetInnerHTML={{
            __html: aboutMe,
          }}
        />
      </div>
    </div>
  );
}
