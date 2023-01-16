import Head from 'next/head'

const makeTitle = (title, name) =>
  title.startsWith(name) ? title : `${title} – ${name}`

const Meta = ({
  color = '#e52660',
  name = 'Hack Laurel',
  title = 'Hack Laurel – A brand new hackathon based in Laurel, MD',
  description = 'Unleash your creativity and problem-solving skills at Hack Laurel, where PGCPS students come together to design and build innovative solutions to real-world challenges.',
  image = '/img/hacklaurel_og.png',
  url = 'https://hacklaurel.netlify.app'
}) => (
  <Head>
    <meta key="og_locale" property="og:locale" content="en_US" />
    <meta key="og_type" property="og:type" content="website" />
    <meta key="og_site" property="og:site_name" content={name} />
    {/* <meta key="tw_site" name="twitter:site" content="@hacklaurel" /> */}
    <title key="title">{makeTitle(title, name)}</title>
    <meta key="og_title" property="og:title" content={makeTitle(title, name)} />
    <meta
      key="tw_title"
      name="twitter:title"
      content={makeTitle(title, name)}
    />
    {description && (
      <>
        <meta key="desc" name="description" content={description} />
        <meta key="og_desc" property="og:description" content={description} />
        <meta key="tw_desc" name="twitter:description" content={description} />
      </>
    )}
    {image && (
      <>
        <meta key="og_img" property="og:image" content={image} />
        <meta key="tw_card" name="twitter:card" content="summary_large_image" />
        <meta key="tw_img" name="twitter:image" content={image} />
      </>
    )}
    <meta key="theme_color" name="theme-color" content={color} />
    <meta key="tile_color" name="msapplication-TileColor" content={color} />
    <link
      key="icon"
      rel="shortcut icon"
      href="/favicon.ico"
    />
    <link
      key="favicon_16"
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicon-16x16.png"
    />
    <link
      key="favicon_32"
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicon-32x32.png"
    />
    <script
      key="ld_json"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'hacklaurel',
          url: 'https://tiger-hacks-site.vercel.app',
          logo: 'https://tiger-hacks-site.vercel.app/img/tigerhacks.wp2',
          sameAs: [
            'https://twitter.com/tigerhacksmd',
            'https://www.instagram.com/tigerhacksmd',
            'https://www.facebook.com/tigerhacksmd'
          ],
          contactPoint: [
            {
              '@type': 'ContactPoint',
              email: 'contact@tiger-hacks-site.com',
              contactType: 'customer support',
              url: 'https://tiger-hacks-site.vercel.app'
            }
          ]
        })
      }}
    />
  </Head>
)

export default Meta
