/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const oldPosts = [
  "evitar-utilizar-css-media-queries",
  "por-que-deberias-utilizar-focus-visible",
  "estrategias-de-maquetacion-responsive-con-variables-css",
  "como-subir-tu-plugin-al-directorio-de-wordpress-desde-github",
  "bloque-para-listar-cualquier-post-type",
  "ritmo-vertical-y-escala-tipografica-con-variables-css",
  "descubre-la-forma-mas-sencilla-de-alinear-elementos-dentro-de-un-flexbox"
].map((slug) => ({
  source: `/${slug}`,
  destination: `/blog/${slug}`,
  permanent: true,
}));

const archivePosts = [
  "crea-tu-blog-utilizando-frontity-wordpress",
  "como-esta-creado-este-blog"
].map((slug) => ({
  source: `/${slug}`,
  destination: `/`,
  permanent: true,
}))

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      ...oldPosts,
      ...archivePosts,
    ]
  }
}

module.exports = withBundleAnalyzer(nextConfig);
