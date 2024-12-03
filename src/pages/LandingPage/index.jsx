import { useRef } from 'react'
import { Container, Grid, Center, Flex, Box, Group, Title, Text, Image, Divider, Anchor, em } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { useMediaQuery } from '@mantine/hooks'
import { IconBrandInstagram, IconBrandWhatsapp } from '@tabler/icons-react'
import Marquee from 'react-fast-marquee'
import Image1 from '../../assets/alphamil-lixeiras-para-carro.png'
import Image2 from '../../assets/alphamil-placa-pvc-para-loja-de-carro.png'
import Image3 from '../../assets/alphamil-adesivo-resinado-pu.png'
import './styles.css'

function LandingPage () {

  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  const autoplay = useRef(Autoplay({ delay: 1200 }));

  return (
    <>
      <Box py={10} className='faixa'>
        <Text ta='center' c='dimmed' size='xs' fw='500'>
          Whatsapp: (11) 99805-1754
        </Text>
      </Box>
      <Container size='md'>
        <Grid>
          <Grid.Col span={6}>
            <Flex direction='column' className='logo'>
              <Text 
                size={isMobile ? '35px' : '48px'} 
                c="#004aae"
                mt={isMobile ? 20 : 10}
              >
                Alphamil
              </Text>
              <Text 
                ml={isMobile ? 90 : 140}
                size={isMobile ? '15px' : '18px'} 
                c='dark'
              >
                Brindes
              </Text>
            </Flex>
          </Grid.Col>
          <Grid.Col span={6} pb={isMobile ? 24 : 34}>
            <Text mt={isMobile ? 18 : 22} size='15px' fw='500'>
              Fale conosco! Peça seu orçamento via Whatsapp
            </Text>
            <Flex gap={3} align='end'>
              <IconBrandWhatsapp size={16} style={{marginBottom:'2px'}} />
              <Text mt={5} size='sm' fw='400'>
                (11) 99805-1754
              </Text>
            </Flex>
          </Grid.Col>
        </Grid>
      </Container>
      <Box className='marquee' mb={8}>
        <Marquee speed={30} autoFill >
          <Group gap={55}>
          <Text>Adesivos</Text>
          <Text>Chaveiros</Text>
          <Text>Carteiras</Text>
          <Text>Porta Manual</Text>
          <Text>Porta Documentos</Text>
          <Text mr={50}>Canetas</Text>
          </Group>
        </Marquee>
      </Box>
      <Box className="hero">
        <Container>
          <Grid>
            <Grid.Col 
              pt={isMobile ? 20 : 44} 
              pb={isMobile ? 20 : 0} 
              pr={isMobile ? 0 : 40} 
              span={{ base: 12, md: 6, lg: 6 }}
            >
              <Text 
                size={isMobile ? '21px' : '27px'}
                fw='700'
                order={3}
                variant="gradient"
                gradient={{ from: 'rgba(161, 118, 69, 1)', to: 'rgba(240, 226, 163, 1)', deg: 93 }}
              >
                Adesivos, chaveiros, carteiras, porta manual e diversos outros produtos para encantar seus clientes e destacar sua loja!
              </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
              <Carousel 
                withIndicators 
                height={200} 
                slideSize="70%" 
                align="start" 
                slideGap="md" 
                controlSize={24} 
                loop
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
              >
                <Carousel.Slide><Image src={Image1} /></Carousel.Slide>
                <Carousel.Slide><Image src={Image2} /></Carousel.Slide>
                <Carousel.Slide><Image src={Image3} /></Carousel.Slide>
              </Carousel>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>
      <Container mt={30}>
        <Grid>
          <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
            <Flex direction='column' p={20}>
              <video width="220" controls>
                <source src="https://alphamil.com.br/videos/alphamil-video-1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <Text fw='500' mt='sm'>
                Porta documentos PVC triplo!
              </Text>
              <Text ta='left' size='xs'>
                Tipo carteirinha Despachante. Formato diferenciado pra quem busca oferecer algo além! Já pensou entregar as chaves do carro ao seu cliente e uma Carteirinha linda dessas com a sua marca sendo levada para todos os lugares? Produto indispensável para qualquer loja de carros! Pode nos chamar para mais informações no WhatsApp (11) 99805-1754
              </Text>
            </Flex>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
            <Flex direction='column' p={20}>
              <video width="220" controls>
                <source src="https://alphamil.com.br/videos/alphamil-video-2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <Text fw='500' mt='sm'>
                Combo automotivo!
              </Text>
              <Text ta='left' size='xs'>
                <li>Cobre placa Veículos PVC 2MM - de gramatura grossa, com furos e elástico e próprio pata ambientes externos</li>
                <li>Lixeira TNT personalizada em 1 cor</li>
                <li>Adesivo Resinado PU - a única resina do mercado que resiste ao tempo com garantia de 5 anos na cor, brilho e consistência</li>
              </Text>
              <Text ta='left' size='xs'>
                Esse kit pode ser feito com a marca da sua loja!
              </Text>
              <Text ta='left' size='xs'>
                Saiba mais aqui: (11)99805-1754
              </Text>
              <Text ta='left' size='xs'>
                Enviamos para todo o Brasil há mais de 20 anos
              </Text>
            </Flex>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
            <Flex direction='column' p={20}>
              <video width="220" controls>
                <source src="https://alphamil.com.br/videos/alphamil-video-3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <Text fw='500' mt='sm'>
                Porta documentos sintético tipo couro natural
              </Text>
              <Text ta='left' size='xs'>
                Gravação em baixo relevo na capa com ou sem cores. Miolo plástico e recorte para cartões de banco. 
              </Text>
            </Flex>
          </Grid.Col>
        </Grid>
      </Container>
      <Divider my={10} />
      <Title ta='center' c='#00193a' order={4} mb={14}>
        Enviamos para todo o Brasil há mais de <nobr>20 anos</nobr>
      </Title>
      <Title ta='center' order={5}>
        Siga a Alphamil no Instagram
      </Title>
      <Center mb={30}>
        <Anchor href="https://www.instagram.com/alphamilbrindes" target="_blank" c='black'>
          <Flex gap={3} align='end'>
            <IconBrandInstagram size={16} style={{marginBottom:'2px'}} />
            <Text mt={5} size='sm' fw='400'>
              alphamilbrindes
            </Text>
          </Flex>
        </Anchor>
      </Center>
      <Box className="hero" py={30}>
        <Container>
          <Title ta='center' c='dimmed' order={6}>
            Alphamil Brindes
          </Title>
        </Container>
      </Box>
    </>
  )
}

export default LandingPage