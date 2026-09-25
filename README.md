# Architectural Tech & Digital Solutions

The GitHub Pages company website starts at [index.html](index.html).

- [Prices, payment plans and invoices](invoices.html): the company app, linked from the website navigation, homepage, Services section and footer.
- [Coastline demo](coastline-all-trades-demo.html): the separate demonstration website.

The company app follows three steps: price list → payment options → invoice. Selecting a payment plan opens the invoice. All links are relative so they work under the repository's GitHub Pages path.

The app uses the company's information and bank details; client fields start blank. Data is stored only in the visitor's browser. It is not submitted to the company or synced online. Clients can print/save the invoice as PDF and send it to the company. No payments are processed automatically. Company settings and price edits affect that browser only; they are not a shared administration system.

The app has a separate storage key from the original Bob app. Use Backup to export or restore local data.

No build step or dependencies are required. Publish the repository root through GitHub Pages.

