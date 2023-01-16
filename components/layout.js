import { Box, Container, Flex, Text, Link as A, useColorMode } from 'theme-ui'
import Link from 'next/link'
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
    {_mode === 'light' ? <svg width="24px" height="24px" strokeWidth="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M3 11.507a9.493 9.493 0 0018 4.219c-8.507 0-12.726-4.22-12.726-12.726A9.494 9.494 0 003 11.507z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg> : <svg width="24px" height="24px" strokeWidth="3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><path d="M12 18a6 6 0 100-12 6 6 0 000 12zM22 12h1M12 2V1M12 23v-1M20 20l-1-1M20 4l-1 1M4 20l1-1M4 4l1 1M1 12h1" strokeLinecap="round" strokeLinejoin="round"></path></svg>}
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
        {/* <Link href="/finances" passHref>
          <A variant="styles.navitem" sx={{ ml: 'auto', mr: [3, 4] }}>
            Finances
          </A>
        </Link> */}
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
              <svg fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414" xmlns="http://www.w3.org/2000/svg" aria-label="github" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet" fill="currentColor" width="36" height="36" title="github"><g><path d="M18.837,27.966c8.342,-0.241 9.163,-1.997 9.163,-11.966c0,-11 -1,-12 -12,-12c-11,0 -12,1 -12,12c0,9.995 0.826,11.734 9.228,11.968c0.073,-0.091 0.1,-0.205 0.1,-0.321c0,-0.25 -0.01,-2.816 -0.015,-3.699c-3.037,0.639 -3.678,-1.419 -3.678,-1.419c-0.497,-1.222 -1.213,-1.548 -1.213,-1.548c-0.991,-0.656 0.075,-0.643 0.075,-0.643c1.096,0.075 1.673,1.091 1.673,1.091c0.974,1.617 2.556,1.15 3.178,0.879c0.099,-0.683 0.381,-1.15 0.693,-1.414c-2.425,-0.267 -4.974,-1.175 -4.974,-5.23c0,-1.155 0.426,-2.099 1.124,-2.839c-0.113,-0.268 -0.487,-1.344 0.107,-2.8c0,0 0.917,-0.285 3.003,1.084c0.871,-0.235 1.805,-0.352 2.734,-0.356c0.927,0.004 1.861,0.121 2.734,0.356c2.085,-1.369 3,-1.084 3,-1.084c0.596,1.456 0.221,2.532 0.108,2.8c0.7,0.74 1.123,1.684 1.123,2.839c0,4.065 -2.553,4.96 -4.986,5.221c0.392,0.327 0.741,0.973 0.741,1.96c0,0.946 -0.006,2.619 -0.01,3.728c-0.002,0.549 -0.003,0.959 -0.003,1.074c0,0.109 0.029,0.224 0.095,0.319Z"></path></g></svg>
            </A>
            {/* <A
              href="https://instagram.com/hackpenn"
              title="Instagram"
              sx={{ mx: 2 }}
            >
              <Icon glyph="instagram" size={36} />
            </A> */}
            <A href="mailto:contact@hackpenn.com" title="Email" sx={{ mx: 2 }}>
              <svg fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414" xmlns="http://www.w3.org/2000/svg" aria-label="email" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet" fill="currentColor" width="36" height="36" title="email"><g><path d="M25.709,21.048c0.241,-1.212 0.291,-2.792 0.291,-5.048c0,-2.256 -0.05,-3.836 -0.291,-5.048c-0.216,-1.11 -0.533,-1.577 -0.864,-1.853c-0.384,-0.32 -1.094,-0.641 -2.597,-0.844c-1.531,-0.209 -3.522,-0.255 -6.248,-0.255c-2.725,0 -4.717,0.046 -6.248,0.255c-1.503,0.203 -2.213,0.524 -2.597,0.844c-0.331,0.276 -0.648,0.743 -0.864,1.853c-0.241,1.212 -0.291,2.792 -0.291,5.048c0,2.256 0.05,3.836 0.291,5.048c0.216,1.11 0.533,1.577 0.864,1.853c0.384,0.32 1.094,0.641 2.597,0.843c1.531,0.21 3.523,0.256 6.248,0.256c2.726,0 4.717,-0.046 6.248,-0.256c1.503,-0.202 2.213,-0.523 2.597,-0.843c0.331,-0.276 0.648,-0.743 0.864,-1.853Zm-9.709,4.952c11,0 12,-0.833 12,-10c0,-9.167 -1,-10 -12,-10c-11,0 -12,0.833 -12,10c0,9.167 1,10 12,10Zm-8.651,-14.774c0.411,-0.344 1.023,-0.289 1.366,0.124c1.335,1.601 5.617,5.318 7.285,6.592c1.696,-1.296 5.931,-4.963 7.285,-6.592c0.343,-0.413 0.955,-0.468 1.366,-0.124c0.412,0.344 0.467,0.957 0.124,1.37c-0.695,0.838 -2.02,2.129 -3.429,3.404c1.409,1.275 2.734,2.566 3.429,3.404c0.343,0.412 0.288,1.026 -0.124,1.37c-0.411,0.344 -1.023,0.289 -1.366,-0.124c-0.662,-0.798 -2.015,-2.083 -3.422,-3.339c-1.102,0.95 -2.137,1.789 -2.841,2.291c-0.302,0.213 -0.644,0.398 -1.022,0.398c-0.378,0 -0.72,-0.185 -1.021,-0.398c-0.691,-0.492 -1.728,-1.335 -2.835,-2.292c-1.414,1.264 -2.775,2.556 -3.429,3.34c-0.343,0.413 -0.955,0.468 -1.366,0.124c-0.411,-0.344 -0.467,-0.957 -0.124,-1.37l0.001,-0.001c0.683,-0.822 2.018,-2.119 3.436,-3.403c-1.418,-1.284 -2.753,-2.582 -3.436,-3.403l-0.001,-0.001c-0.343,-0.413 -0.287,-1.026 0.124,-1.37Z"></path></g></svg>
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
