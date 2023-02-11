import React from 'react'
import { Box, Container, Heading, Image, Stack, Text } from "@chakra-ui/react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.png"

const headingOptions = {
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    textTransform: "uppercase;",
    p: "4",
    size: "4xl"
}

export default function Home() {
    return (
        <Box>
            <Mycarousel />
            <Container maxW={"container.xl"} minH={"100vh"} p={"16"}>
                <Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={"2px solid"} m="auto">Services</Heading>

                <Stack h="full" p={"4"} alignItems={"center"} direction={["column", "row"]}>
                    <Image src={img5} h={["40", "400"]} filter={"hue-rotate(-130deg"} />

                    <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4", "16"]} textAlign={"center"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptate laboriosam numquam amet nulla hic exercitationem consequuntur obcaecati molestiae animi suscipit dolores quam cum ratione eum deserunt, dicta ipsam ab tempore! Dolores mollitia quis ab debitis corporis quos obcaecati nisi quisquam totam quia quaerat blanditiis, consequatur autem nostrum voluptatum eum, molestiae numquam eos. Repudiandae, officia!
                    </Text>
                </Stack>
            </Container>
        </Box >
    )
}

const Mycarousel = () => (
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
        <Box w="full" h={"100vh"}>
            <Image src={img1} h={"full"} w={"full"} objectFit={"cover"} />
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
                Watch The Future
            </Heading>
        </Box>
        <Box w="full" h={"100vh"}>
            <Image src={img2} h={"full"} w={"full"} objectFit={"cover"} />
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
                Gaming is Future
            </Heading>
        </Box>
        <Box w="full" h={"100vh"}>
            <Image src={img3} h={"full"} w={"full"} objectFit={"cover"} />
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
                Play The Game
            </Heading>
        </Box>
        <Box w="full" h={"100vh"}>
            <Image src={img4} h={"full"} w={"full"} objectFit={"cover"} />
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
                Night Life is Cool
            </Heading>
        </Box>
    </Carousel>
);