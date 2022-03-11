# 1. React Native 개발 환경 설정 (Windows)

(1) choco 설치

> @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command " [System.Net.ServicePointManager]::SecurityProtocol = 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"

→ cmd 껏다켜고 설치 확인

> choco –version


(2) nodejs 설치

> choco install -y nodejs-lts

→ cmd 껏다켜고 설치확인

> node -–version
> npm --version


(3) 파이썬 설치 (설치 안되어 있으면)

> choco install -y python2

→ cmd 껏다켜고 설치확인

> python --version


(4) expo-cli 설치

> npm install --global expo-cli



# 2. React Native 라이브러리 추가

(1) 리엑트 네비게이션 추가

> npm install @react-navigation/native


(2) 리엑트 네비게이션 의존 패키지 설치

> expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view


(3) 스택 내비게이션, 탭 내비게이션 

> npm install @react-navigation/stack @react-navigation/bottom-tabs


(4) 스타일 작업 편의성 (styled-components)

> npm install styled-components


(5) 타입확인(prop-types)

> npm install prop-types


(6) 앱로딩 (expo-app-loading)

> expo install expo-app-loading


(7) expo 아이콘

> npm install @expo/vector-icons


(8) image-picker

> npm install expo-image-picker


(9) react-native-keyboard-aware-scroll-view

> npm install react-native-keyboard-aware-scroll-view

  
