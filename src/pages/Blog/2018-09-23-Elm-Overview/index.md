---
path: '/elm-overview'
date: '2018-09-23'
title: 'A deep dive into the world of Elm'
excerpt: Is Elm really fun? Some thoughts and eperiences after 2 months with Elm.
tags: ['elm', 'frontend', 'learning']
image: './images/trees.jpg'
timeToRead: 15
---

# Cons

My very first impression of elm was "Wow, that's a lot of code!". I started with [create-elm-app](https://github.com/halfzebra/create-elm-app) and found 55 lines of code, giving me the elm logo and a "Your Elm App is working!" in my browser window. To be fair, there are a lot of empty lines between, but this is exactly what the elm style guide suggests.

Syntax
The Elm syntax is simple and I got used to it quickly. Most of it is minimal and straightforward: you don't need any keywords for functions and arguments are just written with spaces, not wrapped in parentheses like in many other languages.
While all of this sounds great, I think writing HTML in Elm is painful, especially when using nested elements. Closing tags in plain HTML are usually helpful to grasp the structure quickly. In Elm, you quickly end up with several closing square brackets, and if you want to add an elements, it can take you a while to find the right place. Maybe these two examples can give an idea what I mean:

```elm
view : Model -> Html Msg
    view model =
        div [ class "App" ]
            [ header [ class "header"]
                [ img
                    [ class "logo"
                    , src "/logo.svg"
                    , alt "logo"
                    ]
                    []
                , h1 [class "logo"] [ text "Your Elm App is working!" ]
                ]
            , p [ class "intro" ]
                [ text "To get started, edit "
                , code [] [ text "src/App.js" ]
                , text " and save to reload."
                ]
            ]
```

```html
<div className="App">
  <header className="header">
    <img src="/logo.svg" className="logo" alt="logo" />
    <h1 className="title">Your Elm App is working!</h1>
  </header>
  <p className="App-intro">
    To get started, edit <code>src/App.js</code> and save to reload.
  </p>
</div>
```

There is quite a lot of documentation for elm. However, the documentation rarely offers useful examples. To explain what I mean with that, here are the documentations for handling events with elm, react and vue.js:
elm: [https://package.elm-lang.org/packages/evancz/elm-html/4.0.0/Html-Events](https://package.elm-lang.org/packages/evancz/elm-html/4.0.0/Html-Events)
react: [https://reactjs.org/docs/handling-events.html](https://reactjs.org/docs/handling-events.html)
vue-js: [https://vuejs.org/v2/guide/events.html](https://vuejs.org/v2/guide/events.html)

A website usually has 3 elements: HTML, CSS and JS. In Elm, you can add CSS by either adding it to the HTML or write them inline. As far as I know, the reason for this is that the main purpose of elm was using it as a part of an existing application, so the existing

Handling forms is a nightmare.
This is an issue which is often mentioned in articles about elm. You basically need four steps to implement a simple form: 1. create a model structure for the form data, 2. create the necessary messages, 3. add a data type for the form fields and 4. add the update function. Don't expect that you have a fully functional form after these steps. What you have is a form that keeps what you type in the input fields.

Backwards compatibility
When I mentioned that I am now developing in Elm to friends, a frequent reaction was "Get  
With the recent release of 0.19, several fundamental functions changed, packages and modules were moved, and functions were removed. It's not a coincidence that the PR for updating the example SPA was called [Upgrade to 0.19, rearchitect everything!](https://github.com/rtfeldman/elm-spa-example/pull/51) and contained 80 changed files. That's a lot of work for one release and you cannot know if the same has to be done when Elm releases 0.20. Therefore, choosing Elm for production is still a very risky decision.

Interoperability and dealing with the outside world
If you want to have a small,

Compiled code
Elm compiles to JavaScript or, if you want to have more, elm-make can also create a skeleton (HTML and CSS) for you. "Really easy!" you might think and that's true.
However, Elm does not convert to JavaScript code which is very readable or could be easily used without Elm.

```javascript
var _user$project$Main$view = function(model) {
  return A2(
    _elm_lang$html$Html$div,
    { ctor: '[]' },
    {
      ctor: '::',
      _0: A2(
        _elm_lang$html$Html$img,
        {
          ctor: '::',
          _0: _elm_lang$html$Html_Attributes$src('/logo.svg'),
          _1: { ctor: '[]' },
        },
        { ctor: '[]' }
      ),
      _1: {
        ctor: '::',
        _0: A2(
          _elm_lang$html$Html$h1,
          { ctor: '[]' },
          {
            ctor: '::',
            _0: _elm_lang$html$Html$text('Your Elm App is working!'),
            _1: { ctor: '[]' },
          }
        ),
        _1: { ctor: '[]' },
      },
    }
  );
};
```

As an counterexample to that, let's look at some JA

```javascript
function make(message, _) {
  return /* record */ [
    /* debugName */ component[/* debugName */ 0],
    /* reactClassInternal */ component[/* reactClassInternal */ 1],
    /* handedOffState */ component[/* handedOffState */ 2],
    /* willReceiveProps */ component[/* willReceiveProps */ 3],
    /* didMount */ component[/* didMount */ 4],
    /* didUpdate */ component[/* didUpdate */ 5],
    /* willUnmount */ component[/* willUnmount */ 6],
    /* willUpdate */ component[/* willUpdate */ 7],
    /* shouldUpdate */ component[/* shouldUpdate */ 8],
    /* render */ function() {
      return React.createElement(
        'div',
        {
          className: 'App',
        },
        React.createElement(
          'div',
          {
            className: 'App-header',
          },
          React.createElement('img', {
            className: 'App-logo',
            alt: 'logo',
            src: LogoSvg,
          }),
          React.createElement('h2', undefined, message)
        ),
        React.createElement(
          'p',
          {
            className: 'App-intro',
          },
          'To get started, edit',
          React.createElement('code', undefined, ' src/App.re '),
          'and save to reload.'
        )
      );
    },
    /* initialState */ component[/* initialState */ 10],
    /* retainedProps */ component[/* retainedProps */ 11],
    /* reducer */ component[/* reducer */ 12],
    /* jsElementWrapped */ component[/* jsElementWrapped */ 13],
  ];
}
```

# Pros

Elm is often praised for it's helpful compiler errors and I also found them really helpful. They do not only give you the error, but usually also have a useful hint, which is often already the solution to the problem or at least an explanation of the problem.

Getting more used to writing Elm, I found myself being more confident with the code I wrote. It felt like was able to break down issues into smaller (and probably more reasonable) parts than I could with React or Vue.js. Making sure that the compiler isn't throwing any error for each of these steps more or less guaranteed that the final result is working as expected. When writing JavaScript, I usually work on much larger blocks of code and making sure that everything works as expected is done with tests later.

Time-travelling debugger

# Other

The Elm community in general is really helpful and open to help people who want to learn the language. However, what I found quite annoying is that there seems to be a religious belief that everything can be implemented in Elm and it always makes sense to implement everything in Elm. Considering the points mentioned above,

// Examples
