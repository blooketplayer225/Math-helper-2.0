window.__scramjet$config = {
  prefix: '/service/', // This is the URL prefix for proxied sites
  bare: 'https://bare.benroberts.dev/', // A fast, public Bare server
  codec: window.self.scramjet.codecs.xor, // Encodes URLs to hide them from filters
  handler: '/scram/scramjet.handler.js',
  bundle: '/scram/scramjet.bundle.js',
  config: '/scram/scramjet.config.js',
  sw: '/scram/scramjet.sw.js',
};
