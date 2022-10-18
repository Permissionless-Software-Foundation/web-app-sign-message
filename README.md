# web-app-sign-message

## About (Non-Technical)
This simple web app can be used to sign a message with a WIF private key. A WIF private key starts with the lettter 'K' or 'L'. Fill out the forms below, and you'll be presented with a signed message, proving cryptographically that you own the address associated with that private key.

This app is useful for gaining access to the [PSF VIP Telegram channel](https://t.me/psf_vip). If you store your PSF tokens on a [paper wallet](https://cloudflare-ipfs.com/ipfs/bafybeifu6fhskdqj3gvp5q3wh3idukhrxiyhrrja6biqrqcei7rj23esn4/), you can use this app to sign the message 'verify' with the WIF from your paper wallet.

- [Live Demo on Filecoin](https://bafybeih5kjluvlsds2iwwczgle73pizv4qmmq76uqmec7y73m7wexbgqze.ipfs.dweb.link/)

## About (Technical)
This is a single page app (SPA) based on [react-bootstrap](https://www.npmjs.com/package/react-bootstrap). This app is forked from the [react-bootstrap-web3-spa React template](https://github.com/Permissionless-Software-Foundation/react-bootstrap-web3-spa).


## Installation
```bash
git clone https://github.com/Permissionless-Software-Foundation/web-app-sign-message
cd web-app-sign-message
npm install
npm start
```

## Publish to Filecoin
```bash
export FILECOIN_TOKEN=myFilecoinAPITokenFromWeb3.Storage
npm run build
npm run pub
```

Learn more about alternative deployments in the [deployment directory](./deploy)

## Support

Have questions? Need help? Join our community support
[Telegram channel](https://t.me/bch_js_toolkit)

## Donate

This open source software is developed and maintained by the [Permissionless Software Foundation](https://psfoundation.cash). If this library provides value to you, please consider making a donation to support the PSF developers:

<div align="center">
<img src="./img/donation-qr.png" />
<p>bitcoincash:qqsrke9lh257tqen99dkyy2emh4uty0vky9y0z0lsr</p>
</div>

## Repo Backup
This GitHub repository is backed up on [Radicle](https://radicle.network/get-started.html). If GitHub ever censors this respository, the code can be found in this alternative repository. [Here are extra notes on working with Radicle](https://christroutner.github.io/trouts-blog/docs/censorship/radicle).

- Project ID: rad:git:hnrkd5cjwwb5tzx37hq9uqm5ubon7ee468xcy
- [Repo on Rad Website](https://app.radicle.network/seeds/maple.radicle.garden/rad:git:hnrkd5cjwwb5tzx37hq9uqm5ubon7ee468xcy/remotes/hyyycncbn9qzqmobnhjq9rry6t4mbjiadzjoyhaknzxjcz3cxkpfpc)

This can be cloned from [PSF](https://psfoundation.info) Radicle seed node with one of these commands:
- `rad clone rad:git:hnrkd5cjwwb5tzx37hq9uqm5ubon7ee468xcy --seed radicle.fullstackcash.nl`
- `rad clone rad:git:hnrkd5cjwwb5tzx37hq9uqm5ubon7ee468xcy --seed maple.radicle.garden`

## License
[MIT](./LICENSE.md)
