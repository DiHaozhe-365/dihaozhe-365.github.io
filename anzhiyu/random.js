var posts=["posts/demo0000.html","posts/java0000.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};