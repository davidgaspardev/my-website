import Image from "next/image";

const aboutMe = `
Sou uma pessoa introvertida e espontânea, sem jargões ou segundas intenções. Não tenho problema em pensar de maneira diferente com base em novas evidências e acredito no poder do trabalho em equipe para resolver problemas complexos.
<br/><br/>
Minha paixão está em desenvolver novas "coisas" e contribuir para projetos interessantes. Desde 2015, venho cultivando um profundo interesse pelo desenvolvimento de software, sempre em busca de crescimento e evolução como profissional.
<br/><br/>
A fagulha que acendeu essa paixão veio de um amigo do ensino fundamental. É a essa pessoa que devo minha transformação e a quem desejo todo o sucesso.
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
