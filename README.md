# Dog Finder

This application allows you to upload an image of a dog.

The app will return the dog's breed as well as an image gallery of dogs of same
breed.

## Available scripts

To start the project, simply run:

```bash
npm run start
```

To run the linter, execute the command:

```bash
npm run lint
```

optionally, you can append `:fix` to automatically fix any auto-fixable linting
issues.

To test you application, use:

```bash
npm run test
```

## Design choices

Based on my experience with functional components, breaking the logic out into
separate components felt like a cleaner approach especially for readability. The
API could be handled separate from the component.

## with more time

With more time I would:

- make the application beautiful.
- perfect the typing.
- ensure dog breeds with subtypes (i.e. toy poodle -> poodle-toy") were able to
  be called from the API.
- write a full suite of tests.
- upload to heroku.
- manage errors better.
- possibly restructure the application.
- get custom image upload code working.
- write clean git messages.
