# 🚀 Guia de Deploy - Pharmyrus Website

## Preparação Concluída ✅

Os seguintes arquivos foram criados/configurados:
- ✅ netlify.toml (configuração do Netlify)
- ✅ _redirects (redirecionamento de rotas)
- ✅ .gitignore (arquivos a ignorar)
- ✅ package.json (informações do projeto)
- ✅ README.md (documentação)

## Método 1: Deploy via GitHub + Netlify (RECOMENDADO)

### Passo 1: Criar Repositório no GitHub

1. Acesse https://github.com/new
2. Nome do repositório: `pharmyrus-site` (ou outro nome de sua preferência)
3. Deixe como **Public** ou **Private**
4. **NÃO** marque "Initialize this repository with a README"
5. Clique em "Create repository"

### Passo 2: Fazer Upload via Terminal

Abra o terminal na pasta do projeto e execute:

```bash
# Inicializar git
git init

# Adicionar todos os arquivos
git add .

# Fazer primeiro commit
git commit -m "Initial commit - Pharmyrus website"

# Adicionar repositório remoto (substitua SEU-USUARIO pelo seu usuário do GitHub)
git remote add origin https://github.com/SEU-USUARIO/pharmyrus-site.git

# Renomear branch para main
git branch -M main

# Fazer push
git push -u origin main
```

### Passo 3: Conectar com Netlify

1. Acesse https://app.netlify.com
2. Faça login ou crie uma conta
3. Clique em **"Add new site"** → **"Import an existing project"**
4. Escolha **"Deploy with GitHub"**
5. Autorize o Netlify a acessar seus repositórios
6. Selecione o repositório **pharmyrus-site**
7. **CONFIGURAÇÃO IMPORTANTE:**
   - Branch to deploy: **main**
   - Build command: **(deixe em branco)**
   - Publish directory: `.` **(apenas um ponto)** ou deixe em branco
   - Clique em **"Deploy site"**

✅ Pronto! Seu site estará no ar em alguns segundos!

⚠️ **ATENÇÃO:** Se aparecer erro de "dist directory", veja o arquivo NETLIFY_CONFIG.md

---

## Método 2: Deploy Manual via Netlify Drop

Se você preferir um método mais rápido sem usar GitHub:

1. Acesse https://app.netlify.com/drop
2. Arraste a pasta **pharmyrusite-main** inteira para a área indicada
3. Aguarde o upload e deploy automático

✅ Seu site estará online imediatamente!

---

## Método 3: Upload via GitHub Desktop (Interface Gráfica)

Se você preferir uma interface gráfica:

1. Baixe o GitHub Desktop: https://desktop.github.com
2. Instale e faça login
3. Clique em **"File"** → **"Add local repository"**
4. Selecione a pasta **pharmyrusite-main**
5. Clique em **"Create repository"**
6. Clique em **"Publish repository"**
7. Escolha o nome e visibilidade
8. Clique em **"Publish repository"**

Depois siga o **Passo 3** do Método 1 para conectar com Netlify.

---

## Configurações Pós-Deploy

### Custom Domain (Opcional)

Se você quiser usar um domínio próprio:

1. No painel do Netlify, vá em **"Domain settings"**
2. Clique em **"Add custom domain"**
3. Digite seu domínio (ex: www.pharmyrus.com)
4. Siga as instruções para configurar o DNS

### SSL/HTTPS

O Netlify configura SSL automático. Se não estiver ativo:

1. Vá em **"Domain settings"** → **"HTTPS"**
2. Clique em **"Verify DNS configuration"**
3. Clique em **"Provision certificate"**

---

## Atualizações Futuras

Para atualizar o site após mudanças:

### Via Git (linha de comando):
```bash
git add .
git commit -m "Descrição das mudanças"
git push
```

### Via GitHub Desktop:
1. Abra o GitHub Desktop
2. Veja as mudanças no painel esquerdo
3. Digite uma descrição do commit
4. Clique em **"Commit to main"**
5. Clique em **"Push origin"**

O Netlify detecta automaticamente e faz o deploy das mudanças!

---

## Troubleshooting

### Erro de Build
- Verifique se todos os arquivos foram enviados corretamente
- Confira se o `netlify.toml` está na raiz do projeto

### Imagens não carregam
- Certifique-se de que os arquivos PNG estão na raiz
- Verifique os paths no HTML (devem ser relativos, ex: `logo.png`)

### Site não atualiza
- Limpe o cache do navegador (Ctrl + Shift + R)
- No Netlify: **"Deploys"** → **"Trigger deploy"** → **"Clear cache and deploy site"**

---

## Suporte

Para mais ajuda:
- Documentação Netlify: https://docs.netlify.com
- Documentação GitHub: https://docs.github.com

---

**Pharmyrus © 2025 - Todos os direitos reservados**
