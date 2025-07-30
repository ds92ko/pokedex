# 📕 Pokédex

![Pokédex](https://pokedex-ds92ko.vercel.app/opengraph-image)

## 👀 Introduction

Pokédex는 PokeAPI를 활용해 제작된 포켓몬 도감 어플리케이션입니다.
한국어를 지원하며, 포켓몬 검색 및 즐겨찾기 기능 등 다양한 상호작용이 가능합니다.

### 🚀 Live Demo

> 앱은 아래 URL에서 실제로 사용해볼 수 있습니다.

https://pokedex-ds92ko.vercel.app

### 🌟 Features

**한국어 지원**

- 앱 내 모든 텍스트는 한국어로 제공됩니다.
- PokeAPI에서 지원하지 않는 한국어는 영문을 번역해 사용합니다.

**검색 기능**

- 포켓몬 도감 번호로 포켓몬을 검색할 수 있습니다.
- 최근 검색한 포켓몬의 기록을 저장/관리할 수 있습니다.

**정보 확인**

- 포켓몬의 속성, 타입, 능력치, 진화 단계 등의 상세 정보를 확인할 수 있습니다.

**공유 기능**

- 페이지 공유 및 링크 복사 기능을 지원합니다.

**즐겨찾기**

- 즐겨찾기에 포켓몬 추가/삭제가 가능합니다.
- 포켓몬 놀이터에서 즐겨찾기한 포켓몬들이 자유롭게 움직이는 모습을 볼 수 있습니다.

<br />

## 🙌 About the Project

### 🛠️ Stacks

| **Category**         | **Stacks**                                                                                                                                                                                                                                                                                                                           |
| :------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Environment**      | <img src="https://img.shields.io/badge/visual studio code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> |
| **Development**      | <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">       |
| **Styling**          | <img src="https://img.shields.io/badge/vanillaextract-F786AD?style=for-the-badge&logo=vanillaextract&logoColor=white">                                                                                                                                                                                                               |
| **State Management** | <img src="https://img.shields.io/badge/zustand-101417?style=for-the-badge&logo=zustand&logoColor=white"> <img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white">                                                                                                              |
| **CI/CD**            | <img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">                                                                                                                                                                                                                               |

### 📦 API Reference

> 본 프로젝트는 [PokeAPI](https://pokeapi.co/)를 기반으로 데이터를 가져옵니다.

**사용된 엔드포인트**

- `GET /pokemon`
- `GET /pokemon/{id}`
- `GET /pokemon-species/{id}`
- `GET /evolution-chain/{id}`
- `GET /type/{type}`
- `GET /ability/{type}`

### 📅 Development Period

2025.07.10 ~ 2025.07.30

<br />

## 🪄 Getting Started

### ⚙️ Setup

> 저장소를 클론한 후, 프로젝트 디렉토리로 이동하세요

```bash
$ git clone https://github.com/ds92ko/pokedex.git
$ cd pokedex
```

### 📦 Installation

> 프로젝트의 모든 종속성을 설치하세요

```bash
$ npm install
```

### 🏃 Run the Application

> 개발 모드로 애플리케이션을 실행하세요

```bash
$ npm run dev
```

### 🎁 Package the Application

> 배포용으로 애플리케이션을 빌드하고 패키징하세요

```bash
$ npm run build
```
