const host = import.meta.env.VITE_SERVER_URL;

export default {
  host: host,
  api: {
    auth: {
      login: `${host}/api/auth`,
    },
    company: {
      index: `${host}/api/getcompany`,
      create: `${host}/api/create-company`,
      update: `${host}/api/update-company`,
    },
    Delivery_man: {
      index: `${host}/api/get-delivery-man`,
      create: `${host}/api/create-delivery-man`,
      update: `${host}/api/update-delivery-man`,
    },
    products: {
      index: `${host}/api/get-product`,
      create: `${host}/api/create-product`,
      update: `${host}/api/update-product`,
    },
    purcharOrder: {
      index: `${host}/api/get-purcharse-order`,
      create: `${host}/api/create-purcharse-order`,
      update: `${host}/api/update-product`,
    },
    purchar_product: {
      index: `${host}/api/get-purchase-products/`,
      create: `${host}/api/create-purchase-products`,
      update: `${host}/api/update-purchase-products`,
      // update: `${host}/api/update-product`,
    },
    manufacturing: {
      index: `${host}/api/get-manufacturing`,
      create: `${host}/api/create-manufacturing`,
       update: `${host}/api/update-manufacturing`,
      // update: `${host}/api/update-product`,
    },
  },
};
