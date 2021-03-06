![SauceTest](https://github.com/mdsauce/sample_high_ccy/workflows/SauceTest/badge.svg?branch=master)

# Sample High CCY 
Run tests on EMUSIM, VDC, and Real Devices.  Defer to each wdio.conf file for more details. Check package.json for the `npm run` commands.  `npm test` will run everything. 

### CICD
Github Actions should run on every Pull request, `git push`, and every 2 hours. See [the sauce_test yaml](https://github.com/mdsauce/sample_high_ccy/blob/master/.github/workflows/sauce_test.yml) for the cronjob implementation:

```
  schedule:
    - cron: 0 */2 * * *
```

`!FYI` if you clone this repo you need to follow the [create encrypted secrets](https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets#creating-encrypted-secrets) guide here for your repo.

### Custom Build Name
`npm run test build_name_here`
