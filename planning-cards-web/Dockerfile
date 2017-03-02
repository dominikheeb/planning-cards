FROM microsoft/nanoserver

RUN powershell -command Install-PackageProvider –Name chocolatey
RUN powershell -command Import-PackageProvider -Name Chocolatey -force
RUN powershell -command choco install nodejs.install

ENTRYPOINT ["node"]
