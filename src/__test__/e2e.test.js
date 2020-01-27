import '@testing-library/jest-dom';

const puppeteer = require('puppeteer');

describe('Main actions', () => {
  test('Show all, show details and return', async () => {
    let browser = await puppeteer.launch({
      headless: false,
      slowMo: 250,
    });
    let page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 1280,
        height: 1024
      },
      userAgent: ''
    });

    // Não achei que havia necessidade de esperar carregar todas as imagens..
    // await page.goto('http://localhost:3000/', {waitUntil: 'networkidle0'});
    await page.goto('http://localhost:3000/');
    await page.click("input");
    // Testa se o filtro funciona
    await page.type("input", 'magm');
    // Clica no Pokemon
    await page.click(".pk-singleBox");
    await page.waitForSelector(".pk-detailCardSub");
    // Clica no botão Voltar
    await page.click(".pk-detailButton");
    
    browser.close();
  }, 30000);
});