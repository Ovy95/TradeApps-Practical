function btcConverter(){
  document.converter.dollar.value = document.converter.btc.value * 11363.65
};

function dollarConverter(){
  document.converter.btc.value = document.converter.dollar.value * 0.000088
};