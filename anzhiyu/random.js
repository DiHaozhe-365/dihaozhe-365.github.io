var posts=["posts/51000/","posts/34001/","posts/21000/","posts/10000/","posts/34000/","posts/31000/","posts/31001/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};