import { Injectable } from '@angular/core';
import { createStorefrontApiClient, StorefrontApiClient } from '@shopify/storefront-api-client';


@Injectable({
  providedIn: 'root'
})
export class StorefrontApiService {
  private client: StorefrontApiClient;
  private graphqlEndpoint

  constructor() {
    this.client = createStorefrontApiClient({
      storeDomain: 'https://dev-labouteille.myshopify.com',
      apiVersion: '2024-01',
      publicAccessToken: '9e78281aef70242fcf9a47fc5fa69d0e'
    });
  }


  getAllProducts() {
  }
}
