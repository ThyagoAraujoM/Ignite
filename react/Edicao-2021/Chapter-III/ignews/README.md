# 📰 ig.news

> Aplicação de newsletter e conteúdo premium desenvolvida durante o **Ignite - Chapter III (Rocketseat, 2021)**.

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" />
  <img src="https://img.shields.io/badge/Stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white" />
  <img src="https://img.shields.io/badge/Prismic-5163BA?style=for-the-badge&logo=prismic&logoColor=white" />
</p>

---

## 🚀 Sobre o projeto

**ig.news** é uma plataforma de blog com conteúdo gratuito e premium.  
Os usuários podem se autenticar via **GitHub**, realizar uma **assinatura paga com Stripe**, e acessar artigos completos gerenciados pelo **Prismic CMS**.  
Os dados de autenticação e assinatura são armazenados com segurança no **Firebase**.

---

## 🧠 Funcionalidades

- 🔑 **Login com GitHub OAuth**
- 💳 **Assinatura via Stripe** (integração com Webhooks)
- 📰 **Prévia gratuita dos posts**
- 🧾 **Conteúdo completo para assinantes ativos**
- 🧠 **Integração com Prismic CMS** para gerenciamento de conteúdo
- ☁️ **Armazenamento no Firebase Firestore**
- ⚡ **Geração estática e revalidação automática** com Next.js (SSG + ISR)

---

## 🧱 Tecnologias utilizadas

| Categoria                  | Tecnologias                                    |
| -------------------------- | ---------------------------------------------- |
| **Frontend**               | React, Next.js, TypeScript, SASS (CSS Modules) |
| **CMS**                    | Prismic                                        |
| **Autenticação**           | GitHub OAuth (NextAuth)                        |
| **Pagamento**              | Stripe                                         |
| **Banco de Dados**         | Firebase Firestore                             |
| **Infraestrutura e Build** | Next.js (SSG / ISR)                            |

---

## ⚙️ Como rodar o projeto localmente

### 1️⃣ Clone o repositório

```bash
  git clone https://github.com/ThyagoAraujoM/Ignite.git
  cd Ignite/Edicao-2021/Chapter-III/ignews
```

### 2️⃣ Instale as dependências

```bash
  npm install
  # ou
  yarn
```

### 3️⃣ Crie o arquivo .env.local e adicione as variáveis de ambiente

```bash
  GITHUB_CLIENT_ID=
  GITHUB_CLIENT_SECRET=
  STRIPE_API_KEY=
  STRIPE_SUCCESS_URL=
  STRIPE_CANCEL_URL=
  STRIPE_WEBHOOK_SECRET=
  NEXT_PUBLIC_STRIPE_PUBLIC_KEY=
  PRISMIC_ACCESS_TOKEN=
  FIREBASE_API_KEY=
  FIREBASE_AUTH_DOMAIN=
  FIREBASE_PROJECT_ID=
  FIREBASE_STORAGE_BUCKET=
  FIREBASE_MESSAGING_SENDER_ID=
  FIREBASE_APP_ID=
```

### 4️⃣ Execute o projeto

```bash
  npm run dev

  # ou

  yarn dev
```

### 5️⃣ Acesse no navegador

👉 http://localhost:3000

### 📁 Estrutura de pastas

```bash
  /pages
  ├── api/ → Rotas de API (ex: webhooks Stripe)
  ├── posts/ → Páginas dinâmicas dos posts
  ├── index.tsx → Página inicial com lista de posts
  └── \_app.tsx → Configurações globais

  /src
  ├── components/ → Componentes reutilizáveis
  ├── services/ → Configuração de Stripe, Prismic e Firebase
  ├── styles/ → Estilos globais (SASS / CSS Modules)
  └── utils/ → Funções auxiliares
``` 

## ⚙️ Considerações técnicas

- As páginas de posts utilizam **SSG (Static Site Generation)** via `getStaticProps` e `getStaticPaths`.  
- O parâmetro `fallback: "blocking"` permite gerar páginas sob demanda.  
- O conteúdo é revalidado com o `revalidate`, garantindo atualização automática sem rebuild.  
- A autenticação via **GitHub OAuth** é feita com **NextAuth**.  
- As assinaturas são processadas via **Stripe**, e atualizadas via **Webhooks**.  
- O **Firebase Firestore** é usado como banco de dados para armazenar status de usuários e assinaturas.  
- O conteúdo dos posts vem diretamente do **Prismic CMS**, permitindo edição visual.  

## 🤝 Como contribuir

Sinta-se à vontade para abrir issues e enviar pull requests com melhorias, correções ou novas ideias.  
Toda contribuição é bem-vinda! 💙  

## 📝 Licença

Distribuído sob a licença **MIT**.  
Veja o arquivo [LICENSE](LICENSE) para mais informações.  

<p align="center">Feito com 💜 durante o Ignite da <a href="https://rocketseat.com.br/" target="_blank"><b>Rocketseat</b></a> 🚀</p>
