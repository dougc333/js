first example blog

2 servers + event bus + react app w/create post title, display posts, display comments/post, create comment.

How to decompose app into services:

- each reseource has a service
- resources = post, comment
  2 services = post service, comment service.
  post service:
- submit post,
- display post

comment service:

- create comment to post
- list all comments
  Each service is a node REST server.
  Better to make one webservice.js? then decompose into 2 services?
