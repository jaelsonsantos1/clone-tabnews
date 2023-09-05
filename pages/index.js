import Image from "next/image";
import my_img from "../assets/img.png";

export default function Home() {
  return (
    <div class="container">
      <h1>Lá vai uma piada dev</h1>
      <div class="box-container">
        <h2>"Contra Fatos não há argumento."</h2>
        <Image src={my_img} width={350} class="img-style" />
      </div>

      <style>{`
                .container {
                    width: 100%;
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    // gap: 20px;
                    align-items: center;
                }
                .box-container {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .img-style {
                    border: 5px solid #0D1117;
                }
            `}</style>
    </div>
  );
}

function teste() {
  console.log("Teste");
}

function teste2() {
  console.log("Teste 2");
}
