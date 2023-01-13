import React from 'react'
import styled from '@emotion/styled'
import { Box, useColorMode, Image } from 'theme-ui'
import theme from '../lib/theme'

const Base = styled(Box)`
  display: grid;
  grid-row-gap: ${theme.space[2]}px;
  grid-template-columns: repeat(
    auto-fit,
    minmax(
      ${(props) => (props.section === 'additionalSupport' ? 128 : 192)}px,
      1fr
    )
  );
  align-items: center;
  justify-content: center;
  margin-bottom: ${theme.space[4]}px;
  a {
    width: 100%;
  }
  img {
    max-width: 75%;
    max-height: ${(props) => (props.section === 'sponsors' ? 5 : 3)}rem;
    ${(props) =>
      props.colorMode === 'dark' && `filter: invert() hue-rotate(180deg);`}
  }
`

const data = {
  sponsors: [
    {
      name: 'Hack Club Bank',
      link: 'https://hackclub.com/bank',
      image: 'hackclub-bank.svg'
    }
  ],
  additionalSupport: [
  ]
}

const Sponsors = (props) => {
  const [colorMode] = useColorMode()
  return (
    <Base colorMode={colorMode} {...props}>
      {data[props.section || 'sponsors'].map((sponsor) => (
        <a key={sponsor.name} href={`${sponsor.link}`} >
          <Image
            sx={{ transform: 'none', transition: 'all 500ms', '&:hover': { transform: 'scale(1.1)' } }}
            alt={sponsor.name}
            src={`/img/${sponsor.image}`}
            key={sponsor.image}
          />
        </a>
      ))}
    </Base>
  )
}

export default Sponsors
