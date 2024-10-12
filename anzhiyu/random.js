var posts=["2024/07/22/code/","2024/07/15/first/","2024/07/18/物理-1/","2024/07/13/中考快乐/","2024/08/19/middle/","2024/10/12/2024-10-12-sd/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };