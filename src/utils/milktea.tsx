import { addOns, teaList, teaSizes } from "../pages/milktea/list";

const getItemName = (item: any) => {
  let name = "";
  teaList.filter((val: any) => {
    if (val.id === item?.tea) {
      name = val.name;
    }
  });
  return name;
};

const getSizeName = (item: any) => {
  let name = "";
  teaSizes.filter((val: any) => {
    if (val.id === item?.size) {
      name = val.name;
    }
  });
  return name;
};

const getAddOn = (item: any) => {
  let name = "";
  addOns.filter((val: any) => {
    if (val.id === item?.addOn) {
      name = val.name;
    }
  });
  return name;
};

export const formatTea = (item: any) => {
  return `${getItemName(item)} - (${getSizeName(item)}) - ${getAddOn(item)}`;
};

export const formatTeaPrice = (val: any) => {
  let price = 0;

  teaSizes.filter((item) => {
    if (item.id === val.size) {
      price = item.price;
    }
  });

  return price;
};

export const formatTotalPrice = (val: any) => {
  let priceList: any = [];

  val.filter((e: any) => {
    priceList.push(formatTeaPrice(e));
  });

  const sum = priceList.reduce((partialSum: any, a: any) => partialSum + a, 0);

  return formatPrice(sum);
};

export const formatPrice = (i: number) => {
  return `₱ ${numberWithCommas(i)}.00`;
};

const numberWithCommas = (x: number | string) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
