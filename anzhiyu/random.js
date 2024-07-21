var posts=["2024/07/21/hello-world/","2024/07/15/first/","2024/07/13/中考快乐/","2024/07/18/物理-1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };