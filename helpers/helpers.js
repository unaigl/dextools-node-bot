/* helper */
function logResult(alert) {
    const obj = {symbol:alert.symbol, coingecko:alert.coingecko, price: alert.price}
    
    if(alert.highTarget) obj.highTarget = alert.highTarget
    if(alert.lowTarget) obj.lowTarget = alert.lowTarget
  
    if(alert.volume6h) obj.volume6h = getVolumeFormated(alert.volume6h)
    if(alert.volume24h) obj.volume24h = getVolumeFormated(alert.volume24h)
  
    return obj
  }
  
  function getVolumeFormated(_volume) {
    const a = parseInt(_volume)
    const aa = a/1000
    const b = aa.toFixed(1)
    if(b<1) return a
    const c = b + ' k'
    const cc = b/1000
    if(cc<1) return c
    const d = b/1000
    const e = d.toFixed(1)
    const f = e + ' M'
    return f
  }

  module.exports = {logResult}