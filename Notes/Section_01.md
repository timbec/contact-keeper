First had to reset ownership of `npm` to get `npm install`.
Followed this: 
https://stackoverflow.com/questions/50639690/on-npm-install-unhandled-rejection-error-eacces-permission-denied

`sudo chown -R $USER:$GROUP ~/.npm`
`sudo chown -R $USER:$GROUP ~/.config`