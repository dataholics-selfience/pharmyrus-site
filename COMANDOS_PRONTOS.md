# 🚀 COMANDOS PRONTOS - COPIE E COLE

## 📝 ESCOLHA UMA DAS 3 OPÇÕES:

---

## ⚡ OPÇÃO 1: DEPLOY MANUAL (MAIS RÁPIDO - 1 MINUTO)

### Passo único:
1. Acesse: https://app.netlify.com/drop
2. Arraste a pasta `pharmyrusite-main` inteira
3. Pronto! ✅

**ESSA É A OPÇÃO MAIS FÁCIL E RÁPIDA!**

---

## 🔄 OPÇÃO 2: CORRIGIR O GITHUB (Se já tem repo)

### Copie e cole no terminal (um de cada vez):

```bash
# 1. Entre na pasta do seu projeto
cd /caminho/para/sua/pasta/pharmyrusite-main

# 2. Baixe as mudanças do GitHub
git pull

# 3. Remova o arquivo problemático
git rm netlify.toml

# 4. Copie o netlify.toml correto do zip novo para sua pasta
# (Abra o zip que te enviei e copie o netlify.toml de lá)

# 5. Adicione o arquivo correto
git add netlify.toml

# 6. Faça o commit
git commit -m "Fix netlify.toml configuration"

# 7. Envie para o GitHub
git push
```

### Depois no Netlify:
1. Vá em **Deploys**
2. **Trigger deploy** → **Clear cache and deploy site**

✅ Pronto!

---

## 🆕 OPÇÃO 3: COMEÇAR DO ZERO (Recomendado se nada funcionar)

### 1. Crie um novo repositório no GitHub:
- Vá em: https://github.com/new
- Nome: `pharmyrus-site-novo`
- Clique em "Create repository"

### 2. Copie e cole no terminal:

```bash
# 1. Entre na pasta do projeto do ZIP NOVO que te enviei
cd /caminho/para/pharmyrusite-main

# 2. Inicialize o Git
git init

# 3. Adicione todos os arquivos
git add .

# 4. Faça o primeiro commit
git commit -m "Initial commit - Pharmyrus website fixed"

# 5. Conecte com o GitHub (SUBSTITUA seu-usuario pelo seu usuário)
git remote add origin https://github.com/seu-usuario/pharmyrus-site-novo.git

# 6. Renomeie a branch
git branch -M main

# 7. Envie para o GitHub
git push -u origin main
```

### 3. No Netlify:
1. **Site settings** → Delete o site antigo
2. **Add new site** → **Import from GitHub**
3. Selecione `pharmyrus-site-novo`
4. Deixe tudo padrão e clique em **Deploy**

✅ Vai funcionar!

---

## 🎯 ARQUIVO netlify.toml CORRETO

Se você abrir o `netlify.toml`, ele deve ter APENAS isto:

```toml
# Configuração mínima para site estático
[build]
  publish = "."
```

**NADA MAIS!** Se tiver outras linhas, delete-as.

---

## ❓ QUAL ESCOLHER?

| Opção | Velocidade | Dificuldade | Quando Usar |
|-------|-----------|-------------|-------------|
| 1️⃣ Manual | ⚡ 1 min | 😊 Fácil | Se quer resultado JÁ |
| 2️⃣ Corrigir | ⏱️ 5 min | 🤔 Médio | Se quer manter o repo atual |
| 3️⃣ Do Zero | ⏱️ 10 min | 😅 Médio | Se nada mais funcionar |

---

## 🆘 SE AINDA DER ERRO

Me mande:
1. A URL do seu repositório GitHub
2. O conteúdo completo do seu arquivo `netlify.toml`
3. Um print da tela de configuração do Netlify

---

**Qualquer dúvida, me chama! 🚀**
