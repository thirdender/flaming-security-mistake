# Flaming Security Mistake

This repo includes many security mistakes that should be discovered by SAST tools.

* `package-lock.json` includes Node packages with [known vulnerabilities](https://nodesecurity.io/advisories)
* `Gemfile.lock` includes dependencies that are listed as insecure in the [ruby-advisory-db](https://github.com/rubysec/ruby-advisory-db)
* `index.js` includes code meant to trigger the [SonarJS](https://www.sonarsource.com/products/codeanalyzers/sonarjs.html) vulnerability rules
