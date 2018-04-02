---
path: "/hello-world"
date: "2017-07-12T17:12:33.962Z"
title: "Contact forms in Gatsby: Netlify"
tags: ["gatsby", "netlify", "contact form"]
---

Contact forms and static websites are usually not

```html
    <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
          <p>
            <label>
              Your name:<br />
              <input type="text" name="name"/>
            </label>
          </p>
          <p>
            <label>
              Message:<br />
              <textarea name="message"/>
            </label>
          </p>
        </form>
```
