# ⚙️ CONFIGURAÇÃO DO NETLIFY - IMPORTANTE!

## 🎯 Configurações de Deploy

Ao conectar o repositório no Netlify, use EXATAMENTE estas configurações:

### ✅ Build Settings:

```
Base directory:        (deixe em branco)
Build command:         (deixe em branco)
Publish directory:     .
```

**IMPORTANTE:** O "Publish directory" deve ser apenas um ponto ( . ) ou deixar em branco.
**NÃO use:** dist, build, ou qualquer outro nome de pasta.

---

## 🔧 Passo a Passo no Netlify

### 1. Após conectar o GitHub:

Na tela "Site settings for...", você verá:

```
Branch to deploy: main
```

### 2. Expanda "Show advanced":

Se aparecer, configure:
- Build command: **deixe vazio**
- Publish directory: **. (apenas um ponto)** ou **deixe vazio**

### 3. Clique em "Deploy site"

---

## 🚨 Se der erro de "dist directory":

1. Vá em **Site settings** → **Build & deploy** → **Build settings**
2. Clique em **Edit settings**
3. Em **Publish directory**, coloque apenas: `.` (um ponto)
4. Em **Build command**, deixe vazio
5. Salve e faça **Trigger deploy** → **Deploy site**

---

## 📁 Estrutura Esperada pelo Netlify:

```
(raiz do repositório)
├── index.html       ← Netlify vai servir este arquivo
├── styles.css
├── script.js
├── logo.png
├── _redirects      ← Netlify vai usar este arquivo
└── demais arquivos
```

O arquivo `_redirects` já está configurado e funcionará automaticamente.

---

## ✅ Checklist de Verificação:

- [ ] Base directory: (vazio)
- [ ] Build command: (vazio)  
- [ ] Publish directory: `.` ou (vazio)
- [ ] Branch: main
- [ ] Arquivo _redirects presente na raiz

---

## 🎬 Deploy Manual Alternativo (100% Garantido)

Se ainda tiver problemas com GitHub:

1. Acesse: https://app.netlify.com/drop
2. Compacte APENAS os arquivos (sem a pasta pai):
   - index.html
   - styles.css
   - script.js
   - logo.png
   - *.png
   - _redirects
3. Arraste o ZIP ou os arquivos direto
4. Pronto! ✨

---

## 📞 Suporte

Se persistir o erro, compartilhe o log completo do deploy.
