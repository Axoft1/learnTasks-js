// 1 Почему нам нужен Origin?  
// потому что иногда Referer отсутствует
// Referer является необязательным HTTP-заголовком
// потому что Referer ненадёжен, был изобретён Origin. 
// Браузер гарантирует наличие правильного Origin при запросах на другой источник.


// Accept: */*
// Accept-Charset: utf-8
// Accept-Encoding: gzip,deflate,sdch
// Connection: keep-alive
// Host: google.com
// Origin: http://javascript.info
// Referer: http://javascript.info/some/url