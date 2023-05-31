var Buda = require('./buda');
require('dotenv').config();

var publicBuda = new Buda();

//publicBuda.ticker('btc-clp').then(function(result) { console.log(result) });
/////////publicBuda.order_book('usdc-ars').then(function(result) { console.log(result.order_book) });
/////////publicBuda.trades('usdc-ars',Date.now() -60*60*24).then(function(result) { console.log(result.trades) });
//publicBuda.markets().then(function(result) { console.log(result) });
//publicBuda.fees('btc', 'deposit').then(function(result) { console.log(result) });
//publicBuda.get_quotation('btc-clp', 'bid_given_earned_base', 0.01).then(function(result) { console.log(result) });

var api_key = process.env.KEY;
var api_secret = process.env.SECRET;
var privateBuda = new Buda(api_key, api_secret);

//    commented out for your protection

privateBuda.me().then(function(result) { console.log(result) });
//////////privateBuda.balance('ars').then(function(result) { console.log(result) });
//////////privateBuda.balance('usdc').then(function(result) { console.log(result) });
/////////privateBuda.order_pages('usdc-ars').then(function(result) { console.log(result) });
////privateBuda.new_order("btc-clp", "bid", "limit", 835875, 0.05).then(function(result) { console.log(result) });
////privateBuda.cancel_order(3262406).then(function(result) { console.log(result) });

//privateBuda.single_order(588).then(function(result) { console.log(result) });
//privateBuda.deposits('clp').then(function(result) { console.log(result) });
//privateBuda.withdrawals('clp').then(function(result) { console.log(result) });
//privateBuda.withdrawal('btc',2.5,'mo366JJaDU5B1hmnPygyjQVMbUKnBC7DsY').then(function(result) { console.log(result) }); 
//privateBuda.new_fiat_deposit('CLP', 250000).then(function(result) { console.log(result) }); 
//privateBuda.new_crypto_address('BTC').then(function(result) { console.log(result) });
//privateBuda.get_address('BTC',30216).then(function(result) { console.log(result) });
//privateBuda.lightning_network_invoices(1000, "BTC", "message", false).then(function(result) { console.log(result) });


// Precios usdc a ars = https://api.cryptosaurio.com/ar/criptomoneda/usdc