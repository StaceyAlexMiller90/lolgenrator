const express = require('express')

const port = process.env.PORT || 3000

const app = express()

process.env.PWD = process.cwd()

app.use(express.static(process.env.PWD + '/img'));

const onListen = () => {
  console.log(`Listening on: ${port}`)
}

app.listen(port, onListen)

const jokes = {
  joke1: "Did you hear about the mathmatician who's afraid of negative numbers? <br><br> He'll stop at nothing to avoid them",
  joke2: "Yesterday I saw a guy spill all his Scrabble letters on the road. I asked him 'What's the word on the street?'",
  joke3: "And the lord said unto John, 'Come forth and you will receive eternal life.'</summary><dt>But John came fifth, and won a toaster</dt>",
  joke4: "<img src='/debugger.jpg' alt='coding meme'></img>",
  joke5: "By age 35 you should have reached that stage of time confusion where you're convinced the 90s was only 10 years ago",
  joke6: "<img src='/agememe.jpg' alt='age meme'></img>"
}

const urlRequest = (request, response) => {
  response.send(firstPage)
}

const onRequest = (request, response) => {
  const userAge = request.params.age
  const meme = request.params.meme
  const name = request.params.name
  const random = Math.floor(Math.random()*3)+1

    if(userAge >= 35 && meme === "no") {
    response.send(render(jokes.joke5, name))
  } else if(userAge >= 35 && meme === "yes") {
    response.send(render(jokes.joke6, name))
  } else if(userAge < 35 && meme === "yes") {
    response.send(render(jokes.joke4, name))
  } else {
    const key = `joke${random}`
    response.send(render(jokes[key], name))
  }
}

const firstPage = 
          `<html>
          <head>
              <link href="https://fonts.googleapis.com/css?family=Nunito&display=swap" rel="stylesheet">
               <title>My favorite movie</title>
               <style>
               body {
                 background-color: #0f0e17;
                 color: white;
                 font-size: 3rem;
                 font-family: 'Nunito', sans-serif;
                 text-align: center;
               }
               .tenor-gif-embed {
                  width: 200;
                  height: 200;
               }
               </style>
          </head>
          <body>
            <h1> LOL GENERATOR </h1>
              <p>Paste your answers to the following questions at the end of this URL</p>
              <p>/Name / Age / Fancy a meme? yes or no</p>
              <div class="tenor-gif-embed" data-postid="4936718" data-share-method="host" data-width="100%" data-aspect-ratio="1.3555555555555556"><a href="https://tenor.com/view/michael-scott-laughter-steve-carell-lol-laughing-gif-4936718">Michael Scott Laughter GIF</a> from <a href="https://tenor.com/search/michaelscott-gifs">Michaelscott GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>
          </body>
          </html>
          `

const render = (joke, name) => {

 switch (joke) {
   case jokes.joke1:
     return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css?family=Nunito&display=swap" rel="stylesheet">
        <style>
        body {
          font-family: 'Nunito', sans-serif;
          background: linear-gradient(to bottom, rgba(255, 255, 248, 0.2), rgba(255, 255, 248, 0.2)), url(/maths.jpg) no-repeat center center;
          background-size: cover;
            }
        h1 {
          font-size: 3rem;
        }
        marquee {
          display: flex;
          text-align: center;
          font-size: 5rem;
        }
        .container {
          display: flex;
          justify-content: center;
        }
        </style>
        <title>A Little joke for ${name}</title>
      </head>
      <body>
        <h1>Wait for it.... </h1>
          <div class ="container">
            <marquee direction="up" width="1000" height="1000" scrollamount="10">${joke}</marquee>
          </div>
      </body>
      </html>
      `

   case jokes.joke2:
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css?family=Nunito&display=swap" rel="stylesheet">
        <style>
        body {
          font-family: 'Nunito', sans-serif;
          background: linear-gradient(to bottom, rgba(255, 255, 248, 0.1), rgba(255, 255, 248, 0.1)), url(/street.jpg) no-repeat center center;
          margin: auto;
        }
        .container {
          display: flex;
          justify-content: center;
        }
        h1 {
          font-size: 5rem;
          text-align: center;
          background: white;
          margin: 100px;
        }
        </style>
        <title>A Little joke for ${name}</title>
      </head>
      <body>
        <div class = "container">
           <h1>${joke}</h1>
        </div>
      </body>
      </html>
      `

case jokes.joke3:
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://fonts.googleapis.com/css?family=Playball&display=swap" rel="stylesheet">
      <style>
      body {
        font-family: 'Playball', cursive;
        background: linear-gradient(to bottom, rgba(255, 255, 248, 0.4), rgba(255, 255, 248, 0.4)), url(/religion.jpg) no-repeat center center;
        background-size: cover;
        margin: auto;
      }
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 70px;
      }
      details {
        font-size: 6rem;
        text-align: center;
        background: #f9f4ef, 0.2;
      }
      </style>
      <title>A Little joke for ${name}</title>
    </head>
    <body>
      <div class="container">
        <details>
          <summary>${joke}
        </details>
      </div>
    </body>
    </html>
    `

case jokes.joke4:
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://fonts.googleapis.com/css?family=Nunito&display=swap" rel="stylesheet">
      <style>
      body {
        font-family: 'Nunito', sans-serif;
        background-color: black;
      }
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 80px;
      }
      img {
        display: block;
        margin: auto;
        width: 50%;
      }
      </style>
      <title>A Little joke for ${name}</title>
    </head>
    <body>
      <div class ="container">
        ${joke}
      </div>
    </body>
    </html>
    `

case jokes.joke5:
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://fonts.googleapis.com/css?family=Viga&display=swap" rel="stylesheet">
      <style>
      body {
        font-family: 'Viga', sans-serif;
        background: url(/90s.jpg) no-repeat;
        background-size: cover;
        margin: auto;
      }
      .container {
        display: flex;
        height: 80vh;
        margin: 20px;
        align-items: flex-end;
        justify-content: flex-end;
      }
      h1 {
        background: black;
        color: white;
        font-size: 3rem;
      }
      </style>
      <title>A Little joke for ${name}</title>
    </head>
    <body>
      <div class="container">
        <h1>${joke}</h1>
      </div>
    </body>
    </html>
    `

case jokes.joke6:
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://fonts.googleapis.com/css?family=Nunito&display=swap" rel="stylesheet">
      <style>
      body {
        font-family: 'Nunito', sans-serif;
        background-color: #faeee7;
      }
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
      }
      img {
        display: block;
        margin: auto;
        width: 50%;
      }
      </style>
      <title>A Little joke for ${name}</title>
    </head>
    <body>
      <div class ="container">
        ${joke}
      </div>
    </body>
    </html>
    `
 }
}

app.get('/', urlRequest)
app.get('/:name/:age/:meme/', onRequest)


