import { Flex, Heading } from "@chakra-ui/react";

import {Header} from '../components/Header'
import {Banner} from '../components/Banner'
import {Caracteristicas} from "../components/Caracteristicas";
import { Separator } from "../components/Separador";
import { Slider } from "../components/Slider";


export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Caracteristicas />
      <Separator />

      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg", "3xl", "4xl"]}
      >
        Vamos nessa? <br /> Entao escolha seu continente
      </Heading>

      <Slider />
    </Flex>
  )
}
