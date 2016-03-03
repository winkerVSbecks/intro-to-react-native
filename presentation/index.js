import React, { Component } from 'react';
import {
  Code,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Layout,
  Link,
  ListItem,
  List,
  Slide,
  Spectacle,
  Text,
} from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
require('normalize.css');
require('./theme/index.css');
require('static?!../assets/favicon.ico?output=assets/favicon.ico');
import theme from './theme';
import * as icons from './icons';

const images = {
  debug: require('../assets/debug.gif'),
  warn: require('../assets/warn.gif'),
};

preloader(images);

export default class Presentation extends Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['slide']} transitionDuration={500} progress="bar">
          <Slide>
            <Heading size={1} fit>
              React Native
            </Heading>
            <Link target="_blank" href="http://varun.ca">
              <Text lineHeight={1.2}
                margin="2rem 0 0 0"
                textAlign="left">
                Varun Vachhar
              </Text>
            </Link>
            <Link target="_blank"
              href="http://twitter.com/winkervsbecks">
              <Text lineHeight={1.2}
                textColor="pink"
                textAlign="left">
                @winkerVSbecks
              </Text>
            </Link>
          </Slide>
          <Slide>
            <Heading size={4}>Overview</Heading>
            <List>
              <ListItem>Introduction</ListItem>
              <ListItem>What is React Native?</ListItem>
              <ListItem>Why should you use it?</ListItem>
              <ListItem>Getting started</ListItem>
              <ListItem>API</ListItem>
              <ListItem>Build a simple app</ListItem>
            </List>
          </Slide>
          <Slide>
            { icons.hybrid }
            <Heading size={3}>
              Hybrid Apps
            </Heading>
          </Slide>
          <Slide notes="Cordova and Ionic are amazing. They allow you to bootstrap apps extremely quick. They get you to the market really fast.">
            <Heading size={4}>Hybrid Apps Are</Heading>
            <List>
              <ListItem>A web view</ListItem>
              <ListItem>running a web app</ListItem>
              <ListItem>with access to native APIs</ListItem>
              <ListItem>that you build once and deploy everywhere*</ListItem>
            </List>
          </Slide>
          <Slide bgColor="blue">
            { icons.rainbow }
            <Heading size={3} fit textColor="white">
              React Native Is An
            </Heading>
            <Heading size={3} fit textColor="white">
              Extension of Hybrid
            </Heading>
          </Slide>
          <Slide>
            <Heading size={3}>What Is It?</Heading>
            <Layout>
              <Fill>
                <List>
                  <ListItem textSize="1.5rem"
                    margin="0 0 1rem 0">
                    An embedded instance of <b>JavaScriptCore</b>.
                  </ListItem>
                  <ListItem textSize="1.5rem"
                    margin="0 0 1rem 0">
                    React components with bindings to native UI components.
                  </ListItem>
                  <ListItem textSize="1.5rem"
                    margin="0 0 1rem 0">
                    Manipulating calls into Objective C & Java for behavior.
                  </ListItem>
                  <ListItem textSize="1.5rem"
                    margin="0 0 1rem 0">
                    And polyfills for some web APIs
                  </ListItem>
                </List>
              </Fill>
              <Fill>
                { icons.reactNative }
              </Fill>
            </Layout>
          </Slide>
          <Slide notes="Examples include UITab on iOS and Drawer on Android <br/> An example is UITableView, which is not in React Native, but is provided by the open source community">
            { icons.widgets }
            <Text lineHeight={ 1.2 }>
              Not all components are available. However, there are well maintained open source alternatives for those missing components.
            </Text>
          </Slide>
          <Slide bgColor="blue">
            <Heading size={3} fit textColor="white">
              Why use it?
            </Heading>
          </Slide>
          <Slide notes="A big reason to use RN over WebView based tools is to achieve the native look & feel<br/>We describe this feel as 60fps, and a silky smooth user interface experience<br/>It is possible to achieve this in a WebView with a lot of work, however this is much easier to achieve working with React Native<br />You are no longer limited by working in a WebView, no longer need to cut corners in order to increase performance<br/>React Native has a gesture responder system built into their View components which allows complex handing of touch events">
            <Layout>
              <Fit>
                { icons.phone }
              </Fit>
              <Fill style={{
                flex: 1,
                display: 'flex',
                alignItems: 'flex-end',
                marginBottom: '1.5em',
              }}>
                <div >
                  <Heading size={2} textAlign="left">
                    Native
                  </Heading>
                  <Heading size={2} textAlign="left">
                    Look and Feel
                  </Heading>
                </div>
              </Fill>
            </Layout>
          </Slide>
          <Slide>
            <Layout>
              <Fit>
                { icons.meter }
              </Fit>
              <Fill>
                <Heading size={1}
                  textAlign="left"
                  margin="0 0 0 1rem">
                  Performance
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide notes="All image decoding is done in a different thread already">
            <Heading size={3} margin="0 0 2rem 0">
              True Multi-Threading
            </Heading>
            <Text lineHeight={1.2}>
              JavaScript has it's own thread. We can move image processing, data manipulations, etc. to a different thread.
            </Text>
          </Slide>
          <Slide notes="Learn JavaScript once and deploy to the most popular platforms, Android and iOS <br/> Learn once, write anywhere, no context switching from multiple languages<br/>Hot Loading Changes: Being able to automatically see changes as you write them is much more efficient than having to recompile each change">
            <Heading size={3} fit>
              Developer Efficiency
            </Heading>
          </Slide>
          <Slide notes="It is possible to write a great app without needing to write a single line of native code<br/>However, RN is also extensible in that you can write custom native views and modules<br/>You can reuse anything you've previously written or import your favourite native libs">
            <Heading size={2}>
              React Native is
            </Heading>
            <Heading size={2}>
              Extensible
            </Heading>
          </Slide>
          <Slide notes="Draws on experience from developing for the modern web<br/>No new layout engine to learn if you have previous experience with CSS<br/>CSS style properties are converted into underlying native view properties">
            <Heading size={3}>
              Polyfills
            </Heading>
            <List>
              <ListItem>
                <code>XMLHttpRequest</code> & <code>Fetch</code>
              </ListItem>
              <ListItem>
                <code>window.requestAnimationFrame</code>
              </ListItem>
              <ListItem><code>navigator.geolocation</code></ListItem>
              <ListItem>Flexbox!</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={3}>Getting Started</Heading>
            <List>
              <ListItem>
                Install Node
              </ListItem>
              <ListItem>
                <code>brew install watchman</code>
              </ListItem>
              <ListItem>
                <code>brew install flow</code> (optional)
              </ListItem>
              <ListItem>
                <code>npm install -g react-native-cli</code>
              </ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={3}>Create a New Project</Heading>
            <Text textAlign="left" lineHeight={2}>
              <Code>react-native init ProjectName</Code> <br />
              <Code>react-native run-ios</Code> <br />
              <Code>react-native run-android</Code>
            </Text>
          </Slide>
          <Slide bgColor="blue">
            <Layout>
              <Fit>{ icons.code }</Fit>
              <Fill>
                <Heading size={1}
                  textAlign="left"
                  textColor="white">
                  Show Me the Code
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide>
            <Heading size={4}
              textAlign="left"
              margin="0 0 2rem 0">
              Components
            </Heading>
            <CodePane
              lang="jsx"
              source={ require('raw!../assets/components.jsx') }
            />
          </Slide>
          <Slide>
            <Heading size={4}
              textAlign="left"
              margin="0 0 2rem 0">
              Styles
            </Heading>
            <CodePane
              lang="jsx"
              source={ require('raw!../assets/styles.jsx') }
            />
          </Slide>
          <Slide>
            <Heading size={4} textAlign="left"
              margin="0 0 1rem 0">
              Flexbox
            </Heading>
            <iframe height={ 600 }
              scrolling="no"
              src="//codepen.io/winkerVSbecks/embed/eNZWqb/?height=600&theme-id=8427&default-tab=result"
              allowTransparency="true"
              allowFullScreen="true"
              style={{
                width: '100%',
                border: 'none',
              }}>
            </iframe>
          </Slide>
          <Slide bgImage={ images.debug.replace('/', '') }>
            <Heading size={4}>
              Debugging
            </Heading>
          </Slide>
          <Slide bgImage={ images.warn.replace('/', '') }>
            <Heading size={4}>
              More Debugging
            </Heading>
          </Slide>
          <Slide>
            <Heading size={4}
              textAlign="left"
              margin="0 0 2rem 0">
              Platform Specific Extensions
            </Heading>
            <CodePane
              lang="jsx"
              source={ require('raw!../assets/platform-specific.jsx') }
            />
          </Slide>
          <Slide>
            <Layout>
              <Fit>
                { icons.touch }
              </Fit>
              <Fill>
                <Heading size={4}
                  textAlign="left"
                  margin="0 0 2rem 0">
                  Touch
                </Heading>
                <Text textAlign="left"
                  margin="0 0 2rem 0">
                  TouchableHighlight and Touchable*
                </Text>
                <Text textAlign="left">
                  Gesture Responder System & PanResponder
                </Text>
              </Fill>
            </Layout>
          </Slide>
          <Slide>
            <Heading size={4}
              textAlign="left"
              margin="0 0 2rem 0">
              PanResponder
            </Heading>
            <CodePane
              lang="jsx"
              source={ require('raw!../assets/pan-responder.jsx') }
            />
          </Slide>
          <Slide notes="Used to fetch resources, previously we would have used XMLHttpRequest<br/><br/>Built by the standards committee<br/><br/>Much easier to use than XMLHttpRequest<br/><br/>Provides the same features for making resource requests<br/><br/>Fetch is Promise based">
            <Heading size={4}
              textAlign="left"
              margin="0 0 2rem 0">
              Network
            </Heading>
            <CodePane
              lang="jsx"
              source={ require('raw!../assets/network.jsx') }
            />
          </Slide>
          <Slide>
            <Heading size={4}>Animations</Heading>
            <List>
              <ListItem>Declarative</ListItem>
              <ListItem>Composable: parallel, sequence & stagger</ListItem>
              <ListItem>Gestures and events can drive animations</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={4}>Navigator</Heading>
            <List>
              <ListItem>Will feel familiar</ListItem>
              <ListItem>Stack based</ListItem>
              <ListItem>Push/pop states</ListItem>
              <ListItem>
                <code>renderScene</code> callback decides what to render
              </ListItem>
            </List>
          </Slide>
          <Slide>
            Timers (timeouts, requestAnimationFrame)

            ```
            setTimeout, clearTimeout
            setInterval, clearInterval
            setImmediate, clearImmediate
            requestAnimationFrame, cancelAnimationFrame
            ```
          </Slide>
          {/* components library (View, Text) */}
          {/* Lists */}
          {/* Others: geolocation, timers, etc.
             requestAnimationFrame(fn) is not the same as setTimeout(fn, 0) - the former will fire after all the frame has flushed, whereas the latter will fire as quickly as possible (over 1000x per second on a iPhone 5S). InteractionManager*/}
          {/*
            https://js.coach/react-native/react-native-keyboard-spacer?search=keyboard
          */}
          <Slide bgColor="blue" notes="The main value proposition is that RN provides a framework for developers to write React components that are backed by native code<br/>This experience can be translated directly into your web version of your app by using React on the front end<br/>Development experience between web, and native platforms then becomes seamless">
            <Heading size={3} fit textColor="white">
              Learn Once, Write Anywhere
            </Heading>
          </Slide>
          <Slide>
            <Heading size={1} fit>
              Thank You!
            </Heading>
            <Link target="_blank" href="http://varun.ca">
              <Text lineHeight={1.2}
                margin="2rem 0 0 0"
                textAlign="left">
                Varun Vachhar
              </Text>
            </Link>
            <Link target="_blank"
              href="http://twitter.com/winkervsbecks">
              <Text lineHeight={1.2}
                textColor="pink"
                textAlign="left">
                @winkerVSbecks
              </Text>
            </Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
