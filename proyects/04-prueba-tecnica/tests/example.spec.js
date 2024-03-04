// // @ts-check
// import { test, expect } from '@playwright/test';

// const LOCALHOST_URL = 'http://localhost:5173/'
// const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com'


// test('app shows random fact and image', async ({ page }) => {
//   await page.goto(LOCALHOST_URL);

//   // todo es en base a promesas
//   const text = await page.getByRole('paragraph')
//   const img = await page.getByRole('img')

//   const textContent = await text.textContent()
//   const imgSrc = await img.getAttribute('src')

//   await expect(textContent?.length).toBeGreaterThan(0)
//   await expect(imgSrc?.startsWith(CAT_ENDPOINT_IMAGE_URL)).toBeTruthy()
// });

// @ts-check
import { test, expect } from '@playwright/test'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
const LOCALHOST_URL = 'http://localhost:5173/'

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy()
})