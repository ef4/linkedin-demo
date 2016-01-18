# Linkedin-demo

This is a demo I [presented at LinkedIn on Apr 30, 2015](https://www.youtube.com/watch?v=vq_BcIFM8Rc). It recreates
part of the linkedin.com application in order to demonstrate some
animation techinques.

## Running the demo

This is an ember-cli app. For data, it proxies through to the real
LinkedIn.com, so you need to give it your cookies.

1. Log in to LinkedIn.
2. Use Chrome Dev Tools to inspect a network request to the
   www.linkedin.com domain. Copy the content of the "Cookie" header
   and paste it into a file named "linkedin-cookie" in this directory.
3. `ember s`

In my talk I also showed the use of mock data, but I'm not including
the mock data in this repo because I don't want to public copies of
real people's profiles.
