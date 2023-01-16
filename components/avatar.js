import { Avatar } from 'theme-ui'

export default ({ size = 32, light = false, ...props }) => (
  <Avatar
    sx={{
      transition: 'transform .25s ease-in-out',
      '&:hover': { transform: 'scale(1.25)' },
      borderRadius: 0
    }}
    {...props}
    src={`/img/hl_icon.webp`}
    alt="hack laurel avatar"
    width={size}
    height={size}
  />
)
