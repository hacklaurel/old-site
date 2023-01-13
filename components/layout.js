import { Box, Container, Flex, Text, Link as A, useColorMode } from 'theme-ui'
import Link from 'next/link'
import Icon from './icon'
import Avatar from './avatar'

function ColorButton({ mode, ...props }) {
  const [_mode, _] = useColorMode()
  return (<Box
    as="button"
    {...props}
    title="Switch Theme"
    sx={{
      display: 'inline-block',
      appearance: 'none',
      bg: 'transparent',
      color: 'inherit',
      p: 1,
      m: 0,
      border: 0,
      borderRadius: 9999,
      lineHeight: 0,
      ':hover, :focus': {
        color: 'primary',
        boxShadow: '0 0 0 3px',
        outline: 'none'
      }
    }}
  >
    {_mode === 'light' ? <svg width="24px" height="24px" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M3 11.507a9.493 9.493 0 0018 4.219c-8.507 0-12.726-4.22-12.726-12.726A9.494 9.494 0 003 11.507z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg> : <svg width="24px" height="24px" stroke-width="3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><path d="M12 18a6 6 0 100-12 6 6 0 000 12zM22 12h1M12 2V1M12 23v-1M20 20l-1-1M20 4l-1 1M4 20l1-1M4 4l1 1M1 12h1" stroke-linecap="round" stroke-linejoin="round"></path></svg>}
  </Box>)
}

export default (props) => {
  const [mode, setMode] = useColorMode()

  return (
    <>
      <Flex
        as="header"
        variant="container"
        sx={{
          color: 'primary',
          alignItems: 'center',
          px: 3,
          py: 3
        }}
      >
        <Link href="/" passHref>
          <A sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar light size={48} mr={3} />
          </A>
        </Link>
        <Box sx={{ mx: 'auto' }} />
        <Link href="/finances" passHref>
          <A variant="styles.navitem" sx={{ ml: 'auto', mr: [3, 4] }}>
            Finances
          </A>
        </Link>
        <ColorButton
          onClick={(e) => {
            const next = mode === 'dark' ? 'light' : 'dark'
            setMode(next)
          }}
        />
      </Flex>
      <Box
        as="main"
        sx={{
          width: '100%',
          mx: 'auto',
          flex: '1 1 auto'
        }}
      >
        {props.children}
      </Box>
      <Container
        as="footer"
        sx={{
          px: 3,
          py: 5,
          width: '100%',
          maxWidth: 'wide',
          mx: 'auto'
        }}
      >
        <Container
          sx={{
            fontSize: 0,
            py: 3
          }}
        >
          <Flex sx={{ justifyContent: 'center' }}>
            {/* <A
              href="https://twitter.com/hackpenn"
              title="Twitter"
              sx={{ mx: 2 }}
            >
              <Icon glyph="twitter" size={36} />
            </A>
            <A
              href="https://fb.me/hackpennsylvania"
              title="Facebook"
              sx={{ mx: 2 }}
            >
              <Icon glyph="facebook" size={36} />
            </A> */}
            <A href="https://github.com/hacklaurel" title="GitHub" sx={{ mx: 2 }}>
              <Icon glyph="github" size={36} />
            </A>
            {/* <A
              href="https://instagram.com/hackpenn"
              title="Instagram"
              sx={{ mx: 2 }}
            >
              <Icon glyph="instagram" size={36} />
            </A> */}
            <A href="mailto:contact@hackpenn.com" title="Email" sx={{ mx: 2 }}>
              <Icon glyph="email" size={36} />
            </A>
          </Flex>
          <Box
            sx={{
              mt: [3, 4],
              textAlign: 'center',
              a: { fontSize: 1 }
            }}
          >
            <Text
              sx={{
                fontFamily: 'mono',
                color: 'muted',
                fontSize: 0,
                mt: 2,
                mb: 0
              }}
            >
              Fiscally sponsored by The Hack Foundation.
              <br />
              Nonprofit EIN: <code>81-2908499</code>.
            </Text>
          </Box>
        </Container>
      </Container>
    </>
  )
}
