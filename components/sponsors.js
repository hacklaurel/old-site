import React from 'react'
import styled from '@emotion/styled'
// import {jsx} from '@emotion/react'
import { Container } from './blocks'
import { Box, useColorMode } from 'theme-ui'
import theme from '../lib/theme'
import { Button } from 'theme-ui'

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
        <a key={sponsor.name} href={`${sponsor.link}`}>
          <img
            alt={sponsor.name}
            src={`/img/${sponsor.image}`}
            key={sponsor.image}
          />
        </a>
      ))}
      <Button
        as="a"
        href="https://app.fillout.com/flow/qF3BeM1JnXus"
        sx={{
          borderRadius: '15px',
          fontSize: '24px',
          ml: 3,
        }}
      >
        {'you? →'}
      </Button>

    </Base>
  )
}

export default Sponsors
