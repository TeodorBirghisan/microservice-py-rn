const HOST_ADMIN = "";
const HOST_MAIN = "";

const apiGetProductsAdmin = `${HOST_ADMIN}/api/products`;
const apiPostProductsAdmin = `${HOST_ADMIN}/api/products`;
const apiGetOneProductAdmin = (productId) =>
  `${HOST_ADMIN}/api/products/${productId}`;
const apiUpdateOneProductAdmin = (productId) =>
  `${HOST_ADMIN}/api/products/${productId}`;
const apiDeleteOneProductAdmin = (productId) =>
  `${HOST_ADMIN}/api/products/${productId}`;
const apiGetRandomUser = `${HOST_ADMIN}/api/user`;

const apiGetProductMain = `${HOST_MAIN}/api/products/${productId}`;
const apiPostLikeMain = (productId) =>
  `${HOST_ADMIN}/api/products/${productId}/like`;

async function getAllProductsAdmin() {
  try {
    let response = await fetch(apiGetProductsAdmin);
    let json = await response.json();
    return json.data;
  } catch (error) {
    console.log(error);
  }
}

async function postProductAdmin(params) {
  try {
    let response = await fetch(apiPostProductsAdmin, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(params),
    });

    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.log(error);
  }
}

async function getOneProductAdmin(productId) {
  try {
    let response = await fetch(apiGetOneProductAdmin(productId));
    let json = await response.json();
    return json.data;
  } catch (error) {
    console.log(error);
  }
}

async function updateProductAdmin(params, productId) {
  try {
    let response = await fetch(apiUpdateOneProductAdmin(productId), {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(params),
    });

    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.log(error);
  }
}

async function deleteProductAdmin(params, productId) {
  try {
    let response = await fetch(apiDeleteOneProductAdmin(productId), {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(params),
    });

    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.log(error);
  }
}

async function getOneProductMain(productId) {
  try {
    let response = await fetch(apiGetProductMain(productId));
    let json = await response.json();
    return json.data;
  } catch (error) {
    console.log(error);
  }
}

async function postLikeProductMain(params, productId) {
  try {
    let response = await fetch(apiPostLikeMain(productId), {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(params),
    });

    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.log(error);
  }
}