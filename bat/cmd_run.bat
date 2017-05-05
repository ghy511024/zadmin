@echo off  
%~d0
cd %~dp0
cd ../
fis3 server start -p 9010  && fis3 release -w -c


 