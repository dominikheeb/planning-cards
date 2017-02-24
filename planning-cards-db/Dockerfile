FROM microsoft/iis:nanoserver

RUN powershell -command Install-PackageProvider -Name "Nuget" -Force
RUN powershell -command Import-PackageProvider -Name "Nuget"
RUN powershell -command Register-PackageSource -name nuget -ProviderName NuGet -Location https://www.nuget.org/api/v2 -Trusted
RUN powershell -command install-package -name RavenDB.Server -Destination C:\RavenDB
RUN powershell -command mv (Get-Item C:\RavenDB\RavenDB.Server.*\tools).FullName C:\RavenDB\Server
RUN powershell -command rm -R (Get-Item C:\RavenDB\RavenDB.Server.*\).FullName

WORKDIR C:/RavenDB/Server


EXPOSE 8080

ENTRYPOINT ["Raven.Server.exe"]