FROM microsoft/nanoserver

RUN powershell -executionpolicy bypass -command Invoke-Expression (Invoke-WebRequest 'https://chocolatey.org/install.ps1' -UseBasicParsing)
RUN powershell -command choco install nodejs.install

ENTRYPOINT ["node"]
