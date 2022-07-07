interface Config {
  urls: string
}

declare module "myPackage" {
  function init(config:Config):Boolean
  function exit(code:number):number
}