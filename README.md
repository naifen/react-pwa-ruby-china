# React.js PWA Ruby China

> A React.js PWA using RubyChina's apis, mobile first and desktop responsive UI & UX.

## Motivation

I consider myself as "rubyist" 😄, so I browse various ruby sites to learn new stuff on a daily basis including <https://ruby-china.org/>, which is the biggest ruby community in China, with my mac and phone.

The official IOS client is pretty good and I enjoyed it a lot. Recently I switched to an Android device but couldn't find a decent and up-to-date client.

Since the ruby-china maintainers made some great APIs as well, I figured why not roll my own client? It's 2018 now, PWA is a thing, React's became many folks go-to UI framework, so I decided to combine these two together and give it a try.

My goal here is to focus on the mobile UI(I'll go with <https://material-ui.com/>) & UX, the final app can be saved to desktop and work as a native client(which is a PWA suppose to be like). I'll keep the tech stacks minimal and the app should be snappy and reliable.

## Demo

Please visit <http://ruby-china.liuzhen.me/> for demo

## Powered by the following techs:

* react
* react-dom
* react-router
* create-react-app
* marked
* es6-async-await-pattern
* react material-ui

## Setup and running locally

### make sure you have
* Node ( >= 6.5 )
* npm ( >= 3.10.6 )

### install dependencies and run

```bash
$ yarn install
$ yarn start
```

### visit <http://localhost:3000>

## References & inspiration
* React 16.3.0 improved Context API <https://reactjs.org/docs/context.html>
* <https://auth0.com/blog/react-context-api-managing-state-with-ease>
* <https://www.valentinog.com/blog/how-async-await-in-react/>
* A great RubyChina clone frontend project: <https://github.com/liuzhenangel/react-ruby-china/blob/master/src/Format.js>

## Roadmap

- [ ] fetch topics, nodes
- [ ] add tests and linter
- [ ] search and filter topics
- [ ] signup, login & logout
- [ ] create new topics, markdown editor
- [ ] star & subscribe a topic
- [ ] comment on a topic, reply and like comments
- [ ] create bookmarks & notes

## Contributor & Maintainer

* Jerry G

## LICENSE

MIT
