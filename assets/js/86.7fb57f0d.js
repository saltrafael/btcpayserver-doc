(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{724:function(e,t,r){"use strict";r.r(t);var o=r(35),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"local-development"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#local-development"}},[e._v("#")]),e._v(" Local development")]),e._v(" "),r("h2",{attrs:{id:"prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),r("p",[e._v("For the "),r("strong",[e._v("development environment")]),e._v(" you need to install these tools:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://dotnet.microsoft.com/download",target:"_blank",rel:"noopener noreferrer"}},[e._v(".NET Core 3.1 SDK"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Docker: "),r("a",{attrs:{href:"https://docs.docker.com/docker-for-windows/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Windows"),r("OutboundLink")],1),e._v(" | "),r("a",{attrs:{href:"https://docs.docker.com/docker-for-mac/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mac OS"),r("OutboundLink")],1),e._v(" | "),r("a",{attrs:{href:"https://docs.docker.com/install/linux/docker-ce/ubuntu/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Linux"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"dependencies"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[e._v("#")]),e._v(" Dependencies")]),e._v(" "),r("p",[e._v("To execute tests and run the project for debugging, you need to run a number of "),r("strong",[e._v("dependencies")]),e._v(".")]),e._v(" "),r("p",[e._v("We wrapped all our dependencies in a docker-compose file that you can use to bootstrap the development environment:\nThe file "),r("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/blob/master/BTCPayServer.Tests/docker-compose.yml",target:"_blank",rel:"noopener noreferrer"}},[e._v("BTCPayServer.Tests/docker-compose.yml"),r("OutboundLink")],1),e._v(" can be used to spin everything up:")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/btcpayserver/btcpayserver.git\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" btcpayserver/BTCPayServer.Tests\n"),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker-compose")]),e._v(" up dev\n")])])]),r("h2",{attrs:{id:"which-ide"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#which-ide"}},[e._v("#")]),e._v(" Which IDE?")]),e._v(" "),r("p",[e._v("We recommend using Visual Studio Code (cross platform) or Visual Studio 2019 (Windows Only) or Rider (cross platform).\nYou can of course use VIM if you are hardcore, .NET Core is command-line environment friendly.")]),e._v(" "),r("p",[e._v("Visual Studio Code, Visual Studio and Rider will run the launch profile "),r("code",[e._v("Bitcoin")]),e._v(".\nThis will run a "),r("strong",[e._v("BTCPay Server instance connecting to the services in your Docker service")]),e._v(", so you can easily debug and step through the code.")]),e._v(" "),r("h2",{attrs:{id:"build-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#build-configuration"}},[e._v("#")]),e._v(" Build configuration")]),e._v(" "),r("p",[e._v("A build configuration defines how to "),r("strong",[e._v("build BTCPay Server")]),e._v(". For example, whether to include some source files, whether to optimize for debugging or performance.")]),e._v(" "),r("p",[e._v("There are several build configurations:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("Debug")])]),e._v(" "),r("li",[r("code",[e._v("Release")])]),e._v(" "),r("li",[r("code",[e._v("Altcoins-Debug")])]),e._v(" "),r("li",[r("code",[e._v("Altcoins-Release")])])]),e._v(" "),r("p",[e._v("How to use a different one during your local development depends on your IDE.\nBy default "),r("code",[e._v("Debug")]),e._v(" is used, this is a Bitcoin only build excluding any altcoin dependencies. How to use a different one during your local development depends on your IDE.")]),e._v(" "),r("p",[e._v("You can select which build to use via the "),r("code",[e._v("-c")]),e._v(" switch in "),r("code",[e._v("dotnet")]),e._v(" command line. If you use command line and want to run a Release build:")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("dotnet run -c Release\n")])])]),r("h2",{attrs:{id:"launch-profiles"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#launch-profiles"}},[e._v("#")]),e._v(" Launch profiles")]),e._v(" "),r("p",[e._v("When you "),r("strong",[e._v("start BTCPay Server locally for local development")]),e._v(", it needs the right parameter so it can connect to the development time dependencies in the docker-compose file.")]),e._v(" "),r("p",[e._v("Those parameters are wrapped into the dotnet concept of "),r("code",[e._v("launch profile")]),e._v(".")]),e._v(" "),r("p",[e._v("The launch profiles are specified in the "),r("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/blob/master/BTCPayServer/Properties/launchSettings.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("launchSettings.json"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("There are currently three launch profiles:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("Bitcoin")])]),e._v(" "),r("li",[r("code",[e._v("Bitcoin-HTTPS")])]),e._v(" "),r("li",[r("code",[e._v("Altcoins-HTTPS")])])]),e._v(" "),r("p",[e._v("By default, "),r("code",[e._v("Bitcoin")]),e._v(" is used. How to use a different one during your local development depends on your IDE.")]),e._v(" "),r("p",[e._v("If you use command line, "),r("code",[e._v("dotnet run")]),e._v(" allows you to select the launch profile of your choice:")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("dotnet run --launch-profile Bitcoin\n")])])]),r("h2",{attrs:{id:"running-tests"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#running-tests"}},[e._v("#")]),e._v(" Running tests")]),e._v(" "),r("p",[e._v("Running tests is functioning in the exact same way as running the development time BTCPay Server.")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" BTCPayServer.Tests\ndotnet "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v("\n")])])]),r("p",[e._v("The concept of "),r("code",[e._v("launch profile")]),e._v(" does not apply for tests, but the concept of build configuration does. For example, if I want to run tests on the Release build:")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("dotnet "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v(" -c Release\n")])])]),r("p",[e._v("The tests are already configured to use the development time dependencies in the docker-compose presented earlier.")]),e._v(" "),r("p",[e._v("You can use the "),r("code",[e._v("--f")]),e._v(" (filter) switch to run a specific test.")]),e._v(" "),r("p",[e._v("If you use an IDE, consult your IDE documentation to run tests or switch to different configurations.")]),e._v(" "),r("h2",{attrs:{id:"altcoin-support-development"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#altcoin-support-development"}},[e._v("#")]),e._v(" Altcoin support development")]),e._v(" "),r("p",[e._v("By default, your IDE or simple "),r("code",[e._v("dotnet run")]),e._v(" will use "),r("code",[e._v("Bitcoin")]),e._v(" launch profile on "),r("code",[e._v("Debug")]),e._v(" build.")]),e._v(" "),r("ul",[r("li",[e._v("This means that BTCPay Server will be hosted on a local HTTP port, building without altcoin support,")]),e._v(" "),r("li",[e._v("Run BTCPay Server to connect to Bitcoin only dependencies specified in "),r("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/blob/master/BTCPayServer.Tests/docker-compose.yml",target:"_blank",rel:"noopener noreferrer"}},[e._v("BTCPayServer.Tests/docker-compose.yml"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("p",[e._v("If you want to "),r("strong",[e._v("develop with altcoins support")]),e._v(" you need to use the "),r("code",[e._v("Altcoins-HTTPS")]),e._v(" launch profile, on the "),r("code",[e._v("Altcoins-Debug")]),e._v(" build, and run the "),r("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/blob/master/BTCPayServer.Tests/docker-compose.altcoins.yml",target:"_blank",rel:"noopener noreferrer"}},[e._v("BTCPayServer.Tests/docker-compose.altcoins.yml"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("If using command line:")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" BTCPayServer.Tests\n"),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker-compose")]),e._v(" -f docker-compose.altcoins.yml up dev\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("/BTCPayServer\ndotnet run -c Altcoins-Debug --launch-profile Altcoins-HTTPS\n")])])]),r("p",[e._v("For tests")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" BTCPayServer.Tests\ndotnet "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v(" -c Altcoins-Debug\n")])])]),r("h2",{attrs:{id:"https-support-for-local-development"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#https-support-for-local-development"}},[e._v("#")]),e._v(" HTTPS support for local development")]),e._v(" "),r("p",[e._v("Some browser security features may require that you use "),r("strong",[e._v("HTTPS")]),e._v(" to be properly tested.")]),e._v(" "),r("p",[e._v("In this case, use "),r("code",[e._v("Bitcoin-HTTPS")]),e._v(" (or "),r("code",[e._v("Altcoin-HTTPS")]),e._v(") launch profile. This will create a self signed certificate for your development purpose.")]),e._v(" "),r("p",[e._v("However, your browser will not trust it, making it difficult to debug.")]),e._v(" "),r("p",[e._v("You can instruct your OS to trust this development time certificate by running:")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("dotnet dev-certs https --trust\n")])])]),r("h2",{attrs:{id:"videos"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#videos"}},[e._v("#")]),e._v(" Videos")]),e._v(" "),r("p",[e._v("For more information check out these videos:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://youtube.com/watch?v=ZePbMPSIvHM",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to contribute to BTCPay Server Development (Windows)"),r("OutboundLink")],1),e._v(" by Nicolas Dorier")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://youtube.com/watch?v=j486T_Rk-yw",target:"_blank",rel:"noopener noreferrer"}},[e._v("Setting up BTCPayServer development environment on Linux (Ubuntu)"),r("OutboundLink")],1),e._v(" by RockStarDev")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://youtube.com/watch?v=GWR_CcMsEV0",target:"_blank",rel:"noopener noreferrer"}},[e._v("BTCPay Server Development - Testing pull request, payments (MacOS)"),r("OutboundLink")],1),e._v(" by Pavlenex")])]),e._v(" "),r("p",[e._v("and these notes:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/blob/master/BTCPayServer.Tests/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to get started with development"),r("OutboundLink")],1),e._v(" by Nicolas Dorier (covering relevant docker commands, paying regtest invoices)")])])])}),[],!1,null,null,null);t.default=s.exports}}]);