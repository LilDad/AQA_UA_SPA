import { faker } from '@faker-js/faker';

export const EMAIL: string = (faker.internet.email('testuser', undefined, 'test.com')).toLowerCase();
export const PASSWORD: string = faker.internet.password({length: 8})
export const LINK: string = 'https://site-dev-product-ua.pin-up.dev/'
