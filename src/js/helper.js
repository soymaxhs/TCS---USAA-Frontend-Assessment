const formatMoney = function formatMoney(number) {
  return new Intl.NumberFormat("en-US").format(number);
};

const getCurrentYear = function(){
  return new Date().getFullYear();
}
