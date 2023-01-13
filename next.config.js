const withMDX = require('@next/mdx')()
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})
module.exports = withMDX(withBundleAnalyzer({ pageExtensions: ['js', 'md', 'mdx'] }))
