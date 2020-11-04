import { Box } from 'theme-ui'
import Image from 'next/image'

const BGImg = ({
  gradient = 'linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.5))',
  ...props
}) => (
  <Box
    sx={{
      position: 'absolute',
      display: 'block',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 0,
      '&:after': {
        content: '""',
        position: 'absolute',
        backgroundImage: gradient,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      },
      '> div': { height: '100%', width: '100%' },
      img: { objectFit: 'cover', objectPosition: 'center' },
      '~ *': { position: 'relative' }
    }}
  >
    <Image layout="responsive" {...props} />
  </Box>
)

export default BGImg