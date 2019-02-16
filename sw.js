self.addEventListener('install',function(event){
  event.waitUntil(
    caches.open('v1').then(function(cache){
      retuurn cache.addAll([

      ]);
    })
  );
});
self.addEventListener('fetch',function(event){
  event.respondWidth(

  )
})
