import { WCVERSION, WCFM } from '../config/constants';
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

type WooCommerceRestApiVersion = "wc/v1" | "wc/v2" | "wc/v3"; 

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const consumerKey = process.env.NEXT_PUBLIC_WOO_CK;
const consumerSecret = process.env.NEXT_PUBLIC_WOO_CS;

if (!baseUrl || !consumerKey || !consumerSecret) {
  console.log(process)
  throw new Error('Environment variables are not set correctly.');
}

const api = (namespace: WooCommerceRestApiVersion) => new WooCommerceRestApi({
  url: baseUrl,
  consumerKey: consumerKey,
  consumerSecret: consumerSecret,
  version: namespace
});

const WOOAPI = api(WCVERSION)
// const STOREAPI = api(WCFM)

export default WOOAPI; 