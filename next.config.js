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
  "crea-tu-blog-utilizando-frontity-wordpress",
  "ritmo-vertical-y-escala-tipografica-con-variables-css",
  "como-esta-creado-este-blog",
  "descubre-la-forma-mas-sencilla-de-alinear-elementos-dentro-de-un-flexbox"
]

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return oldPosts.map(slug => ({
      source: `/${slug}`,
      destination: `/blog/${slug}`,
      permanent: true,
    }));
  }
}

module.exports = withBundleAnalyzer(nextConfig);
