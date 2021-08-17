module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    rewrites: async () => {
      return [
        {
          source: "/public/googlebfdb080f190562f3.html",
          destination: "/googlebfdb080f190562f3.html",
        },
      ];
    },
  };
  return nextConfig;
};
