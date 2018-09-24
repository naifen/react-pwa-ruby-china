# React.js PWA Ruby China

> A React.js PWA using RubyChina's apis, mobile first and desktop responsive UI & UX.

## Motivation

I consider myself as "rubyist" 😄 and I browse various of ruby sites on a daily basis to learn new stuffs. <https://ruby-china.org/> is one of them, which is the biggest ruby community in China.

The official IOS client is pretty good and I enjoyed it a lot. Recently I switched to an Android device but couldn't find a decent and up-to-date client. (the site itself is responsive, it doesn't feel like an app tho)

Since the ruby-china maintainers made some great APIs as well, I figured why not roll my own client? It's 2018 now, PWA is a thing, React's became many folks go-to UI framework, so I decided to combine these two together and give it a try.

My goal here is to focus on the mobile UI (Material Design <https://material-ui.com/> is my choice) & UX similar to IOS version. The final app can be saved to desktop and work just like a native client(which is what a PWA suppose to be like). I'll try not to bloat it with npm packages and keep it snappy, minimal and reliable.

## Demo

Please visit <> for demo

## Powered by the following techs:

* react
* react-dom
* react-router
* create-react-app
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
* infinite scroll in react <https://www.robinwieruch.de/react-infinite-scroll/>

## Roadmap

- [x] fetch topics and topic
- [ ] add tests and linter
- [ ] search and filter topics by types and nodes
- [ ] signup, login & logout
- [ ] create new topics, markdown editor
- [ ] star & subscribe a topic
- [ ] comment on a topic, reply and like comments
- [ ] create bookmarks & notes
- [ ] push notifications

## Contributor & Maintainer

* Jerry G

## LICENSE

MIT
